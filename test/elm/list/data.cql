// @Test: List
define Three: 1 + 2
define IntList: { 9, 7, 8 }
define StringList: { 'a', 'bee', 'see' }
define MixedList: List<Any>{ 1, 'two', Three }
define EmptyList: List<Integer>{}


// @Test: Exists
define EmptyList: exists (List<Integer>{})
define FullList: exists ({ 1, 2, 3 })
define ListWithOneNull: exists ({ null })
define ListWithTwoNulls: exists ({ null, null })
define ListStartingWithNull: exists ({ null, 3, 4 })
define ListWithNull: exists ({ 3, null, 5 })
define NullExists: exists (null)

// @Test: Equal
define EqualIntList: {1, 2, 3} = {1, 2, 3}
define UnequalIntList: {1, 2, 3} = {1, 2}
define ReverseIntList: {1, 2, 3} = {3, 2, 1}
define EqualStringList: {'hello', 'world'} = {'hello', 'world'}
define UnequalStringList: {'hello', 'world'} = {'foo', 'bar'}
define EqualTupleList: List<Any>{ Tuple{a: 1, b: Tuple{c: 1}}, Tuple{x: 'y', z: 2} } = List<Any>{ Tuple{a: 1, b: Tuple{c: 1}}, Tuple{x: 'y', z: 2} }
define UnequalTupleList: List<Any>{ Tuple{a: 1, b: Tuple{c: 1}}, Tuple{x: 'y', z: 2} } = List<Any>{ Tuple{a: 1, b: Tuple{c: -1}}, Tuple{x: 'y', z: 2} }
define FirstListHasNull: {'hello', 'world', (null as String)} = {'hello', 'world'}
define SecondListHasNull: {'hello', 'world'} = {'hello', 'world', (null as String)}
define BothListsHaveNull: List<Integer>{(null as Integer)} = List<Integer>{(null as Integer)}

// @Test: NotEqual
define EqualIntList: {1, 2, 3} != {1, 2, 3}
define UnequalIntList: {1, 2, 3} != {1, 2}
define ReverseIntList: {1, 2, 3} != {3, 2, 1}
define EqualStringList: {'hello', 'world'} != {'hello', 'world'}
define UnequalStringList: {'hello', 'world'} != {'foo', 'bar'}
define EqualTupleList: List<Any>{ Tuple{a: 1, b: Tuple{c: 1}}, Tuple{x: 'y', z: 2} } != List<Any>{ Tuple{a: 1, b: Tuple{c: 1}}, Tuple{x: 'y', z: 2} }
define UnequalTupleList: List<Any>{ Tuple{a: 1, b: Tuple{c: 1}}, Tuple{x: 'y', z: 2} } != List<Any>{ Tuple{a: 1, b: Tuple{c: -1}}, Tuple{x: 'y', z: 2} }

// @Test: Union
define OneToTen: {1, 2, 3, 4, 5} union {6, 7, 8, 9, 10}
define OneToFiveOverlapped: {1, 2, 3, 4} union {3, 4, 5}
define OneToFiveOverlappedWithNulls: {1, null, 2, 3, 4} union {3, 4, 5, null}
define Disjoint: {1, 2} union {4, 5}
define NestedToFifteen: {1, 2, 3} union {4, 5, 6} union {7 ,8 , 9} union {10, 11, 12} union {13, 14, 15}
define NullUnion: null union {1, 2, 3}
define UnionNull: {1, 2, 3} union null
define nullUnionNull: (null as List<String>) union (null as List<String>)


// @Test: Except
define ExceptThreeFour: {1, 2, 3, 4, 5} except {3, 4}
define ThreeFourExcept: {3, 4} except {1, 2, 3, 4, 5}
define ExceptFiveThree: {1, 2, 3, 4, 5} except {5, 3}
define ExceptNoOp: {1, 2, 3, 3, 4, 5} except {6, 7, 8, 9, 10}
define ExceptEverything: {1, 2, 3, 3, 4, 5} except {1, 2, 3, 4, 5}
define MultipleNullExcept: {1, 3, 5, 7, null, null} except {null, 3}

define SomethingExceptNothing: {1, 2, 3, 4, 5} except List<Integer>{}
define NothingExceptSomething: List<Integer>{} except {1, 2, 3, 4, 5}
define ExceptTuples: {Tuple{a: 1}, Tuple{a: 2}, Tuple{a: 3}} except {Tuple{a: 2}}
define ExceptNull: {1, 2, 3, 4, 5} except null
define NullExcept: null except {1, 2, 3, 4, 5}

