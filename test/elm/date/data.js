/*
   WARNING: This is a GENERATED file.  Do not manually edit!

   To generate this file:
       - Edit data.cql to add a CQL Snippet
       - From java dir: ./gradlew :cql-to-elm:generateTestData
*/

/* eslint-disable */

/* Date
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define Year: Date(2012)
define Month: Date(2012, 2)
define Day: Date(2012, 2, 15)
*/

module.exports['Date'] = {
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
            "r" : "225",
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
            "name" : "Year",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","Year",": " ]
                  }, {
                     "r" : "216",
                     "s" : [ {
                        "r" : "213",
                        "value" : [ "Date","(","2012",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "216",
               "type" : "Date",
               "signature" : [ ],
               "year" : {
                  "localId" : "213",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2012",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "218",
            "name" : "Month",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "218",
                  "s" : [ {
                     "value" : [ "","define ","Month",": " ]
                  }, {
                     "r" : "223",
                     "s" : [ {
                        "r" : "219",
                        "value" : [ "Date","(","2012",", ","2",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "223",
               "type" : "Date",
               "signature" : [ ],
               "year" : {
                  "localId" : "219",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2012",
                  "type" : "Literal"
               },
               "month" : {
                  "localId" : "220",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "225",
            "name" : "Day",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "225",
                  "s" : [ {
                     "value" : [ "","define ","Day",": " ]
                  }, {
                     "r" : "231",
                     "s" : [ {
                        "r" : "226",
                        "value" : [ "Date","(","2012",", ","2",", ","15",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "231",
               "type" : "Date",
               "signature" : [ ],
               "year" : {
                  "localId" : "226",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2012",
                  "type" : "Literal"
               },
               "month" : {
                  "localId" : "227",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "type" : "Literal"
               },
               "day" : {
                  "localId" : "228",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "15",
                  "type" : "Literal"
               }
            }
         } ]
      }
   }
}

/* DateComponentFrom
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define IdesOfMarch: Date(2000, 3, 15)
define Year: year from IdesOfMarch
define Month: month from IdesOfMarch
define Day: day from IdesOfMarch
define ImpreciseIdesOfMarch: Date(2000, 3)
define ImpreciseComponentTuple: Tuple {
  Year: year from ImpreciseIdesOfMarch,
  Month: month from ImpreciseIdesOfMarch,
  Day: day from ImpreciseIdesOfMarch
}
define NullDate: year from (null as Date)
*/

module.exports['DateComponentFrom'] = {
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
            "r" : "248",
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
            "name" : "IdesOfMarch",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","IdesOfMarch",": " ]
                  }, {
                     "r" : "218",
                     "s" : [ {
                        "r" : "213",
                        "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "218",
               "type" : "Date",
               "signature" : [ ],
               "year" : {
                  "localId" : "213",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2000",
                  "type" : "Literal"
               },
               "month" : {
                  "localId" : "214",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "3",
                  "type" : "Literal"
               },
               "day" : {
                  "localId" : "215",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "15",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "220",
            "name" : "Year",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "220",
                  "s" : [ {
                     "value" : [ "","define ","Year",": " ]
                  }, {
                     "r" : "221",
                     "s" : [ {
                        "value" : [ "year from " ]
                     }, {
                        "r" : "222",
                        "s" : [ {
                           "value" : [ "IdesOfMarch" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "221",
               "precision" : "Year",
               "type" : "DateTimeComponentFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "222",
                  "name" : "IdesOfMarch",
                  "type" : "ExpressionRef"
               }
            }
         }, {
            "localId" : "224",
            "name" : "Month",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "224",
                  "s" : [ {
                     "value" : [ "","define ","Month",": " ]
                  }, {
                     "r" : "225",
                     "s" : [ {
                        "value" : [ "month from " ]
                     }, {
                        "r" : "226",
                        "s" : [ {
                           "value" : [ "IdesOfMarch" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "225",
               "precision" : "Month",
               "type" : "DateTimeComponentFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "226",
                  "name" : "IdesOfMarch",
                  "type" : "ExpressionRef"
               }
            }
         }, {
            "localId" : "228",
            "name" : "Day",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "228",
                  "s" : [ {
                     "value" : [ "","define ","Day",": " ]
                  }, {
                     "r" : "229",
                     "s" : [ {
                        "value" : [ "day from " ]
                     }, {
                        "r" : "230",
                        "s" : [ {
                           "value" : [ "IdesOfMarch" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "229",
               "precision" : "Day",
               "type" : "DateTimeComponentFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "230",
                  "name" : "IdesOfMarch",
                  "type" : "ExpressionRef"
               }
            }
         }, {
            "localId" : "232",
            "name" : "ImpreciseIdesOfMarch",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "232",
                  "s" : [ {
                     "value" : [ "","define ","ImpreciseIdesOfMarch",": " ]
                  }, {
                     "r" : "237",
                     "s" : [ {
                        "r" : "233",
                        "value" : [ "Date","(","2000",", ","3",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "237",
               "type" : "Date",
               "signature" : [ ],
               "year" : {
                  "localId" : "233",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2000",
                  "type" : "Literal"
               },
               "month" : {
                  "localId" : "234",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "3",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "239",
            "name" : "ImpreciseComponentTuple",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "239",
                  "s" : [ {
                     "value" : [ "","define ","ImpreciseComponentTuple",": " ]
                  }, {
                     "r" : "240",
                     "s" : [ {
                        "value" : [ "Tuple {\n  " ]
                     }, {
                        "s" : [ {
                           "value" : [ "Year",": " ]
                        }, {
                           "r" : "241",
                           "s" : [ {
                              "value" : [ "year from " ]
                           }, {
                              "r" : "242",
                              "s" : [ {
                                 "value" : [ "ImpreciseIdesOfMarch" ]
                              } ]
                           } ]
                        } ]
                     }, {
                        "value" : [ ",\n  " ]
                     }, {
                        "s" : [ {
                           "value" : [ "Month",": " ]
                        }, {
                           "r" : "243",
                           "s" : [ {
                              "value" : [ "month from " ]
                           }, {
                              "r" : "244",
                              "s" : [ {
                                 "value" : [ "ImpreciseIdesOfMarch" ]
                              } ]
                           } ]
                        } ]
                     }, {
                        "value" : [ ",\n  " ]
                     }, {
                        "s" : [ {
                           "value" : [ "Day",": " ]
                        }, {
                           "r" : "245",
                           "s" : [ {
                              "value" : [ "day from " ]
                           }, {
                              "r" : "246",
                              "s" : [ {
                                 "value" : [ "ImpreciseIdesOfMarch" ]
                              } ]
                           } ]
                        } ]
                     }, {
                        "value" : [ "\n}" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "240",
               "type" : "Tuple",
               "element" : [ {
                  "name" : "Year",
                  "value" : {
                     "localId" : "241",
                     "precision" : "Year",
                     "type" : "DateTimeComponentFrom",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "242",
                        "name" : "ImpreciseIdesOfMarch",
                        "type" : "ExpressionRef"
                     }
                  }
               }, {
                  "name" : "Month",
                  "value" : {
                     "localId" : "243",
                     "precision" : "Month",
                     "type" : "DateTimeComponentFrom",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "244",
                        "name" : "ImpreciseIdesOfMarch",
                        "type" : "ExpressionRef"
                     }
                  }
               }, {
                  "name" : "Day",
                  "value" : {
                     "localId" : "245",
                     "precision" : "Day",
                     "type" : "DateTimeComponentFrom",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "246",
                        "name" : "ImpreciseIdesOfMarch",
                        "type" : "ExpressionRef"
                     }
                  }
               } ]
            }
         }, {
            "localId" : "248",
            "name" : "NullDate",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "248",
                  "s" : [ {
                     "value" : [ "","define ","NullDate",": " ]
                  }, {
                     "r" : "249",
                     "s" : [ {
                        "value" : [ "year from " ]
                     }, {
                        "r" : "250",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "250",
                           "s" : [ {
                              "r" : "251",
                              "value" : [ "null"," as " ]
                           }, {
                              "r" : "252",
                              "s" : [ {
                                 "value" : [ "Date" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "249",
               "precision" : "Year",
               "type" : "DateTimeComponentFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "250",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "251",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "252",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         } ]
      }
   }
}

/* SameAs
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define SameYear: Date(2000, 3, 15) same year as Date(2000, 11, 23)
define NotSameYear: Date(2000, 3, 15) same year as Date(2001, 11, 23)
define SameMonth: Date(2000, 3, 15) same month as Date(2000, 3, 23)
define NotSameMonth: Date(2000, 3, 15) same month as Date(2000, 4, 23)
define SameMonthWrongYear: Date(2000, 3, 15) same month as Date(2001, 3, 23)
define SameDay: Date(2000, 3, 15) same day as Date(2000, 3, 15)
define NotSameDay: Date(2000, 3, 15) same day as Date(2000, 3, 23)
define SameDayWrongMonth: Date(2000, 3, 15) same day as Date(2000, 4, 15)
define Same: Date(2000, 3, 15) same as Date(2000, 3, 15)
define NotSame: Date(2000, 3, 16) same as Date(2000, 3, 15)
define NullLeft: null same as Date(2000, 3, 15)
define NullRight: Date(2000, 3, 15) same as (null as Date)
define NullBoth: (null as Date) same as null
*/

module.exports['SameAs'] = {
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
            "r" : "385",
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
            "name" : "SameYear",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","SameYear",": " ]
                  }, {
                     "r" : "225",
                     "s" : [ {
                        "r" : "218",
                        "s" : [ {
                           "r" : "213",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "225",
                        "value" : [ " ","same year as"," " ]
                     }, {
                        "r" : "224",
                        "s" : [ {
                           "r" : "219",
                           "value" : [ "Date","(","2000",", ","11",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "225",
               "precision" : "Year",
               "type" : "SameAs",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "218",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "213",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "214",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "215",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "224",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "219",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "220",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "11",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "221",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "227",
            "name" : "NotSameYear",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "227",
                  "s" : [ {
                     "value" : [ "","define ","NotSameYear",": " ]
                  }, {
                     "r" : "240",
                     "s" : [ {
                        "r" : "233",
                        "s" : [ {
                           "r" : "228",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "240",
                        "value" : [ " ","same year as"," " ]
                     }, {
                        "r" : "239",
                        "s" : [ {
                           "r" : "234",
                           "value" : [ "Date","(","2001",", ","11",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "240",
               "precision" : "Year",
               "type" : "SameAs",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "233",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "228",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "229",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "230",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "239",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "234",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2001",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "235",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "11",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "236",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "242",
            "name" : "SameMonth",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "242",
                  "s" : [ {
                     "value" : [ "","define ","SameMonth",": " ]
                  }, {
                     "r" : "255",
                     "s" : [ {
                        "r" : "248",
                        "s" : [ {
                           "r" : "243",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "255",
                        "value" : [ " ","same month as"," " ]
                     }, {
                        "r" : "254",
                        "s" : [ {
                           "r" : "249",
                           "value" : [ "Date","(","2000",", ","3",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "255",
               "precision" : "Month",
               "type" : "SameAs",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "248",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "243",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "244",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "245",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "254",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "249",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "250",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "251",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "257",
            "name" : "NotSameMonth",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "257",
                  "s" : [ {
                     "value" : [ "","define ","NotSameMonth",": " ]
                  }, {
                     "r" : "270",
                     "s" : [ {
                        "r" : "263",
                        "s" : [ {
                           "r" : "258",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "270",
                        "value" : [ " ","same month as"," " ]
                     }, {
                        "r" : "269",
                        "s" : [ {
                           "r" : "264",
                           "value" : [ "Date","(","2000",", ","4",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "270",
               "precision" : "Month",
               "type" : "SameAs",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "263",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "258",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "259",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "260",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "269",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "264",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "265",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "266",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "272",
            "name" : "SameMonthWrongYear",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "272",
                  "s" : [ {
                     "value" : [ "","define ","SameMonthWrongYear",": " ]
                  }, {
                     "r" : "285",
                     "s" : [ {
                        "r" : "278",
                        "s" : [ {
                           "r" : "273",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "285",
                        "value" : [ " ","same month as"," " ]
                     }, {
                        "r" : "284",
                        "s" : [ {
                           "r" : "279",
                           "value" : [ "Date","(","2001",", ","3",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "285",
               "precision" : "Month",
               "type" : "SameAs",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "278",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "273",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "274",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "275",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "284",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "279",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2001",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "280",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "281",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "287",
            "name" : "SameDay",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "287",
                  "s" : [ {
                     "value" : [ "","define ","SameDay",": " ]
                  }, {
                     "r" : "300",
                     "s" : [ {
                        "r" : "293",
                        "s" : [ {
                           "r" : "288",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "300",
                        "value" : [ " ","same day as"," " ]
                     }, {
                        "r" : "299",
                        "s" : [ {
                           "r" : "294",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "300",
               "precision" : "Day",
               "type" : "SameAs",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "293",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "288",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "289",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "290",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "299",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "294",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "295",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "296",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "302",
            "name" : "NotSameDay",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "302",
                  "s" : [ {
                     "value" : [ "","define ","NotSameDay",": " ]
                  }, {
                     "r" : "315",
                     "s" : [ {
                        "r" : "308",
                        "s" : [ {
                           "r" : "303",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "315",
                        "value" : [ " ","same day as"," " ]
                     }, {
                        "r" : "314",
                        "s" : [ {
                           "r" : "309",
                           "value" : [ "Date","(","2000",", ","3",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "315",
               "precision" : "Day",
               "type" : "SameAs",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "308",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "303",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "304",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "305",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "314",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "309",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "310",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "311",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "317",
            "name" : "SameDayWrongMonth",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "317",
                  "s" : [ {
                     "value" : [ "","define ","SameDayWrongMonth",": " ]
                  }, {
                     "r" : "330",
                     "s" : [ {
                        "r" : "323",
                        "s" : [ {
                           "r" : "318",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "330",
                        "value" : [ " ","same day as"," " ]
                     }, {
                        "r" : "329",
                        "s" : [ {
                           "r" : "324",
                           "value" : [ "Date","(","2000",", ","4",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "330",
               "precision" : "Day",
               "type" : "SameAs",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "323",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "318",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "319",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "320",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "329",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "324",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "325",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "326",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "332",
            "name" : "Same",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "332",
                  "s" : [ {
                     "value" : [ "","define ","Same",": " ]
                  }, {
                     "r" : "345",
                     "s" : [ {
                        "r" : "338",
                        "s" : [ {
                           "r" : "333",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "345",
                        "value" : [ " ","same as"," " ]
                     }, {
                        "r" : "344",
                        "s" : [ {
                           "r" : "339",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "345",
               "type" : "SameAs",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "338",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "333",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "334",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "335",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "344",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "339",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "340",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "341",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "347",
            "name" : "NotSame",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "347",
                  "s" : [ {
                     "value" : [ "","define ","NotSame",": " ]
                  }, {
                     "r" : "360",
                     "s" : [ {
                        "r" : "353",
                        "s" : [ {
                           "r" : "348",
                           "value" : [ "Date","(","2000",", ","3",", ","16",")" ]
                        } ]
                     }, {
                        "r" : "360",
                        "value" : [ " ","same as"," " ]
                     }, {
                        "r" : "359",
                        "s" : [ {
                           "r" : "354",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "360",
               "type" : "SameAs",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "353",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "348",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "349",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "350",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "16",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "359",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "354",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "355",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "356",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "362",
            "name" : "NullLeft",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "362",
                  "s" : [ {
                     "value" : [ "","define ","NullLeft",": " ]
                  }, {
                     "r" : "370",
                     "s" : [ {
                        "r" : "363",
                        "value" : [ "null"," ","same as"," " ]
                     }, {
                        "r" : "369",
                        "s" : [ {
                           "r" : "364",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "370",
               "type" : "SameAs",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "371",
                  "asType" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "363",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "369",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "364",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "365",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "366",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "373",
            "name" : "NullRight",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "373",
                  "s" : [ {
                     "value" : [ "","define ","NullRight",": " ]
                  }, {
                     "r" : "383",
                     "s" : [ {
                        "r" : "379",
                        "s" : [ {
                           "r" : "374",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "383",
                        "value" : [ " ","same as"," " ]
                     }, {
                        "r" : "380",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "380",
                           "s" : [ {
                              "r" : "381",
                              "value" : [ "null"," as " ]
                           }, {
                              "r" : "382",
                              "s" : [ {
                                 "value" : [ "Date" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "383",
               "type" : "SameAs",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "379",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "374",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "375",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "376",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "380",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "381",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "382",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  }
               } ]
            }
         }, {
            "localId" : "385",
            "name" : "NullBoth",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "385",
                  "s" : [ {
                     "value" : [ "","define ","NullBoth",": " ]
                  }, {
                     "r" : "390",
                     "s" : [ {
                        "r" : "386",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "386",
                           "s" : [ {
                              "r" : "387",
                              "value" : [ "null"," as " ]
                           }, {
                              "r" : "388",
                              "s" : [ {
                                 "value" : [ "Date" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "r" : "390",
                        "value" : [ " ","same as"," ","null" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "390",
               "type" : "SameAs",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "386",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "387",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "388",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "391",
                  "asType" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "389",
                     "type" : "Null"
                  }
               } ]
            }
         } ]
      }
   }
}

/* SameOrAfter
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define SameYear: Date(2000, 3, 15) same year or after Date(2000, 11, 23)
define YearAfter: Date(2000, 3, 15) same year or after Date(1999, 11, 23)
define YearBefore: Date(2000, 3, 15) same year or after Date(2001, 11, 23)
define SameMonth: Date(2000, 3, 15) same month or after Date(2000, 3, 23)
define MonthAfter: Date(2000, 3, 15) same month or after Date(2000, 2, 23)
define MonthBefore: Date(2000, 3, 15) same month or after Date(2000, 4, 23)
define SameDay: Date(2000, 3, 15) same day or after Date(2000, 3, 15)
define DayAfter: Date(2000, 3, 15) same day or after Date(2000, 3, 14)
define DayBefore: Date(2000, 3, 15) same day or after Date(2000, 3, 16)
define Same: Date(2000, 3, 15) same or after Date(2000, 3, 15)
define After: Date(2000, 3, 15) same or after Date(2000, 3, 15)
define Before: Date(2000, 3, 14) same or after Date(2000, 3, 15)
define SameDayMonthBefore: Date(2000, 3, 15) same day or after Date(2000, 4, 15)
define DayAfterMonthBefore: Date(2000, 3, 15) same day or after Date(2000, 4, 14)
define DayBeforeMonthAfter: Date(2000, 3, 15) same day or after Date(2000, 2, 16)
define ImpreciseDay: Date(2000, 3, 15) same day or after Date(2000, 3)
define ImpreciseDayMonthAfter: Date(2000, 3, 15) same day or after Date(2000, 2)
define ImpreciseDayMonthBefore: Date(2000, 3, 15) same day or after Date(2000, 4)
define NullLeft: null same or after Date(2000, 3, 15)
define NullRight: Date(2000, 3, 15) same or after null
define NullBoth: (null as Date) same or after null
*/

module.exports['SameOrAfter'] = {
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
            "r" : "501",
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
            "name" : "SameYear",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","SameYear",": " ]
                  }, {
                     "r" : "225",
                     "s" : [ {
                        "r" : "218",
                        "s" : [ {
                           "r" : "213",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "225",
                        "value" : [ " ","same year or after"," " ]
                     }, {
                        "r" : "224",
                        "s" : [ {
                           "r" : "219",
                           "value" : [ "Date","(","2000",", ","11",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "225",
               "precision" : "Year",
               "type" : "SameOrAfter",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "218",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "213",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "214",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "215",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "224",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "219",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "220",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "11",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "221",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "227",
            "name" : "YearAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "227",
                  "s" : [ {
                     "value" : [ "","define ","YearAfter",": " ]
                  }, {
                     "r" : "240",
                     "s" : [ {
                        "r" : "233",
                        "s" : [ {
                           "r" : "228",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "240",
                        "value" : [ " ","same year or after"," " ]
                     }, {
                        "r" : "239",
                        "s" : [ {
                           "r" : "234",
                           "value" : [ "Date","(","1999",", ","11",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "240",
               "precision" : "Year",
               "type" : "SameOrAfter",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "233",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "228",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "229",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "230",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "239",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "234",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1999",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "235",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "11",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "236",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "242",
            "name" : "YearBefore",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "242",
                  "s" : [ {
                     "value" : [ "","define ","YearBefore",": " ]
                  }, {
                     "r" : "255",
                     "s" : [ {
                        "r" : "248",
                        "s" : [ {
                           "r" : "243",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "255",
                        "value" : [ " ","same year or after"," " ]
                     }, {
                        "r" : "254",
                        "s" : [ {
                           "r" : "249",
                           "value" : [ "Date","(","2001",", ","11",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "255",
               "precision" : "Year",
               "type" : "SameOrAfter",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "248",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "243",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "244",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "245",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "254",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "249",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2001",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "250",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "11",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "251",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "257",
            "name" : "SameMonth",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "257",
                  "s" : [ {
                     "value" : [ "","define ","SameMonth",": " ]
                  }, {
                     "r" : "270",
                     "s" : [ {
                        "r" : "263",
                        "s" : [ {
                           "r" : "258",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "270",
                        "value" : [ " ","same month or after"," " ]
                     }, {
                        "r" : "269",
                        "s" : [ {
                           "r" : "264",
                           "value" : [ "Date","(","2000",", ","3",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "270",
               "precision" : "Month",
               "type" : "SameOrAfter",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "263",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "258",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "259",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "260",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "269",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "264",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "265",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "266",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "272",
            "name" : "MonthAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "272",
                  "s" : [ {
                     "value" : [ "","define ","MonthAfter",": " ]
                  }, {
                     "r" : "285",
                     "s" : [ {
                        "r" : "278",
                        "s" : [ {
                           "r" : "273",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "285",
                        "value" : [ " ","same month or after"," " ]
                     }, {
                        "r" : "284",
                        "s" : [ {
                           "r" : "279",
                           "value" : [ "Date","(","2000",", ","2",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "285",
               "precision" : "Month",
               "type" : "SameOrAfter",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "278",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "273",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "274",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "275",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "284",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "279",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "280",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "281",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "287",
            "name" : "MonthBefore",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "287",
                  "s" : [ {
                     "value" : [ "","define ","MonthBefore",": " ]
                  }, {
                     "r" : "300",
                     "s" : [ {
                        "r" : "293",
                        "s" : [ {
                           "r" : "288",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "300",
                        "value" : [ " ","same month or after"," " ]
                     }, {
                        "r" : "299",
                        "s" : [ {
                           "r" : "294",
                           "value" : [ "Date","(","2000",", ","4",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "300",
               "precision" : "Month",
               "type" : "SameOrAfter",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "293",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "288",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "289",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "290",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "299",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "294",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "295",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "296",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "302",
            "name" : "SameDay",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "302",
                  "s" : [ {
                     "value" : [ "","define ","SameDay",": " ]
                  }, {
                     "r" : "315",
                     "s" : [ {
                        "r" : "308",
                        "s" : [ {
                           "r" : "303",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "315",
                        "value" : [ " ","same day or after"," " ]
                     }, {
                        "r" : "314",
                        "s" : [ {
                           "r" : "309",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "315",
               "precision" : "Day",
               "type" : "SameOrAfter",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "308",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "303",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "304",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "305",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "314",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "309",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "310",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "311",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "317",
            "name" : "DayAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "317",
                  "s" : [ {
                     "value" : [ "","define ","DayAfter",": " ]
                  }, {
                     "r" : "330",
                     "s" : [ {
                        "r" : "323",
                        "s" : [ {
                           "r" : "318",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "330",
                        "value" : [ " ","same day or after"," " ]
                     }, {
                        "r" : "329",
                        "s" : [ {
                           "r" : "324",
                           "value" : [ "Date","(","2000",", ","3",", ","14",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "330",
               "precision" : "Day",
               "type" : "SameOrAfter",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "323",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "318",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "319",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "320",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "329",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "324",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "325",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "326",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "14",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "332",
            "name" : "DayBefore",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "332",
                  "s" : [ {
                     "value" : [ "","define ","DayBefore",": " ]
                  }, {
                     "r" : "345",
                     "s" : [ {
                        "r" : "338",
                        "s" : [ {
                           "r" : "333",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "345",
                        "value" : [ " ","same day or after"," " ]
                     }, {
                        "r" : "344",
                        "s" : [ {
                           "r" : "339",
                           "value" : [ "Date","(","2000",", ","3",", ","16",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "345",
               "precision" : "Day",
               "type" : "SameOrAfter",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "338",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "333",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "334",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "335",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "344",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "339",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "340",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "341",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "16",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "347",
            "name" : "Same",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "347",
                  "s" : [ {
                     "value" : [ "","define ","Same",": " ]
                  }, {
                     "r" : "360",
                     "s" : [ {
                        "r" : "353",
                        "s" : [ {
                           "r" : "348",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "360",
                        "value" : [ " ","same or after"," " ]
                     }, {
                        "r" : "359",
                        "s" : [ {
                           "r" : "354",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "360",
               "type" : "SameOrAfter",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "353",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "348",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "349",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "350",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "359",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "354",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "355",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "356",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "362",
            "name" : "After",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "362",
                  "s" : [ {
                     "value" : [ "","define ","After",": " ]
                  }, {
                     "r" : "375",
                     "s" : [ {
                        "r" : "368",
                        "s" : [ {
                           "r" : "363",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "375",
                        "value" : [ " ","same or after"," " ]
                     }, {
                        "r" : "374",
                        "s" : [ {
                           "r" : "369",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "375",
               "type" : "SameOrAfter",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "368",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "363",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "364",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "365",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "374",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "369",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "370",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "371",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "377",
            "name" : "Before",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "377",
                  "s" : [ {
                     "value" : [ "","define ","Before",": " ]
                  }, {
                     "r" : "390",
                     "s" : [ {
                        "r" : "383",
                        "s" : [ {
                           "r" : "378",
                           "value" : [ "Date","(","2000",", ","3",", ","14",")" ]
                        } ]
                     }, {
                        "r" : "390",
                        "value" : [ " ","same or after"," " ]
                     }, {
                        "r" : "389",
                        "s" : [ {
                           "r" : "384",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "390",
               "type" : "SameOrAfter",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "383",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "378",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "379",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "380",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "14",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "389",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "384",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "385",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "386",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "392",
            "name" : "SameDayMonthBefore",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "392",
                  "s" : [ {
                     "value" : [ "","define ","SameDayMonthBefore",": " ]
                  }, {
                     "r" : "405",
                     "s" : [ {
                        "r" : "398",
                        "s" : [ {
                           "r" : "393",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "405",
                        "value" : [ " ","same day or after"," " ]
                     }, {
                        "r" : "404",
                        "s" : [ {
                           "r" : "399",
                           "value" : [ "Date","(","2000",", ","4",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "405",
               "precision" : "Day",
               "type" : "SameOrAfter",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "398",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "393",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "394",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "395",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "404",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "399",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "400",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "401",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "407",
            "name" : "DayAfterMonthBefore",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "407",
                  "s" : [ {
                     "value" : [ "","define ","DayAfterMonthBefore",": " ]
                  }, {
                     "r" : "420",
                     "s" : [ {
                        "r" : "413",
                        "s" : [ {
                           "r" : "408",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "420",
                        "value" : [ " ","same day or after"," " ]
                     }, {
                        "r" : "419",
                        "s" : [ {
                           "r" : "414",
                           "value" : [ "Date","(","2000",", ","4",", ","14",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "420",
               "precision" : "Day",
               "type" : "SameOrAfter",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "413",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "408",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "409",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "410",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "419",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "414",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "415",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "416",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "14",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "422",
            "name" : "DayBeforeMonthAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "422",
                  "s" : [ {
                     "value" : [ "","define ","DayBeforeMonthAfter",": " ]
                  }, {
                     "r" : "435",
                     "s" : [ {
                        "r" : "428",
                        "s" : [ {
                           "r" : "423",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "435",
                        "value" : [ " ","same day or after"," " ]
                     }, {
                        "r" : "434",
                        "s" : [ {
                           "r" : "429",
                           "value" : [ "Date","(","2000",", ","2",", ","16",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "435",
               "precision" : "Day",
               "type" : "SameOrAfter",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "428",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "423",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "424",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "425",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "434",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "429",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "430",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "431",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "16",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "437",
            "name" : "ImpreciseDay",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "437",
                  "s" : [ {
                     "value" : [ "","define ","ImpreciseDay",": " ]
                  }, {
                     "r" : "449",
                     "s" : [ {
                        "r" : "443",
                        "s" : [ {
                           "r" : "438",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "449",
                        "value" : [ " ","same day or after"," " ]
                     }, {
                        "r" : "448",
                        "s" : [ {
                           "r" : "444",
                           "value" : [ "Date","(","2000",", ","3",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "449",
               "precision" : "Day",
               "type" : "SameOrAfter",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "443",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "438",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "439",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "440",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "448",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "444",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "445",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "451",
            "name" : "ImpreciseDayMonthAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "451",
                  "s" : [ {
                     "value" : [ "","define ","ImpreciseDayMonthAfter",": " ]
                  }, {
                     "r" : "463",
                     "s" : [ {
                        "r" : "457",
                        "s" : [ {
                           "r" : "452",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "463",
                        "value" : [ " ","same day or after"," " ]
                     }, {
                        "r" : "462",
                        "s" : [ {
                           "r" : "458",
                           "value" : [ "Date","(","2000",", ","2",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "463",
               "precision" : "Day",
               "type" : "SameOrAfter",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "457",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "452",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "453",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "454",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "462",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "458",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "459",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "465",
            "name" : "ImpreciseDayMonthBefore",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "465",
                  "s" : [ {
                     "value" : [ "","define ","ImpreciseDayMonthBefore",": " ]
                  }, {
                     "r" : "477",
                     "s" : [ {
                        "r" : "471",
                        "s" : [ {
                           "r" : "466",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "477",
                        "value" : [ " ","same day or after"," " ]
                     }, {
                        "r" : "476",
                        "s" : [ {
                           "r" : "472",
                           "value" : [ "Date","(","2000",", ","4",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "477",
               "precision" : "Day",
               "type" : "SameOrAfter",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "471",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "466",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "467",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "468",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "476",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "472",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "473",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "479",
            "name" : "NullLeft",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "479",
                  "s" : [ {
                     "value" : [ "","define ","NullLeft",": " ]
                  }, {
                     "r" : "487",
                     "s" : [ {
                        "r" : "480",
                        "value" : [ "null"," ","same or after"," " ]
                     }, {
                        "r" : "486",
                        "s" : [ {
                           "r" : "481",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "487",
               "type" : "SameOrAfter",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "488",
                  "asType" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "480",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "486",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "481",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "482",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "483",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "490",
            "name" : "NullRight",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "490",
                  "s" : [ {
                     "value" : [ "","define ","NullRight",": " ]
                  }, {
                     "r" : "498",
                     "s" : [ {
                        "r" : "496",
                        "s" : [ {
                           "r" : "491",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "498",
                        "value" : [ " ","same or after"," ","null" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "498",
               "type" : "SameOrAfter",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "496",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "491",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "492",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "493",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "499",
                  "asType" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "497",
                     "type" : "Null"
                  }
               } ]
            }
         }, {
            "localId" : "501",
            "name" : "NullBoth",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "501",
                  "s" : [ {
                     "value" : [ "","define ","NullBoth",": " ]
                  }, {
                     "r" : "506",
                     "s" : [ {
                        "r" : "502",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "502",
                           "s" : [ {
                              "r" : "503",
                              "value" : [ "null"," as " ]
                           }, {
                              "r" : "504",
                              "s" : [ {
                                 "value" : [ "Date" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "r" : "506",
                        "value" : [ " ","same or after"," ","null" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "506",
               "type" : "SameOrAfter",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "502",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "503",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "504",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "507",
                  "asType" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "505",
                     "type" : "Null"
                  }
               } ]
            }
         } ]
      }
   }
}

/* SameOrBefore
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define SameYear: Date(2000, 3, 15) same year or before Date(2000, 11, 23)
define YearAfter: Date(2000, 3, 15) same year or before Date(1999, 11, 23)
define YearBefore: Date(2000, 3, 15) same year or before Date(2001, 11, 23)
define SameMonth: Date(2000, 3, 15) same month or before Date(2000, 3, 23)
define MonthAfter: Date(2000, 3, 15) same month or before Date(2000, 2, 23)
define MonthBefore: Date(2000, 3, 15) same month or before Date(2000, 4, 23)
define SameDay: Date(2000, 3, 15) same day or before Date(2000, 3, 15)
define DayAfter: Date(2000, 3, 15) same day or before Date(2000, 3, 14)
define DayBefore: Date(2000, 3, 15) same day or before Date(2000, 3, 16)
define Same: Date(2000, 3, 15) same or before Date(2000, 3, 15)
define After: Date(2000, 3, 16) same or before Date(2000, 3, 15)
define Before: Date(2000, 3, 15) same or before Date(2000, 3, 15)
define SameDayMonthBefore: Date(2000, 3, 15) same day or before Date(2000, 4, 15)
define DayAfterMonthBefore: Date(2000, 3, 15) same day or before Date(2000, 4, 14)
define DayBeforeMonthAfter: Date(2000, 3, 15) same day or before Date(2000, 2, 16)
define ImpreciseDay: Date(2000, 3, 15) same day or before Date(2000, 3)
define ImpreciseDayMonthAfter: Date(2000, 3, 15) same day or before Date(2000, 2)
define ImpreciseDayMonthBefore: Date(2000, 3, 15) same day or before Date(2000, 4)
define NullLeft: null same or before Date(2000, 3, 15)
define NullRight: Date(2000, 3, 15) same or before null
define NullBoth: (null as Date) same or before null
*/

module.exports['SameOrBefore'] = {
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
            "r" : "501",
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
            "name" : "SameYear",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","SameYear",": " ]
                  }, {
                     "r" : "225",
                     "s" : [ {
                        "r" : "218",
                        "s" : [ {
                           "r" : "213",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "225",
                        "value" : [ " ","same year or before"," " ]
                     }, {
                        "r" : "224",
                        "s" : [ {
                           "r" : "219",
                           "value" : [ "Date","(","2000",", ","11",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "225",
               "precision" : "Year",
               "type" : "SameOrBefore",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "218",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "213",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "214",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "215",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "224",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "219",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "220",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "11",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "221",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "227",
            "name" : "YearAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "227",
                  "s" : [ {
                     "value" : [ "","define ","YearAfter",": " ]
                  }, {
                     "r" : "240",
                     "s" : [ {
                        "r" : "233",
                        "s" : [ {
                           "r" : "228",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "240",
                        "value" : [ " ","same year or before"," " ]
                     }, {
                        "r" : "239",
                        "s" : [ {
                           "r" : "234",
                           "value" : [ "Date","(","1999",", ","11",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "240",
               "precision" : "Year",
               "type" : "SameOrBefore",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "233",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "228",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "229",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "230",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "239",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "234",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1999",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "235",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "11",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "236",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "242",
            "name" : "YearBefore",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "242",
                  "s" : [ {
                     "value" : [ "","define ","YearBefore",": " ]
                  }, {
                     "r" : "255",
                     "s" : [ {
                        "r" : "248",
                        "s" : [ {
                           "r" : "243",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "255",
                        "value" : [ " ","same year or before"," " ]
                     }, {
                        "r" : "254",
                        "s" : [ {
                           "r" : "249",
                           "value" : [ "Date","(","2001",", ","11",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "255",
               "precision" : "Year",
               "type" : "SameOrBefore",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "248",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "243",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "244",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "245",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "254",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "249",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2001",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "250",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "11",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "251",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "257",
            "name" : "SameMonth",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "257",
                  "s" : [ {
                     "value" : [ "","define ","SameMonth",": " ]
                  }, {
                     "r" : "270",
                     "s" : [ {
                        "r" : "263",
                        "s" : [ {
                           "r" : "258",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "270",
                        "value" : [ " ","same month or before"," " ]
                     }, {
                        "r" : "269",
                        "s" : [ {
                           "r" : "264",
                           "value" : [ "Date","(","2000",", ","3",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "270",
               "precision" : "Month",
               "type" : "SameOrBefore",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "263",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "258",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "259",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "260",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "269",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "264",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "265",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "266",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "272",
            "name" : "MonthAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "272",
                  "s" : [ {
                     "value" : [ "","define ","MonthAfter",": " ]
                  }, {
                     "r" : "285",
                     "s" : [ {
                        "r" : "278",
                        "s" : [ {
                           "r" : "273",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "285",
                        "value" : [ " ","same month or before"," " ]
                     }, {
                        "r" : "284",
                        "s" : [ {
                           "r" : "279",
                           "value" : [ "Date","(","2000",", ","2",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "285",
               "precision" : "Month",
               "type" : "SameOrBefore",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "278",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "273",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "274",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "275",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "284",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "279",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "280",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "281",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "287",
            "name" : "MonthBefore",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "287",
                  "s" : [ {
                     "value" : [ "","define ","MonthBefore",": " ]
                  }, {
                     "r" : "300",
                     "s" : [ {
                        "r" : "293",
                        "s" : [ {
                           "r" : "288",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "300",
                        "value" : [ " ","same month or before"," " ]
                     }, {
                        "r" : "299",
                        "s" : [ {
                           "r" : "294",
                           "value" : [ "Date","(","2000",", ","4",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "300",
               "precision" : "Month",
               "type" : "SameOrBefore",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "293",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "288",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "289",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "290",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "299",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "294",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "295",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "296",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "302",
            "name" : "SameDay",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "302",
                  "s" : [ {
                     "value" : [ "","define ","SameDay",": " ]
                  }, {
                     "r" : "315",
                     "s" : [ {
                        "r" : "308",
                        "s" : [ {
                           "r" : "303",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "315",
                        "value" : [ " ","same day or before"," " ]
                     }, {
                        "r" : "314",
                        "s" : [ {
                           "r" : "309",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "315",
               "precision" : "Day",
               "type" : "SameOrBefore",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "308",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "303",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "304",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "305",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "314",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "309",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "310",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "311",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "317",
            "name" : "DayAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "317",
                  "s" : [ {
                     "value" : [ "","define ","DayAfter",": " ]
                  }, {
                     "r" : "330",
                     "s" : [ {
                        "r" : "323",
                        "s" : [ {
                           "r" : "318",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "330",
                        "value" : [ " ","same day or before"," " ]
                     }, {
                        "r" : "329",
                        "s" : [ {
                           "r" : "324",
                           "value" : [ "Date","(","2000",", ","3",", ","14",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "330",
               "precision" : "Day",
               "type" : "SameOrBefore",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "323",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "318",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "319",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "320",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "329",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "324",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "325",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "326",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "14",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "332",
            "name" : "DayBefore",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "332",
                  "s" : [ {
                     "value" : [ "","define ","DayBefore",": " ]
                  }, {
                     "r" : "345",
                     "s" : [ {
                        "r" : "338",
                        "s" : [ {
                           "r" : "333",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "345",
                        "value" : [ " ","same day or before"," " ]
                     }, {
                        "r" : "344",
                        "s" : [ {
                           "r" : "339",
                           "value" : [ "Date","(","2000",", ","3",", ","16",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "345",
               "precision" : "Day",
               "type" : "SameOrBefore",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "338",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "333",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "334",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "335",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "344",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "339",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "340",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "341",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "16",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "347",
            "name" : "Same",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "347",
                  "s" : [ {
                     "value" : [ "","define ","Same",": " ]
                  }, {
                     "r" : "360",
                     "s" : [ {
                        "r" : "353",
                        "s" : [ {
                           "r" : "348",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "360",
                        "value" : [ " ","same or before"," " ]
                     }, {
                        "r" : "359",
                        "s" : [ {
                           "r" : "354",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "360",
               "type" : "SameOrBefore",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "353",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "348",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "349",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "350",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "359",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "354",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "355",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "356",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "362",
            "name" : "After",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "362",
                  "s" : [ {
                     "value" : [ "","define ","After",": " ]
                  }, {
                     "r" : "375",
                     "s" : [ {
                        "r" : "368",
                        "s" : [ {
                           "r" : "363",
                           "value" : [ "Date","(","2000",", ","3",", ","16",")" ]
                        } ]
                     }, {
                        "r" : "375",
                        "value" : [ " ","same or before"," " ]
                     }, {
                        "r" : "374",
                        "s" : [ {
                           "r" : "369",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "375",
               "type" : "SameOrBefore",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "368",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "363",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "364",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "365",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "16",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "374",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "369",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "370",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "371",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "377",
            "name" : "Before",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "377",
                  "s" : [ {
                     "value" : [ "","define ","Before",": " ]
                  }, {
                     "r" : "390",
                     "s" : [ {
                        "r" : "383",
                        "s" : [ {
                           "r" : "378",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "390",
                        "value" : [ " ","same or before"," " ]
                     }, {
                        "r" : "389",
                        "s" : [ {
                           "r" : "384",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "390",
               "type" : "SameOrBefore",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "383",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "378",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "379",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "380",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "389",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "384",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "385",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "386",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "392",
            "name" : "SameDayMonthBefore",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "392",
                  "s" : [ {
                     "value" : [ "","define ","SameDayMonthBefore",": " ]
                  }, {
                     "r" : "405",
                     "s" : [ {
                        "r" : "398",
                        "s" : [ {
                           "r" : "393",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "405",
                        "value" : [ " ","same day or before"," " ]
                     }, {
                        "r" : "404",
                        "s" : [ {
                           "r" : "399",
                           "value" : [ "Date","(","2000",", ","4",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "405",
               "precision" : "Day",
               "type" : "SameOrBefore",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "398",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "393",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "394",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "395",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "404",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "399",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "400",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "401",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "407",
            "name" : "DayAfterMonthBefore",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "407",
                  "s" : [ {
                     "value" : [ "","define ","DayAfterMonthBefore",": " ]
                  }, {
                     "r" : "420",
                     "s" : [ {
                        "r" : "413",
                        "s" : [ {
                           "r" : "408",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "420",
                        "value" : [ " ","same day or before"," " ]
                     }, {
                        "r" : "419",
                        "s" : [ {
                           "r" : "414",
                           "value" : [ "Date","(","2000",", ","4",", ","14",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "420",
               "precision" : "Day",
               "type" : "SameOrBefore",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "413",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "408",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "409",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "410",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "419",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "414",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "415",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "416",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "14",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "422",
            "name" : "DayBeforeMonthAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "422",
                  "s" : [ {
                     "value" : [ "","define ","DayBeforeMonthAfter",": " ]
                  }, {
                     "r" : "435",
                     "s" : [ {
                        "r" : "428",
                        "s" : [ {
                           "r" : "423",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "435",
                        "value" : [ " ","same day or before"," " ]
                     }, {
                        "r" : "434",
                        "s" : [ {
                           "r" : "429",
                           "value" : [ "Date","(","2000",", ","2",", ","16",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "435",
               "precision" : "Day",
               "type" : "SameOrBefore",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "428",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "423",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "424",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "425",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "434",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "429",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "430",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "431",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "16",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "437",
            "name" : "ImpreciseDay",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "437",
                  "s" : [ {
                     "value" : [ "","define ","ImpreciseDay",": " ]
                  }, {
                     "r" : "449",
                     "s" : [ {
                        "r" : "443",
                        "s" : [ {
                           "r" : "438",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "449",
                        "value" : [ " ","same day or before"," " ]
                     }, {
                        "r" : "448",
                        "s" : [ {
                           "r" : "444",
                           "value" : [ "Date","(","2000",", ","3",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "449",
               "precision" : "Day",
               "type" : "SameOrBefore",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "443",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "438",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "439",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "440",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "448",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "444",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "445",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "451",
            "name" : "ImpreciseDayMonthAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "451",
                  "s" : [ {
                     "value" : [ "","define ","ImpreciseDayMonthAfter",": " ]
                  }, {
                     "r" : "463",
                     "s" : [ {
                        "r" : "457",
                        "s" : [ {
                           "r" : "452",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "463",
                        "value" : [ " ","same day or before"," " ]
                     }, {
                        "r" : "462",
                        "s" : [ {
                           "r" : "458",
                           "value" : [ "Date","(","2000",", ","2",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "463",
               "precision" : "Day",
               "type" : "SameOrBefore",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "457",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "452",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "453",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "454",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "462",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "458",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "459",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "465",
            "name" : "ImpreciseDayMonthBefore",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "465",
                  "s" : [ {
                     "value" : [ "","define ","ImpreciseDayMonthBefore",": " ]
                  }, {
                     "r" : "477",
                     "s" : [ {
                        "r" : "471",
                        "s" : [ {
                           "r" : "466",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "477",
                        "value" : [ " ","same day or before"," " ]
                     }, {
                        "r" : "476",
                        "s" : [ {
                           "r" : "472",
                           "value" : [ "Date","(","2000",", ","4",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "477",
               "precision" : "Day",
               "type" : "SameOrBefore",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "471",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "466",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "467",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "468",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "476",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "472",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "473",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "479",
            "name" : "NullLeft",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "479",
                  "s" : [ {
                     "value" : [ "","define ","NullLeft",": " ]
                  }, {
                     "r" : "487",
                     "s" : [ {
                        "r" : "480",
                        "value" : [ "null"," ","same or before"," " ]
                     }, {
                        "r" : "486",
                        "s" : [ {
                           "r" : "481",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "487",
               "type" : "SameOrBefore",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "488",
                  "asType" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "480",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "486",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "481",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "482",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "483",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "490",
            "name" : "NullRight",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "490",
                  "s" : [ {
                     "value" : [ "","define ","NullRight",": " ]
                  }, {
                     "r" : "498",
                     "s" : [ {
                        "r" : "496",
                        "s" : [ {
                           "r" : "491",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "498",
                        "value" : [ " ","same or before"," ","null" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "498",
               "type" : "SameOrBefore",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "496",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "491",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "492",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "493",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "499",
                  "asType" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "497",
                     "type" : "Null"
                  }
               } ]
            }
         }, {
            "localId" : "501",
            "name" : "NullBoth",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "501",
                  "s" : [ {
                     "value" : [ "","define ","NullBoth",": " ]
                  }, {
                     "r" : "506",
                     "s" : [ {
                        "r" : "502",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "502",
                           "s" : [ {
                              "r" : "503",
                              "value" : [ "null"," as " ]
                           }, {
                              "r" : "504",
                              "s" : [ {
                                 "value" : [ "Date" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "r" : "506",
                        "value" : [ " ","same or before"," ","null" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "506",
               "type" : "SameOrBefore",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "502",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "503",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "504",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "507",
                  "asType" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "505",
                     "type" : "Null"
                  }
               } ]
            }
         } ]
      }
   }
}

/* After
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define SameYear: Date(2000, 12, 15) after year of Date(2000, 11, 23)
define YearAfter: Date(2000, 12, 15) after year of Date(1999, 11, 23)
define YearBefore: Date(2000, 12, 15) after year of Date(2001, 11, 23)
define SameMonth: Date(2000, 3, 25) after month of Date(2000, 3, 23)
define MonthAfter: Date(2000, 3, 25) after month of Date(2000, 2, 23)
define MonthBefore: Date(2000, 3, 25) after month of Date(2000, 4, 23)
define SameDay: Date(2000, 3, 15) after day of Date(2000, 3, 15)
define DayAfter: Date(2000, 3, 15) after day of Date(2000, 3, 14)
define DayBefore: Date(2000, 3, 15) after day of Date(2000, 3, 16)
define Same: Date(2000, 3, 15) after Date(2000, 3, 15)
define After: Date(2000, 3, 16) after Date(2000, 3, 15)
define Before: Date(2000, 3, 15) after Date(2000, 3, 15)
define ImpreciseDay: Date(2000, 3, 15) after day of Date(2000, 3)
define ImpreciseDayMonthAfter: Date(2000, 3, 15) after day of Date(2000, 2)
define ImpreciseDayMonthBefore: Date(2000, 3, 15) after day of Date(2000, 4)
define NullLeft: null after Date(2000, 3, 15)
define NullRight: Date(2000, 3, 15) after null
define NullBoth: (null as Date) after null
*/

module.exports['After'] = {
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
            "r" : "456",
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
            "name" : "SameYear",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","SameYear",": " ]
                  }, {
                     "r" : "225",
                     "s" : [ {
                        "r" : "218",
                        "s" : [ {
                           "r" : "213",
                           "value" : [ "Date","(","2000",", ","12",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "225",
                        "value" : [ " ","after year of"," " ]
                     }, {
                        "r" : "224",
                        "s" : [ {
                           "r" : "219",
                           "value" : [ "Date","(","2000",", ","11",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "225",
               "precision" : "Year",
               "type" : "After",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "218",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "213",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "214",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "12",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "215",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "224",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "219",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "220",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "11",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "221",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "227",
            "name" : "YearAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "227",
                  "s" : [ {
                     "value" : [ "","define ","YearAfter",": " ]
                  }, {
                     "r" : "240",
                     "s" : [ {
                        "r" : "233",
                        "s" : [ {
                           "r" : "228",
                           "value" : [ "Date","(","2000",", ","12",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "240",
                        "value" : [ " ","after year of"," " ]
                     }, {
                        "r" : "239",
                        "s" : [ {
                           "r" : "234",
                           "value" : [ "Date","(","1999",", ","11",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "240",
               "precision" : "Year",
               "type" : "After",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "233",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "228",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "229",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "12",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "230",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "239",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "234",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1999",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "235",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "11",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "236",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "242",
            "name" : "YearBefore",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "242",
                  "s" : [ {
                     "value" : [ "","define ","YearBefore",": " ]
                  }, {
                     "r" : "255",
                     "s" : [ {
                        "r" : "248",
                        "s" : [ {
                           "r" : "243",
                           "value" : [ "Date","(","2000",", ","12",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "255",
                        "value" : [ " ","after year of"," " ]
                     }, {
                        "r" : "254",
                        "s" : [ {
                           "r" : "249",
                           "value" : [ "Date","(","2001",", ","11",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "255",
               "precision" : "Year",
               "type" : "After",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "248",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "243",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "244",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "12",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "245",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "254",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "249",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2001",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "250",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "11",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "251",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "257",
            "name" : "SameMonth",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "257",
                  "s" : [ {
                     "value" : [ "","define ","SameMonth",": " ]
                  }, {
                     "r" : "270",
                     "s" : [ {
                        "r" : "263",
                        "s" : [ {
                           "r" : "258",
                           "value" : [ "Date","(","2000",", ","3",", ","25",")" ]
                        } ]
                     }, {
                        "r" : "270",
                        "value" : [ " ","after month of"," " ]
                     }, {
                        "r" : "269",
                        "s" : [ {
                           "r" : "264",
                           "value" : [ "Date","(","2000",", ","3",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "270",
               "precision" : "Month",
               "type" : "After",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "263",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "258",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "259",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "260",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "25",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "269",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "264",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "265",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "266",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "272",
            "name" : "MonthAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "272",
                  "s" : [ {
                     "value" : [ "","define ","MonthAfter",": " ]
                  }, {
                     "r" : "285",
                     "s" : [ {
                        "r" : "278",
                        "s" : [ {
                           "r" : "273",
                           "value" : [ "Date","(","2000",", ","3",", ","25",")" ]
                        } ]
                     }, {
                        "r" : "285",
                        "value" : [ " ","after month of"," " ]
                     }, {
                        "r" : "284",
                        "s" : [ {
                           "r" : "279",
                           "value" : [ "Date","(","2000",", ","2",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "285",
               "precision" : "Month",
               "type" : "After",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "278",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "273",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "274",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "275",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "25",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "284",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "279",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "280",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "281",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "287",
            "name" : "MonthBefore",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "287",
                  "s" : [ {
                     "value" : [ "","define ","MonthBefore",": " ]
                  }, {
                     "r" : "300",
                     "s" : [ {
                        "r" : "293",
                        "s" : [ {
                           "r" : "288",
                           "value" : [ "Date","(","2000",", ","3",", ","25",")" ]
                        } ]
                     }, {
                        "r" : "300",
                        "value" : [ " ","after month of"," " ]
                     }, {
                        "r" : "299",
                        "s" : [ {
                           "r" : "294",
                           "value" : [ "Date","(","2000",", ","4",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "300",
               "precision" : "Month",
               "type" : "After",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "293",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "288",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "289",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "290",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "25",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "299",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "294",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "295",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "296",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "302",
            "name" : "SameDay",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "302",
                  "s" : [ {
                     "value" : [ "","define ","SameDay",": " ]
                  }, {
                     "r" : "315",
                     "s" : [ {
                        "r" : "308",
                        "s" : [ {
                           "r" : "303",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "315",
                        "value" : [ " ","after day of"," " ]
                     }, {
                        "r" : "314",
                        "s" : [ {
                           "r" : "309",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "315",
               "precision" : "Day",
               "type" : "After",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "308",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "303",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "304",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "305",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "314",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "309",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "310",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "311",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "317",
            "name" : "DayAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "317",
                  "s" : [ {
                     "value" : [ "","define ","DayAfter",": " ]
                  }, {
                     "r" : "330",
                     "s" : [ {
                        "r" : "323",
                        "s" : [ {
                           "r" : "318",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "330",
                        "value" : [ " ","after day of"," " ]
                     }, {
                        "r" : "329",
                        "s" : [ {
                           "r" : "324",
                           "value" : [ "Date","(","2000",", ","3",", ","14",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "330",
               "precision" : "Day",
               "type" : "After",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "323",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "318",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "319",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "320",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "329",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "324",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "325",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "326",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "14",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "332",
            "name" : "DayBefore",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "332",
                  "s" : [ {
                     "value" : [ "","define ","DayBefore",": " ]
                  }, {
                     "r" : "345",
                     "s" : [ {
                        "r" : "338",
                        "s" : [ {
                           "r" : "333",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "345",
                        "value" : [ " ","after day of"," " ]
                     }, {
                        "r" : "344",
                        "s" : [ {
                           "r" : "339",
                           "value" : [ "Date","(","2000",", ","3",", ","16",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "345",
               "precision" : "Day",
               "type" : "After",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "338",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "333",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "334",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "335",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "344",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "339",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "340",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "341",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "16",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "347",
            "name" : "Same",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "347",
                  "s" : [ {
                     "value" : [ "","define ","Same",": " ]
                  }, {
                     "r" : "360",
                     "s" : [ {
                        "r" : "353",
                        "s" : [ {
                           "r" : "348",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "360",
                        "value" : [ " ","after"," " ]
                     }, {
                        "r" : "359",
                        "s" : [ {
                           "r" : "354",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "360",
               "type" : "After",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "353",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "348",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "349",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "350",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "359",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "354",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "355",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "356",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "362",
            "name" : "After",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "362",
                  "s" : [ {
                     "value" : [ "","define ","After",": " ]
                  }, {
                     "r" : "375",
                     "s" : [ {
                        "r" : "368",
                        "s" : [ {
                           "r" : "363",
                           "value" : [ "Date","(","2000",", ","3",", ","16",")" ]
                        } ]
                     }, {
                        "r" : "375",
                        "value" : [ " ","after"," " ]
                     }, {
                        "r" : "374",
                        "s" : [ {
                           "r" : "369",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "375",
               "type" : "After",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "368",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "363",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "364",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "365",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "16",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "374",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "369",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "370",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "371",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "377",
            "name" : "Before",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "377",
                  "s" : [ {
                     "value" : [ "","define ","Before",": " ]
                  }, {
                     "r" : "390",
                     "s" : [ {
                        "r" : "383",
                        "s" : [ {
                           "r" : "378",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "390",
                        "value" : [ " ","after"," " ]
                     }, {
                        "r" : "389",
                        "s" : [ {
                           "r" : "384",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "390",
               "type" : "After",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "383",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "378",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "379",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "380",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "389",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "384",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "385",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "386",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "392",
            "name" : "ImpreciseDay",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "392",
                  "s" : [ {
                     "value" : [ "","define ","ImpreciseDay",": " ]
                  }, {
                     "r" : "404",
                     "s" : [ {
                        "r" : "398",
                        "s" : [ {
                           "r" : "393",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "404",
                        "value" : [ " ","after day of"," " ]
                     }, {
                        "r" : "403",
                        "s" : [ {
                           "r" : "399",
                           "value" : [ "Date","(","2000",", ","3",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "404",
               "precision" : "Day",
               "type" : "After",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "398",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "393",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "394",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "395",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "403",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "399",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "400",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "406",
            "name" : "ImpreciseDayMonthAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "406",
                  "s" : [ {
                     "value" : [ "","define ","ImpreciseDayMonthAfter",": " ]
                  }, {
                     "r" : "418",
                     "s" : [ {
                        "r" : "412",
                        "s" : [ {
                           "r" : "407",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "418",
                        "value" : [ " ","after day of"," " ]
                     }, {
                        "r" : "417",
                        "s" : [ {
                           "r" : "413",
                           "value" : [ "Date","(","2000",", ","2",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "418",
               "precision" : "Day",
               "type" : "After",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "412",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "407",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "408",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "409",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "417",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "413",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "414",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "420",
            "name" : "ImpreciseDayMonthBefore",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "420",
                  "s" : [ {
                     "value" : [ "","define ","ImpreciseDayMonthBefore",": " ]
                  }, {
                     "r" : "432",
                     "s" : [ {
                        "r" : "426",
                        "s" : [ {
                           "r" : "421",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "432",
                        "value" : [ " ","after day of"," " ]
                     }, {
                        "r" : "431",
                        "s" : [ {
                           "r" : "427",
                           "value" : [ "Date","(","2000",", ","4",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "432",
               "precision" : "Day",
               "type" : "After",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "426",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "421",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "422",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "423",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "431",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "427",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "428",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "434",
            "name" : "NullLeft",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "434",
                  "s" : [ {
                     "value" : [ "","define ","NullLeft",": " ]
                  }, {
                     "r" : "442",
                     "s" : [ {
                        "r" : "435",
                        "value" : [ "null"," ","after"," " ]
                     }, {
                        "r" : "441",
                        "s" : [ {
                           "r" : "436",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "442",
               "type" : "After",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "443",
                  "asType" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "435",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "441",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "436",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "437",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "438",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "445",
            "name" : "NullRight",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "445",
                  "s" : [ {
                     "value" : [ "","define ","NullRight",": " ]
                  }, {
                     "r" : "453",
                     "s" : [ {
                        "r" : "451",
                        "s" : [ {
                           "r" : "446",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "453",
                        "value" : [ " ","after"," ","null" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "453",
               "type" : "After",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "451",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "446",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "447",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "448",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "454",
                  "asType" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "452",
                     "type" : "Null"
                  }
               } ]
            }
         }, {
            "localId" : "456",
            "name" : "NullBoth",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "456",
                  "s" : [ {
                     "value" : [ "","define ","NullBoth",": " ]
                  }, {
                     "r" : "461",
                     "s" : [ {
                        "r" : "457",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "457",
                           "s" : [ {
                              "r" : "458",
                              "value" : [ "null"," as " ]
                           }, {
                              "r" : "459",
                              "s" : [ {
                                 "value" : [ "Date" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "r" : "461",
                        "value" : [ " ","after"," ","null" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "461",
               "type" : "After",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "457",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "458",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "459",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "462",
                  "asType" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "460",
                     "type" : "Null"
                  }
               } ]
            }
         } ]
      }
   }
}

/* Before
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define SameYear: Date(2000, 10, 15) before year of Date(2000, 11, 23)
define YearAfter: Date(2000, 10, 15) before year of Date(1999, 11, 23)
define YearBefore: Date(2000, 10, 15) before year of Date(2001, 11, 23)
define SameMonth: Date(2000, 3, 22) before month of Date(2000, 3, 23)
define MonthAfter: Date(2000, 3, 22) before month of Date(2000, 2, 23)
define MonthBefore: Date(2000, 3, 22) before month of Date(2000, 4, 23)
define SameDay: Date(2000, 3, 15) before day of Date(2000, 3, 15)
define DayAfter: Date(2000, 3, 15) before day of Date(2000, 3, 14)
define DayBefore: Date(2000, 3, 15) before day of Date(2000, 3, 16)
define Same: Date(2000, 3, 15) before Date(2000, 3, 15)
define After: Date(2000, 3, 15) before Date(2000, 3, 15)
define Before: Date(2000, 3, 14) before Date(2000, 3, 15)
define ImpreciseDay: Date(2000, 3, 15) before day of Date(2000, 3)
define ImpreciseDayMonthAfter: Date(2000, 3, 15) before day of Date(2000, 2)
define ImpreciseDayMonthBefore: Date(2000, 3, 15) before day of Date(2000, 4)
define NullLeft: null before Date(2000, 3, 15)
define NullRight: Date(2000, 3, 15) before null
define NullBoth: (null as Date) before null
*/

module.exports['Before'] = {
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
            "r" : "456",
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
            "name" : "SameYear",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","SameYear",": " ]
                  }, {
                     "r" : "225",
                     "s" : [ {
                        "r" : "218",
                        "s" : [ {
                           "r" : "213",
                           "value" : [ "Date","(","2000",", ","10",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "225",
                        "value" : [ " ","before year of"," " ]
                     }, {
                        "r" : "224",
                        "s" : [ {
                           "r" : "219",
                           "value" : [ "Date","(","2000",", ","11",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "225",
               "precision" : "Year",
               "type" : "Before",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "218",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "213",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "214",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "10",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "215",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "224",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "219",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "220",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "11",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "221",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "227",
            "name" : "YearAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "227",
                  "s" : [ {
                     "value" : [ "","define ","YearAfter",": " ]
                  }, {
                     "r" : "240",
                     "s" : [ {
                        "r" : "233",
                        "s" : [ {
                           "r" : "228",
                           "value" : [ "Date","(","2000",", ","10",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "240",
                        "value" : [ " ","before year of"," " ]
                     }, {
                        "r" : "239",
                        "s" : [ {
                           "r" : "234",
                           "value" : [ "Date","(","1999",", ","11",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "240",
               "precision" : "Year",
               "type" : "Before",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "233",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "228",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "229",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "10",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "230",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "239",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "234",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1999",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "235",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "11",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "236",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "242",
            "name" : "YearBefore",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "242",
                  "s" : [ {
                     "value" : [ "","define ","YearBefore",": " ]
                  }, {
                     "r" : "255",
                     "s" : [ {
                        "r" : "248",
                        "s" : [ {
                           "r" : "243",
                           "value" : [ "Date","(","2000",", ","10",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "255",
                        "value" : [ " ","before year of"," " ]
                     }, {
                        "r" : "254",
                        "s" : [ {
                           "r" : "249",
                           "value" : [ "Date","(","2001",", ","11",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "255",
               "precision" : "Year",
               "type" : "Before",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "248",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "243",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "244",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "10",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "245",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "254",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "249",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2001",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "250",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "11",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "251",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "257",
            "name" : "SameMonth",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "257",
                  "s" : [ {
                     "value" : [ "","define ","SameMonth",": " ]
                  }, {
                     "r" : "270",
                     "s" : [ {
                        "r" : "263",
                        "s" : [ {
                           "r" : "258",
                           "value" : [ "Date","(","2000",", ","3",", ","22",")" ]
                        } ]
                     }, {
                        "r" : "270",
                        "value" : [ " ","before month of"," " ]
                     }, {
                        "r" : "269",
                        "s" : [ {
                           "r" : "264",
                           "value" : [ "Date","(","2000",", ","3",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "270",
               "precision" : "Month",
               "type" : "Before",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "263",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "258",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "259",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "260",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "22",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "269",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "264",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "265",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "266",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "272",
            "name" : "MonthAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "272",
                  "s" : [ {
                     "value" : [ "","define ","MonthAfter",": " ]
                  }, {
                     "r" : "285",
                     "s" : [ {
                        "r" : "278",
                        "s" : [ {
                           "r" : "273",
                           "value" : [ "Date","(","2000",", ","3",", ","22",")" ]
                        } ]
                     }, {
                        "r" : "285",
                        "value" : [ " ","before month of"," " ]
                     }, {
                        "r" : "284",
                        "s" : [ {
                           "r" : "279",
                           "value" : [ "Date","(","2000",", ","2",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "285",
               "precision" : "Month",
               "type" : "Before",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "278",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "273",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "274",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "275",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "22",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "284",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "279",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "280",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "281",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "287",
            "name" : "MonthBefore",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "287",
                  "s" : [ {
                     "value" : [ "","define ","MonthBefore",": " ]
                  }, {
                     "r" : "300",
                     "s" : [ {
                        "r" : "293",
                        "s" : [ {
                           "r" : "288",
                           "value" : [ "Date","(","2000",", ","3",", ","22",")" ]
                        } ]
                     }, {
                        "r" : "300",
                        "value" : [ " ","before month of"," " ]
                     }, {
                        "r" : "299",
                        "s" : [ {
                           "r" : "294",
                           "value" : [ "Date","(","2000",", ","4",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "300",
               "precision" : "Month",
               "type" : "Before",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "293",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "288",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "289",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "290",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "22",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "299",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "294",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "295",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "296",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "302",
            "name" : "SameDay",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "302",
                  "s" : [ {
                     "value" : [ "","define ","SameDay",": " ]
                  }, {
                     "r" : "315",
                     "s" : [ {
                        "r" : "308",
                        "s" : [ {
                           "r" : "303",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "315",
                        "value" : [ " ","before day of"," " ]
                     }, {
                        "r" : "314",
                        "s" : [ {
                           "r" : "309",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "315",
               "precision" : "Day",
               "type" : "Before",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "308",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "303",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "304",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "305",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "314",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "309",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "310",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "311",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "317",
            "name" : "DayAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "317",
                  "s" : [ {
                     "value" : [ "","define ","DayAfter",": " ]
                  }, {
                     "r" : "330",
                     "s" : [ {
                        "r" : "323",
                        "s" : [ {
                           "r" : "318",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "330",
                        "value" : [ " ","before day of"," " ]
                     }, {
                        "r" : "329",
                        "s" : [ {
                           "r" : "324",
                           "value" : [ "Date","(","2000",", ","3",", ","14",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "330",
               "precision" : "Day",
               "type" : "Before",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "323",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "318",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "319",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "320",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "329",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "324",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "325",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "326",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "14",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "332",
            "name" : "DayBefore",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "332",
                  "s" : [ {
                     "value" : [ "","define ","DayBefore",": " ]
                  }, {
                     "r" : "345",
                     "s" : [ {
                        "r" : "338",
                        "s" : [ {
                           "r" : "333",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "345",
                        "value" : [ " ","before day of"," " ]
                     }, {
                        "r" : "344",
                        "s" : [ {
                           "r" : "339",
                           "value" : [ "Date","(","2000",", ","3",", ","16",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "345",
               "precision" : "Day",
               "type" : "Before",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "338",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "333",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "334",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "335",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "344",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "339",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "340",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "341",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "16",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "347",
            "name" : "Same",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "347",
                  "s" : [ {
                     "value" : [ "","define ","Same",": " ]
                  }, {
                     "r" : "360",
                     "s" : [ {
                        "r" : "353",
                        "s" : [ {
                           "r" : "348",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "360",
                        "value" : [ " ","before"," " ]
                     }, {
                        "r" : "359",
                        "s" : [ {
                           "r" : "354",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "360",
               "type" : "Before",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "353",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "348",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "349",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "350",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "359",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "354",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "355",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "356",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "362",
            "name" : "After",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "362",
                  "s" : [ {
                     "value" : [ "","define ","After",": " ]
                  }, {
                     "r" : "375",
                     "s" : [ {
                        "r" : "368",
                        "s" : [ {
                           "r" : "363",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "375",
                        "value" : [ " ","before"," " ]
                     }, {
                        "r" : "374",
                        "s" : [ {
                           "r" : "369",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "375",
               "type" : "Before",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "368",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "363",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "364",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "365",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "374",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "369",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "370",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "371",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "377",
            "name" : "Before",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "377",
                  "s" : [ {
                     "value" : [ "","define ","Before",": " ]
                  }, {
                     "r" : "390",
                     "s" : [ {
                        "r" : "383",
                        "s" : [ {
                           "r" : "378",
                           "value" : [ "Date","(","2000",", ","3",", ","14",")" ]
                        } ]
                     }, {
                        "r" : "390",
                        "value" : [ " ","before"," " ]
                     }, {
                        "r" : "389",
                        "s" : [ {
                           "r" : "384",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "390",
               "type" : "Before",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "383",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "378",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "379",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "380",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "14",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "389",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "384",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "385",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "386",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "392",
            "name" : "ImpreciseDay",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "392",
                  "s" : [ {
                     "value" : [ "","define ","ImpreciseDay",": " ]
                  }, {
                     "r" : "404",
                     "s" : [ {
                        "r" : "398",
                        "s" : [ {
                           "r" : "393",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "404",
                        "value" : [ " ","before day of"," " ]
                     }, {
                        "r" : "403",
                        "s" : [ {
                           "r" : "399",
                           "value" : [ "Date","(","2000",", ","3",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "404",
               "precision" : "Day",
               "type" : "Before",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "398",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "393",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "394",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "395",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "403",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "399",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "400",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "406",
            "name" : "ImpreciseDayMonthAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "406",
                  "s" : [ {
                     "value" : [ "","define ","ImpreciseDayMonthAfter",": " ]
                  }, {
                     "r" : "418",
                     "s" : [ {
                        "r" : "412",
                        "s" : [ {
                           "r" : "407",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "418",
                        "value" : [ " ","before day of"," " ]
                     }, {
                        "r" : "417",
                        "s" : [ {
                           "r" : "413",
                           "value" : [ "Date","(","2000",", ","2",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "418",
               "precision" : "Day",
               "type" : "Before",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "412",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "407",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "408",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "409",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "417",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "413",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "414",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "420",
            "name" : "ImpreciseDayMonthBefore",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "420",
                  "s" : [ {
                     "value" : [ "","define ","ImpreciseDayMonthBefore",": " ]
                  }, {
                     "r" : "432",
                     "s" : [ {
                        "r" : "426",
                        "s" : [ {
                           "r" : "421",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "432",
                        "value" : [ " ","before day of"," " ]
                     }, {
                        "r" : "431",
                        "s" : [ {
                           "r" : "427",
                           "value" : [ "Date","(","2000",", ","4",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "432",
               "precision" : "Day",
               "type" : "Before",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "426",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "421",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "422",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "423",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "431",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "427",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "428",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "434",
            "name" : "NullLeft",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "434",
                  "s" : [ {
                     "value" : [ "","define ","NullLeft",": " ]
                  }, {
                     "r" : "442",
                     "s" : [ {
                        "r" : "435",
                        "value" : [ "null"," ","before"," " ]
                     }, {
                        "r" : "441",
                        "s" : [ {
                           "r" : "436",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "442",
               "type" : "Before",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "443",
                  "asType" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "435",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "441",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "436",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "437",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "438",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "445",
            "name" : "NullRight",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "445",
                  "s" : [ {
                     "value" : [ "","define ","NullRight",": " ]
                  }, {
                     "r" : "453",
                     "s" : [ {
                        "r" : "451",
                        "s" : [ {
                           "r" : "446",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "453",
                        "value" : [ " ","before"," ","null" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "453",
               "type" : "Before",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "451",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "446",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "447",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "448",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "454",
                  "asType" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "452",
                     "type" : "Null"
                  }
               } ]
            }
         }, {
            "localId" : "456",
            "name" : "NullBoth",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "456",
                  "s" : [ {
                     "value" : [ "","define ","NullBoth",": " ]
                  }, {
                     "r" : "461",
                     "s" : [ {
                        "r" : "457",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "457",
                           "s" : [ {
                              "r" : "458",
                              "value" : [ "null"," as " ]
                           }, {
                              "r" : "459",
                              "s" : [ {
                                 "value" : [ "Date" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "r" : "461",
                        "value" : [ " ","before"," ","null" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "461",
               "type" : "Before",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "457",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "458",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "459",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "462",
                  "asType" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "460",
                     "type" : "Null"
                  }
               } ]
            }
         } ]
      }
   }
}

/* DifferenceBetween
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define NewYear2013: Date(2013, 1, 1)
define NewYear2014: Date(2014, 1, 1)
define January2014: Date(2014, 1)
define YearsBetween: difference in years between NewYear2013 and NewYear2014
define MonthsBetween: difference in months between NewYear2013 and NewYear2014
define WeeksBetween: difference in weeks between NewYear2013 and NewYear2014
define DaysBetween: difference in days between NewYear2013 and NewYear2014
define YearsBetweenUncertainty: difference in years between NewYear2014 and January2014
define MonthsBetweenUncertainty: difference in months between NewYear2014 and January2014
define WeeksBetweenUncertainty: difference in weeks between NewYear2014 and January2014
define DaysBetweenUncertainty: difference in days between NewYear2014 and January2014
*/

module.exports['DifferenceBetween'] = {
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
            "r" : "270",
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
            "name" : "NewYear2013",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","NewYear2013",": " ]
                  }, {
                     "r" : "218",
                     "s" : [ {
                        "r" : "213",
                        "value" : [ "Date","(","2013",", ","1",", ","1",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "218",
               "type" : "Date",
               "signature" : [ ],
               "year" : {
                  "localId" : "213",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2013",
                  "type" : "Literal"
               },
               "month" : {
                  "localId" : "214",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               },
               "day" : {
                  "localId" : "215",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "220",
            "name" : "NewYear2014",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "220",
                  "s" : [ {
                     "value" : [ "","define ","NewYear2014",": " ]
                  }, {
                     "r" : "226",
                     "s" : [ {
                        "r" : "221",
                        "value" : [ "Date","(","2014",", ","1",", ","1",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "226",
               "type" : "Date",
               "signature" : [ ],
               "year" : {
                  "localId" : "221",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2014",
                  "type" : "Literal"
               },
               "month" : {
                  "localId" : "222",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               },
               "day" : {
                  "localId" : "223",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "228",
            "name" : "January2014",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "228",
                  "s" : [ {
                     "value" : [ "","define ","January2014",": " ]
                  }, {
                     "r" : "233",
                     "s" : [ {
                        "r" : "229",
                        "value" : [ "Date","(","2014",", ","1",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "233",
               "type" : "Date",
               "signature" : [ ],
               "year" : {
                  "localId" : "229",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2014",
                  "type" : "Literal"
               },
               "month" : {
                  "localId" : "230",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "235",
            "name" : "YearsBetween",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "235",
                  "s" : [ {
                     "value" : [ "","define ","YearsBetween",": " ]
                  }, {
                     "r" : "236",
                     "s" : [ {
                        "value" : [ "difference in years between " ]
                     }, {
                        "r" : "237",
                        "s" : [ {
                           "value" : [ "NewYear2013" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "238",
                        "s" : [ {
                           "value" : [ "NewYear2014" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "236",
               "precision" : "Year",
               "type" : "DifferenceBetween",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "237",
                  "name" : "NewYear2013",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "238",
                  "name" : "NewYear2014",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "240",
            "name" : "MonthsBetween",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "240",
                  "s" : [ {
                     "value" : [ "","define ","MonthsBetween",": " ]
                  }, {
                     "r" : "241",
                     "s" : [ {
                        "value" : [ "difference in months between " ]
                     }, {
                        "r" : "242",
                        "s" : [ {
                           "value" : [ "NewYear2013" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "243",
                        "s" : [ {
                           "value" : [ "NewYear2014" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "241",
               "precision" : "Month",
               "type" : "DifferenceBetween",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "242",
                  "name" : "NewYear2013",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "243",
                  "name" : "NewYear2014",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "245",
            "name" : "WeeksBetween",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "245",
                  "s" : [ {
                     "value" : [ "","define ","WeeksBetween",": " ]
                  }, {
                     "r" : "246",
                     "s" : [ {
                        "value" : [ "difference in weeks between " ]
                     }, {
                        "r" : "247",
                        "s" : [ {
                           "value" : [ "NewYear2013" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "248",
                        "s" : [ {
                           "value" : [ "NewYear2014" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "246",
               "precision" : "Week",
               "type" : "DifferenceBetween",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "247",
                  "name" : "NewYear2013",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "248",
                  "name" : "NewYear2014",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "250",
            "name" : "DaysBetween",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "250",
                  "s" : [ {
                     "value" : [ "","define ","DaysBetween",": " ]
                  }, {
                     "r" : "251",
                     "s" : [ {
                        "value" : [ "difference in days between " ]
                     }, {
                        "r" : "252",
                        "s" : [ {
                           "value" : [ "NewYear2013" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "253",
                        "s" : [ {
                           "value" : [ "NewYear2014" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "251",
               "precision" : "Day",
               "type" : "DifferenceBetween",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "252",
                  "name" : "NewYear2013",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "253",
                  "name" : "NewYear2014",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "255",
            "name" : "YearsBetweenUncertainty",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "255",
                  "s" : [ {
                     "value" : [ "","define ","YearsBetweenUncertainty",": " ]
                  }, {
                     "r" : "256",
                     "s" : [ {
                        "value" : [ "difference in years between " ]
                     }, {
                        "r" : "257",
                        "s" : [ {
                           "value" : [ "NewYear2014" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "258",
                        "s" : [ {
                           "value" : [ "January2014" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "256",
               "precision" : "Year",
               "type" : "DifferenceBetween",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "257",
                  "name" : "NewYear2014",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "258",
                  "name" : "January2014",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "260",
            "name" : "MonthsBetweenUncertainty",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "260",
                  "s" : [ {
                     "value" : [ "","define ","MonthsBetweenUncertainty",": " ]
                  }, {
                     "r" : "261",
                     "s" : [ {
                        "value" : [ "difference in months between " ]
                     }, {
                        "r" : "262",
                        "s" : [ {
                           "value" : [ "NewYear2014" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "263",
                        "s" : [ {
                           "value" : [ "January2014" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "261",
               "precision" : "Month",
               "type" : "DifferenceBetween",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "262",
                  "name" : "NewYear2014",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "263",
                  "name" : "January2014",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "265",
            "name" : "WeeksBetweenUncertainty",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "265",
                  "s" : [ {
                     "value" : [ "","define ","WeeksBetweenUncertainty",": " ]
                  }, {
                     "r" : "266",
                     "s" : [ {
                        "value" : [ "difference in weeks between " ]
                     }, {
                        "r" : "267",
                        "s" : [ {
                           "value" : [ "NewYear2014" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "268",
                        "s" : [ {
                           "value" : [ "January2014" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "266",
               "precision" : "Week",
               "type" : "DifferenceBetween",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "267",
                  "name" : "NewYear2014",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "268",
                  "name" : "January2014",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "270",
            "name" : "DaysBetweenUncertainty",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "270",
                  "s" : [ {
                     "value" : [ "","define ","DaysBetweenUncertainty",": " ]
                  }, {
                     "r" : "271",
                     "s" : [ {
                        "value" : [ "difference in days between " ]
                     }, {
                        "r" : "272",
                        "s" : [ {
                           "value" : [ "NewYear2014" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "273",
                        "s" : [ {
                           "value" : [ "January2014" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "271",
               "precision" : "Day",
               "type" : "DifferenceBetween",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "272",
                  "name" : "NewYear2014",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "273",
                  "name" : "January2014",
                  "type" : "ExpressionRef"
               } ]
            }
         } ]
      }
   }
}

/* DifferenceBetween Comparisons
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define NewYear2014: Date(2014, 1, 1)
define February2014: Date(2014, 2)
define GreaterThan25DaysAfter: difference in days between NewYear2014 and February2014 > 25
define GreaterThan40DaysAfter: difference in days between NewYear2014 and February2014 > 40
define GreaterThan80DaysAfter: difference in days between NewYear2014 and February2014 > 80
define GreaterOrEqualTo25DaysAfter: difference in days between NewYear2014 and February2014 >= 25
define GreaterOrEqualTo40DaysAfter: difference in days between NewYear2014 and February2014 >= 40
define GreaterOrEqualTo80DaysAfter: difference in days between NewYear2014 and February2014 >= 80
define EqualTo25DaysAfter: difference in days between NewYear2014 and February2014 = 25
define EqualTo40DaysAfter: difference in days between NewYear2014 and February2014 = 40
define EqualTo80DaysAfter: difference in days between NewYear2014 and February2014 = 80
define LessOrEqualTo25DaysAfter: difference in days between NewYear2014 and February2014 <= 25
define LessOrEqualTo40DaysAfter: difference in days between NewYear2014 and February2014 <= 40
define LessOrEqualTo80DaysAfter: difference in days between NewYear2014 and February2014 <= 80
define LessThan25DaysAfter: difference in days between NewYear2014 and February2014 < 25
define LessThan40DaysAfter: difference in days between NewYear2014 and February2014 < 40
define LessThan80DaysAfter: difference in days between NewYear2014 and February2014 < 80
define TwentyFiveDaysLessThanDaysBetween: 25 < difference in days between NewYear2014 and February2014
define FortyDaysEqualToDaysBetween: 40 = difference in days between NewYear2014 and February2014
define TwentyFiveDaysGreaterThanDaysBetween: 25 > difference in days between NewYear2014 and February2014
*/

module.exports['DifferenceBetween Comparisons'] = {
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
            "r" : "346",
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
            "name" : "NewYear2014",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","NewYear2014",": " ]
                  }, {
                     "r" : "218",
                     "s" : [ {
                        "r" : "213",
                        "value" : [ "Date","(","2014",", ","1",", ","1",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "218",
               "type" : "Date",
               "signature" : [ ],
               "year" : {
                  "localId" : "213",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2014",
                  "type" : "Literal"
               },
               "month" : {
                  "localId" : "214",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               },
               "day" : {
                  "localId" : "215",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "220",
            "name" : "February2014",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "220",
                  "s" : [ {
                     "value" : [ "","define ","February2014",": " ]
                  }, {
                     "r" : "225",
                     "s" : [ {
                        "r" : "221",
                        "value" : [ "Date","(","2014",", ","2",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "225",
               "type" : "Date",
               "signature" : [ ],
               "year" : {
                  "localId" : "221",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2014",
                  "type" : "Literal"
               },
               "month" : {
                  "localId" : "222",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "227",
            "name" : "GreaterThan25DaysAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "227",
                  "s" : [ {
                     "value" : [ "","define ","GreaterThan25DaysAfter",": " ]
                  }, {
                     "r" : "228",
                     "s" : [ {
                        "r" : "229",
                        "s" : [ {
                           "value" : [ "difference in days between " ]
                        }, {
                           "r" : "230",
                           "s" : [ {
                              "value" : [ "NewYear2014" ]
                           } ]
                        }, {
                           "value" : [ " and " ]
                        }, {
                           "r" : "231",
                           "s" : [ {
                              "value" : [ "February2014" ]
                           } ]
                        } ]
                     }, {
                        "r" : "232",
                        "value" : [ " ",">"," ","25" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "228",
               "type" : "Greater",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "229",
                  "precision" : "Day",
                  "type" : "DifferenceBetween",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "230",
                     "name" : "NewYear2014",
                     "type" : "ExpressionRef"
                  }, {
                     "localId" : "231",
                     "name" : "February2014",
                     "type" : "ExpressionRef"
                  } ]
               }, {
                  "localId" : "232",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "25",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "234",
            "name" : "GreaterThan40DaysAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "234",
                  "s" : [ {
                     "value" : [ "","define ","GreaterThan40DaysAfter",": " ]
                  }, {
                     "r" : "235",
                     "s" : [ {
                        "r" : "236",
                        "s" : [ {
                           "value" : [ "difference in days between " ]
                        }, {
                           "r" : "237",
                           "s" : [ {
                              "value" : [ "NewYear2014" ]
                           } ]
                        }, {
                           "value" : [ " and " ]
                        }, {
                           "r" : "238",
                           "s" : [ {
                              "value" : [ "February2014" ]
                           } ]
                        } ]
                     }, {
                        "r" : "239",
                        "value" : [ " ",">"," ","40" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "235",
               "type" : "Greater",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "236",
                  "precision" : "Day",
                  "type" : "DifferenceBetween",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "237",
                     "name" : "NewYear2014",
                     "type" : "ExpressionRef"
                  }, {
                     "localId" : "238",
                     "name" : "February2014",
                     "type" : "ExpressionRef"
                  } ]
               }, {
                  "localId" : "239",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "40",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "241",
            "name" : "GreaterThan80DaysAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "241",
                  "s" : [ {
                     "value" : [ "","define ","GreaterThan80DaysAfter",": " ]
                  }, {
                     "r" : "242",
                     "s" : [ {
                        "r" : "243",
                        "s" : [ {
                           "value" : [ "difference in days between " ]
                        }, {
                           "r" : "244",
                           "s" : [ {
                              "value" : [ "NewYear2014" ]
                           } ]
                        }, {
                           "value" : [ " and " ]
                        }, {
                           "r" : "245",
                           "s" : [ {
                              "value" : [ "February2014" ]
                           } ]
                        } ]
                     }, {
                        "r" : "246",
                        "value" : [ " ",">"," ","80" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "242",
               "type" : "Greater",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "243",
                  "precision" : "Day",
                  "type" : "DifferenceBetween",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "244",
                     "name" : "NewYear2014",
                     "type" : "ExpressionRef"
                  }, {
                     "localId" : "245",
                     "name" : "February2014",
                     "type" : "ExpressionRef"
                  } ]
               }, {
                  "localId" : "246",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "80",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "248",
            "name" : "GreaterOrEqualTo25DaysAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "248",
                  "s" : [ {
                     "value" : [ "","define ","GreaterOrEqualTo25DaysAfter",": " ]
                  }, {
                     "r" : "249",
                     "s" : [ {
                        "r" : "250",
                        "s" : [ {
                           "value" : [ "difference in days between " ]
                        }, {
                           "r" : "251",
                           "s" : [ {
                              "value" : [ "NewYear2014" ]
                           } ]
                        }, {
                           "value" : [ " and " ]
                        }, {
                           "r" : "252",
                           "s" : [ {
                              "value" : [ "February2014" ]
                           } ]
                        } ]
                     }, {
                        "r" : "253",
                        "value" : [ " ",">="," ","25" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "249",
               "type" : "GreaterOrEqual",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "250",
                  "precision" : "Day",
                  "type" : "DifferenceBetween",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "251",
                     "name" : "NewYear2014",
                     "type" : "ExpressionRef"
                  }, {
                     "localId" : "252",
                     "name" : "February2014",
                     "type" : "ExpressionRef"
                  } ]
               }, {
                  "localId" : "253",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "25",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "255",
            "name" : "GreaterOrEqualTo40DaysAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "255",
                  "s" : [ {
                     "value" : [ "","define ","GreaterOrEqualTo40DaysAfter",": " ]
                  }, {
                     "r" : "256",
                     "s" : [ {
                        "r" : "257",
                        "s" : [ {
                           "value" : [ "difference in days between " ]
                        }, {
                           "r" : "258",
                           "s" : [ {
                              "value" : [ "NewYear2014" ]
                           } ]
                        }, {
                           "value" : [ " and " ]
                        }, {
                           "r" : "259",
                           "s" : [ {
                              "value" : [ "February2014" ]
                           } ]
                        } ]
                     }, {
                        "r" : "260",
                        "value" : [ " ",">="," ","40" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "256",
               "type" : "GreaterOrEqual",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "257",
                  "precision" : "Day",
                  "type" : "DifferenceBetween",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "258",
                     "name" : "NewYear2014",
                     "type" : "ExpressionRef"
                  }, {
                     "localId" : "259",
                     "name" : "February2014",
                     "type" : "ExpressionRef"
                  } ]
               }, {
                  "localId" : "260",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "40",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "262",
            "name" : "GreaterOrEqualTo80DaysAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "262",
                  "s" : [ {
                     "value" : [ "","define ","GreaterOrEqualTo80DaysAfter",": " ]
                  }, {
                     "r" : "263",
                     "s" : [ {
                        "r" : "264",
                        "s" : [ {
                           "value" : [ "difference in days between " ]
                        }, {
                           "r" : "265",
                           "s" : [ {
                              "value" : [ "NewYear2014" ]
                           } ]
                        }, {
                           "value" : [ " and " ]
                        }, {
                           "r" : "266",
                           "s" : [ {
                              "value" : [ "February2014" ]
                           } ]
                        } ]
                     }, {
                        "r" : "267",
                        "value" : [ " ",">="," ","80" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "263",
               "type" : "GreaterOrEqual",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "264",
                  "precision" : "Day",
                  "type" : "DifferenceBetween",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "265",
                     "name" : "NewYear2014",
                     "type" : "ExpressionRef"
                  }, {
                     "localId" : "266",
                     "name" : "February2014",
                     "type" : "ExpressionRef"
                  } ]
               }, {
                  "localId" : "267",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "80",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "269",
            "name" : "EqualTo25DaysAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "269",
                  "s" : [ {
                     "value" : [ "","define ","EqualTo25DaysAfter",": " ]
                  }, {
                     "r" : "270",
                     "s" : [ {
                        "r" : "271",
                        "s" : [ {
                           "value" : [ "difference in days between " ]
                        }, {
                           "r" : "272",
                           "s" : [ {
                              "value" : [ "NewYear2014" ]
                           } ]
                        }, {
                           "value" : [ " and " ]
                        }, {
                           "r" : "273",
                           "s" : [ {
                              "value" : [ "February2014" ]
                           } ]
                        } ]
                     }, {
                        "r" : "274",
                        "value" : [ " ","="," ","25" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "270",
               "type" : "Equal",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "271",
                  "precision" : "Day",
                  "type" : "DifferenceBetween",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "272",
                     "name" : "NewYear2014",
                     "type" : "ExpressionRef"
                  }, {
                     "localId" : "273",
                     "name" : "February2014",
                     "type" : "ExpressionRef"
                  } ]
               }, {
                  "localId" : "274",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "25",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "276",
            "name" : "EqualTo40DaysAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "276",
                  "s" : [ {
                     "value" : [ "","define ","EqualTo40DaysAfter",": " ]
                  }, {
                     "r" : "277",
                     "s" : [ {
                        "r" : "278",
                        "s" : [ {
                           "value" : [ "difference in days between " ]
                        }, {
                           "r" : "279",
                           "s" : [ {
                              "value" : [ "NewYear2014" ]
                           } ]
                        }, {
                           "value" : [ " and " ]
                        }, {
                           "r" : "280",
                           "s" : [ {
                              "value" : [ "February2014" ]
                           } ]
                        } ]
                     }, {
                        "r" : "281",
                        "value" : [ " ","="," ","40" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "277",
               "type" : "Equal",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "278",
                  "precision" : "Day",
                  "type" : "DifferenceBetween",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "279",
                     "name" : "NewYear2014",
                     "type" : "ExpressionRef"
                  }, {
                     "localId" : "280",
                     "name" : "February2014",
                     "type" : "ExpressionRef"
                  } ]
               }, {
                  "localId" : "281",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "40",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "283",
            "name" : "EqualTo80DaysAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "283",
                  "s" : [ {
                     "value" : [ "","define ","EqualTo80DaysAfter",": " ]
                  }, {
                     "r" : "284",
                     "s" : [ {
                        "r" : "285",
                        "s" : [ {
                           "value" : [ "difference in days between " ]
                        }, {
                           "r" : "286",
                           "s" : [ {
                              "value" : [ "NewYear2014" ]
                           } ]
                        }, {
                           "value" : [ " and " ]
                        }, {
                           "r" : "287",
                           "s" : [ {
                              "value" : [ "February2014" ]
                           } ]
                        } ]
                     }, {
                        "r" : "288",
                        "value" : [ " ","="," ","80" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "284",
               "type" : "Equal",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "285",
                  "precision" : "Day",
                  "type" : "DifferenceBetween",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "286",
                     "name" : "NewYear2014",
                     "type" : "ExpressionRef"
                  }, {
                     "localId" : "287",
                     "name" : "February2014",
                     "type" : "ExpressionRef"
                  } ]
               }, {
                  "localId" : "288",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "80",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "290",
            "name" : "LessOrEqualTo25DaysAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "290",
                  "s" : [ {
                     "value" : [ "","define ","LessOrEqualTo25DaysAfter",": " ]
                  }, {
                     "r" : "291",
                     "s" : [ {
                        "r" : "292",
                        "s" : [ {
                           "value" : [ "difference in days between " ]
                        }, {
                           "r" : "293",
                           "s" : [ {
                              "value" : [ "NewYear2014" ]
                           } ]
                        }, {
                           "value" : [ " and " ]
                        }, {
                           "r" : "294",
                           "s" : [ {
                              "value" : [ "February2014" ]
                           } ]
                        } ]
                     }, {
                        "r" : "295",
                        "value" : [ " ","<="," ","25" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "291",
               "type" : "LessOrEqual",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "292",
                  "precision" : "Day",
                  "type" : "DifferenceBetween",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "293",
                     "name" : "NewYear2014",
                     "type" : "ExpressionRef"
                  }, {
                     "localId" : "294",
                     "name" : "February2014",
                     "type" : "ExpressionRef"
                  } ]
               }, {
                  "localId" : "295",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "25",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "297",
            "name" : "LessOrEqualTo40DaysAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "297",
                  "s" : [ {
                     "value" : [ "","define ","LessOrEqualTo40DaysAfter",": " ]
                  }, {
                     "r" : "298",
                     "s" : [ {
                        "r" : "299",
                        "s" : [ {
                           "value" : [ "difference in days between " ]
                        }, {
                           "r" : "300",
                           "s" : [ {
                              "value" : [ "NewYear2014" ]
                           } ]
                        }, {
                           "value" : [ " and " ]
                        }, {
                           "r" : "301",
                           "s" : [ {
                              "value" : [ "February2014" ]
                           } ]
                        } ]
                     }, {
                        "r" : "302",
                        "value" : [ " ","<="," ","40" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "298",
               "type" : "LessOrEqual",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "299",
                  "precision" : "Day",
                  "type" : "DifferenceBetween",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "300",
                     "name" : "NewYear2014",
                     "type" : "ExpressionRef"
                  }, {
                     "localId" : "301",
                     "name" : "February2014",
                     "type" : "ExpressionRef"
                  } ]
               }, {
                  "localId" : "302",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "40",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "304",
            "name" : "LessOrEqualTo80DaysAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "304",
                  "s" : [ {
                     "value" : [ "","define ","LessOrEqualTo80DaysAfter",": " ]
                  }, {
                     "r" : "305",
                     "s" : [ {
                        "r" : "306",
                        "s" : [ {
                           "value" : [ "difference in days between " ]
                        }, {
                           "r" : "307",
                           "s" : [ {
                              "value" : [ "NewYear2014" ]
                           } ]
                        }, {
                           "value" : [ " and " ]
                        }, {
                           "r" : "308",
                           "s" : [ {
                              "value" : [ "February2014" ]
                           } ]
                        } ]
                     }, {
                        "r" : "309",
                        "value" : [ " ","<="," ","80" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "305",
               "type" : "LessOrEqual",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "306",
                  "precision" : "Day",
                  "type" : "DifferenceBetween",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "307",
                     "name" : "NewYear2014",
                     "type" : "ExpressionRef"
                  }, {
                     "localId" : "308",
                     "name" : "February2014",
                     "type" : "ExpressionRef"
                  } ]
               }, {
                  "localId" : "309",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "80",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "311",
            "name" : "LessThan25DaysAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "311",
                  "s" : [ {
                     "value" : [ "","define ","LessThan25DaysAfter",": " ]
                  }, {
                     "r" : "312",
                     "s" : [ {
                        "r" : "313",
                        "s" : [ {
                           "value" : [ "difference in days between " ]
                        }, {
                           "r" : "314",
                           "s" : [ {
                              "value" : [ "NewYear2014" ]
                           } ]
                        }, {
                           "value" : [ " and " ]
                        }, {
                           "r" : "315",
                           "s" : [ {
                              "value" : [ "February2014" ]
                           } ]
                        } ]
                     }, {
                        "r" : "316",
                        "value" : [ " ","<"," ","25" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "312",
               "type" : "Less",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "313",
                  "precision" : "Day",
                  "type" : "DifferenceBetween",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "314",
                     "name" : "NewYear2014",
                     "type" : "ExpressionRef"
                  }, {
                     "localId" : "315",
                     "name" : "February2014",
                     "type" : "ExpressionRef"
                  } ]
               }, {
                  "localId" : "316",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "25",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "318",
            "name" : "LessThan40DaysAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "318",
                  "s" : [ {
                     "value" : [ "","define ","LessThan40DaysAfter",": " ]
                  }, {
                     "r" : "319",
                     "s" : [ {
                        "r" : "320",
                        "s" : [ {
                           "value" : [ "difference in days between " ]
                        }, {
                           "r" : "321",
                           "s" : [ {
                              "value" : [ "NewYear2014" ]
                           } ]
                        }, {
                           "value" : [ " and " ]
                        }, {
                           "r" : "322",
                           "s" : [ {
                              "value" : [ "February2014" ]
                           } ]
                        } ]
                     }, {
                        "r" : "323",
                        "value" : [ " ","<"," ","40" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "319",
               "type" : "Less",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "320",
                  "precision" : "Day",
                  "type" : "DifferenceBetween",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "321",
                     "name" : "NewYear2014",
                     "type" : "ExpressionRef"
                  }, {
                     "localId" : "322",
                     "name" : "February2014",
                     "type" : "ExpressionRef"
                  } ]
               }, {
                  "localId" : "323",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "40",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "325",
            "name" : "LessThan80DaysAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "325",
                  "s" : [ {
                     "value" : [ "","define ","LessThan80DaysAfter",": " ]
                  }, {
                     "r" : "326",
                     "s" : [ {
                        "r" : "327",
                        "s" : [ {
                           "value" : [ "difference in days between " ]
                        }, {
                           "r" : "328",
                           "s" : [ {
                              "value" : [ "NewYear2014" ]
                           } ]
                        }, {
                           "value" : [ " and " ]
                        }, {
                           "r" : "329",
                           "s" : [ {
                              "value" : [ "February2014" ]
                           } ]
                        } ]
                     }, {
                        "r" : "330",
                        "value" : [ " ","<"," ","80" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "326",
               "type" : "Less",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "327",
                  "precision" : "Day",
                  "type" : "DifferenceBetween",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "328",
                     "name" : "NewYear2014",
                     "type" : "ExpressionRef"
                  }, {
                     "localId" : "329",
                     "name" : "February2014",
                     "type" : "ExpressionRef"
                  } ]
               }, {
                  "localId" : "330",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "80",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "332",
            "name" : "TwentyFiveDaysLessThanDaysBetween",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "332",
                  "s" : [ {
                     "value" : [ "","define ","TwentyFiveDaysLessThanDaysBetween",": " ]
                  }, {
                     "r" : "333",
                     "s" : [ {
                        "r" : "334",
                        "value" : [ "25"," ","<"," " ]
                     }, {
                        "r" : "335",
                        "s" : [ {
                           "value" : [ "difference in days between " ]
                        }, {
                           "r" : "336",
                           "s" : [ {
                              "value" : [ "NewYear2014" ]
                           } ]
                        }, {
                           "value" : [ " and " ]
                        }, {
                           "r" : "337",
                           "s" : [ {
                              "value" : [ "February2014" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "333",
               "type" : "Less",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "334",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "25",
                  "type" : "Literal"
               }, {
                  "localId" : "335",
                  "precision" : "Day",
                  "type" : "DifferenceBetween",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "336",
                     "name" : "NewYear2014",
                     "type" : "ExpressionRef"
                  }, {
                     "localId" : "337",
                     "name" : "February2014",
                     "type" : "ExpressionRef"
                  } ]
               } ]
            }
         }, {
            "localId" : "339",
            "name" : "FortyDaysEqualToDaysBetween",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "339",
                  "s" : [ {
                     "value" : [ "","define ","FortyDaysEqualToDaysBetween",": " ]
                  }, {
                     "r" : "340",
                     "s" : [ {
                        "r" : "341",
                        "value" : [ "40"," ","="," " ]
                     }, {
                        "r" : "342",
                        "s" : [ {
                           "value" : [ "difference in days between " ]
                        }, {
                           "r" : "343",
                           "s" : [ {
                              "value" : [ "NewYear2014" ]
                           } ]
                        }, {
                           "value" : [ " and " ]
                        }, {
                           "r" : "344",
                           "s" : [ {
                              "value" : [ "February2014" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "340",
               "type" : "Equal",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "341",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "40",
                  "type" : "Literal"
               }, {
                  "localId" : "342",
                  "precision" : "Day",
                  "type" : "DifferenceBetween",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "343",
                     "name" : "NewYear2014",
                     "type" : "ExpressionRef"
                  }, {
                     "localId" : "344",
                     "name" : "February2014",
                     "type" : "ExpressionRef"
                  } ]
               } ]
            }
         }, {
            "localId" : "346",
            "name" : "TwentyFiveDaysGreaterThanDaysBetween",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "346",
                  "s" : [ {
                     "value" : [ "","define ","TwentyFiveDaysGreaterThanDaysBetween",": " ]
                  }, {
                     "r" : "347",
                     "s" : [ {
                        "r" : "348",
                        "value" : [ "25"," ",">"," " ]
                     }, {
                        "r" : "349",
                        "s" : [ {
                           "value" : [ "difference in days between " ]
                        }, {
                           "r" : "350",
                           "s" : [ {
                              "value" : [ "NewYear2014" ]
                           } ]
                        }, {
                           "value" : [ " and " ]
                        }, {
                           "r" : "351",
                           "s" : [ {
                              "value" : [ "February2014" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "347",
               "type" : "Greater",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "348",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "25",
                  "type" : "Literal"
               }, {
                  "localId" : "349",
                  "precision" : "Day",
                  "type" : "DifferenceBetween",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "350",
                     "name" : "NewYear2014",
                     "type" : "ExpressionRef"
                  }, {
                     "localId" : "351",
                     "name" : "February2014",
                     "type" : "ExpressionRef"
                  } ]
               } ]
            }
         } ]
      }
   }
}

/* DurationBetween
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define DecTen2013: Date(2013, 12, 10)
define JanOne2015: Date(2015, 1, 1)
define January2015: Date(2015, 1)
define YearsBetween: years between DecTen2013 and JanOne2015
define MonthsBetween: months between DecTen2013 and JanOne2015
define WeeksBetween: weeks between DecTen2013 and JanOne2015
define DaysBetween: days between DecTen2013 and JanOne2015
define YearsBetweenUncertainty: years between JanOne2015 and January2015
define MonthsBetweenUncertainty: months between JanOne2015 and January2015
define WeeksBetweenUncertainty: weeks between JanOne2015 and January2015
define DaysBetweenUncertainty: days between JanOne2015 and January2015
*/

module.exports['DurationBetween'] = {
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
            "r" : "270",
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
            "name" : "DecTen2013",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","DecTen2013",": " ]
                  }, {
                     "r" : "218",
                     "s" : [ {
                        "r" : "213",
                        "value" : [ "Date","(","2013",", ","12",", ","10",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "218",
               "type" : "Date",
               "signature" : [ ],
               "year" : {
                  "localId" : "213",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2013",
                  "type" : "Literal"
               },
               "month" : {
                  "localId" : "214",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "12",
                  "type" : "Literal"
               },
               "day" : {
                  "localId" : "215",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "10",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "220",
            "name" : "JanOne2015",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "220",
                  "s" : [ {
                     "value" : [ "","define ","JanOne2015",": " ]
                  }, {
                     "r" : "226",
                     "s" : [ {
                        "r" : "221",
                        "value" : [ "Date","(","2015",", ","1",", ","1",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "226",
               "type" : "Date",
               "signature" : [ ],
               "year" : {
                  "localId" : "221",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2015",
                  "type" : "Literal"
               },
               "month" : {
                  "localId" : "222",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               },
               "day" : {
                  "localId" : "223",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "228",
            "name" : "January2015",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "228",
                  "s" : [ {
                     "value" : [ "","define ","January2015",": " ]
                  }, {
                     "r" : "233",
                     "s" : [ {
                        "r" : "229",
                        "value" : [ "Date","(","2015",", ","1",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "233",
               "type" : "Date",
               "signature" : [ ],
               "year" : {
                  "localId" : "229",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2015",
                  "type" : "Literal"
               },
               "month" : {
                  "localId" : "230",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "235",
            "name" : "YearsBetween",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "235",
                  "s" : [ {
                     "value" : [ "","define ","YearsBetween",": " ]
                  }, {
                     "r" : "236",
                     "s" : [ {
                        "value" : [ "years between " ]
                     }, {
                        "r" : "237",
                        "s" : [ {
                           "value" : [ "DecTen2013" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "238",
                        "s" : [ {
                           "value" : [ "JanOne2015" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "236",
               "precision" : "Year",
               "type" : "DurationBetween",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "237",
                  "name" : "DecTen2013",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "238",
                  "name" : "JanOne2015",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "240",
            "name" : "MonthsBetween",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "240",
                  "s" : [ {
                     "value" : [ "","define ","MonthsBetween",": " ]
                  }, {
                     "r" : "241",
                     "s" : [ {
                        "value" : [ "months between " ]
                     }, {
                        "r" : "242",
                        "s" : [ {
                           "value" : [ "DecTen2013" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "243",
                        "s" : [ {
                           "value" : [ "JanOne2015" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "241",
               "precision" : "Month",
               "type" : "DurationBetween",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "242",
                  "name" : "DecTen2013",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "243",
                  "name" : "JanOne2015",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "245",
            "name" : "WeeksBetween",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "245",
                  "s" : [ {
                     "value" : [ "","define ","WeeksBetween",": " ]
                  }, {
                     "r" : "246",
                     "s" : [ {
                        "value" : [ "weeks between " ]
                     }, {
                        "r" : "247",
                        "s" : [ {
                           "value" : [ "DecTen2013" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "248",
                        "s" : [ {
                           "value" : [ "JanOne2015" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "246",
               "precision" : "Week",
               "type" : "DurationBetween",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "247",
                  "name" : "DecTen2013",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "248",
                  "name" : "JanOne2015",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "250",
            "name" : "DaysBetween",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "250",
                  "s" : [ {
                     "value" : [ "","define ","DaysBetween",": " ]
                  }, {
                     "r" : "251",
                     "s" : [ {
                        "value" : [ "days between " ]
                     }, {
                        "r" : "252",
                        "s" : [ {
                           "value" : [ "DecTen2013" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "253",
                        "s" : [ {
                           "value" : [ "JanOne2015" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "251",
               "precision" : "Day",
               "type" : "DurationBetween",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "252",
                  "name" : "DecTen2013",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "253",
                  "name" : "JanOne2015",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "255",
            "name" : "YearsBetweenUncertainty",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "255",
                  "s" : [ {
                     "value" : [ "","define ","YearsBetweenUncertainty",": " ]
                  }, {
                     "r" : "256",
                     "s" : [ {
                        "value" : [ "years between " ]
                     }, {
                        "r" : "257",
                        "s" : [ {
                           "value" : [ "JanOne2015" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "258",
                        "s" : [ {
                           "value" : [ "January2015" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "256",
               "precision" : "Year",
               "type" : "DurationBetween",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "257",
                  "name" : "JanOne2015",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "258",
                  "name" : "January2015",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "260",
            "name" : "MonthsBetweenUncertainty",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "260",
                  "s" : [ {
                     "value" : [ "","define ","MonthsBetweenUncertainty",": " ]
                  }, {
                     "r" : "261",
                     "s" : [ {
                        "value" : [ "months between " ]
                     }, {
                        "r" : "262",
                        "s" : [ {
                           "value" : [ "JanOne2015" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "263",
                        "s" : [ {
                           "value" : [ "January2015" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "261",
               "precision" : "Month",
               "type" : "DurationBetween",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "262",
                  "name" : "JanOne2015",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "263",
                  "name" : "January2015",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "265",
            "name" : "WeeksBetweenUncertainty",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "265",
                  "s" : [ {
                     "value" : [ "","define ","WeeksBetweenUncertainty",": " ]
                  }, {
                     "r" : "266",
                     "s" : [ {
                        "value" : [ "weeks between " ]
                     }, {
                        "r" : "267",
                        "s" : [ {
                           "value" : [ "JanOne2015" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "268",
                        "s" : [ {
                           "value" : [ "January2015" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "266",
               "precision" : "Week",
               "type" : "DurationBetween",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "267",
                  "name" : "JanOne2015",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "268",
                  "name" : "January2015",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "270",
            "name" : "DaysBetweenUncertainty",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "270",
                  "s" : [ {
                     "value" : [ "","define ","DaysBetweenUncertainty",": " ]
                  }, {
                     "r" : "271",
                     "s" : [ {
                        "value" : [ "days between " ]
                     }, {
                        "r" : "272",
                        "s" : [ {
                           "value" : [ "JanOne2015" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "273",
                        "s" : [ {
                           "value" : [ "January2015" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "271",
               "precision" : "Day",
               "type" : "DurationBetween",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "272",
                  "name" : "JanOne2015",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "273",
                  "name" : "January2015",
                  "type" : "ExpressionRef"
               } ]
            }
         } ]
      }
   }
}

/* DateMath
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define June15th2013: Date(2013, 6, 15)
define PlusThreeYears: June15th2013 + 3 years
define MinusThreeYears: June15th2013 - 3 years
define PlusEightMonths: June15th2013 + 8 months
define MinusEightMonths: June15th2013 - 8 months
define PlusThreeWeeks: June15th2013 + 3 weeks
define MinusThreeWeeks: June15th2013 - 3 weeks
define PlusTwentyDays: June15th2013 + 20 days
define MinusTwentyDays: June15th2013 - 20 days
*/

module.exports['DateMath'] = {
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
            "r" : "255",
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
            "name" : "June15th2013",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","June15th2013",": " ]
                  }, {
                     "r" : "218",
                     "s" : [ {
                        "r" : "213",
                        "value" : [ "Date","(","2013",", ","6",", ","15",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "218",
               "type" : "Date",
               "signature" : [ ],
               "year" : {
                  "localId" : "213",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2013",
                  "type" : "Literal"
               },
               "month" : {
                  "localId" : "214",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "6",
                  "type" : "Literal"
               },
               "day" : {
                  "localId" : "215",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "15",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "220",
            "name" : "PlusThreeYears",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "220",
                  "s" : [ {
                     "value" : [ "","define ","PlusThreeYears",": " ]
                  }, {
                     "r" : "221",
                     "s" : [ {
                        "r" : "222",
                        "s" : [ {
                           "value" : [ "June15th2013" ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "223",
                        "s" : [ {
                           "value" : [ "3 ","years" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "221",
               "type" : "Add",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "222",
                  "name" : "June15th2013",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "223",
                  "value" : 3,
                  "unit" : "years",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "225",
            "name" : "MinusThreeYears",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "225",
                  "s" : [ {
                     "value" : [ "","define ","MinusThreeYears",": " ]
                  }, {
                     "r" : "226",
                     "s" : [ {
                        "r" : "227",
                        "s" : [ {
                           "value" : [ "June15th2013" ]
                        } ]
                     }, {
                        "value" : [ " - " ]
                     }, {
                        "r" : "228",
                        "s" : [ {
                           "value" : [ "3 ","years" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "226",
               "type" : "Subtract",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "227",
                  "name" : "June15th2013",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "228",
                  "value" : 3,
                  "unit" : "years",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "230",
            "name" : "PlusEightMonths",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "230",
                  "s" : [ {
                     "value" : [ "","define ","PlusEightMonths",": " ]
                  }, {
                     "r" : "231",
                     "s" : [ {
                        "r" : "232",
                        "s" : [ {
                           "value" : [ "June15th2013" ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "233",
                        "s" : [ {
                           "value" : [ "8 ","months" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "231",
               "type" : "Add",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "232",
                  "name" : "June15th2013",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "233",
                  "value" : 8,
                  "unit" : "months",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "235",
            "name" : "MinusEightMonths",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "235",
                  "s" : [ {
                     "value" : [ "","define ","MinusEightMonths",": " ]
                  }, {
                     "r" : "236",
                     "s" : [ {
                        "r" : "237",
                        "s" : [ {
                           "value" : [ "June15th2013" ]
                        } ]
                     }, {
                        "value" : [ " - " ]
                     }, {
                        "r" : "238",
                        "s" : [ {
                           "value" : [ "8 ","months" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "236",
               "type" : "Subtract",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "237",
                  "name" : "June15th2013",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "238",
                  "value" : 8,
                  "unit" : "months",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "240",
            "name" : "PlusThreeWeeks",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "240",
                  "s" : [ {
                     "value" : [ "","define ","PlusThreeWeeks",": " ]
                  }, {
                     "r" : "241",
                     "s" : [ {
                        "r" : "242",
                        "s" : [ {
                           "value" : [ "June15th2013" ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "243",
                        "s" : [ {
                           "value" : [ "3 ","weeks" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "241",
               "type" : "Add",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "242",
                  "name" : "June15th2013",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "243",
                  "value" : 3,
                  "unit" : "weeks",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "245",
            "name" : "MinusThreeWeeks",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "245",
                  "s" : [ {
                     "value" : [ "","define ","MinusThreeWeeks",": " ]
                  }, {
                     "r" : "246",
                     "s" : [ {
                        "r" : "247",
                        "s" : [ {
                           "value" : [ "June15th2013" ]
                        } ]
                     }, {
                        "value" : [ " - " ]
                     }, {
                        "r" : "248",
                        "s" : [ {
                           "value" : [ "3 ","weeks" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "246",
               "type" : "Subtract",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "247",
                  "name" : "June15th2013",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "248",
                  "value" : 3,
                  "unit" : "weeks",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "250",
            "name" : "PlusTwentyDays",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "250",
                  "s" : [ {
                     "value" : [ "","define ","PlusTwentyDays",": " ]
                  }, {
                     "r" : "251",
                     "s" : [ {
                        "r" : "252",
                        "s" : [ {
                           "value" : [ "June15th2013" ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "253",
                        "s" : [ {
                           "value" : [ "20 ","days" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "251",
               "type" : "Add",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "252",
                  "name" : "June15th2013",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "253",
                  "value" : 20,
                  "unit" : "days",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "255",
            "name" : "MinusTwentyDays",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "255",
                  "s" : [ {
                     "value" : [ "","define ","MinusTwentyDays",": " ]
                  }, {
                     "r" : "256",
                     "s" : [ {
                        "r" : "257",
                        "s" : [ {
                           "value" : [ "June15th2013" ]
                        } ]
                     }, {
                        "value" : [ " - " ]
                     }, {
                        "r" : "258",
                        "s" : [ {
                           "value" : [ "20 ","days" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "256",
               "type" : "Subtract",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "257",
                  "name" : "June15th2013",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "258",
                  "value" : 20,
                  "unit" : "days",
                  "type" : "Quantity"
               } ]
            }
         } ]
      }
   }
}

