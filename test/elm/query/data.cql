// @Test: DateRangeOptimizedQuery
valueset "Ambulatory/ED Visit": '2.16.840.1.113883.3.464.1003.101.12.1061'
parameter MeasurementPeriod default Interval[DateTime(2013, 1, 1), DateTime(2014, 1, 1))
define EncountersDuringMP: [Encounter] E where E.period during MeasurementPeriod
define AmbulatoryEncountersDuringMP: [Encounter: "Ambulatory/ED Visit"] E where E.period during MeasurementPeriod
define AmbulatoryEncountersIncludedInMP: [Encounter: "Ambulatory/ED Visit"] E where E.period included in MeasurementPeriod

// @Test: FunctionQuery
define function "FunctionWithThis"(Encounter List<"Encounter">): Count(Encounter.period EncounterPeriod return EncounterPeriod)
define queryWithThis: "FunctionWithThis"([Encounter] E) > 0

// @Test: IncludesQuery
valueset "Ambulatory/ED Visit": '2.16.840.1.113883.3.464.1003.101.12.1061'
parameter MeasurementPeriod default Interval[DateTime(2013, 1, 1), DateTime(2014, 1, 1))
define MPIncludedAmbulatoryEncounters: [Encounter: "Ambulatory/ED Visit"] E where MeasurementPeriod includes E.period

// @Test: MultiSourceQuery
parameter MeasurementPeriod default Interval[DateTime(2013, 1, 1), DateTime(2014, 1, 1))
define msQueryWhere: from [Encounter] E,
[Condition] C
where E.period included in MeasurementPeriod

define msQueryWhere2: from [Encounter] E, [Condition] C
where  E.period  included in MeasurementPeriod and C.id = 'http://cqframework.org/3/2'

define msQuery: from [Encounter] E, [Condition] C return {E: E, C:C}

define multiSourceWithArrays:
  from (List{'a', 'b', 'c'}) A, (List{{'x'}, {'y'}, {'z'}}) X

// @Test: QueryRelationship
define withQuery:  [Encounter] E
with [Condition] C such that C.id = 'http://cqframework.org/3/2'

define withQuery2:  [Encounter] E
with [Condition] C such that C.id = 'http://cqframework.org/3'

define withOutQuery:  [Encounter] E
without [Condition] C such that C.id = 'http://cqframework.org/3/'

define withOutQuery2:  [Encounter] E
without [Condition] C such that C.id = 'http://cqframework.org/3/2'

// @Test: QueryLet
define query:  [Encounter] E
let a: E
return {E: E, a:a}

// @Test: Tuple
define query:  [Encounter] E return {id: E.id, thing: E.status}

// @Test: QueryFilterNulls
define query:  (List{null, 'One', null, 'Two', null}) I where I is not null

// @Test: Sorting
define QuantityListAsc: ({ ToQuantity('10 \'m\''), ToQuantity('2 \'m\'') }) S return S sort asc
define QuantityListSort: ({ ToQuantity('10 \'m\''), ToQuantity('2 \'m\'') }) N return Tuple{N: N} sort by (N)
define TupleAsc: [Encounter] E sort by id
define TupleReturnAsc: [Encounter] E return E sort by id
define TupleReturnTupleAsc: [Encounter] E return {E : E} sort by E.id
define TupleDesc: [Encounter] E sort by id desc
define TupleReturnDesc: [Encounter] E return E sort by id desc
define TupleReturnTupleDesc:  [Encounter] E return {E : E} sort by E.id desc
define ConditionDates: [Condition] C return C.period.low
define lastDateUnsorted: Last("ConditionDates")
define lastDateByThis: Last("ConditionDates" CD sort by $this)
define numberAsc: ({8, 6, 7, 5, 3, 0, 9}) N sort asc
define numberReturnAsc: ({8, 6, 7, 5, 3, 0, 9}) N return N sort asc
define numberDesc: ({8, 6, 7, 5, 3, 0, 9}) N sort desc
define numberReturnDesc: ({8, 6, 7, 5, 3, 0, 9}) N return N sort desc
define stringAsc: ({'jenny', 'dont', 'change', 'your', 'number'}) S sort asc
define stringReturnAsc: ({'jenny', 'dont', 'change', 'your', 'number'}) S return S sort asc
define stringDesc: ({'jenny', 'dont', 'change', 'your', 'number'}) S sort desc
define stringReturnDesc: ({'jenny', 'dont', 'change', 'your', 'number'}) S return S sort desc
define five: 5
define sortByExpression: ({8, 6, 7, 5, 3, 0, 9}) N return Tuple{N: N} sort by (five + N)
define sortByExpressionWithNullResults: ({8, null, 7}) N return Tuple{N: N} sort by (five + N)
define sortWithAscendingKeyword: ({8, 6, 7, 5, 3, 0, 9}) N sort ascending
define sortWithDescendingKeyword: ({8, 6, 7, 5, 3, 0, 9}) N return N sort descending