// @Test: Intersect
define NoIntersection: {1, 2, 2, 3} intersect {4, 5, 6}
define IntersectOnFive: {4, 5, 5, 6} intersect {1, 3, 5, 7}
define IntersectionOnFourDuplicates: {4, 4, 1, 1, 2} intersect {4, 4, 3, 9}
define IntersectOnEvens: {1, 2, 3, 4, 5, 6, 7, 8, 9, 10} intersect {0, 2, 4, 6, 8, 10, 12}
define IntersectOnAll: {1, 2, 3, 4, 5} intersect {5, 4, 3, 2, 1}
define NestedIntersects: {1, 2, 3, 4, 5} intersect {2, 3, 4, 5, 6} intersect {3, 4, 5, 6, 7} intersect {4, 5, 6, 7, 8}
define IntersectTuples: {Tuple{a:1, b:'d'}, Tuple{a:1, b:'c'}, Tuple{a:2, b:'c'}} intersect {Tuple{a:2, b:'d'}, Tuple{a:1, b:'c'}, Tuple{a:2, b:'c'}, Tuple{a:5, b:'e'}}
define NullIntersect: null intersect {1, 2, 3}
define IntersectNull: {1, 2, 3} intersect null
define MultipleNullInListIntersect: {1, 2, 3, null} intersect {null, 3}

// @Test: IndexOf
define IndexOfSecond: IndexOf({'a', 'b', 'c', 'd'}, 'b')
define IndexOfThirdTuple: IndexOf({Tuple{a: 1}, Tuple{a: 2}, Tuple{a: 3}}, Tuple{a: 3})
define MultipleMatches: IndexOf({'a', 'b', 'c', 'd', 'd', 'e', 'd'}, 'd')
define ItemNotFound: IndexOf({'a', 'b', 'c'}, 'd')
define NullList: IndexOf(null, 'a')
define NullItem: IndexOf({'a', 'b', 'c'}, null)
define ListCode: IndexOf({Code{code: 'F', system: '2.16.840.1.113883.18.2', version: 'HL7V2.5', display: 'foo'}}, Code{code: 'F', system: '2.16.840.1.113883.18.2', version: 'HL7V2.5', display: 'foo'})
define ListCodeUndefined: IndexOf({Code{code: 'F', system: '2.16.840.1.113883.18.2', version: 'HL7V2.5'}}, Code{code: 'F', system: '2.16.840.1.113883.18.2', version: 'HL7V2.5'})
define ListWrongCode: IndexOf({Code{code: 'M', system: '2.16.840.1.113883.18.2', version: 'HL7V2.5'}}, Code{code: 'F', system: '2.16.840.1.113883.18.2', version: 'foo'})
define ListWrongCodeSystem: IndexOf({Code{code: 'F', system: '1.16.840.1.113883.18.2', version: 'HL7V2.5'}}, Code{code: 'F', system: '2.16.840.1.113883.18.2', version: 'foo'})

// @Test: Indexer
define SecondItem: {'a', 'b', 'c', 'd'}[1]
define ZeroIndex: {'a', 'b', 'c', 'd'}[0]
define OutOfBounds: {'a', 'b', 'c', 'd'}[100]
define NullList: (null as List<String>)[1]
define NullIndexer: {'a', 'b', 'c', 'd'}[null]

// @Test: In
define IsIn: 4 in { 3, 4, 5 }
define IsNotIn: 4 in { 3, 5, 6 }
define TupleIsIn: Tuple{a: 1, b: 'c'} in {Tuple{a:1, b:'d'}, Tuple{a:1, b:'c'}, Tuple{a:2, b:'c'}}
define TupleIsNotIn: Tuple{a: 1, b: 'c'} in {Tuple{a:1, b:'d'}, Tuple{a:2, b:'d'}, Tuple{a:2, b:'c'}}
define NullIn: null in {1, 2, null, 3}
define InNull: 1 in null
define NullNotIn: null in {1, 2, 3}

// @Test: Contains
define IsIn: { 3, 4, 5 } contains 4
define IsNotIn: { 3, 5, 6 } contains 4
define TupleIsIn: {Tuple{a:1, b:'d'}, Tuple{a:1, b:'c'}, Tuple{a:2, b:'c'}} contains Tuple{a: 1, b: 'c'}
define TupleIsNotIn: {Tuple{a:1, b:'d'}, Tuple{a:2, b:'d'}, Tuple{a:2, b:'c'}} contains Tuple{a: 1, b: 'c'}
define InNull: (null as List<Integer>) contains 1
define NullIn: {1, 2, null, 3} contains null
define NullNotIn: {1, 2, 3} contains null

