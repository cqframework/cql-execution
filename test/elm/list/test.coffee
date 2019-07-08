should = require 'should'
setup = require '../../setup'
data = require './data'

describe 'List', ->
  @beforeEach ->
    setup @, data

  it 'should execute to an array (ints)', ->
    @intList.exec(@ctx).should.eql [9, 7, 8]

  it 'should execute to an array (strings)', ->
    @stringList.exec(@ctx).should.eql ['a', 'bee', 'see']

  it 'should execute to an array (mixed)', ->
    @mixedList.exec(@ctx).should.eql [1, 'two', 3]

  it 'should execute to an empty array', ->
    @emptyList.exec(@ctx).should.eql []

describe 'Exists', ->
  @beforeEach ->
    setup @, data

  it 'should return false for empty list', ->
    @emptyList.exec(@ctx).should.be.false()

  it 'should return true for full list', ->
    @fullList.exec(@ctx).should.be.true()

  it 'should return false for list with only one null', ->
    @listWithOneNull.exec(@ctx).should.be.false()

  it 'should return false for list with only two nulls', ->
    @listWithTwoNulls.exec(@ctx).should.be.false()

  it 'should return true for list starting with null and with non-null elements', ->
    @listStartingWithNull.exec(@ctx).should.be.true()

  it 'should return true for list with null and non-null elements', ->
    @listWithNull.exec(@ctx).should.be.true()

  # NOTE: This test is misleading due to list promotion of the null to a list with null.
  # Test will remain as it still tests a different list creation method. Additionally, it
  # will be useful if list promotion is disabled.
  it 'should return false for null argument', ->
    @nullExists.exec(@ctx).should.be.false()

describe 'Equal', ->
  @beforeEach ->
    setup @, data

  it 'should identify equal lists of integers', ->
    @equalIntList.exec(@ctx).should.be.true()

  it 'should identify unequal lists of integers', ->
    @unequalIntList.exec(@ctx).should.be.false()

  it 'should identify re-ordered lists of integers as unequal', ->
    @reverseIntList.exec(@ctx).should.be.false()

  it 'should identify equal lists of strings', ->
    @equalStringList.exec(@ctx).should.be.true()

  it 'should identify unequal lists of strings', ->
    @unequalStringList.exec(@ctx).should.be.false()

  it 'should identify equal lists of tuples', ->
    @equalTupleList.exec(@ctx).should.be.true()

  it 'should identify unequal lists of tuples', ->
    @unequalTupleList.exec(@ctx).should.be.false()

  describe 'should return null', ->
    it 'when first list has a null element', ->
      should(@firstListHasNull.exec(@ctx)).be.null()

    it 'when second list has a null element', ->
      should(@secondListHasNull.exec(@ctx)).be.null()

    it 'when both lists have only null elements', ->
      should(@bothListsHaveNull.exec(@ctx)).be.null()

describe 'NotEqual', ->
  @beforeEach ->
    setup @, data

  it 'should identify equal lists of integers', ->
    @equalIntList.exec(@ctx).should.be.false()

  it 'should identify unequal lists of integers', ->
    @unequalIntList.exec(@ctx).should.be.true()

  it 'should identify re-ordered lists of integers as unequal', ->
    @reverseIntList.exec(@ctx).should.be.true()

  it 'should identify equal lists of strings', ->
    @equalStringList.exec(@ctx).should.be.false()

  it 'should identify unequal lists of strings', ->
    @unequalStringList.exec(@ctx).should.be.true()

  it 'should identify equal lists of tuples', ->
    @equalTupleList.exec(@ctx).should.be.false()

  it 'should identify unequal lists of tuples', ->
    @unequalTupleList.exec(@ctx).should.be.true()

