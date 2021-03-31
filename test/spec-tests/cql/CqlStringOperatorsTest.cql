library CqlStringOperatorsTest version '1.4.0'
using QUICK version '3.3.0'
context Patient

define "Combine": Tuple{
  "CombineNull": Tuple{
    expression: Combine(null),
    output: null
  },
  "CombineEmptyList": Tuple{
    expression: Combine({}),
    output: null
  },
  "CombineABC": Tuple{
    expression: Combine({'a', 'b', 'c'}),
    output: 'abc'
  },
  "CombineABCSepDash": Tuple{
    expression: Combine({'a', 'b', 'c'}, '-'),
    output: 'a-b-c'
  }
}

define "Concatenate": Tuple{
  "ConcatenateNullNull": Tuple{
    expression: Concatenate(null, null),
    output: null
  },
  "ConcatenateANull": Tuple{
    expression: Concatenate('a', null),
    output: null
  },
  "ConcatenateNullB": Tuple{
    expression: Concatenate(null, 'b'),
    output: null
  },
  "ConcatenateAB": Tuple{
    expression: Concatenate('a', 'b'),
    output: 'ab'
  },
  "ConcatenateABWithAdd": Tuple{
    expression: 'a' + 'b',
    output: 'ab'
  }
}

define "EndsWith": Tuple{
  "EndsWithNull": Tuple{
    expression: EndsWith(null, null),
    output: null
  },
  "EndsWithTrue": Tuple{
    expression: EndsWith('Chris Schuler is the man!!', 'n!!'),
    output: true
  },
  "EndsWithFalse": Tuple{
    expression: EndsWith('Chris Schuler is the man!!', 'n!'),
    output: false
  }
}

define "Indexer": Tuple{
  "IndexerNullNull": Tuple{
    expression: Indexer(null as String, null),
    output: null
  },
  "IndexerANull": Tuple{
    expression: Indexer('a', null),
    output: null
  },
  "IndexerNull1String": Tuple{
    expression: Indexer(null as String, 1),
    output: null
  },
  "IndexerAB0": Tuple{
    expression: Indexer('ab', 0),
    output: 'a'
  },
  "IndexerAB1": Tuple{
    expression: Indexer('ab', 1),
    output: 'b'
  },
  "IndexerAB2": Tuple{
    expression: Indexer('ab', 2),
    output: null
  },
  "IndexerABNeg1": Tuple{
    expression: Indexer('ab', -1),
    output: null
  }
}

define "LastPositionOf": Tuple{
  "LastPositionOfNull": Tuple{
    expression: LastPositionOf(null, null),
    output: null
  },
  "LastPositionOfNull1": Tuple{
    expression: LastPositionOf(null, 'hi'),
    output: null
  },
  "LastPositionOfNull2": Tuple{
    expression: LastPositionOf('hi', null),
    output: null
  },
  "LastPositionOf1": Tuple{
    expression: LastPositionOf('hi', 'Ohio is the place to be!'),
    output: 1
  },
  "LastPositionOf2": Tuple{
    expression: LastPositionOf('hi', 'Say hi to Ohio!'),
    output: 11
  }
}

define "Length": Tuple{
  "LengthNullString": Tuple{
    expression: Length(null as String),
    output: null
  },
  "LengthEmptyString": Tuple{
    expression: Length(''),
    output: 0
  },
  "LengthA": Tuple{
    expression: Length('a'),
    output: 1
  },
  "LengthAB": Tuple{
    expression: Length('ab'),
    output: 2
  }
}

define "Lower": Tuple{
  "LowerNull": Tuple{
    expression: Lower(null),
    output: null
  },
  "LowerEmpty": Tuple{
    expression: Lower(''),
    output: ''
  },
  "LowerA": Tuple{
    expression: Lower('A'),
    output: 'a'
  },
  "LowerB": Tuple{
    expression: Lower('b'),
    output: 'b'
  },
  "LowerAB": Tuple{
    expression: Lower('Ab'),
    output: 'ab'
  }
}

define "Matches": Tuple{
  "MatchesNull": Tuple{
    expression: Matches('Not all who wander are lost', null),
    output: null
  },
  "MatchesNumberFalse": Tuple{
    expression: Matches('Not all who wander are lost', '.*\\d+'),
    output: false
  },
  "MatchesNumberTrue": Tuple{
    expression: Matches('Not all who wander are lost - circa 2017', '.*\\d+'),
    output: true
  },
  "MatchesAllTrue": Tuple{
    expression: Matches('Not all who wander are lost', '.*'),
    output: true
  },
  "MatchesWordsAndSpacesTrue": Tuple{
    expression: Matches('Not all who wander are lost', '[\\w|\\s]+'),
    output: true
  },
  "MatchesWordsAndSpacesFalse": Tuple{
    expression: Matches('Not all who wander are lost - circa 2017', '[\\w]+'),
    output: false
  },
  "MatchesNotWords": Tuple{
    expression: Matches('   ', '\\W+'),
    output: true
  },
  "MatchesWhiteSpace": Tuple{
    expression: Matches(' \n\t', '\\s+'),
    output: true
  }
}