// @Test: Includes
define IsIncluded: {1, 2, 3, 4, 5} includes {2, 3, 4}
define IsIncludedReversed: {1, 2, 3, 4, 5} includes {4, 3, 2}
define IsSame: {1, 2, 3, 4, 5} includes {1, 2, 3, 4, 5}
define IsNotIncluded: {1, 2, 3, 4, 5} includes {4, 5, 6}
define TuplesIncluded: {Tuple{a:1, b:'d'}, Tuple{a:2, b:'d'}, Tuple{a:2, b:'c'}} includes {Tuple{a:2, b:'d'}, Tuple{a:2, b:'c'}}
define TuplesNotIncluded: {Tuple{a:1, b:'d'}, Tuple{a:2, b:'d'}, Tuple{a:2, b:'c'}} includes {Tuple{a:2, b:'d'}, Tuple{a:3, b:'c'}}
define NullIncluded: {1, 2, 3, 4, 5} includes null
define NullIncludes: null includes {1, 2, 3, 4, 5}
define DayIncluded: {DateTime(2012, 3, 2), DateTime(2012, 3, 3), DateTime(2012, 3, 4)} includes DateTime(2012, 3, 3)
define DayNotIncluded: {DateTime(2012, 3, 2), DateTime(2012, 3, 3), DateTime(2012, 3, 4)} includes DateTime(2014, 3, 3)
define IntegerIncluded: {1, 2, 3, 4, 5} includes 3
define IntegerNotIncluded: {1, 2, 3, 4, 5} includes 33
define QuantityInList: { ToQuantity('1 \'m\''), ToQuantity('1.995 \'m\''), ToQuantity('2 \'m\''), ToQuantity('3 \'m\'')} includes ToQuantity('1 \'m\'') 
define QuantityNotInList: { ToQuantity('100 \'m\''), ToQuantity('1.995 \'m\''), ToQuantity('2 \'m\''), ToQuantity('3 \'m\'')} includes ToQuantity('1 \'m\'')

// @Test: IncludedIn
define IsIncluded: {2, 3, 4} included in {1, 2, 3, 4, 5}
define IsIncludedReversed: {4, 3, 2} included in {1, 2, 3, 4, 5}
define IsSame: {1, 2, 3, 4, 5} included in {1, 2, 3, 4, 5}
define IsNotIncluded: {4, 5, 6} included in {1, 2, 3, 4, 5}
define TuplesIncluded: {Tuple{a:2, b:'d'}, Tuple{a:2, b:'c'}} included in {Tuple{a:1, b:'d'}, Tuple{a:2, b:'d'}, Tuple{a:2, b:'c'}}
define TuplesNotIncluded: {Tuple{a:2, b:'d'}, Tuple{a:3, b:'c'}} included in {Tuple{a:1, b:'d'}, Tuple{a:2, b:'d'}, Tuple{a:2, b:'c'}}
define NullIncludes: {1, 2, 3, 4, 5} included in null
define NullIncluded: null included in {1, 2, 3, 4, 5}
define DayIncluded: DateTime(2012, 3, 3) included in {DateTime(2012, 3, 2), DateTime(2012, 3, 3), DateTime(2012, 3, 4)}
define DayNotIncluded: DateTime(2014, 3, 3) included in {DateTime(2012, 3, 2), DateTime(2012, 3, 3), DateTime(2012, 3, 4)}
define IntegerIncluded: 3 included in {1, 2, 3, 4, 5}
define IntegerNotIncluded: 33 included in {1, 2, 3, 4, 5}
define QuantityInList: ToQuantity('1 \'m\'') included in { ToQuantity('1 \'m\''), ToQuantity('1.995 \'m\''), ToQuantity('2 \'m\''), ToQuantity('3 \'m\'')}
define QuantityNotInList: ToQuantity('100 \'m\'') included in { ToQuantity('1 \'m\''), ToQuantity('1.995 \'m\''), ToQuantity('2 \'m\''), ToQuantity('3 \'m\'')}

// @Test: ProperIncludes
define IsIncluded: {1, 2, 3, 4, 5} properly includes {2, 3, 4, 5}
define IsIncludedReversed: {1, 2, 3, 4, 5} properly includes {5, 4, 3, 2}
define IsSame: {1, 2, 3, 4, 5} properly includes {1, 2, 3, 4, 5}
define IsNotIncluded: {1, 2, 3, 4, 5} properly includes {3, 4, 5, 6}
define TuplesIncluded: {Tuple{a:1, b:'d'}, Tuple{a:2, b:'d'}, Tuple{a:2, b:'c'}} properly includes {Tuple{a:2, b:'d'}, Tuple{a:2, b:'c'}}
define TuplesNotIncluded: {Tuple{a:1, b:'d'}, Tuple{a:2, b:'d'}, Tuple{a:2, b:'c'}} properly includes {Tuple{a:2, b:'d'}, Tuple{a:3, b:'c'}}
define NullIncluded: {1, 2, 3, 4, 5} properly includes null
define NullIncludes: null properly includes {1, 2, 3, 4, 5}