describe 'Union', ->
  @beforeEach ->
    setup @, data

  it 'should union two lists to a single list', ->
    @oneToTen.exec(@ctx).should.eql [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  it 'should remove duplicate elements (according to CQL 1.2 spec)', ->
    @oneToFiveOverlapped.exec(@ctx).should.eql [1, 2, 3, 4, 5]

  it 'should remove duplicate null elements', ->
    @oneToFiveOverlappedWithNulls.exec(@ctx).should.eql [1, null, 2, 3, 4, 5]

  it 'should not fill in values in a disjoint union', ->
    @disjoint.exec(@ctx).should.eql [1, 2, 4, 5]

  it 'should return one list for multiple nested unions', ->
    @nestedToFifteen.exec(@ctx).should.eql [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

  it 'should return null if either arg is null', ->
    should(@unionNull.exec(@ctx)).be.null()
    should(@nullUnion.exec(@ctx)).be.null()

describe 'Except', ->
  @beforeEach ->
    setup @, data

  it 'should remove items in second list', ->
    @exceptThreeFour.exec(@ctx).should.eql [1, 2, 5]

  it 'should not be commutative', ->
    @threeFourExcept.exec(@ctx).should.eql []

  it 'should remove items in second list regardless of order', ->
    @exceptFiveThree.exec(@ctx).should.eql [1, 2, 4]

  it 'should be a no-op when lists have no common items', ->
    @exceptNoOp.exec(@ctx).should.eql [1, 2, 3, 4, 5]

  it 'should remove all items when lists are the same', ->
    @exceptEverything.exec(@ctx).should.eql []

  it 'should return items in first list without 3', ->
    @multipleNullExcept.exec(@ctx).should.eql [1, 5, 7, null]

  it 'should be a no-op when second list is empty', ->
    @somethingExceptNothing.exec(@ctx).should.eql [1, 2, 3, 4, 5]

  it 'should be a no-op when first list is already empty', ->
    @nothingExceptSomething.exec(@ctx).should.eql []

  it 'should except lists of tuples', ->
    @exceptTuples.exec(@ctx).should.eql [{a: 1}, {a: 3}]

  it 'should return null if either arg is null', ->
    should(@exceptNull.exec(@ctx)).be.null()
    should(@nullExcept.exec(@ctx)).be.null()

describe 'Intersect', ->
  @beforeEach ->
    setup @, data

  it 'should intersect two disjoint lists  to an empty list', ->
    @noIntersection.exec(@ctx).should.eql []

  it 'should intersect two lists with a single common element', ->
    @intersectOnFive.exec(@ctx).should.eql [5]

  it 'should intersect two lists with a single common element even with duplicates', ->
    @intersectionOnFourDuplicates.exec(@ctx).should.eql [4]

  it 'should intersect two lists with several common elements', ->
    @intersectOnEvens.exec(@ctx).should.eql [2, 4, 6, 8, 10]

  it 'should intersect two identical lists to the same list', ->
    @intersectOnAll.exec(@ctx).should.eql [1, 2, 3, 4, 5]

  it 'should intersect multiple lists to only those elements common across all', ->
    @nestedIntersects.exec(@ctx).should.eql [4, 5]

  it 'should intersect lists of tuples', ->
    @intersectTuples.exec(@ctx).should.eql [{a:1, b:'c'}, {a:2, b:'c'}]

  it 'should return null if either arg is null', ->
    should(@intersectNull.exec(@ctx)).be.null()
    should(@nullIntersect.exec(@ctx)).be.null()

  it 'should intersect on 3', ->
    @multipleNullInListIntersect.exec(@ctx).should.eql [3]

describe 'IndexOf', ->
  @beforeEach ->
    setup @, data

  it 'should return the correct 0-based index when an item is in the list', ->
    @indexOfSecond.exec(@ctx).should.equal 1

  it 'should work with complex types like tuples', ->
    @indexOfThirdTuple.exec(@ctx).should.equal 2

  it 'should return the first index when there are multiple matches', ->
    @multipleMatches.exec(@ctx).should.equal 3

  it 'should return -1 when the item is not in the list', ->
    @itemNotFound.exec(@ctx).should.equal -1

  it 'should return null if either arg is null', ->
    should(@nullList.exec(@ctx)).be.null()
    should(@nullItem.exec(@ctx)).be.null()

  describe 'should use equality to determine presence in List', ->
    it 'when code is in list but have undefined displays', ->
      @listCodeUndefined.exec(@ctx).should.equal 0

    it 'when code is in list', ->
      @listCode.exec(@ctx).should.equal 0

    it 'when code is not in list', ->
      @listWrongCode.exec(@ctx).should.equal -1

    it 'when code system is not in list', ->
      @listWrongCodeSystem.exec(@ctx).should.equal -1


describe 'Indexer', ->
  @beforeEach ->
    setup @, data

  it 'should return the correct item based on the 0-based index', ->
    @secondItem.exec(@ctx).should.equal 'b'

  it 'should NOT return null when accessing index 0', ->
    should(@zeroIndex.exec(@ctx)).not.be.null()

  it 'should return null when accessing out of bounds index', ->
    should(@outOfBounds.exec(@ctx)).be.null()

  it 'should return null if either arg is null', ->
    should(@nullList.exec(@ctx)).be.null()
    should(@nullIndexer.exec(@ctx)).be.null()

describe 'In', ->
  @beforeEach ->
    setup @, data

  it 'should execute to true when item is in list', ->
    @isIn.exec(@ctx).should.be.true()

  it 'should execute to false when item is not in list', ->
    @isNotIn.exec(@ctx).should.be.false()

  it 'should execute to true when tuple is in list', ->
    @tupleIsIn.exec(@ctx).should.be.true()

  it 'should execute to false when tuple is not in list', ->
    @tupleIsNotIn.exec(@ctx).should.be.false()

  it 'should return null if list is null', ->
    should(@inNull.exec(@ctx)).be.null()

  it 'should return null if null is in list', ->
    should(@nullIn.exec(@ctx)).be.null()

  it 'should return null if null is not in list', ->
    should(@nullNotIn.exec(@ctx)).be.null()

describe 'Contains', ->
  @beforeEach ->
    setup @, data

  it 'should execute to true when item is in list', ->
    @isIn.exec(@ctx).should.be.true()

  it 'should execute to false when item is not in list', ->
    @isNotIn.exec(@ctx).should.be.false()

  it 'should execute to true when tuple is in list', ->
    @tupleIsIn.exec(@ctx).should.be.true()

  it 'should execute to false when tuple is not in list', ->
    @tupleIsNotIn.exec(@ctx).should.be.false()

  it 'should return null if null is contained in the list', ->
    should(@nullIn.exec(@ctx)).be.null()

  it 'should return null if null is not contained in the list', ->
    should(@nullNotIn.exec(@ctx)).be.null()

  it 'should return null if list is null', ->
    should(@inNull.exec(@ctx)).be.null()

describe 'Includes', ->
  @beforeEach ->
    setup @, data

  it 'should execute to true when sublist is in list', ->
    @isIncluded.exec(@ctx).should.be.true()

  it 'should execute to true when sublist is in list in different order', ->
    @isIncludedReversed.exec(@ctx).should.be.true()

  it 'should execute to true when lists are the same', ->
    @isSame.exec(@ctx).should.be.true()

  it 'should execute to false when sublist is not in list', ->
    @isNotIncluded.exec(@ctx).should.be.false()

  it 'should execute to true when tuple sublist is in list', ->
    @tuplesIncluded.exec(@ctx).should.be.true()

  it 'should execute to false when tuple sublist is not in list', ->
    @tuplesNotIncluded.exec(@ctx).should.be.false()

  it.skip 'should return true if right arg is null', ->
    # TODO: currently returns false
    should(@nullIncluded.exec(@ctx)).be.true()

  it.skip 'should return false if left arg is null', ->
    # TODO: currently returns null
    should(@nullIncludes.exec(@ctx)).be.false()

  it 'should correctly handle point comparisons', ->
    @dayIncluded.exec(@ctx).should.be.true()
    @dayNotIncluded.exec(@ctx).should.be.false()
    @integerIncluded.exec(@ctx).should.be.true()
    @integerNotIncluded.exec(@ctx).should.be.false()
    @quantityInList.exec(@ctx).should.be.true()
    @quantityNotInList.exec(@ctx).should.be.false()

describe 'IncludedIn', ->
  @beforeEach ->
    setup @, data

  it 'should execute to true when sublist is in list', ->
    @isIncluded.exec(@ctx).should.be.true()

  it 'should execute to true when sublist is in list in different order', ->
    @isIncludedReversed.exec(@ctx).should.be.true()

  it 'should execute to true when lists are the same', ->
    @isSame.exec(@ctx).should.be.true()

  it 'should execute to false when sublist is not in list', ->
    @isNotIncluded.exec(@ctx).should.be.false()

  it 'should execute to true when tuple sublist is in list', ->
    @tuplesIncluded.exec(@ctx).should.be.true()

  it 'should execute to false when tuple sublist is not in list', ->
    @tuplesNotIncluded.exec(@ctx).should.be.false()

  it.skip 'should return true if left arg is null', ->
    # TODO: currently returns false
    should(@nullIncluded.exec(@ctx)).be.true()

  it.skip 'should return false if right arg is null', ->
    # TODO: currently returns null
    should(@nullIncludes.exec(@ctx)).be.false()

  it 'should correctly handle point comparisons', ->
    @dayIncluded.exec(@ctx).should.be.true()
    @dayNotIncluded.exec(@ctx).should.be.false()
    @integerIncluded.exec(@ctx).should.be.true()
    @integerNotIncluded.exec(@ctx).should.be.false()
    @quantityInList.exec(@ctx).should.be.true()
    @quantityNotInList.exec(@ctx).should.be.false()

describe 'ProperIncludes', ->
  @beforeEach ->
    setup @, data

  it 'should execute to true when sublist is in list', ->
    @isIncluded.exec(@ctx).should.be.true()

  it 'should execute to true when sublist is in list in different order', ->
    @isIncludedReversed.exec(@ctx).should.be.true()

  it 'should execute to false when lists are the same', ->
    @isSame.exec(@ctx).should.be.false()

  it 'should execute to false when sublist is not in list', ->
    @isNotIncluded.exec(@ctx).should.be.false()

  it 'should execute to true when tuple sublist is in list', ->
    @tuplesIncluded.exec(@ctx).should.be.true()

  it 'should execute to false when tuple sublist is not in list', ->
    @tuplesNotIncluded.exec(@ctx).should.be.false()

  # TODO: Support for ProperContains
  it.skip 'should return null if either arg is null', ->
    should(@nullIncluded.exec(@ctx)).be.null()
    should(@nullIncludes.exec(@ctx)).be.null()

describe 'ProperIncludedIn', ->
  @beforeEach ->
    setup @, data

  it 'should execute to true when sublist is in list', ->
    @isIncluded.exec(@ctx).should.be.true()

  it 'should execute to true when sublist is in list in different order', ->
    @isIncludedReversed.exec(@ctx).should.be.true()

  it 'should execute to false when lists are the same', ->
    @isSame.exec(@ctx).should.be.false()

  it 'should execute to false when sublist is not in list', ->
    @isNotIncluded.exec(@ctx).should.be.false()

  it 'should execute to true when tuple sublist is in list', ->
    @tuplesIncluded.exec(@ctx).should.be.true()

  it 'should execute to false when tuple sublist is not in list', ->
    @tuplesNotIncluded.exec(@ctx).should.be.false()

  it 'should return null if either arg is null', ->
    should(@nullIncluded.exec(@ctx)).be.null()
    should(@nullIncludes.exec(@ctx)).be.null()

describe 'Flatten', ->
  @beforeEach ->
    setup @, data

  it 'should flatten a list of lists', ->
    @listOfLists.exec(@ctx).should.eql [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1]

  it 'should return null for a null list', ->
    should(@nullValue.exec(@ctx)).be.null()

describe 'Distinct', ->
  @beforeEach ->
    setup @, data

  it 'should remove duplicates', ->
    @lotsOfDups.exec(@ctx).should.eql [1, 2, 3, 4, 5]

  it 'should do nothing to an already distinct array', ->
    @noDups.exec(@ctx).should.eql [2, 4, 6, 8, 10]

  it 'should remove duplicate tuples', ->
    @dupsTuples.exec(@ctx).should.eql [{ hello: 'world' }, { hello: 'cleveland' }, { hello: 'dolly'}]

  it 'should do nothing to an array of distinct tuples', ->
    @noDupsTuples.exec(@ctx).should.eql [{ hello: 'world' }, { hello: 'cleveland' }]

  it 'should preserve duplicate null values in original order', ->
    # define DuplicateNulls: distinct {null, 1, 2, null, 3, 4, 5, null}
    @duplicateNulls.exec(@ctx).should.eql [null, 1, 2, null, 3, 4, 5, null]

describe 'First', ->
  @beforeEach ->
    setup @, data

  it 'should get first of a list of numbers', ->
    @numbers.exec(@ctx).should.equal 1

  it 'should get first of a list of letters', ->
    @letters.exec(@ctx).should.equal 'a'

  it 'should get first of a list of lists', ->
    @lists.exec(@ctx).should.eql ['a','b','c']

  it 'should get first of a list of tuples', ->
    @tuples.exec(@ctx).should.eql { a: 1, b: 2, c: 3 }

  it 'should get first of a list of unordered numbers', ->
    @unordered.exec(@ctx).should.equal 3

  it 'should return null for an empty list', ->
    should(@empty.exec(@ctx)).be.null()

  it 'should return null for an empty list', ->
    should(@nullValue.exec(@ctx)).be.null()

describe 'Last', ->
  @beforeEach ->
    setup @, data

  it 'should get last of a list of numbers', ->
    @numbers.exec(@ctx).should.equal 4

  it 'should get last of a list of letters', ->
    @letters.exec(@ctx).should.equal 'c'

  it 'should get last of a list of lists', ->
    @lists.exec(@ctx).should.eql ['d','e','f']

  it 'should get last of a list of tuples', ->
    @tuples.exec(@ctx).should.eql { a: 24, b: 25, c: 26 }

  it 'should get last of a list of unordered numbers', ->
    @unordered.exec(@ctx).should.equal 2

  it 'should return null for an empty list', ->
    should(@empty.exec(@ctx)).be.null()

  it 'should return null for an empty list', ->
    should(@nullValue.exec(@ctx)).be.null()

describe 'Length', ->
  @beforeEach ->
    setup @, data

  it 'should get length of a list of numbers', ->
    @numbers.exec(@ctx).should.equal 5

  it 'should get length of a list of lists', ->
    @lists.exec(@ctx).should.equal 4

  it 'should get length of a list of tuples', ->
    @tuples.exec(@ctx).should.equal 2

  it 'should get length of an empty list', ->
    @empty.exec(@ctx).should.equal 0

  it 'should return null for an empty list', ->
    should(@nullValue.exec(@ctx)).be.null()

describe 'ToList', ->
  @beforeEach ->
    setup @, data

  it 'should return true that 5 is in 5', ->
    @fiveInFive.exec(@ctx).should.be.true()

  it 'should return false that 4 is in 5', ->
    @fourInFive.exec(@ctx).should.be.false()

  it 'should make null into an empty list', ->
    @lengthOfNull.exec(@ctx).should.equal 0