// @Test: Distinct
define defaultNumbers: ({1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 2, 2, 1}) N return N
define defaultStrings: ({'foo', 'bar', 'baz', 'bar'}) S return S
define defaultTuples: ({Tuple{a: 1, b:2}, Tuple{a: 2, b: 3}, Tuple{a: 1, b: 2}}) T return T
define distinctNumbers: ({1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 2, 2, 1}) N return distinct N
define distinctStrings: ({'foo', 'bar', 'baz', 'bar'}) S return distinct S
define distinctTuples: ({Tuple{a: 1, b:2}, Tuple{a: 2, b: 3}, Tuple{a: 1, b: 2}}) T return distinct T
define allNumbers: ({1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 2, 2, 1}) N return all N
define allStrings: ({'foo', 'bar', 'baz', 'bar'}) S return all S
define allTuples: ({Tuple{a: 1, b:2}, Tuple{a: 2, b: 3}, Tuple{a: 1, b: 2}}) T return all T

// @Test: SingleObjectAlias
define encounters: [Encounter] E
define conditions: [Condition] C
define firstEncounter: First([Encounter] E )
define firstCondition: First([Condition] C where C.id = 'http://cqframework.org/3/2')
define singleAlias: firstEncounter E
define singleAliasWhere: firstEncounter E where E is not null
define singleAliasWhereToNull: firstEncounter  E where E.period is null
define singleAliases: from firstEncounter E, firstCondition C
define singleAliasesAndList: from firstEncounter E, firstCondition C , conditions Con
define singleAliasWith:  [Encounter] E with firstCondition C such that C.id = 'http://cqframework.org/3/2'
define singleAliasWithOut:  [Encounter] E without firstCondition C such that C.id = 'http://cqframework.org/3'
define singleAliasWithEmpty:  [Encounter] E with firstCondition C such that C.id = 'http://cqframework.org/3'
define singleAliasWithOutEmpty:  [Encounter] E without firstCondition C such that C.id = 'http://cqframework.org/3/2'
define asNull: null
define nullQuery: asNull N

//define singleAliasWith: firstEncounter E with [Condition] C
//                         such that C.id = 'http://cqframework.org/3/2'
//define singleAliasWithNull: firstEncounter E with conditions C
//                        such that C.id is null
define singleAliasReturnTuple: firstEncounter E return Tuple{a:1}
define singleAliasReturnList: firstEncounter E return {'foo', 'bar', 'baz', 'bar'}

// @Test: AggregateQuery

define noStartingAggregation:
 ({1,2,3,4,5}) R
    aggregate T : Coalesce(T, 1) * R

define encounterPeriods:
  [Encounter] e
    return e.period

define expressionStartingAggregation:
  encounterPeriods M
    aggregate R starting (List{} as List<Interval<DateTime>>): R union ({
      M X
          let S: Max({ end of Last(R)+1 day, DateTime(1970,01,01)}),
          E: start of X
        return Interval[S, E]
    })

define literalStartingAggregation:
  ({1,2,3,4,5,1,2,3,4,5}) Num
    aggregate distinct str starting 'Start' : str + ToString(Num)

define quantityStartingAggregation:
 ({1 'ml',2 'ml',3 'ml',4 'ml',5 'ml'}) Num
  aggregate distinct Sum starting 0 'ml': Sum + Num

define allAggregation:
 ({1,2,3,4,5,1,2,3,4,5}) Num
  aggregate all Sum starting 0: Sum + Num

define distinctAggregation:
 ({1,2,3,4,5,1,2,3,4,5}) Num
  aggregate distinct Sum starting 0: Sum + Num

// @Test: NullSourceQuery
define NullListQuery:
  (null as List<Condition>) X
    return Tuple {
      start: start of X.period,
      end: end of X.period
    }

define NullObjectQuery:
  (null as Condition) X
    return Tuple {
      start: start of X.period,
      end: end of X.period
    }

define AllNullMultiSourceQuery:
  from
    (null as List<Condition>) X,
    (null as List<Encounter>) Y
    return Tuple {
      cStart: start of X.period,
      cEnd: end of X.period,
      eStart: start of Y.period,
      eEnd: end of Y.period
    }

define SomeNullMultiSourceQuery:
  from
    (null as List<Condition>) X,
    [Encounter] Y
    return Tuple {
      cStart: start of X.period,
      cEnd: end of X.period,
      eStart: start of Y.period,
      eEnd: end of Y.period
    }