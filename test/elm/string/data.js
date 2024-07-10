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
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
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
            "r" : "479",
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
                     "r" : "216",
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
               "localId" : "216",
               "type" : "Concatenate",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "214",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Hello",
                  "type" : "Literal"
               }, {
                  "localId" : "215",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "World",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "218",
            "name" : "Sentence",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "218",
                  "s" : [ {
                     "value" : [ "","define ","Sentence",": " ]
                  }, {
                     "r" : "267",
                     "s" : [ {
                        "r" : "265",
                        "s" : [ {
                           "r" : "263",
                           "s" : [ {
                              "r" : "261",
                              "s" : [ {
                                 "r" : "259",
                                 "s" : [ {
                                    "r" : "257",
                                    "s" : [ {
                                       "r" : "255",
                                       "s" : [ {
                                          "r" : "253",
                                          "s" : [ {
                                             "r" : "251",
                                             "s" : [ {
                                                "r" : "249",
                                                "s" : [ {
                                                   "r" : "247",
                                                   "s" : [ {
                                                      "r" : "245",
                                                      "s" : [ {
                                                         "r" : "243",
                                                         "s" : [ {
                                                            "r" : "241",
                                                            "s" : [ {
                                                               "r" : "239",
                                                               "s" : [ {
                                                                  "r" : "237",
                                                                  "s" : [ {
                                                                     "r" : "235",
                                                                     "s" : [ {
                                                                        "value" : [ "'The'" ]
                                                                     } ]
                                                                  }, {
                                                                     "value" : [ " + " ]
                                                                  }, {
                                                                     "r" : "236",
                                                                     "s" : [ {
                                                                        "value" : [ "' '" ]
                                                                     } ]
                                                                  } ]
                                                               }, {
                                                                  "value" : [ " + " ]
                                                               }, {
                                                                  "r" : "238",
                                                                  "s" : [ {
                                                                     "value" : [ "'quick'" ]
                                                                  } ]
                                                               } ]
                                                            }, {
                                                               "value" : [ " + " ]
                                                            }, {
                                                               "r" : "240",
                                                               "s" : [ {
                                                                  "value" : [ "' '" ]
                                                               } ]
                                                            } ]
                                                         }, {
                                                            "value" : [ " + " ]
                                                         }, {
                                                            "r" : "242",
                                                            "s" : [ {
                                                               "value" : [ "'brown'" ]
                                                            } ]
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
                                                      "r" : "246",
                                                      "s" : [ {
                                                         "value" : [ "'fox'" ]
                                                      } ]
                                                   } ]
                                                }, {
                                                   "value" : [ " + " ]
                                                }, {
                                                   "r" : "248",
                                                   "s" : [ {
                                                      "value" : [ "' '" ]
                                                   } ]
                                                } ]
                                             }, {
                                                "value" : [ " + " ]
                                             }, {
                                                "r" : "250",
                                                "s" : [ {
                                                   "value" : [ "'jumps'" ]
                                                } ]
                                             } ]
                                          }, {
                                             "value" : [ " + " ]
                                          }, {
                                             "r" : "252",
                                             "s" : [ {
                                                "value" : [ "' '" ]
                                             } ]
                                          } ]
                                       }, {
                                          "value" : [ "\n                  + " ]
                                       }, {
                                          "r" : "254",
                                          "s" : [ {
                                             "value" : [ "'over'" ]
                                          } ]
                                       } ]
                                    }, {
                                       "value" : [ " + " ]
                                    }, {
                                       "r" : "256",
                                       "s" : [ {
                                          "value" : [ "' '" ]
                                       } ]
                                    } ]
                                 }, {
                                    "value" : [ " + " ]
                                 }, {
                                    "r" : "258",
                                    "s" : [ {
                                       "value" : [ "'the'" ]
                                    } ]
                                 } ]
                              }, {
                                 "value" : [ " + " ]
                              }, {
                                 "r" : "260",
                                 "s" : [ {
                                    "value" : [ "' '" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " + " ]
                           }, {
                              "r" : "262",
                              "s" : [ {
                                 "value" : [ "'lazy'" ]
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
                        "r" : "266",
                        "s" : [ {
                           "value" : [ "'dog.'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "267",
               "type" : "Concatenate",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "265",
                  "type" : "Concatenate",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "263",
                     "type" : "Concatenate",
                     "signature" : [ ],
                     "operand" : [ {
                        "localId" : "261",
                        "type" : "Concatenate",
                        "signature" : [ ],
                        "operand" : [ {
                           "localId" : "259",
                           "type" : "Concatenate",
                           "signature" : [ ],
                           "operand" : [ {
                              "localId" : "257",
                              "type" : "Concatenate",
                              "signature" : [ ],
                              "operand" : [ {
                                 "localId" : "255",
                                 "type" : "Concatenate",
                                 "signature" : [ ],
                                 "operand" : [ {
                                    "localId" : "253",
                                    "type" : "Concatenate",
                                    "signature" : [ ],
                                    "operand" : [ {
                                       "localId" : "251",
                                       "type" : "Concatenate",
                                       "signature" : [ ],
                                       "operand" : [ {
                                          "localId" : "249",
                                          "type" : "Concatenate",
                                          "signature" : [ ],
                                          "operand" : [ {
                                             "localId" : "247",
                                             "type" : "Concatenate",
                                             "signature" : [ ],
                                             "operand" : [ {
                                                "localId" : "245",
                                                "type" : "Concatenate",
                                                "signature" : [ ],
                                                "operand" : [ {
                                                   "localId" : "243",
                                                   "type" : "Concatenate",
                                                   "signature" : [ ],
                                                   "operand" : [ {
                                                      "localId" : "241",
                                                      "type" : "Concatenate",
                                                      "signature" : [ ],
                                                      "operand" : [ {
                                                         "localId" : "239",
                                                         "type" : "Concatenate",
                                                         "signature" : [ ],
                                                         "operand" : [ {
                                                            "localId" : "237",
                                                            "type" : "Concatenate",
                                                            "signature" : [ ],
                                                            "operand" : [ {
                                                               "localId" : "235",
                                                               "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                               "value" : "The",
                                                               "type" : "Literal"
                                                            }, {
                                                               "localId" : "236",
                                                               "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                               "value" : " ",
                                                               "type" : "Literal"
                                                            } ]
                                                         }, {
                                                            "localId" : "238",
                                                            "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                            "value" : "quick",
                                                            "type" : "Literal"
                                                         } ]
                                                      }, {
                                                         "localId" : "240",
                                                         "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                         "value" : " ",
                                                         "type" : "Literal"
                                                      } ]
                                                   }, {
                                                      "localId" : "242",
                                                      "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                      "value" : "brown",
                                                      "type" : "Literal"
                                                   } ]
                                                }, {
                                                   "localId" : "244",
                                                   "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                   "value" : " ",
                                                   "type" : "Literal"
                                                } ]
                                             }, {
                                                "localId" : "246",
                                                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                "value" : "fox",
                                                "type" : "Literal"
                                             } ]
                                          }, {
                                             "localId" : "248",
                                             "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                             "value" : " ",
                                             "type" : "Literal"
                                          } ]
                                       }, {
                                          "localId" : "250",
                                          "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                          "value" : "jumps",
                                          "type" : "Literal"
                                       } ]
                                    }, {
                                       "localId" : "252",
                                       "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                       "value" : " ",
                                       "type" : "Literal"
                                    } ]
                                 }, {
                                    "localId" : "254",
                                    "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                    "value" : "over",
                                    "type" : "Literal"
                                 } ]
                              }, {
                                 "localId" : "256",
                                 "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                 "value" : " ",
                                 "type" : "Literal"
                              } ]
                           }, {
                              "localId" : "258",
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "the",
                              "type" : "Literal"
                           } ]
                        }, {
                           "localId" : "260",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : " ",
                           "type" : "Literal"
                        } ]
                     }, {
                        "localId" : "262",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "lazy",
                        "type" : "Literal"
                     } ]
                  }, {
                     "localId" : "264",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : " ",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "266",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "dog.",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "269",
            "name" : "ConcatNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "269",
                  "s" : [ {
                     "value" : [ "","define ","ConcatNull",": " ]
                  }, {
                     "r" : "274",
                     "s" : [ {
                        "r" : "271",
                        "s" : [ {
                           "value" : [ "'Hello'" ]
                        } ]
                     }, {
                        "r" : "272",
                        "value" : [ " + ","null" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "274",
               "type" : "Concatenate",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "271",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Hello",
                  "type" : "Literal"
               }, {
                  "localId" : "273",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "272",
                     "type" : "Null"
                  }
               } ]
            }
         }, {
            "localId" : "276",
            "name" : "Hello",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "276",
                  "s" : [ {
                     "value" : [ "","define ","Hello",": " ]
                  }, {
                     "r" : "277",
                     "s" : [ {
                        "value" : [ "'Hello'" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "277",
               "valueType" : "{urn:hl7-org:elm-types:r1}String",
               "value" : "Hello",
               "type" : "Literal"
            }
         }, {
            "localId" : "279",
            "name" : "World",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "279",
                  "s" : [ {
                     "value" : [ "","define ","World",": " ]
                  }, {
                     "r" : "280",
                     "s" : [ {
                        "value" : [ "'World'" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "280",
               "valueType" : "{urn:hl7-org:elm-types:r1}String",
               "value" : "World",
               "type" : "Literal"
            }
         }, {
            "localId" : "282",
            "name" : "HelloWorldVariables",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "282",
                  "s" : [ {
                     "value" : [ "","define ","HelloWorldVariables",": " ]
                  }, {
                     "r" : "286",
                     "s" : [ {
                        "r" : "284",
                        "s" : [ {
                           "value" : [ "Hello" ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "285",
                        "s" : [ {
                           "value" : [ "World" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "286",
               "type" : "Concatenate",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "284",
                  "name" : "Hello",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "285",
                  "name" : "World",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "288",
            "name" : "AndHelloWorld",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "288",
                  "s" : [ {
                     "value" : [ "","define ","AndHelloWorld",": " ]
                  }, {
                     "r" : "289",
                     "s" : [ {
                        "r" : "290",
                        "s" : [ {
                           "value" : [ "'Hello'" ]
                        } ]
                     }, {
                        "value" : [ " & " ]
                     }, {
                        "r" : "291",
                        "s" : [ {
                           "value" : [ "'World'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "289",
               "type" : "Concatenate",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "295",
                  "type" : "Coalesce",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "290",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "Hello",
                     "type" : "Literal"
                  }, {
                     "localId" : "292",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "299",
                  "type" : "Coalesce",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "291",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "World",
                     "type" : "Literal"
                  }, {
                     "localId" : "296",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "301",
            "name" : "AndSentence",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "301",
                  "s" : [ {
                     "value" : [ "","define ","AndSentence",": " ]
                  }, {
                     "r" : "302",
                     "s" : [ {
                        "r" : "303",
                        "s" : [ {
                           "r" : "304",
                           "s" : [ {
                              "r" : "305",
                              "s" : [ {
                                 "r" : "306",
                                 "s" : [ {
                                    "r" : "307",
                                    "s" : [ {
                                       "r" : "308",
                                       "s" : [ {
                                          "r" : "309",
                                          "s" : [ {
                                             "r" : "310",
                                             "s" : [ {
                                                "r" : "311",
                                                "s" : [ {
                                                   "r" : "312",
                                                   "s" : [ {
                                                      "r" : "313",
                                                      "s" : [ {
                                                         "r" : "314",
                                                         "s" : [ {
                                                            "r" : "315",
                                                            "s" : [ {
                                                               "r" : "316",
                                                               "s" : [ {
                                                                  "r" : "317",
                                                                  "s" : [ {
                                                                     "r" : "318",
                                                                     "s" : [ {
                                                                        "value" : [ "'The'" ]
                                                                     } ]
                                                                  }, {
                                                                     "value" : [ " & " ]
                                                                  }, {
                                                                     "r" : "319",
                                                                     "s" : [ {
                                                                        "value" : [ "' '" ]
                                                                     } ]
                                                                  } ]
                                                               }, {
                                                                  "value" : [ " & " ]
                                                               }, {
                                                                  "r" : "328",
                                                                  "s" : [ {
                                                                     "value" : [ "'quick'" ]
                                                                  } ]
                                                               } ]
                                                            }, {
                                                               "value" : [ " & " ]
                                                            }, {
                                                               "r" : "337",
                                                               "s" : [ {
                                                                  "value" : [ "' '" ]
                                                               } ]
                                                            } ]
                                                         }, {
                                                            "value" : [ " & " ]
                                                         }, {
                                                            "r" : "346",
                                                            "s" : [ {
                                                               "value" : [ "'brown'" ]
                                                            } ]
                                                         } ]
                                                      }, {
                                                         "value" : [ " & " ]
                                                      }, {
                                                         "r" : "355",
                                                         "s" : [ {
                                                            "value" : [ "' '" ]
                                                         } ]
                                                      } ]
                                                   }, {
                                                      "value" : [ " & " ]
                                                   }, {
                                                      "r" : "364",
                                                      "s" : [ {
                                                         "value" : [ "'fox'" ]
                                                      } ]
                                                   } ]
                                                }, {
                                                   "value" : [ " & " ]
                                                }, {
                                                   "r" : "373",
                                                   "s" : [ {
                                                      "value" : [ "' '" ]
                                                   } ]
                                                } ]
                                             }, {
                                                "value" : [ " & " ]
                                             }, {
                                                "r" : "382",
                                                "s" : [ {
                                                   "value" : [ "'jumps'" ]
                                                } ]
                                             } ]
                                          }, {
                                             "value" : [ " & " ]
                                          }, {
                                             "r" : "391",
                                             "s" : [ {
                                                "value" : [ "' '" ]
                                             } ]
                                          } ]
                                       }, {
                                          "value" : [ "\n                  & " ]
                                       }, {
                                          "r" : "400",
                                          "s" : [ {
                                             "value" : [ "'over'" ]
                                          } ]
                                       } ]
                                    }, {
                                       "value" : [ " & " ]
                                    }, {
                                       "r" : "409",
                                       "s" : [ {
                                          "value" : [ "' '" ]
                                       } ]
                                    } ]
                                 }, {
                                    "value" : [ " & " ]
                                 }, {
                                    "r" : "418",
                                    "s" : [ {
                                       "value" : [ "'the'" ]
                                    } ]
                                 } ]
                              }, {
                                 "value" : [ " & " ]
                              }, {
                                 "r" : "427",
                                 "s" : [ {
                                    "value" : [ "' '" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " & " ]
                           }, {
                              "r" : "436",
                              "s" : [ {
                                 "value" : [ "'lazy'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ " & " ]
                        }, {
                           "r" : "445",
                           "s" : [ {
                              "value" : [ "' '" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " & " ]
                     }, {
                        "r" : "454",
                        "s" : [ {
                           "value" : [ "'dog.'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "302",
               "type" : "Concatenate",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "458",
                  "type" : "Coalesce",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "303",
                     "type" : "Concatenate",
                     "signature" : [ ],
                     "operand" : [ {
                        "localId" : "449",
                        "type" : "Coalesce",
                        "signature" : [ ],
                        "operand" : [ {
                           "localId" : "304",
                           "type" : "Concatenate",
                           "signature" : [ ],
                           "operand" : [ {
                              "localId" : "440",
                              "type" : "Coalesce",
                              "signature" : [ ],
                              "operand" : [ {
                                 "localId" : "305",
                                 "type" : "Concatenate",
                                 "signature" : [ ],
                                 "operand" : [ {
                                    "localId" : "431",
                                    "type" : "Coalesce",
                                    "signature" : [ ],
                                    "operand" : [ {
                                       "localId" : "306",
                                       "type" : "Concatenate",
                                       "signature" : [ ],
                                       "operand" : [ {
                                          "localId" : "422",
                                          "type" : "Coalesce",
                                          "signature" : [ ],
                                          "operand" : [ {
                                             "localId" : "307",
                                             "type" : "Concatenate",
                                             "signature" : [ ],
                                             "operand" : [ {
                                                "localId" : "413",
                                                "type" : "Coalesce",
                                                "signature" : [ ],
                                                "operand" : [ {
                                                   "localId" : "308",
                                                   "type" : "Concatenate",
                                                   "signature" : [ ],
                                                   "operand" : [ {
                                                      "localId" : "404",
                                                      "type" : "Coalesce",
                                                      "signature" : [ ],
                                                      "operand" : [ {
                                                         "localId" : "309",
                                                         "type" : "Concatenate",
                                                         "signature" : [ ],
                                                         "operand" : [ {
                                                            "localId" : "395",
                                                            "type" : "Coalesce",
                                                            "signature" : [ ],
                                                            "operand" : [ {
                                                               "localId" : "310",
                                                               "type" : "Concatenate",
                                                               "signature" : [ ],
                                                               "operand" : [ {
                                                                  "localId" : "386",
                                                                  "type" : "Coalesce",
                                                                  "signature" : [ ],
                                                                  "operand" : [ {
                                                                     "localId" : "311",
                                                                     "type" : "Concatenate",
                                                                     "signature" : [ ],
                                                                     "operand" : [ {
                                                                        "localId" : "377",
                                                                        "type" : "Coalesce",
                                                                        "signature" : [ ],
                                                                        "operand" : [ {
                                                                           "localId" : "312",
                                                                           "type" : "Concatenate",
                                                                           "signature" : [ ],
                                                                           "operand" : [ {
                                                                              "localId" : "368",
                                                                              "type" : "Coalesce",
                                                                              "signature" : [ ],
                                                                              "operand" : [ {
                                                                                 "localId" : "313",
                                                                                 "type" : "Concatenate",
                                                                                 "signature" : [ ],
                                                                                 "operand" : [ {
                                                                                    "localId" : "359",
                                                                                    "type" : "Coalesce",
                                                                                    "signature" : [ ],
                                                                                    "operand" : [ {
                                                                                       "localId" : "314",
                                                                                       "type" : "Concatenate",
                                                                                       "signature" : [ ],
                                                                                       "operand" : [ {
                                                                                          "localId" : "350",
                                                                                          "type" : "Coalesce",
                                                                                          "signature" : [ ],
                                                                                          "operand" : [ {
                                                                                             "localId" : "315",
                                                                                             "type" : "Concatenate",
                                                                                             "signature" : [ ],
                                                                                             "operand" : [ {
                                                                                                "localId" : "341",
                                                                                                "type" : "Coalesce",
                                                                                                "signature" : [ ],
                                                                                                "operand" : [ {
                                                                                                   "localId" : "316",
                                                                                                   "type" : "Concatenate",
                                                                                                   "signature" : [ ],
                                                                                                   "operand" : [ {
                                                                                                      "localId" : "332",
                                                                                                      "type" : "Coalesce",
                                                                                                      "signature" : [ ],
                                                                                                      "operand" : [ {
                                                                                                         "localId" : "317",
                                                                                                         "type" : "Concatenate",
                                                                                                         "signature" : [ ],
                                                                                                         "operand" : [ {
                                                                                                            "localId" : "323",
                                                                                                            "type" : "Coalesce",
                                                                                                            "signature" : [ ],
                                                                                                            "operand" : [ {
                                                                                                               "localId" : "318",
                                                                                                               "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                               "value" : "The",
                                                                                                               "type" : "Literal"
                                                                                                            }, {
                                                                                                               "localId" : "320",
                                                                                                               "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                               "value" : "",
                                                                                                               "type" : "Literal"
                                                                                                            } ]
                                                                                                         }, {
                                                                                                            "localId" : "327",
                                                                                                            "type" : "Coalesce",
                                                                                                            "signature" : [ ],
                                                                                                            "operand" : [ {
                                                                                                               "localId" : "319",
                                                                                                               "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                               "value" : " ",
                                                                                                               "type" : "Literal"
                                                                                                            }, {
                                                                                                               "localId" : "324",
                                                                                                               "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                               "value" : "",
                                                                                                               "type" : "Literal"
                                                                                                            } ]
                                                                                                         } ]
                                                                                                      }, {
                                                                                                         "localId" : "329",
                                                                                                         "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                         "value" : "",
                                                                                                         "type" : "Literal"
                                                                                                      } ]
                                                                                                   }, {
                                                                                                      "localId" : "336",
                                                                                                      "type" : "Coalesce",
                                                                                                      "signature" : [ ],
                                                                                                      "operand" : [ {
                                                                                                         "localId" : "328",
                                                                                                         "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                         "value" : "quick",
                                                                                                         "type" : "Literal"
                                                                                                      }, {
                                                                                                         "localId" : "333",
                                                                                                         "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                         "value" : "",
                                                                                                         "type" : "Literal"
                                                                                                      } ]
                                                                                                   } ]
                                                                                                }, {
                                                                                                   "localId" : "338",
                                                                                                   "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                   "value" : "",
                                                                                                   "type" : "Literal"
                                                                                                } ]
                                                                                             }, {
                                                                                                "localId" : "345",
                                                                                                "type" : "Coalesce",
                                                                                                "signature" : [ ],
                                                                                                "operand" : [ {
                                                                                                   "localId" : "337",
                                                                                                   "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                   "value" : " ",
                                                                                                   "type" : "Literal"
                                                                                                }, {
                                                                                                   "localId" : "342",
                                                                                                   "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                   "value" : "",
                                                                                                   "type" : "Literal"
                                                                                                } ]
                                                                                             } ]
                                                                                          }, {
                                                                                             "localId" : "347",
                                                                                             "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                                             "value" : "",
                                                                                             "type" : "Literal"
                                                                                          } ]
                                                                                       }, {
                                                                                          "localId" : "354",
                                                                                          "type" : "Coalesce",
                                                                                          "signature" : [ ],
                                                                                          "operand" : [ {
                                                                                             "localId" : "346",
                                                                                             "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                                             "value" : "brown",
                                                                                             "type" : "Literal"
                                                                                          }, {
                                                                                             "localId" : "351",
                                                                                             "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                                             "value" : "",
                                                                                             "type" : "Literal"
                                                                                          } ]
                                                                                       } ]
                                                                                    }, {
                                                                                       "localId" : "356",
                                                                                       "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                                       "value" : "",
                                                                                       "type" : "Literal"
                                                                                    } ]
                                                                                 }, {
                                                                                    "localId" : "363",
                                                                                    "type" : "Coalesce",
                                                                                    "signature" : [ ],
                                                                                    "operand" : [ {
                                                                                       "localId" : "355",
                                                                                       "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                                       "value" : " ",
                                                                                       "type" : "Literal"
                                                                                    }, {
                                                                                       "localId" : "360",
                                                                                       "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                                       "value" : "",
                                                                                       "type" : "Literal"
                                                                                    } ]
                                                                                 } ]
                                                                              }, {
                                                                                 "localId" : "365",
                                                                                 "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                                 "value" : "",
                                                                                 "type" : "Literal"
                                                                              } ]
                                                                           }, {
                                                                              "localId" : "372",
                                                                              "type" : "Coalesce",
                                                                              "signature" : [ ],
                                                                              "operand" : [ {
                                                                                 "localId" : "364",
                                                                                 "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                                 "value" : "fox",
                                                                                 "type" : "Literal"
                                                                              }, {
                                                                                 "localId" : "369",
                                                                                 "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                                 "value" : "",
                                                                                 "type" : "Literal"
                                                                              } ]
                                                                           } ]
                                                                        }, {
                                                                           "localId" : "374",
                                                                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                           "value" : "",
                                                                           "type" : "Literal"
                                                                        } ]
                                                                     }, {
                                                                        "localId" : "381",
                                                                        "type" : "Coalesce",
                                                                        "signature" : [ ],
                                                                        "operand" : [ {
                                                                           "localId" : "373",
                                                                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                           "value" : " ",
                                                                           "type" : "Literal"
                                                                        }, {
                                                                           "localId" : "378",
                                                                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                           "value" : "",
                                                                           "type" : "Literal"
                                                                        } ]
                                                                     } ]
                                                                  }, {
                                                                     "localId" : "383",
                                                                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                     "value" : "",
                                                                     "type" : "Literal"
                                                                  } ]
                                                               }, {
                                                                  "localId" : "390",
                                                                  "type" : "Coalesce",
                                                                  "signature" : [ ],
                                                                  "operand" : [ {
                                                                     "localId" : "382",
                                                                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                     "value" : "jumps",
                                                                     "type" : "Literal"
                                                                  }, {
                                                                     "localId" : "387",
                                                                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                     "value" : "",
                                                                     "type" : "Literal"
                                                                  } ]
                                                               } ]
                                                            }, {
                                                               "localId" : "392",
                                                               "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                               "value" : "",
                                                               "type" : "Literal"
                                                            } ]
                                                         }, {
                                                            "localId" : "399",
                                                            "type" : "Coalesce",
                                                            "signature" : [ ],
                                                            "operand" : [ {
                                                               "localId" : "391",
                                                               "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                               "value" : " ",
                                                               "type" : "Literal"
                                                            }, {
                                                               "localId" : "396",
                                                               "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                               "value" : "",
                                                               "type" : "Literal"
                                                            } ]
                                                         } ]
                                                      }, {
                                                         "localId" : "401",
                                                         "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                         "value" : "",
                                                         "type" : "Literal"
                                                      } ]
                                                   }, {
                                                      "localId" : "408",
                                                      "type" : "Coalesce",
                                                      "signature" : [ ],
                                                      "operand" : [ {
                                                         "localId" : "400",
                                                         "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                         "value" : "over",
                                                         "type" : "Literal"
                                                      }, {
                                                         "localId" : "405",
                                                         "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                         "value" : "",
                                                         "type" : "Literal"
                                                      } ]
                                                   } ]
                                                }, {
                                                   "localId" : "410",
                                                   "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                   "value" : "",
                                                   "type" : "Literal"
                                                } ]
                                             }, {
                                                "localId" : "417",
                                                "type" : "Coalesce",
                                                "signature" : [ ],
                                                "operand" : [ {
                                                   "localId" : "409",
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
                                             "localId" : "419",
                                             "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                             "value" : "",
                                             "type" : "Literal"
                                          } ]
                                       }, {
                                          "localId" : "426",
                                          "type" : "Coalesce",
                                          "signature" : [ ],
                                          "operand" : [ {
                                             "localId" : "418",
                                             "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                             "value" : "the",
                                             "type" : "Literal"
                                          }, {
                                             "localId" : "423",
                                             "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                             "value" : "",
                                             "type" : "Literal"
                                          } ]
                                       } ]
                                    }, {
                                       "localId" : "428",
                                       "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                       "value" : "",
                                       "type" : "Literal"
                                    } ]
                                 }, {
                                    "localId" : "435",
                                    "type" : "Coalesce",
                                    "signature" : [ ],
                                    "operand" : [ {
                                       "localId" : "427",
                                       "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                       "value" : " ",
                                       "type" : "Literal"
                                    }, {
                                       "localId" : "432",
                                       "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                       "value" : "",
                                       "type" : "Literal"
                                    } ]
                                 } ]
                              }, {
                                 "localId" : "437",
                                 "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                 "value" : "",
                                 "type" : "Literal"
                              } ]
                           }, {
                              "localId" : "444",
                              "type" : "Coalesce",
                              "signature" : [ ],
                              "operand" : [ {
                                 "localId" : "436",
                                 "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                 "value" : "lazy",
                                 "type" : "Literal"
                              }, {
                                 "localId" : "441",
                                 "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                 "value" : "",
                                 "type" : "Literal"
                              } ]
                           } ]
                        }, {
                           "localId" : "446",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "",
                           "type" : "Literal"
                        } ]
                     }, {
                        "localId" : "453",
                        "type" : "Coalesce",
                        "signature" : [ ],
                        "operand" : [ {
                           "localId" : "445",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : " ",
                           "type" : "Literal"
                        }, {
                           "localId" : "450",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "",
                           "type" : "Literal"
                        } ]
                     } ]
                  }, {
                     "localId" : "455",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "462",
                  "type" : "Coalesce",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "454",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "dog.",
                     "type" : "Literal"
                  }, {
                     "localId" : "459",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "464",
            "name" : "AndConcatNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "464",
                  "s" : [ {
                     "value" : [ "","define ","AndConcatNull",": " ]
                  }, {
                     "r" : "465",
                     "s" : [ {
                        "r" : "466",
                        "s" : [ {
                           "value" : [ "'Hello'" ]
                        } ]
                     }, {
                        "r" : "467",
                        "value" : [ " & ","null" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "465",
               "type" : "Concatenate",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "471",
                  "type" : "Coalesce",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "466",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "Hello",
                     "type" : "Literal"
                  }, {
                     "localId" : "468",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "476",
                  "type" : "Coalesce",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "477",
                     "asType" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "467",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "472",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "479",
            "name" : "AndHelloWorldVariables",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "479",
                  "s" : [ {
                     "value" : [ "","define ","AndHelloWorldVariables",": " ]
                  }, {
                     "r" : "480",
                     "s" : [ {
                        "r" : "481",
                        "s" : [ {
                           "value" : [ "Hello" ]
                        } ]
                     }, {
                        "value" : [ " & " ]
                     }, {
                        "r" : "482",
                        "s" : [ {
                           "value" : [ "World" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "480",
               "type" : "Concatenate",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "486",
                  "type" : "Coalesce",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "481",
                     "name" : "Hello",
                     "type" : "ExpressionRef"
                  }, {
                     "localId" : "483",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "490",
                  "type" : "Coalesce",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "482",
                     "name" : "World",
                     "type" : "ExpressionRef"
                  }, {
                     "localId" : "487",
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
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "276",
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
                     "r" : "220",
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
               "localId" : "220",
               "type" : "Combine",
               "signature" : [ ],
               "source" : {
                  "localId" : "213",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "214",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "abc",
                     "type" : "Literal"
                  }, {
                     "localId" : "215",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "def",
                     "type" : "Literal"
                  }, {
                     "localId" : "216",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "ghi",
                     "type" : "Literal"
                  }, {
                     "localId" : "217",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "jkl",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "222",
            "name" : "Separator",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "222",
                  "s" : [ {
                     "value" : [ "","define ","Separator",": " ]
                  }, {
                     "r" : "231",
                     "s" : [ {
                        "value" : [ "Combine","(" ]
                     }, {
                        "r" : "223",
                        "s" : [ {
                           "value" : [ "{ " ]
                        }, {
                           "r" : "224",
                           "s" : [ {
                              "value" : [ "'abc'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "225",
                           "s" : [ {
                              "value" : [ "'def'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "226",
                           "s" : [ {
                              "value" : [ "'ghi'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "227",
                           "s" : [ {
                              "value" : [ "'jkl'" ]
                           } ]
                        }, {
                           "value" : [ " }" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "228",
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
               "localId" : "231",
               "type" : "Combine",
               "signature" : [ ],
               "source" : {
                  "localId" : "223",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "224",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "abc",
                     "type" : "Literal"
                  }, {
                     "localId" : "225",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "def",
                     "type" : "Literal"
                  }, {
                     "localId" : "226",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "ghi",
                     "type" : "Literal"
                  }, {
                     "localId" : "227",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "jkl",
                     "type" : "Literal"
                  } ]
               },
               "separator" : {
                  "localId" : "228",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : ";",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "233",
            "name" : "CombineNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "233",
                  "s" : [ {
                     "value" : [ "","define ","CombineNull",": " ]
                  }, {
                     "r" : "241",
                     "s" : [ {
                        "r" : "234",
                        "value" : [ "Combine","(","null",", " ]
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
            "expression" : {
               "localId" : "241",
               "type" : "Combine",
               "signature" : [ ],
               "source" : {
                  "localId" : "242",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "234",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "243",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "244",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               },
               "separator" : {
                  "localId" : "235",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : ";",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "246",
            "name" : "CombineNullItem",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "246",
                  "s" : [ {
                     "value" : [ "","define ","CombineNullItem",": " ]
                  }, {
                     "r" : "256",
                     "s" : [ {
                        "value" : [ "Combine","(" ]
                     }, {
                        "r" : "247",
                        "s" : [ {
                           "value" : [ "{ " ]
                        }, {
                           "r" : "248",
                           "s" : [ {
                              "value" : [ "'abc'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "249",
                           "s" : [ {
                              "value" : [ "'def'" ]
                           } ]
                        }, {
                           "r" : "250",
                           "value" : [ ", ","null",", " ]
                        }, {
                           "r" : "251",
                           "s" : [ {
                              "value" : [ "'jkl'" ]
                           } ]
                        }, {
                           "value" : [ " }" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "253",
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
               "localId" : "256",
               "type" : "Combine",
               "signature" : [ ],
               "source" : {
                  "localId" : "247",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "248",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "abc",
                     "type" : "Literal"
                  }, {
                     "localId" : "249",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "def",
                     "type" : "Literal"
                  }, {
                     "localId" : "252",
                     "asType" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "250",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "251",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "jkl",
                     "type" : "Literal"
                  } ]
               },
               "separator" : {
                  "localId" : "253",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : ";",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "258",
            "name" : "CombineOneNullItem",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "258",
                  "s" : [ {
                     "value" : [ "","define ","CombineOneNullItem",": " ]
                  }, {
                     "r" : "269",
                     "s" : [ {
                        "value" : [ "Combine","(" ]
                     }, {
                        "r" : "259",
                        "s" : [ {
                           "r" : "260",
                           "value" : [ "{","null","}" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "261",
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
               "localId" : "269",
               "type" : "Combine",
               "signature" : [ ],
               "source" : {
                  "localId" : "270",
                  "type" : "Query",
                  "source" : [ {
                     "localId" : "271",
                     "alias" : "X",
                     "expression" : {
                        "localId" : "259",
                        "type" : "List",
                        "element" : [ {
                           "localId" : "260",
                           "type" : "Null"
                        } ]
                     }
                  } ],
                  "let" : [ ],
                  "relationship" : [ ],
                  "return" : {
                     "localId" : "272",
                     "distinct" : false,
                     "expression" : {
                        "localId" : "274",
                        "asType" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "As",
                        "signature" : [ ],
                        "operand" : {
                           "localId" : "273",
                           "name" : "X",
                           "type" : "AliasRef"
                        }
                     }
                  }
               },
               "separator" : {
                  "localId" : "261",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : ";",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "276",
            "name" : "CombineEmptyNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "276",
                  "s" : [ {
                     "value" : [ "","define ","CombineEmptyNull",": " ]
                  }, {
                     "r" : "286",
                     "s" : [ {
                        "r" : "277",
                        "value" : [ "Combine","(","{}",", " ]
                     }, {
                        "r" : "278",
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
               "localId" : "286",
               "type" : "Combine",
               "signature" : [ ],
               "source" : {
                  "localId" : "287",
                  "type" : "Query",
                  "source" : [ {
                     "localId" : "288",
                     "alias" : "X",
                     "expression" : {
                        "localId" : "277",
                        "type" : "List",
                        "element" : [ ]
                     }
                  } ],
                  "let" : [ ],
                  "relationship" : [ ],
                  "return" : {
                     "localId" : "289",
                     "distinct" : false,
                     "expression" : {
                        "localId" : "291",
                        "asType" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "As",
                        "signature" : [ ],
                        "operand" : {
                           "localId" : "290",
                           "name" : "X",
                           "type" : "AliasRef"
                        }
                     }
                  }
               },
               "separator" : {
                  "localId" : "278",
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
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "235",
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
                     "r" : "217",
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
            "expression" : {
               "localId" : "217",
               "type" : "Split",
               "signature" : [ ],
               "stringToSplit" : {
                  "localId" : "213",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "a,b,c,,1,2,3",
                  "type" : "Literal"
               },
               "separator" : {
                  "localId" : "214",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : ",",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "219",
            "name" : "SeparatorNotUsed",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "219",
                  "s" : [ {
                     "value" : [ "","define ","SeparatorNotUsed",": " ]
                  }, {
                     "r" : "224",
                     "s" : [ {
                        "value" : [ "Split","(" ]
                     }, {
                        "r" : "220",
                        "s" : [ {
                           "value" : [ "'a,b,c,,1,2,3'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "221",
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
               "localId" : "224",
               "type" : "Split",
               "signature" : [ ],
               "stringToSplit" : {
                  "localId" : "220",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "a,b,c,,1,2,3",
                  "type" : "Literal"
               },
               "separator" : {
                  "localId" : "221",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : ";",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "226",
            "name" : "SeparateNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "226",
                  "s" : [ {
                     "value" : [ "","define ","SeparateNull",": " ]
                  }, {
                     "r" : "232",
                     "s" : [ {
                        "r" : "227",
                        "value" : [ "Split","(","null",", " ]
                     }, {
                        "r" : "228",
                        "s" : [ {
                           "value" : [ "','" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "232",
               "type" : "Split",
               "signature" : [ ],
               "stringToSplit" : {
                  "localId" : "233",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "227",
                     "type" : "Null"
                  }
               },
               "separator" : {
                  "localId" : "228",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : ",",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "235",
            "name" : "SeparateUsingNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "235",
                  "s" : [ {
                     "value" : [ "","define ","SeparateUsingNull",": " ]
                  }, {
                     "r" : "241",
                     "s" : [ {
                        "value" : [ "Split","(" ]
                     }, {
                        "r" : "236",
                        "s" : [ {
                           "value" : [ "'a,b,c'" ]
                        } ]
                     }, {
                        "r" : "237",
                        "value" : [ ", ","null",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "241",
               "type" : "Split",
               "signature" : [ ],
               "stringToSplit" : {
                  "localId" : "236",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "a,b,c",
                  "type" : "Literal"
               },
               "separator" : {
                  "localId" : "242",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "237",
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
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
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
                     "r" : "217",
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
            "expression" : {
               "localId" : "217",
               "type" : "SplitOnMatches",
               "signature" : [ ],
               "stringToSplit" : {
                  "localId" : "213",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "foo 1,2three bar",
                  "type" : "Literal"
               },
               "separatorPattern" : {
                  "localId" : "214",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "\\d,\\d\\w+",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "219",
            "name" : "SplitOnMatchesOriginalString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "219",
                  "s" : [ {
                     "value" : [ "","define ","SplitOnMatchesOriginalString",": " ]
                  }, {
                     "r" : "224",
                     "s" : [ {
                        "value" : [ "SplitOnMatches","(" ]
                     }, {
                        "r" : "220",
                        "s" : [ {
                           "value" : [ "'1,2three'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "221",
                        "s" : [ {
                           "value" : [ "'\\\\w,\\\\w+'" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "224",
               "type" : "SplitOnMatches",
               "signature" : [ ],
               "stringToSplit" : {
                  "localId" : "220",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "1,2three",
                  "type" : "Literal"
               },
               "separatorPattern" : {
                  "localId" : "221",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "\\w,\\w+",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "226",
            "name" : "SplitOnMatchesNoMatch",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "226",
                  "s" : [ {
                     "value" : [ "","define ","SplitOnMatchesNoMatch",": " ]
                  }, {
                     "r" : "231",
                     "s" : [ {
                        "value" : [ "SplitOnMatches","(" ]
                     }, {
                        "r" : "227",
                        "s" : [ {
                           "value" : [ "'foobar'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "228",
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
               "localId" : "231",
               "type" : "SplitOnMatches",
               "signature" : [ ],
               "stringToSplit" : {
                  "localId" : "227",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "foobar",
                  "type" : "Literal"
               },
               "separatorPattern" : {
                  "localId" : "228",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "\\d",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "233",
            "name" : "SplitOnMatchesIsNullFirst",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "233",
                  "s" : [ {
                     "value" : [ "","define ","SplitOnMatchesIsNullFirst",": " ]
                  }, {
                     "r" : "239",
                     "s" : [ {
                        "r" : "234",
                        "value" : [ "SplitOnMatches","(","null",", " ]
                     }, {
                        "r" : "235",
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
               "localId" : "239",
               "type" : "SplitOnMatches",
               "signature" : [ ],
               "stringToSplit" : {
                  "localId" : "240",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "234",
                     "type" : "Null"
                  }
               },
               "separatorPattern" : {
                  "localId" : "235",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "\\w+",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "242",
            "name" : "SplitOnMatchesIsNullSecond",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "242",
                  "s" : [ {
                     "value" : [ "","define ","SplitOnMatchesIsNullSecond",": " ]
                  }, {
                     "r" : "248",
                     "s" : [ {
                        "value" : [ "SplitOnMatches","(" ]
                     }, {
                        "r" : "243",
                        "s" : [ {
                           "value" : [ "'12three'" ]
                        } ]
                     }, {
                        "r" : "244",
                        "value" : [ ", ","null",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "248",
               "type" : "SplitOnMatches",
               "signature" : [ ],
               "stringToSplit" : {
                  "localId" : "243",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "12three",
                  "type" : "Literal"
               },
               "separatorPattern" : {
                  "localId" : "249",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "244",
                     "type" : "Null"
                  }
               }
            }
         }, {
            "localId" : "251",
            "name" : "SplitOnMatchesAllNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "251",
                  "s" : [ {
                     "value" : [ "","define ","SplitOnMatchesAllNull",": " ]
                  }, {
                     "r" : "258",
                     "s" : [ {
                        "r" : "252",
                        "value" : [ "SplitOnMatches","(","null",", ","null",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "258",
               "type" : "SplitOnMatches",
               "signature" : [ ],
               "stringToSplit" : {
                  "localId" : "259",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "252",
                     "type" : "Null"
                  }
               },
               "separatorPattern" : {
                  "localId" : "260",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "253",
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
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "218",
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
                     "r" : "216",
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
               "localId" : "216",
               "type" : "Length",
               "signature" : [ ],
               "operand" : {
                  "localId" : "213",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Hello World",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "218",
            "name" : "NullString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "218",
                  "s" : [ {
                     "value" : [ "","define ","NullString",": " ]
                  }, {
                     "r" : "224",
                     "s" : [ {
                        "value" : [ "Length","(" ]
                     }, {
                        "r" : "219",
                        "s" : [ {
                           "r" : "220",
                           "value" : [ "null"," as " ]
                        }, {
                           "r" : "221",
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
               "localId" : "224",
               "type" : "Length",
               "signature" : [ ],
               "operand" : {
                  "localId" : "219",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "220",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "221",
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
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "230",
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
                     "r" : "216",
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
               "localId" : "216",
               "type" : "Upper",
               "signature" : [ ],
               "operand" : {
                  "localId" : "213",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "abcdefg123",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "218",
            "name" : "UpperC",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "218",
                  "s" : [ {
                     "value" : [ "","define ","UpperC",": " ]
                  }, {
                     "r" : "222",
                     "s" : [ {
                        "value" : [ "Upper","(" ]
                     }, {
                        "r" : "219",
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
               "localId" : "222",
               "type" : "Upper",
               "signature" : [ ],
               "operand" : {
                  "localId" : "219",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "ABCDEFG123",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "224",
            "name" : "CamelC",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "224",
                  "s" : [ {
                     "value" : [ "","define ","CamelC",": " ]
                  }, {
                     "r" : "228",
                     "s" : [ {
                        "value" : [ "Upper","(" ]
                     }, {
                        "r" : "225",
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
               "localId" : "228",
               "type" : "Upper",
               "signature" : [ ],
               "operand" : {
                  "localId" : "225",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "aBcDeFg123",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "230",
            "name" : "NullString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "230",
                  "s" : [ {
                     "value" : [ "","define ","NullString",": " ]
                  }, {
                     "r" : "235",
                     "s" : [ {
                        "r" : "231",
                        "value" : [ "Upper","(","null",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "235",
               "type" : "Upper",
               "signature" : [ ],
               "operand" : {
                  "localId" : "236",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "231",
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
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "230",
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
                     "r" : "216",
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
               "localId" : "216",
               "type" : "Lower",
               "signature" : [ ],
               "operand" : {
                  "localId" : "213",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "abcdefg123",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "218",
            "name" : "UpperC",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "218",
                  "s" : [ {
                     "value" : [ "","define ","UpperC",": " ]
                  }, {
                     "r" : "222",
                     "s" : [ {
                        "value" : [ "Lower","(" ]
                     }, {
                        "r" : "219",
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
               "localId" : "222",
               "type" : "Lower",
               "signature" : [ ],
               "operand" : {
                  "localId" : "219",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "ABCDEFG123",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "224",
            "name" : "CamelC",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "224",
                  "s" : [ {
                     "value" : [ "","define ","CamelC",": " ]
                  }, {
                     "r" : "228",
                     "s" : [ {
                        "value" : [ "Lower","(" ]
                     }, {
                        "r" : "225",
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
               "localId" : "228",
               "type" : "Lower",
               "signature" : [ ],
               "operand" : {
                  "localId" : "225",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "aBcDeFg123",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "230",
            "name" : "NullString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "230",
                  "s" : [ {
                     "value" : [ "","define ","NullString",": " ]
                  }, {
                     "r" : "235",
                     "s" : [ {
                        "r" : "231",
                        "value" : [ "Lower","(","null",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "235",
               "type" : "Lower",
               "signature" : [ ],
               "operand" : {
                  "localId" : "236",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "231",
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
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "234",
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
               "type" : "Indexer",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "214",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "HelloWorld",
                  "type" : "Literal"
               }, {
                  "localId" : "215",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "6",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "217",
            "name" : "HelloWorldZero",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "217",
                  "s" : [ {
                     "value" : [ "","define ","HelloWorldZero",": " ]
                  }, {
                     "r" : "218",
                     "s" : [ {
                        "r" : "219",
                        "s" : [ {
                           "value" : [ "'HelloWorld'" ]
                        } ]
                     }, {
                        "r" : "220",
                        "value" : [ "[","0","]" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "218",
               "type" : "Indexer",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "219",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "HelloWorld",
                  "type" : "Literal"
               }, {
                  "localId" : "220",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "0",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "222",
            "name" : "HelloWorldTwenty",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "222",
                  "s" : [ {
                     "value" : [ "","define ","HelloWorldTwenty",": " ]
                  }, {
                     "r" : "223",
                     "s" : [ {
                        "r" : "224",
                        "s" : [ {
                           "value" : [ "'HelloWorld'" ]
                        } ]
                     }, {
                        "r" : "225",
                        "value" : [ "[","20","]" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "223",
               "type" : "Indexer",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "224",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "HelloWorld",
                  "type" : "Literal"
               }, {
                  "localId" : "225",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "20",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "227",
            "name" : "NullString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "227",
                  "s" : [ {
                     "value" : [ "","define ","NullString",": " ]
                  }, {
                     "r" : "228",
                     "s" : [ {
                        "r" : "229",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "229",
                           "s" : [ {
                              "r" : "230",
                              "value" : [ "null"," as " ]
                           }, {
                              "r" : "231",
                              "s" : [ {
                                 "value" : [ "String" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "r" : "232",
                        "value" : [ "[","4","]" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "228",
               "type" : "Indexer",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "229",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "230",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "231",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "232",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "4",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "234",
            "name" : "NullIndex",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "234",
                  "s" : [ {
                     "value" : [ "","define ","NullIndex",": " ]
                  }, {
                     "r" : "235",
                     "s" : [ {
                        "r" : "236",
                        "s" : [ {
                           "value" : [ "'HelloWorld'" ]
                        } ]
                     }, {
                        "r" : "237",
                        "value" : [ "[","null","]" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "235",
               "type" : "Indexer",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "236",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "HelloWorld",
                  "type" : "Literal"
               }, {
                  "localId" : "238",
                  "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "237",
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
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
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
                     "r" : "217",
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
               "localId" : "217",
               "type" : "Matches",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "213",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "1,2three",
                  "type" : "Literal"
               }, {
                  "localId" : "214",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "\\d,\\d\\w+",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "219",
            "name" : "MatchesFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "219",
                  "s" : [ {
                     "value" : [ "","define ","MatchesFalse",": " ]
                  }, {
                     "r" : "224",
                     "s" : [ {
                        "value" : [ "Matches","(" ]
                     }, {
                        "r" : "220",
                        "s" : [ {
                           "value" : [ "'three'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "221",
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
               "localId" : "224",
               "type" : "Matches",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "220",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "three",
                  "type" : "Literal"
               }, {
                  "localId" : "221",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "\\d",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "226",
            "name" : "MatchesIsNullFirst",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "226",
                  "s" : [ {
                     "value" : [ "","define ","MatchesIsNullFirst",": " ]
                  }, {
                     "r" : "232",
                     "s" : [ {
                        "r" : "227",
                        "value" : [ "Matches","(","null",", " ]
                     }, {
                        "r" : "228",
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
               "localId" : "232",
               "type" : "Matches",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "233",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "227",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "228",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "\\w+",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "235",
            "name" : "MatchesIsNullSecond",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "235",
                  "s" : [ {
                     "value" : [ "","define ","MatchesIsNullSecond",": " ]
                  }, {
                     "r" : "241",
                     "s" : [ {
                        "value" : [ "Matches","(" ]
                     }, {
                        "r" : "236",
                        "s" : [ {
                           "value" : [ "'12three'" ]
                        } ]
                     }, {
                        "r" : "237",
                        "value" : [ ", ","null",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "241",
               "type" : "Matches",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "236",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "12three",
                  "type" : "Literal"
               }, {
                  "localId" : "242",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "237",
                     "type" : "Null"
                  }
               } ]
            }
         }, {
            "localId" : "244",
            "name" : "MatchesAllNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "244",
                  "s" : [ {
                     "value" : [ "","define ","MatchesAllNull",": " ]
                  }, {
                     "r" : "251",
                     "s" : [ {
                        "r" : "245",
                        "value" : [ "Matches","(","null",", ","null",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "251",
               "type" : "Matches",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "252",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "245",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "253",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "246",
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
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "235",
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
                     "r" : "217",
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
               "localId" : "217",
               "type" : "PositionOf",
               "signature" : [ ],
               "pattern" : {
                  "localId" : "213",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "cde",
                  "type" : "Literal"
               },
               "string" : {
                  "localId" : "214",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "abcdefg",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "219",
            "name" : "NotFound",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "219",
                  "s" : [ {
                     "value" : [ "","define ","NotFound",": " ]
                  }, {
                     "r" : "224",
                     "s" : [ {
                        "value" : [ "PositionOf","(" ]
                     }, {
                        "r" : "220",
                        "s" : [ {
                           "value" : [ "'fgh'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "221",
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
               "localId" : "224",
               "type" : "PositionOf",
               "signature" : [ ],
               "pattern" : {
                  "localId" : "220",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "fgh",
                  "type" : "Literal"
               },
               "string" : {
                  "localId" : "221",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "abcdefg",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "226",
            "name" : "NullPattern",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "226",
                  "s" : [ {
                     "value" : [ "","define ","NullPattern",": " ]
                  }, {
                     "r" : "232",
                     "s" : [ {
                        "r" : "227",
                        "value" : [ "PositionOf","(","null",", " ]
                     }, {
                        "r" : "228",
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
               "localId" : "232",
               "type" : "PositionOf",
               "signature" : [ ],
               "pattern" : {
                  "localId" : "233",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "227",
                     "type" : "Null"
                  }
               },
               "string" : {
                  "localId" : "228",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "abcdefg",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "235",
            "name" : "NullString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "235",
                  "s" : [ {
                     "value" : [ "","define ","NullString",": " ]
                  }, {
                     "r" : "241",
                     "s" : [ {
                        "value" : [ "PositionOf","(" ]
                     }, {
                        "r" : "236",
                        "s" : [ {
                           "value" : [ "'cde'" ]
                        } ]
                     }, {
                        "r" : "237",
                        "value" : [ ", ","null",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "241",
               "type" : "PositionOf",
               "signature" : [ ],
               "pattern" : {
                  "localId" : "236",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "cde",
                  "type" : "Literal"
               },
               "string" : {
                  "localId" : "242",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "237",
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
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "235",
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
                     "r" : "217",
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
               "localId" : "217",
               "type" : "LastPositionOf",
               "signature" : [ ],
               "pattern" : {
                  "localId" : "213",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "B",
                  "type" : "Literal"
               },
               "string" : {
                  "localId" : "214",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "ABCDEDCBA",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "219",
            "name" : "NotFound",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "219",
                  "s" : [ {
                     "value" : [ "// 7\n","define ","NotFound",": " ]
                  }, {
                     "r" : "224",
                     "s" : [ {
                        "value" : [ "LastPositionOf","(" ]
                     }, {
                        "r" : "220",
                        "s" : [ {
                           "value" : [ "'XYZ'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "221",
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
               "localId" : "224",
               "type" : "LastPositionOf",
               "signature" : [ ],
               "pattern" : {
                  "localId" : "220",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "XYZ",
                  "type" : "Literal"
               },
               "string" : {
                  "localId" : "221",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "ABCDE",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "226",
            "name" : "NullPattern",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "226",
                  "s" : [ {
                     "value" : [ "// -1\n","define ","NullPattern",": " ]
                  }, {
                     "r" : "232",
                     "s" : [ {
                        "r" : "227",
                        "value" : [ "LastPositionOf","(","null",", " ]
                     }, {
                        "r" : "228",
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
               "localId" : "232",
               "type" : "LastPositionOf",
               "signature" : [ ],
               "pattern" : {
                  "localId" : "233",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "227",
                     "type" : "Null"
                  }
               },
               "string" : {
                  "localId" : "228",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "ABCDE",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "235",
            "name" : "NullString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "235",
                  "s" : [ {
                     "value" : [ "// null\n","define ","NullString",": " ]
                  }, {
                     "r" : "241",
                     "s" : [ {
                        "value" : [ "LastPositionOf","(" ]
                     }, {
                        "r" : "236",
                        "s" : [ {
                           "value" : [ "'ABCDE'" ]
                        } ]
                     }, {
                        "r" : "237",
                        "value" : [ ", ","null",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "241",
               "type" : "LastPositionOf",
               "signature" : [ ],
               "pattern" : {
                  "localId" : "236",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "ABCDE",
                  "type" : "Literal"
               },
               "string" : {
                  "localId" : "242",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "237",
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
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "276",
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
                     "r" : "217",
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
               "localId" : "217",
               "type" : "Substring",
               "signature" : [ ],
               "stringToSub" : {
                  "localId" : "213",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "HelloWorld",
                  "type" : "Literal"
               },
               "startIndex" : {
                  "localId" : "214",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "219",
            "name" : "Or",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "219",
                  "s" : [ {
                     "value" : [ "","define ","Or",": " ]
                  }, {
                     "r" : "225",
                     "s" : [ {
                        "value" : [ "Substring","(" ]
                     }, {
                        "r" : "220",
                        "s" : [ {
                           "value" : [ "'HelloWorld'" ]
                        } ]
                     }, {
                        "r" : "221",
                        "value" : [ ", ","7",", ","2",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "225",
               "type" : "Substring",
               "signature" : [ ],
               "stringToSub" : {
                  "localId" : "220",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "HelloWorld",
                  "type" : "Literal"
               },
               "startIndex" : {
                  "localId" : "221",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "7",
                  "type" : "Literal"
               },
               "length" : {
                  "localId" : "222",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "227",
            "name" : "ZeroLength",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "227",
                  "s" : [ {
                     "value" : [ "","define ","ZeroLength",": " ]
                  }, {
                     "r" : "233",
                     "s" : [ {
                        "value" : [ "Substring","(" ]
                     }, {
                        "r" : "228",
                        "s" : [ {
                           "value" : [ "'HelloWorld'" ]
                        } ]
                     }, {
                        "r" : "229",
                        "value" : [ ", ","7",", ","0",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "233",
               "type" : "Substring",
               "signature" : [ ],
               "stringToSub" : {
                  "localId" : "228",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "HelloWorld",
                  "type" : "Literal"
               },
               "startIndex" : {
                  "localId" : "229",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "7",
                  "type" : "Literal"
               },
               "length" : {
                  "localId" : "230",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "0",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "235",
            "name" : "StartTooLow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "235",
                  "s" : [ {
                     "value" : [ "","define ","StartTooLow",": " ]
                  }, {
                     "r" : "241",
                     "s" : [ {
                        "value" : [ "Substring","(" ]
                     }, {
                        "r" : "236",
                        "s" : [ {
                           "value" : [ "'HelloWorld'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "237",
                        "s" : [ {
                           "r" : "238",
                           "value" : [ "-","1" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "241",
               "type" : "Substring",
               "signature" : [ ],
               "stringToSub" : {
                  "localId" : "236",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "HelloWorld",
                  "type" : "Literal"
               },
               "startIndex" : {
                  "localId" : "237",
                  "type" : "Negate",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "238",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "243",
            "name" : "StartZero",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "243",
                  "s" : [ {
                     "value" : [ "","define ","StartZero",": " ]
                  }, {
                     "r" : "248",
                     "s" : [ {
                        "value" : [ "Substring","(" ]
                     }, {
                        "r" : "244",
                        "s" : [ {
                           "value" : [ "'HelloWorld'" ]
                        } ]
                     }, {
                        "r" : "245",
                        "value" : [ ", ","0",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "248",
               "type" : "Substring",
               "signature" : [ ],
               "stringToSub" : {
                  "localId" : "244",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "HelloWorld",
                  "type" : "Literal"
               },
               "startIndex" : {
                  "localId" : "245",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "0",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "250",
            "name" : "TooMuchLength",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "250",
                  "s" : [ {
                     "value" : [ "","define ","TooMuchLength",": " ]
                  }, {
                     "r" : "256",
                     "s" : [ {
                        "value" : [ "Substring","(" ]
                     }, {
                        "r" : "251",
                        "s" : [ {
                           "value" : [ "'HelloWorld'" ]
                        } ]
                     }, {
                        "r" : "252",
                        "value" : [ ", ","7",", ","25",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "256",
               "type" : "Substring",
               "signature" : [ ],
               "stringToSub" : {
                  "localId" : "251",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "HelloWorld",
                  "type" : "Literal"
               },
               "startIndex" : {
                  "localId" : "252",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "7",
                  "type" : "Literal"
               },
               "length" : {
                  "localId" : "253",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "25",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "258",
            "name" : "NegativeLength",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "258",
                  "s" : [ {
                     "value" : [ "","define ","NegativeLength",": " ]
                  }, {
                     "r" : "265",
                     "s" : [ {
                        "value" : [ "Substring","(" ]
                     }, {
                        "r" : "259",
                        "s" : [ {
                           "value" : [ "'HelloWorld'" ]
                        } ]
                     }, {
                        "r" : "260",
                        "value" : [ ", ","7",", " ]
                     }, {
                        "r" : "261",
                        "s" : [ {
                           "r" : "262",
                           "value" : [ "-","1" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "265",
               "type" : "Substring",
               "signature" : [ ],
               "stringToSub" : {
                  "localId" : "259",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "HelloWorld",
                  "type" : "Literal"
               },
               "startIndex" : {
                  "localId" : "260",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "7",
                  "type" : "Literal"
               },
               "length" : {
                  "localId" : "261",
                  "type" : "Negate",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "262",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "267",
            "name" : "NullString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "267",
                  "s" : [ {
                     "value" : [ "","define ","NullString",": " ]
                  }, {
                     "r" : "273",
                     "s" : [ {
                        "r" : "268",
                        "value" : [ "Substring","(","null",", ","5",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "273",
               "type" : "Substring",
               "signature" : [ ],
               "stringToSub" : {
                  "localId" : "274",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "268",
                     "type" : "Null"
                  }
               },
               "startIndex" : {
                  "localId" : "269",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "276",
            "name" : "NullStart",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "276",
                  "s" : [ {
                     "value" : [ "","define ","NullStart",": " ]
                  }, {
                     "r" : "282",
                     "s" : [ {
                        "value" : [ "Substring","(" ]
                     }, {
                        "r" : "277",
                        "s" : [ {
                           "value" : [ "'HelloWorld'" ]
                        } ]
                     }, {
                        "r" : "278",
                        "value" : [ ", ","null",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "282",
               "type" : "Substring",
               "signature" : [ ],
               "stringToSub" : {
                  "localId" : "277",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "HelloWorld",
                  "type" : "Literal"
               },
               "startIndex" : {
                  "localId" : "283",
                  "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "278",
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
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "267",
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
                     "r" : "217",
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
               "localId" : "217",
               "type" : "StartsWith",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "213",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "FooBar",
                  "type" : "Literal"
               }, {
                  "localId" : "214",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Foo",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "219",
            "name" : "FooBarStartsWithBar",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "219",
                  "s" : [ {
                     "value" : [ "","define ","FooBarStartsWithBar",": " ]
                  }, {
                     "r" : "224",
                     "s" : [ {
                        "value" : [ "StartsWith","(" ]
                     }, {
                        "r" : "220",
                        "s" : [ {
                           "value" : [ "'FooBar'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "221",
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
               "localId" : "224",
               "type" : "StartsWith",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "220",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "FooBar",
                  "type" : "Literal"
               }, {
                  "localId" : "221",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Bar",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "226",
            "name" : "FooBarStartsWithBlank",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "226",
                  "s" : [ {
                     "value" : [ "","define ","FooBarStartsWithBlank",": " ]
                  }, {
                     "r" : "231",
                     "s" : [ {
                        "value" : [ "StartsWith","(" ]
                     }, {
                        "r" : "227",
                        "s" : [ {
                           "value" : [ "'FooBar'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "228",
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
               "localId" : "231",
               "type" : "StartsWith",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "227",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "FooBar",
                  "type" : "Literal"
               }, {
                  "localId" : "228",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "233",
            "name" : "BlankStartsWithFoo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "233",
                  "s" : [ {
                     "value" : [ "","define ","BlankStartsWithFoo",": " ]
                  }, {
                     "r" : "238",
                     "s" : [ {
                        "value" : [ "StartsWith","(" ]
                     }, {
                        "r" : "234",
                        "s" : [ {
                           "value" : [ "''" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "235",
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
               "localId" : "238",
               "type" : "StartsWith",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "234",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "",
                  "type" : "Literal"
               }, {
                  "localId" : "235",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Foo",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "240",
            "name" : "StartsWithNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "240",
                  "s" : [ {
                     "value" : [ "","define ","StartsWithNull",": " ]
                  }, {
                     "r" : "246",
                     "s" : [ {
                        "value" : [ "StartsWith","(" ]
                     }, {
                        "r" : "241",
                        "s" : [ {
                           "value" : [ "'FooBar'" ]
                        } ]
                     }, {
                        "r" : "242",
                        "value" : [ ", ","null",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "246",
               "type" : "StartsWith",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "241",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "FooBar",
                  "type" : "Literal"
               }, {
                  "localId" : "247",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "242",
                     "type" : "Null"
                  }
               } ]
            }
         }, {
            "localId" : "249",
            "name" : "StartsWithNullAsString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "249",
                  "s" : [ {
                     "value" : [ "","define ","StartsWithNullAsString",": " ]
                  }, {
                     "r" : "256",
                     "s" : [ {
                        "value" : [ "StartsWith","(" ]
                     }, {
                        "r" : "250",
                        "s" : [ {
                           "value" : [ "'FooBar'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "251",
                        "s" : [ {
                           "r" : "252",
                           "value" : [ "null"," as " ]
                        }, {
                           "r" : "253",
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
               "localId" : "256",
               "type" : "StartsWith",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "250",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "FooBar",
                  "type" : "Literal"
               }, {
                  "localId" : "251",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "252",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "253",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               } ]
            }
         }, {
            "localId" : "258",
            "name" : "NullStartsWith",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "258",
                  "s" : [ {
                     "value" : [ "","define ","NullStartsWith",": " ]
                  }, {
                     "r" : "264",
                     "s" : [ {
                        "r" : "259",
                        "value" : [ "StartsWith","(","null",", " ]
                     }, {
                        "r" : "260",
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
               "localId" : "264",
               "type" : "StartsWith",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "265",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "259",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "260",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Foo",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "267",
            "name" : "NullAsStringStartsWith",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "267",
                  "s" : [ {
                     "value" : [ "","define ","NullAsStringStartsWith",": " ]
                  }, {
                     "r" : "274",
                     "s" : [ {
                        "value" : [ "StartsWith","(" ]
                     }, {
                        "r" : "268",
                        "s" : [ {
                           "r" : "269",
                           "value" : [ "null"," as " ]
                        }, {
                           "r" : "270",
                           "s" : [ {
                              "value" : [ "String" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "271",
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
               "localId" : "274",
               "type" : "StartsWith",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "268",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "269",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "270",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "271",
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
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "267",
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
                     "r" : "217",
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
               "localId" : "217",
               "type" : "EndsWith",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "213",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "FooBar",
                  "type" : "Literal"
               }, {
                  "localId" : "214",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Bar",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "219",
            "name" : "FooBarEndsWithFoo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "219",
                  "s" : [ {
                     "value" : [ "","define ","FooBarEndsWithFoo",": " ]
                  }, {
                     "r" : "224",
                     "s" : [ {
                        "value" : [ "EndsWith","(" ]
                     }, {
                        "r" : "220",
                        "s" : [ {
                           "value" : [ "'FooBar'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "221",
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
               "localId" : "224",
               "type" : "EndsWith",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "220",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "FooBar",
                  "type" : "Literal"
               }, {
                  "localId" : "221",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Foo",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "226",
            "name" : "FooBarEndsWithBlank",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "226",
                  "s" : [ {
                     "value" : [ "","define ","FooBarEndsWithBlank",": " ]
                  }, {
                     "r" : "231",
                     "s" : [ {
                        "value" : [ "EndsWith","(" ]
                     }, {
                        "r" : "227",
                        "s" : [ {
                           "value" : [ "'FooBar'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "228",
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
               "localId" : "231",
               "type" : "EndsWith",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "227",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "FooBar",
                  "type" : "Literal"
               }, {
                  "localId" : "228",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "233",
            "name" : "BlankEndsWithFoo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "233",
                  "s" : [ {
                     "value" : [ "","define ","BlankEndsWithFoo",": " ]
                  }, {
                     "r" : "238",
                     "s" : [ {
                        "value" : [ "EndsWith","(" ]
                     }, {
                        "r" : "234",
                        "s" : [ {
                           "value" : [ "''" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "235",
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
               "localId" : "238",
               "type" : "EndsWith",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "234",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "",
                  "type" : "Literal"
               }, {
                  "localId" : "235",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Foo",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "240",
            "name" : "EndsWithNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "240",
                  "s" : [ {
                     "value" : [ "","define ","EndsWithNull",": " ]
                  }, {
                     "r" : "246",
                     "s" : [ {
                        "value" : [ "EndsWith","(" ]
                     }, {
                        "r" : "241",
                        "s" : [ {
                           "value" : [ "'FooBar'" ]
                        } ]
                     }, {
                        "r" : "242",
                        "value" : [ ", ","null",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "246",
               "type" : "EndsWith",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "241",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "FooBar",
                  "type" : "Literal"
               }, {
                  "localId" : "247",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "242",
                     "type" : "Null"
                  }
               } ]
            }
         }, {
            "localId" : "249",
            "name" : "EndsWithNullAsString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "249",
                  "s" : [ {
                     "value" : [ "","define ","EndsWithNullAsString",": " ]
                  }, {
                     "r" : "256",
                     "s" : [ {
                        "value" : [ "EndsWith","(" ]
                     }, {
                        "r" : "250",
                        "s" : [ {
                           "value" : [ "'FooBar'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "251",
                        "s" : [ {
                           "r" : "252",
                           "value" : [ "null"," as " ]
                        }, {
                           "r" : "253",
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
               "localId" : "256",
               "type" : "EndsWith",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "250",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "FooBar",
                  "type" : "Literal"
               }, {
                  "localId" : "251",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "252",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "253",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               } ]
            }
         }, {
            "localId" : "258",
            "name" : "NullEndsWith",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "258",
                  "s" : [ {
                     "value" : [ "","define ","NullEndsWith",": " ]
                  }, {
                     "r" : "265",
                     "s" : [ {
                        "value" : [ "EndsWith","(" ]
                     }, {
                        "r" : "259",
                        "s" : [ {
                           "r" : "260",
                           "value" : [ "null"," as " ]
                        }, {
                           "r" : "261",
                           "s" : [ {
                              "value" : [ "String" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "262",
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
               "type" : "EndsWith",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "259",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "260",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "261",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "262",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Foo",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "267",
            "name" : "NullAsStringEndsWith",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "267",
                  "s" : [ {
                     "value" : [ "","define ","NullAsStringEndsWith",": " ]
                  }, {
                     "r" : "274",
                     "s" : [ {
                        "value" : [ "EndsWith","(" ]
                     }, {
                        "r" : "268",
                        "s" : [ {
                           "r" : "269",
                           "value" : [ "null"," as " ]
                        }, {
                           "r" : "270",
                           "s" : [ {
                              "value" : [ "String" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "271",
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
               "localId" : "274",
               "type" : "EndsWith",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "268",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "269",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "270",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "271",
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
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "304",
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
                     "r" : "218",
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
               "localId" : "218",
               "type" : "ReplaceMatches",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "213",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "FooBar",
                  "type" : "Literal"
               }, {
                  "localId" : "214",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Bar",
                  "type" : "Literal"
               }, {
                  "localId" : "215",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Baz",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "220",
            "name" : "ReplaceMany",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "220",
                  "s" : [ {
                     "value" : [ "","define ","ReplaceMany",": " ]
                  }, {
                     "r" : "226",
                     "s" : [ {
                        "value" : [ "ReplaceMatches","(" ]
                     }, {
                        "r" : "221",
                        "s" : [ {
                           "value" : [ "'FooBarFooBarFooBar'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "222",
                        "s" : [ {
                           "value" : [ "'Bar'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "223",
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
               "type" : "ReplaceMatches",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "221",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "FooBarFooBarFooBar",
                  "type" : "Literal"
               }, {
                  "localId" : "222",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Bar",
                  "type" : "Literal"
               }, {
                  "localId" : "223",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Baz",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "228",
            "name" : "ReplaceCapital",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "228",
                  "s" : [ {
                     "value" : [ "","define ","ReplaceCapital",": " ]
                  }, {
                     "r" : "234",
                     "s" : [ {
                        "value" : [ "ReplaceMatches","(" ]
                     }, {
                        "r" : "229",
                        "s" : [ {
                           "value" : [ "'Tattle'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "230",
                        "s" : [ {
                           "value" : [ "'T'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "231",
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
               "localId" : "234",
               "type" : "ReplaceMatches",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "229",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Tattle",
                  "type" : "Literal"
               }, {
                  "localId" : "230",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "T",
                  "type" : "Literal"
               }, {
                  "localId" : "231",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "R",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "236",
            "name" : "ReplaceDiacritical",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "236",
                  "s" : [ {
                     "value" : [ "","define ","ReplaceDiacritical",": " ]
                  }, {
                     "r" : "242",
                     "s" : [ {
                        "value" : [ "ReplaceMatches","(" ]
                     }, {
                        "r" : "237",
                        "s" : [ {
                           "value" : [ "'Cafè'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "238",
                        "s" : [ {
                           "value" : [ "'è'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "239",
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
               "localId" : "242",
               "type" : "ReplaceMatches",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "237",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Cafè",
                  "type" : "Literal"
               }, {
                  "localId" : "238",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "è",
                  "type" : "Literal"
               }, {
                  "localId" : "239",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "é",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "244",
            "name" : "ReplaceUnicode",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "244",
                  "s" : [ {
                     "value" : [ "","define ","ReplaceUnicode",": " ]
                  }, {
                     "r" : "250",
                     "s" : [ {
                        "value" : [ "ReplaceMatches","(" ]
                     }, {
                        "r" : "245",
                        "s" : [ {
                           "value" : [ "'Turn that frown \uD83D\uDE41 upside down! \uD83D\uDE03'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "246",
                        "s" : [ {
                           "value" : [ "'\uD83D\uDE41'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "247",
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
               "localId" : "250",
               "type" : "ReplaceMatches",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "245",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Turn that frown \uD83D\uDE41 upside down! \uD83D\uDE03",
                  "type" : "Literal"
               }, {
                  "localId" : "246",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "\uD83D\uDE41",
                  "type" : "Literal"
               }, {
                  "localId" : "247",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "\uD83D\uDE03",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "252",
            "name" : "ReplaceSpace",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "252",
                  "s" : [ {
                     "value" : [ "","define ","ReplaceSpace",": " ]
                  }, {
                     "r" : "258",
                     "s" : [ {
                        "value" : [ "ReplaceMatches","(" ]
                     }, {
                        "r" : "253",
                        "s" : [ {
                           "value" : [ "'(123) 456 7890'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "254",
                        "s" : [ {
                           "value" : [ "'\\\\s'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "255",
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
               "localId" : "258",
               "type" : "ReplaceMatches",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "253",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "(123) 456 7890",
                  "type" : "Literal"
               }, {
                  "localId" : "254",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "\\s",
                  "type" : "Literal"
               }, {
                  "localId" : "255",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "-",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "260",
            "name" : "ReplaceEmpty",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "260",
                  "s" : [ {
                     "value" : [ "","define ","ReplaceEmpty",": " ]
                  }, {
                     "r" : "266",
                     "s" : [ {
                        "value" : [ "ReplaceMatches","(" ]
                     }, {
                        "r" : "261",
                        "s" : [ {
                           "value" : [ "'FooBar'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "262",
                        "s" : [ {
                           "value" : [ "''" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "263",
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
               "localId" : "266",
               "type" : "ReplaceMatches",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "261",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "FooBar",
                  "type" : "Literal"
               }, {
                  "localId" : "262",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "",
                  "type" : "Literal"
               }, {
                  "localId" : "263",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : ".",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "268",
            "name" : "ReplaceMatchGroups",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "268",
                  "s" : [ {
                     "value" : [ "","define ","ReplaceMatchGroups",": " ]
                  }, {
                     "r" : "274",
                     "s" : [ {
                        "value" : [ "ReplaceMatches","(" ]
                     }, {
                        "r" : "269",
                        "s" : [ {
                           "value" : [ "'Foo[123]'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "270",
                        "s" : [ {
                           "value" : [ "'Foo\\\\[(\\\\d+)]'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "271",
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
               "localId" : "274",
               "type" : "ReplaceMatches",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "269",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Foo[123]",
                  "type" : "Literal"
               }, {
                  "localId" : "270",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Foo\\[(\\d+)]",
                  "type" : "Literal"
               }, {
                  "localId" : "271",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Bar[$1]",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "276",
            "name" : "ReplaceNone",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "276",
                  "s" : [ {
                     "value" : [ "","define ","ReplaceNone",": " ]
                  }, {
                     "r" : "282",
                     "s" : [ {
                        "value" : [ "ReplaceMatches","(" ]
                     }, {
                        "r" : "277",
                        "s" : [ {
                           "value" : [ "'Foo'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "278",
                        "s" : [ {
                           "value" : [ "'Bar'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "279",
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
               "localId" : "282",
               "type" : "ReplaceMatches",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "277",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Foo",
                  "type" : "Literal"
               }, {
                  "localId" : "278",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Bar",
                  "type" : "Literal"
               }, {
                  "localId" : "279",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Baz",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "284",
            "name" : "ReplaceArgumentIsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "284",
                  "s" : [ {
                     "value" : [ "","define ","ReplaceArgumentIsNull",": " ]
                  }, {
                     "r" : "291",
                     "s" : [ {
                        "r" : "285",
                        "value" : [ "ReplaceMatches","(","null",", " ]
                     }, {
                        "r" : "286",
                        "s" : [ {
                           "value" : [ "'Bar'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "287",
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
               "localId" : "291",
               "type" : "ReplaceMatches",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "292",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "285",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "286",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Bar",
                  "type" : "Literal"
               }, {
                  "localId" : "287",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Baz",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "294",
            "name" : "ReplacePatternIsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "294",
                  "s" : [ {
                     "value" : [ "","define ","ReplacePatternIsNull",": " ]
                  }, {
                     "r" : "301",
                     "s" : [ {
                        "value" : [ "ReplaceMatches","(" ]
                     }, {
                        "r" : "295",
                        "s" : [ {
                           "value" : [ "'Foo'" ]
                        } ]
                     }, {
                        "r" : "296",
                        "value" : [ ", ","null",", " ]
                     }, {
                        "r" : "297",
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
               "localId" : "301",
               "type" : "ReplaceMatches",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "295",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Foo",
                  "type" : "Literal"
               }, {
                  "localId" : "302",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "296",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "297",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Baz",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "304",
            "name" : "ReplaceSubstitutionIsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "304",
                  "s" : [ {
                     "value" : [ "","define ","ReplaceSubstitutionIsNull",": " ]
                  }, {
                     "r" : "311",
                     "s" : [ {
                        "value" : [ "ReplaceMatches","(" ]
                     }, {
                        "r" : "305",
                        "s" : [ {
                           "value" : [ "'Foo'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "306",
                        "s" : [ {
                           "value" : [ "'Bar'" ]
                        } ]
                     }, {
                        "r" : "307",
                        "value" : [ ", ","null",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "311",
               "type" : "ReplaceMatches",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "305",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Foo",
                  "type" : "Literal"
               }, {
                  "localId" : "306",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Bar",
                  "type" : "Literal"
               }, {
                  "localId" : "312",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "307",
                     "type" : "Null"
                  }
               } ]
            }
         } ]
      }
   }
}

