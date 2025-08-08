library CqlAggregateTest version '1.4.0'
using QUICK version '3.3.0'
context Patient

define "AggregateTests": Tuple{
  "FactorialOfFive": Tuple{
    expression: ({ 1, 2, 3, 4, 5 }) Num aggregate Result starting 1: Result * Num,
    output: 120
  },
  "RolledOutIntervals": Tuple{
    skipped: 'Translation Error: Could not resolve identifier MedicationRequestIntervals in the current library.'
    /*
    expression: ({
				  Interval[@2012-01-01, @2012-02-28],
				  Interval[@2012-02-01, @2012-03-31],
				  Interval[@2012-03-01, @2012-04-30]
				}) M
				  aggregate R starting (null as List<Interval<DateTime>>): R union ({
				    M X
				      let S: Max({ end of Last(R) + 1 day, start of X }),
				        E: S + duration in days of X
				      return Interval[S, E]
				  }),
    output: {
				  Interval[@2012-01-01, @2012-02-28],
				  Interval[@2012-02-29, @2012-04-28],
				  Interval[@2012-04-29, @2012-06-28]
				}
    */  },
  "AggregateSumWithStart": Tuple{
    expression: ({ 1, 2, 3, 4, 5 }) Num
				  aggregate Result starting 1: Result + Num,
    output: 16
  },
  "AggregateSumWithNull": Tuple{
    expression: ({ 1, 2, 3, 4, 5 }) Num
				  aggregate Result: Coalesce(Result, 0) + Num,
    output: 15
  },
  "AggregateSumAll": Tuple{
    expression: ({ 1, 1, 2, 2, 2, 3, 4, 4, 5 }) Num
				  aggregate all Result: Coalesce(Result, 0) + Num,
    output: 24
  },
  "AggregateSumDistinct": Tuple{
    expression: ({ 1, 1, 2, 2, 2, 3, 4, 4, 5 }) Num
				  aggregate distinct Result: Coalesce(Result, 0) + Num,
    output: 15
  },
  "Multi": Tuple{
    expression: from ({1}) X, ({2}) Y, ({3}) Z
				  aggregate Agg: Coalesce(Agg, 0) + X + Y + Z,
    output: 6
  },
  "MegaMulti": Tuple{
    expression: from ({1, 2}) X, ({1, 2}) Y, ({1, 2}) Z
				  aggregate Agg starting 0: Agg + X + Y + Z,
    output: 36
  },
  "MegaMultiDistinct": Tuple{
    expression: from ({1, 2, 2, 1}) X, ({1, 2, 1, 2}) Y, ({2, 1, 2, 1}) Z
				  aggregate distinct Agg starting 1: Agg + X + Y + Z,
    output: 37
  }
}
