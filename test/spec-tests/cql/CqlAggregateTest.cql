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
    expression: MedicationRequestIntervals M
    aggregate R starting (null as List<Interval<DateTime>>): R union ({
      M X
        let S: Max({ end of Last(R) + 1 day, start of X }),
          E: S + duration in days of X
        return Interval[S, E]
    }),
    output: TODO
    */  }
}
