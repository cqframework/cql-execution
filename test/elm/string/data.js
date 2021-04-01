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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "97",
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
            "localIdentifier" : "System",
            "uri" : "urn:hl7-org:elm-types:r1"
         }, {
            "localId" : "1",
            "localIdentifier" : "Simple",
            "uri" : "https://github.com/cqframework/cql-execution/simple",
            "version" : "1.0.0",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1",
                  "s" : [ {
                     "value" : [ "","using " ]
                  }, {
                     "s" : [ {
                        "value" : [ "Simple" ]
                     } ]
                  }, {
                     "value" : [ " version ","'1.0.0'" ]
                  } ]
               }
            } ]
         } ]
      },
      "contexts" : {
         "def" : [ {
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "type" : "SingletonFrom",
               "operand" : {
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve"
               }
            }
         }, {
            "localId" : "5",
            "name" : "HelloWorld",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "5",
                  "s" : [ {
                     "value" : [ "","define ","HelloWorld",": " ]
                  }, {
                     "r" : "4",
                     "s" : [ {
                        "r" : "2",
                        "s" : [ {
                           "value" : [ "'Hello'" ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "3",
                        "s" : [ {
                           "value" : [ "'World'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "4",
               "type" : "Concatenate",
               "operand" : [ {
                  "localId" : "2",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Hello",
                  "type" : "Literal"
               }, {
                  "localId" : "3",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "World",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "39",
            "name" : "Sentence",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "39",
                  "s" : [ {
                     "value" : [ "","define ","Sentence",": " ]
                  }, {
                     "r" : "38",
                     "s" : [ {
                        "r" : "36",
                        "s" : [ {
                           "r" : "34",
                           "s" : [ {
                              "r" : "32",
                              "s" : [ {
                                 "r" : "30",
                                 "s" : [ {
                                    "r" : "28",
                                    "s" : [ {
                                       "r" : "26",
                                       "s" : [ {
                                          "r" : "24",
                                          "s" : [ {
                                             "r" : "22",
                                             "s" : [ {
                                                "r" : "20",
                                                "s" : [ {
                                                   "r" : "18",
                                                   "s" : [ {
                                                      "r" : "16",
                                                      "s" : [ {
                                                         "r" : "14",
                                                         "s" : [ {
                                                            "r" : "12",
                                                            "s" : [ {
                                                               "r" : "10",
                                                               "s" : [ {
                                                                  "r" : "8",
                                                                  "s" : [ {
                                                                     "r" : "6",
                                                                     "s" : [ {
                                                                        "value" : [ "'The'" ]
                                                                     } ]
                                                                  }, {
                                                                     "value" : [ " + " ]
                                                                  }, {
                                                                     "r" : "7",
                                                                     "s" : [ {
                                                                        "value" : [ "' '" ]
                                                                     } ]
                                                                  } ]
                                                               }, {
                                                                  "value" : [ " + " ]
                                                               }, {
                                                                  "r" : "9",
                                                                  "s" : [ {
                                                                     "value" : [ "'quick'" ]
                                                                  } ]
                                                               } ]
                                                            }, {
                                                               "value" : [ " + " ]
                                                            }, {
                                                               "r" : "11",
                                                               "s" : [ {
                                                                  "value" : [ "' '" ]
                                                               } ]
                                                            } ]
                                                         }, {
                                                            "value" : [ " + " ]
                                                         }, {
                                                            "r" : "13",
                                                            "s" : [ {
                                                               "value" : [ "'brown'" ]
                                                            } ]
                                                         } ]
                                                      }, {
                                                         "value" : [ " + " ]
                                                      }, {
                                                         "r" : "15",
                                                         "s" : [ {
                                                            "value" : [ "' '" ]
                                                         } ]
                                                      } ]
                                                   }, {
                                                      "value" : [ " + " ]
                                                   }, {
                                                      "r" : "17",
                                                      "s" : [ {
                                                         "value" : [ "'fox'" ]
                                                      } ]
                                                   } ]
                                                }, {
                                                   "value" : [ " + " ]
                                                }, {
                                                   "r" : "19",
                                                   "s" : [ {
                                                      "value" : [ "' '" ]
                                                   } ]
                                                } ]
                                             }, {
                                                "value" : [ " + " ]
                                             }, {
                                                "r" : "21",
                                                "s" : [ {
                                                   "value" : [ "'jumps'" ]
                                                } ]
                                             } ]
                                          }, {
                                             "value" : [ " + " ]
                                          }, {
                                             "r" : "23",
                                             "s" : [ {
                                                "value" : [ "' '" ]
                                             } ]
                                          } ]
                                       }, {
                                          "value" : [ "\n                  + " ]
                                       }, {
                                          "r" : "25",
                                          "s" : [ {
                                             "value" : [ "'over'" ]
                                          } ]
                                       } ]
                                    }, {
                                       "value" : [ " + " ]
                                    }, {
                                       "r" : "27",
                                       "s" : [ {
                                          "value" : [ "' '" ]
                                       } ]
                                    } ]
                                 }, {
                                    "value" : [ " + " ]
                                 }, {
                                    "r" : "29",
                                    "s" : [ {
                                       "value" : [ "'the'" ]
                                    } ]
                                 } ]
                              }, {
                                 "value" : [ " + " ]
                              }, {
                                 "r" : "31",
                                 "s" : [ {
                                    "value" : [ "' '" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " + " ]
                           }, {
                              "r" : "33",
                              "s" : [ {
                                 "value" : [ "'lazy'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ " + " ]
                        }, {
                           "r" : "35",
                           "s" : [ {
                              "value" : [ "' '" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "37",
                        "s" : [ {
                           "value" : [ "'dog.'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "38",
               "type" : "Concatenate",
               "operand" : [ {
                  "localId" : "36",
                  "type" : "Concatenate",
                  "operand" : [ {
                     "localId" : "34",
                     "type" : "Concatenate",
                     "operand" : [ {
                        "localId" : "32",
                        "type" : "Concatenate",
                        "operand" : [ {
                           "localId" : "30",
                           "type" : "Concatenate",
                           "operand" : [ {
                              "localId" : "28",
                              "type" : "Concatenate",
                              "operand" : [ {
                                 "localId" : "26",
                                 "type" : "Concatenate",
                                 "operand" : [ {
                                    "localId" : "24",
                                    "type" : "Concatenate",
                                    "operand" : [ {
                                       "localId" : "22",
                                       "type" : "Concatenate",
                                       "operand" : [ {
                                          "localId" : "20",
                                          "type" : "Concatenate",
                                          "operand" : [ {
                                             "localId" : "18",
                                             "type" : "Concatenate",
                                             "operand" : [ {
                                                "localId" : "16",
                                                "type" : "Concatenate",
                                                "operand" : [ {
                                                   "localId" : "14",
                                                   "type" : "Concatenate",
                                                   "operand" : [ {
                                                      "localId" : "12",
                                                      "type" : "Concatenate",
                                                      "operand" : [ {
                                                         "localId" : "10",
                                                         "type" : "Concatenate",
                                                         "operand" : [ {
                                                            "localId" : "8",
                                                            "type" : "Concatenate",
                                                            "operand" : [ {
                                                               "localId" : "6",
                                                               "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                               "value" : "The",
                                                               "type" : "Literal"
                                                            }, {
                                                               "localId" : "7",
                                                               "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                               "value" : " ",
                                                               "type" : "Literal"
                                                            } ]
                                                         }, {
                                                            "localId" : "9",
                                                            "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                            "value" : "quick",
                                                            "type" : "Literal"
                                                         } ]
                                                      }, {
                                                         "localId" : "11",
                                                         "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                         "value" : " ",
                                                         "type" : "Literal"
                                                      } ]
                                                   }, {
                                                      "localId" : "13",
                                                      "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                      "value" : "brown",
                                                      "type" : "Literal"
                                                   } ]
                                                }, {
                                                   "localId" : "15",
                                                   "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                   "value" : " ",
                                                   "type" : "Literal"
                                                } ]
                                             }, {
                                                "localId" : "17",
                                                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                "value" : "fox",
                                                "type" : "Literal"
                                             } ]
                                          }, {
                                             "localId" : "19",
                                             "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                             "value" : " ",
                                             "type" : "Literal"
                                          } ]
                                       }, {
                                          "localId" : "21",
                                          "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                          "value" : "jumps",
                                          "type" : "Literal"
                                       } ]
                                    }, {
                                       "localId" : "23",
                                       "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                       "value" : " ",
                                       "type" : "Literal"
                                    } ]
                                 }, {
                                    "localId" : "25",
                                    "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                    "value" : "over",
                                    "type" : "Literal"
                                 } ]
                              }, {
                                 "localId" : "27",
                                 "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                 "value" : " ",
                                 "type" : "Literal"
                              } ]
                           }, {
                              "localId" : "29",
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "the",
                              "type" : "Literal"
                           } ]
                        }, {
                           "localId" : "31",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : " ",
                           "type" : "Literal"
                        } ]
                     }, {
                        "localId" : "33",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "lazy",
                        "type" : "Literal"
                     } ]
                  }, {
                     "localId" : "35",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : " ",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "37",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "dog.",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "43",
            "name" : "ConcatNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "43",
                  "s" : [ {
                     "value" : [ "","define ","ConcatNull",": " ]
                  }, {
                     "r" : "42",
                     "s" : [ {
                        "r" : "40",
                        "s" : [ {
                           "value" : [ "'Hello'" ]
                        } ]
                     }, {
                        "r" : "41",
                        "value" : [ " + ","null" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "42",
               "type" : "Concatenate",
               "operand" : [ {
                  "localId" : "40",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Hello",
                  "type" : "Literal"
               }, {
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "operand" : {
                     "localId" : "41",
                     "type" : "Null"
                  }
               } ]
            }
         }, {
            "localId" : "45",
            "name" : "Hello",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "45",
                  "s" : [ {
                     "value" : [ "","define ","Hello",": " ]
                  }, {
                     "r" : "44",
                     "s" : [ {
                        "value" : [ "'Hello'" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "44",
               "valueType" : "{urn:hl7-org:elm-types:r1}String",
               "value" : "Hello",
               "type" : "Literal"
            }
         }, {
            "localId" : "47",
            "name" : "World",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "47",
                  "s" : [ {
                     "value" : [ "","define ","World",": " ]
                  }, {
                     "r" : "46",
                     "s" : [ {
                        "value" : [ "'World'" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "46",
               "valueType" : "{urn:hl7-org:elm-types:r1}String",
               "value" : "World",
               "type" : "Literal"
            }
         }, {
            "localId" : "51",
            "name" : "HelloWorldVariables",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "51",
                  "s" : [ {
                     "value" : [ "","define ","HelloWorldVariables",": " ]
                  }, {
                     "r" : "50",
                     "s" : [ {
                        "r" : "48",
                        "s" : [ {
                           "value" : [ "Hello" ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "49",
                        "s" : [ {
                           "value" : [ "World" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "50",
               "type" : "Concatenate",
               "operand" : [ {
                  "localId" : "48",
                  "name" : "Hello",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "49",
                  "name" : "World",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "55",
            "name" : "AndHelloWorld",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "55",
                  "s" : [ {
                     "value" : [ "","define ","AndHelloWorld",": " ]
                  }, {
                     "r" : "54",
                     "s" : [ {
                        "r" : "52",
                        "s" : [ {
                           "value" : [ "'Hello'" ]
                        } ]
                     }, {
                        "value" : [ " & " ]
                     }, {
                        "r" : "53",
                        "s" : [ {
                           "value" : [ "'World'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "54",
               "type" : "Concatenate",
               "operand" : [ {
                  "type" : "Coalesce",
                  "operand" : [ {
                     "localId" : "52",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "Hello",
                     "type" : "Literal"
                  }, {
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "",
                     "type" : "Literal"
                  } ]
               }, {
                  "type" : "Coalesce",
                  "operand" : [ {
                     "localId" : "53",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "World",
                     "type" : "Literal"
                  }, {
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "89",
            "name" : "AndSentence",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "89",
                  "s" : [ {
                     "value" : [ "","define ","AndSentence",": " ]
                  }, {
                     "r" : "88",
                     "s" : [ {
                        "r" : "86",
                        "s" : [ {
                           "r" : "84",
                           "s" : [ {
                              "r" : "82",
                              "s" : [ {
                                 "r" : "80",
                                 "s" : [ {
                                    "r" : "78",
                                    "s" : [ {
                                       "r" : "76",
                                       "s" : [ {
                                          "r" : "74",
                                          "s" : [ {
                                             "r" : "72",
                                             "s" : [ {
                                                "r" : "70",
                                                "s" : [ {
                                                   "r" : "68",
                                                   "s" : [ {
                                                      "r" : "66",
                                                      "s" : [ {
                                                         "r" : "64",
                                                         "s" : [ {
                                                            "r" : "62",
                                                            "s" : [ {
                                                               "r" : "60",
                                                               "s" : [ {
                                                                  "r" : "58",
                                                                  "s" : [ {
                                                                     "r" : "56",
                                                                     "s" : [ {
                                                                        "value" : [ "'The'" ]
                                                                     } ]
                                                                  }, {
                                                                     "value" : [ " & " ]
                                                                  }, {
                                                                     "r" : "57",
                                                                     "s" : [ {
                                                                        "value" : [ "' '" ]
                                                                     } ]
                                                                  } ]
                                                               }, {
                                                                  "value" : [ " & " ]
                                                               }, {
                                                                  "r" : "59",
                                                                  "s" : [ {
                                                                     "value" : [ "'quick'" ]
                                                                  } ]
                                                               } ]
                                                            }, {
                                                               "value" : [ " & " ]
                                                            }, {
                                                               "r" : "61",
                                                               "s" : [ {
                                                                  "value" : [ "' '" ]
                                                               } ]
                                                            } ]
                                                         }, {
                                                            "value" : [ " & " ]
                                                         }, {
                                                            "r" : "63",
                                                            "s" : [ {
                                                               "value" : [ "'brown'" ]
                                                            } ]
                                                         } ]
                                                      }, {
                                                         "value" : [ " & " ]
                                                      }, {
                                                         "r" : "65",
                                                         "s" : [ {
                                                            "value" : [ "' '" ]
                                                         } ]
                                                      } ]
                                                   }, {
                                                      "value" : [ " & " ]
                                                   }, {
                                                      "r" : "67",
                                                      "s" : [ {
                                                         "value" : [ "'fox'" ]
                                                      } ]
                                                   } ]
                                                }, {
                                                   "value" : [ " & " ]
                                                }, {
                                                   "r" : "69",
                                                   "s" : [ {
                                                      "value" : [ "' '" ]
                                                   } ]
                                                } ]
                                             }, {
                                                "value" : [ " & " ]
                                             }, {
                                                "r" : "71",
                                                "s" : [ {
                                                   "value" : [ "'jumps'" ]
                                                } ]
                                             } ]
                                          }, {
                                             "value" : [ " & " ]
                                          }, {
                                             "r" : "73",
                                             "s" : [ {
                                                "value" : [ "' '" ]
                                             } ]
                                          } ]
                                       }, {
                                          "value" : [ "\n                  & " ]
                                       }, {
                                          "r" : "75",
                                          "s" : [ {
                                             "value" : [ "'over'" ]
                                          } ]
                                       } ]
                                    }, {
                                       "value" : [ " & " ]
                                    }, {
                                       "r" : "77",
                                       "s" : [ {
                                          "value" : [ "' '" ]
                                       } ]
                                    } ]
                                 }, {
                                    "value" : [ " & " ]
                                 }, {
                                    "r" : "79",
                                    "s" : [ {
                                       "value" : [ "'the'" ]
                                    } ]
                                 } ]
                              }, {
                                 "value" : [ " & " ]
                              }, {
                                 "r" : "81",
                                 "s" : [ {
                                    "value" : [ "' '" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " & " ]
                           }, {
                              "r" : "83",
                              "s" : [ {
                                 "value" : [ "'lazy'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ " & " ]
                        }, {
                           "r" : "85",
                           "s" : [ {
                              "value" : [ "' '" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " & " ]
                     }, {
                        "r" : "87",
                        "s" : [ {
                           "value" : [ "'dog.'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "88",
               "type" : "Concatenate",
               "operand" : [ {
                  "type" : "Coalesce",
                  "operand" : [ {
                     "localId" : "86",
                     "type" : "Concatenate",
                     "operand" : [ {
                        "type" : "Coalesce",
                        "operand" : [ {
                           "localId" : "84",
                           "type" : "Concatenate",
                           "operand" : [ {
                              "type" : "Coalesce",
                              "operand" : [ {
                                 "localId" : "82",
                                 "type" : "Concatenate",
                                 "operand" : [ {
                                    "type" : "Coalesce",
                                    "operand" : [ {
                                       "localId" : "80",
                                       "type" : "Concatenate",
                                       "operand" : [ {
                                          "type" : "Coalesce",
                                          "operand" : [ {
                                             "localId" : "78",
                                             "type" : "Concatenate",
                                             "operand" : [ {
                                                "type" : "Coalesce",
                                                "operand" : [ {
                                                   "localId" : "76",
                                                   "type" : "Concatenate",
                                                   "operand" : [ {
                                                      "type" : "Coalesce",
                                                      "operand" : [ {
                                                         "localId" : "74",
                                                         "type" : "Concatenate",
                                                         "operand" : [ {
                                                            "type" : "Coalesce",
                                                            "operand" : [ {
                                                               "localId" : "72",
                                                               "type" : "Concatenate",
                                                               "operand" : [ {
                                                                  "type" : "Coalesce",
                                                                  "operand" : [ {
                                                                     "localId" : "70",
                                                                     "type" : "Concatenate",
                                                                     "operand" : [ {
                                                                        "type" : "Coalesce",
                                                                        "operand" : [ {
                                                                           "localId" : "68",
                                                                           "type" : "Concatenate",
                                                                           "operand" : [ {
                                                                              "type" : "Coalesce",
                                                                              "operand" : [ {
                                                                                 "localId" : "66",
                                                                                 "type" : "Concatenate",
                                                                                 "operand" : [ {
                                                                                    "type" : "Coalesce",
                                                                                    "operand" : [ {
                                                                                       "localId" : "64",
                                                                                       "type" : "Concatenate",
                                                                                       "operand" : [ {
                                                                                          "type" : "Coalesce",
                                                                                          "operand" : [ {
                                                                                             "localId" : "62",
                                                                                             "type" : "Concatenate",
                                                                                             "operand" : [ {
                                                                                                "type" : "Coalesce",
                                                                                                "operand" : [ {
                                                                                                   "localId" : "60",
                                                                                                   "type" : "Concatenate",
                                                                                                   "operand" : [ {
                                                                                                      "type" : "Coalesce",
                                                                                                      "operand" : [ {
                                                                                                         "localId" : "58",
                                                                                                         "type" : "Concatenate",
                                                                                                         "operand" : [ {
                                                                                                            "type" : "Coalesce",
                                                                                                            "operand" : [ {
                                                                                                               "localId" : "56",
                                                                                                               "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                               "value" : "The",
                                                                                                               "type" : "Literal"
                                                                                                            }, {
                                                                                                               "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                               "value" : "",
                                                                                                               "type" : "Literal"
                                                                                                            } ]
                                                                                                         }, {
                                                                                                            "type" : "Coalesce",
                                                                                                            "operand" : [ {
                                                                                                               "localId" : "57",
                                                                                                               "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                               "value" : " ",
                                                                                                               "type" : "Literal"
                                                                                                            }, {
                                                                                                               "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                               "value" : "",
                                                                                                               "type" : "Literal"
                                                                                                            } ]
                                                                                                         } ]
                                                                                                      }, {
                                                                                                         "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                         "value" : "",
                                                                                                         "type" : "Literal"
                                                                                                      } ]
                                                                                                   }, {
                                                                                                      "type" : "Coalesce",
                                                                                                      "operand" : [ {
                                                                                                         "localId" : "59",
                                                                                                         "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                         "value" : "quick",
                                                                                                         "type" : "Literal"
                                                                                                      }, {
                                                                                                         "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                         "value" : "",
                                                                                                         "type" : "Literal"
                                                                                                      } ]
                                                                                                   } ]
                                                                                                }, {
                                                                                                   "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                   "value" : "",
                                                                                                   "type" : "Literal"
                                                                                                } ]
                                                                                             }, {
                                                                                                "type" : "Coalesce",
                                                                                                "operand" : [ {
                                                                                                   "localId" : "61",
                                                                                                   "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                   "value" : " ",
                                                                                                   "type" : "Literal"
                                                                                                }, {
                                                                                                   "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                                                   "value" : "",
                                                                                                   "type" : "Literal"
                                                                                                } ]
                                                                                             } ]
                                                                                          }, {
                                                                                             "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                                             "value" : "",
                                                                                             "type" : "Literal"
                                                                                          } ]
                                                                                       }, {
                                                                                          "type" : "Coalesce",
                                                                                          "operand" : [ {
                                                                                             "localId" : "63",
                                                                                             "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                                             "value" : "brown",
                                                                                             "type" : "Literal"
                                                                                          }, {
                                                                                             "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                                             "value" : "",
                                                                                             "type" : "Literal"
                                                                                          } ]
                                                                                       } ]
                                                                                    }, {
                                                                                       "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                                       "value" : "",
                                                                                       "type" : "Literal"
                                                                                    } ]
                                                                                 }, {
                                                                                    "type" : "Coalesce",
                                                                                    "operand" : [ {
                                                                                       "localId" : "65",
                                                                                       "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                                       "value" : " ",
                                                                                       "type" : "Literal"
                                                                                    }, {
                                                                                       "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                                       "value" : "",
                                                                                       "type" : "Literal"
                                                                                    } ]
                                                                                 } ]
                                                                              }, {
                                                                                 "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                                 "value" : "",
                                                                                 "type" : "Literal"
                                                                              } ]
                                                                           }, {
                                                                              "type" : "Coalesce",
                                                                              "operand" : [ {
                                                                                 "localId" : "67",
                                                                                 "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                                 "value" : "fox",
                                                                                 "type" : "Literal"
                                                                              }, {
                                                                                 "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                                 "value" : "",
                                                                                 "type" : "Literal"
                                                                              } ]
                                                                           } ]
                                                                        }, {
                                                                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                           "value" : "",
                                                                           "type" : "Literal"
                                                                        } ]
                                                                     }, {
                                                                        "type" : "Coalesce",
                                                                        "operand" : [ {
                                                                           "localId" : "69",
                                                                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                           "value" : " ",
                                                                           "type" : "Literal"
                                                                        }, {
                                                                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                           "value" : "",
                                                                           "type" : "Literal"
                                                                        } ]
                                                                     } ]
                                                                  }, {
                                                                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                     "value" : "",
                                                                     "type" : "Literal"
                                                                  } ]
                                                               }, {
                                                                  "type" : "Coalesce",
                                                                  "operand" : [ {
                                                                     "localId" : "71",
                                                                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                     "value" : "jumps",
                                                                     "type" : "Literal"
                                                                  }, {
                                                                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                     "value" : "",
                                                                     "type" : "Literal"
                                                                  } ]
                                                               } ]
                                                            }, {
                                                               "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                               "value" : "",
                                                               "type" : "Literal"
                                                            } ]
                                                         }, {
                                                            "type" : "Coalesce",
                                                            "operand" : [ {
                                                               "localId" : "73",
                                                               "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                               "value" : " ",
                                                               "type" : "Literal"
                                                            }, {
                                                               "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                               "value" : "",
                                                               "type" : "Literal"
                                                            } ]
                                                         } ]
                                                      }, {
                                                         "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                         "value" : "",
                                                         "type" : "Literal"
                                                      } ]
                                                   }, {
                                                      "type" : "Coalesce",
                                                      "operand" : [ {
                                                         "localId" : "75",
                                                         "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                         "value" : "over",
                                                         "type" : "Literal"
                                                      }, {
                                                         "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                         "value" : "",
                                                         "type" : "Literal"
                                                      } ]
                                                   } ]
                                                }, {
                                                   "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                   "value" : "",
                                                   "type" : "Literal"
                                                } ]
                                             }, {
                                                "type" : "Coalesce",
                                                "operand" : [ {
                                                   "localId" : "77",
                                                   "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                   "value" : " ",
                                                   "type" : "Literal"
                                                }, {
                                                   "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                   "value" : "",
                                                   "type" : "Literal"
                                                } ]
                                             } ]
                                          }, {
                                             "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                             "value" : "",
                                             "type" : "Literal"
                                          } ]
                                       }, {
                                          "type" : "Coalesce",
                                          "operand" : [ {
                                             "localId" : "79",
                                             "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                             "value" : "the",
                                             "type" : "Literal"
                                          }, {
                                             "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                             "value" : "",
                                             "type" : "Literal"
                                          } ]
                                       } ]
                                    }, {
                                       "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                       "value" : "",
                                       "type" : "Literal"
                                    } ]
                                 }, {
                                    "type" : "Coalesce",
                                    "operand" : [ {
                                       "localId" : "81",
                                       "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                       "value" : " ",
                                       "type" : "Literal"
                                    }, {
                                       "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                       "value" : "",
                                       "type" : "Literal"
                                    } ]
                                 } ]
                              }, {
                                 "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                 "value" : "",
                                 "type" : "Literal"
                              } ]
                           }, {
                              "type" : "Coalesce",
                              "operand" : [ {
                                 "localId" : "83",
                                 "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                 "value" : "lazy",
                                 "type" : "Literal"
                              }, {
                                 "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                 "value" : "",
                                 "type" : "Literal"
                              } ]
                           } ]
                        }, {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "",
                           "type" : "Literal"
                        } ]
                     }, {
                        "type" : "Coalesce",
                        "operand" : [ {
                           "localId" : "85",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : " ",
                           "type" : "Literal"
                        }, {
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "",
                           "type" : "Literal"
                        } ]
                     } ]
                  }, {
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "",
                     "type" : "Literal"
                  } ]
               }, {
                  "type" : "Coalesce",
                  "operand" : [ {
                     "localId" : "87",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "dog.",
                     "type" : "Literal"
                  }, {
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "93",
            "name" : "AndConcatNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "93",
                  "s" : [ {
                     "value" : [ "","define ","AndConcatNull",": " ]
                  }, {
                     "r" : "92",
                     "s" : [ {
                        "r" : "90",
                        "s" : [ {
                           "value" : [ "'Hello'" ]
                        } ]
                     }, {
                        "r" : "91",
                        "value" : [ " & ","null" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "92",
               "type" : "Concatenate",
               "operand" : [ {
                  "type" : "Coalesce",
                  "operand" : [ {
                     "localId" : "90",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "Hello",
                     "type" : "Literal"
                  }, {
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "",
                     "type" : "Literal"
                  } ]
               }, {
                  "type" : "Coalesce",
                  "operand" : [ {
                     "asType" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "As",
                     "operand" : {
                        "localId" : "91",
                        "type" : "Null"
                     }
                  }, {
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "97",
            "name" : "AndHelloWorldVariables",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "97",
                  "s" : [ {
                     "value" : [ "","define ","AndHelloWorldVariables",": " ]
                  }, {
                     "r" : "96",
                     "s" : [ {
                        "r" : "94",
                        "s" : [ {
                           "value" : [ "Hello" ]
                        } ]
                     }, {
                        "value" : [ " & " ]
                     }, {
                        "r" : "95",
                        "s" : [ {
                           "value" : [ "World" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "96",
               "type" : "Concatenate",
               "operand" : [ {
                  "type" : "Coalesce",
                  "operand" : [ {
                     "localId" : "94",
                     "name" : "Hello",
                     "type" : "ExpressionRef"
                  }, {
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "",
                     "type" : "Literal"
                  } ]
               }, {
                  "type" : "Coalesce",
                  "operand" : [ {
                     "localId" : "95",
                     "name" : "World",
                     "type" : "ExpressionRef"
                  }, {
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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "37",
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
            "localIdentifier" : "System",
            "uri" : "urn:hl7-org:elm-types:r1"
         }, {
            "localId" : "1",
            "localIdentifier" : "Simple",
            "uri" : "https://github.com/cqframework/cql-execution/simple",
            "version" : "1.0.0",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1",
                  "s" : [ {
                     "value" : [ "","using " ]
                  }, {
                     "s" : [ {
                        "value" : [ "Simple" ]
                     } ]
                  }, {
                     "value" : [ " version ","'1.0.0'" ]
                  } ]
               }
            } ]
         } ]
      },
      "contexts" : {
         "def" : [ {
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "type" : "SingletonFrom",
               "operand" : {
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve"
               }
            }
         }, {
            "localId" : "8",
            "name" : "NoSeparator",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "8",
                  "s" : [ {
                     "value" : [ "","define ","NoSeparator",": " ]
                  }, {
                     "r" : "7",
                     "s" : [ {
                        "value" : [ "Combine","(" ]
                     }, {
                        "r" : "6",
                        "s" : [ {
                           "value" : [ "{ " ]
                        }, {
                           "r" : "2",
                           "s" : [ {
                              "value" : [ "'abc'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "3",
                           "s" : [ {
                              "value" : [ "'def'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "4",
                           "s" : [ {
                              "value" : [ "'ghi'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "5",
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
               "localId" : "7",
               "type" : "Combine",
               "source" : {
                  "localId" : "6",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "2",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "abc",
                     "type" : "Literal"
                  }, {
                     "localId" : "3",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "def",
                     "type" : "Literal"
                  }, {
                     "localId" : "4",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "ghi",
                     "type" : "Literal"
                  }, {
                     "localId" : "5",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "jkl",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "16",
            "name" : "Separator",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "16",
                  "s" : [ {
                     "value" : [ "","define ","Separator",": " ]
                  }, {
                     "r" : "15",
                     "s" : [ {
                        "value" : [ "Combine","(" ]
                     }, {
                        "r" : "13",
                        "s" : [ {
                           "value" : [ "{ " ]
                        }, {
                           "r" : "9",
                           "s" : [ {
                              "value" : [ "'abc'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "10",
                           "s" : [ {
                              "value" : [ "'def'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "11",
                           "s" : [ {
                              "value" : [ "'ghi'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "12",
                           "s" : [ {
                              "value" : [ "'jkl'" ]
                           } ]
                        }, {
                           "value" : [ " }" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "14",
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
               "localId" : "15",
               "type" : "Combine",
               "source" : {
                  "localId" : "13",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "9",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "abc",
                     "type" : "Literal"
                  }, {
                     "localId" : "10",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "def",
                     "type" : "Literal"
                  }, {
                     "localId" : "11",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "ghi",
                     "type" : "Literal"
                  }, {
                     "localId" : "12",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "jkl",
                     "type" : "Literal"
                  } ]
               },
               "separator" : {
                  "localId" : "14",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : ";",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "20",
            "name" : "CombineNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "20",
                  "s" : [ {
                     "value" : [ "","define ","CombineNull",": " ]
                  }, {
                     "r" : "19",
                     "s" : [ {
                        "r" : "17",
                        "value" : [ "Combine","(","null",", " ]
                     }, {
                        "r" : "18",
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
               "localId" : "19",
               "type" : "Combine",
               "source" : {
                  "type" : "As",
                  "operand" : {
                     "localId" : "17",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               },
               "separator" : {
                  "localId" : "18",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : ";",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "28",
            "name" : "CombineNullItem",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "28",
                  "s" : [ {
                     "value" : [ "","define ","CombineNullItem",": " ]
                  }, {
                     "r" : "27",
                     "s" : [ {
                        "value" : [ "Combine","(" ]
                     }, {
                        "r" : "25",
                        "s" : [ {
                           "value" : [ "{ " ]
                        }, {
                           "r" : "21",
                           "s" : [ {
                              "value" : [ "'abc'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "22",
                           "s" : [ {
                              "value" : [ "'def'" ]
                           } ]
                        }, {
                           "r" : "23",
                           "value" : [ ", ","null",", " ]
                        }, {
                           "r" : "24",
                           "s" : [ {
                              "value" : [ "'jkl'" ]
                           } ]
                        }, {
                           "value" : [ " }" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "26",
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
               "localId" : "27",
               "type" : "Combine",
               "source" : {
                  "localId" : "25",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "21",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "abc",
                     "type" : "Literal"
                  }, {
                     "localId" : "22",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "def",
                     "type" : "Literal"
                  }, {
                     "asType" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "As",
                     "operand" : {
                        "localId" : "23",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "24",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "jkl",
                     "type" : "Literal"
                  } ]
               },
               "separator" : {
                  "localId" : "26",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : ";",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "33",
            "name" : "CombineOneNullItem",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "33",
                  "s" : [ {
                     "value" : [ "","define ","CombineOneNullItem",": " ]
                  }, {
                     "r" : "32",
                     "s" : [ {
                        "value" : [ "Combine","(" ]
                     }, {
                        "r" : "30",
                        "s" : [ {
                           "r" : "29",
                           "value" : [ "{","null","}" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "31",
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
               "localId" : "32",
               "type" : "Combine",
               "source" : {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "X",
                     "expression" : {
                        "localId" : "30",
                        "type" : "List",
                        "element" : [ {
                           "localId" : "29",
                           "type" : "Null"
                        } ]
                     }
                  } ],
                  "return" : {
                     "distinct" : false,
                     "expression" : {
                        "asType" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "As",
                        "operand" : {
                           "name" : "X",
                           "type" : "AliasRef"
                        }
                     }
                  }
               },
               "separator" : {
                  "localId" : "31",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : ";",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "37",
            "name" : "CombineEmptyNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "37",
                  "s" : [ {
                     "value" : [ "","define ","CombineEmptyNull",": " ]
                  }, {
                     "r" : "36",
                     "s" : [ {
                        "r" : "34",
                        "value" : [ "Combine","(","{}",", " ]
                     }, {
                        "r" : "35",
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
               "localId" : "36",
               "type" : "Combine",
               "source" : {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "X",
                     "expression" : {
                        "localId" : "34",
                        "type" : "List"
                     }
                  } ],
                  "return" : {
                     "distinct" : false,
                     "expression" : {
                        "asType" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "As",
                        "operand" : {
                           "name" : "X",
                           "type" : "AliasRef"
                        }
                     }
                  }
               },
               "separator" : {
                  "localId" : "35",
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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "17",
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
            "localIdentifier" : "System",
            "uri" : "urn:hl7-org:elm-types:r1"
         }, {
            "localId" : "1",
            "localIdentifier" : "Simple",
            "uri" : "https://github.com/cqframework/cql-execution/simple",
            "version" : "1.0.0",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1",
                  "s" : [ {
                     "value" : [ "","using " ]
                  }, {
                     "s" : [ {
                        "value" : [ "Simple" ]
                     } ]
                  }, {
                     "value" : [ " version ","'1.0.0'" ]
                  } ]
               }
            } ]
         } ]
      },
      "contexts" : {
         "def" : [ {
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "type" : "SingletonFrom",
               "operand" : {
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve"
               }
            }
         }, {
            "localId" : "5",
            "name" : "CommaSeparated",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "5",
                  "s" : [ {
                     "value" : [ "","define ","CommaSeparated",": " ]
                  }, {
                     "r" : "4",
                     "s" : [ {
                        "value" : [ "Split","(" ]
                     }, {
                        "r" : "2",
                        "s" : [ {
                           "value" : [ "'a,b,c,,1,2,3'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "3",
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
               "localId" : "4",
               "type" : "Split",
               "stringToSplit" : {
                  "localId" : "2",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "a,b,c,,1,2,3",
                  "type" : "Literal"
               },
               "separator" : {
                  "localId" : "3",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : ",",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "9",
            "name" : "SeparatorNotUsed",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "9",
                  "s" : [ {
                     "value" : [ "","define ","SeparatorNotUsed",": " ]
                  }, {
                     "r" : "8",
                     "s" : [ {
                        "value" : [ "Split","(" ]
                     }, {
                        "r" : "6",
                        "s" : [ {
                           "value" : [ "'a,b,c,,1,2,3'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "7",
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
               "localId" : "8",
               "type" : "Split",
               "stringToSplit" : {
                  "localId" : "6",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "a,b,c,,1,2,3",
                  "type" : "Literal"
               },
               "separator" : {
                  "localId" : "7",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : ";",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "13",
            "name" : "SeparateNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "13",
                  "s" : [ {
                     "value" : [ "","define ","SeparateNull",": " ]
                  }, {
                     "r" : "12",
                     "s" : [ {
                        "r" : "10",
                        "value" : [ "Split","(","null",", " ]
                     }, {
                        "r" : "11",
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
               "localId" : "12",
               "type" : "Split",
               "stringToSplit" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "operand" : {
                     "localId" : "10",
                     "type" : "Null"
                  }
               },
               "separator" : {
                  "localId" : "11",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : ",",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "17",
            "name" : "SeparateUsingNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "17",
                  "s" : [ {
                     "value" : [ "","define ","SeparateUsingNull",": " ]
                  }, {
                     "r" : "16",
                     "s" : [ {
                        "value" : [ "Split","(" ]
                     }, {
                        "r" : "14",
                        "s" : [ {
                           "value" : [ "'a,b,c'" ]
                        } ]
                     }, {
                        "r" : "15",
                        "value" : [ ", ","null",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "16",
               "type" : "Split",
               "stringToSplit" : {
                  "localId" : "14",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "a,b,c",
                  "type" : "Literal"
               },
               "separator" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "operand" : {
                     "localId" : "15",
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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "25",
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
            "localIdentifier" : "System",
            "uri" : "urn:hl7-org:elm-types:r1"
         }, {
            "localId" : "1",
            "localIdentifier" : "Simple",
            "uri" : "https://github.com/cqframework/cql-execution/simple",
            "version" : "1.0.0",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1",
                  "s" : [ {
                     "value" : [ "","using " ]
                  }, {
                     "s" : [ {
                        "value" : [ "Simple" ]
                     } ]
                  }, {
                     "value" : [ " version ","'1.0.0'" ]
                  } ]
               }
            } ]
         } ]
      },
      "contexts" : {
         "def" : [ {
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "type" : "SingletonFrom",
               "operand" : {
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve"
               }
            }
         }, {
            "localId" : "5",
            "name" : "SplitOnMatchesListReturn",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "5",
                  "s" : [ {
                     "value" : [ "","define ","SplitOnMatchesListReturn",": " ]
                  }, {
                     "r" : "4",
                     "s" : [ {
                        "value" : [ "SplitOnMatches","(" ]
                     }, {
                        "r" : "2",
                        "s" : [ {
                           "value" : [ "'foo 1,2three bar'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "3",
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
               "localId" : "4",
               "type" : "SplitOnMatches",
               "stringToSplit" : {
                  "localId" : "2",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "foo 1,2three bar",
                  "type" : "Literal"
               },
               "separatorPattern" : {
                  "localId" : "3",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "\\d,\\d\\w+",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "9",
            "name" : "SplitOnMatchesOriginalString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "9",
                  "s" : [ {
                     "value" : [ "","define ","SplitOnMatchesOriginalString",": " ]
                  }, {
                     "r" : "8",
                     "s" : [ {
                        "value" : [ "SplitOnMatches","(" ]
                     }, {
                        "r" : "6",
                        "s" : [ {
                           "value" : [ "'1,2three'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "7",
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
               "localId" : "8",
               "type" : "SplitOnMatches",
               "stringToSplit" : {
                  "localId" : "6",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "1,2three",
                  "type" : "Literal"
               },
               "separatorPattern" : {
                  "localId" : "7",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "\\w,\\w+",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "13",
            "name" : "SplitOnMatchesNoMatch",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "13",
                  "s" : [ {
                     "value" : [ "","define ","SplitOnMatchesNoMatch",": " ]
                  }, {
                     "r" : "12",
                     "s" : [ {
                        "value" : [ "SplitOnMatches","(" ]
                     }, {
                        "r" : "10",
                        "s" : [ {
                           "value" : [ "'foobar'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "11",
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
               "localId" : "12",
               "type" : "SplitOnMatches",
               "stringToSplit" : {
                  "localId" : "10",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "foobar",
                  "type" : "Literal"
               },
               "separatorPattern" : {
                  "localId" : "11",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "\\d",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "17",
            "name" : "SplitOnMatchesIsNullFirst",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "17",
                  "s" : [ {
                     "value" : [ "","define ","SplitOnMatchesIsNullFirst",": " ]
                  }, {
                     "r" : "16",
                     "s" : [ {
                        "r" : "14",
                        "value" : [ "SplitOnMatches","(","null",", " ]
                     }, {
                        "r" : "15",
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
               "localId" : "16",
               "type" : "SplitOnMatches",
               "stringToSplit" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "operand" : {
                     "localId" : "14",
                     "type" : "Null"
                  }
               },
               "separatorPattern" : {
                  "localId" : "15",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "\\w+",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "21",
            "name" : "SplitOnMatchesIsNullSecond",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "21",
                  "s" : [ {
                     "value" : [ "","define ","SplitOnMatchesIsNullSecond",": " ]
                  }, {
                     "r" : "20",
                     "s" : [ {
                        "value" : [ "SplitOnMatches","(" ]
                     }, {
                        "r" : "18",
                        "s" : [ {
                           "value" : [ "'12three'" ]
                        } ]
                     }, {
                        "r" : "19",
                        "value" : [ ", ","null",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "20",
               "type" : "SplitOnMatches",
               "stringToSplit" : {
                  "localId" : "18",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "12three",
                  "type" : "Literal"
               },
               "separatorPattern" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "operand" : {
                     "localId" : "19",
                     "type" : "Null"
                  }
               }
            }
         }, {
            "localId" : "25",
            "name" : "SplitOnMatchesAllNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "25",
                  "s" : [ {
                     "value" : [ "","define ","SplitOnMatchesAllNull",": " ]
                  }, {
                     "r" : "24",
                     "s" : [ {
                        "r" : "22",
                        "value" : [ "SplitOnMatches","(","null",", ","null",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "24",
               "type" : "SplitOnMatches",
               "stringToSplit" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "operand" : {
                     "localId" : "22",
                     "type" : "Null"
                  }
               },
               "separatorPattern" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "operand" : {
                     "localId" : "23",
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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "9",
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
            "localIdentifier" : "System",
            "uri" : "urn:hl7-org:elm-types:r1"
         }, {
            "localId" : "1",
            "localIdentifier" : "Simple",
            "uri" : "https://github.com/cqframework/cql-execution/simple",
            "version" : "1.0.0",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1",
                  "s" : [ {
                     "value" : [ "","using " ]
                  }, {
                     "s" : [ {
                        "value" : [ "Simple" ]
                     } ]
                  }, {
                     "value" : [ " version ","'1.0.0'" ]
                  } ]
               }
            } ]
         } ]
      },
      "contexts" : {
         "def" : [ {
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "type" : "SingletonFrom",
               "operand" : {
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve"
               }
            }
         }, {
            "localId" : "4",
            "name" : "ElevenLetters",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "4",
                  "s" : [ {
                     "value" : [ "","define ","ElevenLetters",": " ]
                  }, {
                     "r" : "3",
                     "s" : [ {
                        "value" : [ "Length","(" ]
                     }, {
                        "r" : "2",
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
               "localId" : "3",
               "type" : "Length",
               "operand" : {
                  "localId" : "2",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Hello World",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "9",
            "name" : "NullString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "9",
                  "s" : [ {
                     "value" : [ "","define ","NullString",": " ]
                  }, {
                     "r" : "8",
                     "s" : [ {
                        "value" : [ "Length","(" ]
                     }, {
                        "r" : "7",
                        "s" : [ {
                           "r" : "5",
                           "value" : [ "null"," as " ]
                        }, {
                           "r" : "6",
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
               "localId" : "8",
               "type" : "Length",
               "operand" : {
                  "localId" : "7",
                  "strict" : false,
                  "type" : "As",
                  "operand" : {
                     "localId" : "5",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "6",
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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "13",
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
            "localIdentifier" : "System",
            "uri" : "urn:hl7-org:elm-types:r1"
         }, {
            "localId" : "1",
            "localIdentifier" : "Simple",
            "uri" : "https://github.com/cqframework/cql-execution/simple",
            "version" : "1.0.0",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1",
                  "s" : [ {
                     "value" : [ "","using " ]
                  }, {
                     "s" : [ {
                        "value" : [ "Simple" ]
                     } ]
                  }, {
                     "value" : [ " version ","'1.0.0'" ]
                  } ]
               }
            } ]
         } ]
      },
      "contexts" : {
         "def" : [ {
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "type" : "SingletonFrom",
               "operand" : {
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve"
               }
            }
         }, {
            "localId" : "4",
            "name" : "LowerC",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "4",
                  "s" : [ {
                     "value" : [ "","define ","LowerC",": " ]
                  }, {
                     "r" : "3",
                     "s" : [ {
                        "value" : [ "Upper","(" ]
                     }, {
                        "r" : "2",
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
               "localId" : "3",
               "type" : "Upper",
               "operand" : {
                  "localId" : "2",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "abcdefg123",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "7",
            "name" : "UpperC",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "7",
                  "s" : [ {
                     "value" : [ "","define ","UpperC",": " ]
                  }, {
                     "r" : "6",
                     "s" : [ {
                        "value" : [ "Upper","(" ]
                     }, {
                        "r" : "5",
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
               "localId" : "6",
               "type" : "Upper",
               "operand" : {
                  "localId" : "5",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "ABCDEFG123",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "10",
            "name" : "CamelC",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "10",
                  "s" : [ {
                     "value" : [ "","define ","CamelC",": " ]
                  }, {
                     "r" : "9",
                     "s" : [ {
                        "value" : [ "Upper","(" ]
                     }, {
                        "r" : "8",
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
               "localId" : "9",
               "type" : "Upper",
               "operand" : {
                  "localId" : "8",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "aBcDeFg123",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "13",
            "name" : "NullString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "13",
                  "s" : [ {
                     "value" : [ "","define ","NullString",": " ]
                  }, {
                     "r" : "12",
                     "s" : [ {
                        "r" : "11",
                        "value" : [ "Upper","(","null",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "12",
               "type" : "Upper",
               "operand" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "operand" : {
                     "localId" : "11",
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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "13",
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
            "localIdentifier" : "System",
            "uri" : "urn:hl7-org:elm-types:r1"
         }, {
            "localId" : "1",
            "localIdentifier" : "Simple",
            "uri" : "https://github.com/cqframework/cql-execution/simple",
            "version" : "1.0.0",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1",
                  "s" : [ {
                     "value" : [ "","using " ]
                  }, {
                     "s" : [ {
                        "value" : [ "Simple" ]
                     } ]
                  }, {
                     "value" : [ " version ","'1.0.0'" ]
                  } ]
               }
            } ]
         } ]
      },
      "contexts" : {
         "def" : [ {
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "type" : "SingletonFrom",
               "operand" : {
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve"
               }
            }
         }, {
            "localId" : "4",
            "name" : "LowerC",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "4",
                  "s" : [ {
                     "value" : [ "","define ","LowerC",": " ]
                  }, {
                     "r" : "3",
                     "s" : [ {
                        "value" : [ "Lower","(" ]
                     }, {
                        "r" : "2",
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
               "localId" : "3",
               "type" : "Lower",
               "operand" : {
                  "localId" : "2",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "abcdefg123",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "7",
            "name" : "UpperC",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "7",
                  "s" : [ {
                     "value" : [ "","define ","UpperC",": " ]
                  }, {
                     "r" : "6",
                     "s" : [ {
                        "value" : [ "Lower","(" ]
                     }, {
                        "r" : "5",
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
               "localId" : "6",
               "type" : "Lower",
               "operand" : {
                  "localId" : "5",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "ABCDEFG123",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "10",
            "name" : "CamelC",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "10",
                  "s" : [ {
                     "value" : [ "","define ","CamelC",": " ]
                  }, {
                     "r" : "9",
                     "s" : [ {
                        "value" : [ "Lower","(" ]
                     }, {
                        "r" : "8",
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
               "localId" : "9",
               "type" : "Lower",
               "operand" : {
                  "localId" : "8",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "aBcDeFg123",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "13",
            "name" : "NullString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "13",
                  "s" : [ {
                     "value" : [ "","define ","NullString",": " ]
                  }, {
                     "r" : "12",
                     "s" : [ {
                        "r" : "11",
                        "value" : [ "Lower","(","null",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "12",
               "type" : "Lower",
               "operand" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "operand" : {
                     "localId" : "11",
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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "23",
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
            "localIdentifier" : "System",
            "uri" : "urn:hl7-org:elm-types:r1"
         }, {
            "localId" : "1",
            "localIdentifier" : "Simple",
            "uri" : "https://github.com/cqframework/cql-execution/simple",
            "version" : "1.0.0",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1",
                  "s" : [ {
                     "value" : [ "","using " ]
                  }, {
                     "s" : [ {
                        "value" : [ "Simple" ]
                     } ]
                  }, {
                     "value" : [ " version ","'1.0.0'" ]
                  } ]
               }
            } ]
         } ]
      },
      "contexts" : {
         "def" : [ {
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "type" : "SingletonFrom",
               "operand" : {
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve"
               }
            }
         }, {
            "localId" : "5",
            "name" : "HelloWorldSix",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "5",
                  "s" : [ {
                     "value" : [ "","define ","HelloWorldSix",": " ]
                  }, {
                     "r" : "4",
                     "s" : [ {
                        "r" : "2",
                        "s" : [ {
                           "value" : [ "'HelloWorld'" ]
                        } ]
                     }, {
                        "r" : "3",
                        "value" : [ "[","6","]" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "4",
               "type" : "Indexer",
               "operand" : [ {
                  "localId" : "2",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "HelloWorld",
                  "type" : "Literal"
               }, {
                  "localId" : "3",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "6",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "9",
            "name" : "HelloWorldZero",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "9",
                  "s" : [ {
                     "value" : [ "","define ","HelloWorldZero",": " ]
                  }, {
                     "r" : "8",
                     "s" : [ {
                        "r" : "6",
                        "s" : [ {
                           "value" : [ "'HelloWorld'" ]
                        } ]
                     }, {
                        "r" : "7",
                        "value" : [ "[","0","]" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "8",
               "type" : "Indexer",
               "operand" : [ {
                  "localId" : "6",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "HelloWorld",
                  "type" : "Literal"
               }, {
                  "localId" : "7",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "0",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "13",
            "name" : "HelloWorldTwenty",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "13",
                  "s" : [ {
                     "value" : [ "","define ","HelloWorldTwenty",": " ]
                  }, {
                     "r" : "12",
                     "s" : [ {
                        "r" : "10",
                        "s" : [ {
                           "value" : [ "'HelloWorld'" ]
                        } ]
                     }, {
                        "r" : "11",
                        "value" : [ "[","20","]" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "12",
               "type" : "Indexer",
               "operand" : [ {
                  "localId" : "10",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "HelloWorld",
                  "type" : "Literal"
               }, {
                  "localId" : "11",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "20",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "19",
            "name" : "NullString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "19",
                  "s" : [ {
                     "value" : [ "","define ","NullString",": " ]
                  }, {
                     "r" : "18",
                     "s" : [ {
                        "r" : "16",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "16",
                           "s" : [ {
                              "r" : "14",
                              "value" : [ "null"," as " ]
                           }, {
                              "r" : "15",
                              "s" : [ {
                                 "value" : [ "String" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "r" : "17",
                        "value" : [ "[","4","]" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "18",
               "type" : "Indexer",
               "operand" : [ {
                  "localId" : "16",
                  "strict" : false,
                  "type" : "As",
                  "operand" : {
                     "localId" : "14",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "15",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "17",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "4",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "23",
            "name" : "NullIndex",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "23",
                  "s" : [ {
                     "value" : [ "","define ","NullIndex",": " ]
                  }, {
                     "r" : "22",
                     "s" : [ {
                        "r" : "20",
                        "s" : [ {
                           "value" : [ "'HelloWorld'" ]
                        } ]
                     }, {
                        "r" : "21",
                        "value" : [ "[","null","]" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "22",
               "type" : "Indexer",
               "operand" : [ {
                  "localId" : "20",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "HelloWorld",
                  "type" : "Literal"
               }, {
                  "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "As",
                  "operand" : {
                     "localId" : "21",
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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "21",
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
            "localIdentifier" : "System",
            "uri" : "urn:hl7-org:elm-types:r1"
         }, {
            "localId" : "1",
            "localIdentifier" : "Simple",
            "uri" : "https://github.com/cqframework/cql-execution/simple",
            "version" : "1.0.0",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1",
                  "s" : [ {
                     "value" : [ "","using " ]
                  }, {
                     "s" : [ {
                        "value" : [ "Simple" ]
                     } ]
                  }, {
                     "value" : [ " version ","'1.0.0'" ]
                  } ]
               }
            } ]
         } ]
      },
      "contexts" : {
         "def" : [ {
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "type" : "SingletonFrom",
               "operand" : {
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve"
               }
            }
         }, {
            "localId" : "5",
            "name" : "MatchesTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "5",
                  "s" : [ {
                     "value" : [ "","define ","MatchesTrue",": " ]
                  }, {
                     "r" : "4",
                     "s" : [ {
                        "value" : [ "Matches","(" ]
                     }, {
                        "r" : "2",
                        "s" : [ {
                           "value" : [ "'1,2three'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "3",
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
               "localId" : "4",
               "type" : "Matches",
               "operand" : [ {
                  "localId" : "2",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "1,2three",
                  "type" : "Literal"
               }, {
                  "localId" : "3",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "\\d,\\d\\w+",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "9",
            "name" : "MatchesFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "9",
                  "s" : [ {
                     "value" : [ "","define ","MatchesFalse",": " ]
                  }, {
                     "r" : "8",
                     "s" : [ {
                        "value" : [ "Matches","(" ]
                     }, {
                        "r" : "6",
                        "s" : [ {
                           "value" : [ "'three'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "7",
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
               "localId" : "8",
               "type" : "Matches",
               "operand" : [ {
                  "localId" : "6",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "three",
                  "type" : "Literal"
               }, {
                  "localId" : "7",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "\\d",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "13",
            "name" : "MatchesIsNullFirst",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "13",
                  "s" : [ {
                     "value" : [ "","define ","MatchesIsNullFirst",": " ]
                  }, {
                     "r" : "12",
                     "s" : [ {
                        "r" : "10",
                        "value" : [ "Matches","(","null",", " ]
                     }, {
                        "r" : "11",
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
               "localId" : "12",
               "type" : "Matches",
               "operand" : [ {
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "operand" : {
                     "localId" : "10",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "11",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "\\w+",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "17",
            "name" : "MatchesIsNullSecond",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "17",
                  "s" : [ {
                     "value" : [ "","define ","MatchesIsNullSecond",": " ]
                  }, {
                     "r" : "16",
                     "s" : [ {
                        "value" : [ "Matches","(" ]
                     }, {
                        "r" : "14",
                        "s" : [ {
                           "value" : [ "'12three'" ]
                        } ]
                     }, {
                        "r" : "15",
                        "value" : [ ", ","null",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "16",
               "type" : "Matches",
               "operand" : [ {
                  "localId" : "14",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "12three",
                  "type" : "Literal"
               }, {
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "operand" : {
                     "localId" : "15",
                     "type" : "Null"
                  }
               } ]
            }
         }, {
            "localId" : "21",
            "name" : "MatchesAllNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "21",
                  "s" : [ {
                     "value" : [ "","define ","MatchesAllNull",": " ]
                  }, {
                     "r" : "20",
                     "s" : [ {
                        "r" : "18",
                        "value" : [ "Matches","(","null",", ","null",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "20",
               "type" : "Matches",
               "operand" : [ {
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "operand" : {
                     "localId" : "18",
                     "type" : "Null"
                  }
               }, {
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "operand" : {
                     "localId" : "19",
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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "17",
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
            "localIdentifier" : "System",
            "uri" : "urn:hl7-org:elm-types:r1"
         }, {
            "localId" : "1",
            "localIdentifier" : "Simple",
            "uri" : "https://github.com/cqframework/cql-execution/simple",
            "version" : "1.0.0",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1",
                  "s" : [ {
                     "value" : [ "","using " ]
                  }, {
                     "s" : [ {
                        "value" : [ "Simple" ]
                     } ]
                  }, {
                     "value" : [ " version ","'1.0.0'" ]
                  } ]
               }
            } ]
         } ]
      },
      "contexts" : {
         "def" : [ {
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "type" : "SingletonFrom",
               "operand" : {
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve"
               }
            }
         }, {
            "localId" : "5",
            "name" : "Found",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "5",
                  "s" : [ {
                     "value" : [ "","define ","Found",": " ]
                  }, {
                     "r" : "4",
                     "s" : [ {
                        "value" : [ "PositionOf","(" ]
                     }, {
                        "r" : "2",
                        "s" : [ {
                           "value" : [ "'cde'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "3",
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
               "localId" : "4",
               "type" : "PositionOf",
               "pattern" : {
                  "localId" : "2",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "cde",
                  "type" : "Literal"
               },
               "string" : {
                  "localId" : "3",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "abcdefg",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "9",
            "name" : "NotFound",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "9",
                  "s" : [ {
                     "value" : [ "","define ","NotFound",": " ]
                  }, {
                     "r" : "8",
                     "s" : [ {
                        "value" : [ "PositionOf","(" ]
                     }, {
                        "r" : "6",
                        "s" : [ {
                           "value" : [ "'fgh'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "7",
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
               "localId" : "8",
               "type" : "PositionOf",
               "pattern" : {
                  "localId" : "6",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "fgh",
                  "type" : "Literal"
               },
               "string" : {
                  "localId" : "7",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "abcdefg",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "13",
            "name" : "NullPattern",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "13",
                  "s" : [ {
                     "value" : [ "","define ","NullPattern",": " ]
                  }, {
                     "r" : "12",
                     "s" : [ {
                        "r" : "10",
                        "value" : [ "PositionOf","(","null",", " ]
                     }, {
                        "r" : "11",
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
               "localId" : "12",
               "type" : "PositionOf",
               "pattern" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "operand" : {
                     "localId" : "10",
                     "type" : "Null"
                  }
               },
               "string" : {
                  "localId" : "11",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "abcdefg",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "17",
            "name" : "NullString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "17",
                  "s" : [ {
                     "value" : [ "","define ","NullString",": " ]
                  }, {
                     "r" : "16",
                     "s" : [ {
                        "value" : [ "PositionOf","(" ]
                     }, {
                        "r" : "14",
                        "s" : [ {
                           "value" : [ "'cde'" ]
                        } ]
                     }, {
                        "r" : "15",
                        "value" : [ ", ","null",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "16",
               "type" : "PositionOf",
               "pattern" : {
                  "localId" : "14",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "cde",
                  "type" : "Literal"
               },
               "string" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "operand" : {
                     "localId" : "15",
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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "17",
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
            "localIdentifier" : "System",
            "uri" : "urn:hl7-org:elm-types:r1"
         }, {
            "localId" : "1",
            "localIdentifier" : "Simple",
            "uri" : "https://github.com/cqframework/cql-execution/simple",
            "version" : "1.0.0",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1",
                  "s" : [ {
                     "value" : [ "","using " ]
                  }, {
                     "s" : [ {
                        "value" : [ "Simple" ]
                     } ]
                  }, {
                     "value" : [ " version ","'1.0.0'" ]
                  } ]
               }
            } ]
         } ]
      },
      "contexts" : {
         "def" : [ {
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "type" : "SingletonFrom",
               "operand" : {
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve"
               }
            }
         }, {
            "localId" : "5",
            "name" : "Found",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "5",
                  "s" : [ {
                     "value" : [ "","define ","Found",": " ]
                  }, {
                     "r" : "4",
                     "s" : [ {
                        "value" : [ "LastPositionOf","(" ]
                     }, {
                        "r" : "2",
                        "s" : [ {
                           "value" : [ "'B'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "3",
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
               "localId" : "4",
               "type" : "LastPositionOf",
               "pattern" : {
                  "localId" : "2",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "B",
                  "type" : "Literal"
               },
               "string" : {
                  "localId" : "3",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "ABCDEDCBA",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "9",
            "name" : "NotFound",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "9",
                  "s" : [ {
                     "value" : [ "// 7","define ","NotFound",": " ]
                  }, {
                     "r" : "8",
                     "s" : [ {
                        "value" : [ "LastPositionOf","(" ]
                     }, {
                        "r" : "6",
                        "s" : [ {
                           "value" : [ "'XYZ'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "7",
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
               "localId" : "8",
               "type" : "LastPositionOf",
               "pattern" : {
                  "localId" : "6",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "XYZ",
                  "type" : "Literal"
               },
               "string" : {
                  "localId" : "7",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "ABCDE",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "13",
            "name" : "NullPattern",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "13",
                  "s" : [ {
                     "value" : [ "// -1","define ","NullPattern",": " ]
                  }, {
                     "r" : "12",
                     "s" : [ {
                        "r" : "10",
                        "value" : [ "LastPositionOf","(","null",", " ]
                     }, {
                        "r" : "11",
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
               "localId" : "12",
               "type" : "LastPositionOf",
               "pattern" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "operand" : {
                     "localId" : "10",
                     "type" : "Null"
                  }
               },
               "string" : {
                  "localId" : "11",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "ABCDE",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "17",
            "name" : "NullString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "17",
                  "s" : [ {
                     "value" : [ "// null","define ","NullString",": " ]
                  }, {
                     "r" : "16",
                     "s" : [ {
                        "value" : [ "LastPositionOf","(" ]
                     }, {
                        "r" : "14",
                        "s" : [ {
                           "value" : [ "'ABCDE'" ]
                        } ]
                     }, {
                        "r" : "15",
                        "value" : [ ", ","null",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "16",
               "type" : "LastPositionOf",
               "pattern" : {
                  "localId" : "14",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "ABCDE",
                  "type" : "Literal"
               },
               "string" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "operand" : {
                     "localId" : "15",
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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "43",
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
            "localIdentifier" : "System",
            "uri" : "urn:hl7-org:elm-types:r1"
         }, {
            "localId" : "1",
            "localIdentifier" : "Simple",
            "uri" : "https://github.com/cqframework/cql-execution/simple",
            "version" : "1.0.0",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1",
                  "s" : [ {
                     "value" : [ "","using " ]
                  }, {
                     "s" : [ {
                        "value" : [ "Simple" ]
                     } ]
                  }, {
                     "value" : [ " version ","'1.0.0'" ]
                  } ]
               }
            } ]
         } ]
      },
      "contexts" : {
         "def" : [ {
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "type" : "SingletonFrom",
               "operand" : {
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve"
               }
            }
         }, {
            "localId" : "5",
            "name" : "World",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "5",
                  "s" : [ {
                     "value" : [ "","define ","World",": " ]
                  }, {
                     "r" : "4",
                     "s" : [ {
                        "value" : [ "Substring","(" ]
                     }, {
                        "r" : "2",
                        "s" : [ {
                           "value" : [ "'HelloWorld'" ]
                        } ]
                     }, {
                        "r" : "3",
                        "value" : [ ", ","5",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "4",
               "type" : "Substring",
               "stringToSub" : {
                  "localId" : "2",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "HelloWorld",
                  "type" : "Literal"
               },
               "startIndex" : {
                  "localId" : "3",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "10",
            "name" : "Or",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "10",
                  "s" : [ {
                     "value" : [ "","define ","Or",": " ]
                  }, {
                     "r" : "9",
                     "s" : [ {
                        "value" : [ "Substring","(" ]
                     }, {
                        "r" : "6",
                        "s" : [ {
                           "value" : [ "'HelloWorld'" ]
                        } ]
                     }, {
                        "r" : "7",
                        "value" : [ ", ","7",", ","2",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "9",
               "type" : "Substring",
               "stringToSub" : {
                  "localId" : "6",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "HelloWorld",
                  "type" : "Literal"
               },
               "startIndex" : {
                  "localId" : "7",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "7",
                  "type" : "Literal"
               },
               "length" : {
                  "localId" : "8",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "15",
            "name" : "ZeroLength",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "15",
                  "s" : [ {
                     "value" : [ "","define ","ZeroLength",": " ]
                  }, {
                     "r" : "14",
                     "s" : [ {
                        "value" : [ "Substring","(" ]
                     }, {
                        "r" : "11",
                        "s" : [ {
                           "value" : [ "'HelloWorld'" ]
                        } ]
                     }, {
                        "r" : "12",
                        "value" : [ ", ","7",", ","0",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "14",
               "type" : "Substring",
               "stringToSub" : {
                  "localId" : "11",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "HelloWorld",
                  "type" : "Literal"
               },
               "startIndex" : {
                  "localId" : "12",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "7",
                  "type" : "Literal"
               },
               "length" : {
                  "localId" : "13",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "0",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "20",
            "name" : "StartTooLow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "20",
                  "s" : [ {
                     "value" : [ "","define ","StartTooLow",": " ]
                  }, {
                     "r" : "19",
                     "s" : [ {
                        "value" : [ "Substring","(" ]
                     }, {
                        "r" : "16",
                        "s" : [ {
                           "value" : [ "'HelloWorld'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "18",
                        "s" : [ {
                           "r" : "17",
                           "value" : [ "-","1" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "19",
               "type" : "Substring",
               "stringToSub" : {
                  "localId" : "16",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "HelloWorld",
                  "type" : "Literal"
               },
               "startIndex" : {
                  "localId" : "18",
                  "type" : "Negate",
                  "operand" : {
                     "localId" : "17",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "24",
            "name" : "StartZero",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "24",
                  "s" : [ {
                     "value" : [ "","define ","StartZero",": " ]
                  }, {
                     "r" : "23",
                     "s" : [ {
                        "value" : [ "Substring","(" ]
                     }, {
                        "r" : "21",
                        "s" : [ {
                           "value" : [ "'HelloWorld'" ]
                        } ]
                     }, {
                        "r" : "22",
                        "value" : [ ", ","0",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "23",
               "type" : "Substring",
               "stringToSub" : {
                  "localId" : "21",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "HelloWorld",
                  "type" : "Literal"
               },
               "startIndex" : {
                  "localId" : "22",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "0",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "29",
            "name" : "TooMuchLength",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "29",
                  "s" : [ {
                     "value" : [ "","define ","TooMuchLength",": " ]
                  }, {
                     "r" : "28",
                     "s" : [ {
                        "value" : [ "Substring","(" ]
                     }, {
                        "r" : "25",
                        "s" : [ {
                           "value" : [ "'HelloWorld'" ]
                        } ]
                     }, {
                        "r" : "26",
                        "value" : [ ", ","7",", ","25",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "28",
               "type" : "Substring",
               "stringToSub" : {
                  "localId" : "25",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "HelloWorld",
                  "type" : "Literal"
               },
               "startIndex" : {
                  "localId" : "26",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "7",
                  "type" : "Literal"
               },
               "length" : {
                  "localId" : "27",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "25",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "35",
            "name" : "NegativeLength",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "35",
                  "s" : [ {
                     "value" : [ "","define ","NegativeLength",": " ]
                  }, {
                     "r" : "34",
                     "s" : [ {
                        "value" : [ "Substring","(" ]
                     }, {
                        "r" : "30",
                        "s" : [ {
                           "value" : [ "'HelloWorld'" ]
                        } ]
                     }, {
                        "r" : "31",
                        "value" : [ ", ","7",", " ]
                     }, {
                        "r" : "33",
                        "s" : [ {
                           "r" : "32",
                           "value" : [ "-","1" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "34",
               "type" : "Substring",
               "stringToSub" : {
                  "localId" : "30",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "HelloWorld",
                  "type" : "Literal"
               },
               "startIndex" : {
                  "localId" : "31",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "7",
                  "type" : "Literal"
               },
               "length" : {
                  "localId" : "33",
                  "type" : "Negate",
                  "operand" : {
                     "localId" : "32",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "39",
            "name" : "NullString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "39",
                  "s" : [ {
                     "value" : [ "","define ","NullString",": " ]
                  }, {
                     "r" : "38",
                     "s" : [ {
                        "r" : "36",
                        "value" : [ "Substring","(","null",", ","5",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "38",
               "type" : "Substring",
               "stringToSub" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "operand" : {
                     "localId" : "36",
                     "type" : "Null"
                  }
               },
               "startIndex" : {
                  "localId" : "37",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "43",
            "name" : "NullStart",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "43",
                  "s" : [ {
                     "value" : [ "","define ","NullStart",": " ]
                  }, {
                     "r" : "42",
                     "s" : [ {
                        "value" : [ "Substring","(" ]
                     }, {
                        "r" : "40",
                        "s" : [ {
                           "value" : [ "'HelloWorld'" ]
                        } ]
                     }, {
                        "r" : "41",
                        "value" : [ ", ","null",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "42",
               "type" : "Substring",
               "stringToSub" : {
                  "localId" : "40",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "HelloWorld",
                  "type" : "Literal"
               },
               "startIndex" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "As",
                  "operand" : {
                     "localId" : "41",
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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "37",
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
            "localIdentifier" : "System",
            "uri" : "urn:hl7-org:elm-types:r1"
         }, {
            "localId" : "1",
            "localIdentifier" : "Simple",
            "uri" : "https://github.com/cqframework/cql-execution/simple",
            "version" : "1.0.0",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1",
                  "s" : [ {
                     "value" : [ "","using " ]
                  }, {
                     "s" : [ {
                        "value" : [ "Simple" ]
                     } ]
                  }, {
                     "value" : [ " version ","'1.0.0'" ]
                  } ]
               }
            } ]
         } ]
      },
      "contexts" : {
         "def" : [ {
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "type" : "SingletonFrom",
               "operand" : {
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve"
               }
            }
         }, {
            "localId" : "5",
            "name" : "FooBarStartsWithFoo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "5",
                  "s" : [ {
                     "value" : [ "","define ","FooBarStartsWithFoo",": " ]
                  }, {
                     "r" : "4",
                     "s" : [ {
                        "value" : [ "StartsWith","(" ]
                     }, {
                        "r" : "2",
                        "s" : [ {
                           "value" : [ "'FooBar'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "3",
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
               "localId" : "4",
               "type" : "StartsWith",
               "operand" : [ {
                  "localId" : "2",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "FooBar",
                  "type" : "Literal"
               }, {
                  "localId" : "3",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Foo",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "9",
            "name" : "FooBarStartsWithBar",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "9",
                  "s" : [ {
                     "value" : [ "","define ","FooBarStartsWithBar",": " ]
                  }, {
                     "r" : "8",
                     "s" : [ {
                        "value" : [ "StartsWith","(" ]
                     }, {
                        "r" : "6",
                        "s" : [ {
                           "value" : [ "'FooBar'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "7",
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
               "localId" : "8",
               "type" : "StartsWith",
               "operand" : [ {
                  "localId" : "6",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "FooBar",
                  "type" : "Literal"
               }, {
                  "localId" : "7",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Bar",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "13",
            "name" : "FooBarStartsWithBlank",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "13",
                  "s" : [ {
                     "value" : [ "","define ","FooBarStartsWithBlank",": " ]
                  }, {
                     "r" : "12",
                     "s" : [ {
                        "value" : [ "StartsWith","(" ]
                     }, {
                        "r" : "10",
                        "s" : [ {
                           "value" : [ "'FooBar'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "11",
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
               "localId" : "12",
               "type" : "StartsWith",
               "operand" : [ {
                  "localId" : "10",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "FooBar",
                  "type" : "Literal"
               }, {
                  "localId" : "11",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "17",
            "name" : "BlankStartsWithFoo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "17",
                  "s" : [ {
                     "value" : [ "","define ","BlankStartsWithFoo",": " ]
                  }, {
                     "r" : "16",
                     "s" : [ {
                        "value" : [ "StartsWith","(" ]
                     }, {
                        "r" : "14",
                        "s" : [ {
                           "value" : [ "''" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "15",
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
               "localId" : "16",
               "type" : "StartsWith",
               "operand" : [ {
                  "localId" : "14",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "",
                  "type" : "Literal"
               }, {
                  "localId" : "15",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Foo",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "21",
            "name" : "StartsWithNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "21",
                  "s" : [ {
                     "value" : [ "","define ","StartsWithNull",": " ]
                  }, {
                     "r" : "20",
                     "s" : [ {
                        "value" : [ "StartsWith","(" ]
                     }, {
                        "r" : "18",
                        "s" : [ {
                           "value" : [ "'FooBar'" ]
                        } ]
                     }, {
                        "r" : "19",
                        "value" : [ ", ","null",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "20",
               "type" : "StartsWith",
               "operand" : [ {
                  "localId" : "18",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "FooBar",
                  "type" : "Literal"
               }, {
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "operand" : {
                     "localId" : "19",
                     "type" : "Null"
                  }
               } ]
            }
         }, {
            "localId" : "27",
            "name" : "StartsWithNullAsString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "27",
                  "s" : [ {
                     "value" : [ "","define ","StartsWithNullAsString",": " ]
                  }, {
                     "r" : "26",
                     "s" : [ {
                        "value" : [ "StartsWith","(" ]
                     }, {
                        "r" : "22",
                        "s" : [ {
                           "value" : [ "'FooBar'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "25",
                        "s" : [ {
                           "r" : "23",
                           "value" : [ "null"," as " ]
                        }, {
                           "r" : "24",
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
               "localId" : "26",
               "type" : "StartsWith",
               "operand" : [ {
                  "localId" : "22",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "FooBar",
                  "type" : "Literal"
               }, {
                  "localId" : "25",
                  "strict" : false,
                  "type" : "As",
                  "operand" : {
                     "localId" : "23",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "24",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               } ]
            }
         }, {
            "localId" : "31",
            "name" : "NullStartsWith",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "31",
                  "s" : [ {
                     "value" : [ "","define ","NullStartsWith",": " ]
                  }, {
                     "r" : "30",
                     "s" : [ {
                        "r" : "28",
                        "value" : [ "StartsWith","(","null",", " ]
                     }, {
                        "r" : "29",
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
               "localId" : "30",
               "type" : "StartsWith",
               "operand" : [ {
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "operand" : {
                     "localId" : "28",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "29",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Foo",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "37",
            "name" : "NullAsStringStartsWith",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "37",
                  "s" : [ {
                     "value" : [ "","define ","NullAsStringStartsWith",": " ]
                  }, {
                     "r" : "36",
                     "s" : [ {
                        "value" : [ "StartsWith","(" ]
                     }, {
                        "r" : "34",
                        "s" : [ {
                           "r" : "32",
                           "value" : [ "null"," as " ]
                        }, {
                           "r" : "33",
                           "s" : [ {
                              "value" : [ "String" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "35",
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
               "localId" : "36",
               "type" : "StartsWith",
               "operand" : [ {
                  "localId" : "34",
                  "strict" : false,
                  "type" : "As",
                  "operand" : {
                     "localId" : "32",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "33",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "35",
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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "39",
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
            "localIdentifier" : "System",
            "uri" : "urn:hl7-org:elm-types:r1"
         }, {
            "localId" : "1",
            "localIdentifier" : "Simple",
            "uri" : "https://github.com/cqframework/cql-execution/simple",
            "version" : "1.0.0",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1",
                  "s" : [ {
                     "value" : [ "","using " ]
                  }, {
                     "s" : [ {
                        "value" : [ "Simple" ]
                     } ]
                  }, {
                     "value" : [ " version ","'1.0.0'" ]
                  } ]
               }
            } ]
         } ]
      },
      "contexts" : {
         "def" : [ {
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "type" : "SingletonFrom",
               "operand" : {
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve"
               }
            }
         }, {
            "localId" : "5",
            "name" : "FooBarEndsWithBar",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "5",
                  "s" : [ {
                     "value" : [ "","define ","FooBarEndsWithBar",": " ]
                  }, {
                     "r" : "4",
                     "s" : [ {
                        "value" : [ "EndsWith","(" ]
                     }, {
                        "r" : "2",
                        "s" : [ {
                           "value" : [ "'FooBar'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "3",
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
               "localId" : "4",
               "type" : "EndsWith",
               "operand" : [ {
                  "localId" : "2",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "FooBar",
                  "type" : "Literal"
               }, {
                  "localId" : "3",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Bar",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "9",
            "name" : "FooBarEndsWithFoo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "9",
                  "s" : [ {
                     "value" : [ "","define ","FooBarEndsWithFoo",": " ]
                  }, {
                     "r" : "8",
                     "s" : [ {
                        "value" : [ "EndsWith","(" ]
                     }, {
                        "r" : "6",
                        "s" : [ {
                           "value" : [ "'FooBar'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "7",
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
               "localId" : "8",
               "type" : "EndsWith",
               "operand" : [ {
                  "localId" : "6",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "FooBar",
                  "type" : "Literal"
               }, {
                  "localId" : "7",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Foo",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "13",
            "name" : "FooBarEndsWithBlank",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "13",
                  "s" : [ {
                     "value" : [ "","define ","FooBarEndsWithBlank",": " ]
                  }, {
                     "r" : "12",
                     "s" : [ {
                        "value" : [ "EndsWith","(" ]
                     }, {
                        "r" : "10",
                        "s" : [ {
                           "value" : [ "'FooBar'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "11",
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
               "localId" : "12",
               "type" : "EndsWith",
               "operand" : [ {
                  "localId" : "10",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "FooBar",
                  "type" : "Literal"
               }, {
                  "localId" : "11",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "17",
            "name" : "BlankEndsWithFoo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "17",
                  "s" : [ {
                     "value" : [ "","define ","BlankEndsWithFoo",": " ]
                  }, {
                     "r" : "16",
                     "s" : [ {
                        "value" : [ "EndsWith","(" ]
                     }, {
                        "r" : "14",
                        "s" : [ {
                           "value" : [ "''" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "15",
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
               "localId" : "16",
               "type" : "EndsWith",
               "operand" : [ {
                  "localId" : "14",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "",
                  "type" : "Literal"
               }, {
                  "localId" : "15",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Foo",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "21",
            "name" : "EndsWithNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "21",
                  "s" : [ {
                     "value" : [ "","define ","EndsWithNull",": " ]
                  }, {
                     "r" : "20",
                     "s" : [ {
                        "value" : [ "EndsWith","(" ]
                     }, {
                        "r" : "18",
                        "s" : [ {
                           "value" : [ "'FooBar'" ]
                        } ]
                     }, {
                        "r" : "19",
                        "value" : [ ", ","null",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "20",
               "type" : "EndsWith",
               "operand" : [ {
                  "localId" : "18",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "FooBar",
                  "type" : "Literal"
               }, {
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "operand" : {
                     "localId" : "19",
                     "type" : "Null"
                  }
               } ]
            }
         }, {
            "localId" : "27",
            "name" : "EndsWithNullAsString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "27",
                  "s" : [ {
                     "value" : [ "","define ","EndsWithNullAsString",": " ]
                  }, {
                     "r" : "26",
                     "s" : [ {
                        "value" : [ "EndsWith","(" ]
                     }, {
                        "r" : "22",
                        "s" : [ {
                           "value" : [ "'FooBar'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "25",
                        "s" : [ {
                           "r" : "23",
                           "value" : [ "null"," as " ]
                        }, {
                           "r" : "24",
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
               "localId" : "26",
               "type" : "EndsWith",
               "operand" : [ {
                  "localId" : "22",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "FooBar",
                  "type" : "Literal"
               }, {
                  "localId" : "25",
                  "strict" : false,
                  "type" : "As",
                  "operand" : {
                     "localId" : "23",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "24",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               } ]
            }
         }, {
            "localId" : "33",
            "name" : "NullEndsWith",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "33",
                  "s" : [ {
                     "value" : [ "","define ","NullEndsWith",": " ]
                  }, {
                     "r" : "32",
                     "s" : [ {
                        "value" : [ "EndsWith","(" ]
                     }, {
                        "r" : "30",
                        "s" : [ {
                           "r" : "28",
                           "value" : [ "null"," as " ]
                        }, {
                           "r" : "29",
                           "s" : [ {
                              "value" : [ "String" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "31",
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
               "localId" : "32",
               "type" : "EndsWith",
               "operand" : [ {
                  "localId" : "30",
                  "strict" : false,
                  "type" : "As",
                  "operand" : {
                     "localId" : "28",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "29",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "31",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Foo",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "39",
            "name" : "NullAsStringEndsWith",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "39",
                  "s" : [ {
                     "value" : [ "","define ","NullAsStringEndsWith",": " ]
                  }, {
                     "r" : "38",
                     "s" : [ {
                        "value" : [ "EndsWith","(" ]
                     }, {
                        "r" : "36",
                        "s" : [ {
                           "r" : "34",
                           "value" : [ "null"," as " ]
                        }, {
                           "r" : "35",
                           "s" : [ {
                              "value" : [ "String" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "37",
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
               "localId" : "38",
               "type" : "EndsWith",
               "operand" : [ {
                  "localId" : "36",
                  "strict" : false,
                  "type" : "As",
                  "operand" : {
                     "localId" : "34",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "35",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "37",
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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "61",
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
            "localIdentifier" : "System",
            "uri" : "urn:hl7-org:elm-types:r1"
         }, {
            "localId" : "1",
            "localIdentifier" : "Simple",
            "uri" : "https://github.com/cqframework/cql-execution/simple",
            "version" : "1.0.0",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1",
                  "s" : [ {
                     "value" : [ "","using " ]
                  }, {
                     "s" : [ {
                        "value" : [ "Simple" ]
                     } ]
                  }, {
                     "value" : [ " version ","'1.0.0'" ]
                  } ]
               }
            } ]
         } ]
      },
      "contexts" : {
         "def" : [ {
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "type" : "SingletonFrom",
               "operand" : {
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve"
               }
            }
         }, {
            "localId" : "6",
            "name" : "ReplaceOne",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "6",
                  "s" : [ {
                     "value" : [ "","define ","ReplaceOne",": " ]
                  }, {
                     "r" : "5",
                     "s" : [ {
                        "value" : [ "ReplaceMatches","(" ]
                     }, {
                        "r" : "2",
                        "s" : [ {
                           "value" : [ "'FooBar'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "3",
                        "s" : [ {
                           "value" : [ "'Bar'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "4",
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
               "localId" : "5",
               "type" : "ReplaceMatches",
               "operand" : [ {
                  "localId" : "2",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "FooBar",
                  "type" : "Literal"
               }, {
                  "localId" : "3",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Bar",
                  "type" : "Literal"
               }, {
                  "localId" : "4",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Baz",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "11",
            "name" : "ReplaceMany",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "11",
                  "s" : [ {
                     "value" : [ "","define ","ReplaceMany",": " ]
                  }, {
                     "r" : "10",
                     "s" : [ {
                        "value" : [ "ReplaceMatches","(" ]
                     }, {
                        "r" : "7",
                        "s" : [ {
                           "value" : [ "'FooBarFooBarFooBar'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "8",
                        "s" : [ {
                           "value" : [ "'Bar'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "9",
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
               "localId" : "10",
               "type" : "ReplaceMatches",
               "operand" : [ {
                  "localId" : "7",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "FooBarFooBarFooBar",
                  "type" : "Literal"
               }, {
                  "localId" : "8",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Bar",
                  "type" : "Literal"
               }, {
                  "localId" : "9",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Baz",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "16",
            "name" : "ReplaceCapital",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "16",
                  "s" : [ {
                     "value" : [ "","define ","ReplaceCapital",": " ]
                  }, {
                     "r" : "15",
                     "s" : [ {
                        "value" : [ "ReplaceMatches","(" ]
                     }, {
                        "r" : "12",
                        "s" : [ {
                           "value" : [ "'Tattle'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "13",
                        "s" : [ {
                           "value" : [ "'T'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "14",
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
               "localId" : "15",
               "type" : "ReplaceMatches",
               "operand" : [ {
                  "localId" : "12",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Tattle",
                  "type" : "Literal"
               }, {
                  "localId" : "13",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "T",
                  "type" : "Literal"
               }, {
                  "localId" : "14",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "R",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "21",
            "name" : "ReplaceDiacritical",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "21",
                  "s" : [ {
                     "value" : [ "","define ","ReplaceDiacritical",": " ]
                  }, {
                     "r" : "20",
                     "s" : [ {
                        "value" : [ "ReplaceMatches","(" ]
                     }, {
                        "r" : "17",
                        "s" : [ {
                           "value" : [ "'Cafè'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "18",
                        "s" : [ {
                           "value" : [ "'è'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "19",
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
               "localId" : "20",
               "type" : "ReplaceMatches",
               "operand" : [ {
                  "localId" : "17",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Cafè",
                  "type" : "Literal"
               }, {
                  "localId" : "18",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "è",
                  "type" : "Literal"
               }, {
                  "localId" : "19",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "é",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "26",
            "name" : "ReplaceUnicode",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "26",
                  "s" : [ {
                     "value" : [ "","define ","ReplaceUnicode",": " ]
                  }, {
                     "r" : "25",
                     "s" : [ {
                        "value" : [ "ReplaceMatches","(" ]
                     }, {
                        "r" : "22",
                        "s" : [ {
                           "value" : [ "'Turn that frown \uD83D\uDE41 upside down! \uD83D\uDE03'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "23",
                        "s" : [ {
                           "value" : [ "'\uD83D\uDE41'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "24",
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
               "localId" : "25",
               "type" : "ReplaceMatches",
               "operand" : [ {
                  "localId" : "22",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Turn that frown \uD83D\uDE41 upside down! \uD83D\uDE03",
                  "type" : "Literal"
               }, {
                  "localId" : "23",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "\uD83D\uDE41",
                  "type" : "Literal"
               }, {
                  "localId" : "24",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "\uD83D\uDE03",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "31",
            "name" : "ReplaceSpace",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "31",
                  "s" : [ {
                     "value" : [ "","define ","ReplaceSpace",": " ]
                  }, {
                     "r" : "30",
                     "s" : [ {
                        "value" : [ "ReplaceMatches","(" ]
                     }, {
                        "r" : "27",
                        "s" : [ {
                           "value" : [ "'(123) 456 7890'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "28",
                        "s" : [ {
                           "value" : [ "'\\\\s'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "29",
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
               "localId" : "30",
               "type" : "ReplaceMatches",
               "operand" : [ {
                  "localId" : "27",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "(123) 456 7890",
                  "type" : "Literal"
               }, {
                  "localId" : "28",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "\\s",
                  "type" : "Literal"
               }, {
                  "localId" : "29",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "-",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "36",
            "name" : "ReplaceEmpty",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "36",
                  "s" : [ {
                     "value" : [ "","define ","ReplaceEmpty",": " ]
                  }, {
                     "r" : "35",
                     "s" : [ {
                        "value" : [ "ReplaceMatches","(" ]
                     }, {
                        "r" : "32",
                        "s" : [ {
                           "value" : [ "'FooBar'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "33",
                        "s" : [ {
                           "value" : [ "''" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "34",
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
               "localId" : "35",
               "type" : "ReplaceMatches",
               "operand" : [ {
                  "localId" : "32",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "FooBar",
                  "type" : "Literal"
               }, {
                  "localId" : "33",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "",
                  "type" : "Literal"
               }, {
                  "localId" : "34",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : ".",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "41",
            "name" : "ReplaceMatchGroups",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "41",
                  "s" : [ {
                     "value" : [ "","define ","ReplaceMatchGroups",": " ]
                  }, {
                     "r" : "40",
                     "s" : [ {
                        "value" : [ "ReplaceMatches","(" ]
                     }, {
                        "r" : "37",
                        "s" : [ {
                           "value" : [ "'Foo[123]'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "38",
                        "s" : [ {
                           "value" : [ "'Foo\\\\[(\\\\d+)]'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "39",
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
               "localId" : "40",
               "type" : "ReplaceMatches",
               "operand" : [ {
                  "localId" : "37",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Foo[123]",
                  "type" : "Literal"
               }, {
                  "localId" : "38",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Foo\\[(\\d+)]",
                  "type" : "Literal"
               }, {
                  "localId" : "39",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Bar[$1]",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "46",
            "name" : "ReplaceNone",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "46",
                  "s" : [ {
                     "value" : [ "","define ","ReplaceNone",": " ]
                  }, {
                     "r" : "45",
                     "s" : [ {
                        "value" : [ "ReplaceMatches","(" ]
                     }, {
                        "r" : "42",
                        "s" : [ {
                           "value" : [ "'Foo'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "43",
                        "s" : [ {
                           "value" : [ "'Bar'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "44",
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
               "localId" : "45",
               "type" : "ReplaceMatches",
               "operand" : [ {
                  "localId" : "42",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Foo",
                  "type" : "Literal"
               }, {
                  "localId" : "43",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Bar",
                  "type" : "Literal"
               }, {
                  "localId" : "44",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Baz",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "51",
            "name" : "ReplaceArgumentIsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "51",
                  "s" : [ {
                     "value" : [ "","define ","ReplaceArgumentIsNull",": " ]
                  }, {
                     "r" : "50",
                     "s" : [ {
                        "r" : "47",
                        "value" : [ "ReplaceMatches","(","null",", " ]
                     }, {
                        "r" : "48",
                        "s" : [ {
                           "value" : [ "'Bar'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "49",
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
               "localId" : "50",
               "type" : "ReplaceMatches",
               "operand" : [ {
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "operand" : {
                     "localId" : "47",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "48",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Bar",
                  "type" : "Literal"
               }, {
                  "localId" : "49",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Baz",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "56",
            "name" : "ReplacePatternIsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "56",
                  "s" : [ {
                     "value" : [ "","define ","ReplacePatternIsNull",": " ]
                  }, {
                     "r" : "55",
                     "s" : [ {
                        "value" : [ "ReplaceMatches","(" ]
                     }, {
                        "r" : "52",
                        "s" : [ {
                           "value" : [ "'Foo'" ]
                        } ]
                     }, {
                        "r" : "53",
                        "value" : [ ", ","null",", " ]
                     }, {
                        "r" : "54",
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
               "localId" : "55",
               "type" : "ReplaceMatches",
               "operand" : [ {
                  "localId" : "52",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Foo",
                  "type" : "Literal"
               }, {
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "operand" : {
                     "localId" : "53",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "54",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Baz",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "61",
            "name" : "ReplaceSubstitutionIsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "61",
                  "s" : [ {
                     "value" : [ "","define ","ReplaceSubstitutionIsNull",": " ]
                  }, {
                     "r" : "60",
                     "s" : [ {
                        "value" : [ "ReplaceMatches","(" ]
                     }, {
                        "r" : "57",
                        "s" : [ {
                           "value" : [ "'Foo'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "58",
                        "s" : [ {
                           "value" : [ "'Bar'" ]
                        } ]
                     }, {
                        "r" : "59",
                        "value" : [ ", ","null",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "60",
               "type" : "ReplaceMatches",
               "operand" : [ {
                  "localId" : "57",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Foo",
                  "type" : "Literal"
               }, {
                  "localId" : "58",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Bar",
                  "type" : "Literal"
               }, {
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "operand" : {
                     "localId" : "59",
                     "type" : "Null"
                  }
               } ]
            }
         } ]
      }
   }
}