define "PositionOf": Tuple{
  "PositionOfNullNull": Tuple{
    expression: PositionOf(null, null),
    output: null
  },
  "PositionOfANull": Tuple{
    expression: PositionOf('a', null),
    output: null
  },
  "PositionOfNullA": Tuple{
    expression: PositionOf(null, 'a'),
    output: null
  },
  "PositionOfAInAB": Tuple{
    expression: PositionOf('a', 'ab'),
    output: 0
  },
  "PositionOfBInAB": Tuple{
    expression: PositionOf('b', 'ab'),
    output: 1
  },
  "PositionOfCInAB": Tuple{
    expression: PositionOf('c', 'ab'),
    output: -1
  }
}

define "ReplaceMatches": Tuple{
  "ReplaceMatchesNull": Tuple{
    expression: ReplaceMatches('Not all who wander are lost', null, 'But I am...'),
    output: null
  },
  "ReplaceMatchesAll": Tuple{
    expression: ReplaceMatches('Not all who wander are lost', 'Not all who wander are lost', 'But still waters run deep'),
    output: 'But still waters run deep'
  },
  "ReplaceMatchesMany": Tuple{
    expression: ReplaceMatches('Who put the bop in the bop she bop she bop?', 'bop', 'bang'),
    output: 'Who put the bang in the bang she bang she bang?'
  },
  "ReplaceMatchesSpaces": Tuple{
    expression: ReplaceMatches('All that glitters is not gold', '\\s', '$$'),
    output: 'All$that$glitters$is$not$gold'
  }
}

define "Split": Tuple{
  "SplitNullNull": Tuple{
    expression: Split(null, null),
    output: null
  },
  "SplitNullComma": Tuple{
    expression: Split(null, ','),
    output: null
  },
  "SplitABNull": Tuple{
    expression: Split('a,b', null),
    output: {'a,b'}
  },
  "SplitABDash": Tuple{
    expression: Split('a,b', '-'),
    output: {'a,b'}
  },
  "SplitABComma": Tuple{
    expression: Split('a,b', ','),
    output: {'a','b'}
  }
}

define "StartsWith": Tuple{
  "StartsWithNull": Tuple{
    expression: StartsWith(null, null),
    output: null
  },
  "StartsWithNull1": Tuple{
    expression: StartsWith('hi', null),
    output: null
  },
  "StartsWithNull2": Tuple{
    expression: StartsWith(null, 'hi'),
    output: null
  },
  "StartsWithTrue1": Tuple{
    expression: StartsWith('Breathe deep the gathering gloom', 'Bre'),
    output: true
  },
  "StartsWithFalse1": Tuple{
    expression: StartsWith('Breathe deep the gathering gloom', 'bre'),
    output: false
  }
}

define "Substring": Tuple{
  "SubstringNullNull": Tuple{
    expression: Substring(null, null),
    output: null
  },
  "SubstringANull": Tuple{
    expression: Substring('a', null),
    output: null
  },
  "SubstringNull1": Tuple{
    expression: Substring(null, 1),
    output: null
  },
  "SubstringAB0": Tuple{
    expression: Substring('ab', 0),
    output: 'ab'
  },
  "SubstringAB1": Tuple{
    expression: Substring('ab', 1),
    output: 'b'
  },
  "SubstringAB2": Tuple{
    expression: Substring('ab', 2),
    output: null
  },
  "SubstringABNeg1": Tuple{
    expression: Substring('ab', -1),
    output: null
  },
  "SubstringAB0To1": Tuple{
    expression: Substring('ab', 0, 1),
    output: 'a'
  },
  "SubstringABC1To1": Tuple{
    expression: Substring('abc', 1, 1),
    output: 'b'
  },
  "SubstringAB0To3": Tuple{
    expression: Substring('ab', 0, 3),
    output: 'ab'
  }
}

define "Upper": Tuple{
  "UpperNull": Tuple{
    expression: Upper(null),
    output: null
  },
  "UpperEmpty": Tuple{
    expression: Upper(''),
    output: ''
  },
  "UpperA": Tuple{
    expression: Upper('a'),
    output: 'A'
  },
  "UpperB": Tuple{
    expression: Upper('B'),
    output: 'B'
  },
  "UpperAB": Tuple{
    expression: Upper('aB'),
    output: 'AB'
  }
}

define "toString tests": Tuple{
  "QuantityToString": Tuple{
    expression: ToString(125 'cm'),
    output: '125 \'cm\''
  },
  "DateTimeToString1": Tuple{
    expression: ToString(DateTime(2000, 1, 1)),
    output: '2000-01-01'
  },
  "DateTimeToString2": Tuple{
    skipped: 'Answer does not include timezone offset, but default offset depends on test environment'
    /*
    expression: ToString(DateTime(2000, 1, 1, 15, 25, 25, 300)),
    output: '2000-01-01T15:25:25.300'
    */  },
  "DateTimeToString3": Tuple{
    expression: ToString(DateTime(2000, 1, 1, 8, 25, 25, 300, -7)),
    output: '2000-01-01T08:25:25.300-07:00'
  },
  "TimeToString1": Tuple{
    expression: ToString(@T09:30:01.003),
    output: '09:30:01.003'
  }
}
