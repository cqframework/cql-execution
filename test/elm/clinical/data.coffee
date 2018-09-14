###
   WARNING: This is a GENERATED file.  Do not manually edit!

   To generate this file:
       - Edit data.cql to add a CQL Snippet
       - From java dir: ./gradlew :cql-to-elm:generateTestData
###

### ValueSetDef
library TestSnippet version '1'
using QUICK
valueset "Known": '2.16.840.1.113883.3.464.1003.101.12.1061'
valueset "Unknown One Arg": '1.2.3.4.5.6.7.8.9'
valueset "Unknown Two Arg": '1.2.3.4.5.6.7.8.9' version '1'
context Patient
define Foo: 'Bar'
###

module.exports['ValueSetDef'] = {
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
      "valueSets" : {
         "def" : [ {
            "localId" : "2",
            "name" : "Known",
            "id" : "2.16.840.1.113883.3.464.1003.101.12.1061",
            "accessLevel" : "Public"
         }, {
            "localId" : "3",
            "name" : "Unknown One Arg",
            "id" : "1.2.3.4.5.6.7.8.9",
            "accessLevel" : "Public"
         }, {
            "localId" : "4",
            "name" : "Unknown Two Arg",
            "id" : "1.2.3.4.5.6.7.8.9",
            "version" : "1",
            "accessLevel" : "Public"
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
            "name" : "Foo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "6",
                  "s" : [ {
                     "value" : [ "define ","Foo",": " ]
                  }, {
                     "r" : "5",
                     "s" : [ {
                        "value" : [ "'Bar'" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "5",
               "valueType" : "{urn:hl7-org:elm-types:r1}String",
               "value" : "Bar",
               "type" : "Literal"
            }
         } ]
      }
   }
}

### ValueSetRef
library TestSnippet version '1'
using QUICK
valueset "Acute Pharyngitis": '2.16.840.1.113883.3.464.1003.101.12.1001'
context Patient
define Foo: "Acute Pharyngitis"
###

module.exports['ValueSetRef'] = {
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
      "valueSets" : {
         "def" : [ {
            "localId" : "2",
            "name" : "Acute Pharyngitis",
            "id" : "2.16.840.1.113883.3.464.1003.101.12.1001",
            "accessLevel" : "Public"
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
            "name" : "Foo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "4",
                  "s" : [ {
                     "value" : [ "define ","Foo",": " ]
                  }, {
                     "r" : "3",
                     "s" : [ {
                        "value" : [ "\"Acute Pharyngitis\"" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "3",
               "name" : "Acute Pharyngitis",
               "type" : "ValueSetRef"
            }
         } ]
      }
   }
}

### InValueSet
library TestSnippet version '1'
using QUICK
valueset "Female": '2.16.840.1.113883.3.560.100.2'
valueset "Versioned Female": '2.16.840.1.113883.3.560.100.2' version '20121025'
context Patient
define String: 'F' in "Female"
define StringInVersionedValueSet: 'F' in "Versioned Female"
define ShortCode: Code { code: 'F' } in "Female"
define MediumCode: Code { code: 'F', system: '2.16.840.1.113883.18.2' } in "Female"
define LongCode: Code { code: 'F', system: '2.16.840.1.113883.18.2', version: 'HL7V2.5' } in "Female"
define WrongString: 'M' in "Female"
define WrongStringInVersionedValueSet: 'M' in "Versioned Female"
define WrongShortCode: Code { code: 'M' } in "Female"
define WrongMediumCode: Code { code: 'F', system: '3.16.840.1.113883.18.2' } in "Female"
define LongCodeDifferentVersion: Code { code: 'F', system: '2.16.840.1.113883.18.2', version: 'HL7V2.6' } in "Female"
define NullCode: Code { code: null, system: '2.16.840.1.113883.18.2', version: 'HL7V2.6' } in "Female"
define InListOfCodes: { Code { code: 'M' } , Code { code: 'F', system: '2.16.840.1.113883.18.2', version: 'HL7V2.5' } } in "Female"
define ListOfCodes: { Code { code: 'M' } , Code { code: 'F', system: '2.16.840.1.113883.18.2', version: 'HL7V2.5' } }
define WrongListOfCodes: { Code { code: 'M' }, Code { code: 'F', system: '3.16.840.1.113883.18.2' } }
define InListOfCodesExpressionRef: ListOfCodes in "Female"
define InWrongListOfCodes: WrongListOfCodes in "Female"
define ListOfCodesWithNull: { Code { code: 'M' }, (null as Code), Code { code: 'F', system: '2.16.840.1.113883.18.2' } } in "Female"
###

module.exports['InValueSet'] = {
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
      "valueSets" : {
         "def" : [ {
            "localId" : "2",
            "name" : "Female",
            "id" : "2.16.840.1.113883.3.560.100.2",
            "accessLevel" : "Public"
         }, {
            "localId" : "3",
            "name" : "Versioned Female",
            "id" : "2.16.840.1.113883.3.560.100.2",
            "version" : "20121025",
            "accessLevel" : "Public"
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
            "localId" : "7",
            "name" : "String",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "7",
                  "s" : [ {
                     "value" : [ "define ","String",": " ]
                  }, {
                     "r" : "6",
                     "s" : [ {
                        "r" : "4",
                        "s" : [ {
                           "value" : [ "'F'" ]
                        } ]
                     }, {
                        "value" : [ " in " ]
                     }, {
                        "r" : "5",
                        "s" : [ {
                           "value" : [ "\"Female\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "6",
               "type" : "InValueSet",
               "code" : {
                  "localId" : "4",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "F",
                  "type" : "Literal"
               },
               "valueset" : {
                  "localId" : "5",
                  "name" : "Female"
               }
            }
         }, {
            "localId" : "11",
            "name" : "StringInVersionedValueSet",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "11",
                  "s" : [ {
                     "value" : [ "define ","StringInVersionedValueSet",": " ]
                  }, {
                     "r" : "10",
                     "s" : [ {
                        "r" : "8",
                        "s" : [ {
                           "value" : [ "'F'" ]
                        } ]
                     }, {
                        "value" : [ " in " ]
                     }, {
                        "r" : "9",
                        "s" : [ {
                           "value" : [ "\"Versioned Female\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "10",
               "type" : "InValueSet",
               "code" : {
                  "localId" : "8",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "F",
                  "type" : "Literal"
               },
               "valueset" : {
                  "localId" : "9",
                  "name" : "Versioned Female"
               }
            }
         }, {
            "localId" : "16",
            "name" : "ShortCode",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "16",
                  "s" : [ {
                     "value" : [ "define ","ShortCode",": " ]
                  }, {
                     "r" : "15",
                     "s" : [ {
                        "r" : "13",
                        "s" : [ {
                           "value" : [ "Code"," { " ]
                        }, {
                           "s" : [ {
                              "value" : [ "code",": " ]
                           }, {
                              "r" : "12",
                              "s" : [ {
                                 "value" : [ "'F'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ " }" ]
                        } ]
                     }, {
                        "value" : [ " in " ]
                     }, {
                        "r" : "14",
                        "s" : [ {
                           "value" : [ "\"Female\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "15",
               "type" : "InValueSet",
               "code" : {
                  "localId" : "13",
                  "classType" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "Instance",
                  "element" : [ {
                     "name" : "code",
                     "value" : {
                        "localId" : "12",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "F",
                        "type" : "Literal"
                     }
                  } ]
               },
               "valueset" : {
                  "localId" : "14",
                  "name" : "Female"
               }
            }
         }, {
            "localId" : "22",
            "name" : "MediumCode",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "22",
                  "s" : [ {
                     "value" : [ "define ","MediumCode",": " ]
                  }, {
                     "r" : "21",
                     "s" : [ {
                        "r" : "19",
                        "s" : [ {
                           "value" : [ "Code"," { " ]
                        }, {
                           "s" : [ {
                              "value" : [ "code",": " ]
                           }, {
                              "r" : "17",
                              "s" : [ {
                                 "value" : [ "'F'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "value" : [ "system",": " ]
                           }, {
                              "r" : "18",
                              "s" : [ {
                                 "value" : [ "'2.16.840.1.113883.18.2'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ " }" ]
                        } ]
                     }, {
                        "value" : [ " in " ]
                     }, {
                        "r" : "20",
                        "s" : [ {
                           "value" : [ "\"Female\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "21",
               "type" : "InValueSet",
               "code" : {
                  "localId" : "19",
                  "classType" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "Instance",
                  "element" : [ {
                     "name" : "code",
                     "value" : {
                        "localId" : "17",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "F",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "system",
                     "value" : {
                        "localId" : "18",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "2.16.840.1.113883.18.2",
                        "type" : "Literal"
                     }
                  } ]
               },
               "valueset" : {
                  "localId" : "20",
                  "name" : "Female"
               }
            }
         }, {
            "localId" : "29",
            "name" : "LongCode",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "29",
                  "s" : [ {
                     "value" : [ "define ","LongCode",": " ]
                  }, {
                     "r" : "28",
                     "s" : [ {
                        "r" : "26",
                        "s" : [ {
                           "value" : [ "Code"," { " ]
                        }, {
                           "s" : [ {
                              "value" : [ "code",": " ]
                           }, {
                              "r" : "23",
                              "s" : [ {
                                 "value" : [ "'F'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "value" : [ "system",": " ]
                           }, {
                              "r" : "24",
                              "s" : [ {
                                 "value" : [ "'2.16.840.1.113883.18.2'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "value" : [ "version",": " ]
                           }, {
                              "r" : "25",
                              "s" : [ {
                                 "value" : [ "'HL7V2.5'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ " }" ]
                        } ]
                     }, {
                        "value" : [ " in " ]
                     }, {
                        "r" : "27",
                        "s" : [ {
                           "value" : [ "\"Female\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "28",
               "type" : "InValueSet",
               "code" : {
                  "localId" : "26",
                  "classType" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "Instance",
                  "element" : [ {
                     "name" : "code",
                     "value" : {
                        "localId" : "23",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "F",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "system",
                     "value" : {
                        "localId" : "24",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "2.16.840.1.113883.18.2",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "version",
                     "value" : {
                        "localId" : "25",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "HL7V2.5",
                        "type" : "Literal"
                     }
                  } ]
               },
               "valueset" : {
                  "localId" : "27",
                  "name" : "Female"
               }
            }
         }, {
            "localId" : "33",
            "name" : "WrongString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "33",
                  "s" : [ {
                     "value" : [ "define ","WrongString",": " ]
                  }, {
                     "r" : "32",
                     "s" : [ {
                        "r" : "30",
                        "s" : [ {
                           "value" : [ "'M'" ]
                        } ]
                     }, {
                        "value" : [ " in " ]
                     }, {
                        "r" : "31",
                        "s" : [ {
                           "value" : [ "\"Female\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "32",
               "type" : "InValueSet",
               "code" : {
                  "localId" : "30",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "M",
                  "type" : "Literal"
               },
               "valueset" : {
                  "localId" : "31",
                  "name" : "Female"
               }
            }
         }, {
            "localId" : "37",
            "name" : "WrongStringInVersionedValueSet",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "37",
                  "s" : [ {
                     "value" : [ "define ","WrongStringInVersionedValueSet",": " ]
                  }, {
                     "r" : "36",
                     "s" : [ {
                        "r" : "34",
                        "s" : [ {
                           "value" : [ "'M'" ]
                        } ]
                     }, {
                        "value" : [ " in " ]
                     }, {
                        "r" : "35",
                        "s" : [ {
                           "value" : [ "\"Versioned Female\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "36",
               "type" : "InValueSet",
               "code" : {
                  "localId" : "34",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "M",
                  "type" : "Literal"
               },
               "valueset" : {
                  "localId" : "35",
                  "name" : "Versioned Female"
               }
            }
         }, {
            "localId" : "42",
            "name" : "WrongShortCode",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "42",
                  "s" : [ {
                     "value" : [ "define ","WrongShortCode",": " ]
                  }, {
                     "r" : "41",
                     "s" : [ {
                        "r" : "39",
                        "s" : [ {
                           "value" : [ "Code"," { " ]
                        }, {
                           "s" : [ {
                              "value" : [ "code",": " ]
                           }, {
                              "r" : "38",
                              "s" : [ {
                                 "value" : [ "'M'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ " }" ]
                        } ]
                     }, {
                        "value" : [ " in " ]
                     }, {
                        "r" : "40",
                        "s" : [ {
                           "value" : [ "\"Female\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "41",
               "type" : "InValueSet",
               "code" : {
                  "localId" : "39",
                  "classType" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "Instance",
                  "element" : [ {
                     "name" : "code",
                     "value" : {
                        "localId" : "38",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "M",
                        "type" : "Literal"
                     }
                  } ]
               },
               "valueset" : {
                  "localId" : "40",
                  "name" : "Female"
               }
            }
         }, {
            "localId" : "48",
            "name" : "WrongMediumCode",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "48",
                  "s" : [ {
                     "value" : [ "define ","WrongMediumCode",": " ]
                  }, {
                     "r" : "47",
                     "s" : [ {
                        "r" : "45",
                        "s" : [ {
                           "value" : [ "Code"," { " ]
                        }, {
                           "s" : [ {
                              "value" : [ "code",": " ]
                           }, {
                              "r" : "43",
                              "s" : [ {
                                 "value" : [ "'F'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "value" : [ "system",": " ]
                           }, {
                              "r" : "44",
                              "s" : [ {
                                 "value" : [ "'3.16.840.1.113883.18.2'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ " }" ]
                        } ]
                     }, {
                        "value" : [ " in " ]
                     }, {
                        "r" : "46",
                        "s" : [ {
                           "value" : [ "\"Female\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "47",
               "type" : "InValueSet",
               "code" : {
                  "localId" : "45",
                  "classType" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "Instance",
                  "element" : [ {
                     "name" : "code",
                     "value" : {
                        "localId" : "43",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "F",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "system",
                     "value" : {
                        "localId" : "44",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "3.16.840.1.113883.18.2",
                        "type" : "Literal"
                     }
                  } ]
               },
               "valueset" : {
                  "localId" : "46",
                  "name" : "Female"
               }
            }
         }, {
            "localId" : "55",
            "name" : "LongCodeDifferentVersion",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "55",
                  "s" : [ {
                     "value" : [ "define ","LongCodeDifferentVersion",": " ]
                  }, {
                     "r" : "54",
                     "s" : [ {
                        "r" : "52",
                        "s" : [ {
                           "value" : [ "Code"," { " ]
                        }, {
                           "s" : [ {
                              "value" : [ "code",": " ]
                           }, {
                              "r" : "49",
                              "s" : [ {
                                 "value" : [ "'F'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "value" : [ "system",": " ]
                           }, {
                              "r" : "50",
                              "s" : [ {
                                 "value" : [ "'2.16.840.1.113883.18.2'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "value" : [ "version",": " ]
                           }, {
                              "r" : "51",
                              "s" : [ {
                                 "value" : [ "'HL7V2.6'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ " }" ]
                        } ]
                     }, {
                        "value" : [ " in " ]
                     }, {
                        "r" : "53",
                        "s" : [ {
                           "value" : [ "\"Female\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "54",
               "type" : "InValueSet",
               "code" : {
                  "localId" : "52",
                  "classType" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "Instance",
                  "element" : [ {
                     "name" : "code",
                     "value" : {
                        "localId" : "49",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "F",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "system",
                     "value" : {
                        "localId" : "50",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "2.16.840.1.113883.18.2",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "version",
                     "value" : {
                        "localId" : "51",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "HL7V2.6",
                        "type" : "Literal"
                     }
                  } ]
               },
               "valueset" : {
                  "localId" : "53",
                  "name" : "Female"
               }
            }
         }, {
            "localId" : "62",
            "name" : "NullCode",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "62",
                  "s" : [ {
                     "value" : [ "define ","NullCode",": " ]
                  }, {
                     "r" : "61",
                     "s" : [ {
                        "r" : "59",
                        "s" : [ {
                           "value" : [ "Code"," { " ]
                        }, {
                           "s" : [ {
                              "value" : [ "code",": ","null" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "value" : [ "system",": " ]
                           }, {
                              "r" : "57",
                              "s" : [ {
                                 "value" : [ "'2.16.840.1.113883.18.2'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "value" : [ "version",": " ]
                           }, {
                              "r" : "58",
                              "s" : [ {
                                 "value" : [ "'HL7V2.6'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ " }" ]
                        } ]
                     }, {
                        "value" : [ " in " ]
                     }, {
                        "r" : "60",
                        "s" : [ {
                           "value" : [ "\"Female\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "61",
               "type" : "InValueSet",
               "code" : {
                  "localId" : "59",
                  "classType" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "Instance",
                  "element" : [ {
                     "name" : "code",
                     "value" : {
                        "asType" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "As",
                        "operand" : {
                           "localId" : "56",
                           "type" : "Null"
                        }
                     }
                  }, {
                     "name" : "system",
                     "value" : {
                        "localId" : "57",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "2.16.840.1.113883.18.2",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "version",
                     "value" : {
                        "localId" : "58",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "HL7V2.6",
                        "type" : "Literal"
                     }
                  } ]
               },
               "valueset" : {
                  "localId" : "60",
                  "name" : "Female"
               }
            }
         }, {
            "localId" : "72",
            "name" : "InListOfCodes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "72",
                  "s" : [ {
                     "value" : [ "define ","InListOfCodes",": " ]
                  }, {
                     "r" : "71",
                     "s" : [ {
                        "r" : "69",
                        "s" : [ {
                           "value" : [ "{ " ]
                        }, {
                           "r" : "64",
                           "s" : [ {
                              "value" : [ "Code"," { " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "code",": " ]
                              }, {
                                 "r" : "63",
                                 "s" : [ {
                                    "value" : [ "'M'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " }" ]
                           } ]
                        }, {
                           "value" : [ " , " ]
                        }, {
                           "r" : "68",
                           "s" : [ {
                              "value" : [ "Code"," { " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "code",": " ]
                              }, {
                                 "r" : "65",
                                 "s" : [ {
                                    "value" : [ "'F'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "system",": " ]
                              }, {
                                 "r" : "66",
                                 "s" : [ {
                                    "value" : [ "'2.16.840.1.113883.18.2'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "version",": " ]
                              }, {
                                 "r" : "67",
                                 "s" : [ {
                                    "value" : [ "'HL7V2.5'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " }" ]
                           } ]
                        }, {
                           "value" : [ " }" ]
                        } ]
                     }, {
                        "value" : [ " in " ]
                     }, {
                        "r" : "70",
                        "s" : [ {
                           "value" : [ "\"Female\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "71",
               "type" : "AnyInValueSet",
               "codes" : {
                  "localId" : "69",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "64",
                     "classType" : "{urn:hl7-org:elm-types:r1}Code",
                     "type" : "Instance",
                     "element" : [ {
                        "name" : "code",
                        "value" : {
                           "localId" : "63",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "M",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "68",
                     "classType" : "{urn:hl7-org:elm-types:r1}Code",
                     "type" : "Instance",
                     "element" : [ {
                        "name" : "code",
                        "value" : {
                           "localId" : "65",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "F",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "system",
                        "value" : {
                           "localId" : "66",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "2.16.840.1.113883.18.2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "version",
                        "value" : {
                           "localId" : "67",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "HL7V2.5",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "valueset" : {
                  "localId" : "70",
                  "name" : "Female"
               }
            }
         }, {
            "localId" : "80",
            "name" : "ListOfCodes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "80",
                  "s" : [ {
                     "value" : [ "define ","ListOfCodes",": " ]
                  }, {
                     "r" : "79",
                     "s" : [ {
                        "value" : [ "{ " ]
                     }, {
                        "r" : "74",
                        "s" : [ {
                           "value" : [ "Code"," { " ]
                        }, {
                           "s" : [ {
                              "value" : [ "code",": " ]
                           }, {
                              "r" : "73",
                              "s" : [ {
                                 "value" : [ "'M'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ " }" ]
                        } ]
                     }, {
                        "value" : [ " , " ]
                     }, {
                        "r" : "78",
                        "s" : [ {
                           "value" : [ "Code"," { " ]
                        }, {
                           "s" : [ {
                              "value" : [ "code",": " ]
                           }, {
                              "r" : "75",
                              "s" : [ {
                                 "value" : [ "'F'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "value" : [ "system",": " ]
                           }, {
                              "r" : "76",
                              "s" : [ {
                                 "value" : [ "'2.16.840.1.113883.18.2'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "value" : [ "version",": " ]
                           }, {
                              "r" : "77",
                              "s" : [ {
                                 "value" : [ "'HL7V2.5'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ " }" ]
                        } ]
                     }, {
                        "value" : [ " }" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "79",
               "type" : "List",
               "element" : [ {
                  "localId" : "74",
                  "classType" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "Instance",
                  "element" : [ {
                     "name" : "code",
                     "value" : {
                        "localId" : "73",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "M",
                        "type" : "Literal"
                     }
                  } ]
               }, {
                  "localId" : "78",
                  "classType" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "Instance",
                  "element" : [ {
                     "name" : "code",
                     "value" : {
                        "localId" : "75",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "F",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "system",
                     "value" : {
                        "localId" : "76",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "2.16.840.1.113883.18.2",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "version",
                     "value" : {
                        "localId" : "77",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "HL7V2.5",
                        "type" : "Literal"
                     }
                  } ]
               } ]
            }
         }, {
            "localId" : "87",
            "name" : "WrongListOfCodes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "87",
                  "s" : [ {
                     "value" : [ "define ","WrongListOfCodes",": " ]
                  }, {
                     "r" : "86",
                     "s" : [ {
                        "value" : [ "{ " ]
                     }, {
                        "r" : "82",
                        "s" : [ {
                           "value" : [ "Code"," { " ]
                        }, {
                           "s" : [ {
                              "value" : [ "code",": " ]
                           }, {
                              "r" : "81",
                              "s" : [ {
                                 "value" : [ "'M'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ " }" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "85",
                        "s" : [ {
                           "value" : [ "Code"," { " ]
                        }, {
                           "s" : [ {
                              "value" : [ "code",": " ]
                           }, {
                              "r" : "83",
                              "s" : [ {
                                 "value" : [ "'F'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "value" : [ "system",": " ]
                           }, {
                              "r" : "84",
                              "s" : [ {
                                 "value" : [ "'3.16.840.1.113883.18.2'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ " }" ]
                        } ]
                     }, {
                        "value" : [ " }" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "86",
               "type" : "List",
               "element" : [ {
                  "localId" : "82",
                  "classType" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "Instance",
                  "element" : [ {
                     "name" : "code",
                     "value" : {
                        "localId" : "81",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "M",
                        "type" : "Literal"
                     }
                  } ]
               }, {
                  "localId" : "85",
                  "classType" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "Instance",
                  "element" : [ {
                     "name" : "code",
                     "value" : {
                        "localId" : "83",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "F",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "system",
                     "value" : {
                        "localId" : "84",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "3.16.840.1.113883.18.2",
                        "type" : "Literal"
                     }
                  } ]
               } ]
            }
         }, {
            "localId" : "91",
            "name" : "InListOfCodesExpressionRef",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "91",
                  "s" : [ {
                     "value" : [ "define ","InListOfCodesExpressionRef",": " ]
                  }, {
                     "r" : "90",
                     "s" : [ {
                        "r" : "88",
                        "s" : [ {
                           "value" : [ "ListOfCodes" ]
                        } ]
                     }, {
                        "value" : [ " in " ]
                     }, {
                        "r" : "89",
                        "s" : [ {
                           "value" : [ "\"Female\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "90",
               "type" : "AnyInValueSet",
               "codes" : {
                  "localId" : "88",
                  "name" : "ListOfCodes",
                  "type" : "ExpressionRef"
               },
               "valueset" : {
                  "localId" : "89",
                  "name" : "Female"
               }
            }
         }, {
            "localId" : "95",
            "name" : "InWrongListOfCodes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "95",
                  "s" : [ {
                     "value" : [ "define ","InWrongListOfCodes",": " ]
                  }, {
                     "r" : "94",
                     "s" : [ {
                        "r" : "92",
                        "s" : [ {
                           "value" : [ "WrongListOfCodes" ]
                        } ]
                     }, {
                        "value" : [ " in " ]
                     }, {
                        "r" : "93",
                        "s" : [ {
                           "value" : [ "\"Female\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "94",
               "type" : "AnyInValueSet",
               "codes" : {
                  "localId" : "92",
                  "name" : "WrongListOfCodes",
                  "type" : "ExpressionRef"
               },
               "valueset" : {
                  "localId" : "93",
                  "name" : "Female"
               }
            }
         }, {
            "localId" : "107",
            "name" : "ListOfCodesWithNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "107",
                  "s" : [ {
                     "value" : [ "define ","ListOfCodesWithNull",": " ]
                  }, {
                     "r" : "106",
                     "s" : [ {
                        "r" : "104",
                        "s" : [ {
                           "value" : [ "{ " ]
                        }, {
                           "r" : "97",
                           "s" : [ {
                              "value" : [ "Code"," { " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "code",": " ]
                              }, {
                                 "r" : "96",
                                 "s" : [ {
                                    "value" : [ "'M'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " }" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "100",
                           "s" : [ {
                              "value" : [ "(" ]
                           }, {
                              "r" : "100",
                              "s" : [ {
                                 "r" : "98",
                                 "value" : [ "null"," as " ]
                              }, {
                                 "r" : "99",
                                 "s" : [ {
                                    "value" : [ "Code" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ ")" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "103",
                           "s" : [ {
                              "value" : [ "Code"," { " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "code",": " ]
                              }, {
                                 "r" : "101",
                                 "s" : [ {
                                    "value" : [ "'F'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "system",": " ]
                              }, {
                                 "r" : "102",
                                 "s" : [ {
                                    "value" : [ "'2.16.840.1.113883.18.2'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " }" ]
                           } ]
                        }, {
                           "value" : [ " }" ]
                        } ]
                     }, {
                        "value" : [ " in " ]
                     }, {
                        "r" : "105",
                        "s" : [ {
                           "value" : [ "\"Female\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "106",
               "type" : "AnyInValueSet",
               "codes" : {
                  "localId" : "104",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "97",
                     "classType" : "{urn:hl7-org:elm-types:r1}Code",
                     "type" : "Instance",
                     "element" : [ {
                        "name" : "code",
                        "value" : {
                           "localId" : "96",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "M",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "100",
                     "strict" : false,
                     "type" : "As",
                     "operand" : {
                        "localId" : "98",
                        "type" : "Null"
                     },
                     "asTypeSpecifier" : {
                        "localId" : "99",
                        "name" : "{urn:hl7-org:elm-types:r1}Code",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "103",
                     "classType" : "{urn:hl7-org:elm-types:r1}Code",
                     "type" : "Instance",
                     "element" : [ {
                        "name" : "code",
                        "value" : {
                           "localId" : "101",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "F",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "system",
                        "value" : {
                           "localId" : "102",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "2.16.840.1.113883.18.2",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "valueset" : {
                  "localId" : "105",
                  "name" : "Female"
               }
            }
         } ]
      }
   }
}

### Patient Property In ValueSet
library TestSnippet version '1'
using QUICK
valueset "Female": '2.16.840.1.113883.3.560.100.2'
context Patient
define IsFemale: Patient.gender in "Female"
###

module.exports['Patient Property In ValueSet'] = {
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
      "valueSets" : {
         "def" : [ {
            "localId" : "2",
            "name" : "Female",
            "id" : "2.16.840.1.113883.3.560.100.2",
            "accessLevel" : "Public"
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
            "localId" : "7",
            "name" : "IsFemale",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "7",
                  "s" : [ {
                     "value" : [ "define ","IsFemale",": " ]
                  }, {
                     "r" : "6",
                     "s" : [ {
                        "r" : "4",
                        "s" : [ {
                           "r" : "3",
                           "s" : [ {
                              "value" : [ "Patient" ]
                           } ]
                        }, {
                           "value" : [ "." ]
                        }, {
                           "r" : "4",
                           "s" : [ {
                              "value" : [ "gender" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " in " ]
                     }, {
                        "r" : "5",
                        "s" : [ {
                           "value" : [ "\"Female\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "6",
               "type" : "InValueSet",
               "code" : {
                  "localId" : "4",
                  "path" : "gender",
                  "type" : "Property",
                  "source" : {
                     "localId" : "3",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               },
               "valueset" : {
                  "localId" : "5",
                  "name" : "Female"
               }
            }
         } ]
      }
   }
}

### CodeDef
library TestSnippet version '1'
using QUICK
codesystem "LOINC": 'http://loinc.org'
code "Tobacco smoking status code": '72166-2' from "LOINC" display 'Tobacco smoking status'
context Patient
define Foo: 'Bar'
###

module.exports['CodeDef'] = {
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
      "codeSystems" : {
         "def" : [ {
            "localId" : "2",
            "name" : "LOINC",
            "id" : "http://loinc.org",
            "accessLevel" : "Public"
         } ]
      },
      "codes" : {
         "def" : [ {
            "localId" : "4",
            "name" : "Tobacco smoking status code",
            "id" : "72166-2",
            "display" : "Tobacco smoking status",
            "accessLevel" : "Public",
            "codeSystem" : {
               "localId" : "3",
               "name" : "LOINC"
            }
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
            "name" : "Foo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "6",
                  "s" : [ {
                     "value" : [ "define ","Foo",": " ]
                  }, {
                     "r" : "5",
                     "s" : [ {
                        "value" : [ "'Bar'" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "5",
               "valueType" : "{urn:hl7-org:elm-types:r1}String",
               "value" : "Bar",
               "type" : "Literal"
            }
         } ]
      }
   }
}

### CodeRef
library TestSnippet version '1'
using QUICK
codesystem "LOINC": 'http://loinc.org'
code "Tobacco smoking status code": '72166-2' from "LOINC" display 'Tobacco smoking status'
context Patient
define Foo: "Tobacco smoking status code"
###

module.exports['CodeRef'] = {
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
      "codeSystems" : {
         "def" : [ {
            "localId" : "2",
            "name" : "LOINC",
            "id" : "http://loinc.org",
            "accessLevel" : "Public"
         } ]
      },
      "codes" : {
         "def" : [ {
            "localId" : "4",
            "name" : "Tobacco smoking status code",
            "id" : "72166-2",
            "display" : "Tobacco smoking status",
            "accessLevel" : "Public",
            "codeSystem" : {
               "localId" : "3",
               "name" : "LOINC"
            }
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
            "name" : "Foo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "6",
                  "s" : [ {
                     "value" : [ "define ","Foo",": " ]
                  }, {
                     "r" : "5",
                     "s" : [ {
                        "value" : [ "\"Tobacco smoking status code\"" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "5",
               "name" : "Tobacco smoking status code",
               "type" : "CodeRef"
            }
         } ]
      }
   }
}

### ConceptDef
library TestSnippet version '1'
using QUICK
codesystem "LOINC": 'http://loinc.org'
code "Tobacco smoking status code": '72166-2' from "LOINC" display 'Tobacco smoking status'
concept "Tobacco smoking status": { "Tobacco smoking status code" } display 'Tobacco smoking status'
context Patient
define Foo: 'Bar'
###

module.exports['ConceptDef'] = {
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
      "codeSystems" : {
         "def" : [ {
            "localId" : "2",
            "name" : "LOINC",
            "id" : "http://loinc.org",
            "accessLevel" : "Public"
         } ]
      },
      "codes" : {
         "def" : [ {
            "localId" : "4",
            "name" : "Tobacco smoking status code",
            "id" : "72166-2",
            "display" : "Tobacco smoking status",
            "accessLevel" : "Public",
            "codeSystem" : {
               "localId" : "3",
               "name" : "LOINC"
            }
         } ]
      },
      "concepts" : {
         "def" : [ {
            "localId" : "6",
            "name" : "Tobacco smoking status",
            "display" : "Tobacco smoking status",
            "accessLevel" : "Public",
            "code" : [ {
               "localId" : "5",
               "name" : "Tobacco smoking status code"
            } ]
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
            "localId" : "8",
            "name" : "Foo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "8",
                  "s" : [ {
                     "value" : [ "define ","Foo",": " ]
                  }, {
                     "r" : "7",
                     "s" : [ {
                        "value" : [ "'Bar'" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "7",
               "valueType" : "{urn:hl7-org:elm-types:r1}String",
               "value" : "Bar",
               "type" : "Literal"
            }
         } ]
      }
   }
}

### ConceptRef
library TestSnippet version '1'
using QUICK
codesystem "LOINC": 'http://loinc.org'
code "Tobacco smoking status code": '72166-2' from "LOINC" display 'Tobacco smoking status'
concept "Tobacco smoking status": { "Tobacco smoking status code" } display 'Tobacco smoking status'
context Patient
define Foo: "Tobacco smoking status"
###

module.exports['ConceptRef'] = {
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
      "codeSystems" : {
         "def" : [ {
            "localId" : "2",
            "name" : "LOINC",
            "id" : "http://loinc.org",
            "accessLevel" : "Public"
         } ]
      },
      "codes" : {
         "def" : [ {
            "localId" : "4",
            "name" : "Tobacco smoking status code",
            "id" : "72166-2",
            "display" : "Tobacco smoking status",
            "accessLevel" : "Public",
            "codeSystem" : {
               "localId" : "3",
               "name" : "LOINC"
            }
         } ]
      },
      "concepts" : {
         "def" : [ {
            "localId" : "6",
            "name" : "Tobacco smoking status",
            "display" : "Tobacco smoking status",
            "accessLevel" : "Public",
            "code" : [ {
               "localId" : "5",
               "name" : "Tobacco smoking status code"
            } ]
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
            "localId" : "8",
            "name" : "Foo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "8",
                  "s" : [ {
                     "value" : [ "define ","Foo",": " ]
                  }, {
                     "r" : "7",
                     "s" : [ {
                        "value" : [ "\"Tobacco smoking status\"" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "7",
               "name" : "Tobacco smoking status",
               "type" : "ConceptRef"
            }
         } ]
      }
   }
}

### CalculateAge
library TestSnippet version '1'
using QUICK
context Patient
define Years: AgeInYears()
define Months: AgeInMonths()
// Commented out until cql-to-elm supports it
// define Weeks: AgeInWeeks()
define Days: AgeInDays()
define Hours: AgeInHours()
define Minutes: AgeInMinutes()
define Seconds: AgeInSeconds()
###

module.exports['CalculateAge'] = {
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
            "name" : "Years",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "3",
                  "s" : [ {
                     "value" : [ "define ","Years",": " ]
                  }, {
                     "r" : "2",
                     "s" : [ {
                        "value" : [ "AgeInYears","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "2",
               "precision" : "Year",
               "type" : "CalculateAge",
               "operand" : {
                  "type" : "ToDate",
                  "operand" : {
                     "path" : "birthDate",
                     "type" : "Property",
                     "source" : {
                        "name" : "Patient",
                        "type" : "ExpressionRef"
                     }
                  }
               }
            }
         }, {
            "localId" : "5",
            "name" : "Months",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "5",
                  "s" : [ {
                     "value" : [ "define ","Months",": " ]
                  }, {
                     "r" : "4",
                     "s" : [ {
                        "value" : [ "AgeInMonths","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "4",
               "precision" : "Month",
               "type" : "CalculateAge",
               "operand" : {
                  "type" : "ToDate",
                  "operand" : {
                     "path" : "birthDate",
                     "type" : "Property",
                     "source" : {
                        "name" : "Patient",
                        "type" : "ExpressionRef"
                     }
                  }
               }
            }
         }, {
            "localId" : "7",
            "name" : "Days",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "7",
                  "s" : [ {
                     "value" : [ "define ","Days",": " ]
                  }, {
                     "r" : "6",
                     "s" : [ {
                        "value" : [ "AgeInDays","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "6",
               "precision" : "Day",
               "type" : "CalculateAge",
               "operand" : {
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               }
            }
         }, {
            "localId" : "9",
            "name" : "Hours",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "9",
                  "s" : [ {
                     "value" : [ "define ","Hours",": " ]
                  }, {
                     "r" : "8",
                     "s" : [ {
                        "value" : [ "AgeInHours","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "8",
               "precision" : "Hour",
               "type" : "CalculateAge",
               "operand" : {
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               }
            }
         }, {
            "localId" : "11",
            "name" : "Minutes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "11",
                  "s" : [ {
                     "value" : [ "define ","Minutes",": " ]
                  }, {
                     "r" : "10",
                     "s" : [ {
                        "value" : [ "AgeInMinutes","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "10",
               "precision" : "Minute",
               "type" : "CalculateAge",
               "operand" : {
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               }
            }
         }, {
            "localId" : "13",
            "name" : "Seconds",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "13",
                  "s" : [ {
                     "value" : [ "define ","Seconds",": " ]
                  }, {
                     "r" : "12",
                     "s" : [ {
                        "value" : [ "AgeInSeconds","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "12",
               "precision" : "Second",
               "type" : "CalculateAge",
               "operand" : {
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               }
            }
         } ]
      }
   }
}

### CalculateAgeAt
library TestSnippet version '1'
using QUICK
context Patient
define AgeAt2012: AgeInYearsAt(DateTime(2012))
define AgeAt19810216: AgeInYearsAt(DateTime(1981, 2, 16))
define AgeAt1975: AgeInYearsAt(DateTime(1975))
###

module.exports['CalculateAgeAt'] = {
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
            "name" : "AgeAt2012",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "5",
                  "s" : [ {
                     "value" : [ "define ","AgeAt2012",": " ]
                  }, {
                     "r" : "4",
                     "s" : [ {
                        "value" : [ "AgeInYearsAt","(" ]
                     }, {
                        "r" : "3",
                        "s" : [ {
                           "value" : [ "DateTime","(","2012",")" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "4",
               "precision" : "Year",
               "type" : "CalculateAgeAt",
               "operand" : [ {
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               }, {
                  "localId" : "3",
                  "type" : "DateTime",
                  "year" : {
                     "localId" : "2",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2012",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "11",
            "name" : "AgeAt19810216",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "11",
                  "s" : [ {
                     "value" : [ "define ","AgeAt19810216",": " ]
                  }, {
                     "r" : "10",
                     "s" : [ {
                        "value" : [ "AgeInYearsAt","(" ]
                     }, {
                        "r" : "9",
                        "s" : [ {
                           "value" : [ "DateTime","(","1981",", ","2",", ","16",")" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "10",
               "precision" : "Year",
               "type" : "CalculateAgeAt",
               "operand" : [ {
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               }, {
                  "localId" : "9",
                  "type" : "DateTime",
                  "year" : {
                     "localId" : "6",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1981",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "7",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "8",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "16",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "15",
            "name" : "AgeAt1975",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "15",
                  "s" : [ {
                     "value" : [ "define ","AgeAt1975",": " ]
                  }, {
                     "r" : "14",
                     "s" : [ {
                        "value" : [ "AgeInYearsAt","(" ]
                     }, {
                        "r" : "13",
                        "s" : [ {
                           "value" : [ "DateTime","(","1975",")" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "14",
               "precision" : "Year",
               "type" : "CalculateAgeAt",
               "operand" : [ {
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               }, {
                  "localId" : "13",
                  "type" : "DateTime",
                  "year" : {
                     "localId" : "12",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1975",
                     "type" : "Literal"
                  }
               } ]
            }
         } ]
      }
   }
}

