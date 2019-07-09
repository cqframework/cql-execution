###
   WARNING: This is a GENERATED file.  Do not manually edit!

   To generate this file:
       - Edit data.cql to add a CQL Snippet
       - From java dir: ./gradlew :cql-to-elm:generateTestData
###

### Add
library TestSnippet version '1'
using QUICK
context Patient
define Ten: 10
define Eleven: 11
define OnePlusTwo: 1 + 2
define AddMultiple: 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10
define AddVariables: Ten + Eleven
###

module.exports['Add'] = {
   "library" : {
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
            "localIdentifier" : "QUICK",
            "uri" : "http://hl7.org/fhir"
         } ]
      },
      "statements" : {
         "def" : [ {
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "type" : "SingletonFrom",
               "operand" : {
                  "dataType" : "{http://hl7.org/fhir}Patient",
                  "templateId" : "patient-qicore-qicore-patient",
                  "type" : "Retrieve"
               }
            }
         }, {
            "localId" : "3",
            "name" : "Ten",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "3",
                  "s" : [ {
                     "r" : "2",
                     "value" : [ "define ","Ten",": ","10" ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "2",
               "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
               "value" : "10",
               "type" : "Literal"
            }
         }, {
            "localId" : "5",
            "name" : "Eleven",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "5",
                  "s" : [ {
                     "r" : "4",
                     "value" : [ "define ","Eleven",": ","11" ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "4",
               "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
               "value" : "11",
               "type" : "Literal"
            }
         }, {
            "localId" : "9",
            "name" : "OnePlusTwo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "9",
                  "s" : [ {
                     "value" : [ "define ","OnePlusTwo",": " ]
                  }, {
                     "r" : "8",
                     "s" : [ {
                        "r" : "6",
                        "value" : [ "1"," + ","2" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "8",
               "type" : "Add",
               "operand" : [ {
                  "localId" : "6",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               }, {
                  "localId" : "7",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "29",
            "name" : "AddMultiple",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "29",
                  "s" : [ {
                     "value" : [ "define ","AddMultiple",": " ]
                  }, {
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
                                                "value" : [ "1"," + ","2" ]
                                             } ]
                                          }, {
                                             "r" : "13",
                                             "value" : [ " + ","3" ]
                                          } ]
                                       }, {
                                          "r" : "15",
                                          "value" : [ " + ","4" ]
                                       } ]
                                    }, {
                                       "r" : "17",
                                       "value" : [ " + ","5" ]
                                    } ]
                                 }, {
                                    "r" : "19",
                                    "value" : [ " + ","6" ]
                                 } ]
                              }, {
                                 "r" : "21",
                                 "value" : [ " + ","7" ]
                              } ]
                           }, {
                              "r" : "23",
                              "value" : [ " + ","8" ]
                           } ]
                        }, {
                           "r" : "25",
                           "value" : [ " + ","9" ]
                        } ]
                     }, {
                        "r" : "27",
                        "value" : [ " + ","10" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "28",
               "type" : "Add",
               "operand" : [ {
                  "localId" : "26",
                  "type" : "Add",
                  "operand" : [ {
                     "localId" : "24",
                     "type" : "Add",
                     "operand" : [ {
                        "localId" : "22",
                        "type" : "Add",
                        "operand" : [ {
                           "localId" : "20",
                           "type" : "Add",
                           "operand" : [ {
                              "localId" : "18",
                              "type" : "Add",
                              "operand" : [ {
                                 "localId" : "16",
                                 "type" : "Add",
                                 "operand" : [ {
                                    "localId" : "14",
                                    "type" : "Add",
                                    "operand" : [ {
                                       "localId" : "12",
                                       "type" : "Add",
                                       "operand" : [ {
                                          "localId" : "10",
                                          "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                          "value" : "1",
                                          "type" : "Literal"
                                       }, {
                                          "localId" : "11",
                                          "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                          "value" : "2",
                                          "type" : "Literal"
                                       } ]
                                    }, {
                                       "localId" : "13",
                                       "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                       "value" : "3",
                                       "type" : "Literal"
                                    } ]
                                 }, {
                                    "localId" : "15",
                                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                    "value" : "4",
                                    "type" : "Literal"
                                 } ]
                              }, {
                                 "localId" : "17",
                                 "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "value" : "5",
                                 "type" : "Literal"
                              } ]
                           }, {
                              "localId" : "19",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "6",
                              "type" : "Literal"
                           } ]
                        }, {
                           "localId" : "21",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "7",
                           "type" : "Literal"
                        } ]
                     }, {
                        "localId" : "23",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "8",
                        "type" : "Literal"
                     } ]
                  }, {
                     "localId" : "25",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "9",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "27",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "10",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "33",
            "name" : "AddVariables",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "33",
                  "s" : [ {
                     "value" : [ "define ","AddVariables",": " ]
                  }, {
                     "r" : "32",
                     "s" : [ {
                        "r" : "30",
                        "s" : [ {
                           "value" : [ "Ten" ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "31",
                        "s" : [ {
                           "value" : [ "Eleven" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "32",
               "type" : "Add",
               "operand" : [ {
                  "localId" : "30",
                  "name" : "Ten",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "31",
                  "name" : "Eleven",
                  "type" : "ExpressionRef"
               } ]
            }
         } ]
      }
   }
}

### Subtract
library TestSnippet version '1'
using QUICK
context Patient
define Ten: 10
define Eleven: 11
define FiveMinusTwo: 5 - 2
define SubtractMultiple: 100 - 50 - 25 - 10
define SubtractVariables: Eleven - Ten
###

module.exports['Subtract'] = {
   "library" : {
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
            "localIdentifier" : "QUICK",
            "uri" : "http://hl7.org/fhir"
         } ]
      },
      "statements" : {
         "def" : [ {
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "type" : "SingletonFrom",
               "operand" : {
                  "dataType" : "{http://hl7.org/fhir}Patient",
                  "templateId" : "patient-qicore-qicore-patient",
                  "type" : "Retrieve"
               }
            }
         }, {
            "localId" : "3",
            "name" : "Ten",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "3",
                  "s" : [ {
                     "r" : "2",
                     "value" : [ "define ","Ten",": ","10" ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "2",
               "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
               "value" : "10",
               "type" : "Literal"
            }
         }, {
            "localId" : "5",
            "name" : "Eleven",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "5",
                  "s" : [ {
                     "r" : "4",
                     "value" : [ "define ","Eleven",": ","11" ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "4",
               "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
               "value" : "11",
               "type" : "Literal"
            }
         }, {
            "localId" : "9",
            "name" : "FiveMinusTwo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "9",
                  "s" : [ {
                     "value" : [ "define ","FiveMinusTwo",": " ]
                  }, {
                     "r" : "8",
                     "s" : [ {
                        "r" : "6",
                        "value" : [ "5"," - ","2" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "8",
               "type" : "Subtract",
               "operand" : [ {
                  "localId" : "6",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               }, {
                  "localId" : "7",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "17",
            "name" : "SubtractMultiple",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "17",
                  "s" : [ {
                     "value" : [ "define ","SubtractMultiple",": " ]
                  }, {
                     "r" : "16",
                     "s" : [ {
                        "r" : "14",
                        "s" : [ {
                           "r" : "12",
                           "s" : [ {
                              "r" : "10",
                              "value" : [ "100"," - ","50" ]
                           } ]
                        }, {
                           "r" : "13",
                           "value" : [ " - ","25" ]
                        } ]
                     }, {
                        "r" : "15",
                        "value" : [ " - ","10" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "16",
               "type" : "Subtract",
               "operand" : [ {
                  "localId" : "14",
                  "type" : "Subtract",
                  "operand" : [ {
                     "localId" : "12",
                     "type" : "Subtract",
                     "operand" : [ {
                        "localId" : "10",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "100",
                        "type" : "Literal"
                     }, {
                        "localId" : "11",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "50",
                        "type" : "Literal"
                     } ]
                  }, {
                     "localId" : "13",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "25",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "15",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "10",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "21",
            "name" : "SubtractVariables",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "21",
                  "s" : [ {
                     "value" : [ "define ","SubtractVariables",": " ]
                  }, {
                     "r" : "20",
                     "s" : [ {
                        "r" : "18",
                        "s" : [ {
                           "value" : [ "Eleven" ]
                        } ]
                     }, {
                        "value" : [ " - " ]
                     }, {
                        "r" : "19",
                        "s" : [ {
                           "value" : [ "Ten" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "20",
               "type" : "Subtract",
               "operand" : [ {
                  "localId" : "18",
                  "name" : "Eleven",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "19",
                  "name" : "Ten",
                  "type" : "ExpressionRef"
               } ]
            }
         } ]
      }
   }
}

### Multiply
library TestSnippet version '1'
using QUICK
context Patient
define Ten: 10
define Eleven: 11
define FiveTimesTwo: 5 * 2
define MultiplyMultiple: 1 * 2 * 3 * 4 * 5
define MultiplyVariables: Eleven * Ten
###

module.exports['Multiply'] = {
   "library" : {
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
            "localIdentifier" : "QUICK",
            "uri" : "http://hl7.org/fhir"
         } ]
      },
      "statements" : {
         "def" : [ {
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "type" : "SingletonFrom",
               "operand" : {
                  "dataType" : "{http://hl7.org/fhir}Patient",
                  "templateId" : "patient-qicore-qicore-patient",
                  "type" : "Retrieve"
               }
            }
         }, {
            "localId" : "3",
            "name" : "Ten",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "3",
                  "s" : [ {
                     "r" : "2",
                     "value" : [ "define ","Ten",": ","10" ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "2",
               "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
               "value" : "10",
               "type" : "Literal"
            }
         }, {
            "localId" : "5",
            "name" : "Eleven",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "5",
                  "s" : [ {
                     "r" : "4",
                     "value" : [ "define ","Eleven",": ","11" ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "4",
               "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
               "value" : "11",
               "type" : "Literal"
            }
         }, {
            "localId" : "9",
            "name" : "FiveTimesTwo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "9",
                  "s" : [ {
                     "value" : [ "define ","FiveTimesTwo",": " ]
                  }, {
                     "r" : "8",
                     "s" : [ {
                        "r" : "6",
                        "value" : [ "5"," * ","2" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "8",
               "type" : "Multiply",
               "operand" : [ {
                  "localId" : "6",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               }, {
                  "localId" : "7",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "19",
            "name" : "MultiplyMultiple",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "19",
                  "s" : [ {
                     "value" : [ "define ","MultiplyMultiple",": " ]
                  }, {
                     "r" : "18",
                     "s" : [ {
                        "r" : "16",
                        "s" : [ {
                           "r" : "14",
                           "s" : [ {
                              "r" : "12",
                              "s" : [ {
                                 "r" : "10",
                                 "value" : [ "1"," * ","2" ]
                              } ]
                           }, {
                              "r" : "13",
                              "value" : [ " * ","3" ]
                           } ]
                        }, {
                           "r" : "15",
                           "value" : [ " * ","4" ]
                        } ]
                     }, {
                        "r" : "17",
                        "value" : [ " * ","5" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "18",
               "type" : "Multiply",
               "operand" : [ {
                  "localId" : "16",
                  "type" : "Multiply",
                  "operand" : [ {
                     "localId" : "14",
                     "type" : "Multiply",
                     "operand" : [ {
                        "localId" : "12",
                        "type" : "Multiply",
                        "operand" : [ {
                           "localId" : "10",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }, {
                           "localId" : "11",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        } ]
                     }, {
                        "localId" : "13",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     } ]
                  }, {
                     "localId" : "15",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "17",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "23",
            "name" : "MultiplyVariables",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "23",
                  "s" : [ {
                     "value" : [ "define ","MultiplyVariables",": " ]
                  }, {
                     "r" : "22",
                     "s" : [ {
                        "r" : "20",
                        "s" : [ {
                           "value" : [ "Eleven" ]
                        } ]
                     }, {
                        "value" : [ " * " ]
                     }, {
                        "r" : "21",
                        "s" : [ {
                           "value" : [ "Ten" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "22",
               "type" : "Multiply",
               "operand" : [ {
                  "localId" : "20",
                  "name" : "Eleven",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "21",
                  "name" : "Ten",
                  "type" : "ExpressionRef"
               } ]
            }
         } ]
      }
   }
}

### Divide
library TestSnippet version '1'
using QUICK
context Patient
define Hundred: 100
define Four: 4
define TenDividedByTwo: 10 / 2
define TenDividedByFour: 10 / 4
define DivideMultiple: 1000 / 4 / 10 / 5
define DivideVariables: Hundred / Four
###

module.exports['Divide'] = {
   "library" : {
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
            "localIdentifier" : "QUICK",
            "uri" : "http://hl7.org/fhir"
         } ]
      },
      "statements" : {
         "def" : [ {
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "type" : "SingletonFrom",
               "operand" : {
                  "dataType" : "{http://hl7.org/fhir}Patient",
                  "templateId" : "patient-qicore-qicore-patient",
                  "type" : "Retrieve"
               }
            }
         }, {
            "localId" : "3",
            "name" : "Hundred",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "3",
                  "s" : [ {
                     "r" : "2",
                     "value" : [ "define ","Hundred",": ","100" ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "2",
               "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
               "value" : "100",
               "type" : "Literal"
            }
         }, {
            "localId" : "5",
            "name" : "Four",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "5",
                  "s" : [ {
                     "r" : "4",
                     "value" : [ "define ","Four",": ","4" ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "4",
               "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
               "value" : "4",
               "type" : "Literal"
            }
         }, {
            "localId" : "9",
            "name" : "TenDividedByTwo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "9",
                  "s" : [ {
                     "value" : [ "define ","TenDividedByTwo",": " ]
                  }, {
                     "r" : "8",
                     "s" : [ {
                        "r" : "6",
                        "value" : [ "10"," / ","2" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "8",
               "type" : "Divide",
               "operand" : [ {
                  "type" : "ToDecimal",
                  "operand" : {
                     "localId" : "6",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "10",
                     "type" : "Literal"
                  }
               }, {
                  "type" : "ToDecimal",
                  "operand" : {
                     "localId" : "7",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "13",
            "name" : "TenDividedByFour",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "13",
                  "s" : [ {
                     "value" : [ "define ","TenDividedByFour",": " ]
                  }, {
                     "r" : "12",
                     "s" : [ {
                        "r" : "10",
                        "value" : [ "10"," / ","4" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "12",
               "type" : "Divide",
               "operand" : [ {
                  "type" : "ToDecimal",
                  "operand" : {
                     "localId" : "10",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "10",
                     "type" : "Literal"
                  }
               }, {
                  "type" : "ToDecimal",
                  "operand" : {
                     "localId" : "11",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "21",
            "name" : "DivideMultiple",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "21",
                  "s" : [ {
                     "value" : [ "define ","DivideMultiple",": " ]
                  }, {
                     "r" : "20",
                     "s" : [ {
                        "r" : "18",
                        "s" : [ {
                           "r" : "16",
                           "s" : [ {
                              "r" : "14",
                              "value" : [ "1000"," / ","4" ]
                           } ]
                        }, {
                           "r" : "17",
                           "value" : [ " / ","10" ]
                        } ]
                     }, {
                        "r" : "19",
                        "value" : [ " / ","5" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "20",
               "type" : "Divide",
               "operand" : [ {
                  "localId" : "18",
                  "type" : "Divide",
                  "operand" : [ {
                     "localId" : "16",
                     "type" : "Divide",
                     "operand" : [ {
                        "type" : "ToDecimal",
                        "operand" : {
                           "localId" : "14",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1000",
                           "type" : "Literal"
                        }
                     }, {
                        "type" : "ToDecimal",
                        "operand" : {
                           "localId" : "15",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "4",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "type" : "ToDecimal",
                     "operand" : {
                        "localId" : "17",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "10",
                        "type" : "Literal"
                     }
                  } ]
               }, {
                  "type" : "ToDecimal",
                  "operand" : {
                     "localId" : "19",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "25",
            "name" : "DivideVariables",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "25",
                  "s" : [ {
                     "value" : [ "define ","DivideVariables",": " ]
                  }, {
                     "r" : "24",
                     "s" : [ {
                        "r" : "22",
                        "s" : [ {
                           "value" : [ "Hundred" ]
                        } ]
                     }, {
                        "value" : [ " / " ]
                     }, {
                        "r" : "23",
                        "s" : [ {
                           "value" : [ "Four" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "24",
               "type" : "Divide",
               "operand" : [ {
                  "type" : "ToDecimal",
                  "operand" : {
                     "localId" : "22",
                     "name" : "Hundred",
                     "type" : "ExpressionRef"
                  }
               }, {
                  "type" : "ToDecimal",
                  "operand" : {
                     "localId" : "23",
                     "name" : "Four",
                     "type" : "ExpressionRef"
                  }
               } ]
            }
         } ]
      }
   }
}

### Negate
library TestSnippet version '1'
using QUICK
context Patient
define NegativeOne: -1
###

module.exports['Negate'] = {
   "library" : {
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
            "localIdentifier" : "QUICK",
            "uri" : "http://hl7.org/fhir"
         } ]
      },
      "statements" : {
         "def" : [ {
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "type" : "SingletonFrom",
               "operand" : {
                  "dataType" : "{http://hl7.org/fhir}Patient",
                  "templateId" : "patient-qicore-qicore-patient",
                  "type" : "Retrieve"
               }
            }
         }, {
            "localId" : "4",
            "name" : "NegativeOne",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "4",
                  "s" : [ {
                     "value" : [ "define ","NegativeOne",": " ]
                  }, {
                     "r" : "3",
                     "s" : [ {
                        "r" : "2",
                        "value" : [ "-","1" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "3",
               "type" : "Negate",
               "operand" : {
                  "localId" : "2",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               }
            }
         } ]
      }
   }
}

### MathPrecedence
library TestSnippet version '1'
using QUICK
context Patient
define Mixed: 1 + 5 * 10 - 15 / 3
define Parenthetical: (1 + 5) * (10 - 15) / 3
###

module.exports['MathPrecedence'] = {
   "library" : {
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
            "localIdentifier" : "QUICK",
            "uri" : "http://hl7.org/fhir"
         } ]
      },
      "statements" : {
         "def" : [ {
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "type" : "SingletonFrom",
               "operand" : {
                  "dataType" : "{http://hl7.org/fhir}Patient",
                  "templateId" : "patient-qicore-qicore-patient",
                  "type" : "Retrieve"
               }
            }
         }, {
            "localId" : "11",
            "name" : "Mixed",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "11",
                  "s" : [ {
                     "value" : [ "define ","Mixed",": " ]
                  }, {
                     "r" : "10",
                     "s" : [ {
                        "r" : "6",
                        "s" : [ {
                           "r" : "2",
                           "value" : [ "1"," + " ]
                        }, {
                           "r" : "5",
                           "s" : [ {
                              "r" : "3",
                              "value" : [ "5"," * ","10" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " - " ]
                     }, {
                        "r" : "9",
                        "s" : [ {
                           "r" : "7",
                           "value" : [ "15"," / ","3" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "10",
               "type" : "Subtract",
               "operand" : [ {
                  "type" : "ToDecimal",
                  "operand" : {
                     "localId" : "6",
                     "type" : "Add",
                     "operand" : [ {
                        "localId" : "2",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }, {
                        "localId" : "5",
                        "type" : "Multiply",
                        "operand" : [ {
                           "localId" : "3",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "5",
                           "type" : "Literal"
                        }, {
                           "localId" : "4",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "10",
                           "type" : "Literal"
                        } ]
                     } ]
                  }
               }, {
                  "localId" : "9",
                  "type" : "Divide",
                  "operand" : [ {
                     "type" : "ToDecimal",
                     "operand" : {
                        "localId" : "7",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "15",
                        "type" : "Literal"
                     }
                  }, {
                     "type" : "ToDecimal",
                     "operand" : {
                        "localId" : "8",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }
                  } ]
               } ]
            }
         }, {
            "localId" : "21",
            "name" : "Parenthetical",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "21",
                  "s" : [ {
                     "value" : [ "define ","Parenthetical",": " ]
                  }, {
                     "r" : "20",
                     "s" : [ {
                        "r" : "18",
                        "s" : [ {
                           "r" : "14",
                           "s" : [ {
                              "value" : [ "(" ]
                           }, {
                              "r" : "14",
                              "s" : [ {
                                 "r" : "12",
                                 "value" : [ "1"," + ","5" ]
                              } ]
                           }, {
                              "value" : [ ")" ]
                           } ]
                        }, {
                           "value" : [ " * " ]
                        }, {
                           "r" : "17",
                           "s" : [ {
                              "value" : [ "(" ]
                           }, {
                              "r" : "17",
                              "s" : [ {
                                 "r" : "15",
                                 "value" : [ "10"," - ","15" ]
                              } ]
                           }, {
                              "value" : [ ")" ]
                           } ]
                        } ]
                     }, {
                        "r" : "19",
                        "value" : [ " / ","3" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "20",
               "type" : "Divide",
               "operand" : [ {
                  "type" : "ToDecimal",
                  "operand" : {
                     "localId" : "18",
                     "type" : "Multiply",
                     "operand" : [ {
                        "localId" : "14",
                        "type" : "Add",
                        "operand" : [ {
                           "localId" : "12",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }, {
                           "localId" : "13",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "5",
                           "type" : "Literal"
                        } ]
                     }, {
                        "localId" : "17",
                        "type" : "Subtract",
                        "operand" : [ {
                           "localId" : "15",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "10",
                           "type" : "Literal"
                        }, {
                           "localId" : "16",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "15",
                           "type" : "Literal"
                        } ]
                     } ]
                  }
               }, {
                  "type" : "ToDecimal",
                  "operand" : {
                     "localId" : "19",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }
               } ]
            }
         } ]
      }
   }
}

### Power
library TestSnippet version '1'
using QUICK
context Patient
define Pow: 3 ^ 4
###

module.exports['Power'] = {
   "library" : {
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
            "localIdentifier" : "QUICK",
            "uri" : "http://hl7.org/fhir"
         } ]
      },
      "statements" : {
         "def" : [ {
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "type" : "SingletonFrom",
               "operand" : {
                  "dataType" : "{http://hl7.org/fhir}Patient",
                  "templateId" : "patient-qicore-qicore-patient",
                  "type" : "Retrieve"
               }
            }
         }, {
            "localId" : "5",
            "name" : "Pow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "5",
                  "s" : [ {
                     "value" : [ "define ","Pow",": " ]
                  }, {
                     "r" : "4",
                     "s" : [ {
                        "r" : "2",
                        "value" : [ "3"," ^ ","4" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "4",
               "type" : "Power",
               "operand" : [ {
                  "localId" : "2",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "3",
                  "type" : "Literal"
               }, {
                  "localId" : "3",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "4",
                  "type" : "Literal"
               } ]
            }
         } ]
      }
   }
}

### MinValue
library TestSnippet version '1'
using QUICK
context Patient
define MinInteger: minimum Integer
define MinDecimal: minimum Decimal
define MinDateTime: minimum  DateTime
define MinTime: minimum Time
define MinWrongType: minimum Quantity
###

module.exports['MinValue'] = {
   "library" : {
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
            "localIdentifier" : "QUICK",
            "uri" : "http://hl7.org/fhir"
         } ]
      },
      "statements" : {
         "def" : [ {
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "type" : "SingletonFrom",
               "operand" : {
                  "dataType" : "{http://hl7.org/fhir}Patient",
                  "templateId" : "patient-qicore-qicore-patient",
                  "type" : "Retrieve"
               }
            }
         }, {
            "localId" : "4",
            "name" : "MinInteger",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "4",
                  "s" : [ {
                     "value" : [ "define ","MinInteger",": " ]
                  }, {
                     "r" : "3",
                     "s" : [ {
                        "value" : [ "minimum"," " ]
                     }, {
                        "r" : "2",
                        "s" : [ {
                           "value" : [ "Integer" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "3",
               "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "MinValue"
            }
         }, {
            "localId" : "7",
            "name" : "MinDecimal",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "7",
                  "s" : [ {
                     "value" : [ "define ","MinDecimal",": " ]
                  }, {
                     "r" : "6",
                     "s" : [ {
                        "value" : [ "minimum"," " ]
                     }, {
                        "r" : "5",
                        "s" : [ {
                           "value" : [ "Decimal" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "6",
               "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "MinValue"
            }
         }, {
            "localId" : "10",
            "name" : "MinDateTime",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "10",
                  "s" : [ {
                     "value" : [ "define ","MinDateTime",": " ]
                  }, {
                     "r" : "9",
                     "s" : [ {
                        "value" : [ "minimum","  " ]
                     }, {
                        "r" : "8",
                        "s" : [ {
                           "value" : [ "DateTime" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "9",
               "valueType" : "{urn:hl7-org:elm-types:r1}DateTime",
               "type" : "MinValue"
            }
         }, {
            "localId" : "13",
            "name" : "MinTime",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "13",
                  "s" : [ {
                     "value" : [ "define ","MinTime",": " ]
                  }, {
                     "r" : "12",
                     "s" : [ {
                        "value" : [ "minimum"," " ]
                     }, {
                        "r" : "11",
                        "s" : [ {
                           "value" : [ "Time" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "12",
               "valueType" : "{urn:hl7-org:elm-types:r1}Time",
               "type" : "MinValue"
            }
         }, {
            "localId" : "16",
            "name" : "MinWrongType",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "16",
                  "s" : [ {
                     "value" : [ "define ","MinWrongType",": " ]
                  }, {
                     "r" : "15",
                     "s" : [ {
                        "value" : [ "minimum"," " ]
                     }, {
                        "r" : "14",
                        "s" : [ {
                           "value" : [ "Quantity" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "15",
               "valueType" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "MinValue"
            }
         } ]
      }
   }
}

### MaxValue
library TestSnippet version '1'
using QUICK
context Patient
define MaxInteger: maximum Integer
define MaxDecimal: maximum Decimal
define MaxDateTime: maximum DateTime
define MaxTime: maximum Time
define MaxWrongType: maximum Quantity
###

module.exports['MaxValue'] = {
   "library" : {
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
            "localIdentifier" : "QUICK",
            "uri" : "http://hl7.org/fhir"
         } ]
      },
      "statements" : {
         "def" : [ {
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "type" : "SingletonFrom",
               "operand" : {
                  "dataType" : "{http://hl7.org/fhir}Patient",
                  "templateId" : "patient-qicore-qicore-patient",
                  "type" : "Retrieve"
               }
            }
         }, {
            "localId" : "4",
            "name" : "MaxInteger",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "4",
                  "s" : [ {
                     "value" : [ "define ","MaxInteger",": " ]
                  }, {
                     "r" : "3",
                     "s" : [ {
                        "value" : [ "maximum"," " ]
                     }, {
                        "r" : "2",
                        "s" : [ {
                           "value" : [ "Integer" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "3",
               "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "MaxValue"
            }
         }, {
            "localId" : "7",
            "name" : "MaxDecimal",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "7",
                  "s" : [ {
                     "value" : [ "define ","MaxDecimal",": " ]
                  }, {
                     "r" : "6",
                     "s" : [ {
                        "value" : [ "maximum"," " ]
                     }, {
                        "r" : "5",
                        "s" : [ {
                           "value" : [ "Decimal" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "6",
               "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "MaxValue"
            }
         }, {
            "localId" : "10",
            "name" : "MaxDateTime",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "10",
                  "s" : [ {
                     "value" : [ "define ","MaxDateTime",": " ]
                  }, {
                     "r" : "9",
                     "s" : [ {
                        "value" : [ "maximum"," " ]
                     }, {
                        "r" : "8",
                        "s" : [ {
                           "value" : [ "DateTime" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "9",
               "valueType" : "{urn:hl7-org:elm-types:r1}DateTime",
               "type" : "MaxValue"
            }
         }, {
            "localId" : "13",
            "name" : "MaxTime",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "13",
                  "s" : [ {
                     "value" : [ "define ","MaxTime",": " ]
                  }, {
                     "r" : "12",
                     "s" : [ {
                        "value" : [ "maximum"," " ]
                     }, {
                        "r" : "11",
                        "s" : [ {
                           "value" : [ "Time" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "12",
               "valueType" : "{urn:hl7-org:elm-types:r1}Time",
               "type" : "MaxValue"
            }
         }, {
            "localId" : "16",
            "name" : "MaxWrongType",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "16",
                  "s" : [ {
                     "value" : [ "define ","MaxWrongType",": " ]
                  }, {
                     "r" : "15",
                     "s" : [ {
                        "value" : [ "maximum"," " ]
                     }, {
                        "r" : "14",
                        "s" : [ {
                           "value" : [ "Quantity" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "15",
               "valueType" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "MaxValue"
            }
         } ]
      }
   }
}

### TruncatedDivide
library TestSnippet version '1'
using QUICK
context Patient
define Trunc: 10 div 3
define Even: 9 div 3
###

module.exports['TruncatedDivide'] = {
   "library" : {
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
            "localIdentifier" : "QUICK",
            "uri" : "http://hl7.org/fhir"
         } ]
      },
      "statements" : {
         "def" : [ {
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "type" : "SingletonFrom",
               "operand" : {
                  "dataType" : "{http://hl7.org/fhir}Patient",
                  "templateId" : "patient-qicore-qicore-patient",
                  "type" : "Retrieve"
               }
            }
         }, {
            "localId" : "5",
            "name" : "Trunc",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "5",
                  "s" : [ {
                     "value" : [ "define ","Trunc",": " ]
                  }, {
                     "r" : "4",
                     "s" : [ {
                        "r" : "2",
                        "value" : [ "10"," div ","3" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "4",
               "type" : "TruncatedDivide",
               "operand" : [ {
                  "localId" : "2",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "10",
                  "type" : "Literal"
               }, {
                  "localId" : "3",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "3",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "9",
            "name" : "Even",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "9",
                  "s" : [ {
                     "value" : [ "define ","Even",": " ]
                  }, {
                     "r" : "8",
                     "s" : [ {
                        "r" : "6",
                        "value" : [ "9"," div ","3" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "8",
               "type" : "TruncatedDivide",
               "operand" : [ {
                  "localId" : "6",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "9",
                  "type" : "Literal"
               }, {
                  "localId" : "7",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "3",
                  "type" : "Literal"
               } ]
            }
         } ]
      }
   }
}

### Modulo
library TestSnippet version '1'
using QUICK
context Patient
define Mod: 3 mod 2
###

module.exports['Modulo'] = {
   "library" : {
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
            "localIdentifier" : "QUICK",
            "uri" : "http://hl7.org/fhir"
         } ]
      },
      "statements" : {
         "def" : [ {
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "type" : "SingletonFrom",
               "operand" : {
                  "dataType" : "{http://hl7.org/fhir}Patient",
                  "templateId" : "patient-qicore-qicore-patient",
                  "type" : "Retrieve"
               }
            }
         }, {
            "localId" : "5",
            "name" : "Mod",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "5",
                  "s" : [ {
                     "value" : [ "define ","Mod",": " ]
                  }, {
                     "r" : "4",
                     "s" : [ {
                        "r" : "2",
                        "value" : [ "3"," mod ","2" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "4",
               "type" : "Modulo",
               "operand" : [ {
                  "localId" : "2",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "3",
                  "type" : "Literal"
               }, {
                  "localId" : "3",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "type" : "Literal"
               } ]
            }
         } ]
      }
   }
}

### Ceiling
library TestSnippet version '1'
using QUICK
context Patient
define Ceil: Ceiling(10.1)
define Even: Ceiling(10)
###

module.exports['Ceiling'] = {
   "library" : {
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
            "localIdentifier" : "QUICK",
            "uri" : "http://hl7.org/fhir"
         } ]
      },
      "statements" : {
         "def" : [ {
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "type" : "SingletonFrom",
               "operand" : {
                  "dataType" : "{http://hl7.org/fhir}Patient",
                  "templateId" : "patient-qicore-qicore-patient",
                  "type" : "Retrieve"
               }
            }
         }, {
            "localId" : "4",
            "name" : "Ceil",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "4",
                  "s" : [ {
                     "value" : [ "define ","Ceil",": " ]
                  }, {
                     "r" : "3",
                     "s" : [ {
                        "r" : "2",
                        "value" : [ "Ceiling","(","10.1",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "3",
               "type" : "Ceiling",
               "operand" : {
                  "localId" : "2",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "10.1",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "7",
            "name" : "Even",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "7",
                  "s" : [ {
                     "value" : [ "define ","Even",": " ]
                  }, {
                     "r" : "6",
                     "s" : [ {
                        "r" : "5",
                        "value" : [ "Ceiling","(","10",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "6",
               "type" : "Ceiling",
               "operand" : {
                  "type" : "ToDecimal",
                  "operand" : {
                     "localId" : "5",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "10",
                     "type" : "Literal"
                  }
               }
            }
         } ]
      }
   }
}

### Floor
library TestSnippet version '1'
using QUICK
context Patient
define flr: Floor(10.1)
define Even: Floor(10)
###

module.exports['Floor'] = {
   "library" : {
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
            "localIdentifier" : "QUICK",
            "uri" : "http://hl7.org/fhir"
         } ]
      },
      "statements" : {
         "def" : [ {
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "type" : "SingletonFrom",
               "operand" : {
                  "dataType" : "{http://hl7.org/fhir}Patient",
                  "templateId" : "patient-qicore-qicore-patient",
                  "type" : "Retrieve"
               }
            }
         }, {
            "localId" : "4",
            "name" : "flr",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "4",
                  "s" : [ {
                     "value" : [ "define ","flr",": " ]
                  }, {
                     "r" : "3",
                     "s" : [ {
                        "r" : "2",
                        "value" : [ "Floor","(","10.1",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "3",
               "type" : "Floor",
               "operand" : {
                  "localId" : "2",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "10.1",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "7",
            "name" : "Even",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "7",
                  "s" : [ {
                     "value" : [ "define ","Even",": " ]
                  }, {
                     "r" : "6",
                     "s" : [ {
                        "r" : "5",
                        "value" : [ "Floor","(","10",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "6",
               "type" : "Floor",
               "operand" : {
                  "type" : "ToDecimal",
                  "operand" : {
                     "localId" : "5",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "10",
                     "type" : "Literal"
                  }
               }
            }
         } ]
      }
   }
}

### Truncate
library TestSnippet version '1'
using QUICK
context Patient
define Trunc: Truncate(10.1)
define Even: Truncate(10)
###

module.exports['Truncate'] = {
   "library" : {
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
            "localIdentifier" : "QUICK",
            "uri" : "http://hl7.org/fhir"
         } ]
      },
      "statements" : {
         "def" : [ {
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "type" : "SingletonFrom",
               "operand" : {
                  "dataType" : "{http://hl7.org/fhir}Patient",
                  "templateId" : "patient-qicore-qicore-patient",
                  "type" : "Retrieve"
               }
            }
         }, {
            "localId" : "4",
            "name" : "Trunc",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "4",
                  "s" : [ {
                     "value" : [ "define ","Trunc",": " ]
                  }, {
                     "r" : "3",
                     "s" : [ {
                        "r" : "2",
                        "value" : [ "Truncate","(","10.1",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "3",
               "type" : "Truncate",
               "operand" : {
                  "localId" : "2",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "10.1",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "7",
            "name" : "Even",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "7",
                  "s" : [ {
                     "value" : [ "define ","Even",": " ]
                  }, {
                     "r" : "6",
                     "s" : [ {
                        "r" : "5",
                        "value" : [ "Truncate","(","10",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "6",
               "type" : "Truncate",
               "operand" : {
                  "type" : "ToDecimal",
                  "operand" : {
                     "localId" : "5",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "10",
                     "type" : "Literal"
                  }
               }
            }
         } ]
      }
   }
}

### Abs
library TestSnippet version '1'
using QUICK
context Patient
define Pos: Abs(10)
define Neg: Abs(-10)
define Zero: Abs(0)
###

module.exports['Abs'] = {
   "library" : {
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
            "localIdentifier" : "QUICK",
            "uri" : "http://hl7.org/fhir"
         } ]
      },
      "statements" : {
         "def" : [ {
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "type" : "SingletonFrom",
               "operand" : {
                  "dataType" : "{http://hl7.org/fhir}Patient",
                  "templateId" : "patient-qicore-qicore-patient",
                  "type" : "Retrieve"
               }
            }
         }, {
            "localId" : "4",
            "name" : "Pos",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "4",
                  "s" : [ {
                     "value" : [ "define ","Pos",": " ]
                  }, {
                     "r" : "3",
                     "s" : [ {
                        "r" : "2",
                        "value" : [ "Abs","(","10",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "3",
               "type" : "Abs",
               "operand" : {
                  "localId" : "2",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "10",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "8",
            "name" : "Neg",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "8",
                  "s" : [ {
                     "value" : [ "define ","Neg",": " ]
                  }, {
                     "r" : "7",
                     "s" : [ {
                        "value" : [ "Abs","(" ]
                     }, {
                        "r" : "6",
                        "s" : [ {
                           "r" : "5",
                           "value" : [ "-","10" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "7",
               "type" : "Abs",
               "operand" : {
                  "localId" : "6",
                  "type" : "Negate",
                  "operand" : {
                     "localId" : "5",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "10",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "11",
            "name" : "Zero",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "11",
                  "s" : [ {
                     "value" : [ "define ","Zero",": " ]
                  }, {
                     "r" : "10",
                     "s" : [ {
                        "r" : "9",
                        "value" : [ "Abs","(","0",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "10",
               "type" : "Abs",
               "operand" : {
                  "localId" : "9",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "0",
                  "type" : "Literal"
               }
            }
         } ]
      }
   }
}

### Round
library TestSnippet version '1'
using QUICK
context Patient
define Up: Round(4.56)
define Up_percent: Round(4.56,1)
define Down: Round(4.49)
define Down_percent: Round(4.43,1)
###

module.exports['Round'] = {
   "library" : {
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
            "localIdentifier" : "QUICK",
            "uri" : "http://hl7.org/fhir"
         } ]
      },
      "statements" : {
         "def" : [ {
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "type" : "SingletonFrom",
               "operand" : {
                  "dataType" : "{http://hl7.org/fhir}Patient",
                  "templateId" : "patient-qicore-qicore-patient",
                  "type" : "Retrieve"
               }
            }
         }, {
            "localId" : "4",
            "name" : "Up",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "4",
                  "s" : [ {
                     "value" : [ "define ","Up",": " ]
                  }, {
                     "r" : "3",
                     "s" : [ {
                        "r" : "2",
                        "value" : [ "Round","(","4.56",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "3",
               "type" : "Round",
               "operand" : {
                  "localId" : "2",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "4.56",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "8",
            "name" : "Up_percent",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "8",
                  "s" : [ {
                     "value" : [ "define ","Up_percent",": " ]
                  }, {
                     "r" : "7",
                     "s" : [ {
                        "r" : "5",
                        "value" : [ "Round","(","4.56",",","1",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "7",
               "type" : "Round",
               "operand" : {
                  "localId" : "5",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "4.56",
                  "type" : "Literal"
               },
               "precision" : {
                  "localId" : "6",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "11",
            "name" : "Down",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "11",
                  "s" : [ {
                     "value" : [ "define ","Down",": " ]
                  }, {
                     "r" : "10",
                     "s" : [ {
                        "r" : "9",
                        "value" : [ "Round","(","4.49",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "10",
               "type" : "Round",
               "operand" : {
                  "localId" : "9",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "4.49",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "15",
            "name" : "Down_percent",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "15",
                  "s" : [ {
                     "value" : [ "define ","Down_percent",": " ]
                  }, {
                     "r" : "14",
                     "s" : [ {
                        "r" : "12",
                        "value" : [ "Round","(","4.43",",","1",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "14",
               "type" : "Round",
               "operand" : {
                  "localId" : "12",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "4.43",
                  "type" : "Literal"
               },
               "precision" : {
                  "localId" : "13",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               }
            }
         } ]
      }
   }
}

### Ln
library TestSnippet version '1'
using QUICK
context Patient
define ln: Ln(4)
###

module.exports['Ln'] = {
   "library" : {
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
            "localIdentifier" : "QUICK",
            "uri" : "http://hl7.org/fhir"
         } ]
      },
      "statements" : {
         "def" : [ {
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "type" : "SingletonFrom",
               "operand" : {
                  "dataType" : "{http://hl7.org/fhir}Patient",
                  "templateId" : "patient-qicore-qicore-patient",
                  "type" : "Retrieve"
               }
            }
         }, {
            "localId" : "4",
            "name" : "ln",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "4",
                  "s" : [ {
                     "value" : [ "define ","ln",": " ]
                  }, {
                     "r" : "3",
                     "s" : [ {
                        "r" : "2",
                        "value" : [ "Ln","(","4",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "3",
               "type" : "Ln",
               "operand" : {
                  "type" : "ToDecimal",
                  "operand" : {
                     "localId" : "2",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }
               }
            }
         } ]
      }
   }
}

### Log
library TestSnippet version '1'
using QUICK
context Patient
define log: Log(10,10000)
###

module.exports['Log'] = {
   "library" : {
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
            "localIdentifier" : "QUICK",
            "uri" : "http://hl7.org/fhir"
         } ]
      },
      "statements" : {
         "def" : [ {
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "type" : "SingletonFrom",
               "operand" : {
                  "dataType" : "{http://hl7.org/fhir}Patient",
                  "templateId" : "patient-qicore-qicore-patient",
                  "type" : "Retrieve"
               }
            }
         }, {
            "localId" : "5",
            "name" : "log",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "5",
                  "s" : [ {
                     "value" : [ "define ","log",": " ]
                  }, {
                     "r" : "4",
                     "s" : [ {
                        "r" : "2",
                        "value" : [ "Log","(","10",",","10000",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "4",
               "type" : "Log",
               "operand" : [ {
                  "type" : "ToDecimal",
                  "operand" : {
                     "localId" : "2",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "10",
                     "type" : "Literal"
                  }
               }, {
                  "type" : "ToDecimal",
                  "operand" : {
                     "localId" : "3",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "10000",
                     "type" : "Literal"
                  }
               } ]
            }
         } ]
      }
   }
}

### Successor
library TestSnippet version '1'
using QUICK
context Patient
define Is: successor of 2
define Rs: successor of 2.2
define ofr: successor of 2147483647
define y_date: successor of DateTime(2015)
define ym_date: successor of DateTime(2015,01)
define ymd_date: successor of DateTime(2015,01,01)
define ymdh_date: successor of DateTime(2015,01,01,0)
define ymdhm_date: successor of DateTime(2015,01,01,0,0)
define ymdhms_date: successor of DateTime(2015,01,01,0,0,0)
define ymdhmsm_date: successor of  DateTime(2015,01,01,0,0,0,0)
define max_date: successor of DateTime(9999,12,31,23,59,59,999)
###

module.exports['Successor'] = {
   "library" : {
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
            "localIdentifier" : "QUICK",
            "uri" : "http://hl7.org/fhir"
         } ]
      },
      "statements" : {
         "def" : [ {
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "type" : "SingletonFrom",
               "operand" : {
                  "dataType" : "{http://hl7.org/fhir}Patient",
                  "templateId" : "patient-qicore-qicore-patient",
                  "type" : "Retrieve"
               }
            }
         }, {
            "localId" : "4",
            "name" : "Is",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "4",
                  "s" : [ {
                     "value" : [ "define ","Is",": " ]
                  }, {
                     "r" : "3",
                     "s" : [ {
                        "r" : "2",
                        "value" : [ "successor of ","2" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "3",
               "type" : "Successor",
               "operand" : {
                  "localId" : "2",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "7",
            "name" : "Rs",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "7",
                  "s" : [ {
                     "value" : [ "define ","Rs",": " ]
                  }, {
                     "r" : "6",
                     "s" : [ {
                        "r" : "5",
                        "value" : [ "successor of ","2.2" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "6",
               "type" : "Successor",
               "operand" : {
                  "localId" : "5",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "2.2",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "10",
            "name" : "ofr",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "10",
                  "s" : [ {
                     "value" : [ "define ","ofr",": " ]
                  }, {
                     "r" : "9",
                     "s" : [ {
                        "r" : "8",
                        "value" : [ "successor of ","2147483647" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "9",
               "type" : "Successor",
               "operand" : {
                  "localId" : "8",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2147483647",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "14",
            "name" : "y_date",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "14",
                  "s" : [ {
                     "value" : [ "define ","y_date",": " ]
                  }, {
                     "r" : "13",
                     "s" : [ {
                        "value" : [ "successor of " ]
                     }, {
                        "r" : "12",
                        "s" : [ {
                           "r" : "11",
                           "value" : [ "DateTime","(","2015",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "13",
               "type" : "Successor",
               "operand" : {
                  "localId" : "12",
                  "type" : "DateTime",
                  "year" : {
                     "localId" : "11",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2015",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "19",
            "name" : "ym_date",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "19",
                  "s" : [ {
                     "value" : [ "define ","ym_date",": " ]
                  }, {
                     "r" : "18",
                     "s" : [ {
                        "value" : [ "successor of " ]
                     }, {
                        "r" : "17",
                        "s" : [ {
                           "r" : "15",
                           "value" : [ "DateTime","(","2015",",","01",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "18",
               "type" : "Successor",
               "operand" : {
                  "localId" : "17",
                  "type" : "DateTime",
                  "year" : {
                     "localId" : "15",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2015",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "16",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "25",
            "name" : "ymd_date",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "25",
                  "s" : [ {
                     "value" : [ "define ","ymd_date",": " ]
                  }, {
                     "r" : "24",
                     "s" : [ {
                        "value" : [ "successor of " ]
                     }, {
                        "r" : "23",
                        "s" : [ {
                           "r" : "20",
                           "value" : [ "DateTime","(","2015",",","01",",","01",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "24",
               "type" : "Successor",
               "operand" : {
                  "localId" : "23",
                  "type" : "DateTime",
                  "year" : {
                     "localId" : "20",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2015",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "21",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "22",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "32",
            "name" : "ymdh_date",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "32",
                  "s" : [ {
                     "value" : [ "define ","ymdh_date",": " ]
                  }, {
                     "r" : "31",
                     "s" : [ {
                        "value" : [ "successor of " ]
                     }, {
                        "r" : "30",
                        "s" : [ {
                           "r" : "26",
                           "value" : [ "DateTime","(","2015",",","01",",","01",",","0",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "31",
               "type" : "Successor",
               "operand" : {
                  "localId" : "30",
                  "type" : "DateTime",
                  "year" : {
                     "localId" : "26",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2015",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "27",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "28",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "29",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "40",
            "name" : "ymdhm_date",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "40",
                  "s" : [ {
                     "value" : [ "define ","ymdhm_date",": " ]
                  }, {
                     "r" : "39",
                     "s" : [ {
                        "value" : [ "successor of " ]
                     }, {
                        "r" : "38",
                        "s" : [ {
                           "r" : "33",
                           "value" : [ "DateTime","(","2015",",","01",",","01",",","0",",","0",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "39",
               "type" : "Successor",
               "operand" : {
                  "localId" : "38",
                  "type" : "DateTime",
                  "year" : {
                     "localId" : "33",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2015",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "34",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "35",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "36",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "37",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "49",
            "name" : "ymdhms_date",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "49",
                  "s" : [ {
                     "value" : [ "define ","ymdhms_date",": " ]
                  }, {
                     "r" : "48",
                     "s" : [ {
                        "value" : [ "successor of " ]
                     }, {
                        "r" : "47",
                        "s" : [ {
                           "r" : "41",
                           "value" : [ "DateTime","(","2015",",","01",",","01",",","0",",","0",",","0",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "48",
               "type" : "Successor",
               "operand" : {
                  "localId" : "47",
                  "type" : "DateTime",
                  "year" : {
                     "localId" : "41",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2015",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "42",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "43",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "44",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "45",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "46",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "59",
            "name" : "ymdhmsm_date",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "59",
                  "s" : [ {
                     "value" : [ "define ","ymdhmsm_date",": " ]
                  }, {
                     "r" : "58",
                     "s" : [ {
                        "value" : [ "successor of  " ]
                     }, {
                        "r" : "57",
                        "s" : [ {
                           "r" : "50",
                           "value" : [ "DateTime","(","2015",",","01",",","01",",","0",",","0",",","0",",","0",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "58",
               "type" : "Successor",
               "operand" : {
                  "localId" : "57",
                  "type" : "DateTime",
                  "year" : {
                     "localId" : "50",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2015",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "51",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "52",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "53",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "54",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "55",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "56",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "69",
            "name" : "max_date",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "69",
                  "s" : [ {
                     "value" : [ "define ","max_date",": " ]
                  }, {
                     "r" : "68",
                     "s" : [ {
                        "value" : [ "successor of " ]
                     }, {
                        "r" : "67",
                        "s" : [ {
                           "r" : "60",
                           "value" : [ "DateTime","(","9999",",","12",",","31",",","23",",","59",",","59",",","999",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "68",
               "type" : "Successor",
               "operand" : {
                  "localId" : "67",
                  "type" : "DateTime",
                  "year" : {
                     "localId" : "60",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "9999",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "61",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "12",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "62",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "31",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "63",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "64",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "59",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "65",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "59",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "66",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "999",
                     "type" : "Literal"
                  }
               }
            }
         } ]
      }
   }
}

### Predecessor
library TestSnippet version '1'
using QUICK
context Patient
define Is: predecessor of 2
define Rs: predecessor of 2.2
define ufr: predecessor of -2147483648
define y_date: predecessor of DateTime(2015)
define ym_date: predecessor of DateTime(2015,01)
define ymd_date: predecessor of DateTime(2015,01,01)
define ymdh_date: predecessor of DateTime(2015,01,01,0)
define ymdhm_date: predecessor of DateTime(2015,01,01,0,0)
define ymdhms_date: predecessor of DateTime(2015,01,01,0,0,0)
define ymdhmsm_date: predecessor of DateTime(2015,01,01,0,0,0,0)
define min_date: predecessor of DateTime(0001,01,01,0,0,0,0)
###

module.exports['Predecessor'] = {
   "library" : {
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
            "localIdentifier" : "QUICK",
            "uri" : "http://hl7.org/fhir"
         } ]
      },
      "statements" : {
         "def" : [ {
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "type" : "SingletonFrom",
               "operand" : {
                  "dataType" : "{http://hl7.org/fhir}Patient",
                  "templateId" : "patient-qicore-qicore-patient",
                  "type" : "Retrieve"
               }
            }
         }, {
            "localId" : "4",
            "name" : "Is",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "4",
                  "s" : [ {
                     "value" : [ "define ","Is",": " ]
                  }, {
                     "r" : "3",
                     "s" : [ {
                        "r" : "2",
                        "value" : [ "predecessor of ","2" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "3",
               "type" : "Predecessor",
               "operand" : {
                  "localId" : "2",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "7",
            "name" : "Rs",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "7",
                  "s" : [ {
                     "value" : [ "define ","Rs",": " ]
                  }, {
                     "r" : "6",
                     "s" : [ {
                        "r" : "5",
                        "value" : [ "predecessor of ","2.2" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "6",
               "type" : "Predecessor",
               "operand" : {
                  "localId" : "5",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "2.2",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "11",
            "name" : "ufr",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "11",
                  "s" : [ {
                     "value" : [ "define ","ufr",": " ]
                  }, {
                     "r" : "10",
                     "s" : [ {
                        "value" : [ "predecessor of " ]
                     }, {
                        "r" : "9",
                        "s" : [ {
                           "r" : "8",
                           "value" : [ "-","2147483648" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "10",
               "type" : "Predecessor",
               "operand" : {
                  "localId" : "9",
                  "type" : "Negate",
                  "operand" : {
                     "localId" : "8",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2147483648",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "15",
            "name" : "y_date",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "15",
                  "s" : [ {
                     "value" : [ "define ","y_date",": " ]
                  }, {
                     "r" : "14",
                     "s" : [ {
                        "value" : [ "predecessor of " ]
                     }, {
                        "r" : "13",
                        "s" : [ {
                           "r" : "12",
                           "value" : [ "DateTime","(","2015",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "14",
               "type" : "Predecessor",
               "operand" : {
                  "localId" : "13",
                  "type" : "DateTime",
                  "year" : {
                     "localId" : "12",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2015",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "20",
            "name" : "ym_date",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "20",
                  "s" : [ {
                     "value" : [ "define ","ym_date",": " ]
                  }, {
                     "r" : "19",
                     "s" : [ {
                        "value" : [ "predecessor of " ]
                     }, {
                        "r" : "18",
                        "s" : [ {
                           "r" : "16",
                           "value" : [ "DateTime","(","2015",",","01",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "19",
               "type" : "Predecessor",
               "operand" : {
                  "localId" : "18",
                  "type" : "DateTime",
                  "year" : {
                     "localId" : "16",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2015",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "17",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "26",
            "name" : "ymd_date",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "26",
                  "s" : [ {
                     "value" : [ "define ","ymd_date",": " ]
                  }, {
                     "r" : "25",
                     "s" : [ {
                        "value" : [ "predecessor of " ]
                     }, {
                        "r" : "24",
                        "s" : [ {
                           "r" : "21",
                           "value" : [ "DateTime","(","2015",",","01",",","01",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "25",
               "type" : "Predecessor",
               "operand" : {
                  "localId" : "24",
                  "type" : "DateTime",
                  "year" : {
                     "localId" : "21",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2015",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "22",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "23",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "33",
            "name" : "ymdh_date",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "33",
                  "s" : [ {
                     "value" : [ "define ","ymdh_date",": " ]
                  }, {
                     "r" : "32",
                     "s" : [ {
                        "value" : [ "predecessor of " ]
                     }, {
                        "r" : "31",
                        "s" : [ {
                           "r" : "27",
                           "value" : [ "DateTime","(","2015",",","01",",","01",",","0",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "32",
               "type" : "Predecessor",
               "operand" : {
                  "localId" : "31",
                  "type" : "DateTime",
                  "year" : {
                     "localId" : "27",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2015",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "28",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "29",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "30",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "41",
            "name" : "ymdhm_date",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "41",
                  "s" : [ {
                     "value" : [ "define ","ymdhm_date",": " ]
                  }, {
                     "r" : "40",
                     "s" : [ {
                        "value" : [ "predecessor of " ]
                     }, {
                        "r" : "39",
                        "s" : [ {
                           "r" : "34",
                           "value" : [ "DateTime","(","2015",",","01",",","01",",","0",",","0",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "40",
               "type" : "Predecessor",
               "operand" : {
                  "localId" : "39",
                  "type" : "DateTime",
                  "year" : {
                     "localId" : "34",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2015",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "35",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "36",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "37",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "38",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "50",
            "name" : "ymdhms_date",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "50",
                  "s" : [ {
                     "value" : [ "define ","ymdhms_date",": " ]
                  }, {
                     "r" : "49",
                     "s" : [ {
                        "value" : [ "predecessor of " ]
                     }, {
                        "r" : "48",
                        "s" : [ {
                           "r" : "42",
                           "value" : [ "DateTime","(","2015",",","01",",","01",",","0",",","0",",","0",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "49",
               "type" : "Predecessor",
               "operand" : {
                  "localId" : "48",
                  "type" : "DateTime",
                  "year" : {
                     "localId" : "42",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2015",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "43",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "44",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "45",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "46",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "47",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "60",
            "name" : "ymdhmsm_date",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "60",
                  "s" : [ {
                     "value" : [ "define ","ymdhmsm_date",": " ]
                  }, {
                     "r" : "59",
                     "s" : [ {
                        "value" : [ "predecessor of " ]
                     }, {
                        "r" : "58",
                        "s" : [ {
                           "r" : "51",
                           "value" : [ "DateTime","(","2015",",","01",",","01",",","0",",","0",",","0",",","0",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "59",
               "type" : "Predecessor",
               "operand" : {
                  "localId" : "58",
                  "type" : "DateTime",
                  "year" : {
                     "localId" : "51",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2015",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "52",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "53",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "54",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "55",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "56",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "57",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "70",
            "name" : "min_date",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "70",
                  "s" : [ {
                     "value" : [ "define ","min_date",": " ]
                  }, {
                     "r" : "69",
                     "s" : [ {
                        "value" : [ "predecessor of " ]
                     }, {
                        "r" : "68",
                        "s" : [ {
                           "r" : "61",
                           "value" : [ "DateTime","(","0001",",","01",",","01",",","0",",","0",",","0",",","0",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "69",
               "type" : "Predecessor",
               "operand" : {
                  "localId" : "68",
                  "type" : "DateTime",
                  "year" : {
                     "localId" : "61",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0001",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "62",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "63",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "01",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "64",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "65",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "66",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "67",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  }
               }
            }
         } ]
      }
   }
}

### Quantity
library TestSnippet version '1'
using QUICK
context Patient

define days_10: 10 days
define QL10Days: Quantity{value: 10, unit: 'days'}
define QL10Min : Quantity{value: 10, unit: 'min' }
define Jan1_2000: DateTime(2000, 1, 1)
define add_q_q : days_10 + QL10Days
define add_d_q : Jan1_2000 + days_10
define sub_q_q : days_10 - QL10Days
define sub_d_q : Jan1_2000 - days_10
define add_q_q_diff : QL10Days + QL10Min
define sub_q_q_diff : QL10Days - QL10Min
define div_q_d : days_10 / 2
define div_q_q : days_10 / QL10Days
define mul_q_d : days_10 * 2
define mul_d_q : 2 * QL10Days
define mul_q_q : 2 'm' * 10 'm'
define mul_q_q_diff : 2 'm' * 10 '/d'
define neg : - days_10
define abs : Abs(neg)
define MultiplyUcum: (5 'm' * 25 'km') = 125000 'm2'
define DivideUcum: (20 'm2' / 5 'm') = 4 'm'
define AddUcum: (5 'm' + 5 'km') = 5005 'm'
define SubtractUcum: (25 'km' - 5 'm') = 24995 'm'
###

module.exports['Quantity'] = {
   "library" : {
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
            "localIdentifier" : "QUICK",
            "uri" : "http://hl7.org/fhir"
         } ]
      },
      "statements" : {
         "def" : [ {
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "type" : "SingletonFrom",
               "operand" : {
                  "dataType" : "{http://hl7.org/fhir}Patient",
                  "templateId" : "patient-qicore-qicore-patient",
                  "type" : "Retrieve"
               }
            }
         }, {
            "localId" : "3",
            "name" : "days_10",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "3",
                  "s" : [ {
                     "value" : [ "define ","days_10",": " ]
                  }, {
                     "r" : "2",
                     "s" : [ {
                        "value" : [ "10 ","days" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "2",
               "value" : 10,
               "unit" : "days",
               "type" : "Quantity"
            }
         }, {
            "localId" : "7",
            "name" : "QL10Days",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "7",
                  "s" : [ {
                     "value" : [ "define ","QL10Days",": " ]
                  }, {
                     "r" : "6",
                     "s" : [ {
                        "value" : [ "Quantity","{" ]
                     }, {
                        "s" : [ {
                           "r" : "4",
                           "value" : [ "value",": ","10" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "s" : [ {
                           "value" : [ "unit",": " ]
                        }, {
                           "r" : "5",
                           "s" : [ {
                              "value" : [ "'days'" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ "}" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "6",
               "classType" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Instance",
               "element" : [ {
                  "name" : "value",
                  "value" : {
                     "type" : "ToDecimal",
                     "operand" : {
                        "localId" : "4",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "10",
                        "type" : "Literal"
                     }
                  }
               }, {
                  "name" : "unit",
                  "value" : {
                     "localId" : "5",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "days",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "11",
            "name" : "QL10Min",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "11",
                  "s" : [ {
                     "value" : [ "define ","QL10Min"," : " ]
                  }, {
                     "r" : "10",
                     "s" : [ {
                        "value" : [ "Quantity","{" ]
                     }, {
                        "s" : [ {
                           "r" : "8",
                           "value" : [ "value",": ","10" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "s" : [ {
                           "value" : [ "unit",": " ]
                        }, {
                           "r" : "9",
                           "s" : [ {
                              "value" : [ "'min'" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " }" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "10",
               "classType" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Instance",
               "element" : [ {
                  "name" : "value",
                  "value" : {
                     "type" : "ToDecimal",
                     "operand" : {
                        "localId" : "8",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "10",
                        "type" : "Literal"
                     }
                  }
               }, {
                  "name" : "unit",
                  "value" : {
                     "localId" : "9",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "min",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "16",
            "name" : "Jan1_2000",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "16",
                  "s" : [ {
                     "value" : [ "define ","Jan1_2000",": " ]
                  }, {
                     "r" : "15",
                     "s" : [ {
                        "r" : "12",
                        "value" : [ "DateTime","(","2000",", ","1",", ","1",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "15",
               "type" : "DateTime",
               "year" : {
                  "localId" : "12",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2000",
                  "type" : "Literal"
               },
               "month" : {
                  "localId" : "13",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               },
               "day" : {
                  "localId" : "14",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "20",
            "name" : "add_q_q",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "20",
                  "s" : [ {
                     "value" : [ "define ","add_q_q"," : " ]
                  }, {
                     "r" : "19",
                     "s" : [ {
                        "r" : "17",
                        "s" : [ {
                           "value" : [ "days_10" ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "18",
                        "s" : [ {
                           "value" : [ "QL10Days" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "19",
               "type" : "Add",
               "operand" : [ {
                  "localId" : "17",
                  "name" : "days_10",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "18",
                  "name" : "QL10Days",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "24",
            "name" : "add_d_q",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "24",
                  "s" : [ {
                     "value" : [ "define ","add_d_q"," : " ]
                  }, {
                     "r" : "23",
                     "s" : [ {
                        "r" : "21",
                        "s" : [ {
                           "value" : [ "Jan1_2000" ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "22",
                        "s" : [ {
                           "value" : [ "days_10" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "23",
               "type" : "Add",
               "operand" : [ {
                  "localId" : "21",
                  "name" : "Jan1_2000",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "22",
                  "name" : "days_10",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "28",
            "name" : "sub_q_q",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "28",
                  "s" : [ {
                     "value" : [ "define ","sub_q_q"," : " ]
                  }, {
                     "r" : "27",
                     "s" : [ {
                        "r" : "25",
                        "s" : [ {
                           "value" : [ "days_10" ]
                        } ]
                     }, {
                        "value" : [ " - " ]
                     }, {
                        "r" : "26",
                        "s" : [ {
                           "value" : [ "QL10Days" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "27",
               "type" : "Subtract",
               "operand" : [ {
                  "localId" : "25",
                  "name" : "days_10",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "26",
                  "name" : "QL10Days",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "32",
            "name" : "sub_d_q",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "32",
                  "s" : [ {
                     "value" : [ "define ","sub_d_q"," : " ]
                  }, {
                     "r" : "31",
                     "s" : [ {
                        "r" : "29",
                        "s" : [ {
                           "value" : [ "Jan1_2000" ]
                        } ]
                     }, {
                        "value" : [ " - " ]
                     }, {
                        "r" : "30",
                        "s" : [ {
                           "value" : [ "days_10" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "31",
               "type" : "Subtract",
               "operand" : [ {
                  "localId" : "29",
                  "name" : "Jan1_2000",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "30",
                  "name" : "days_10",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "36",
            "name" : "add_q_q_diff",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "36",
                  "s" : [ {
                     "value" : [ "define ","add_q_q_diff"," : " ]
                  }, {
                     "r" : "35",
                     "s" : [ {
                        "r" : "33",
                        "s" : [ {
                           "value" : [ "QL10Days" ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "34",
                        "s" : [ {
                           "value" : [ "QL10Min" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "35",
               "type" : "Add",
               "operand" : [ {
                  "localId" : "33",
                  "name" : "QL10Days",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "34",
                  "name" : "QL10Min",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "40",
            "name" : "sub_q_q_diff",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "40",
                  "s" : [ {
                     "value" : [ "define ","sub_q_q_diff"," : " ]
                  }, {
                     "r" : "39",
                     "s" : [ {
                        "r" : "37",
                        "s" : [ {
                           "value" : [ "QL10Days" ]
                        } ]
                     }, {
                        "value" : [ " - " ]
                     }, {
                        "r" : "38",
                        "s" : [ {
                           "value" : [ "QL10Min" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "39",
               "type" : "Subtract",
               "operand" : [ {
                  "localId" : "37",
                  "name" : "QL10Days",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "38",
                  "name" : "QL10Min",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "44",
            "name" : "div_q_d",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "44",
                  "s" : [ {
                     "value" : [ "define ","div_q_d"," : " ]
                  }, {
                     "r" : "43",
                     "s" : [ {
                        "r" : "41",
                        "s" : [ {
                           "value" : [ "days_10" ]
                        } ]
                     }, {
                        "r" : "42",
                        "value" : [ " / ","2" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "43",
               "type" : "Divide",
               "operand" : [ {
                  "localId" : "41",
                  "name" : "days_10",
                  "type" : "ExpressionRef"
               }, {
                  "type" : "ToQuantity",
                  "operand" : {
                     "localId" : "42",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "48",
            "name" : "div_q_q",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "48",
                  "s" : [ {
                     "value" : [ "define ","div_q_q"," : " ]
                  }, {
                     "r" : "47",
                     "s" : [ {
                        "r" : "45",
                        "s" : [ {
                           "value" : [ "days_10" ]
                        } ]
                     }, {
                        "value" : [ " / " ]
                     }, {
                        "r" : "46",
                        "s" : [ {
                           "value" : [ "QL10Days" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "47",
               "type" : "Divide",
               "operand" : [ {
                  "localId" : "45",
                  "name" : "days_10",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "46",
                  "name" : "QL10Days",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "52",
            "name" : "mul_q_d",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "52",
                  "s" : [ {
                     "value" : [ "define ","mul_q_d"," : " ]
                  }, {
                     "r" : "51",
                     "s" : [ {
                        "r" : "49",
                        "s" : [ {
                           "value" : [ "days_10" ]
                        } ]
                     }, {
                        "r" : "50",
                        "value" : [ " * ","2" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "51",
               "type" : "Multiply",
               "operand" : [ {
                  "localId" : "49",
                  "name" : "days_10",
                  "type" : "ExpressionRef"
               }, {
                  "type" : "ToQuantity",
                  "operand" : {
                     "localId" : "50",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "56",
            "name" : "mul_d_q",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "56",
                  "s" : [ {
                     "value" : [ "define ","mul_d_q"," : " ]
                  }, {
                     "r" : "55",
                     "s" : [ {
                        "r" : "53",
                        "value" : [ "2"," * " ]
                     }, {
                        "r" : "54",
                        "s" : [ {
                           "value" : [ "QL10Days" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "55",
               "type" : "Multiply",
               "operand" : [ {
                  "type" : "ToQuantity",
                  "operand" : {
                     "localId" : "53",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "54",
                  "name" : "QL10Days",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "60",
            "name" : "mul_q_q",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "60",
                  "s" : [ {
                     "value" : [ "define ","mul_q_q"," : " ]
                  }, {
                     "r" : "59",
                     "s" : [ {
                        "r" : "57",
                        "s" : [ {
                           "value" : [ "2 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " * " ]
                     }, {
                        "r" : "58",
                        "s" : [ {
                           "value" : [ "10 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "59",
               "type" : "Multiply",
               "operand" : [ {
                  "localId" : "57",
                  "value" : 2,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "58",
                  "value" : 10,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "64",
            "name" : "mul_q_q_diff",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "64",
                  "s" : [ {
                     "value" : [ "define ","mul_q_q_diff"," : " ]
                  }, {
                     "r" : "63",
                     "s" : [ {
                        "r" : "61",
                        "s" : [ {
                           "value" : [ "2 ","'m'" ]
                        } ]
                     }, {
                        "value" : [ " * " ]
                     }, {
                        "r" : "62",
                        "s" : [ {
                           "value" : [ "10 ","'/d'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "63",
               "type" : "Multiply",
               "operand" : [ {
                  "localId" : "61",
                  "value" : 2,
                  "unit" : "m",
                  "type" : "Quantity"
               }, {
                  "localId" : "62",
                  "value" : 10,
                  "unit" : "/d",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "67",
            "name" : "neg",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "67",
                  "s" : [ {
                     "value" : [ "define ","neg"," : " ]
                  }, {
                     "r" : "66",
                     "s" : [ {
                        "value" : [ "- " ]
                     }, {
                        "r" : "65",
                        "s" : [ {
                           "value" : [ "days_10" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "66",
               "type" : "Negate",
               "operand" : {
                  "localId" : "65",
                  "name" : "days_10",
                  "type" : "ExpressionRef"
               }
            }
         }, {
            "localId" : "70",
            "name" : "abs",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "70",
                  "s" : [ {
                     "value" : [ "define ","abs"," : " ]
                  }, {
                     "r" : "69",
                     "s" : [ {
                        "value" : [ "Abs","(" ]
                     }, {
                        "r" : "68",
                        "s" : [ {
                           "value" : [ "neg" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "69",
               "type" : "Abs",
               "operand" : {
                  "localId" : "68",
                  "name" : "neg",
                  "type" : "ExpressionRef"
               }
            }
         }, {
            "localId" : "76",
            "name" : "MultiplyUcum",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "76",
                  "s" : [ {
                     "value" : [ "define ","MultiplyUcum",": " ]
                  }, {
                     "r" : "75",
                     "s" : [ {
                        "r" : "73",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "73",
                           "s" : [ {
                              "r" : "71",
                              "s" : [ {
                                 "value" : [ "5 ","'m'" ]
                              } ]
                           }, {
                              "value" : [ " * " ]
                           }, {
                              "r" : "72",
                              "s" : [ {
                                 "value" : [ "25 ","'km'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "74",
                        "s" : [ {
                           "value" : [ "125000 ","'m2'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "75",
               "type" : "Equal",
               "operand" : [ {
                  "localId" : "73",
                  "type" : "Multiply",
                  "operand" : [ {
                     "localId" : "71",
                     "value" : 5,
                     "unit" : "m",
                     "type" : "Quantity"
                  }, {
                     "localId" : "72",
                     "value" : 25,
                     "unit" : "km",
                     "type" : "Quantity"
                  } ]
               }, {
                  "localId" : "74",
                  "value" : 125000,
                  "unit" : "m2",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "82",
            "name" : "DivideUcum",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "82",
                  "s" : [ {
                     "value" : [ "define ","DivideUcum",": " ]
                  }, {
                     "r" : "81",
                     "s" : [ {
                        "r" : "79",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "79",
                           "s" : [ {
                              "r" : "77",
                              "s" : [ {
                                 "value" : [ "20 ","'m2'" ]
                              } ]
                           }, {
                              "value" : [ " / " ]
                           }, {
                              "r" : "78",
                              "s" : [ {
                                 "value" : [ "5 ","'m'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "80",
                        "s" : [ {
                           "value" : [ "4 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "81",
               "type" : "Equal",
               "operand" : [ {
                  "localId" : "79",
                  "type" : "Divide",
                  "operand" : [ {
                     "localId" : "77",
                     "value" : 20,
                     "unit" : "m2",
                     "type" : "Quantity"
                  }, {
                     "localId" : "78",
                     "value" : 5,
                     "unit" : "m",
                     "type" : "Quantity"
                  } ]
               }, {
                  "localId" : "80",
                  "value" : 4,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "88",
            "name" : "AddUcum",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "88",
                  "s" : [ {
                     "value" : [ "define ","AddUcum",": " ]
                  }, {
                     "r" : "87",
                     "s" : [ {
                        "r" : "85",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "85",
                           "s" : [ {
                              "r" : "83",
                              "s" : [ {
                                 "value" : [ "5 ","'m'" ]
                              } ]
                           }, {
                              "value" : [ " + " ]
                           }, {
                              "r" : "84",
                              "s" : [ {
                                 "value" : [ "5 ","'km'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "86",
                        "s" : [ {
                           "value" : [ "5005 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "87",
               "type" : "Equal",
               "operand" : [ {
                  "localId" : "85",
                  "type" : "Add",
                  "operand" : [ {
                     "localId" : "83",
                     "value" : 5,
                     "unit" : "m",
                     "type" : "Quantity"
                  }, {
                     "localId" : "84",
                     "value" : 5,
                     "unit" : "km",
                     "type" : "Quantity"
                  } ]
               }, {
                  "localId" : "86",
                  "value" : 5005,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "94",
            "name" : "SubtractUcum",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "94",
                  "s" : [ {
                     "value" : [ "define ","SubtractUcum",": " ]
                  }, {
                     "r" : "93",
                     "s" : [ {
                        "r" : "91",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "91",
                           "s" : [ {
                              "r" : "89",
                              "s" : [ {
                                 "value" : [ "25 ","'km'" ]
                              } ]
                           }, {
                              "value" : [ " - " ]
                           }, {
                              "r" : "90",
                              "s" : [ {
                                 "value" : [ "5 ","'m'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "92",
                        "s" : [ {
                           "value" : [ "24995 ","'m'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "93",
               "type" : "Equal",
               "operand" : [ {
                  "localId" : "91",
                  "type" : "Subtract",
                  "operand" : [ {
                     "localId" : "89",
                     "value" : 25,
                     "unit" : "km",
                     "type" : "Quantity"
                  }, {
                     "localId" : "90",
                     "value" : 5,
                     "unit" : "m",
                     "type" : "Quantity"
                  } ]
               }, {
                  "localId" : "92",
                  "value" : 24995,
                  "unit" : "m",
                  "type" : "Quantity"
               } ]
            }
         } ]
      }
   }
}

### OutOfBounds
library TestSnippet version '1'
using QUICK
context Patient
define IntegerAddOverflow: maximum Integer + 1
define IntegerAddUnderflow: minimum Integer + -1
define IntegerSubtractOverflow: maximum Integer - -1
define IntegerSubtractUnderflow: minimum Integer - 1
define IntegerMultiplyOverflow: maximum Integer * 2
define IntegerMultiplyUnderflow: minimum Integer * -2
define IntegerDivideOverflow: maximum Integer / (0.5)
define IntegerDivideUnderflow: minimum Integer / (-0.5)
define IntegerDivideByZero: 1 / 0
define IntegerPowerOverflow: (maximum Integer)^3
define IntegerPowerUnderflow: (minimum Integer)^3
define IntegerSuccessorOverflow: successor of maximum Integer
define IntegerPredecessorUnderflow: predecessor of minimum Integer

define DecimalAddOverflow: maximum Decimal + 1.0
define DecimalAddUnderflow: minimum Decimal + -1.0
define DecimalSubtractOverflow: maximum Decimal - -1.0
define DecimalSubtractUnderflow: minimum Decimal - 1.0
define DecimalMultiplyOverflow: maximum Decimal * 2
define DecimalMultiplyUnderflow: minimum Decimal * -2
define DecimalDivideOverflow: maximum Decimal / (0.5)
define DecimalDivideUnderflow: minimum Decimal / (-0.5)
define DecimalDivideByZero: 1.0 / 0
define DecimalPowerOverflow: (maximum Decimal)^2
define DecimalPowerUnderflow: (minimum Decimal)^3
define DecimalSuccessorOverflow: successor of maximum Decimal
define DecimalPredecessorUnderflow: predecessor of minimum Decimal

define MaxQuantity: Quantity(maximum Decimal, 'mm')
define MinQuantity: Quantity(minimum Decimal, 'mm')
define QuantityAddOverflow: MaxQuantity + '1.0 mm'
define QuantityAddUnderflow: MinQuantity + '-1.0 mm'
define QuantitySubtractOverflow: MaxQuantity - Quantity(-1, 'mm')
define QuantitySubtractUnderflow: MinQuantity - Quantity(1, 'mm')
define QuantityMultiplyOverflow: MaxQuantity * Quantity(2, 'mm')
define QuantityMultiplyUnderflow: MinQuantity * Quantity(2, 'mm')
define QuantityDivideOverflow: MaxQuantity / Quantity(0.5, 'mm')
define QuantityDivideUnderflow: MinQuantity / Quantity(-0.5, 'mm')
define QuantityDivideByZero: '1.0 mm' / '0 mm'
define QuantityPowerOverflow: MaxQuantity^3
define QuantityPowerUnderflow: MinQuantity^3
define QuantitySuccessorOverflow: successor of MaxQuantity
define QuantityPredecessorUnderflow: predecessor of MinQuantity

define DateTimeAddOverflow: maximum DateTime + '1 day'
define DateTimeAddUnderflow: minimum DateTime + '-1 day'
define DateTimeSubtractOverflow: maximum DateTime - '-1 day'
define DateTimeSubtractUnderflow: minimum DateTime - '1 day'
define DateTimeSuccessorOverflow: successor of maximum DateTime
define DateTimePredecessorUnderflow: predecessor of minimum DateTime

define DateAddOverflow: maximum Date + '1 day'
define DateAddUnderflow: minimum Date + '-1 day'
define DateSubtractOverflow: maximum Date - '-1 day'
define DateSubtractUnderflow: minimum Date - '1 day'
define DateSuccessorOverflow: successor of maximum Date
define DatePredecessorUnderflow: predecessor of minimum Date

define TimeAddOverflow: maximum Time + '1 second'
define TimeAddUnderflow: minimum Time + '-1 second'
define TimeSubtractOverflow: maximum Time - '-1 second'
define TimeSubtractUnderflow: minimum Time - '1 second'
define TimeSuccessorOverflow: successor of maximum Time
define TimePredecessorUnderflow: predecessor of minimum Time

define ExpOverflow: Exp(maximum Decimal)
###

###
Translation Error(s):
[32:21, 32:51] Could not resolve call to operator Quantity with signature (System.Decimal,System.String).
[33:21, 33:51] Could not resolve call to operator Quantity with signature (System.Decimal,System.String).
[34:29, 34:39] Could not validate reference to expression MaxQuantity because its definition contains errors.
[35:30, 35:40] Could not validate reference to expression MinQuantity because its definition contains errors.
[36:34, 36:44] Could not validate reference to expression MaxQuantity because its definition contains errors.
[37:35, 37:45] Could not validate reference to expression MinQuantity because its definition contains errors.
[38:34, 38:44] Could not validate reference to expression MaxQuantity because its definition contains errors.
[39:35, 39:45] Could not validate reference to expression MinQuantity because its definition contains errors.
[40:32, 40:42] Could not validate reference to expression MaxQuantity because its definition contains errors.
[41:33, 41:43] Could not validate reference to expression MinQuantity because its definition contains errors.
[42:30, 42:46] Could not resolve call to operator Divide with signature (System.String,System.String).
[43:31, 43:41] Could not validate reference to expression MaxQuantity because its definition contains errors.
[44:32, 44:42] Could not validate reference to expression MinQuantity because its definition contains errors.
[45:48, 45:58] Could not validate reference to expression MaxQuantity because its definition contains errors.
[46:53, 46:63] Could not validate reference to expression MinQuantity because its definition contains errors.
[48:29, 48:54] Could not resolve call to operator Add with signature (System.DateTime,System.String).
[49:30, 49:56] Could not resolve call to operator Add with signature (System.DateTime,System.String).
[50:34, 50:60] Could not resolve call to operator Subtract with signature (System.DateTime,System.String).
[51:35, 51:60] Could not resolve call to operator Subtract with signature (System.DateTime,System.String).
[55:25, 55:46] Could not resolve call to operator Add with signature (System.Date,System.String).
[56:26, 56:48] Could not resolve call to operator Add with signature (System.Date,System.String).
[57:30, 57:52] Could not resolve call to operator Subtract with signature (System.Date,System.String).
[58:31, 58:52] Could not resolve call to operator Subtract with signature (System.Date,System.String).
[62:25, 62:49] Could not resolve call to operator Add with signature (System.Time,System.String).
[63:26, 63:51] Could not resolve call to operator Add with signature (System.Time,System.String).
[64:30, 64:55] Could not resolve call to operator Subtract with signature (System.Time,System.String).
[65:31, 65:55] Could not resolve call to operator Subtract with signature (System.Time,System.String).
###
module.exports['OutOfBounds'] = {
   "library" : {
      "annotation" : [ {
         "startLine" : 32,
         "startChar" : 21,
         "endLine" : 32,
         "endChar" : 51,
         "message" : "Could not resolve call to operator Quantity with signature (System.Decimal,System.String).",
         "errorType" : "semantic",
         "errorSeverity" : "error",
         "type" : "CqlToElmError"
      }, {
         "startLine" : 33,
         "startChar" : 21,
         "endLine" : 33,
         "endChar" : 51,
         "message" : "Could not resolve call to operator Quantity with signature (System.Decimal,System.String).",
         "errorType" : "semantic",
         "errorSeverity" : "error",
         "type" : "CqlToElmError"
      }, {
         "startLine" : 34,
         "startChar" : 29,
         "endLine" : 34,
         "endChar" : 39,
         "message" : "Could not validate reference to expression MaxQuantity because its definition contains errors.",
         "errorType" : "semantic",
         "errorSeverity" : "error",
         "type" : "CqlToElmError"
      }, {
         "startLine" : 35,
         "startChar" : 30,
         "endLine" : 35,
         "endChar" : 40,
         "message" : "Could not validate reference to expression MinQuantity because its definition contains errors.",
         "errorType" : "semantic",
         "errorSeverity" : "error",
         "type" : "CqlToElmError"
      }, {
         "startLine" : 36,
         "startChar" : 34,
         "endLine" : 36,
         "endChar" : 44,
         "message" : "Could not validate reference to expression MaxQuantity because its definition contains errors.",
         "errorType" : "semantic",
         "errorSeverity" : "error",
         "type" : "CqlToElmError"
      }, {
         "startLine" : 37,
         "startChar" : 35,
         "endLine" : 37,
         "endChar" : 45,
         "message" : "Could not validate reference to expression MinQuantity because its definition contains errors.",
         "errorType" : "semantic",
         "errorSeverity" : "error",
         "type" : "CqlToElmError"
      }, {
         "startLine" : 38,
         "startChar" : 34,
         "endLine" : 38,
         "endChar" : 44,
         "message" : "Could not validate reference to expression MaxQuantity because its definition contains errors.",
         "errorType" : "semantic",
         "errorSeverity" : "error",
         "type" : "CqlToElmError"
      }, {
         "startLine" : 39,
         "startChar" : 35,
         "endLine" : 39,
         "endChar" : 45,
         "message" : "Could not validate reference to expression MinQuantity because its definition contains errors.",
         "errorType" : "semantic",
         "errorSeverity" : "error",
         "type" : "CqlToElmError"
      }, {
         "startLine" : 40,
         "startChar" : 32,
         "endLine" : 40,
         "endChar" : 42,
         "message" : "Could not validate reference to expression MaxQuantity because its definition contains errors.",
         "errorType" : "semantic",
         "errorSeverity" : "error",
         "type" : "CqlToElmError"
      }, {
         "startLine" : 41,
         "startChar" : 33,
         "endLine" : 41,
         "endChar" : 43,
         "message" : "Could not validate reference to expression MinQuantity because its definition contains errors.",
         "errorType" : "semantic",
         "errorSeverity" : "error",
         "type" : "CqlToElmError"
      }, {
         "startLine" : 42,
         "startChar" : 30,
         "endLine" : 42,
         "endChar" : 46,
         "message" : "Could not resolve call to operator Divide with signature (System.String,System.String).",
         "errorType" : "semantic",
         "errorSeverity" : "error",
         "type" : "CqlToElmError"
      }, {
         "startLine" : 43,
         "startChar" : 31,
         "endLine" : 43,
         "endChar" : 41,
         "message" : "Could not validate reference to expression MaxQuantity because its definition contains errors.",
         "errorType" : "semantic",
         "errorSeverity" : "error",
         "type" : "CqlToElmError"
      }, {
         "startLine" : 44,
         "startChar" : 32,
         "endLine" : 44,
         "endChar" : 42,
         "message" : "Could not validate reference to expression MinQuantity because its definition contains errors.",
         "errorType" : "semantic",
         "errorSeverity" : "error",
         "type" : "CqlToElmError"
      }, {
         "startLine" : 45,
         "startChar" : 48,
         "endLine" : 45,
         "endChar" : 58,
         "message" : "Could not validate reference to expression MaxQuantity because its definition contains errors.",
         "errorType" : "semantic",
         "errorSeverity" : "error",
         "type" : "CqlToElmError"
      }, {
         "startLine" : 46,
         "startChar" : 53,
         "endLine" : 46,
         "endChar" : 63,
         "message" : "Could not validate reference to expression MinQuantity because its definition contains errors.",
         "errorType" : "semantic",
         "errorSeverity" : "error",
         "type" : "CqlToElmError"
      }, {
         "startLine" : 48,
         "startChar" : 29,
         "endLine" : 48,
         "endChar" : 54,
         "message" : "Could not resolve call to operator Add with signature (System.DateTime,System.String).",
         "errorType" : "semantic",
         "errorSeverity" : "error",
         "type" : "CqlToElmError"
      }, {
         "startLine" : 49,
         "startChar" : 30,
         "endLine" : 49,
         "endChar" : 56,
         "message" : "Could not resolve call to operator Add with signature (System.DateTime,System.String).",
         "errorType" : "semantic",
         "errorSeverity" : "error",
         "type" : "CqlToElmError"
      }, {
         "startLine" : 50,
         "startChar" : 34,
         "endLine" : 50,
         "endChar" : 60,
         "message" : "Could not resolve call to operator Subtract with signature (System.DateTime,System.String).",
         "errorType" : "semantic",
         "errorSeverity" : "error",
         "type" : "CqlToElmError"
      }, {
         "startLine" : 51,
         "startChar" : 35,
         "endLine" : 51,
         "endChar" : 60,
         "message" : "Could not resolve call to operator Subtract with signature (System.DateTime,System.String).",
         "errorType" : "semantic",
         "errorSeverity" : "error",
         "type" : "CqlToElmError"
      }, {
         "startLine" : 55,
         "startChar" : 25,
         "endLine" : 55,
         "endChar" : 46,
         "message" : "Could not resolve call to operator Add with signature (System.Date,System.String).",
         "errorType" : "semantic",
         "errorSeverity" : "error",
         "type" : "CqlToElmError"
      }, {
         "startLine" : 56,
         "startChar" : 26,
         "endLine" : 56,
         "endChar" : 48,
         "message" : "Could not resolve call to operator Add with signature (System.Date,System.String).",
         "errorType" : "semantic",
         "errorSeverity" : "error",
         "type" : "CqlToElmError"
      }, {
         "startLine" : 57,
         "startChar" : 30,
         "endLine" : 57,
         "endChar" : 52,
         "message" : "Could not resolve call to operator Subtract with signature (System.Date,System.String).",
         "errorType" : "semantic",
         "errorSeverity" : "error",
         "type" : "CqlToElmError"
      }, {
         "startLine" : 58,
         "startChar" : 31,
         "endLine" : 58,
         "endChar" : 52,
         "message" : "Could not resolve call to operator Subtract with signature (System.Date,System.String).",
         "errorType" : "semantic",
         "errorSeverity" : "error",
         "type" : "CqlToElmError"
      }, {
         "startLine" : 62,
         "startChar" : 25,
         "endLine" : 62,
         "endChar" : 49,
         "message" : "Could not resolve call to operator Add with signature (System.Time,System.String).",
         "errorType" : "semantic",
         "errorSeverity" : "error",
         "type" : "CqlToElmError"
      }, {
         "startLine" : 63,
         "startChar" : 26,
         "endLine" : 63,
         "endChar" : 51,
         "message" : "Could not resolve call to operator Add with signature (System.Time,System.String).",
         "errorType" : "semantic",
         "errorSeverity" : "error",
         "type" : "CqlToElmError"
      }, {
         "startLine" : 64,
         "startChar" : 30,
         "endLine" : 64,
         "endChar" : 55,
         "message" : "Could not resolve call to operator Subtract with signature (System.Time,System.String).",
         "errorType" : "semantic",
         "errorSeverity" : "error",
         "type" : "CqlToElmError"
      }, {
         "startLine" : 65,
         "startChar" : 31,
         "endLine" : 65,
         "endChar" : 55,
         "message" : "Could not resolve call to operator Subtract with signature (System.Time,System.String).",
         "errorType" : "semantic",
         "errorSeverity" : "error",
         "type" : "CqlToElmError"
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
            "localIdentifier" : "QUICK",
            "uri" : "http://hl7.org/fhir"
         } ]
      },
      "statements" : {
         "def" : [ {
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "type" : "SingletonFrom",
               "operand" : {
                  "dataType" : "{http://hl7.org/fhir}Patient",
                  "templateId" : "patient-qicore-qicore-patient",
                  "type" : "Retrieve"
               }
            }
         }, {
            "localId" : "6",
            "name" : "IntegerAddOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "6",
                  "s" : [ {
                     "value" : [ "define ","IntegerAddOverflow",": " ]
                  }, {
                     "r" : "5",
                     "s" : [ {
                        "r" : "3",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "2",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        } ]
                     }, {
                        "r" : "4",
                        "value" : [ " + ","1" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "5",
               "type" : "Add",
               "operand" : [ {
                  "localId" : "3",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "MaxValue"
               }, {
                  "localId" : "4",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "12",
            "name" : "IntegerAddUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "12",
                  "s" : [ {
                     "value" : [ "define ","IntegerAddUnderflow",": " ]
                  }, {
                     "r" : "11",
                     "s" : [ {
                        "r" : "8",
                        "s" : [ {
                           "value" : [ "minimum"," " ]
                        }, {
                           "r" : "7",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "10",
                        "s" : [ {
                           "r" : "9",
                           "value" : [ "-","1" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "11",
               "type" : "Add",
               "operand" : [ {
                  "localId" : "8",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "MinValue"
               }, {
                  "localId" : "10",
                  "type" : "Negate",
                  "operand" : {
                     "localId" : "9",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "18",
            "name" : "IntegerSubtractOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "18",
                  "s" : [ {
                     "value" : [ "define ","IntegerSubtractOverflow",": " ]
                  }, {
                     "r" : "17",
                     "s" : [ {
                        "r" : "14",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "13",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " - " ]
                     }, {
                        "r" : "16",
                        "s" : [ {
                           "r" : "15",
                           "value" : [ "-","1" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "17",
               "type" : "Subtract",
               "operand" : [ {
                  "localId" : "14",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "MaxValue"
               }, {
                  "localId" : "16",
                  "type" : "Negate",
                  "operand" : {
                     "localId" : "15",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "23",
            "name" : "IntegerSubtractUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "23",
                  "s" : [ {
                     "value" : [ "define ","IntegerSubtractUnderflow",": " ]
                  }, {
                     "r" : "22",
                     "s" : [ {
                        "r" : "20",
                        "s" : [ {
                           "value" : [ "minimum"," " ]
                        }, {
                           "r" : "19",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        } ]
                     }, {
                        "r" : "21",
                        "value" : [ " - ","1" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "22",
               "type" : "Subtract",
               "operand" : [ {
                  "localId" : "20",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "MinValue"
               }, {
                  "localId" : "21",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "28",
            "name" : "IntegerMultiplyOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "28",
                  "s" : [ {
                     "value" : [ "define ","IntegerMultiplyOverflow",": " ]
                  }, {
                     "r" : "27",
                     "s" : [ {
                        "r" : "25",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "24",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        } ]
                     }, {
                        "r" : "26",
                        "value" : [ " * ","2" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "27",
               "type" : "Multiply",
               "operand" : [ {
                  "localId" : "25",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "MaxValue"
               }, {
                  "localId" : "26",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "34",
            "name" : "IntegerMultiplyUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "34",
                  "s" : [ {
                     "value" : [ "define ","IntegerMultiplyUnderflow",": " ]
                  }, {
                     "r" : "33",
                     "s" : [ {
                        "r" : "30",
                        "s" : [ {
                           "value" : [ "minimum"," " ]
                        }, {
                           "r" : "29",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " * " ]
                     }, {
                        "r" : "32",
                        "s" : [ {
                           "r" : "31",
                           "value" : [ "-","2" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "33",
               "type" : "Multiply",
               "operand" : [ {
                  "localId" : "30",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "MinValue"
               }, {
                  "localId" : "32",
                  "type" : "Negate",
                  "operand" : {
                     "localId" : "31",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "39",
            "name" : "IntegerDivideOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "39",
                  "s" : [ {
                     "value" : [ "define ","IntegerDivideOverflow",": " ]
                  }, {
                     "r" : "38",
                     "s" : [ {
                        "r" : "36",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "35",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " / " ]
                     }, {
                        "r" : "37",
                        "s" : [ {
                           "r" : "37",
                           "value" : [ "(","0.5",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "38",
               "type" : "Divide",
               "operand" : [ {
                  "type" : "ToDecimal",
                  "operand" : {
                     "localId" : "36",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "MaxValue"
                  }
               }, {
                  "localId" : "37",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "0.5",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "45",
            "name" : "IntegerDivideUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "45",
                  "s" : [ {
                     "value" : [ "define ","IntegerDivideUnderflow",": " ]
                  }, {
                     "r" : "44",
                     "s" : [ {
                        "r" : "41",
                        "s" : [ {
                           "value" : [ "minimum"," " ]
                        }, {
                           "r" : "40",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " / " ]
                     }, {
                        "r" : "43",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "43",
                           "s" : [ {
                              "r" : "42",
                              "value" : [ "-","0.5" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "44",
               "type" : "Divide",
               "operand" : [ {
                  "type" : "ToDecimal",
                  "operand" : {
                     "localId" : "41",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "MinValue"
                  }
               }, {
                  "localId" : "43",
                  "type" : "Negate",
                  "operand" : {
                     "localId" : "42",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "0.5",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "49",
            "name" : "IntegerDivideByZero",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "49",
                  "s" : [ {
                     "value" : [ "define ","IntegerDivideByZero",": " ]
                  }, {
                     "r" : "48",
                     "s" : [ {
                        "r" : "46",
                        "value" : [ "1"," / ","0" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "48",
               "type" : "Divide",
               "operand" : [ {
                  "type" : "ToDecimal",
                  "operand" : {
                     "localId" : "46",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }
               }, {
                  "type" : "ToDecimal",
                  "operand" : {
                     "localId" : "47",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "54",
            "name" : "IntegerPowerOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "54",
                  "s" : [ {
                     "value" : [ "define ","IntegerPowerOverflow",": " ]
                  }, {
                     "r" : "53",
                     "s" : [ {
                        "r" : "51",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "51",
                           "s" : [ {
                              "value" : [ "maximum"," " ]
                           }, {
                              "r" : "50",
                              "s" : [ {
                                 "value" : [ "Integer" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "r" : "52",
                        "value" : [ "^","3" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "53",
               "type" : "Power",
               "operand" : [ {
                  "localId" : "51",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "MaxValue"
               }, {
                  "localId" : "52",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "3",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "59",
            "name" : "IntegerPowerUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "59",
                  "s" : [ {
                     "value" : [ "define ","IntegerPowerUnderflow",": " ]
                  }, {
                     "r" : "58",
                     "s" : [ {
                        "r" : "56",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "56",
                           "s" : [ {
                              "value" : [ "minimum"," " ]
                           }, {
                              "r" : "55",
                              "s" : [ {
                                 "value" : [ "Integer" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "r" : "57",
                        "value" : [ "^","3" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "58",
               "type" : "Power",
               "operand" : [ {
                  "localId" : "56",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "MinValue"
               }, {
                  "localId" : "57",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "3",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "63",
            "name" : "IntegerSuccessorOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "63",
                  "s" : [ {
                     "value" : [ "define ","IntegerSuccessorOverflow",": " ]
                  }, {
                     "r" : "62",
                     "s" : [ {
                        "value" : [ "successor of " ]
                     }, {
                        "r" : "61",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "60",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "62",
               "type" : "Successor",
               "operand" : {
                  "localId" : "61",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "MaxValue"
               }
            }
         }, {
            "localId" : "67",
            "name" : "IntegerPredecessorUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "67",
                  "s" : [ {
                     "value" : [ "define ","IntegerPredecessorUnderflow",": " ]
                  }, {
                     "r" : "66",
                     "s" : [ {
                        "value" : [ "predecessor of " ]
                     }, {
                        "r" : "65",
                        "s" : [ {
                           "value" : [ "minimum"," " ]
                        }, {
                           "r" : "64",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "66",
               "type" : "Predecessor",
               "operand" : {
                  "localId" : "65",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "MinValue"
               }
            }
         }, {
            "localId" : "72",
            "name" : "DecimalAddOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "72",
                  "s" : [ {
                     "value" : [ "define ","DecimalAddOverflow",": " ]
                  }, {
                     "r" : "71",
                     "s" : [ {
                        "r" : "69",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "68",
                           "s" : [ {
                              "value" : [ "Decimal" ]
                           } ]
                        } ]
                     }, {
                        "r" : "70",
                        "value" : [ " + ","1.0" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "71",
               "type" : "Add",
               "operand" : [ {
                  "localId" : "69",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "MaxValue"
               }, {
                  "localId" : "70",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "1.0",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "78",
            "name" : "DecimalAddUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "78",
                  "s" : [ {
                     "value" : [ "define ","DecimalAddUnderflow",": " ]
                  }, {
                     "r" : "77",
                     "s" : [ {
                        "r" : "74",
                        "s" : [ {
                           "value" : [ "minimum"," " ]
                        }, {
                           "r" : "73",
                           "s" : [ {
                              "value" : [ "Decimal" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "76",
                        "s" : [ {
                           "r" : "75",
                           "value" : [ "-","1.0" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "77",
               "type" : "Add",
               "operand" : [ {
                  "localId" : "74",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "MinValue"
               }, {
                  "localId" : "76",
                  "type" : "Negate",
                  "operand" : {
                     "localId" : "75",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "1.0",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "84",
            "name" : "DecimalSubtractOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "84",
                  "s" : [ {
                     "value" : [ "define ","DecimalSubtractOverflow",": " ]
                  }, {
                     "r" : "83",
                     "s" : [ {
                        "r" : "80",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "79",
                           "s" : [ {
                              "value" : [ "Decimal" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " - " ]
                     }, {
                        "r" : "82",
                        "s" : [ {
                           "r" : "81",
                           "value" : [ "-","1.0" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "83",
               "type" : "Subtract",
               "operand" : [ {
                  "localId" : "80",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "MaxValue"
               }, {
                  "localId" : "82",
                  "type" : "Negate",
                  "operand" : {
                     "localId" : "81",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "1.0",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "89",
            "name" : "DecimalSubtractUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "89",
                  "s" : [ {
                     "value" : [ "define ","DecimalSubtractUnderflow",": " ]
                  }, {
                     "r" : "88",
                     "s" : [ {
                        "r" : "86",
                        "s" : [ {
                           "value" : [ "minimum"," " ]
                        }, {
                           "r" : "85",
                           "s" : [ {
                              "value" : [ "Decimal" ]
                           } ]
                        } ]
                     }, {
                        "r" : "87",
                        "value" : [ " - ","1.0" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "88",
               "type" : "Subtract",
               "operand" : [ {
                  "localId" : "86",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "MinValue"
               }, {
                  "localId" : "87",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "1.0",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "94",
            "name" : "DecimalMultiplyOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "94",
                  "s" : [ {
                     "value" : [ "define ","DecimalMultiplyOverflow",": " ]
                  }, {
                     "r" : "93",
                     "s" : [ {
                        "r" : "91",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "90",
                           "s" : [ {
                              "value" : [ "Decimal" ]
                           } ]
                        } ]
                     }, {
                        "r" : "92",
                        "value" : [ " * ","2" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "93",
               "type" : "Multiply",
               "operand" : [ {
                  "localId" : "91",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "MaxValue"
               }, {
                  "type" : "ToDecimal",
                  "operand" : {
                     "localId" : "92",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "100",
            "name" : "DecimalMultiplyUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "100",
                  "s" : [ {
                     "value" : [ "define ","DecimalMultiplyUnderflow",": " ]
                  }, {
                     "r" : "99",
                     "s" : [ {
                        "r" : "96",
                        "s" : [ {
                           "value" : [ "minimum"," " ]
                        }, {
                           "r" : "95",
                           "s" : [ {
                              "value" : [ "Decimal" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " * " ]
                     }, {
                        "r" : "98",
                        "s" : [ {
                           "r" : "97",
                           "value" : [ "-","2" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "99",
               "type" : "Multiply",
               "operand" : [ {
                  "localId" : "96",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "MinValue"
               }, {
                  "type" : "ToDecimal",
                  "operand" : {
                     "localId" : "98",
                     "type" : "Negate",
                     "operand" : {
                        "localId" : "97",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }
                  }
               } ]
            }
         }, {
            "localId" : "105",
            "name" : "DecimalDivideOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "105",
                  "s" : [ {
                     "value" : [ "define ","DecimalDivideOverflow",": " ]
                  }, {
                     "r" : "104",
                     "s" : [ {
                        "r" : "102",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "101",
                           "s" : [ {
                              "value" : [ "Decimal" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " / " ]
                     }, {
                        "r" : "103",
                        "s" : [ {
                           "r" : "103",
                           "value" : [ "(","0.5",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "104",
               "type" : "Divide",
               "operand" : [ {
                  "localId" : "102",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "MaxValue"
               }, {
                  "localId" : "103",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "0.5",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "111",
            "name" : "DecimalDivideUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "111",
                  "s" : [ {
                     "value" : [ "define ","DecimalDivideUnderflow",": " ]
                  }, {
                     "r" : "110",
                     "s" : [ {
                        "r" : "107",
                        "s" : [ {
                           "value" : [ "minimum"," " ]
                        }, {
                           "r" : "106",
                           "s" : [ {
                              "value" : [ "Decimal" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " / " ]
                     }, {
                        "r" : "109",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "109",
                           "s" : [ {
                              "r" : "108",
                              "value" : [ "-","0.5" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "110",
               "type" : "Divide",
               "operand" : [ {
                  "localId" : "107",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "MinValue"
               }, {
                  "localId" : "109",
                  "type" : "Negate",
                  "operand" : {
                     "localId" : "108",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "0.5",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "115",
            "name" : "DecimalDivideByZero",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "115",
                  "s" : [ {
                     "value" : [ "define ","DecimalDivideByZero",": " ]
                  }, {
                     "r" : "114",
                     "s" : [ {
                        "r" : "112",
                        "value" : [ "1.0"," / ","0" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "114",
               "type" : "Divide",
               "operand" : [ {
                  "localId" : "112",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "1.0",
                  "type" : "Literal"
               }, {
                  "type" : "ToDecimal",
                  "operand" : {
                     "localId" : "113",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "120",
            "name" : "DecimalPowerOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "120",
                  "s" : [ {
                     "value" : [ "define ","DecimalPowerOverflow",": " ]
                  }, {
                     "r" : "119",
                     "s" : [ {
                        "r" : "117",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "117",
                           "s" : [ {
                              "value" : [ "maximum"," " ]
                           }, {
                              "r" : "116",
                              "s" : [ {
                                 "value" : [ "Decimal" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "r" : "118",
                        "value" : [ "^","2" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "119",
               "type" : "Power",
               "operand" : [ {
                  "localId" : "117",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "MaxValue"
               }, {
                  "type" : "ToDecimal",
                  "operand" : {
                     "localId" : "118",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "125",
            "name" : "DecimalPowerUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "125",
                  "s" : [ {
                     "value" : [ "define ","DecimalPowerUnderflow",": " ]
                  }, {
                     "r" : "124",
                     "s" : [ {
                        "r" : "122",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "122",
                           "s" : [ {
                              "value" : [ "minimum"," " ]
                           }, {
                              "r" : "121",
                              "s" : [ {
                                 "value" : [ "Decimal" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "r" : "123",
                        "value" : [ "^","3" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "124",
               "type" : "Power",
               "operand" : [ {
                  "localId" : "122",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "MinValue"
               }, {
                  "type" : "ToDecimal",
                  "operand" : {
                     "localId" : "123",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "129",
            "name" : "DecimalSuccessorOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "129",
                  "s" : [ {
                     "value" : [ "define ","DecimalSuccessorOverflow",": " ]
                  }, {
                     "r" : "128",
                     "s" : [ {
                        "value" : [ "successor of " ]
                     }, {
                        "r" : "127",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "126",
                           "s" : [ {
                              "value" : [ "Decimal" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "128",
               "type" : "Successor",
               "operand" : {
                  "localId" : "127",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "MaxValue"
               }
            }
         }, {
            "localId" : "133",
            "name" : "DecimalPredecessorUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "133",
                  "s" : [ {
                     "value" : [ "define ","DecimalPredecessorUnderflow",": " ]
                  }, {
                     "r" : "132",
                     "s" : [ {
                        "value" : [ "predecessor of " ]
                     }, {
                        "r" : "131",
                        "s" : [ {
                           "value" : [ "minimum"," " ]
                        }, {
                           "r" : "130",
                           "s" : [ {
                              "value" : [ "Decimal" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "132",
               "type" : "Predecessor",
               "operand" : {
                  "localId" : "131",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "MinValue"
               }
            }
         }, {
            "localId" : "138",
            "name" : "MaxQuantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "138",
                  "s" : [ {
                     "value" : [ "define ","MaxQuantity",": " ]
                  }, {
                     "r" : "137",
                     "s" : [ {
                        "value" : [ "Quantity","(" ]
                     }, {
                        "r" : "135",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "134",
                           "s" : [ {
                              "value" : [ "Decimal" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "136",
                        "s" : [ {
                           "value" : [ "'mm'" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "137",
               "type" : "Null"
            }
         }, {
            "localId" : "143",
            "name" : "MinQuantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "143",
                  "s" : [ {
                     "value" : [ "define ","MinQuantity",": " ]
                  }, {
                     "r" : "142",
                     "s" : [ {
                        "value" : [ "Quantity","(" ]
                     }, {
                        "r" : "140",
                        "s" : [ {
                           "value" : [ "minimum"," " ]
                        }, {
                           "r" : "139",
                           "s" : [ {
                              "value" : [ "Decimal" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "141",
                        "s" : [ {
                           "value" : [ "'mm'" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "142",
               "type" : "Null"
            }
         }, {
            "localId" : "147",
            "name" : "QuantityAddOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "147",
                  "s" : [ {
                     "value" : [ "define ","QuantityAddOverflow",": " ]
                  }, {
                     "r" : "146",
                     "s" : [ {
                        "r" : "144",
                        "s" : [ {
                           "value" : [ "MaxQuantity" ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "145",
                        "s" : [ {
                           "value" : [ "'1.0 mm'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "146",
               "type" : "Null"
            }
         }, {
            "localId" : "151",
            "name" : "QuantityAddUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "151",
                  "s" : [ {
                     "value" : [ "define ","QuantityAddUnderflow",": " ]
                  }, {
                     "r" : "150",
                     "s" : [ {
                        "r" : "148",
                        "s" : [ {
                           "value" : [ "MinQuantity" ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "149",
                        "s" : [ {
                           "value" : [ "'-1.0 mm'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "150",
               "type" : "Null"
            }
         }, {
            "localId" : "158",
            "name" : "QuantitySubtractOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "158",
                  "s" : [ {
                     "value" : [ "define ","QuantitySubtractOverflow",": " ]
                  }, {
                     "r" : "157",
                     "s" : [ {
                        "r" : "152",
                        "s" : [ {
                           "value" : [ "MaxQuantity" ]
                        } ]
                     }, {
                        "value" : [ " - " ]
                     }, {
                        "r" : "156",
                        "s" : [ {
                           "value" : [ "Quantity","(" ]
                        }, {
                           "r" : "154",
                           "s" : [ {
                              "r" : "153",
                              "value" : [ "-","1" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "155",
                           "s" : [ {
                              "value" : [ "'mm'" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "157",
               "type" : "Null"
            }
         }, {
            "localId" : "164",
            "name" : "QuantitySubtractUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "164",
                  "s" : [ {
                     "value" : [ "define ","QuantitySubtractUnderflow",": " ]
                  }, {
                     "r" : "163",
                     "s" : [ {
                        "r" : "159",
                        "s" : [ {
                           "value" : [ "MinQuantity" ]
                        } ]
                     }, {
                        "value" : [ " - " ]
                     }, {
                        "r" : "162",
                        "s" : [ {
                           "r" : "160",
                           "value" : [ "Quantity","(","1",", " ]
                        }, {
                           "r" : "161",
                           "s" : [ {
                              "value" : [ "'mm'" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "163",
               "type" : "Null"
            }
         }, {
            "localId" : "170",
            "name" : "QuantityMultiplyOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "170",
                  "s" : [ {
                     "value" : [ "define ","QuantityMultiplyOverflow",": " ]
                  }, {
                     "r" : "169",
                     "s" : [ {
                        "r" : "165",
                        "s" : [ {
                           "value" : [ "MaxQuantity" ]
                        } ]
                     }, {
                        "value" : [ " * " ]
                     }, {
                        "r" : "168",
                        "s" : [ {
                           "r" : "166",
                           "value" : [ "Quantity","(","2",", " ]
                        }, {
                           "r" : "167",
                           "s" : [ {
                              "value" : [ "'mm'" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "169",
               "type" : "Null"
            }
         }, {
            "localId" : "176",
            "name" : "QuantityMultiplyUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "176",
                  "s" : [ {
                     "value" : [ "define ","QuantityMultiplyUnderflow",": " ]
                  }, {
                     "r" : "175",
                     "s" : [ {
                        "r" : "171",
                        "s" : [ {
                           "value" : [ "MinQuantity" ]
                        } ]
                     }, {
                        "value" : [ " * " ]
                     }, {
                        "r" : "174",
                        "s" : [ {
                           "r" : "172",
                           "value" : [ "Quantity","(","2",", " ]
                        }, {
                           "r" : "173",
                           "s" : [ {
                              "value" : [ "'mm'" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "175",
               "type" : "Null"
            }
         }, {
            "localId" : "182",
            "name" : "QuantityDivideOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "182",
                  "s" : [ {
                     "value" : [ "define ","QuantityDivideOverflow",": " ]
                  }, {
                     "r" : "181",
                     "s" : [ {
                        "r" : "177",
                        "s" : [ {
                           "value" : [ "MaxQuantity" ]
                        } ]
                     }, {
                        "value" : [ " / " ]
                     }, {
                        "r" : "180",
                        "s" : [ {
                           "r" : "178",
                           "value" : [ "Quantity","(","0.5",", " ]
                        }, {
                           "r" : "179",
                           "s" : [ {
                              "value" : [ "'mm'" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "181",
               "type" : "Null"
            }
         }, {
            "localId" : "189",
            "name" : "QuantityDivideUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "189",
                  "s" : [ {
                     "value" : [ "define ","QuantityDivideUnderflow",": " ]
                  }, {
                     "r" : "188",
                     "s" : [ {
                        "r" : "183",
                        "s" : [ {
                           "value" : [ "MinQuantity" ]
                        } ]
                     }, {
                        "value" : [ " / " ]
                     }, {
                        "r" : "187",
                        "s" : [ {
                           "value" : [ "Quantity","(" ]
                        }, {
                           "r" : "185",
                           "s" : [ {
                              "r" : "184",
                              "value" : [ "-","0.5" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "186",
                           "s" : [ {
                              "value" : [ "'mm'" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "188",
               "type" : "Null"
            }
         }, {
            "localId" : "193",
            "name" : "QuantityDivideByZero",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "193",
                  "s" : [ {
                     "value" : [ "define ","QuantityDivideByZero",": " ]
                  }, {
                     "r" : "192",
                     "s" : [ {
                        "r" : "190",
                        "s" : [ {
                           "value" : [ "'1.0 mm'" ]
                        } ]
                     }, {
                        "value" : [ " / " ]
                     }, {
                        "r" : "191",
                        "s" : [ {
                           "value" : [ "'0 mm'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "192",
               "type" : "Null"
            }
         }, {
            "localId" : "197",
            "name" : "QuantityPowerOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "197",
                  "s" : [ {
                     "value" : [ "define ","QuantityPowerOverflow",": " ]
                  }, {
                     "r" : "196",
                     "s" : [ {
                        "r" : "194",
                        "s" : [ {
                           "value" : [ "MaxQuantity" ]
                        } ]
                     }, {
                        "r" : "195",
                        "value" : [ "^","3" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "196",
               "type" : "Null"
            }
         }, {
            "localId" : "201",
            "name" : "QuantityPowerUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "201",
                  "s" : [ {
                     "value" : [ "define ","QuantityPowerUnderflow",": " ]
                  }, {
                     "r" : "200",
                     "s" : [ {
                        "r" : "198",
                        "s" : [ {
                           "value" : [ "MinQuantity" ]
                        } ]
                     }, {
                        "r" : "199",
                        "value" : [ "^","3" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "200",
               "type" : "Null"
            }
         }, {
            "localId" : "204",
            "name" : "QuantitySuccessorOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "204",
                  "s" : [ {
                     "value" : [ "define ","QuantitySuccessorOverflow",": " ]
                  }, {
                     "r" : "203",
                     "s" : [ {
                        "value" : [ "successor of " ]
                     }, {
                        "r" : "202",
                        "s" : [ {
                           "value" : [ "MaxQuantity" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "203",
               "type" : "Null"
            }
         }, {
            "localId" : "207",
            "name" : "QuantityPredecessorUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "207",
                  "s" : [ {
                     "value" : [ "define ","QuantityPredecessorUnderflow",": " ]
                  }, {
                     "r" : "206",
                     "s" : [ {
                        "value" : [ "predecessor of " ]
                     }, {
                        "r" : "205",
                        "s" : [ {
                           "value" : [ "MinQuantity" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "206",
               "type" : "Null"
            }
         }, {
            "localId" : "212",
            "name" : "DateTimeAddOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "define ","DateTimeAddOverflow",": " ]
                  }, {
                     "r" : "211",
                     "s" : [ {
                        "r" : "209",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "208",
                           "s" : [ {
                              "value" : [ "DateTime" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "210",
                        "s" : [ {
                           "value" : [ "'1 day'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "211",
               "type" : "Null"
            }
         }, {
            "localId" : "217",
            "name" : "DateTimeAddUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "217",
                  "s" : [ {
                     "value" : [ "define ","DateTimeAddUnderflow",": " ]
                  }, {
                     "r" : "216",
                     "s" : [ {
                        "r" : "214",
                        "s" : [ {
                           "value" : [ "minimum"," " ]
                        }, {
                           "r" : "213",
                           "s" : [ {
                              "value" : [ "DateTime" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "215",
                        "s" : [ {
                           "value" : [ "'-1 day'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "216",
               "type" : "Null"
            }
         }, {
            "localId" : "222",
            "name" : "DateTimeSubtractOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "222",
                  "s" : [ {
                     "value" : [ "define ","DateTimeSubtractOverflow",": " ]
                  }, {
                     "r" : "221",
                     "s" : [ {
                        "r" : "219",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "218",
                           "s" : [ {
                              "value" : [ "DateTime" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " - " ]
                     }, {
                        "r" : "220",
                        "s" : [ {
                           "value" : [ "'-1 day'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "221",
               "type" : "Null"
            }
         }, {
            "localId" : "227",
            "name" : "DateTimeSubtractUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "227",
                  "s" : [ {
                     "value" : [ "define ","DateTimeSubtractUnderflow",": " ]
                  }, {
                     "r" : "226",
                     "s" : [ {
                        "r" : "224",
                        "s" : [ {
                           "value" : [ "minimum"," " ]
                        }, {
                           "r" : "223",
                           "s" : [ {
                              "value" : [ "DateTime" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " - " ]
                     }, {
                        "r" : "225",
                        "s" : [ {
                           "value" : [ "'1 day'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "226",
               "type" : "Null"
            }
         }, {
            "localId" : "231",
            "name" : "DateTimeSuccessorOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "231",
                  "s" : [ {
                     "value" : [ "define ","DateTimeSuccessorOverflow",": " ]
                  }, {
                     "r" : "230",
                     "s" : [ {
                        "value" : [ "successor of " ]
                     }, {
                        "r" : "229",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "228",
                           "s" : [ {
                              "value" : [ "DateTime" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "230",
               "type" : "Successor",
               "operand" : {
                  "localId" : "229",
                  "valueType" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "MaxValue"
               }
            }
         }, {
            "localId" : "235",
            "name" : "DateTimePredecessorUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "235",
                  "s" : [ {
                     "value" : [ "define ","DateTimePredecessorUnderflow",": " ]
                  }, {
                     "r" : "234",
                     "s" : [ {
                        "value" : [ "predecessor of " ]
                     }, {
                        "r" : "233",
                        "s" : [ {
                           "value" : [ "minimum"," " ]
                        }, {
                           "r" : "232",
                           "s" : [ {
                              "value" : [ "DateTime" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "234",
               "type" : "Predecessor",
               "operand" : {
                  "localId" : "233",
                  "valueType" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "MinValue"
               }
            }
         }, {
            "localId" : "240",
            "name" : "DateAddOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "240",
                  "s" : [ {
                     "value" : [ "define ","DateAddOverflow",": " ]
                  }, {
                     "r" : "239",
                     "s" : [ {
                        "r" : "237",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "236",
                           "s" : [ {
                              "value" : [ "Date" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "238",
                        "s" : [ {
                           "value" : [ "'1 day'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "239",
               "type" : "Null"
            }
         }, {
            "localId" : "245",
            "name" : "DateAddUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "245",
                  "s" : [ {
                     "value" : [ "define ","DateAddUnderflow",": " ]
                  }, {
                     "r" : "244",
                     "s" : [ {
                        "r" : "242",
                        "s" : [ {
                           "value" : [ "minimum"," " ]
                        }, {
                           "r" : "241",
                           "s" : [ {
                              "value" : [ "Date" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "243",
                        "s" : [ {
                           "value" : [ "'-1 day'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "244",
               "type" : "Null"
            }
         }, {
            "localId" : "250",
            "name" : "DateSubtractOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "250",
                  "s" : [ {
                     "value" : [ "define ","DateSubtractOverflow",": " ]
                  }, {
                     "r" : "249",
                     "s" : [ {
                        "r" : "247",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "246",
                           "s" : [ {
                              "value" : [ "Date" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " - " ]
                     }, {
                        "r" : "248",
                        "s" : [ {
                           "value" : [ "'-1 day'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "249",
               "type" : "Null"
            }
         }, {
            "localId" : "255",
            "name" : "DateSubtractUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "255",
                  "s" : [ {
                     "value" : [ "define ","DateSubtractUnderflow",": " ]
                  }, {
                     "r" : "254",
                     "s" : [ {
                        "r" : "252",
                        "s" : [ {
                           "value" : [ "minimum"," " ]
                        }, {
                           "r" : "251",
                           "s" : [ {
                              "value" : [ "Date" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " - " ]
                     }, {
                        "r" : "253",
                        "s" : [ {
                           "value" : [ "'1 day'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "254",
               "type" : "Null"
            }
         }, {
            "localId" : "259",
            "name" : "DateSuccessorOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "259",
                  "s" : [ {
                     "value" : [ "define ","DateSuccessorOverflow",": " ]
                  }, {
                     "r" : "258",
                     "s" : [ {
                        "value" : [ "successor of " ]
                     }, {
                        "r" : "257",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "256",
                           "s" : [ {
                              "value" : [ "Date" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "258",
               "type" : "Successor",
               "operand" : {
                  "localId" : "257",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "MaxValue"
               }
            }
         }, {
            "localId" : "263",
            "name" : "DatePredecessorUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "263",
                  "s" : [ {
                     "value" : [ "define ","DatePredecessorUnderflow",": " ]
                  }, {
                     "r" : "262",
                     "s" : [ {
                        "value" : [ "predecessor of " ]
                     }, {
                        "r" : "261",
                        "s" : [ {
                           "value" : [ "minimum"," " ]
                        }, {
                           "r" : "260",
                           "s" : [ {
                              "value" : [ "Date" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "262",
               "type" : "Predecessor",
               "operand" : {
                  "localId" : "261",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "MinValue"
               }
            }
         }, {
            "localId" : "268",
            "name" : "TimeAddOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "268",
                  "s" : [ {
                     "value" : [ "define ","TimeAddOverflow",": " ]
                  }, {
                     "r" : "267",
                     "s" : [ {
                        "r" : "265",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "264",
                           "s" : [ {
                              "value" : [ "Time" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "266",
                        "s" : [ {
                           "value" : [ "'1 second'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "267",
               "type" : "Null"
            }
         }, {
            "localId" : "273",
            "name" : "TimeAddUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "273",
                  "s" : [ {
                     "value" : [ "define ","TimeAddUnderflow",": " ]
                  }, {
                     "r" : "272",
                     "s" : [ {
                        "r" : "270",
                        "s" : [ {
                           "value" : [ "minimum"," " ]
                        }, {
                           "r" : "269",
                           "s" : [ {
                              "value" : [ "Time" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "271",
                        "s" : [ {
                           "value" : [ "'-1 second'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "272",
               "type" : "Null"
            }
         }, {
            "localId" : "278",
            "name" : "TimeSubtractOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "278",
                  "s" : [ {
                     "value" : [ "define ","TimeSubtractOverflow",": " ]
                  }, {
                     "r" : "277",
                     "s" : [ {
                        "r" : "275",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "274",
                           "s" : [ {
                              "value" : [ "Time" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " - " ]
                     }, {
                        "r" : "276",
                        "s" : [ {
                           "value" : [ "'-1 second'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "277",
               "type" : "Null"
            }
         }, {
            "localId" : "283",
            "name" : "TimeSubtractUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "283",
                  "s" : [ {
                     "value" : [ "define ","TimeSubtractUnderflow",": " ]
                  }, {
                     "r" : "282",
                     "s" : [ {
                        "r" : "280",
                        "s" : [ {
                           "value" : [ "minimum"," " ]
                        }, {
                           "r" : "279",
                           "s" : [ {
                              "value" : [ "Time" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " - " ]
                     }, {
                        "r" : "281",
                        "s" : [ {
                           "value" : [ "'1 second'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "282",
               "type" : "Null"
            }
         }, {
            "localId" : "287",
            "name" : "TimeSuccessorOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "287",
                  "s" : [ {
                     "value" : [ "define ","TimeSuccessorOverflow",": " ]
                  }, {
                     "r" : "286",
                     "s" : [ {
                        "value" : [ "successor of " ]
                     }, {
                        "r" : "285",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "284",
                           "s" : [ {
                              "value" : [ "Time" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "286",
               "type" : "Successor",
               "operand" : {
                  "localId" : "285",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Time",
                  "type" : "MaxValue"
               }
            }
         }, {
            "localId" : "291",
            "name" : "TimePredecessorUnderflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "291",
                  "s" : [ {
                     "value" : [ "define ","TimePredecessorUnderflow",": " ]
                  }, {
                     "r" : "290",
                     "s" : [ {
                        "value" : [ "predecessor of " ]
                     }, {
                        "r" : "289",
                        "s" : [ {
                           "value" : [ "minimum"," " ]
                        }, {
                           "r" : "288",
                           "s" : [ {
                              "value" : [ "Time" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "290",
               "type" : "Predecessor",
               "operand" : {
                  "localId" : "289",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Time",
                  "type" : "MinValue"
               }
            }
         }, {
            "localId" : "295",
            "name" : "ExpOverflow",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "295",
                  "s" : [ {
                     "value" : [ "define ","ExpOverflow",": " ]
                  }, {
                     "r" : "294",
                     "s" : [ {
                        "value" : [ "Exp","(" ]
                     }, {
                        "r" : "293",
                        "s" : [ {
                           "value" : [ "maximum"," " ]
                        }, {
                           "r" : "292",
                           "s" : [ {
                              "value" : [ "Decimal" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "294",
               "type" : "Exp",
               "operand" : {
                  "localId" : "293",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "MaxValue"
               }
            }
         } ]
      }
   }
}