// @Test: ProperIncludedIn
define IsIncluded: {2, 3, 4} properly included in {1, 2, 3, 4, 5}
define IsIncludedReversed: {4, 3, 2} properly included in {1, 2, 3, 4, 5}
define IsSame: {1, 2, 3, 4, 5} properly included in {1, 2, 3, 4, 5}
define IsNotIncluded: {4, 5, 6} properly included in {1, 2, 3, 4, 5}
define TuplesIncluded: {Tuple{a:2, b:'d'}, Tuple{a:2, b:'c'}} properly included in {Tuple{a:1, b:'d'}, Tuple{a:2, b:'d'}, Tuple{a:2, b:'c'}}
define TuplesNotIncluded: {Tuple{a:2, b:'d'}, Tuple{a:3, b:'c'}} properly included in {Tuple{a:1, b:'d'}, Tuple{a:2, b:'d'}, Tuple{a:2, b:'c'}}
define NullIncludes: {1, 2, 3, 4, 5} properly included in null
define NullIncluded: (null as List<Integer>) properly included in {1, 2, 3, 4, 5}

// @Test: Flatten
define ListOfLists: flatten { {1, 2, 3}, {4, 5, 6}, {7, 8, 9}, {9, 8, 7, 6, 5}, {4}, {3, 2, 1} }
define NullValue: flatten null

// @Test: Distinct
define LotsOfDups: distinct {1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 4, 3, 2, 1}
define NoDups: distinct {2, 4, 6, 8, 10}
define DupsTuples: distinct { Tuple{ hello: 'world' }, Tuple{ hello: 'cleveland' }, Tuple{ hello: 'world' }, Tuple{ hello: 'dolly' } }
define NoDupsTuples: distinct { Tuple{ hello: 'world' }, Tuple{ hello: 'cleveland' } }
define DuplicateNulls: distinct {null, 1, 2, null, 3, 4, 5, null}

// @Test: First
define Numbers: First({1, 2, 3, 4})
define Letters: First({'a', 'b', 'c'})
define Lists: First({{'a','b','c'},{'d','e','f'}})
define Tuples: First({ Tuple{a: 1, b: 2, c: 3}, Tuple{a: 24, b: 25, c: 26} })
define Unordered: First({3, 1, 4, 2})
define Empty: First(List<Integer>{})
define NullValue: First(null as List<Integer>)

// @Test: Last
define Numbers: Last({1, 2, 3, 4})
define Letters: Last({'a', 'b', 'c'})
define Lists: Last({{'a','b','c'},{'d','e','f'}})
define Tuples: Last({ Tuple{a: 1, b: 2, c: 3}, Tuple{a: 24, b: 25, c: 26} })
define Unordered: Last({3, 1, 4, 2})
define Empty: Last(List<Integer>{})
define NullValue: Last(null as List<Integer>)

// @Test: Length
define Numbers: Length({2, 4, 6, 8, 10})
define Lists: Length({ {1, 2, 3}, {4, 5, 6}, {7, 8, 9}, {10, 11, 12}})
define Tuples: Length({ Tuple{a: 1, b: 2, c: 3}, Tuple{a: 24, b: 25, c: 26} })
define Empty: Length(List<Integer>{})
define NullValue: Length(null as List<Integer>)

// @Test: ToList
define FiveInFive: 5 in 5 // CQL-to-ELM will promote the second 5 to a list via ToList
define FourInFive: 4 in 5 // CQL-to-ELM will promote the 5 to a list via ToList
define LengthOfNull: Length(null as Integer) // CQL-to-ELM will promote the null to a list via ToList

// @Test: Skip
define Skip2: Skip({ 1, 2, 3, 4, 5 }, 2)
define SkipNull: Skip({ 1, 3, 5 }, null)
define SkipEmpty: Skip({ 1, 3, 5 }, -1)
define SkipIsNull: Skip(null, 2)

// @Test: Tail
define Tail234: Tail({ 1, 2, 3, 4 })
define TailEmpty: Tail({ })
define TailIsNull: Tail(null)

// @Test: Take
define Take2: Take({ 1, 2, 3, 4 }, 2)
define TakeTooMany: Take({ 1, 2 }, 3)
define TakeEmpty: Take({ 1, 2, 3, 4 }, null)
define TakeIsNull: Take(null, 2)
