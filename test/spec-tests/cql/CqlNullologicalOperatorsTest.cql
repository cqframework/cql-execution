library CqlNullologicalOperatorsTest version '1.4.0'
using QUICK version '3.3.0'
context Patient

define "Coalesce": Tuple{
  "CoalesceANull": Tuple{
    expression: Coalesce('a', null),
    output: 'a'
  },
  "CoalesceNullA": Tuple{
    expression: Coalesce(null, 'a'),
    output: 'a'
  },
  "CoalesceEmptyList": Tuple{
    expression: Coalesce({}),
    output: null
  },
  "CoalesceListFirstA": Tuple{
    expression: Coalesce({'a', null, null}),
    output: 'a'
  },
  "CoalesceListLastA": Tuple{
    expression: Coalesce({null, null, 'a'}),
    output: 'a'
  },
  "CoalesceFirstList": Tuple{
    expression: Coalesce({'a'},null, null),
    output: {'a'}
  },
  "CoalesceLastList": Tuple{
    expression: Coalesce(null, null, {'a'}),
    output: {'a'}
  },
  "DateTimeCoalesce": Tuple{
    expression: Coalesce(null, null, DateTime(2012, 5, 18)),
    output: DateTime(2012, 5, 18)
  },
  "DateTimeListCoalesce": Tuple{
    expression: Coalesce({ null, null, DateTime(2012, 5, 18) }),
    output: DateTime(2012, 5, 18)
  },
  "TimeCoalesce": Tuple{
    expression: Coalesce(null, null, @T05:15:33.556),
    output: @T05:15:33.556
  },
  "TimeListCoalesce": Tuple{
    expression: Coalesce({ null, null, @T05:15:33.556 }),
    output: @T05:15:33.556
  }
}

define "IsNull": Tuple{
  "IsNullTrue": Tuple{
    expression: IsNull(null),
    output: true
  },
  "IsNullFalseEmptyString": Tuple{
    expression: IsNull(''),
    output: false
  },
  "IsNullAlsoFalseAbcString": Tuple{
    expression: IsNull('abc'),
    output: false
  },
  "IsNullAlsoFalseNumber1": Tuple{
    expression: IsNull(1),
    output: false
  },
  "IsNullAlsoFalseNumberZero": Tuple{
    expression: IsNull(0),
    output: false
  }
}

define "IsFalse": Tuple{
  "IsFalseFalse": Tuple{
    expression: IsFalse(false),
    output: true
  },
  "IsFalseTrue": Tuple{
    expression: IsFalse(true),
    output: false
  },
  "IsFalseNull": Tuple{
    expression: IsFalse(null),
    output: false
  }
}

define "IsTrue": Tuple{
  "IsTrueTrue": Tuple{
    expression: IsTrue(true),
    output: true
  },
  "IsTrueFalse": Tuple{
    expression: IsTrue(false),
    output: false
  },
  "IsTrueNull": Tuple{
    expression: IsTrue(null),
    output: false
  }
}
