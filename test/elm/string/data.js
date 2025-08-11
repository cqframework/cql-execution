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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "libraryId" : "TestSnippet",
         "libraryVersion" : "1",
         "startLine" : 8,
         "startChar" : 15,
         "endLine" : 8,
         "endChar" : 21,
         "message" : "String literal 'Hello' matches the identifier Hello. Consider whether the identifier was intended instead.",
         "errorType" : "semantic",
         "errorSeverity" : "warning",
         "type" : "CqlToElmError"
      }, {
         "libraryId" : "TestSnippet",
         "libraryVersion" : "1",
         "startLine" : 9,
         "startChar" : 15,
         "endLine" : 9,
         "endChar" : 21,
         "message" : "String literal 'World' matches the identifier World. Consider whether the identifier was intended instead.",
         "errorType" : "semantic",
         "errorSeverity" : "warning",
         "type" : "CqlToElmError"
      }, {
         "libraryId" : "TestSnippet",
         "libraryVersion" : "1",
         "startLine" : 11,
         "startChar" : 23,
         "endLine" : 11,
         "endChar" : 29,
         "message" : "String literal 'Hello' matches the identifier Hello. Consider whether the identifier was intended instead.",
         "errorType" : "semantic",
         "errorSeverity" : "warning",
         "type" : "CqlToElmError"
      }, {
         "libraryId" : "TestSnippet",
         "libraryVersion" : "1",
         "startLine" : 11,
         "startChar" : 33,
         "endLine" : 11,
         "endChar" : 39,
         "message" : "String literal 'World' matches the identifier World. Consider whether the identifier was intended instead.",
         "errorType" : "semantic",
         "errorSeverity" : "warning",
         "type" : "CqlToElmError"
      }, {
         "libraryId" : "TestSnippet",
         "libraryVersion" : "1",
         "startLine" : 14,
         "startChar" : 23,
         "endLine" : 14,
         "endChar" : 29,
         "message" : "String literal 'Hello' matches the identifier Hello. Consider whether the identifier was intended instead.",
         "errorType" : "semantic",
         "errorSeverity" : "warning",
         "type" : "CqlToElmError"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "750",
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
            "localId" : "211",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "209",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "210",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "208",
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
            "name" : "HelloWorld",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","HelloWorld",": " ]
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
               "localId" : "222",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Concatenate",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "216",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Hello",
                  "type" : "Literal"
               }, {
                  "localId" : "218",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "World",
                  "type" : "Literal"
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
               "s" : {
                  "r" : "225",
                  "s" : [ {
                     "value" : [ "","define ","Sentence",": " ]
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
               "localId" : "323",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Concatenate",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "318",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "Concatenate",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "313",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "Concatenate",
                     "signature" : [ ],
                     "operand" : [ {
                        "localId" : "308",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "Concatenate",
                        "signature" : [ ],
                        "operand" : [ {
                           "localId" : "303",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "Concatenate",
                           "signature" : [ ],
                           "operand" : [ {
                              "localId" : "298",
                              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "Concatenate",
                              "signature" : [ ],
                              "operand" : [ {
                                 "localId" : "293",
                                 "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                 "type" : "Concatenate",
                                 "signature" : [ ],
                                 "operand" : [ {
                                    "localId" : "288",
                                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                    "type" : "Concatenate",
                                    "signature" : [ ],
                                    "operand" : [ {
                                       "localId" : "283",
                                       "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                       "type" : "Concatenate",
                                       "signature" : [ ],
                                       "operand" : [ {
                                          "localId" : "278",
                                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                          "type" : "Concatenate",
                                          "signature" : [ ],
                                          "operand" : [ {
                                             "localId" : "273",
                                             "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                             "type" : "Concatenate",
                                             "signature" : [ ],
                                             "operand" : [ {
                                                "localId" : "268",
                                                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                                "type" : "Concatenate",
                                                "signature" : [ ],
                                                "operand" : [ {
                                                   "localId" : "263",
                                                   "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                                   "type" : "Concatenate",
                                                   "signature" : [ ],
                                                   "operand" : [ {
                                                      "localId" : "258",
                                                      "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                                      "type" : "Concatenate",
                                                      "signature" : [ ],
                                                      "operand" : [ {
                                                         "localId" : "253",
                                                         "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                                         "type" : "Concatenate",
                                                         "signature" : [ ],
                                                         "operand" : [ {
                                                            "localId" : "248",
                                                            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                                            "type" : "Concatenate",
                                                            "signature" : [ ],
                                                            "operand" : [ {
                                                               "localId" : "242",
                                                               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                                               "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                               "value" : "The",
                                                               "type" : "Literal"
                                                            }, {
                                                               "localId" : "244",
                                                               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                                               "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                               "value" : " ",
                                                               "type" : "Literal"
                                                            } ]
                                                         }, {
                                                            "localId" : "249",
                                                            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                                            "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                            "value" : "quick",
                                                            "type" : "Literal"
                                                         } ]
                                                      }, {
                                                         "localId" : "254",
                                                         "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                                         "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                         "value" : " ",
                                                         "type" : "Literal"
                                                      } ]
                                                   }, {
                                                      "localId" : "259",
                                                      "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                                      "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                      "value" : "brown",
                                                      "type" : "Literal"
                                                   } ]
                                                }, {
                                                   "localId" : "264",
                                                   "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                                   "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                   "value" : " ",
                                                   "type" : "Literal"
                                                } ]
                                             }, {
                                                "localId" : "269",
                                                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                "value" : "fox",
                                                "type" : "Literal"
                                             } ]
                                          }, {
                                             "localId" : "274",
                                             "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                             "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                             "value" : " ",
                                             "type" : "Literal"
                                          } ]
                                       }, {
                                          "localId" : "279",
                                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                          "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                          "value" : "jumps",
                                          "type" : "Literal"
                                       } ]
                                    }, {
                                       "localId" : "284",
                                       "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                       "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                       "value" : " ",
                                       "type" : "Literal"
                                    } ]
                                 }, {
                                    "localId" : "289",
                                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                    "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                    "value" : "over",
                                    "type" : "Literal"
                                 } ]
                              }, {
                                 "localId" : "294",
                                 "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                 "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                 "value" : " ",
                                 "type" : "Literal"
                              } ]
                           }, {
                              "localId" : "299",
                              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "the",
                              "type" : "Literal"
                           } ]
                        }, {
                           "localId" : "304",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : " ",
                           "type" : "Literal"
                        } ]
                     }, {
                        "localId" : "309",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "lazy",
                        "type" : "Literal"
                     } ]
                  }, {
                     "localId" : "314",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : " ",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "319",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "dog.",
                  "type" : "Literal"
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
               "s" : {
                  "r" : "326",
                  "s" : [ {
                     "value" : [ "","define ","ConcatNull",": " ]
                  }, {
                     "r" : "334",
                     "s" : [ {
                        "r" : "328",
                        "s" : [ {
                           "value" : [ "'Hello'" ]
                        } ]
                     }, {
                        "r" : "330",
                        "value" : [ " + ","null" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "334",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Concatenate",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "328",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Hello",
                  "type" : "Literal"
               }, {
                  "localId" : "331",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "330",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
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
               "s" : {
                  "r" : "337",
                  "s" : [ {
                     "value" : [ "","define ","Hello",": " ]
                  }, {
                     "r" : "338",
                     "s" : [ {
                        "value" : [ "'Hello'" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "338",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "valueType" : "{urn:hl7-org:elm-types:r1}String",
               "value" : "Hello",
               "type" : "Literal"
            }
         }, {
            "localId" : "342",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "World",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "342",
                  "s" : [ {
                     "value" : [ "","define ","World",": " ]
                  }, {
                     "r" : "343",
                     "s" : [ {
                        "value" : [ "'World'" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "343",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "valueType" : "{urn:hl7-org:elm-types:r1}String",
               "value" : "World",
               "type" : "Literal"
            }
         }, {
            "localId" : "347",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "HelloWorldVariables",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "347",
                  "s" : [ {
                     "value" : [ "","define ","HelloWorldVariables",": " ]
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
               "localId" : "353",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Concatenate",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "349",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "name" : "Hello",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "350",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "name" : "World",
                  "type" : "ExpressionRef"
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
               "s" : {
                  "r" : "356",
                  "s" : [ {
                     "value" : [ "","define ","AndHelloWorld",": " ]
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
               "localId" : "357",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Concatenate",
               "signature" : [ {
                  "localId" : "378",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "379",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "367",
                  "type" : "Coalesce",
                  "signature" : [ {
                     "localId" : "368",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "369",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "358",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "Hello",
                     "type" : "Literal"
                  }, {
                     "localId" : "362",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "375",
                  "type" : "Coalesce",
                  "signature" : [ {
                     "localId" : "376",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "377",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "360",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "World",
                     "type" : "Literal"
                  }, {
                     "localId" : "370",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "",
                     "type" : "Literal"
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
               "s" : {
                  "r" : "382",
                  "s" : [ {
                     "value" : [ "","define ","AndSentence",": " ]
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
               "localId" : "383",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Concatenate",
               "signature" : [ {
                  "localId" : "719",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "720",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "708",
                  "type" : "Coalesce",
                  "signature" : [ {
                     "localId" : "709",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "710",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "384",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "Concatenate",
                     "signature" : [ {
                        "localId" : "699",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "700",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : [ {
                        "localId" : "688",
                        "type" : "Coalesce",
                        "signature" : [ {
                           "localId" : "689",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }, {
                           "localId" : "690",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        } ],
                        "operand" : [ {
                           "localId" : "385",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "Concatenate",
                           "signature" : [ {
                              "localId" : "679",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }, {
                              "localId" : "680",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           } ],
                           "operand" : [ {
                              "localId" : "668",
                              "type" : "Coalesce",
                              "signature" : [ {
                                 "localId" : "669",
                                 "name" : "{urn:hl7-org:elm-types:r1}String",
                                 "type" : "NamedTypeSpecifier"
                              }, {
                                 "localId" : "670",
                                 "name" : "{urn:hl7-org:elm-types:r1}String",
                                 "type" : "NamedTypeSpecifier"
                              } ],
                              "operand" : [ {
                                 "localId" : "386",
                                 "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                 "type" : "Concatenate",
                                 "signature" : [ {
                                    "localId" : "659",
                                    "name" : "{urn:hl7-org:elm-types:r1}String",
                                    "type" : "NamedTypeSpecifier"
                                 }, {
                                    "localId" : "660",
                                    "name" : "{urn:hl7-org:elm-types:r1}String",
                                    "type" : "NamedTypeSpecifier"
                                 } ],
                                 "operand" : [ {
                                    "localId" : "648",
                                    "type" : "Coalesce",
                                    "signature" : [ {
                                       "localId" : "649",
                                       "name" : "{urn:hl7-org:elm-types:r1}String",
                                       "type" : "NamedTypeSpecifier"
                                    }, {
                                       "localId" : "650",
                                       "name" : "{urn:hl7-org:elm-types:r1}String",
                                       "type" : "NamedTypeSpecifier"
                                    } ],
                                    "operand" : [ {
                                       "localId" : "387",
                                       "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                       "type" : "Concatenate",
                                       "signature" : [ {
                                          "localId" : "639",
                                          "name" : "{urn:hl7-org:elm-types:r1}String",
                                          "type" : "NamedTypeSpecifier"
                                       }, {
                                          "localId" : "640",
                                          "name" : "{urn:hl7-org:elm-types:r1}String",
                                          "type" : "NamedTypeSpecifier"
                                       } ],
                                       "operand" : [ {
                                          "localId" : "628",
                                          "type" : "Coalesce",
                                          "signature" : [ {
                                             "localId" : "629",
                                             "name" : "{urn:hl7-org:elm-types:r1}String",
                                             "type" : "NamedTypeSpecifier"
                                          }, {
                                             "localId" : "630",
                                             "name" : "{urn:hl7-org:elm-types:r1}String",
                                             "type" : "NamedTypeSpecifier"
                                          } ],
                                          "operand" : [ {
                                             "localId" : "388",
                                             "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                             "type" : "Concatenate",
                                             "signature" : [ {
                                                "localId" : "619",
                                                "name" : "{urn:hl7-org:elm-types:r1}String",
                                                "type" : "NamedTypeSpecifier"
                                             }, {
                                                "localId" : "620",
                                                "name" : "{urn:hl7-org:elm-types:r1}String",
                                                "type" : "NamedTypeSpecifier"
                                             } ],
                                             "operand" : [ {
                                                "localId" : "608",
                                                "type" : "Coalesce",
                                                "signature" : [ {
                                                   "localId" : "609",
                                                   "name" : "{urn:hl7-org:elm-types:r1}String",
                                                   "type" : "NamedTypeSpecifier"
                                                }, {
                                                   "localId" : "610",
                                                   "name" : "{urn:hl7-org:elm-types:r1}String",
                                                   "type" : "NamedTypeSpecifier"
                                                } ],
                                                "operand" : [ {
                                                   "localId" : "389",
                                                   "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                                   "type" : "Concatenate",
                                                   "signature" : [ {
                                                      "localId" : "599",
                                                      "name" : "{urn:hl7-org:elm-types:r1}String",
                                                      "type" : "NamedTypeSpecifier"
                                                   }, {
                                                      "localId" : "600",
                                                      "name" : "{urn:hl7-org:elm-types:r1}String",
                                                      "type" : "NamedTypeSpecifier"
                                                   } ],
                                                   "operand" : [ {
                                                      "localId" : "588",
                                                      "type" : "Coalesce",
                                                      "signature" : [ {
                                                         "localId" : "589",
                                                         "name" : "{urn:hl7-org:elm-types:r1}String",
                                                         "type" : "NamedTypeSpecifier"
                                                      }, {
                                                         "localId" : "590",
                                                         "name" : "{urn:hl7-org:elm-types:r1}String",
                                                         "type" : "NamedTypeSpecifier"
                                                      } ],
                                                      "operand" : [ {
                                                         "localId" : "390",
                                                         "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                                         "type" : "Concatenate",
                                                         "signature" : [ {
                                                            "localId" : "579",
                                                            "name" : "{urn:hl7-org:elm-types:r1}String",
                                                            "type" : "NamedTypeSpecifier"
                                                         }, {
                                                            "localId" : "580",
                                                            "name" : "{urn:hl7-org:elm-types:r1}String",
                                                            "type" : "NamedTypeSpecifier"
                                                         } ],
                                                         "operand" : [ {
                                                            "localId" : "568",
                                                            "type" : "Coalesce",
                                                            "signature" : [ {
                                                               "localId" : "569",
                                                               "name" : "{urn:hl7-org:elm-types:r1}String",
                                                               "type" : "NamedTypeSpecifier"
                                                            }, {
                                                               "localId" : "570",
                                                               "name" : "{urn:hl7-org:elm-types:r1}String",
                                                               "type" : "NamedTypeSpecifier"
                                                            } ],
                                                            "operand" : [ {
                                                               "localId" : "391",
                                                               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                                               "type" : "Concatenate",
                                                               "signature" : [ {
                                                                  "localId" : "559",
                                                                  "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                  "type" : "NamedTypeSpecifier"
                                                               }, {
                                                                  "localId" : "560",
                                                                  "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                  "type" : "NamedTypeSpecifier"
                                                               } ],
                                                               "operand" : [ {
                                                                  "localId" : "548",
                                                                  "type" : "Coalesce",
                                                                  "signature" : [ {
                                                                     "localId" : "549",
                                                                     "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                     "type" : "NamedTypeSpecifier"
                                                                  }, {
                                                                     "localId" : "550",
                                                                     "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                     "type" : "NamedTypeSpecifier"
                                                                  } ],
                                                                  "operand" : [ {
                                                                     "localId" : "392",
                                                                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                                                     "type" : "Concatenate",
                                                                     "signature" : [ {
                                                                        "localId" : "539",
                                                                        "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                        "type" : "NamedTypeSpecifier"
                                                                     }, {
                                                                        "localId" : "540",
                                                                        "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                        "type" : "NamedTypeSpecifier"
                                                                     } ],
                                                                     "operand" : [ {
                                                                        "localId" : "528",
                                                                        "type" : "Coalesce",
                                                                        "signature" : [ {
                                                                           "localId" : "529",
                                                                           "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                           "type" : "NamedTypeSpecifier"
                                                                        }, {
                                                                           "localId" : "530",
                                                                           "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                           "type" : "NamedTypeSpecifier"
                                                                        } ],
                                                                        "operand" : [ {
                                                                           "localId" : "393",
                                                                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                                                           "type" : "Concatenate",
                                                                           "signature" : [ {
                                                                              "localId" : "519",
                                                                              "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                              "type" : "NamedTypeSpecifier"
                                                                           }, {
                                                                              "localId" : "520",
                                                                              "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                              "type" : "NamedTypeSpecifier"
                                                                           } ],
                                                                           "operand" : [ {
                                                                              "localId" : "508",
                                                                              "type" : "Coalesce",
                                                                              "signature" : [ {
                                                                                 "localId" : "509",
                                                                                 "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                                 "type" : "NamedTypeSpecifier"
                                                                              }, {
                                                                                 "localId" : "510",
                                                                                 "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                                 "type" : "NamedTypeSpecifier"
                                                                              } ],
                                                                              "operand" : [ {
                                                                                 "localId" : "394",
                                                                                 "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                                                                 "type" : "Concatenate",
                                                                                 "signature" : [ {
                                                                                    "localId" : "499",
                                                                                    "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                                    "type" : "NamedTypeSpecifier"
                                                                                 }, {
                                                                                    "localId" : "500",
                                                                                    "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                                    "type" : "NamedTypeSpecifier"
                                                                                 } ],
                                                                                 "operand" : [ {
                                                                                    "localId" : "488",
                                                                                    "type" : "Coalesce",
                                                                                    "signature" : [ {
                                                                                       "localId" : "489",
                                                                                       "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                                       "type" : "NamedTypeSpecifier"
                                                                                    }, {
                                                                                       "localId" : "490",
                                                                                       "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                                       "type" : "NamedTypeSpecifier"
                                                                                    } ],
                                                                                    "operand" : [ {
                                                                                       "localId" : "395",
                                                                                       "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                                                                       "type" : "Concatenate",
                                                                                       "signature" : [ {
                                                                                          "localId" : "479",
                                                                                          "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                                          "type" : "NamedTypeSpecifier"
                                                                                       }, {
                                                                                          "localId" : "480",
                                                                                          "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                                          "type" : "NamedTypeSpecifier"
                                                                                       } ],
                                                                                       "operand" : [ {
                                                                                          "localId" : "468",
                                                                                          "type" : "Coalesce",
                                                                                          "signature" : [ {
                                                                                             "localId" : "469",
                                                                                             "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                                             "type" : "NamedTypeSpecifier"
                                                                                          }, {
                                                                                             "localId" : "470",
                                                                                             "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                                             "type" : "NamedTypeSpecifier"
                                                                                          } ],
                                                                                          "operand" : [ {
                                                                                             "localId" : "396",
                                                                                             "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                                                                             "type" : "Concatenate",
                                                                                             "signature" : [ {
                                                                                                "localId" : "459",
                                                                                                "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                "type" : "NamedTypeSpecifier"
                                                                                             }, {
                                                                                                "localId" : "460",
                                                                                                "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                "type" : "NamedTypeSpecifier"
                                                                                             } ],
                                                                                             "operand" : [ {
                                                                                                "localId" : "448",
                                                                                                "type" : "Coalesce",
                                                                                                "signature" : [ {
                                                                                                   "localId" : "449",
                                                                                                   "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                   "type" : "NamedTypeSpecifier"
                                                                                                }, {
                                                                                                   "localId" : "450",
                                                                                                   "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                   "type" : "NamedTypeSpecifier"
                                                                                                } ],
                                                                                                "operand" : [ {
                                                                                                   "localId" : "397",
                                                                                                   "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                   "type" : "Concatenate",
                                                                                                   "signature" : [ {
                                                                                                      "localId" : "439",
                                                                                                      "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                      "type" : "NamedTypeSpecifier"
                                                                                                   }, {
                                                                                                      "localId" : "440",
                                                                                                      "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                      "type" : "NamedTypeSpecifier"
                                                                                                   } ],
                                                                                                   "operand" : [ {
                                                                                                      "localId" : "428",
                                                                                                      "type" : "Coalesce",
                                                                                                      "signature" : [ {
                                                                                                         "localId" : "429",
                                                                                                         "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                         "type" : "NamedTypeSpecifier"
                                                                                                      }, {
                                                                                                         "localId" : "430",
                                                                                                         "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                         "type" : "NamedTypeSpecifier"
                                                                                                      } ],
                                                                                                      "operand" : [ {
                                                                                                         "localId" : "398",
                                                                                                         "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                         "type" : "Concatenate",
                                                                                                         "signature" : [ {
                                                                                                            "localId" : "419",
                                                                                                            "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                            "type" : "NamedTypeSpecifier"
                                                                                                         }, {
                                                                                                            "localId" : "420",
                                                                                                            "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                            "type" : "NamedTypeSpecifier"
                                                                                                         } ],
                                                                                                         "operand" : [ {
                                                                                                            "localId" : "408",
                                                                                                            "type" : "Coalesce",
                                                                                                            "signature" : [ {
                                                                                                               "localId" : "409",
                                                                                                               "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                               "type" : "NamedTypeSpecifier"
                                                                                                            }, {
                                                                                                               "localId" : "410",
                                                                                                               "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                               "type" : "NamedTypeSpecifier"
                                                                                                            } ],
                                                                                                            "operand" : [ {
                                                                                                               "localId" : "399",
                                                                                                               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                               "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                               "value" : "The",
                                                                                                               "type" : "Literal"
                                                                                                            }, {
                                                                                                               "localId" : "403",
                                                                                                               "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                               "value" : "",
                                                                                                               "type" : "Literal"
                                                                                                            } ]
                                                                                                         }, {
                                                                                                            "localId" : "416",
                                                                                                            "type" : "Coalesce",
                                                                                                            "signature" : [ {
                                                                                                               "localId" : "417",
                                                                                                               "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                               "type" : "NamedTypeSpecifier"
                                                                                                            }, {
                                                                                                               "localId" : "418",
                                                                                                               "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                               "type" : "NamedTypeSpecifier"
                                                                                                            } ],
                                                                                                            "operand" : [ {
                                                                                                               "localId" : "401",
                                                                                                               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                               "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                               "value" : " ",
                                                                                                               "type" : "Literal"
                                                                                                            }, {
                                                                                                               "localId" : "411",
                                                                                                               "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                               "value" : "",
                                                                                                               "type" : "Literal"
                                                                                                            } ]
                                                                                                         } ]
                                                                                                      }, {
                                                                                                         "localId" : "423",
                                                                                                         "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                         "value" : "",
                                                                                                         "type" : "Literal"
                                                                                                      } ]
                                                                                                   }, {
                                                                                                      "localId" : "436",
                                                                                                      "type" : "Coalesce",
                                                                                                      "signature" : [ {
                                                                                                         "localId" : "437",
                                                                                                         "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                         "type" : "NamedTypeSpecifier"
                                                                                                      }, {
                                                                                                         "localId" : "438",
                                                                                                         "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                         "type" : "NamedTypeSpecifier"
                                                                                                      } ],
                                                                                                      "operand" : [ {
                                                                                                         "localId" : "421",
                                                                                                         "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                         "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                         "value" : "quick",
                                                                                                         "type" : "Literal"
                                                                                                      }, {
                                                                                                         "localId" : "431",
                                                                                                         "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                         "value" : "",
                                                                                                         "type" : "Literal"
                                                                                                      } ]
                                                                                                   } ]
                                                                                                }, {
                                                                                                   "localId" : "443",
                                                                                                   "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                   "value" : "",
                                                                                                   "type" : "Literal"
                                                                                                } ]
                                                                                             }, {
                                                                                                "localId" : "456",
                                                                                                "type" : "Coalesce",
                                                                                                "signature" : [ {
                                                                                                   "localId" : "457",
                                                                                                   "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                   "type" : "NamedTypeSpecifier"
                                                                                                }, {
                                                                                                   "localId" : "458",
                                                                                                   "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                   "type" : "NamedTypeSpecifier"
                                                                                                } ],
                                                                                                "operand" : [ {
                                                                                                   "localId" : "441",
                                                                                                   "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                   "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                   "value" : " ",
                                                                                                   "type" : "Literal"
                                                                                                }, {
                                                                                                   "localId" : "451",
                                                                                                   "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                   "value" : "",
                                                                                                   "type" : "Literal"
                                                                                                } ]
                                                                                             } ]
                                                                                          }, {
                                                                                             "localId" : "463",
                                                                                             "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                                             "value" : "",
                                                                                             "type" : "Literal"
                                                                                          } ]
                                                                                       }, {
                                                                                          "localId" : "476",
                                                                                          "type" : "Coalesce",
                                                                                          "signature" : [ {
                                                                                             "localId" : "477",
                                                                                             "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                                             "type" : "NamedTypeSpecifier"
                                                                                          }, {
                                                                                             "localId" : "478",
                                                                                             "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                                             "type" : "NamedTypeSpecifier"
                                                                                          } ],
                                                                                          "operand" : [ {
                                                                                             "localId" : "461",
                                                                                             "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                                                                             "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                                             "value" : "brown",
                                                                                             "type" : "Literal"
                                                                                          }, {
                                                                                             "localId" : "471",
                                                                                             "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                                             "value" : "",
                                                                                             "type" : "Literal"
                                                                                          } ]
                                                                                       } ]
                                                                                    }, {
                                                                                       "localId" : "483",
                                                                                       "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                                       "value" : "",
                                                                                       "type" : "Literal"
                                                                                    } ]
                                                                                 }, {
                                                                                    "localId" : "496",
                                                                                    "type" : "Coalesce",
                                                                                    "signature" : [ {
                                                                                       "localId" : "497",
                                                                                       "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                                       "type" : "NamedTypeSpecifier"
                                                                                    }, {
                                                                                       "localId" : "498",
                                                                                       "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                                       "type" : "NamedTypeSpecifier"
                                                                                    } ],
                                                                                    "operand" : [ {
                                                                                       "localId" : "481",
                                                                                       "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                                                                       "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                                       "value" : " ",
                                                                                       "type" : "Literal"
                                                                                    }, {
                                                                                       "localId" : "491",
                                                                                       "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                                       "value" : "",
                                                                                       "type" : "Literal"
                                                                                    } ]
                                                                                 } ]
                                                                              }, {
                                                                                 "localId" : "503",
                                                                                 "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                                 "value" : "",
                                                                                 "type" : "Literal"
                                                                              } ]
                                                                           }, {
                                                                              "localId" : "516",
                                                                              "type" : "Coalesce",
                                                                              "signature" : [ {
                                                                                 "localId" : "517",
                                                                                 "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                                 "type" : "NamedTypeSpecifier"
                                                                              }, {
                                                                                 "localId" : "518",
                                                                                 "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                                 "type" : "NamedTypeSpecifier"
                                                                              } ],
                                                                              "operand" : [ {
                                                                                 "localId" : "501",
                                                                                 "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                                                                 "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                                 "value" : "fox",
                                                                                 "type" : "Literal"
                                                                              }, {
                                                                                 "localId" : "511",
                                                                                 "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                                 "value" : "",
                                                                                 "type" : "Literal"
                                                                              } ]
                                                                           } ]
                                                                        }, {
                                                                           "localId" : "523",
                                                                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                           "value" : "",
                                                                           "type" : "Literal"
                                                                        } ]
                                                                     }, {
                                                                        "localId" : "536",
                                                                        "type" : "Coalesce",
                                                                        "signature" : [ {
                                                                           "localId" : "537",
                                                                           "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                           "type" : "NamedTypeSpecifier"
                                                                        }, {
                                                                           "localId" : "538",
                                                                           "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                           "type" : "NamedTypeSpecifier"
                                                                        } ],
                                                                        "operand" : [ {
                                                                           "localId" : "521",
                                                                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                                                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                           "value" : " ",
                                                                           "type" : "Literal"
                                                                        }, {
                                                                           "localId" : "531",
                                                                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                           "value" : "",
                                                                           "type" : "Literal"
                                                                        } ]
                                                                     } ]
                                                                  }, {
                                                                     "localId" : "543",
                                                                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                     "value" : "",
                                                                     "type" : "Literal"
                                                                  } ]
                                                               }, {
                                                                  "localId" : "556",
                                                                  "type" : "Coalesce",
                                                                  "signature" : [ {
                                                                     "localId" : "557",
                                                                     "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                     "type" : "NamedTypeSpecifier"
                                                                  }, {
                                                                     "localId" : "558",
                                                                     "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                     "type" : "NamedTypeSpecifier"
                                                                  } ],
                                                                  "operand" : [ {
                                                                     "localId" : "541",
                                                                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                                                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                     "value" : "jumps",
                                                                     "type" : "Literal"
                                                                  }, {
                                                                     "localId" : "551",
                                                                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                     "value" : "",
                                                                     "type" : "Literal"
                                                                  } ]
                                                               } ]
                                                            }, {
                                                               "localId" : "563",
                                                               "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                               "value" : "",
                                                               "type" : "Literal"
                                                            } ]
                                                         }, {
                                                            "localId" : "576",
                                                            "type" : "Coalesce",
                                                            "signature" : [ {
                                                               "localId" : "577",
                                                               "name" : "{urn:hl7-org:elm-types:r1}String",
                                                               "type" : "NamedTypeSpecifier"
                                                            }, {
                                                               "localId" : "578",
                                                               "name" : "{urn:hl7-org:elm-types:r1}String",
                                                               "type" : "NamedTypeSpecifier"
                                                            } ],
                                                            "operand" : [ {
                                                               "localId" : "561",
                                                               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                                               "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                               "value" : " ",
                                                               "type" : "Literal"
                                                            }, {
                                                               "localId" : "571",
                                                               "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                               "value" : "",
                                                               "type" : "Literal"
                                                            } ]
                                                         } ]
                                                      }, {
                                                         "localId" : "583",
                                                         "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                         "value" : "",
                                                         "type" : "Literal"
                                                      } ]
                                                   }, {
                                                      "localId" : "596",
                                                      "type" : "Coalesce",
                                                      "signature" : [ {
                                                         "localId" : "597",
                                                         "name" : "{urn:hl7-org:elm-types:r1}String",
                                                         "type" : "NamedTypeSpecifier"
                                                      }, {
                                                         "localId" : "598",
                                                         "name" : "{urn:hl7-org:elm-types:r1}String",
                                                         "type" : "NamedTypeSpecifier"
                                                      } ],
                                                      "operand" : [ {
                                                         "localId" : "581",
                                                         "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                                         "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                         "value" : "over",
                                                         "type" : "Literal"
                                                      }, {
                                                         "localId" : "591",
                                                         "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                         "value" : "",
                                                         "type" : "Literal"
                                                      } ]
                                                   } ]
                                                }, {
                                                   "localId" : "603",
                                                   "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                   "value" : "",
                                                   "type" : "Literal"
                                                } ]
                                             }, {
                                                "localId" : "616",
                                                "type" : "Coalesce",
                                                "signature" : [ {
                                                   "localId" : "617",
                                                   "name" : "{urn:hl7-org:elm-types:r1}String",
                                                   "type" : "NamedTypeSpecifier"
                                                }, {
                                                   "localId" : "618",
                                                   "name" : "{urn:hl7-org:elm-types:r1}String",
                                                   "type" : "NamedTypeSpecifier"
                                                } ],
                                                "operand" : [ {
                                                   "localId" : "601",
                                                   "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                                   "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                   "value" : " ",
                                                   "type" : "Literal"
                                                }, {
                                                   "localId" : "611",
                                                   "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                   "value" : "",
                                                   "type" : "Literal"
                                                } ]
                                             } ]
                                          }, {
                                             "localId" : "623",
                                             "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                             "value" : "",
                                             "type" : "Literal"
                                          } ]
                                       }, {
                                          "localId" : "636",
                                          "type" : "Coalesce",
                                          "signature" : [ {
                                             "localId" : "637",
                                             "name" : "{urn:hl7-org:elm-types:r1}String",
                                             "type" : "NamedTypeSpecifier"
                                          }, {
                                             "localId" : "638",
                                             "name" : "{urn:hl7-org:elm-types:r1}String",
                                             "type" : "NamedTypeSpecifier"
                                          } ],
                                          "operand" : [ {
                                             "localId" : "621",
                                             "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                             "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                             "value" : "the",
                                             "type" : "Literal"
                                          }, {
                                             "localId" : "631",
                                             "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                             "value" : "",
                                             "type" : "Literal"
                                          } ]
                                       } ]
                                    }, {
                                       "localId" : "643",
                                       "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                       "value" : "",
                                       "type" : "Literal"
                                    } ]
                                 }, {
                                    "localId" : "656",
                                    "type" : "Coalesce",
                                    "signature" : [ {
                                       "localId" : "657",
                                       "name" : "{urn:hl7-org:elm-types:r1}String",
                                       "type" : "NamedTypeSpecifier"
                                    }, {
                                       "localId" : "658",
                                       "name" : "{urn:hl7-org:elm-types:r1}String",
                                       "type" : "NamedTypeSpecifier"
                                    } ],
                                    "operand" : [ {
                                       "localId" : "641",
                                       "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                       "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                       "value" : " ",
                                       "type" : "Literal"
                                    }, {
                                       "localId" : "651",
                                       "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                       "value" : "",
                                       "type" : "Literal"
                                    } ]
                                 } ]
                              }, {
                                 "localId" : "663",
                                 "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                 "value" : "",
                                 "type" : "Literal"
                              } ]
                           }, {
                              "localId" : "676",
                              "type" : "Coalesce",
                              "signature" : [ {
                                 "localId" : "677",
                                 "name" : "{urn:hl7-org:elm-types:r1}String",
                                 "type" : "NamedTypeSpecifier"
                              }, {
                                 "localId" : "678",
                                 "name" : "{urn:hl7-org:elm-types:r1}String",
                                 "type" : "NamedTypeSpecifier"
                              } ],
                              "operand" : [ {
                                 "localId" : "661",
                                 "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                 "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                 "value" : "lazy",
                                 "type" : "Literal"
                              }, {
                                 "localId" : "671",
                                 "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                 "value" : "",
                                 "type" : "Literal"
                              } ]
                           } ]
                        }, {
                           "localId" : "683",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "",
                           "type" : "Literal"
                        } ]
                     }, {
                        "localId" : "696",
                        "type" : "Coalesce",
                        "signature" : [ {
                           "localId" : "697",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }, {
                           "localId" : "698",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        } ],
                        "operand" : [ {
                           "localId" : "681",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : " ",
                           "type" : "Literal"
                        }, {
                           "localId" : "691",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "",
                           "type" : "Literal"
                        } ]
                     } ]
                  }, {
                     "localId" : "703",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "716",
                  "type" : "Coalesce",
                  "signature" : [ {
                     "localId" : "717",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "718",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "701",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "dog.",
                     "type" : "Literal"
                  }, {
                     "localId" : "711",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "",
                     "type" : "Literal"
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
               "s" : {
                  "r" : "723",
                  "s" : [ {
                     "value" : [ "","define ","AndConcatNull",": " ]
                  }, {
                     "r" : "724",
                     "s" : [ {
                        "r" : "725",
                        "s" : [ {
                           "value" : [ "'Hello'" ]
                        } ]
                     }, {
                        "r" : "727",
                        "value" : [ " & ","null" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "724",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Concatenate",
               "signature" : [ {
                  "localId" : "746",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "747",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "733",
                  "type" : "Coalesce",
                  "signature" : [ {
                     "localId" : "734",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "735",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "725",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "Hello",
                     "type" : "Literal"
                  }, {
                     "localId" : "728",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "742",
                  "type" : "Coalesce",
                  "signature" : [ {
                     "localId" : "744",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "745",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "743",
                     "asType" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "727",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "736",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "",
                     "type" : "Literal"
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
               "s" : {
                  "r" : "750",
                  "s" : [ {
                     "value" : [ "","define ","AndHelloWorldVariables",": " ]
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
               "localId" : "751",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Concatenate",
               "signature" : [ {
                  "localId" : "770",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "771",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "759",
                  "type" : "Coalesce",
                  "signature" : [ {
                     "localId" : "760",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "761",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "752",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "name" : "Hello",
                     "type" : "ExpressionRef"
                  }, {
                     "localId" : "754",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "767",
                  "type" : "Coalesce",
                  "signature" : [ {
                     "localId" : "768",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "769",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "753",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "name" : "World",
                     "type" : "ExpressionRef"
                  }, {
                     "localId" : "762",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "",
                     "type" : "Literal"
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "334",
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
            "localId" : "211",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "209",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "210",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "208",
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
            "name" : "NoSeparator",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","NoSeparator",": " ]
                  }, {
                     "r" : "230",
                     "s" : [ {
                        "value" : [ "Combine","(" ]
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
               "localId" : "230",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Combine",
               "signature" : [ {
                  "localId" : "231",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "232",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "215",
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
                     "localId" : "216",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "abc",
                     "type" : "Literal"
                  }, {
                     "localId" : "218",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "def",
                     "type" : "Literal"
                  }, {
                     "localId" : "220",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "ghi",
                     "type" : "Literal"
                  }, {
                     "localId" : "222",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "jkl",
                     "type" : "Literal"
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
               "s" : {
                  "r" : "235",
                  "s" : [ {
                     "value" : [ "","define ","Separator",": " ]
                  }, {
                     "r" : "254",
                     "s" : [ {
                        "value" : [ "Combine","(" ]
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
               "localId" : "254",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Combine",
               "signature" : [ {
                  "localId" : "255",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "256",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "257",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "source" : {
                  "localId" : "236",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "245",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "246",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "237",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "abc",
                     "type" : "Literal"
                  }, {
                     "localId" : "239",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "def",
                     "type" : "Literal"
                  }, {
                     "localId" : "241",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "ghi",
                     "type" : "Literal"
                  }, {
                     "localId" : "243",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "jkl",
                     "type" : "Literal"
                  } ]
               },
               "separator" : {
                  "localId" : "247",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : ";",
                  "type" : "Literal"
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
               "s" : {
                  "r" : "260",
                  "s" : [ {
                     "value" : [ "","define ","CombineNull",": " ]
                  }, {
                     "r" : "272",
                     "s" : [ {
                        "r" : "261",
                        "value" : [ "Combine","(","null",", " ]
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
               "localId" : "272",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Combine",
               "signature" : [ {
                  "localId" : "276",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "277",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "278",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "source" : {
                  "localId" : "273",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "261",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "274",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "275",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               },
               "separator" : {
                  "localId" : "262",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : ";",
                  "type" : "Literal"
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
               "s" : {
                  "r" : "281",
                  "s" : [ {
                     "value" : [ "","define ","CombineNullItem",": " ]
                  }, {
                     "r" : "300",
                     "s" : [ {
                        "value" : [ "Combine","(" ]
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
                           "value" : [ ", ","null",", " ]
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
               "localId" : "300",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Combine",
               "signature" : [ {
                  "localId" : "301",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "302",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "303",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "source" : {
                  "localId" : "282",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "291",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "292",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "283",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "abc",
                     "type" : "Literal"
                  }, {
                     "localId" : "285",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "def",
                     "type" : "Literal"
                  }, {
                     "localId" : "290",
                     "asType" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "287",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "288",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "jkl",
                     "type" : "Literal"
                  } ]
               },
               "separator" : {
                  "localId" : "293",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : ";",
                  "type" : "Literal"
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
               "s" : {
                  "r" : "306",
                  "s" : [ {
                     "value" : [ "","define ","CombineOneNullItem",": " ]
                  }, {
                     "r" : "323",
                     "s" : [ {
                        "value" : [ "Combine","(" ]
                     }, {
                        "r" : "307",
                        "s" : [ {
                           "r" : "308",
                           "value" : [ "{","null","}" ]
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
               "localId" : "323",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Combine",
               "signature" : [ {
                  "localId" : "329",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "330",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "331",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "source" : {
                  "localId" : "324",
                  "type" : "Query",
                  "source" : [ {
                     "localId" : "325",
                     "alias" : "X",
                     "expression" : {
                        "localId" : "307",
                        "type" : "List",
                        "resultTypeSpecifier" : {
                           "localId" : "309",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "310",
                              "name" : "{urn:hl7-org:elm-types:r1}Any",
                              "type" : "NamedTypeSpecifier"
                           }
                        },
                        "element" : [ {
                           "localId" : "308",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                           "type" : "Null"
                        } ]
                     }
                  } ],
                  "let" : [ ],
                  "relationship" : [ ],
                  "return" : {
                     "localId" : "326",
                     "distinct" : false,
                     "expression" : {
                        "localId" : "328",
                        "asType" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "As",
                        "signature" : [ ],
                        "operand" : {
                           "localId" : "327",
                           "name" : "X",
                           "type" : "AliasRef"
                        }
                     }
                  }
               },
               "separator" : {
                  "localId" : "311",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : ";",
                  "type" : "Literal"
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
               "s" : {
                  "r" : "334",
                  "s" : [ {
                     "value" : [ "","define ","CombineEmptyNull",": " ]
                  }, {
                     "r" : "350",
                     "s" : [ {
                        "r" : "335",
                        "value" : [ "Combine","(","{}",", " ]
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
               "localId" : "350",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Combine",
               "signature" : [ {
                  "localId" : "356",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "357",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "358",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "source" : {
                  "localId" : "351",
                  "type" : "Query",
                  "source" : [ {
                     "localId" : "352",
                     "alias" : "X",
                     "expression" : {
                        "localId" : "335",
                        "type" : "List",
                        "resultTypeSpecifier" : {
                           "localId" : "336",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "337",
                              "name" : "{urn:hl7-org:elm-types:r1}Any",
                              "type" : "NamedTypeSpecifier"
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
                     "expression" : {
                        "localId" : "355",
                        "asType" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "As",
                        "signature" : [ ],
                        "operand" : {
                           "localId" : "354",
                           "name" : "X",
                           "type" : "AliasRef"
                        }
                     }
                  }
               },
               "separator" : {
                  "localId" : "338",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : ";",
                  "type" : "Literal"
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "269",
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
            "localId" : "211",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "209",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "210",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "208",
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
            "name" : "CommaSeparated",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","CommaSeparated",": " ]
                  }, {
                     "r" : "223",
                     "s" : [ {
                        "value" : [ "Split","(" ]
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
               "localId" : "228",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "229",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "223",
               "type" : "Split",
               "resultTypeSpecifier" : {
                  "localId" : "226",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "227",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "signature" : [ {
                  "localId" : "224",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "225",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "stringToSplit" : {
                  "localId" : "215",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "a,b,c,,1,2,3",
                  "type" : "Literal"
               },
               "separator" : {
                  "localId" : "217",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : ",",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "232",
            "name" : "SeparatorNotUsed",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "232",
                  "s" : [ {
                     "value" : [ "","define ","SeparatorNotUsed",": " ]
                  }, {
                     "r" : "241",
                     "s" : [ {
                        "value" : [ "Split","(" ]
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
               "localId" : "246",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "247",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "241",
               "type" : "Split",
               "resultTypeSpecifier" : {
                  "localId" : "244",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "245",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "signature" : [ {
                  "localId" : "242",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "243",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "stringToSplit" : {
                  "localId" : "233",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "a,b,c,,1,2,3",
                  "type" : "Literal"
               },
               "separator" : {
                  "localId" : "235",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : ";",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "250",
            "name" : "SeparateNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "250",
                  "s" : [ {
                     "value" : [ "","define ","SeparateNull",": " ]
                  }, {
                     "r" : "259",
                     "s" : [ {
                        "r" : "251",
                        "value" : [ "Split","(","null",", " ]
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
               "localId" : "265",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "266",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "259",
               "type" : "Split",
               "resultTypeSpecifier" : {
                  "localId" : "263",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "264",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "signature" : [ {
                  "localId" : "261",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "262",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "stringToSplit" : {
                  "localId" : "260",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "251",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               },
               "separator" : {
                  "localId" : "252",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : ",",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "269",
            "name" : "SeparateUsingNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "269",
                  "s" : [ {
                     "value" : [ "","define ","SeparateUsingNull",": " ]
                  }, {
                     "r" : "278",
                     "s" : [ {
                        "value" : [ "Split","(" ]
                     }, {
                        "r" : "270",
                        "s" : [ {
                           "value" : [ "'a,b,c'" ]
                        } ]
                     }, {
                        "r" : "272",
                        "value" : [ ", ","null",")" ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "284",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "285",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "278",
               "type" : "Split",
               "resultTypeSpecifier" : {
                  "localId" : "282",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "283",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "signature" : [ {
                  "localId" : "280",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "281",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "stringToSplit" : {
                  "localId" : "270",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "a,b,c",
                  "type" : "Literal"
               },
               "separator" : {
                  "localId" : "279",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "272",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "306",
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
            "localId" : "211",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "209",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "210",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "208",
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
            "name" : "SplitOnMatchesListReturn",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","SplitOnMatchesListReturn",": " ]
                  }, {
                     "r" : "223",
                     "s" : [ {
                        "value" : [ "SplitOnMatches","(" ]
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
               "localId" : "228",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "229",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "223",
               "type" : "SplitOnMatches",
               "resultTypeSpecifier" : {
                  "localId" : "226",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "227",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "signature" : [ {
                  "localId" : "224",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "225",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "stringToSplit" : {
                  "localId" : "215",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "foo 1,2three bar",
                  "type" : "Literal"
               },
               "separatorPattern" : {
                  "localId" : "217",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "\\d,\\d\\w+",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "232",
            "name" : "SplitOnMatchesOriginalString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "232",
                  "s" : [ {
                     "value" : [ "","define ","SplitOnMatchesOriginalString",": " ]
                  }, {
                     "r" : "241",
                     "s" : [ {
                        "value" : [ "SplitOnMatches","(" ]
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
               "localId" : "246",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "247",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "241",
               "type" : "SplitOnMatches",
               "resultTypeSpecifier" : {
                  "localId" : "244",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "245",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "signature" : [ {
                  "localId" : "242",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "243",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "stringToSplit" : {
                  "localId" : "233",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "1,2three",
                  "type" : "Literal"
               },
               "separatorPattern" : {
                  "localId" : "235",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "\\w,\\w+",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "250",
            "name" : "SplitOnMatchesNoMatch",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "250",
                  "s" : [ {
                     "value" : [ "","define ","SplitOnMatchesNoMatch",": " ]
                  }, {
                     "r" : "259",
                     "s" : [ {
                        "value" : [ "SplitOnMatches","(" ]
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
               "localId" : "264",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "265",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "259",
               "type" : "SplitOnMatches",
               "resultTypeSpecifier" : {
                  "localId" : "262",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "263",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "signature" : [ {
                  "localId" : "260",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "261",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "stringToSplit" : {
                  "localId" : "251",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "foobar",
                  "type" : "Literal"
               },
               "separatorPattern" : {
                  "localId" : "253",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "\\d",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "268",
            "name" : "SplitOnMatchesIsNullFirst",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "268",
                  "s" : [ {
                     "value" : [ "","define ","SplitOnMatchesIsNullFirst",": " ]
                  }, {
                     "r" : "277",
                     "s" : [ {
                        "r" : "269",
                        "value" : [ "SplitOnMatches","(","null",", " ]
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
               "localId" : "283",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "284",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "277",
               "type" : "SplitOnMatches",
               "resultTypeSpecifier" : {
                  "localId" : "281",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "282",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "signature" : [ {
                  "localId" : "279",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "280",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "stringToSplit" : {
                  "localId" : "278",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "269",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               },
               "separatorPattern" : {
                  "localId" : "270",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "\\w+",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "287",
            "name" : "SplitOnMatchesIsNullSecond",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "287",
                  "s" : [ {
                     "value" : [ "","define ","SplitOnMatchesIsNullSecond",": " ]
                  }, {
                     "r" : "296",
                     "s" : [ {
                        "value" : [ "SplitOnMatches","(" ]
                     }, {
                        "r" : "288",
                        "s" : [ {
                           "value" : [ "'12three'" ]
                        } ]
                     }, {
                        "r" : "290",
                        "value" : [ ", ","null",")" ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "302",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "303",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "296",
               "type" : "SplitOnMatches",
               "resultTypeSpecifier" : {
                  "localId" : "300",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "301",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "signature" : [ {
                  "localId" : "298",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "299",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "stringToSplit" : {
                  "localId" : "288",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "12three",
                  "type" : "Literal"
               },
               "separatorPattern" : {
                  "localId" : "297",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "290",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
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
               "s" : {
                  "r" : "306",
                  "s" : [ {
                     "value" : [ "","define ","SplitOnMatchesAllNull",": " ]
                  }, {
                     "r" : "315",
                     "s" : [ {
                        "r" : "307",
                        "value" : [ "SplitOnMatches","(","null",", ","null",")" ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "322",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "323",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "315",
               "type" : "SplitOnMatches",
               "resultTypeSpecifier" : {
                  "localId" : "320",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "321",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "signature" : [ {
                  "localId" : "318",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "319",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "stringToSplit" : {
                  "localId" : "316",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "307",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               },
               "separatorPattern" : {
                  "localId" : "317",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "308",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
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
      "contexts" : {
         "def" : [ {
            "localId" : "211",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "209",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "210",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "208",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "ElevenLetters",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","ElevenLetters",": " ]
                  }, {
                     "r" : "220",
                     "s" : [ {
                        "value" : [ "Length","(" ]
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
               "localId" : "220",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Length",
               "signature" : [ {
                  "localId" : "221",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "215",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Hello World",
                  "type" : "Literal"
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
               "s" : {
                  "r" : "224",
                  "s" : [ {
                     "value" : [ "","define ","NullString",": " ]
                  }, {
                     "r" : "231",
                     "s" : [ {
                        "value" : [ "Length","(" ]
                     }, {
                        "r" : "225",
                        "s" : [ {
                           "r" : "226",
                           "value" : [ "null"," as " ]
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
               "localId" : "231",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Length",
               "signature" : [ {
                  "localId" : "232",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "225",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "226",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "227",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "244",
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
            "localId" : "211",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "209",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "210",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "208",
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
            "name" : "LowerC",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","LowerC",": " ]
                  }, {
                     "r" : "220",
                     "s" : [ {
                        "value" : [ "Upper","(" ]
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
               "localId" : "220",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Upper",
               "signature" : [ {
                  "localId" : "221",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "215",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "abcdefg123",
                  "type" : "Literal"
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
               "s" : {
                  "r" : "224",
                  "s" : [ {
                     "value" : [ "","define ","UpperC",": " ]
                  }, {
                     "r" : "230",
                     "s" : [ {
                        "value" : [ "Upper","(" ]
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
               "localId" : "230",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Upper",
               "signature" : [ {
                  "localId" : "231",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "225",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "ABCDEFG123",
                  "type" : "Literal"
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
               "s" : {
                  "r" : "234",
                  "s" : [ {
                     "value" : [ "","define ","CamelC",": " ]
                  }, {
                     "r" : "240",
                     "s" : [ {
                        "value" : [ "Upper","(" ]
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
               "localId" : "240",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Upper",
               "signature" : [ {
                  "localId" : "241",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "235",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "aBcDeFg123",
                  "type" : "Literal"
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
               "s" : {
                  "r" : "244",
                  "s" : [ {
                     "value" : [ "","define ","NullString",": " ]
                  }, {
                     "r" : "250",
                     "s" : [ {
                        "r" : "245",
                        "value" : [ "Upper","(","null",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "250",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Upper",
               "signature" : [ {
                  "localId" : "252",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "251",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "245",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "244",
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
            "localId" : "211",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "209",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "210",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "208",
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
            "name" : "LowerC",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","LowerC",": " ]
                  }, {
                     "r" : "220",
                     "s" : [ {
                        "value" : [ "Lower","(" ]
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
               "localId" : "220",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Lower",
               "signature" : [ {
                  "localId" : "221",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "215",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "abcdefg123",
                  "type" : "Literal"
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
               "s" : {
                  "r" : "224",
                  "s" : [ {
                     "value" : [ "","define ","UpperC",": " ]
                  }, {
                     "r" : "230",
                     "s" : [ {
                        "value" : [ "Lower","(" ]
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
               "localId" : "230",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Lower",
               "signature" : [ {
                  "localId" : "231",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "225",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "ABCDEFG123",
                  "type" : "Literal"
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
               "s" : {
                  "r" : "234",
                  "s" : [ {
                     "value" : [ "","define ","CamelC",": " ]
                  }, {
                     "r" : "240",
                     "s" : [ {
                        "value" : [ "Lower","(" ]
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
               "localId" : "240",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Lower",
               "signature" : [ {
                  "localId" : "241",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "235",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "aBcDeFg123",
                  "type" : "Literal"
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
               "s" : {
                  "r" : "244",
                  "s" : [ {
                     "value" : [ "","define ","NullString",": " ]
                  }, {
                     "r" : "250",
                     "s" : [ {
                        "r" : "245",
                        "value" : [ "Lower","(","null",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "250",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Lower",
               "signature" : [ {
                  "localId" : "252",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "251",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "245",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "251",
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
            "localId" : "211",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "209",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "210",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "208",
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
            "name" : "HelloWorldSix",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","HelloWorldSix",": " ]
                  }, {
                     "r" : "215",
                     "s" : [ {
                        "r" : "216",
                        "s" : [ {
                           "value" : [ "'HelloWorld'" ]
                        } ]
                     }, {
                        "r" : "218",
                        "value" : [ "[","6","]" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "215",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Indexer",
               "signature" : [ {
                  "localId" : "219",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "220",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "216",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "HelloWorld",
                  "type" : "Literal"
               }, {
                  "localId" : "218",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "6",
                  "type" : "Literal"
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
               "s" : {
                  "r" : "223",
                  "s" : [ {
                     "value" : [ "","define ","HelloWorldZero",": " ]
                  }, {
                     "r" : "224",
                     "s" : [ {
                        "r" : "225",
                        "s" : [ {
                           "value" : [ "'HelloWorld'" ]
                        } ]
                     }, {
                        "r" : "227",
                        "value" : [ "[","0","]" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "224",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Indexer",
               "signature" : [ {
                  "localId" : "228",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "229",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "225",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "HelloWorld",
                  "type" : "Literal"
               }, {
                  "localId" : "227",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "0",
                  "type" : "Literal"
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
               "s" : {
                  "r" : "232",
                  "s" : [ {
                     "value" : [ "","define ","HelloWorldTwenty",": " ]
                  }, {
                     "r" : "233",
                     "s" : [ {
                        "r" : "234",
                        "s" : [ {
                           "value" : [ "'HelloWorld'" ]
                        } ]
                     }, {
                        "r" : "236",
                        "value" : [ "[","20","]" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "233",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Indexer",
               "signature" : [ {
                  "localId" : "237",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "238",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "234",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "HelloWorld",
                  "type" : "Literal"
               }, {
                  "localId" : "236",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "20",
                  "type" : "Literal"
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
               "s" : {
                  "r" : "241",
                  "s" : [ {
                     "value" : [ "","define ","NullString",": " ]
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
                              "value" : [ "null"," as " ]
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
                        "value" : [ "[","4","]" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "242",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Indexer",
               "signature" : [ {
                  "localId" : "247",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "248",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "243",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "244",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "245",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "246",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "4",
                  "type" : "Literal"
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
               "s" : {
                  "r" : "251",
                  "s" : [ {
                     "value" : [ "","define ","NullIndex",": " ]
                  }, {
                     "r" : "252",
                     "s" : [ {
                        "r" : "253",
                        "s" : [ {
                           "value" : [ "'HelloWorld'" ]
                        } ]
                     }, {
                        "r" : "255",
                        "value" : [ "[","null","]" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "252",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Indexer",
               "signature" : [ {
                  "localId" : "257",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "258",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "253",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "HelloWorld",
                  "type" : "Literal"
               }, {
                  "localId" : "256",
                  "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "255",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "272",
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
            "localId" : "211",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "209",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "210",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "208",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "MatchesTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","MatchesTrue",": " ]
                  }, {
                     "r" : "223",
                     "s" : [ {
                        "value" : [ "Matches","(" ]
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
               "localId" : "223",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Matches",
               "signature" : [ {
                  "localId" : "224",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "225",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "215",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "1,2three",
                  "type" : "Literal"
               }, {
                  "localId" : "217",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "\\d,\\d\\w+",
                  "type" : "Literal"
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
               "s" : {
                  "r" : "228",
                  "s" : [ {
                     "value" : [ "","define ","MatchesFalse",": " ]
                  }, {
                     "r" : "237",
                     "s" : [ {
                        "value" : [ "Matches","(" ]
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
               "localId" : "237",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Matches",
               "signature" : [ {
                  "localId" : "238",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "239",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "229",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "three",
                  "type" : "Literal"
               }, {
                  "localId" : "231",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "\\d",
                  "type" : "Literal"
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
               "s" : {
                  "r" : "242",
                  "s" : [ {
                     "value" : [ "","define ","MatchesIsNullFirst",": " ]
                  }, {
                     "r" : "251",
                     "s" : [ {
                        "r" : "243",
                        "value" : [ "Matches","(","null",", " ]
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
               "localId" : "251",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Matches",
               "signature" : [ {
                  "localId" : "253",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "254",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "252",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "243",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "244",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "\\w+",
                  "type" : "Literal"
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
               "s" : {
                  "r" : "257",
                  "s" : [ {
                     "value" : [ "","define ","MatchesIsNullSecond",": " ]
                  }, {
                     "r" : "266",
                     "s" : [ {
                        "value" : [ "Matches","(" ]
                     }, {
                        "r" : "258",
                        "s" : [ {
                           "value" : [ "'12three'" ]
                        } ]
                     }, {
                        "r" : "260",
                        "value" : [ ", ","null",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "266",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Matches",
               "signature" : [ {
                  "localId" : "268",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "269",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "258",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "12three",
                  "type" : "Literal"
               }, {
                  "localId" : "267",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "260",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
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
               "s" : {
                  "r" : "272",
                  "s" : [ {
                     "value" : [ "","define ","MatchesAllNull",": " ]
                  }, {
                     "r" : "281",
                     "s" : [ {
                        "r" : "273",
                        "value" : [ "Matches","(","null",", ","null",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "281",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Matches",
               "signature" : [ {
                  "localId" : "284",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "285",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "282",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "273",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "283",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "274",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "257",
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
            "localId" : "211",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "209",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "210",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "208",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Found",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","Found",": " ]
                  }, {
                     "r" : "223",
                     "s" : [ {
                        "value" : [ "PositionOf","(" ]
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
               "localId" : "223",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "PositionOf",
               "signature" : [ {
                  "localId" : "224",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "225",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "pattern" : {
                  "localId" : "215",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "cde",
                  "type" : "Literal"
               },
               "string" : {
                  "localId" : "217",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "abcdefg",
                  "type" : "Literal"
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
               "s" : {
                  "r" : "228",
                  "s" : [ {
                     "value" : [ "","define ","NotFound",": " ]
                  }, {
                     "r" : "237",
                     "s" : [ {
                        "value" : [ "PositionOf","(" ]
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
               "localId" : "237",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "PositionOf",
               "signature" : [ {
                  "localId" : "238",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "239",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "pattern" : {
                  "localId" : "229",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "fgh",
                  "type" : "Literal"
               },
               "string" : {
                  "localId" : "231",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "abcdefg",
                  "type" : "Literal"
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
               "s" : {
                  "r" : "242",
                  "s" : [ {
                     "value" : [ "","define ","NullPattern",": " ]
                  }, {
                     "r" : "251",
                     "s" : [ {
                        "r" : "243",
                        "value" : [ "PositionOf","(","null",", " ]
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
               "localId" : "251",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "PositionOf",
               "signature" : [ {
                  "localId" : "253",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "254",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "pattern" : {
                  "localId" : "252",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "243",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               },
               "string" : {
                  "localId" : "244",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "abcdefg",
                  "type" : "Literal"
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
               "s" : {
                  "r" : "257",
                  "s" : [ {
                     "value" : [ "","define ","NullString",": " ]
                  }, {
                     "r" : "266",
                     "s" : [ {
                        "value" : [ "PositionOf","(" ]
                     }, {
                        "r" : "258",
                        "s" : [ {
                           "value" : [ "'cde'" ]
                        } ]
                     }, {
                        "r" : "260",
                        "value" : [ ", ","null",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "266",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "PositionOf",
               "signature" : [ {
                  "localId" : "268",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "269",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "pattern" : {
                  "localId" : "258",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "cde",
                  "type" : "Literal"
               },
               "string" : {
                  "localId" : "267",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "260",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "257",
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
            "localId" : "211",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "209",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "210",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "208",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Found",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","Found",": " ]
                  }, {
                     "r" : "223",
                     "s" : [ {
                        "value" : [ "LastPositionOf","(" ]
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
               "localId" : "223",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "LastPositionOf",
               "signature" : [ {
                  "localId" : "224",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "225",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "pattern" : {
                  "localId" : "215",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "B",
                  "type" : "Literal"
               },
               "string" : {
                  "localId" : "217",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "ABCDEDCBA",
                  "type" : "Literal"
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
               "s" : {
                  "r" : "228",
                  "s" : [ {
                     "value" : [ "// 7\n","define ","NotFound",": " ]
                  }, {
                     "r" : "237",
                     "s" : [ {
                        "value" : [ "LastPositionOf","(" ]
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
               "localId" : "237",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "LastPositionOf",
               "signature" : [ {
                  "localId" : "238",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "239",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "pattern" : {
                  "localId" : "229",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "XYZ",
                  "type" : "Literal"
               },
               "string" : {
                  "localId" : "231",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "ABCDE",
                  "type" : "Literal"
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
               "s" : {
                  "r" : "242",
                  "s" : [ {
                     "value" : [ "// -1\n","define ","NullPattern",": " ]
                  }, {
                     "r" : "251",
                     "s" : [ {
                        "r" : "243",
                        "value" : [ "LastPositionOf","(","null",", " ]
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
               "localId" : "251",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "LastPositionOf",
               "signature" : [ {
                  "localId" : "253",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "254",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "pattern" : {
                  "localId" : "252",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "243",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               },
               "string" : {
                  "localId" : "244",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "ABCDE",
                  "type" : "Literal"
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
               "s" : {
                  "r" : "257",
                  "s" : [ {
                     "value" : [ "// null\n","define ","NullString",": " ]
                  }, {
                     "r" : "266",
                     "s" : [ {
                        "value" : [ "LastPositionOf","(" ]
                     }, {
                        "r" : "258",
                        "s" : [ {
                           "value" : [ "'ABCDE'" ]
                        } ]
                     }, {
                        "r" : "260",
                        "value" : [ ", ","null",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "266",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "LastPositionOf",
               "signature" : [ {
                  "localId" : "268",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "269",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "pattern" : {
                  "localId" : "258",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "ABCDE",
                  "type" : "Literal"
               },
               "string" : {
                  "localId" : "267",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "260",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "335",
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
            "localId" : "211",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "209",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "210",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "208",
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
            "name" : "World",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","World",": " ]
                  }, {
                     "r" : "222",
                     "s" : [ {
                        "value" : [ "Substring","(" ]
                     }, {
                        "r" : "215",
                        "s" : [ {
                           "value" : [ "'HelloWorld'" ]
                        } ]
                     }, {
                        "r" : "217",
                        "value" : [ ", ","5",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "222",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Substring",
               "signature" : [ {
                  "localId" : "223",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "224",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "stringToSub" : {
                  "localId" : "215",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "HelloWorld",
                  "type" : "Literal"
               },
               "startIndex" : {
                  "localId" : "217",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
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
               "s" : {
                  "r" : "227",
                  "s" : [ {
                     "value" : [ "","define ","Or",": " ]
                  }, {
                     "r" : "237",
                     "s" : [ {
                        "value" : [ "Substring","(" ]
                     }, {
                        "r" : "228",
                        "s" : [ {
                           "value" : [ "'HelloWorld'" ]
                        } ]
                     }, {
                        "r" : "230",
                        "value" : [ ", ","7",", ","2",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "237",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Substring",
               "signature" : [ {
                  "localId" : "238",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "239",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "240",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "stringToSub" : {
                  "localId" : "228",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "HelloWorld",
                  "type" : "Literal"
               },
               "startIndex" : {
                  "localId" : "230",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "7",
                  "type" : "Literal"
               },
               "length" : {
                  "localId" : "231",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "type" : "Literal"
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
               "s" : {
                  "r" : "243",
                  "s" : [ {
                     "value" : [ "","define ","ZeroLength",": " ]
                  }, {
                     "r" : "253",
                     "s" : [ {
                        "value" : [ "Substring","(" ]
                     }, {
                        "r" : "244",
                        "s" : [ {
                           "value" : [ "'HelloWorld'" ]
                        } ]
                     }, {
                        "r" : "246",
                        "value" : [ ", ","7",", ","0",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "253",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Substring",
               "signature" : [ {
                  "localId" : "254",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "255",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "256",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "stringToSub" : {
                  "localId" : "244",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "HelloWorld",
                  "type" : "Literal"
               },
               "startIndex" : {
                  "localId" : "246",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "7",
                  "type" : "Literal"
               },
               "length" : {
                  "localId" : "247",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "0",
                  "type" : "Literal"
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
               "s" : {
                  "r" : "259",
                  "s" : [ {
                     "value" : [ "","define ","StartTooLow",": " ]
                  }, {
                     "r" : "269",
                     "s" : [ {
                        "value" : [ "Substring","(" ]
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
                           "value" : [ "-","1" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "269",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Substring",
               "signature" : [ {
                  "localId" : "270",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "271",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "stringToSub" : {
                  "localId" : "260",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "HelloWorld",
                  "type" : "Literal"
               },
               "startIndex" : {
                  "localId" : "262",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "Negate",
                  "signature" : [ {
                     "localId" : "264",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "263",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
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
               "s" : {
                  "r" : "274",
                  "s" : [ {
                     "value" : [ "","define ","StartZero",": " ]
                  }, {
                     "r" : "282",
                     "s" : [ {
                        "value" : [ "Substring","(" ]
                     }, {
                        "r" : "275",
                        "s" : [ {
                           "value" : [ "'HelloWorld'" ]
                        } ]
                     }, {
                        "r" : "277",
                        "value" : [ ", ","0",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "282",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Substring",
               "signature" : [ {
                  "localId" : "283",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "284",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "stringToSub" : {
                  "localId" : "275",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "HelloWorld",
                  "type" : "Literal"
               },
               "startIndex" : {
                  "localId" : "277",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "0",
                  "type" : "Literal"
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
               "s" : {
                  "r" : "287",
                  "s" : [ {
                     "value" : [ "","define ","TooMuchLength",": " ]
                  }, {
                     "r" : "297",
                     "s" : [ {
                        "value" : [ "Substring","(" ]
                     }, {
                        "r" : "288",
                        "s" : [ {
                           "value" : [ "'HelloWorld'" ]
                        } ]
                     }, {
                        "r" : "290",
                        "value" : [ ", ","7",", ","25",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "297",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Substring",
               "signature" : [ {
                  "localId" : "298",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "299",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "300",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "stringToSub" : {
                  "localId" : "288",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "HelloWorld",
                  "type" : "Literal"
               },
               "startIndex" : {
                  "localId" : "290",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "7",
                  "type" : "Literal"
               },
               "length" : {
                  "localId" : "291",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "25",
                  "type" : "Literal"
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
               "s" : {
                  "r" : "303",
                  "s" : [ {
                     "value" : [ "","define ","NegativeLength",": " ]
                  }, {
                     "r" : "315",
                     "s" : [ {
                        "value" : [ "Substring","(" ]
                     }, {
                        "r" : "304",
                        "s" : [ {
                           "value" : [ "'HelloWorld'" ]
                        } ]
                     }, {
                        "r" : "306",
                        "value" : [ ", ","7",", " ]
                     }, {
                        "r" : "307",
                        "s" : [ {
                           "r" : "308",
                           "value" : [ "-","1" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "315",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Substring",
               "signature" : [ {
                  "localId" : "316",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "317",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "318",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "stringToSub" : {
                  "localId" : "304",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "HelloWorld",
                  "type" : "Literal"
               },
               "startIndex" : {
                  "localId" : "306",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "7",
                  "type" : "Literal"
               },
               "length" : {
                  "localId" : "307",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "Negate",
                  "signature" : [ {
                     "localId" : "309",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "308",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
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
               "s" : {
                  "r" : "321",
                  "s" : [ {
                     "value" : [ "","define ","NullString",": " ]
                  }, {
                     "r" : "329",
                     "s" : [ {
                        "r" : "322",
                        "value" : [ "Substring","(","null",", ","5",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "329",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Substring",
               "signature" : [ {
                  "localId" : "331",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "332",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "stringToSub" : {
                  "localId" : "330",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "322",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               },
               "startIndex" : {
                  "localId" : "323",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
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
               "s" : {
                  "r" : "335",
                  "s" : [ {
                     "value" : [ "","define ","NullStart",": " ]
                  }, {
                     "r" : "344",
                     "s" : [ {
                        "value" : [ "Substring","(" ]
                     }, {
                        "r" : "336",
                        "s" : [ {
                           "value" : [ "'HelloWorld'" ]
                        } ]
                     }, {
                        "r" : "338",
                        "value" : [ ", ","null",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "344",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Substring",
               "signature" : [ {
                  "localId" : "346",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "347",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "stringToSub" : {
                  "localId" : "336",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "HelloWorld",
                  "type" : "Literal"
               },
               "startIndex" : {
                  "localId" : "345",
                  "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "338",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "315",
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
            "localId" : "211",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "209",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "210",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "208",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "FooBarStartsWithFoo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","FooBarStartsWithFoo",": " ]
                  }, {
                     "r" : "223",
                     "s" : [ {
                        "value" : [ "StartsWith","(" ]
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
               "localId" : "223",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "StartsWith",
               "signature" : [ {
                  "localId" : "224",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "225",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "215",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "FooBar",
                  "type" : "Literal"
               }, {
                  "localId" : "217",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Foo",
                  "type" : "Literal"
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
               "s" : {
                  "r" : "228",
                  "s" : [ {
                     "value" : [ "","define ","FooBarStartsWithBar",": " ]
                  }, {
                     "r" : "237",
                     "s" : [ {
                        "value" : [ "StartsWith","(" ]
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
               "localId" : "237",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "StartsWith",
               "signature" : [ {
                  "localId" : "238",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "239",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "229",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "FooBar",
                  "type" : "Literal"
               }, {
                  "localId" : "231",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Bar",
                  "type" : "Literal"
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
               "s" : {
                  "r" : "242",
                  "s" : [ {
                     "value" : [ "","define ","FooBarStartsWithBlank",": " ]
                  }, {
                     "r" : "251",
                     "s" : [ {
                        "value" : [ "StartsWith","(" ]
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
               "localId" : "251",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "StartsWith",
               "signature" : [ {
                  "localId" : "252",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "253",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "243",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "FooBar",
                  "type" : "Literal"
               }, {
                  "localId" : "245",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "",
                  "type" : "Literal"
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
               "s" : {
                  "r" : "256",
                  "s" : [ {
                     "value" : [ "","define ","BlankStartsWithFoo",": " ]
                  }, {
                     "r" : "265",
                     "s" : [ {
                        "value" : [ "StartsWith","(" ]
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
               "localId" : "265",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "StartsWith",
               "signature" : [ {
                  "localId" : "266",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "267",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "257",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "",
                  "type" : "Literal"
               }, {
                  "localId" : "259",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Foo",
                  "type" : "Literal"
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
               "s" : {
                  "r" : "270",
                  "s" : [ {
                     "value" : [ "","define ","StartsWithNull",": " ]
                  }, {
                     "r" : "279",
                     "s" : [ {
                        "value" : [ "StartsWith","(" ]
                     }, {
                        "r" : "271",
                        "s" : [ {
                           "value" : [ "'FooBar'" ]
                        } ]
                     }, {
                        "r" : "273",
                        "value" : [ ", ","null",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "279",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "StartsWith",
               "signature" : [ {
                  "localId" : "281",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "282",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "271",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "FooBar",
                  "type" : "Literal"
               }, {
                  "localId" : "280",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "273",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
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
               "s" : {
                  "r" : "285",
                  "s" : [ {
                     "value" : [ "","define ","StartsWithNullAsString",": " ]
                  }, {
                     "r" : "295",
                     "s" : [ {
                        "value" : [ "StartsWith","(" ]
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
                           "value" : [ "null"," as " ]
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
               "localId" : "295",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "StartsWith",
               "signature" : [ {
                  "localId" : "296",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "297",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "286",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "FooBar",
                  "type" : "Literal"
               }, {
                  "localId" : "288",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "289",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "290",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "300",
                  "s" : [ {
                     "value" : [ "","define ","NullStartsWith",": " ]
                  }, {
                     "r" : "309",
                     "s" : [ {
                        "r" : "301",
                        "value" : [ "StartsWith","(","null",", " ]
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
               "localId" : "309",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "StartsWith",
               "signature" : [ {
                  "localId" : "311",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "312",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "310",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "301",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "302",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Foo",
                  "type" : "Literal"
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
               "s" : {
                  "r" : "315",
                  "s" : [ {
                     "value" : [ "","define ","NullAsStringStartsWith",": " ]
                  }, {
                     "r" : "325",
                     "s" : [ {
                        "value" : [ "StartsWith","(" ]
                     }, {
                        "r" : "316",
                        "s" : [ {
                           "r" : "317",
                           "value" : [ "null"," as " ]
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
               "localId" : "325",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "StartsWith",
               "signature" : [ {
                  "localId" : "326",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "327",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "316",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "317",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "318",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "319",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Foo",
                  "type" : "Literal"
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "315",
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
            "localId" : "211",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "209",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "210",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "208",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "FooBarEndsWithBar",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","FooBarEndsWithBar",": " ]
                  }, {
                     "r" : "223",
                     "s" : [ {
                        "value" : [ "EndsWith","(" ]
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
               "localId" : "223",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "EndsWith",
               "signature" : [ {
                  "localId" : "224",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "225",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "215",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "FooBar",
                  "type" : "Literal"
               }, {
                  "localId" : "217",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Bar",
                  "type" : "Literal"
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
               "s" : {
                  "r" : "228",
                  "s" : [ {
                     "value" : [ "","define ","FooBarEndsWithFoo",": " ]
                  }, {
                     "r" : "237",
                     "s" : [ {
                        "value" : [ "EndsWith","(" ]
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
               "localId" : "237",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "EndsWith",
               "signature" : [ {
                  "localId" : "238",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "239",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "229",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "FooBar",
                  "type" : "Literal"
               }, {
                  "localId" : "231",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Foo",
                  "type" : "Literal"
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
               "s" : {
                  "r" : "242",
                  "s" : [ {
                     "value" : [ "","define ","FooBarEndsWithBlank",": " ]
                  }, {
                     "r" : "251",
                     "s" : [ {
                        "value" : [ "EndsWith","(" ]
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
               "localId" : "251",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "EndsWith",
               "signature" : [ {
                  "localId" : "252",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "253",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "243",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "FooBar",
                  "type" : "Literal"
               }, {
                  "localId" : "245",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "",
                  "type" : "Literal"
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
               "s" : {
                  "r" : "256",
                  "s" : [ {
                     "value" : [ "","define ","BlankEndsWithFoo",": " ]
                  }, {
                     "r" : "265",
                     "s" : [ {
                        "value" : [ "EndsWith","(" ]
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
               "localId" : "265",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "EndsWith",
               "signature" : [ {
                  "localId" : "266",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "267",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "257",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "",
                  "type" : "Literal"
               }, {
                  "localId" : "259",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Foo",
                  "type" : "Literal"
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
               "s" : {
                  "r" : "270",
                  "s" : [ {
                     "value" : [ "","define ","EndsWithNull",": " ]
                  }, {
                     "r" : "279",
                     "s" : [ {
                        "value" : [ "EndsWith","(" ]
                     }, {
                        "r" : "271",
                        "s" : [ {
                           "value" : [ "'FooBar'" ]
                        } ]
                     }, {
                        "r" : "273",
                        "value" : [ ", ","null",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "279",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "EndsWith",
               "signature" : [ {
                  "localId" : "281",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "282",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "271",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "FooBar",
                  "type" : "Literal"
               }, {
                  "localId" : "280",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "273",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
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
               "s" : {
                  "r" : "285",
                  "s" : [ {
                     "value" : [ "","define ","EndsWithNullAsString",": " ]
                  }, {
                     "r" : "295",
                     "s" : [ {
                        "value" : [ "EndsWith","(" ]
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
                           "value" : [ "null"," as " ]
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
               "localId" : "295",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "EndsWith",
               "signature" : [ {
                  "localId" : "296",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "297",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "286",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "FooBar",
                  "type" : "Literal"
               }, {
                  "localId" : "288",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "289",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "290",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "300",
                  "s" : [ {
                     "value" : [ "","define ","NullEndsWith",": " ]
                  }, {
                     "r" : "310",
                     "s" : [ {
                        "value" : [ "EndsWith","(" ]
                     }, {
                        "r" : "301",
                        "s" : [ {
                           "r" : "302",
                           "value" : [ "null"," as " ]
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
               "localId" : "310",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "EndsWith",
               "signature" : [ {
                  "localId" : "311",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "312",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "301",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "302",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "303",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "304",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Foo",
                  "type" : "Literal"
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
               "s" : {
                  "r" : "315",
                  "s" : [ {
                     "value" : [ "","define ","NullAsStringEndsWith",": " ]
                  }, {
                     "r" : "325",
                     "s" : [ {
                        "value" : [ "EndsWith","(" ]
                     }, {
                        "r" : "316",
                        "s" : [ {
                           "r" : "317",
                           "value" : [ "null"," as " ]
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
               "localId" : "325",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "EndsWith",
               "signature" : [ {
                  "localId" : "326",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "327",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "316",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "317",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "318",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "319",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Foo",
                  "type" : "Literal"
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "414",
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
            "localId" : "211",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "209",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "210",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "208",
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
            "name" : "ReplaceOne",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","ReplaceOne",": " ]
                  }, {
                     "r" : "226",
                     "s" : [ {
                        "value" : [ "ReplaceMatches","(" ]
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
               "localId" : "226",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "ReplaceMatches",
               "signature" : [ {
                  "localId" : "227",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "228",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "229",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "215",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "FooBar",
                  "type" : "Literal"
               }, {
                  "localId" : "217",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Bar",
                  "type" : "Literal"
               }, {
                  "localId" : "219",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Baz",
                  "type" : "Literal"
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
               "s" : {
                  "r" : "232",
                  "s" : [ {
                     "value" : [ "","define ","ReplaceMany",": " ]
                  }, {
                     "r" : "244",
                     "s" : [ {
                        "value" : [ "ReplaceMatches","(" ]
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
               "localId" : "244",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "ReplaceMatches",
               "signature" : [ {
                  "localId" : "245",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "246",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "247",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "233",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "FooBarFooBarFooBar",
                  "type" : "Literal"
               }, {
                  "localId" : "235",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Bar",
                  "type" : "Literal"
               }, {
                  "localId" : "237",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Baz",
                  "type" : "Literal"
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
               "s" : {
                  "r" : "250",
                  "s" : [ {
                     "value" : [ "","define ","ReplaceCapital",": " ]
                  }, {
                     "r" : "262",
                     "s" : [ {
                        "value" : [ "ReplaceMatches","(" ]
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
               "localId" : "262",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "ReplaceMatches",
               "signature" : [ {
                  "localId" : "263",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "264",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "265",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "251",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Tattle",
                  "type" : "Literal"
               }, {
                  "localId" : "253",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "T",
                  "type" : "Literal"
               }, {
                  "localId" : "255",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "R",
                  "type" : "Literal"
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
               "s" : {
                  "r" : "268",
                  "s" : [ {
                     "value" : [ "","define ","ReplaceDiacritical",": " ]
                  }, {
                     "r" : "280",
                     "s" : [ {
                        "value" : [ "ReplaceMatches","(" ]
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
               "localId" : "280",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "ReplaceMatches",
               "signature" : [ {
                  "localId" : "281",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "282",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "283",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "269",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Cafè",
                  "type" : "Literal"
               }, {
                  "localId" : "271",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "è",
                  "type" : "Literal"
               }, {
                  "localId" : "273",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "é",
                  "type" : "Literal"
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
               "s" : {
                  "r" : "286",
                  "s" : [ {
                     "value" : [ "","define ","ReplaceUnicode",": " ]
                  }, {
                     "r" : "298",
                     "s" : [ {
                        "value" : [ "ReplaceMatches","(" ]
                     }, {
                        "r" : "287",
                        "s" : [ {
                           "value" : [ "'Turn that frown \uD83D\uDE41 upside down! \uD83D\uDE03'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "289",
                        "s" : [ {
                           "value" : [ "'\uD83D\uDE41'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "291",
                        "s" : [ {
                           "value" : [ "'\uD83D\uDE03'" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "298",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "ReplaceMatches",
               "signature" : [ {
                  "localId" : "299",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "300",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "301",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "287",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Turn that frown \uD83D\uDE41 upside down! \uD83D\uDE03",
                  "type" : "Literal"
               }, {
                  "localId" : "289",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "\uD83D\uDE41",
                  "type" : "Literal"
               }, {
                  "localId" : "291",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "\uD83D\uDE03",
                  "type" : "Literal"
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
               "s" : {
                  "r" : "304",
                  "s" : [ {
                     "value" : [ "","define ","ReplaceSpace",": " ]
                  }, {
                     "r" : "316",
                     "s" : [ {
                        "value" : [ "ReplaceMatches","(" ]
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
               "localId" : "316",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "ReplaceMatches",
               "signature" : [ {
                  "localId" : "317",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "318",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "319",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "305",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "(123) 456 7890",
                  "type" : "Literal"
               }, {
                  "localId" : "307",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "\\s",
                  "type" : "Literal"
               }, {
                  "localId" : "309",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "-",
                  "type" : "Literal"
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
               "s" : {
                  "r" : "322",
                  "s" : [ {
                     "value" : [ "","define ","ReplaceEmpty",": " ]
                  }, {
                     "r" : "334",
                     "s" : [ {
                        "value" : [ "ReplaceMatches","(" ]
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
               "localId" : "334",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "ReplaceMatches",
               "signature" : [ {
                  "localId" : "335",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "336",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "337",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "323",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "FooBar",
                  "type" : "Literal"
               }, {
                  "localId" : "325",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "",
                  "type" : "Literal"
               }, {
                  "localId" : "327",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : ".",
                  "type" : "Literal"
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
               "s" : {
                  "r" : "340",
                  "s" : [ {
                     "value" : [ "","define ","ReplaceMatchGroups",": " ]
                  }, {
                     "r" : "352",
                     "s" : [ {
                        "value" : [ "ReplaceMatches","(" ]
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
               "localId" : "352",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "ReplaceMatches",
               "signature" : [ {
                  "localId" : "353",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "354",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "355",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "341",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Foo[123]",
                  "type" : "Literal"
               }, {
                  "localId" : "343",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Foo\\[(\\d+)]",
                  "type" : "Literal"
               }, {
                  "localId" : "345",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Bar[$1]",
                  "type" : "Literal"
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
               "s" : {
                  "r" : "358",
                  "s" : [ {
                     "value" : [ "","define ","ReplaceNone",": " ]
                  }, {
                     "r" : "370",
                     "s" : [ {
                        "value" : [ "ReplaceMatches","(" ]
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
               "localId" : "370",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "ReplaceMatches",
               "signature" : [ {
                  "localId" : "371",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "372",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "373",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "359",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Foo",
                  "type" : "Literal"
               }, {
                  "localId" : "361",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Bar",
                  "type" : "Literal"
               }, {
                  "localId" : "363",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Baz",
                  "type" : "Literal"
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
               "s" : {
                  "r" : "376",
                  "s" : [ {
                     "value" : [ "","define ","ReplaceArgumentIsNull",": " ]
                  }, {
                     "r" : "388",
                     "s" : [ {
                        "r" : "377",
                        "value" : [ "ReplaceMatches","(","null",", " ]
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
               "localId" : "388",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "ReplaceMatches",
               "signature" : [ {
                  "localId" : "390",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "391",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "392",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "389",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "377",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "378",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Bar",
                  "type" : "Literal"
               }, {
                  "localId" : "380",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Baz",
                  "type" : "Literal"
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
               "s" : {
                  "r" : "395",
                  "s" : [ {
                     "value" : [ "","define ","ReplacePatternIsNull",": " ]
                  }, {
                     "r" : "407",
                     "s" : [ {
                        "value" : [ "ReplaceMatches","(" ]
                     }, {
                        "r" : "396",
                        "s" : [ {
                           "value" : [ "'Foo'" ]
                        } ]
                     }, {
                        "r" : "398",
                        "value" : [ ", ","null",", " ]
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
               "localId" : "407",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "ReplaceMatches",
               "signature" : [ {
                  "localId" : "409",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "410",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "411",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "396",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Foo",
                  "type" : "Literal"
               }, {
                  "localId" : "408",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "398",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "399",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Baz",
                  "type" : "Literal"
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
               "s" : {
                  "r" : "414",
                  "s" : [ {
                     "value" : [ "","define ","ReplaceSubstitutionIsNull",": " ]
                  }, {
                     "r" : "426",
                     "s" : [ {
                        "value" : [ "ReplaceMatches","(" ]
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
                        "value" : [ ", ","null",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "426",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "ReplaceMatches",
               "signature" : [ {
                  "localId" : "428",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "429",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "430",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "415",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Foo",
                  "type" : "Literal"
               }, {
                  "localId" : "417",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Bar",
                  "type" : "Literal"
               }, {
                  "localId" : "427",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "419",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               } ]
            }
         } ]
      }
   }
}

