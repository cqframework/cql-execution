library CqlQueryTest version '1.4.0'
using QUICK version '3.3.0'
context Patient

define "SimpleQueries": Tuple{
  "NonListSource": Tuple{
    expression: (4) l,
    output: 4
  },
  "NonListSourceWithReturn": Tuple{
    expression: (4) l return 'Hello World',
    output: 'Hello World'
  },
  "MultiSource": Tuple{
    expression: from ({2, 3}) A, ({5, 6}) B,
    output: {{ A: 2, B: 5 }, { A: 2, B: 6 }, { A: 3, B: 5 }, { A: 3, B: 6 }}
  }
}

define "Sort": Tuple{
  "IntegerDescending": Tuple{
    expression: ({1, 2, 3}) l sort desc,
    output: {3, 2, 1}
  },
  "IntegerAscending": Tuple{
    expression: ({1, 3, 2}) l sort ascending,
    output: {1, 2, 3}
  },
  "DateTimeDescending": Tuple{
    expression: ({@2013-01-02T00:00:00.000Z, @2014-01-02T00:00:00.000Z, @2015-01-02T00:00:00.000Z}) l sort desc,
    output: {@2015-01-02T00:00:00.000Z, @2014-01-02T00:00:00.000Z, @2013-01-02T00:00:00.000Z}
  },
  "DateTimeAscending": Tuple{
    expression: ({@2013-01-02T00:00:00.000Z, @2015-01-02T00:00:00.000Z, @2014-01-02T00:00:00.000Z}) l sort ascending,
    output: {@2013-01-02T00:00:00.000Z, @2014-01-02T00:00:00.000Z, @2015-01-02T00:00:00.000Z}
  }
}

define "Aggregate": Tuple{
  "MultiplyIntegers": Tuple{
    expression: ({1, 2, 3, 3, 4}) L aggregate A starting 1: A * L,
    output: 72
  },
  "MultiplyIntegersAll": Tuple{
    expression: ({1, 2, 3, 3, 4}) L aggregate all A starting 1: A * L,
    output: 72
  },
  "MultiplyIntegersDistinct": Tuple{
    expression: ({1, 2, 3, 3, 4}) L aggregate distinct A starting 1: A * L,
    output: 24
  },
  "MultiplyIntegersNoStartingExpression": Tuple{
    expression: ({1, 2, 3}) L aggregate A : A * L,
    output: null
  },
  "Multi-Source": Tuple{
    expression: from ({1, 2, 3}) B, (4) C aggregate A : A + B + C,
    output: null
  }
}
