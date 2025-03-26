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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "message" : "You used a string literal: [Hello] here that matches an identifier in scope: [Hello]. Did you mean to use the identifier instead?",
         "errorType" : "semantic",
         "errorSeverity" : "warning",
         "type" : "CqlToElmError"
      }, {
         "message" : "You used a string literal: [World] here that matches an identifier in scope: [World]. Did you mean to use the identifier instead?",
         "errorType" : "semantic",
         "errorSeverity" : "warning",
         "type" : "CqlToElmError"
      }, {
         "message" : "You used a string literal: [Hello] here that matches an identifier in scope: [Hello]. Did you mean to use the identifier instead?",
         "errorType" : "semantic",
         "errorSeverity" : "warning",
         "type" : "CqlToElmError"
      }, {
         "message" : "You used a string literal: [World] here that matches an identifier in scope: [World]. Did you mean to use the identifier instead?",
         "errorType" : "semantic",
         "errorSeverity" : "warning",
         "type" : "CqlToElmError"
      }, {
         "message" : "You used a string literal: [Hello] here that matches an identifier in scope: [Hello]. Did you mean to use the identifier instead?",
         "errorType" : "semantic",
         "errorSeverity" : "warning",
         "type" : "CqlToElmError"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "697",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "HelloWorld",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","HelloWorld",": " ]
                  }, {
                     "r" : "218",
                     "s" : [ {
                        "r" : "214",
                        "s" : [ {
                           "value" : [ "'Hello'" ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "215",
                        "s" : [ {
                           "value" : [ "'World'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "218",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Concatenate",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "214",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Hello",
                  "type" : "Literal"
               }, {
                  "localId" : "215",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "World",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "220",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "Sentence",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "220",
                  "s" : [ {
                     "value" : [ "","define ","Sentence",": " ]
                  }, {
                     "r" : "301",
                     "s" : [ {
                        "r" : "297",
                        "s" : [ {
                           "r" : "293",
                           "s" : [ {
                              "r" : "289",
                              "s" : [ {
                                 "r" : "285",
                                 "s" : [ {
                                    "r" : "281",
                                    "s" : [ {
                                       "r" : "277",
                                       "s" : [ {
                                          "r" : "273",
                                          "s" : [ {
                                             "r" : "269",
                                             "s" : [ {
                                                "r" : "265",
                                                "s" : [ {
                                                   "r" : "261",
                                                   "s" : [ {
                                                      "r" : "257",
                                                      "s" : [ {
                                                         "r" : "253",
                                                         "s" : [ {
                                                            "r" : "249",
                                                            "s" : [ {
                                                               "r" : "245",
                                                               "s" : [ {
                                                                  "r" : "241",
                                                                  "s" : [ {
                                                                     "r" : "237",
                                                                     "s" : [ {
                                                                        "value" : [ "'The'" ]
                                                                     } ]
                                                                  }, {
                                                                     "value" : [ " + " ]
                                                                  }, {
                                                                     "r" : "238",
                                                                     "s" : [ {
                                                                        "value" : [ "' '" ]
                                                                     } ]
                                                                  } ]
                                                               }, {
                                                                  "value" : [ " + " ]
                                                               }, {
                                                                  "r" : "242",
                                                                  "s" : [ {
                                                                     "value" : [ "'quick'" ]
                                                                  } ]
                                                               } ]
                                                            }, {
                                                               "value" : [ " + " ]
                                                            }, {
                                                               "r" : "246",
                                                               "s" : [ {
                                                                  "value" : [ "' '" ]
                                                               } ]
                                                            } ]
                                                         }, {
                                                            "value" : [ " + " ]
                                                         }, {
                                                            "r" : "250",
                                                            "s" : [ {
                                                               "value" : [ "'brown'" ]
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
                                                      "r" : "258",
                                                      "s" : [ {
                                                         "value" : [ "'fox'" ]
                                                      } ]
                                                   } ]
                                                }, {
                                                   "value" : [ " + " ]
                                                }, {
                                                   "r" : "262",
                                                   "s" : [ {
                                                      "value" : [ "' '" ]
                                                   } ]
                                                } ]
                                             }, {
                                                "value" : [ " + " ]
                                             }, {
                                                "r" : "266",
                                                "s" : [ {
                                                   "value" : [ "'jumps'" ]
                                                } ]
                                             } ]
                                          }, {
                                             "value" : [ " + " ]
                                          }, {
                                             "r" : "270",
                                             "s" : [ {
                                                "value" : [ "' '" ]
                                             } ]
                                          } ]
                                       }, {
                                          "value" : [ "\n                  + " ]
                                       }, {
                                          "r" : "274",
                                          "s" : [ {
                                             "value" : [ "'over'" ]
                                          } ]
                                       } ]
                                    }, {
                                       "value" : [ " + " ]
                                    }, {
                                       "r" : "278",
                                       "s" : [ {
                                          "value" : [ "' '" ]
                                       } ]
                                    } ]
                                 }, {
                                    "value" : [ " + " ]
                                 }, {
                                    "r" : "282",
                                    "s" : [ {
                                       "value" : [ "'the'" ]
                                    } ]
                                 } ]
                              }, {
                                 "value" : [ " + " ]
                              }, {
                                 "r" : "286",
                                 "s" : [ {
                                    "value" : [ "' '" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " + " ]
                           }, {
                              "r" : "290",
                              "s" : [ {
                                 "value" : [ "'lazy'" ]
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
                        "r" : "298",
                        "s" : [ {
                           "value" : [ "'dog.'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "301",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Concatenate",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "297",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "Concatenate",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "293",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "Concatenate",
                     "signature" : [ ],
                     "operand" : [ {
                        "localId" : "289",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "Concatenate",
                        "signature" : [ ],
                        "operand" : [ {
                           "localId" : "285",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "Concatenate",
                           "signature" : [ ],
                           "operand" : [ {
                              "localId" : "281",
                              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "Concatenate",
                              "signature" : [ ],
                              "operand" : [ {
                                 "localId" : "277",
                                 "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                 "type" : "Concatenate",
                                 "signature" : [ ],
                                 "operand" : [ {
                                    "localId" : "273",
                                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                    "type" : "Concatenate",
                                    "signature" : [ ],
                                    "operand" : [ {
                                       "localId" : "269",
                                       "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                       "type" : "Concatenate",
                                       "signature" : [ ],
                                       "operand" : [ {
                                          "localId" : "265",
                                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                          "type" : "Concatenate",
                                          "signature" : [ ],
                                          "operand" : [ {
                                             "localId" : "261",
                                             "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                             "type" : "Concatenate",
                                             "signature" : [ ],
                                             "operand" : [ {
                                                "localId" : "257",
                                                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                                "type" : "Concatenate",
                                                "signature" : [ ],
                                                "operand" : [ {
                                                   "localId" : "253",
                                                   "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                                   "type" : "Concatenate",
                                                   "signature" : [ ],
                                                   "operand" : [ {
                                                      "localId" : "249",
                                                      "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                                      "type" : "Concatenate",
                                                      "signature" : [ ],
                                                      "operand" : [ {
                                                         "localId" : "245",
                                                         "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                                         "type" : "Concatenate",
                                                         "signature" : [ ],
                                                         "operand" : [ {
                                                            "localId" : "241",
                                                            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                                            "type" : "Concatenate",
                                                            "signature" : [ ],
                                                            "operand" : [ {
                                                               "localId" : "237",
                                                               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                                               "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                               "value" : "The",
                                                               "type" : "Literal"
                                                            }, {
                                                               "localId" : "238",
                                                               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                                               "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                               "value" : " ",
                                                               "type" : "Literal"
                                                            } ]
                                                         }, {
                                                            "localId" : "242",
                                                            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                                            "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                            "value" : "quick",
                                                            "type" : "Literal"
                                                         } ]
                                                      }, {
                                                         "localId" : "246",
                                                         "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                                         "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                         "value" : " ",
                                                         "type" : "Literal"
                                                      } ]
                                                   }, {
                                                      "localId" : "250",
                                                      "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                                      "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                      "value" : "brown",
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
                                                "localId" : "258",
                                                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                "value" : "fox",
                                                "type" : "Literal"
                                             } ]
                                          }, {
                                             "localId" : "262",
                                             "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                             "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                             "value" : " ",
                                             "type" : "Literal"
                                          } ]
                                       }, {
                                          "localId" : "266",
                                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                          "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                          "value" : "jumps",
                                          "type" : "Literal"
                                       } ]
                                    }, {
                                       "localId" : "270",
                                       "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                       "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                       "value" : " ",
                                       "type" : "Literal"
                                    } ]
                                 }, {
                                    "localId" : "274",
                                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                    "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                    "value" : "over",
                                    "type" : "Literal"
                                 } ]
                              }, {
                                 "localId" : "278",
                                 "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                 "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                 "value" : " ",
                                 "type" : "Literal"
                              } ]
                           }, {
                              "localId" : "282",
                              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "the",
                              "type" : "Literal"
                           } ]
                        }, {
                           "localId" : "286",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : " ",
                           "type" : "Literal"
                        } ]
                     }, {
                        "localId" : "290",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "lazy",
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
                  "localId" : "298",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "dog.",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "303",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "ConcatNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "303",
                  "s" : [ {
                     "value" : [ "","define ","ConcatNull",": " ]
                  }, {
                     "r" : "310",
                     "s" : [ {
                        "r" : "305",
                        "s" : [ {
                           "value" : [ "'Hello'" ]
                        } ]
                     }, {
                        "r" : "306",
                        "value" : [ " + ","null" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "310",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Concatenate",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "305",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Hello",
                  "type" : "Literal"
               }, {
                  "localId" : "307",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "306",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               } ]
            }
         }, {
            "localId" : "312",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "Hello",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "312",
                  "s" : [ {
                     "value" : [ "","define ","Hello",": " ]
                  }, {
                     "r" : "313",
                     "s" : [ {
                        "value" : [ "'Hello'" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "313",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "valueType" : "{urn:hl7-org:elm-types:r1}String",
               "value" : "Hello",
               "type" : "Literal"
            }
         }, {
            "localId" : "315",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "World",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "315",
                  "s" : [ {
                     "value" : [ "","define ","World",": " ]
                  }, {
                     "r" : "316",
                     "s" : [ {
                        "value" : [ "'World'" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "316",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "valueType" : "{urn:hl7-org:elm-types:r1}String",
               "value" : "World",
               "type" : "Literal"
            }
         }, {
            "localId" : "318",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "HelloWorldVariables",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "318",
                  "s" : [ {
                     "value" : [ "","define ","HelloWorldVariables",": " ]
                  }, {
                     "r" : "324",
                     "s" : [ {
                        "r" : "320",
                        "s" : [ {
                           "value" : [ "Hello" ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "321",
                        "s" : [ {
                           "value" : [ "World" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "324",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Concatenate",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "320",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "name" : "Hello",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "321",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "name" : "World",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "326",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "AndHelloWorld",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "326",
                  "s" : [ {
                     "value" : [ "","define ","AndHelloWorld",": " ]
                  }, {
                     "r" : "327",
                     "s" : [ {
                        "r" : "328",
                        "s" : [ {
                           "value" : [ "'Hello'" ]
                        } ]
                     }, {
                        "value" : [ " & " ]
                     }, {
                        "r" : "329",
                        "s" : [ {
                           "value" : [ "'World'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "327",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Concatenate",
               "signature" : [ {
                  "localId" : "346",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "347",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "335",
                  "type" : "Coalesce",
                  "signature" : [ {
                     "localId" : "336",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "337",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "328",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "Hello",
                     "type" : "Literal"
                  }, {
                     "localId" : "330",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "343",
                  "type" : "Coalesce",
                  "signature" : [ {
                     "localId" : "344",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "345",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "329",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "World",
                     "type" : "Literal"
                  }, {
                     "localId" : "338",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "349",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "AndSentence",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "349",
                  "s" : [ {
                     "value" : [ "","define ","AndSentence",": " ]
                  }, {
                     "r" : "350",
                     "s" : [ {
                        "r" : "351",
                        "s" : [ {
                           "r" : "352",
                           "s" : [ {
                              "r" : "353",
                              "s" : [ {
                                 "r" : "354",
                                 "s" : [ {
                                    "r" : "355",
                                    "s" : [ {
                                       "r" : "356",
                                       "s" : [ {
                                          "r" : "357",
                                          "s" : [ {
                                             "r" : "358",
                                             "s" : [ {
                                                "r" : "359",
                                                "s" : [ {
                                                   "r" : "360",
                                                   "s" : [ {
                                                      "r" : "361",
                                                      "s" : [ {
                                                         "r" : "362",
                                                         "s" : [ {
                                                            "r" : "363",
                                                            "s" : [ {
                                                               "r" : "364",
                                                               "s" : [ {
                                                                  "r" : "365",
                                                                  "s" : [ {
                                                                     "r" : "366",
                                                                     "s" : [ {
                                                                        "value" : [ "'The'" ]
                                                                     } ]
                                                                  }, {
                                                                     "value" : [ " & " ]
                                                                  }, {
                                                                     "r" : "367",
                                                                     "s" : [ {
                                                                        "value" : [ "' '" ]
                                                                     } ]
                                                                  } ]
                                                               }, {
                                                                  "value" : [ " & " ]
                                                               }, {
                                                                  "r" : "386",
                                                                  "s" : [ {
                                                                     "value" : [ "'quick'" ]
                                                                  } ]
                                                               } ]
                                                            }, {
                                                               "value" : [ " & " ]
                                                            }, {
                                                               "r" : "405",
                                                               "s" : [ {
                                                                  "value" : [ "' '" ]
                                                               } ]
                                                            } ]
                                                         }, {
                                                            "value" : [ " & " ]
                                                         }, {
                                                            "r" : "424",
                                                            "s" : [ {
                                                               "value" : [ "'brown'" ]
                                                            } ]
                                                         } ]
                                                      }, {
                                                         "value" : [ " & " ]
                                                      }, {
                                                         "r" : "443",
                                                         "s" : [ {
                                                            "value" : [ "' '" ]
                                                         } ]
                                                      } ]
                                                   }, {
                                                      "value" : [ " & " ]
                                                   }, {
                                                      "r" : "462",
                                                      "s" : [ {
                                                         "value" : [ "'fox'" ]
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
                                                "r" : "500",
                                                "s" : [ {
                                                   "value" : [ "'jumps'" ]
                                                } ]
                                             } ]
                                          }, {
                                             "value" : [ " & " ]
                                          }, {
                                             "r" : "519",
                                             "s" : [ {
                                                "value" : [ "' '" ]
                                             } ]
                                          } ]
                                       }, {
                                          "value" : [ "\n                  & " ]
                                       }, {
                                          "r" : "538",
                                          "s" : [ {
                                             "value" : [ "'over'" ]
                                          } ]
                                       } ]
                                    }, {
                                       "value" : [ " & " ]
                                    }, {
                                       "r" : "557",
                                       "s" : [ {
                                          "value" : [ "' '" ]
                                       } ]
                                    } ]
                                 }, {
                                    "value" : [ " & " ]
                                 }, {
                                    "r" : "576",
                                    "s" : [ {
                                       "value" : [ "'the'" ]
                                    } ]
                                 } ]
                              }, {
                                 "value" : [ " & " ]
                              }, {
                                 "r" : "595",
                                 "s" : [ {
                                    "value" : [ "' '" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " & " ]
                           }, {
                              "r" : "614",
                              "s" : [ {
                                 "value" : [ "'lazy'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ " & " ]
                        }, {
                           "r" : "633",
                           "s" : [ {
                              "value" : [ "' '" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " & " ]
                     }, {
                        "r" : "652",
                        "s" : [ {
                           "value" : [ "'dog.'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "350",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Concatenate",
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
                  "localId" : "658",
                  "type" : "Coalesce",
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
                     "localId" : "351",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "Concatenate",
                     "signature" : [ {
                        "localId" : "650",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "651",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : [ {
                        "localId" : "639",
                        "type" : "Coalesce",
                        "signature" : [ {
                           "localId" : "640",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }, {
                           "localId" : "641",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        } ],
                        "operand" : [ {
                           "localId" : "352",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "Concatenate",
                           "signature" : [ {
                              "localId" : "631",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }, {
                              "localId" : "632",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           } ],
                           "operand" : [ {
                              "localId" : "620",
                              "type" : "Coalesce",
                              "signature" : [ {
                                 "localId" : "621",
                                 "name" : "{urn:hl7-org:elm-types:r1}String",
                                 "type" : "NamedTypeSpecifier"
                              }, {
                                 "localId" : "622",
                                 "name" : "{urn:hl7-org:elm-types:r1}String",
                                 "type" : "NamedTypeSpecifier"
                              } ],
                              "operand" : [ {
                                 "localId" : "353",
                                 "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                 "type" : "Concatenate",
                                 "signature" : [ {
                                    "localId" : "612",
                                    "name" : "{urn:hl7-org:elm-types:r1}String",
                                    "type" : "NamedTypeSpecifier"
                                 }, {
                                    "localId" : "613",
                                    "name" : "{urn:hl7-org:elm-types:r1}String",
                                    "type" : "NamedTypeSpecifier"
                                 } ],
                                 "operand" : [ {
                                    "localId" : "601",
                                    "type" : "Coalesce",
                                    "signature" : [ {
                                       "localId" : "602",
                                       "name" : "{urn:hl7-org:elm-types:r1}String",
                                       "type" : "NamedTypeSpecifier"
                                    }, {
                                       "localId" : "603",
                                       "name" : "{urn:hl7-org:elm-types:r1}String",
                                       "type" : "NamedTypeSpecifier"
                                    } ],
                                    "operand" : [ {
                                       "localId" : "354",
                                       "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                       "type" : "Concatenate",
                                       "signature" : [ {
                                          "localId" : "593",
                                          "name" : "{urn:hl7-org:elm-types:r1}String",
                                          "type" : "NamedTypeSpecifier"
                                       }, {
                                          "localId" : "594",
                                          "name" : "{urn:hl7-org:elm-types:r1}String",
                                          "type" : "NamedTypeSpecifier"
                                       } ],
                                       "operand" : [ {
                                          "localId" : "582",
                                          "type" : "Coalesce",
                                          "signature" : [ {
                                             "localId" : "583",
                                             "name" : "{urn:hl7-org:elm-types:r1}String",
                                             "type" : "NamedTypeSpecifier"
                                          }, {
                                             "localId" : "584",
                                             "name" : "{urn:hl7-org:elm-types:r1}String",
                                             "type" : "NamedTypeSpecifier"
                                          } ],
                                          "operand" : [ {
                                             "localId" : "355",
                                             "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                             "type" : "Concatenate",
                                             "signature" : [ {
                                                "localId" : "574",
                                                "name" : "{urn:hl7-org:elm-types:r1}String",
                                                "type" : "NamedTypeSpecifier"
                                             }, {
                                                "localId" : "575",
                                                "name" : "{urn:hl7-org:elm-types:r1}String",
                                                "type" : "NamedTypeSpecifier"
                                             } ],
                                             "operand" : [ {
                                                "localId" : "563",
                                                "type" : "Coalesce",
                                                "signature" : [ {
                                                   "localId" : "564",
                                                   "name" : "{urn:hl7-org:elm-types:r1}String",
                                                   "type" : "NamedTypeSpecifier"
                                                }, {
                                                   "localId" : "565",
                                                   "name" : "{urn:hl7-org:elm-types:r1}String",
                                                   "type" : "NamedTypeSpecifier"
                                                } ],
                                                "operand" : [ {
                                                   "localId" : "356",
                                                   "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                                   "type" : "Concatenate",
                                                   "signature" : [ {
                                                      "localId" : "555",
                                                      "name" : "{urn:hl7-org:elm-types:r1}String",
                                                      "type" : "NamedTypeSpecifier"
                                                   }, {
                                                      "localId" : "556",
                                                      "name" : "{urn:hl7-org:elm-types:r1}String",
                                                      "type" : "NamedTypeSpecifier"
                                                   } ],
                                                   "operand" : [ {
                                                      "localId" : "544",
                                                      "type" : "Coalesce",
                                                      "signature" : [ {
                                                         "localId" : "545",
                                                         "name" : "{urn:hl7-org:elm-types:r1}String",
                                                         "type" : "NamedTypeSpecifier"
                                                      }, {
                                                         "localId" : "546",
                                                         "name" : "{urn:hl7-org:elm-types:r1}String",
                                                         "type" : "NamedTypeSpecifier"
                                                      } ],
                                                      "operand" : [ {
                                                         "localId" : "357",
                                                         "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                                         "type" : "Concatenate",
                                                         "signature" : [ {
                                                            "localId" : "536",
                                                            "name" : "{urn:hl7-org:elm-types:r1}String",
                                                            "type" : "NamedTypeSpecifier"
                                                         }, {
                                                            "localId" : "537",
                                                            "name" : "{urn:hl7-org:elm-types:r1}String",
                                                            "type" : "NamedTypeSpecifier"
                                                         } ],
                                                         "operand" : [ {
                                                            "localId" : "525",
                                                            "type" : "Coalesce",
                                                            "signature" : [ {
                                                               "localId" : "526",
                                                               "name" : "{urn:hl7-org:elm-types:r1}String",
                                                               "type" : "NamedTypeSpecifier"
                                                            }, {
                                                               "localId" : "527",
                                                               "name" : "{urn:hl7-org:elm-types:r1}String",
                                                               "type" : "NamedTypeSpecifier"
                                                            } ],
                                                            "operand" : [ {
                                                               "localId" : "358",
                                                               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                                               "type" : "Concatenate",
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
                                                                  "localId" : "506",
                                                                  "type" : "Coalesce",
                                                                  "signature" : [ {
                                                                     "localId" : "507",
                                                                     "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                     "type" : "NamedTypeSpecifier"
                                                                  }, {
                                                                     "localId" : "508",
                                                                     "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                     "type" : "NamedTypeSpecifier"
                                                                  } ],
                                                                  "operand" : [ {
                                                                     "localId" : "359",
                                                                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                                                     "type" : "Concatenate",
                                                                     "signature" : [ {
                                                                        "localId" : "498",
                                                                        "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                        "type" : "NamedTypeSpecifier"
                                                                     }, {
                                                                        "localId" : "499",
                                                                        "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                        "type" : "NamedTypeSpecifier"
                                                                     } ],
                                                                     "operand" : [ {
                                                                        "localId" : "487",
                                                                        "type" : "Coalesce",
                                                                        "signature" : [ {
                                                                           "localId" : "488",
                                                                           "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                           "type" : "NamedTypeSpecifier"
                                                                        }, {
                                                                           "localId" : "489",
                                                                           "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                           "type" : "NamedTypeSpecifier"
                                                                        } ],
                                                                        "operand" : [ {
                                                                           "localId" : "360",
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
                                                                                 "localId" : "361",
                                                                                 "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                                                                 "type" : "Concatenate",
                                                                                 "signature" : [ {
                                                                                    "localId" : "460",
                                                                                    "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                                    "type" : "NamedTypeSpecifier"
                                                                                 }, {
                                                                                    "localId" : "461",
                                                                                    "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                                    "type" : "NamedTypeSpecifier"
                                                                                 } ],
                                                                                 "operand" : [ {
                                                                                    "localId" : "449",
                                                                                    "type" : "Coalesce",
                                                                                    "signature" : [ {
                                                                                       "localId" : "450",
                                                                                       "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                                       "type" : "NamedTypeSpecifier"
                                                                                    }, {
                                                                                       "localId" : "451",
                                                                                       "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                                       "type" : "NamedTypeSpecifier"
                                                                                    } ],
                                                                                    "operand" : [ {
                                                                                       "localId" : "362",
                                                                                       "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                                                                       "type" : "Concatenate",
                                                                                       "signature" : [ {
                                                                                          "localId" : "441",
                                                                                          "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                                          "type" : "NamedTypeSpecifier"
                                                                                       }, {
                                                                                          "localId" : "442",
                                                                                          "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                                          "type" : "NamedTypeSpecifier"
                                                                                       } ],
                                                                                       "operand" : [ {
                                                                                          "localId" : "430",
                                                                                          "type" : "Coalesce",
                                                                                          "signature" : [ {
                                                                                             "localId" : "431",
                                                                                             "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                                             "type" : "NamedTypeSpecifier"
                                                                                          }, {
                                                                                             "localId" : "432",
                                                                                             "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                                             "type" : "NamedTypeSpecifier"
                                                                                          } ],
                                                                                          "operand" : [ {
                                                                                             "localId" : "363",
                                                                                             "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                                                                             "type" : "Concatenate",
                                                                                             "signature" : [ {
                                                                                                "localId" : "422",
                                                                                                "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                "type" : "NamedTypeSpecifier"
                                                                                             }, {
                                                                                                "localId" : "423",
                                                                                                "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                "type" : "NamedTypeSpecifier"
                                                                                             } ],
                                                                                             "operand" : [ {
                                                                                                "localId" : "411",
                                                                                                "type" : "Coalesce",
                                                                                                "signature" : [ {
                                                                                                   "localId" : "412",
                                                                                                   "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                   "type" : "NamedTypeSpecifier"
                                                                                                }, {
                                                                                                   "localId" : "413",
                                                                                                   "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                   "type" : "NamedTypeSpecifier"
                                                                                                } ],
                                                                                                "operand" : [ {
                                                                                                   "localId" : "364",
                                                                                                   "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                   "type" : "Concatenate",
                                                                                                   "signature" : [ {
                                                                                                      "localId" : "403",
                                                                                                      "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                      "type" : "NamedTypeSpecifier"
                                                                                                   }, {
                                                                                                      "localId" : "404",
                                                                                                      "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                      "type" : "NamedTypeSpecifier"
                                                                                                   } ],
                                                                                                   "operand" : [ {
                                                                                                      "localId" : "392",
                                                                                                      "type" : "Coalesce",
                                                                                                      "signature" : [ {
                                                                                                         "localId" : "393",
                                                                                                         "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                         "type" : "NamedTypeSpecifier"
                                                                                                      }, {
                                                                                                         "localId" : "394",
                                                                                                         "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                         "type" : "NamedTypeSpecifier"
                                                                                                      } ],
                                                                                                      "operand" : [ {
                                                                                                         "localId" : "365",
                                                                                                         "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                         "type" : "Concatenate",
                                                                                                         "signature" : [ {
                                                                                                            "localId" : "384",
                                                                                                            "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                            "type" : "NamedTypeSpecifier"
                                                                                                         }, {
                                                                                                            "localId" : "385",
                                                                                                            "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                            "type" : "NamedTypeSpecifier"
                                                                                                         } ],
                                                                                                         "operand" : [ {
                                                                                                            "localId" : "373",
                                                                                                            "type" : "Coalesce",
                                                                                                            "signature" : [ {
                                                                                                               "localId" : "374",
                                                                                                               "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                               "type" : "NamedTypeSpecifier"
                                                                                                            }, {
                                                                                                               "localId" : "375",
                                                                                                               "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                               "type" : "NamedTypeSpecifier"
                                                                                                            } ],
                                                                                                            "operand" : [ {
                                                                                                               "localId" : "366",
                                                                                                               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                               "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                               "value" : "The",
                                                                                                               "type" : "Literal"
                                                                                                            }, {
                                                                                                               "localId" : "368",
                                                                                                               "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                               "value" : "",
                                                                                                               "type" : "Literal"
                                                                                                            } ]
                                                                                                         }, {
                                                                                                            "localId" : "381",
                                                                                                            "type" : "Coalesce",
                                                                                                            "signature" : [ {
                                                                                                               "localId" : "382",
                                                                                                               "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                               "type" : "NamedTypeSpecifier"
                                                                                                            }, {
                                                                                                               "localId" : "383",
                                                                                                               "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                               "type" : "NamedTypeSpecifier"
                                                                                                            } ],
                                                                                                            "operand" : [ {
                                                                                                               "localId" : "367",
                                                                                                               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                               "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                               "value" : " ",
                                                                                                               "type" : "Literal"
                                                                                                            }, {
                                                                                                               "localId" : "376",
                                                                                                               "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                               "value" : "",
                                                                                                               "type" : "Literal"
                                                                                                            } ]
                                                                                                         } ]
                                                                                                      }, {
                                                                                                         "localId" : "387",
                                                                                                         "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                         "value" : "",
                                                                                                         "type" : "Literal"
                                                                                                      } ]
                                                                                                   }, {
                                                                                                      "localId" : "400",
                                                                                                      "type" : "Coalesce",
                                                                                                      "signature" : [ {
                                                                                                         "localId" : "401",
                                                                                                         "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                         "type" : "NamedTypeSpecifier"
                                                                                                      }, {
                                                                                                         "localId" : "402",
                                                                                                         "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                         "type" : "NamedTypeSpecifier"
                                                                                                      } ],
                                                                                                      "operand" : [ {
                                                                                                         "localId" : "386",
                                                                                                         "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                         "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                         "value" : "quick",
                                                                                                         "type" : "Literal"
                                                                                                      }, {
                                                                                                         "localId" : "395",
                                                                                                         "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                         "value" : "",
                                                                                                         "type" : "Literal"
                                                                                                      } ]
                                                                                                   } ]
                                                                                                }, {
                                                                                                   "localId" : "406",
                                                                                                   "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                   "value" : "",
                                                                                                   "type" : "Literal"
                                                                                                } ]
                                                                                             }, {
                                                                                                "localId" : "419",
                                                                                                "type" : "Coalesce",
                                                                                                "signature" : [ {
                                                                                                   "localId" : "420",
                                                                                                   "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                   "type" : "NamedTypeSpecifier"
                                                                                                }, {
                                                                                                   "localId" : "421",
                                                                                                   "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                   "type" : "NamedTypeSpecifier"
                                                                                                } ],
                                                                                                "operand" : [ {
                                                                                                   "localId" : "405",
                                                                                                   "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                   "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                   "value" : " ",
                                                                                                   "type" : "Literal"
                                                                                                }, {
                                                                                                   "localId" : "414",
                                                                                                   "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                   "value" : "",
                                                                                                   "type" : "Literal"
                                                                                                } ]
                                                                                             } ]
                                                                                          }, {
                                                                                             "localId" : "425",
                                                                                             "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                                             "value" : "",
                                                                                             "type" : "Literal"
                                                                                          } ]
                                                                                       }, {
                                                                                          "localId" : "438",
                                                                                          "type" : "Coalesce",
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
                                                                                             "localId" : "424",
                                                                                             "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                                                                             "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                                             "value" : "brown",
                                                                                             "type" : "Literal"
                                                                                          }, {
                                                                                             "localId" : "433",
                                                                                             "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                                             "value" : "",
                                                                                             "type" : "Literal"
                                                                                          } ]
                                                                                       } ]
                                                                                    }, {
                                                                                       "localId" : "444",
                                                                                       "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                                       "value" : "",
                                                                                       "type" : "Literal"
                                                                                    } ]
                                                                                 }, {
                                                                                    "localId" : "457",
                                                                                    "type" : "Coalesce",
                                                                                    "signature" : [ {
                                                                                       "localId" : "458",
                                                                                       "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                                       "type" : "NamedTypeSpecifier"
                                                                                    }, {
                                                                                       "localId" : "459",
                                                                                       "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                                       "type" : "NamedTypeSpecifier"
                                                                                    } ],
                                                                                    "operand" : [ {
                                                                                       "localId" : "443",
                                                                                       "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                                                                       "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                                       "value" : " ",
                                                                                       "type" : "Literal"
                                                                                    }, {
                                                                                       "localId" : "452",
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
                                                                                 "localId" : "462",
                                                                                 "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                                                                 "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                                 "value" : "fox",
                                                                                 "type" : "Literal"
                                                                              }, {
                                                                                 "localId" : "471",
                                                                                 "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                                 "value" : "",
                                                                                 "type" : "Literal"
                                                                              } ]
                                                                           } ]
                                                                        }, {
                                                                           "localId" : "482",
                                                                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                           "value" : "",
                                                                           "type" : "Literal"
                                                                        } ]
                                                                     }, {
                                                                        "localId" : "495",
                                                                        "type" : "Coalesce",
                                                                        "signature" : [ {
                                                                           "localId" : "496",
                                                                           "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                           "type" : "NamedTypeSpecifier"
                                                                        }, {
                                                                           "localId" : "497",
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
                                                                           "localId" : "490",
                                                                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                           "value" : "",
                                                                           "type" : "Literal"
                                                                        } ]
                                                                     } ]
                                                                  }, {
                                                                     "localId" : "501",
                                                                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                     "value" : "",
                                                                     "type" : "Literal"
                                                                  } ]
                                                               }, {
                                                                  "localId" : "514",
                                                                  "type" : "Coalesce",
                                                                  "signature" : [ {
                                                                     "localId" : "515",
                                                                     "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                     "type" : "NamedTypeSpecifier"
                                                                  }, {
                                                                     "localId" : "516",
                                                                     "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                     "type" : "NamedTypeSpecifier"
                                                                  } ],
                                                                  "operand" : [ {
                                                                     "localId" : "500",
                                                                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                                                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                     "value" : "jumps",
                                                                     "type" : "Literal"
                                                                  }, {
                                                                     "localId" : "509",
                                                                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                     "value" : "",
                                                                     "type" : "Literal"
                                                                  } ]
                                                               } ]
                                                            }, {
                                                               "localId" : "520",
                                                               "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                               "value" : "",
                                                               "type" : "Literal"
                                                            } ]
                                                         }, {
                                                            "localId" : "533",
                                                            "type" : "Coalesce",
                                                            "signature" : [ {
                                                               "localId" : "534",
                                                               "name" : "{urn:hl7-org:elm-types:r1}String",
                                                               "type" : "NamedTypeSpecifier"
                                                            }, {
                                                               "localId" : "535",
                                                               "name" : "{urn:hl7-org:elm-types:r1}String",
                                                               "type" : "NamedTypeSpecifier"
                                                            } ],
                                                            "operand" : [ {
                                                               "localId" : "519",
                                                               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                                               "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                               "value" : " ",
                                                               "type" : "Literal"
                                                            }, {
                                                               "localId" : "528",
                                                               "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                               "value" : "",
                                                               "type" : "Literal"
                                                            } ]
                                                         } ]
                                                      }, {
                                                         "localId" : "539",
                                                         "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                         "value" : "",
                                                         "type" : "Literal"
                                                      } ]
                                                   }, {
                                                      "localId" : "552",
                                                      "type" : "Coalesce",
                                                      "signature" : [ {
                                                         "localId" : "553",
                                                         "name" : "{urn:hl7-org:elm-types:r1}String",
                                                         "type" : "NamedTypeSpecifier"
                                                      }, {
                                                         "localId" : "554",
                                                         "name" : "{urn:hl7-org:elm-types:r1}String",
                                                         "type" : "NamedTypeSpecifier"
                                                      } ],
                                                      "operand" : [ {
                                                         "localId" : "538",
                                                         "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                                         "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                         "value" : "over",
                                                         "type" : "Literal"
                                                      }, {
                                                         "localId" : "547",
                                                         "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                         "value" : "",
                                                         "type" : "Literal"
                                                      } ]
                                                   } ]
                                                }, {
                                                   "localId" : "558",
                                                   "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                   "value" : "",
                                                   "type" : "Literal"
                                                } ]
                                             }, {
                                                "localId" : "571",
                                                "type" : "Coalesce",
                                                "signature" : [ {
                                                   "localId" : "572",
                                                   "name" : "{urn:hl7-org:elm-types:r1}String",
                                                   "type" : "NamedTypeSpecifier"
                                                }, {
                                                   "localId" : "573",
                                                   "name" : "{urn:hl7-org:elm-types:r1}String",
                                                   "type" : "NamedTypeSpecifier"
                                                } ],
                                                "operand" : [ {
                                                   "localId" : "557",
                                                   "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                                   "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                   "value" : " ",
                                                   "type" : "Literal"
                                                }, {
                                                   "localId" : "566",
                                                   "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                   "value" : "",
                                                   "type" : "Literal"
                                                } ]
                                             } ]
                                          }, {
                                             "localId" : "577",
                                             "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                             "value" : "",
                                             "type" : "Literal"
                                          } ]
                                       }, {
                                          "localId" : "590",
                                          "type" : "Coalesce",
                                          "signature" : [ {
                                             "localId" : "591",
                                             "name" : "{urn:hl7-org:elm-types:r1}String",
                                             "type" : "NamedTypeSpecifier"
                                          }, {
                                             "localId" : "592",
                                             "name" : "{urn:hl7-org:elm-types:r1}String",
                                             "type" : "NamedTypeSpecifier"
                                          } ],
                                          "operand" : [ {
                                             "localId" : "576",
                                             "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                             "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                             "value" : "the",
                                             "type" : "Literal"
                                          }, {
                                             "localId" : "585",
                                             "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                             "value" : "",
                                             "type" : "Literal"
                                          } ]
                                       } ]
                                    }, {
                                       "localId" : "596",
                                       "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                       "value" : "",
                                       "type" : "Literal"
                                    } ]
                                 }, {
                                    "localId" : "609",
                                    "type" : "Coalesce",
                                    "signature" : [ {
                                       "localId" : "610",
                                       "name" : "{urn:hl7-org:elm-types:r1}String",
                                       "type" : "NamedTypeSpecifier"
                                    }, {
                                       "localId" : "611",
                                       "name" : "{urn:hl7-org:elm-types:r1}String",
                                       "type" : "NamedTypeSpecifier"
                                    } ],
                                    "operand" : [ {
                                       "localId" : "595",
                                       "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                       "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                       "value" : " ",
                                       "type" : "Literal"
                                    }, {
                                       "localId" : "604",
                                       "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                       "value" : "",
                                       "type" : "Literal"
                                    } ]
                                 } ]
                              }, {
                                 "localId" : "615",
                                 "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                 "value" : "",
                                 "type" : "Literal"
                              } ]
                           }, {
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
                                 "localId" : "614",
                                 "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                 "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                 "value" : "lazy",
                                 "type" : "Literal"
                              }, {
                                 "localId" : "623",
                                 "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                 "value" : "",
                                 "type" : "Literal"
                              } ]
                           } ]
                        }, {
                           "localId" : "634",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "",
                           "type" : "Literal"
                        } ]
                     }, {
                        "localId" : "647",
                        "type" : "Coalesce",
                        "signature" : [ {
                           "localId" : "648",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }, {
                           "localId" : "649",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        } ],
                        "operand" : [ {
                           "localId" : "633",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : " ",
                           "type" : "Literal"
                        }, {
                           "localId" : "642",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "",
                           "type" : "Literal"
                        } ]
                     } ]
                  }, {
                     "localId" : "653",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "666",
                  "type" : "Coalesce",
                  "signature" : [ {
                     "localId" : "667",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "668",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "652",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "dog.",
                     "type" : "Literal"
                  }, {
                     "localId" : "661",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "672",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "AndConcatNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "672",
                  "s" : [ {
                     "value" : [ "","define ","AndConcatNull",": " ]
                  }, {
                     "r" : "673",
                     "s" : [ {
                        "r" : "674",
                        "s" : [ {
                           "value" : [ "'Hello'" ]
                        } ]
                     }, {
                        "r" : "675",
                        "value" : [ " & ","null" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "673",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Concatenate",
               "signature" : [ {
                  "localId" : "694",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "695",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "681",
                  "type" : "Coalesce",
                  "signature" : [ {
                     "localId" : "682",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "683",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "674",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "Hello",
                     "type" : "Literal"
                  }, {
                     "localId" : "676",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "690",
                  "type" : "Coalesce",
                  "signature" : [ {
                     "localId" : "692",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "693",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "691",
                     "asType" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "675",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "684",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "697",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "AndHelloWorldVariables",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "697",
                  "s" : [ {
                     "value" : [ "","define ","AndHelloWorldVariables",": " ]
                  }, {
                     "r" : "698",
                     "s" : [ {
                        "r" : "699",
                        "s" : [ {
                           "value" : [ "Hello" ]
                        } ]
                     }, {
                        "value" : [ " & " ]
                     }, {
                        "r" : "700",
                        "s" : [ {
                           "value" : [ "World" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "698",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Concatenate",
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
                  "localId" : "706",
                  "type" : "Coalesce",
                  "signature" : [ {
                     "localId" : "707",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "708",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "699",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "name" : "Hello",
                     "type" : "ExpressionRef"
                  }, {
                     "localId" : "701",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "714",
                  "type" : "Coalesce",
                  "signature" : [ {
                     "localId" : "715",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "716",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "700",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "name" : "World",
                     "type" : "ExpressionRef"
                  }, {
                     "localId" : "709",
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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "312",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "NoSeparator",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","NoSeparator",": " ]
                  }, {
                     "r" : "224",
                     "s" : [ {
                        "value" : [ "Combine","(" ]
                     }, {
                        "r" : "213",
                        "s" : [ {
                           "value" : [ "{ " ]
                        }, {
                           "r" : "214",
                           "s" : [ {
                              "value" : [ "'abc'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "215",
                           "s" : [ {
                              "value" : [ "'def'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "216",
                           "s" : [ {
                              "value" : [ "'ghi'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "217",
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
               "localId" : "224",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Combine",
               "signature" : [ {
                  "localId" : "225",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "226",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "213",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "218",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "219",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "214",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "abc",
                     "type" : "Literal"
                  }, {
                     "localId" : "215",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "def",
                     "type" : "Literal"
                  }, {
                     "localId" : "216",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "ghi",
                     "type" : "Literal"
                  }, {
                     "localId" : "217",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "jkl",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "228",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "Separator",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "228",
                  "s" : [ {
                     "value" : [ "","define ","Separator",": " ]
                  }, {
                     "r" : "242",
                     "s" : [ {
                        "value" : [ "Combine","(" ]
                     }, {
                        "r" : "229",
                        "s" : [ {
                           "value" : [ "{ " ]
                        }, {
                           "r" : "230",
                           "s" : [ {
                              "value" : [ "'abc'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "231",
                           "s" : [ {
                              "value" : [ "'def'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "232",
                           "s" : [ {
                              "value" : [ "'ghi'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "233",
                           "s" : [ {
                              "value" : [ "'jkl'" ]
                           } ]
                        }, {
                           "value" : [ " }" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "236",
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
               "localId" : "242",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Combine",
               "signature" : [ {
                  "localId" : "243",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "244",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "245",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "source" : {
                  "localId" : "229",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "234",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "235",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "230",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "abc",
                     "type" : "Literal"
                  }, {
                     "localId" : "231",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "def",
                     "type" : "Literal"
                  }, {
                     "localId" : "232",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "ghi",
                     "type" : "Literal"
                  }, {
                     "localId" : "233",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "jkl",
                     "type" : "Literal"
                  } ]
               },
               "separator" : {
                  "localId" : "236",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : ";",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "247",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "CombineNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "247",
                  "s" : [ {
                     "value" : [ "","define ","CombineNull",": " ]
                  }, {
                     "r" : "258",
                     "s" : [ {
                        "r" : "248",
                        "value" : [ "Combine","(","null",", " ]
                     }, {
                        "r" : "249",
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
               "localId" : "258",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Combine",
               "signature" : [ {
                  "localId" : "262",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "263",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "264",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "source" : {
                  "localId" : "259",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "248",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "260",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "261",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               },
               "separator" : {
                  "localId" : "249",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : ";",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "266",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "CombineNullItem",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "266",
                  "s" : [ {
                     "value" : [ "","define ","CombineNullItem",": " ]
                  }, {
                     "r" : "281",
                     "s" : [ {
                        "value" : [ "Combine","(" ]
                     }, {
                        "r" : "267",
                        "s" : [ {
                           "value" : [ "{ " ]
                        }, {
                           "r" : "268",
                           "s" : [ {
                              "value" : [ "'abc'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "269",
                           "s" : [ {
                              "value" : [ "'def'" ]
                           } ]
                        }, {
                           "r" : "270",
                           "value" : [ ", ","null",", " ]
                        }, {
                           "r" : "271",
                           "s" : [ {
                              "value" : [ "'jkl'" ]
                           } ]
                        }, {
                           "value" : [ " }" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "275",
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
               "localId" : "281",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Combine",
               "signature" : [ {
                  "localId" : "282",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "283",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "284",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "source" : {
                  "localId" : "267",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "273",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "274",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "268",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "abc",
                     "type" : "Literal"
                  }, {
                     "localId" : "269",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "def",
                     "type" : "Literal"
                  }, {
                     "localId" : "272",
                     "asType" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "270",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "271",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "jkl",
                     "type" : "Literal"
                  } ]
               },
               "separator" : {
                  "localId" : "275",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : ";",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "286",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "CombineOneNullItem",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "286",
                  "s" : [ {
                     "value" : [ "","define ","CombineOneNullItem",": " ]
                  }, {
                     "r" : "302",
                     "s" : [ {
                        "value" : [ "Combine","(" ]
                     }, {
                        "r" : "287",
                        "s" : [ {
                           "r" : "288",
                           "value" : [ "{","null","}" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "291",
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
               "localId" : "302",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Combine",
               "signature" : [ {
                  "localId" : "308",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "309",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "310",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "source" : {
                  "localId" : "303",
                  "type" : "Query",
                  "source" : [ {
                     "localId" : "304",
                     "alias" : "X",
                     "expression" : {
                        "localId" : "287",
                        "type" : "List",
                        "resultTypeSpecifier" : {
                           "localId" : "289",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "290",
                              "name" : "{urn:hl7-org:elm-types:r1}Any",
                              "type" : "NamedTypeSpecifier"
                           }
                        },
                        "element" : [ {
                           "localId" : "288",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                           "type" : "Null"
                        } ]
                     }
                  } ],
                  "let" : [ ],
                  "relationship" : [ ],
                  "return" : {
                     "localId" : "305",
                     "distinct" : false,
                     "expression" : {
                        "localId" : "307",
                        "asType" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "As",
                        "signature" : [ ],
                        "operand" : {
                           "localId" : "306",
                           "name" : "X",
                           "type" : "AliasRef"
                        }
                     }
                  }
               },
               "separator" : {
                  "localId" : "291",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : ";",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "312",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "CombineEmptyNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "312",
                  "s" : [ {
                     "value" : [ "","define ","CombineEmptyNull",": " ]
                  }, {
                     "r" : "327",
                     "s" : [ {
                        "r" : "313",
                        "value" : [ "Combine","(","{}",", " ]
                     }, {
                        "r" : "316",
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
               "localId" : "327",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Combine",
               "signature" : [ {
                  "localId" : "333",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "334",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "335",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "source" : {
                  "localId" : "328",
                  "type" : "Query",
                  "source" : [ {
                     "localId" : "329",
                     "alias" : "X",
                     "expression" : {
                        "localId" : "313",
                        "type" : "List",
                        "resultTypeSpecifier" : {
                           "localId" : "314",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "315",
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
                     "localId" : "330",
                     "distinct" : false,
                     "expression" : {
                        "localId" : "332",
                        "asType" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "As",
                        "signature" : [ ],
                        "operand" : {
                           "localId" : "331",
                           "name" : "X",
                           "type" : "AliasRef"
                        }
                     }
                  }
               },
               "separator" : {
                  "localId" : "316",
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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "259",
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
            "name" : "CommaSeparated",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","CommaSeparated",": " ]
                  }, {
                     "r" : "219",
                     "s" : [ {
                        "value" : [ "Split","(" ]
                     }, {
                        "r" : "213",
                        "s" : [ {
                           "value" : [ "'a,b,c,,1,2,3'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "214",
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
               "localId" : "224",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "225",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "219",
               "type" : "Split",
               "resultTypeSpecifier" : {
                  "localId" : "222",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "223",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "signature" : [ {
                  "localId" : "220",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "221",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "stringToSplit" : {
                  "localId" : "213",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "a,b,c,,1,2,3",
                  "type" : "Literal"
               },
               "separator" : {
                  "localId" : "214",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : ",",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "227",
            "name" : "SeparatorNotUsed",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "227",
                  "s" : [ {
                     "value" : [ "","define ","SeparatorNotUsed",": " ]
                  }, {
                     "r" : "234",
                     "s" : [ {
                        "value" : [ "Split","(" ]
                     }, {
                        "r" : "228",
                        "s" : [ {
                           "value" : [ "'a,b,c,,1,2,3'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "229",
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
               "localId" : "239",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "240",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "234",
               "type" : "Split",
               "resultTypeSpecifier" : {
                  "localId" : "237",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "238",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "signature" : [ {
                  "localId" : "235",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "236",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "stringToSplit" : {
                  "localId" : "228",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "a,b,c,,1,2,3",
                  "type" : "Literal"
               },
               "separator" : {
                  "localId" : "229",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : ";",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "242",
            "name" : "SeparateNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "242",
                  "s" : [ {
                     "value" : [ "","define ","SeparateNull",": " ]
                  }, {
                     "r" : "250",
                     "s" : [ {
                        "r" : "243",
                        "value" : [ "Split","(","null",", " ]
                     }, {
                        "r" : "244",
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
               "localId" : "256",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "257",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "250",
               "type" : "Split",
               "resultTypeSpecifier" : {
                  "localId" : "254",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "255",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "signature" : [ {
                  "localId" : "252",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "253",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "stringToSplit" : {
                  "localId" : "251",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "243",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               },
               "separator" : {
                  "localId" : "244",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : ",",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "259",
            "name" : "SeparateUsingNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "259",
                  "s" : [ {
                     "value" : [ "","define ","SeparateUsingNull",": " ]
                  }, {
                     "r" : "267",
                     "s" : [ {
                        "value" : [ "Split","(" ]
                     }, {
                        "r" : "260",
                        "s" : [ {
                           "value" : [ "'a,b,c'" ]
                        } ]
                     }, {
                        "r" : "261",
                        "value" : [ ", ","null",")" ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "273",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "274",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "267",
               "type" : "Split",
               "resultTypeSpecifier" : {
                  "localId" : "271",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "272",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "signature" : [ {
                  "localId" : "269",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "270",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "stringToSplit" : {
                  "localId" : "260",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "a,b,c",
                  "type" : "Literal"
               },
               "separator" : {
                  "localId" : "268",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "261",
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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "291",
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
            "name" : "SplitOnMatchesListReturn",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","SplitOnMatchesListReturn",": " ]
                  }, {
                     "r" : "219",
                     "s" : [ {
                        "value" : [ "SplitOnMatches","(" ]
                     }, {
                        "r" : "213",
                        "s" : [ {
                           "value" : [ "'foo 1,2three bar'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "214",
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
               "localId" : "224",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "225",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "219",
               "type" : "SplitOnMatches",
               "resultTypeSpecifier" : {
                  "localId" : "222",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "223",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "signature" : [ {
                  "localId" : "220",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "221",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "stringToSplit" : {
                  "localId" : "213",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "foo 1,2three bar",
                  "type" : "Literal"
               },
               "separatorPattern" : {
                  "localId" : "214",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "\\d,\\d\\w+",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "227",
            "name" : "SplitOnMatchesOriginalString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "227",
                  "s" : [ {
                     "value" : [ "","define ","SplitOnMatchesOriginalString",": " ]
                  }, {
                     "r" : "234",
                     "s" : [ {
                        "value" : [ "SplitOnMatches","(" ]
                     }, {
                        "r" : "228",
                        "s" : [ {
                           "value" : [ "'1,2three'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "229",
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
               "localId" : "239",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "240",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "234",
               "type" : "SplitOnMatches",
               "resultTypeSpecifier" : {
                  "localId" : "237",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "238",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "signature" : [ {
                  "localId" : "235",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "236",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "stringToSplit" : {
                  "localId" : "228",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "1,2three",
                  "type" : "Literal"
               },
               "separatorPattern" : {
                  "localId" : "229",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "\\w,\\w+",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "242",
            "name" : "SplitOnMatchesNoMatch",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "242",
                  "s" : [ {
                     "value" : [ "","define ","SplitOnMatchesNoMatch",": " ]
                  }, {
                     "r" : "249",
                     "s" : [ {
                        "value" : [ "SplitOnMatches","(" ]
                     }, {
                        "r" : "243",
                        "s" : [ {
                           "value" : [ "'foobar'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "244",
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
               "localId" : "254",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "255",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "249",
               "type" : "SplitOnMatches",
               "resultTypeSpecifier" : {
                  "localId" : "252",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "253",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "signature" : [ {
                  "localId" : "250",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "251",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "stringToSplit" : {
                  "localId" : "243",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "foobar",
                  "type" : "Literal"
               },
               "separatorPattern" : {
                  "localId" : "244",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "\\d",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "257",
            "name" : "SplitOnMatchesIsNullFirst",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "257",
                  "s" : [ {
                     "value" : [ "","define ","SplitOnMatchesIsNullFirst",": " ]
                  }, {
                     "r" : "265",
                     "s" : [ {
                        "r" : "258",
                        "value" : [ "SplitOnMatches","(","null",", " ]
                     }, {
                        "r" : "259",
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
               "localId" : "271",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "272",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "265",
               "type" : "SplitOnMatches",
               "resultTypeSpecifier" : {
                  "localId" : "269",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "270",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "signature" : [ {
                  "localId" : "267",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "268",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "stringToSplit" : {
                  "localId" : "266",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "258",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               },
               "separatorPattern" : {
                  "localId" : "259",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "\\w+",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "274",
            "name" : "SplitOnMatchesIsNullSecond",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "274",
                  "s" : [ {
                     "value" : [ "","define ","SplitOnMatchesIsNullSecond",": " ]
                  }, {
                     "r" : "282",
                     "s" : [ {
                        "value" : [ "SplitOnMatches","(" ]
                     }, {
                        "r" : "275",
                        "s" : [ {
                           "value" : [ "'12three'" ]
                        } ]
                     }, {
                        "r" : "276",
                        "value" : [ ", ","null",")" ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "288",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "289",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "282",
               "type" : "SplitOnMatches",
               "resultTypeSpecifier" : {
                  "localId" : "286",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "287",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "signature" : [ {
                  "localId" : "284",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "285",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "stringToSplit" : {
                  "localId" : "275",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "12three",
                  "type" : "Literal"
               },
               "separatorPattern" : {
                  "localId" : "283",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "276",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               }
            }
         }, {
            "localId" : "291",
            "name" : "SplitOnMatchesAllNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "291",
                  "s" : [ {
                     "value" : [ "","define ","SplitOnMatchesAllNull",": " ]
                  }, {
                     "r" : "300",
                     "s" : [ {
                        "r" : "292",
                        "value" : [ "SplitOnMatches","(","null",", ","null",")" ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "307",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "308",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "300",
               "type" : "SplitOnMatches",
               "resultTypeSpecifier" : {
                  "localId" : "305",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "306",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "signature" : [ {
                  "localId" : "303",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "304",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "stringToSplit" : {
                  "localId" : "301",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "292",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               },
               "separatorPattern" : {
                  "localId" : "302",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "293",
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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "220",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "ElevenLetters",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","ElevenLetters",": " ]
                  }, {
                     "r" : "217",
                     "s" : [ {
                        "value" : [ "Length","(" ]
                     }, {
                        "r" : "213",
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
               "localId" : "217",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Length",
               "signature" : [ {
                  "localId" : "218",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "213",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Hello World",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "220",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "NullString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "220",
                  "s" : [ {
                     "value" : [ "","define ","NullString",": " ]
                  }, {
                     "r" : "227",
                     "s" : [ {
                        "value" : [ "Length","(" ]
                     }, {
                        "r" : "221",
                        "s" : [ {
                           "r" : "222",
                           "value" : [ "null"," as " ]
                        }, {
                           "r" : "223",
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
               "localId" : "227",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Length",
               "signature" : [ {
                  "localId" : "228",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "221",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "222",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "223",
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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "236",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "LowerC",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","LowerC",": " ]
                  }, {
                     "r" : "217",
                     "s" : [ {
                        "value" : [ "Upper","(" ]
                     }, {
                        "r" : "213",
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
               "localId" : "217",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Upper",
               "signature" : [ {
                  "localId" : "218",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "213",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "abcdefg123",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "220",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "UpperC",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "220",
                  "s" : [ {
                     "value" : [ "","define ","UpperC",": " ]
                  }, {
                     "r" : "225",
                     "s" : [ {
                        "value" : [ "Upper","(" ]
                     }, {
                        "r" : "221",
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
               "localId" : "225",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Upper",
               "signature" : [ {
                  "localId" : "226",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "221",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "ABCDEFG123",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "228",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "CamelC",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "228",
                  "s" : [ {
                     "value" : [ "","define ","CamelC",": " ]
                  }, {
                     "r" : "233",
                     "s" : [ {
                        "value" : [ "Upper","(" ]
                     }, {
                        "r" : "229",
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
               "localId" : "233",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Upper",
               "signature" : [ {
                  "localId" : "234",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "229",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "aBcDeFg123",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "236",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "NullString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "236",
                  "s" : [ {
                     "value" : [ "","define ","NullString",": " ]
                  }, {
                     "r" : "242",
                     "s" : [ {
                        "r" : "237",
                        "value" : [ "Upper","(","null",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "242",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Upper",
               "signature" : [ {
                  "localId" : "244",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "243",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "237",
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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "236",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "LowerC",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","LowerC",": " ]
                  }, {
                     "r" : "217",
                     "s" : [ {
                        "value" : [ "Lower","(" ]
                     }, {
                        "r" : "213",
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
               "localId" : "217",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Lower",
               "signature" : [ {
                  "localId" : "218",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "213",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "abcdefg123",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "220",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "UpperC",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "220",
                  "s" : [ {
                     "value" : [ "","define ","UpperC",": " ]
                  }, {
                     "r" : "225",
                     "s" : [ {
                        "value" : [ "Lower","(" ]
                     }, {
                        "r" : "221",
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
               "localId" : "225",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Lower",
               "signature" : [ {
                  "localId" : "226",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "221",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "ABCDEFG123",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "228",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "CamelC",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "228",
                  "s" : [ {
                     "value" : [ "","define ","CamelC",": " ]
                  }, {
                     "r" : "233",
                     "s" : [ {
                        "value" : [ "Lower","(" ]
                     }, {
                        "r" : "229",
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
               "localId" : "233",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Lower",
               "signature" : [ {
                  "localId" : "234",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "229",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "aBcDeFg123",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "236",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "NullString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "236",
                  "s" : [ {
                     "value" : [ "","define ","NullString",": " ]
                  }, {
                     "r" : "242",
                     "s" : [ {
                        "r" : "237",
                        "value" : [ "Lower","(","null",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "242",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Lower",
               "signature" : [ {
                  "localId" : "244",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "243",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "237",
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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "242",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "HelloWorldSix",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","HelloWorldSix",": " ]
                  }, {
                     "r" : "213",
                     "s" : [ {
                        "r" : "214",
                        "s" : [ {
                           "value" : [ "'HelloWorld'" ]
                        } ]
                     }, {
                        "r" : "215",
                        "value" : [ "[","6","]" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "213",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Indexer",
               "signature" : [ {
                  "localId" : "216",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "217",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "214",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "HelloWorld",
                  "type" : "Literal"
               }, {
                  "localId" : "215",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "6",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "219",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "HelloWorldZero",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "219",
                  "s" : [ {
                     "value" : [ "","define ","HelloWorldZero",": " ]
                  }, {
                     "r" : "220",
                     "s" : [ {
                        "r" : "221",
                        "s" : [ {
                           "value" : [ "'HelloWorld'" ]
                        } ]
                     }, {
                        "r" : "222",
                        "value" : [ "[","0","]" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "220",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Indexer",
               "signature" : [ {
                  "localId" : "223",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "224",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "221",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "HelloWorld",
                  "type" : "Literal"
               }, {
                  "localId" : "222",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "0",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "226",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "HelloWorldTwenty",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "226",
                  "s" : [ {
                     "value" : [ "","define ","HelloWorldTwenty",": " ]
                  }, {
                     "r" : "227",
                     "s" : [ {
                        "r" : "228",
                        "s" : [ {
                           "value" : [ "'HelloWorld'" ]
                        } ]
                     }, {
                        "r" : "229",
                        "value" : [ "[","20","]" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "227",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Indexer",
               "signature" : [ {
                  "localId" : "230",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "231",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "228",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "HelloWorld",
                  "type" : "Literal"
               }, {
                  "localId" : "229",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "20",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "233",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "NullString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "233",
                  "s" : [ {
                     "value" : [ "","define ","NullString",": " ]
                  }, {
                     "r" : "234",
                     "s" : [ {
                        "r" : "235",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "235",
                           "s" : [ {
                              "r" : "236",
                              "value" : [ "null"," as " ]
                           }, {
                              "r" : "237",
                              "s" : [ {
                                 "value" : [ "String" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "r" : "238",
                        "value" : [ "[","4","]" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "234",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Indexer",
               "signature" : [ {
                  "localId" : "239",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "240",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "235",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "236",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "237",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "238",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "4",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "242",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "NullIndex",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "242",
                  "s" : [ {
                     "value" : [ "","define ","NullIndex",": " ]
                  }, {
                     "r" : "243",
                     "s" : [ {
                        "r" : "244",
                        "s" : [ {
                           "value" : [ "'HelloWorld'" ]
                        } ]
                     }, {
                        "r" : "245",
                        "value" : [ "[","null","]" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "243",
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
                  "localId" : "244",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "HelloWorld",
                  "type" : "Literal"
               }, {
                  "localId" : "246",
                  "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "245",
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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "260",
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
            "name" : "MatchesTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","MatchesTrue",": " ]
                  }, {
                     "r" : "219",
                     "s" : [ {
                        "value" : [ "Matches","(" ]
                     }, {
                        "r" : "213",
                        "s" : [ {
                           "value" : [ "'1,2three'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "214",
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
               "localId" : "219",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Matches",
               "signature" : [ {
                  "localId" : "220",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "221",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "213",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "1,2three",
                  "type" : "Literal"
               }, {
                  "localId" : "214",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "\\d,\\d\\w+",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "223",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "MatchesFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "223",
                  "s" : [ {
                     "value" : [ "","define ","MatchesFalse",": " ]
                  }, {
                     "r" : "230",
                     "s" : [ {
                        "value" : [ "Matches","(" ]
                     }, {
                        "r" : "224",
                        "s" : [ {
                           "value" : [ "'three'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "225",
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
               "localId" : "230",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Matches",
               "signature" : [ {
                  "localId" : "231",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "232",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "224",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "three",
                  "type" : "Literal"
               }, {
                  "localId" : "225",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "\\d",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "234",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "MatchesIsNullFirst",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "234",
                  "s" : [ {
                     "value" : [ "","define ","MatchesIsNullFirst",": " ]
                  }, {
                     "r" : "242",
                     "s" : [ {
                        "r" : "235",
                        "value" : [ "Matches","(","null",", " ]
                     }, {
                        "r" : "236",
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
               "localId" : "242",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Matches",
               "signature" : [ {
                  "localId" : "244",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "245",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "243",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "235",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "236",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "\\w+",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "247",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "MatchesIsNullSecond",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "247",
                  "s" : [ {
                     "value" : [ "","define ","MatchesIsNullSecond",": " ]
                  }, {
                     "r" : "255",
                     "s" : [ {
                        "value" : [ "Matches","(" ]
                     }, {
                        "r" : "248",
                        "s" : [ {
                           "value" : [ "'12three'" ]
                        } ]
                     }, {
                        "r" : "249",
                        "value" : [ ", ","null",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "255",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Matches",
               "signature" : [ {
                  "localId" : "257",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "258",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "248",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "12three",
                  "type" : "Literal"
               }, {
                  "localId" : "256",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "249",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               } ]
            }
         }, {
            "localId" : "260",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "MatchesAllNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "260",
                  "s" : [ {
                     "value" : [ "","define ","MatchesAllNull",": " ]
                  }, {
                     "r" : "269",
                     "s" : [ {
                        "r" : "261",
                        "value" : [ "Matches","(","null",", ","null",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "269",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Matches",
               "signature" : [ {
                  "localId" : "272",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "273",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "270",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "261",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "271",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "262",
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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "247",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Found",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","Found",": " ]
                  }, {
                     "r" : "219",
                     "s" : [ {
                        "value" : [ "PositionOf","(" ]
                     }, {
                        "r" : "213",
                        "s" : [ {
                           "value" : [ "'cde'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "214",
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
               "localId" : "219",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "PositionOf",
               "signature" : [ {
                  "localId" : "220",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "221",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "pattern" : {
                  "localId" : "213",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "cde",
                  "type" : "Literal"
               },
               "string" : {
                  "localId" : "214",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "abcdefg",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "223",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "NotFound",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "223",
                  "s" : [ {
                     "value" : [ "","define ","NotFound",": " ]
                  }, {
                     "r" : "230",
                     "s" : [ {
                        "value" : [ "PositionOf","(" ]
                     }, {
                        "r" : "224",
                        "s" : [ {
                           "value" : [ "'fgh'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "225",
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
               "localId" : "230",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "PositionOf",
               "signature" : [ {
                  "localId" : "231",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "232",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "pattern" : {
                  "localId" : "224",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "fgh",
                  "type" : "Literal"
               },
               "string" : {
                  "localId" : "225",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "abcdefg",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "234",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "NullPattern",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "234",
                  "s" : [ {
                     "value" : [ "","define ","NullPattern",": " ]
                  }, {
                     "r" : "242",
                     "s" : [ {
                        "r" : "235",
                        "value" : [ "PositionOf","(","null",", " ]
                     }, {
                        "r" : "236",
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
               "localId" : "242",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "PositionOf",
               "signature" : [ {
                  "localId" : "244",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "245",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "pattern" : {
                  "localId" : "243",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "235",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               },
               "string" : {
                  "localId" : "236",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "abcdefg",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "247",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "NullString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "247",
                  "s" : [ {
                     "value" : [ "","define ","NullString",": " ]
                  }, {
                     "r" : "255",
                     "s" : [ {
                        "value" : [ "PositionOf","(" ]
                     }, {
                        "r" : "248",
                        "s" : [ {
                           "value" : [ "'cde'" ]
                        } ]
                     }, {
                        "r" : "249",
                        "value" : [ ", ","null",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "255",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "PositionOf",
               "signature" : [ {
                  "localId" : "257",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "258",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "pattern" : {
                  "localId" : "248",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "cde",
                  "type" : "Literal"
               },
               "string" : {
                  "localId" : "256",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "249",
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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "247",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Found",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","Found",": " ]
                  }, {
                     "r" : "219",
                     "s" : [ {
                        "value" : [ "LastPositionOf","(" ]
                     }, {
                        "r" : "213",
                        "s" : [ {
                           "value" : [ "'B'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "214",
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
               "localId" : "219",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "LastPositionOf",
               "signature" : [ {
                  "localId" : "220",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "221",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "pattern" : {
                  "localId" : "213",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "B",
                  "type" : "Literal"
               },
               "string" : {
                  "localId" : "214",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "ABCDEDCBA",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "223",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "NotFound",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "223",
                  "s" : [ {
                     "value" : [ "// 7\n","define ","NotFound",": " ]
                  }, {
                     "r" : "230",
                     "s" : [ {
                        "value" : [ "LastPositionOf","(" ]
                     }, {
                        "r" : "224",
                        "s" : [ {
                           "value" : [ "'XYZ'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "225",
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
               "localId" : "230",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "LastPositionOf",
               "signature" : [ {
                  "localId" : "231",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "232",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "pattern" : {
                  "localId" : "224",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "XYZ",
                  "type" : "Literal"
               },
               "string" : {
                  "localId" : "225",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "ABCDE",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "234",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "NullPattern",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "234",
                  "s" : [ {
                     "value" : [ "// -1\n","define ","NullPattern",": " ]
                  }, {
                     "r" : "242",
                     "s" : [ {
                        "r" : "235",
                        "value" : [ "LastPositionOf","(","null",", " ]
                     }, {
                        "r" : "236",
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
               "localId" : "242",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "LastPositionOf",
               "signature" : [ {
                  "localId" : "244",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "245",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "pattern" : {
                  "localId" : "243",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "235",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               },
               "string" : {
                  "localId" : "236",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "ABCDE",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "247",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "NullString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "247",
                  "s" : [ {
                     "value" : [ "// null\n","define ","NullString",": " ]
                  }, {
                     "r" : "255",
                     "s" : [ {
                        "value" : [ "LastPositionOf","(" ]
                     }, {
                        "r" : "248",
                        "s" : [ {
                           "value" : [ "'ABCDE'" ]
                        } ]
                     }, {
                        "r" : "249",
                        "value" : [ ", ","null",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "255",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "LastPositionOf",
               "signature" : [ {
                  "localId" : "257",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "258",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "pattern" : {
                  "localId" : "248",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "ABCDE",
                  "type" : "Literal"
               },
               "string" : {
                  "localId" : "256",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "249",
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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "318",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "World",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","World",": " ]
                  }, {
                     "r" : "219",
                     "s" : [ {
                        "value" : [ "Substring","(" ]
                     }, {
                        "r" : "213",
                        "s" : [ {
                           "value" : [ "'HelloWorld'" ]
                        } ]
                     }, {
                        "r" : "214",
                        "value" : [ ", ","5",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "219",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Substring",
               "signature" : [ {
                  "localId" : "220",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "221",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "stringToSub" : {
                  "localId" : "213",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "HelloWorld",
                  "type" : "Literal"
               },
               "startIndex" : {
                  "localId" : "214",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "223",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "Or",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "223",
                  "s" : [ {
                     "value" : [ "","define ","Or",": " ]
                  }, {
                     "r" : "232",
                     "s" : [ {
                        "value" : [ "Substring","(" ]
                     }, {
                        "r" : "224",
                        "s" : [ {
                           "value" : [ "'HelloWorld'" ]
                        } ]
                     }, {
                        "r" : "225",
                        "value" : [ ", ","7",", ","2",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "232",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Substring",
               "signature" : [ {
                  "localId" : "233",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "234",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "235",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "stringToSub" : {
                  "localId" : "224",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "HelloWorld",
                  "type" : "Literal"
               },
               "startIndex" : {
                  "localId" : "225",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "7",
                  "type" : "Literal"
               },
               "length" : {
                  "localId" : "226",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "237",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "ZeroLength",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "237",
                  "s" : [ {
                     "value" : [ "","define ","ZeroLength",": " ]
                  }, {
                     "r" : "246",
                     "s" : [ {
                        "value" : [ "Substring","(" ]
                     }, {
                        "r" : "238",
                        "s" : [ {
                           "value" : [ "'HelloWorld'" ]
                        } ]
                     }, {
                        "r" : "239",
                        "value" : [ ", ","7",", ","0",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "246",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Substring",
               "signature" : [ {
                  "localId" : "247",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "248",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "249",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "stringToSub" : {
                  "localId" : "238",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "HelloWorld",
                  "type" : "Literal"
               },
               "startIndex" : {
                  "localId" : "239",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "7",
                  "type" : "Literal"
               },
               "length" : {
                  "localId" : "240",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "0",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "251",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "StartTooLow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "251",
                  "s" : [ {
                     "value" : [ "","define ","StartTooLow",": " ]
                  }, {
                     "r" : "260",
                     "s" : [ {
                        "value" : [ "Substring","(" ]
                     }, {
                        "r" : "252",
                        "s" : [ {
                           "value" : [ "'HelloWorld'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "253",
                        "s" : [ {
                           "r" : "254",
                           "value" : [ "-","1" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "260",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Substring",
               "signature" : [ {
                  "localId" : "261",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "262",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "stringToSub" : {
                  "localId" : "252",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "HelloWorld",
                  "type" : "Literal"
               },
               "startIndex" : {
                  "localId" : "253",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "Negate",
                  "signature" : [ {
                     "localId" : "255",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "254",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "264",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "StartZero",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "264",
                  "s" : [ {
                     "value" : [ "","define ","StartZero",": " ]
                  }, {
                     "r" : "271",
                     "s" : [ {
                        "value" : [ "Substring","(" ]
                     }, {
                        "r" : "265",
                        "s" : [ {
                           "value" : [ "'HelloWorld'" ]
                        } ]
                     }, {
                        "r" : "266",
                        "value" : [ ", ","0",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "271",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Substring",
               "signature" : [ {
                  "localId" : "272",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "273",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "stringToSub" : {
                  "localId" : "265",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "HelloWorld",
                  "type" : "Literal"
               },
               "startIndex" : {
                  "localId" : "266",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "0",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "275",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "TooMuchLength",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "275",
                  "s" : [ {
                     "value" : [ "","define ","TooMuchLength",": " ]
                  }, {
                     "r" : "284",
                     "s" : [ {
                        "value" : [ "Substring","(" ]
                     }, {
                        "r" : "276",
                        "s" : [ {
                           "value" : [ "'HelloWorld'" ]
                        } ]
                     }, {
                        "r" : "277",
                        "value" : [ ", ","7",", ","25",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "284",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Substring",
               "signature" : [ {
                  "localId" : "285",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "286",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "287",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "stringToSub" : {
                  "localId" : "276",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "HelloWorld",
                  "type" : "Literal"
               },
               "startIndex" : {
                  "localId" : "277",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "7",
                  "type" : "Literal"
               },
               "length" : {
                  "localId" : "278",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "25",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "289",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "NegativeLength",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "289",
                  "s" : [ {
                     "value" : [ "","define ","NegativeLength",": " ]
                  }, {
                     "r" : "300",
                     "s" : [ {
                        "value" : [ "Substring","(" ]
                     }, {
                        "r" : "290",
                        "s" : [ {
                           "value" : [ "'HelloWorld'" ]
                        } ]
                     }, {
                        "r" : "291",
                        "value" : [ ", ","7",", " ]
                     }, {
                        "r" : "292",
                        "s" : [ {
                           "r" : "293",
                           "value" : [ "-","1" ]
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
               "type" : "Substring",
               "signature" : [ {
                  "localId" : "301",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "302",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "303",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "stringToSub" : {
                  "localId" : "290",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "HelloWorld",
                  "type" : "Literal"
               },
               "startIndex" : {
                  "localId" : "291",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "7",
                  "type" : "Literal"
               },
               "length" : {
                  "localId" : "292",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "Negate",
                  "signature" : [ {
                     "localId" : "294",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "293",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "305",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "NullString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "305",
                  "s" : [ {
                     "value" : [ "","define ","NullString",": " ]
                  }, {
                     "r" : "313",
                     "s" : [ {
                        "r" : "306",
                        "value" : [ "Substring","(","null",", ","5",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "313",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Substring",
               "signature" : [ {
                  "localId" : "315",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "316",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "stringToSub" : {
                  "localId" : "314",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "306",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               },
               "startIndex" : {
                  "localId" : "307",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "318",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "NullStart",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "318",
                  "s" : [ {
                     "value" : [ "","define ","NullStart",": " ]
                  }, {
                     "r" : "326",
                     "s" : [ {
                        "value" : [ "Substring","(" ]
                     }, {
                        "r" : "319",
                        "s" : [ {
                           "value" : [ "'HelloWorld'" ]
                        } ]
                     }, {
                        "r" : "320",
                        "value" : [ ", ","null",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "326",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Substring",
               "signature" : [ {
                  "localId" : "328",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "329",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "stringToSub" : {
                  "localId" : "319",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "HelloWorld",
                  "type" : "Literal"
               },
               "startIndex" : {
                  "localId" : "327",
                  "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "320",
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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "295",
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
            "name" : "FooBarStartsWithFoo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","FooBarStartsWithFoo",": " ]
                  }, {
                     "r" : "219",
                     "s" : [ {
                        "value" : [ "StartsWith","(" ]
                     }, {
                        "r" : "213",
                        "s" : [ {
                           "value" : [ "'FooBar'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "214",
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
               "localId" : "219",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "StartsWith",
               "signature" : [ {
                  "localId" : "220",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "221",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "213",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "FooBar",
                  "type" : "Literal"
               }, {
                  "localId" : "214",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Foo",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "223",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "FooBarStartsWithBar",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "223",
                  "s" : [ {
                     "value" : [ "","define ","FooBarStartsWithBar",": " ]
                  }, {
                     "r" : "230",
                     "s" : [ {
                        "value" : [ "StartsWith","(" ]
                     }, {
                        "r" : "224",
                        "s" : [ {
                           "value" : [ "'FooBar'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "225",
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
               "localId" : "230",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "StartsWith",
               "signature" : [ {
                  "localId" : "231",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "232",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "224",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "FooBar",
                  "type" : "Literal"
               }, {
                  "localId" : "225",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Bar",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "234",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "FooBarStartsWithBlank",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "234",
                  "s" : [ {
                     "value" : [ "","define ","FooBarStartsWithBlank",": " ]
                  }, {
                     "r" : "241",
                     "s" : [ {
                        "value" : [ "StartsWith","(" ]
                     }, {
                        "r" : "235",
                        "s" : [ {
                           "value" : [ "'FooBar'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "236",
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
               "localId" : "241",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "StartsWith",
               "signature" : [ {
                  "localId" : "242",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "243",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "235",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "FooBar",
                  "type" : "Literal"
               }, {
                  "localId" : "236",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "245",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "BlankStartsWithFoo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "245",
                  "s" : [ {
                     "value" : [ "","define ","BlankStartsWithFoo",": " ]
                  }, {
                     "r" : "252",
                     "s" : [ {
                        "value" : [ "StartsWith","(" ]
                     }, {
                        "r" : "246",
                        "s" : [ {
                           "value" : [ "''" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "247",
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
               "localId" : "252",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "StartsWith",
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
                  "localId" : "246",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "",
                  "type" : "Literal"
               }, {
                  "localId" : "247",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Foo",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "256",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "StartsWithNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "256",
                  "s" : [ {
                     "value" : [ "","define ","StartsWithNull",": " ]
                  }, {
                     "r" : "264",
                     "s" : [ {
                        "value" : [ "StartsWith","(" ]
                     }, {
                        "r" : "257",
                        "s" : [ {
                           "value" : [ "'FooBar'" ]
                        } ]
                     }, {
                        "r" : "258",
                        "value" : [ ", ","null",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "264",
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
                  "value" : "FooBar",
                  "type" : "Literal"
               }, {
                  "localId" : "265",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "258",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               } ]
            }
         }, {
            "localId" : "269",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "StartsWithNullAsString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "269",
                  "s" : [ {
                     "value" : [ "","define ","StartsWithNullAsString",": " ]
                  }, {
                     "r" : "278",
                     "s" : [ {
                        "value" : [ "StartsWith","(" ]
                     }, {
                        "r" : "270",
                        "s" : [ {
                           "value" : [ "'FooBar'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "271",
                        "s" : [ {
                           "r" : "272",
                           "value" : [ "null"," as " ]
                        }, {
                           "r" : "273",
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
               "localId" : "278",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "StartsWith",
               "signature" : [ {
                  "localId" : "279",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "280",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "270",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "FooBar",
                  "type" : "Literal"
               }, {
                  "localId" : "271",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "272",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "273",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               } ]
            }
         }, {
            "localId" : "282",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "NullStartsWith",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "282",
                  "s" : [ {
                     "value" : [ "","define ","NullStartsWith",": " ]
                  }, {
                     "r" : "290",
                     "s" : [ {
                        "r" : "283",
                        "value" : [ "StartsWith","(","null",", " ]
                     }, {
                        "r" : "284",
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
               "localId" : "290",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "StartsWith",
               "signature" : [ {
                  "localId" : "292",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "293",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "291",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "283",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "284",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Foo",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "295",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "NullAsStringStartsWith",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "295",
                  "s" : [ {
                     "value" : [ "","define ","NullAsStringStartsWith",": " ]
                  }, {
                     "r" : "304",
                     "s" : [ {
                        "value" : [ "StartsWith","(" ]
                     }, {
                        "r" : "296",
                        "s" : [ {
                           "r" : "297",
                           "value" : [ "null"," as " ]
                        }, {
                           "r" : "298",
                           "s" : [ {
                              "value" : [ "String" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "299",
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
               "localId" : "304",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "StartsWith",
               "signature" : [ {
                  "localId" : "305",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "306",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "296",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "297",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "298",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "299",
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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "295",
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
            "name" : "FooBarEndsWithBar",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","FooBarEndsWithBar",": " ]
                  }, {
                     "r" : "219",
                     "s" : [ {
                        "value" : [ "EndsWith","(" ]
                     }, {
                        "r" : "213",
                        "s" : [ {
                           "value" : [ "'FooBar'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "214",
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
               "localId" : "219",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "EndsWith",
               "signature" : [ {
                  "localId" : "220",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "221",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "213",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "FooBar",
                  "type" : "Literal"
               }, {
                  "localId" : "214",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Bar",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "223",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "FooBarEndsWithFoo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "223",
                  "s" : [ {
                     "value" : [ "","define ","FooBarEndsWithFoo",": " ]
                  }, {
                     "r" : "230",
                     "s" : [ {
                        "value" : [ "EndsWith","(" ]
                     }, {
                        "r" : "224",
                        "s" : [ {
                           "value" : [ "'FooBar'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "225",
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
               "localId" : "230",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "EndsWith",
               "signature" : [ {
                  "localId" : "231",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "232",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "224",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "FooBar",
                  "type" : "Literal"
               }, {
                  "localId" : "225",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Foo",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "234",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "FooBarEndsWithBlank",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "234",
                  "s" : [ {
                     "value" : [ "","define ","FooBarEndsWithBlank",": " ]
                  }, {
                     "r" : "241",
                     "s" : [ {
                        "value" : [ "EndsWith","(" ]
                     }, {
                        "r" : "235",
                        "s" : [ {
                           "value" : [ "'FooBar'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "236",
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
               "localId" : "241",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "EndsWith",
               "signature" : [ {
                  "localId" : "242",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "243",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "235",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "FooBar",
                  "type" : "Literal"
               }, {
                  "localId" : "236",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "245",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "BlankEndsWithFoo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "245",
                  "s" : [ {
                     "value" : [ "","define ","BlankEndsWithFoo",": " ]
                  }, {
                     "r" : "252",
                     "s" : [ {
                        "value" : [ "EndsWith","(" ]
                     }, {
                        "r" : "246",
                        "s" : [ {
                           "value" : [ "''" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "247",
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
               "localId" : "252",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "EndsWith",
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
                  "localId" : "246",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "",
                  "type" : "Literal"
               }, {
                  "localId" : "247",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Foo",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "256",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "EndsWithNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "256",
                  "s" : [ {
                     "value" : [ "","define ","EndsWithNull",": " ]
                  }, {
                     "r" : "264",
                     "s" : [ {
                        "value" : [ "EndsWith","(" ]
                     }, {
                        "r" : "257",
                        "s" : [ {
                           "value" : [ "'FooBar'" ]
                        } ]
                     }, {
                        "r" : "258",
                        "value" : [ ", ","null",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "264",
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
                  "value" : "FooBar",
                  "type" : "Literal"
               }, {
                  "localId" : "265",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "258",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               } ]
            }
         }, {
            "localId" : "269",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "EndsWithNullAsString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "269",
                  "s" : [ {
                     "value" : [ "","define ","EndsWithNullAsString",": " ]
                  }, {
                     "r" : "278",
                     "s" : [ {
                        "value" : [ "EndsWith","(" ]
                     }, {
                        "r" : "270",
                        "s" : [ {
                           "value" : [ "'FooBar'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "271",
                        "s" : [ {
                           "r" : "272",
                           "value" : [ "null"," as " ]
                        }, {
                           "r" : "273",
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
               "localId" : "278",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "EndsWith",
               "signature" : [ {
                  "localId" : "279",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "280",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "270",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "FooBar",
                  "type" : "Literal"
               }, {
                  "localId" : "271",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "272",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "273",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               } ]
            }
         }, {
            "localId" : "282",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "NullEndsWith",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "282",
                  "s" : [ {
                     "value" : [ "","define ","NullEndsWith",": " ]
                  }, {
                     "r" : "291",
                     "s" : [ {
                        "value" : [ "EndsWith","(" ]
                     }, {
                        "r" : "283",
                        "s" : [ {
                           "r" : "284",
                           "value" : [ "null"," as " ]
                        }, {
                           "r" : "285",
                           "s" : [ {
                              "value" : [ "String" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "286",
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
               "localId" : "291",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "EndsWith",
               "signature" : [ {
                  "localId" : "292",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "293",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "283",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "284",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "285",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "286",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Foo",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "295",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "NullAsStringEndsWith",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "295",
                  "s" : [ {
                     "value" : [ "","define ","NullAsStringEndsWith",": " ]
                  }, {
                     "r" : "304",
                     "s" : [ {
                        "value" : [ "EndsWith","(" ]
                     }, {
                        "r" : "296",
                        "s" : [ {
                           "r" : "297",
                           "value" : [ "null"," as " ]
                        }, {
                           "r" : "298",
                           "s" : [ {
                              "value" : [ "String" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "299",
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
               "localId" : "304",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "EndsWith",
               "signature" : [ {
                  "localId" : "305",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "306",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "296",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "297",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "298",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "299",
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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "370",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "ReplaceOne",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","ReplaceOne",": " ]
                  }, {
                     "r" : "221",
                     "s" : [ {
                        "value" : [ "ReplaceMatches","(" ]
                     }, {
                        "r" : "213",
                        "s" : [ {
                           "value" : [ "'FooBar'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "214",
                        "s" : [ {
                           "value" : [ "'Bar'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "215",
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
               "localId" : "221",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "ReplaceMatches",
               "signature" : [ {
                  "localId" : "222",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "223",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "224",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "213",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "FooBar",
                  "type" : "Literal"
               }, {
                  "localId" : "214",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Bar",
                  "type" : "Literal"
               }, {
                  "localId" : "215",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Baz",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "226",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "ReplaceMany",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "226",
                  "s" : [ {
                     "value" : [ "","define ","ReplaceMany",": " ]
                  }, {
                     "r" : "235",
                     "s" : [ {
                        "value" : [ "ReplaceMatches","(" ]
                     }, {
                        "r" : "227",
                        "s" : [ {
                           "value" : [ "'FooBarFooBarFooBar'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "228",
                        "s" : [ {
                           "value" : [ "'Bar'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "229",
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
               "localId" : "235",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "ReplaceMatches",
               "signature" : [ {
                  "localId" : "236",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "237",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "238",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "227",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "FooBarFooBarFooBar",
                  "type" : "Literal"
               }, {
                  "localId" : "228",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Bar",
                  "type" : "Literal"
               }, {
                  "localId" : "229",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Baz",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "240",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "ReplaceCapital",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "240",
                  "s" : [ {
                     "value" : [ "","define ","ReplaceCapital",": " ]
                  }, {
                     "r" : "249",
                     "s" : [ {
                        "value" : [ "ReplaceMatches","(" ]
                     }, {
                        "r" : "241",
                        "s" : [ {
                           "value" : [ "'Tattle'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "242",
                        "s" : [ {
                           "value" : [ "'T'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "243",
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
               "localId" : "249",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "ReplaceMatches",
               "signature" : [ {
                  "localId" : "250",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "251",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "252",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "241",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Tattle",
                  "type" : "Literal"
               }, {
                  "localId" : "242",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "T",
                  "type" : "Literal"
               }, {
                  "localId" : "243",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "R",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "254",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "ReplaceDiacritical",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "254",
                  "s" : [ {
                     "value" : [ "","define ","ReplaceDiacritical",": " ]
                  }, {
                     "r" : "263",
                     "s" : [ {
                        "value" : [ "ReplaceMatches","(" ]
                     }, {
                        "r" : "255",
                        "s" : [ {
                           "value" : [ "'Cafè'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "256",
                        "s" : [ {
                           "value" : [ "'è'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "257",
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
               "localId" : "263",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "ReplaceMatches",
               "signature" : [ {
                  "localId" : "264",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "265",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "266",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "255",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Cafè",
                  "type" : "Literal"
               }, {
                  "localId" : "256",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "è",
                  "type" : "Literal"
               }, {
                  "localId" : "257",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "é",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "268",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "ReplaceUnicode",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "268",
                  "s" : [ {
                     "value" : [ "","define ","ReplaceUnicode",": " ]
                  }, {
                     "r" : "277",
                     "s" : [ {
                        "value" : [ "ReplaceMatches","(" ]
                     }, {
                        "r" : "269",
                        "s" : [ {
                           "value" : [ "'Turn that frown \uD83D\uDE41 upside down! \uD83D\uDE03'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "270",
                        "s" : [ {
                           "value" : [ "'\uD83D\uDE41'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "271",
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
               "localId" : "277",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "ReplaceMatches",
               "signature" : [ {
                  "localId" : "278",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "279",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "280",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "269",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Turn that frown \uD83D\uDE41 upside down! \uD83D\uDE03",
                  "type" : "Literal"
               }, {
                  "localId" : "270",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "\uD83D\uDE41",
                  "type" : "Literal"
               }, {
                  "localId" : "271",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "\uD83D\uDE03",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "282",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "ReplaceSpace",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "282",
                  "s" : [ {
                     "value" : [ "","define ","ReplaceSpace",": " ]
                  }, {
                     "r" : "291",
                     "s" : [ {
                        "value" : [ "ReplaceMatches","(" ]
                     }, {
                        "r" : "283",
                        "s" : [ {
                           "value" : [ "'(123) 456 7890'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "284",
                        "s" : [ {
                           "value" : [ "'\\\\s'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "285",
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
               "localId" : "291",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "ReplaceMatches",
               "signature" : [ {
                  "localId" : "292",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "293",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "294",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "283",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "(123) 456 7890",
                  "type" : "Literal"
               }, {
                  "localId" : "284",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "\\s",
                  "type" : "Literal"
               }, {
                  "localId" : "285",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "-",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "296",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "ReplaceEmpty",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "296",
                  "s" : [ {
                     "value" : [ "","define ","ReplaceEmpty",": " ]
                  }, {
                     "r" : "305",
                     "s" : [ {
                        "value" : [ "ReplaceMatches","(" ]
                     }, {
                        "r" : "297",
                        "s" : [ {
                           "value" : [ "'FooBar'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "298",
                        "s" : [ {
                           "value" : [ "''" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "299",
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
               "localId" : "305",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "ReplaceMatches",
               "signature" : [ {
                  "localId" : "306",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "307",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "308",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "297",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "FooBar",
                  "type" : "Literal"
               }, {
                  "localId" : "298",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "",
                  "type" : "Literal"
               }, {
                  "localId" : "299",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : ".",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "310",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "ReplaceMatchGroups",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "310",
                  "s" : [ {
                     "value" : [ "","define ","ReplaceMatchGroups",": " ]
                  }, {
                     "r" : "319",
                     "s" : [ {
                        "value" : [ "ReplaceMatches","(" ]
                     }, {
                        "r" : "311",
                        "s" : [ {
                           "value" : [ "'Foo[123]'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "312",
                        "s" : [ {
                           "value" : [ "'Foo\\\\[(\\\\d+)]'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "313",
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
               "localId" : "319",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "ReplaceMatches",
               "signature" : [ {
                  "localId" : "320",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "321",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "322",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "311",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Foo[123]",
                  "type" : "Literal"
               }, {
                  "localId" : "312",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Foo\\[(\\d+)]",
                  "type" : "Literal"
               }, {
                  "localId" : "313",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Bar[$1]",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "324",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "ReplaceNone",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "324",
                  "s" : [ {
                     "value" : [ "","define ","ReplaceNone",": " ]
                  }, {
                     "r" : "333",
                     "s" : [ {
                        "value" : [ "ReplaceMatches","(" ]
                     }, {
                        "r" : "325",
                        "s" : [ {
                           "value" : [ "'Foo'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "326",
                        "s" : [ {
                           "value" : [ "'Bar'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "327",
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
               "localId" : "333",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "ReplaceMatches",
               "signature" : [ {
                  "localId" : "334",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "335",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "336",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "325",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Foo",
                  "type" : "Literal"
               }, {
                  "localId" : "326",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Bar",
                  "type" : "Literal"
               }, {
                  "localId" : "327",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Baz",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "338",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "ReplaceArgumentIsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "338",
                  "s" : [ {
                     "value" : [ "","define ","ReplaceArgumentIsNull",": " ]
                  }, {
                     "r" : "348",
                     "s" : [ {
                        "r" : "339",
                        "value" : [ "ReplaceMatches","(","null",", " ]
                     }, {
                        "r" : "340",
                        "s" : [ {
                           "value" : [ "'Bar'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "341",
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
               "localId" : "348",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "ReplaceMatches",
               "signature" : [ {
                  "localId" : "350",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "351",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "352",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "349",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "339",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "340",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Bar",
                  "type" : "Literal"
               }, {
                  "localId" : "341",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Baz",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "354",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "ReplacePatternIsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "354",
                  "s" : [ {
                     "value" : [ "","define ","ReplacePatternIsNull",": " ]
                  }, {
                     "r" : "364",
                     "s" : [ {
                        "value" : [ "ReplaceMatches","(" ]
                     }, {
                        "r" : "355",
                        "s" : [ {
                           "value" : [ "'Foo'" ]
                        } ]
                     }, {
                        "r" : "356",
                        "value" : [ ", ","null",", " ]
                     }, {
                        "r" : "357",
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
               "localId" : "364",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "ReplaceMatches",
               "signature" : [ {
                  "localId" : "366",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "367",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "368",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "355",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Foo",
                  "type" : "Literal"
               }, {
                  "localId" : "365",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "356",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "357",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Baz",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "370",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "ReplaceSubstitutionIsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "370",
                  "s" : [ {
                     "value" : [ "","define ","ReplaceSubstitutionIsNull",": " ]
                  }, {
                     "r" : "380",
                     "s" : [ {
                        "value" : [ "ReplaceMatches","(" ]
                     }, {
                        "r" : "371",
                        "s" : [ {
                           "value" : [ "'Foo'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "372",
                        "s" : [ {
                           "value" : [ "'Bar'" ]
                        } ]
                     }, {
                        "r" : "373",
                        "value" : [ ", ","null",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "380",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "ReplaceMatches",
               "signature" : [ {
                  "localId" : "382",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "383",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "384",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "371",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Foo",
                  "type" : "Literal"
               }, {
                  "localId" : "372",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Bar",
                  "type" : "Literal"
               }, {
                  "localId" : "381",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "373",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               } ]
            }
         } ]
      }
   }
}

