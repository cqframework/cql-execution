import should from 'should';
import setup from '../../setup';
const data = require('./data');

describe('List', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should execute to an array (ints)', function () {
    this.intList.exec(this.ctx).should.eql([9, 7, 8]);
  });

  it('should execute to an array (strings)', function () {
    this.stringList.exec(this.ctx).should.eql(['a', 'bee', 'see']);
  });

  it('should execute to an array (mixed)', function () {
    this.mixedList.exec(this.ctx).should.eql([1, 'two', 3]);
  });

  it('should execute to an empty array', function () {
    this.emptyList.exec(this.ctx).should.eql([]);
  });
});

describe('Exists', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should return false for empty list', function () {
    this.emptyList.exec(this.ctx).should.be.false();
  });

  it('should return true for full list', function () {
    this.fullList.exec(this.ctx).should.be.true();
  });

  it('should return false for list with only one null', function () {
    this.listWithOneNull.exec(this.ctx).should.be.false();
  });

  it('should return false for list with only two nulls', function () {
    this.listWithTwoNulls.exec(this.ctx).should.be.false();
  });

  it('should return true for list starting with null and with non-null elements', function () {
    this.listStartingWithNull.exec(this.ctx).should.be.true();
  });

  it('should return true for list with null and non-null elements', function () {
    this.listWithNull.exec(this.ctx).should.be.true();
  });

  // NOTE: This test is misleading due to list promotion of the null to a list with null.
  // Test will remain as it still tests a different list creation method. Additionally, it
  // will be useful if list promotion is disabled.
  it('should return false for null argument', function () {
    this.nullExists.exec(this.ctx).should.be.false();
  });
});

describe('Equal', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should identify equal lists of integers', function () {
    this.equalIntList.exec(this.ctx).should.be.true();
  });

  it('should identify unequal lists of integers', function () {
    this.unequalIntList.exec(this.ctx).should.be.false();
  });

  it('should identify re-ordered lists of integers as unequal', function () {
    this.reverseIntList.exec(this.ctx).should.be.false();
  });

  it('should identify equal lists of strings', function () {
    this.equalStringList.exec(this.ctx).should.be.true();
  });

  it('should identify unequal lists of strings', function () {
    this.unequalStringList.exec(this.ctx).should.be.false();
  });

  it('should identify equal lists of tuples', function () {
    this.equalTupleList.exec(this.ctx).should.be.true();
  });

  it('should identify unequal lists of tuples', function () {
    this.unequalTupleList.exec(this.ctx).should.be.false();
  });

  describe('should return null', () => {
    it('when first list has a null element', function () {
      should(this.firstListHasNull.exec(this.ctx)).be.null();
    });

    it('when second list has a null element', function () {
      should(this.secondListHasNull.exec(this.ctx)).be.null();
    });

    it('when both lists have only null elements', function () {
      should(this.bothListsHaveNull.exec(this.ctx)).be.null();
    });
  });
});

describe('NotEqual', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should identify equal lists of integers', function () {
    this.equalIntList.exec(this.ctx).should.be.false();
  });

  it('should identify unequal lists of integers', function () {
    this.unequalIntList.exec(this.ctx).should.be.true();
  });

  it('should identify re-ordered lists of integers as unequal', function () {
    this.reverseIntList.exec(this.ctx).should.be.true();
  });

  it('should identify equal lists of strings', function () {
    this.equalStringList.exec(this.ctx).should.be.false();
  });

  it('should identify unequal lists of strings', function () {
    this.unequalStringList.exec(this.ctx).should.be.true();
  });

  it('should identify equal lists of tuples', function () {
    this.equalTupleList.exec(this.ctx).should.be.false();
  });

  it('should identify unequal lists of tuples', function () {
    this.unequalTupleList.exec(this.ctx).should.be.true();
  });
});

describe('Union', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should union two lists to a single list', function () {
    this.oneToTen.exec(this.ctx).should.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('should remove duplicate elements (according to CQL 1.2 spec)', function () {
    this.oneToFiveOverlapped.exec(this.ctx).should.eql([1, 2, 3, 4, 5]);
  });

  it('should remove duplicate null elements', function () {
    this.oneToFiveOverlappedWithNulls.exec(this.ctx).should.eql([1, null, 2, 3, 4, 5]);
  });

  it('should not fill in values in a disjoint union', function () {
    this.disjoint.exec(this.ctx).should.eql([1, 2, 4, 5]);
  });

  it('should return one list for multiple nested unions', function () {
    this.nestedToFifteen
      .exec(this.ctx)
      .should.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
  });

  it('should return other list if either arg is null', function () {
    should(this.unionNull.exec(this.ctx)).be.eql([1, 2, 3]);
    should(this.nullUnion.exec(this.ctx)).be.eql([1, 2, 3]);
  });

  it('should return an empty list if both args are null but expected to be lists', function () {
    this.nullUnionNull.exec(this.ctx).should.be.eql([]);
  });
});

describe('Except', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should remove items in second list', function () {
    this.exceptThreeFour.exec(this.ctx).should.eql([1, 2, 5]);
  });

  it('should not be commutative', function () {
    this.threeFourExcept.exec(this.ctx).should.eql([]);
  });

  it('should remove items in second list regardless of order', function () {
    this.exceptFiveThree.exec(this.ctx).should.eql([1, 2, 4]);
  });

  it('should be a no-op when lists have no common items', function () {
    this.exceptNoOp.exec(this.ctx).should.eql([1, 2, 3, 4, 5]);
  });

  it('should remove all items when lists are the same', function () {
    this.exceptEverything.exec(this.ctx).should.eql([]);
  });

  it('should return items in first list without 3 and null', function () {
    this.multipleNullExcept.exec(this.ctx).should.eql([1, 5, 7]);
  });

  it('should be a no-op when second list is empty', function () {
    this.somethingExceptNothing.exec(this.ctx).should.eql([1, 2, 3, 4, 5]);
  });

  it('should be a no-op when first list is already empty', function () {
    this.nothingExceptSomething.exec(this.ctx).should.eql([]);
  });

  it('should except lists of tuples', function () {
    this.exceptTuples.exec(this.ctx).should.eql([{ a: 1 }, { a: 3 }]);
  });

  it('should return null if first arg is null', function () {
    should(this.nullExcept.exec(this.ctx)).be.null();
  });

  it('should return first arg if second arg is null', function () {
    this.exceptNull.exec(this.ctx).should.eql([1, 2, 3, 4, 5]);
  });
});

describe('Intersect', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should intersect two disjoint lists  to an empty list', function () {
    this.noIntersection.exec(this.ctx).should.eql([]);
  });

  it('should intersect two lists with a single common element', function () {
    this.intersectOnFive.exec(this.ctx).should.eql([5]);
  });

  it('should intersect two lists with a single common element even with duplicates', function () {
    this.intersectionOnFourDuplicates.exec(this.ctx).should.eql([4]);
  });

  it('should intersect two lists with several common elements', function () {
    this.intersectOnEvens.exec(this.ctx).should.eql([2, 4, 6, 8, 10]);
  });

  it('should intersect two identical lists to the same list', function () {
    this.intersectOnAll.exec(this.ctx).should.eql([1, 2, 3, 4, 5]);
  });

  it('should intersect multiple lists to only those elements common across all', function () {
    this.nestedIntersects.exec(this.ctx).should.eql([4, 5]);
  });

  it('should intersect lists of tuples', function () {
    this.intersectTuples.exec(this.ctx).should.eql([
      { a: 1, b: 'c' },
      { a: 2, b: 'c' }
    ]);
  });

  it('should return null if either arg is null', function () {
    should(this.intersectNull.exec(this.ctx)).be.null();
    should(this.nullIntersect.exec(this.ctx)).be.null();
  });

  it('should intersect two lists that contain null', function () {
    this.multipleNullInListIntersect.exec(this.ctx).should.eql([3, null]);
  });
});

describe('IndexOf', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should return the correct 0-based index when an item is in the list', function () {
    this.indexOfSecond.exec(this.ctx).should.equal(1);
    this.ctx.rootContext().localId_context[this.indexOfSecond.source.localId].should.not.be.null();
    this.ctx.rootContext().localId_context[this.indexOfSecond.element.localId].should.not.be.null();
  });

  it('should work with complex types like tuples', function () {
    this.indexOfThirdTuple.exec(this.ctx).should.equal(2);
  });

  it('should return the first index when there are multiple matches', function () {
    this.multipleMatches.exec(this.ctx).should.equal(3);
  });

  it('should return -1 when the item is not in the list', function () {
    this.itemNotFound.exec(this.ctx).should.equal(-1);
  });

  it('should return null if either arg is null', function () {
    should(this.nullList.exec(this.ctx)).be.null();
    should(this.nullItem.exec(this.ctx)).be.null();
  });

  describe('should use equality to determine presence in List', () => {
    it('when code is in list but have undefined displays', function () {
      this.listCodeUndefined.exec(this.ctx).should.equal(0);
    });

    it('when code is in list', function () {
      this.listCode.exec(this.ctx).should.equal(0);
    });

    it('when code is not in list', function () {
      this.listWrongCode.exec(this.ctx).should.equal(-1);
    });

    it('when code system is not in list', function () {
      this.listWrongCodeSystem.exec(this.ctx).should.equal(-1);
    });
  });
});

describe('Indexer', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should return the correct item based on the 0-based index', function () {
    this.secondItem.exec(this.ctx).should.equal('b');
  });

  it('should NOT return null when accessing index 0', function () {
    should(this.zeroIndex.exec(this.ctx)).not.be.null();
  });

  it('should return null when accessing out of bounds index', function () {
    should(this.outOfBounds.exec(this.ctx)).be.null();
  });

  it('should return null if either arg is null', function () {
    should(this.nullList.exec(this.ctx)).be.null();
    should(this.nullIndexer.exec(this.ctx)).be.null();
  });
});

describe('In', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should execute to true when item is in list', function () {
    this.isIn.exec(this.ctx).should.be.true();
  });

  it('should execute to false when item is not in list', function () {
    this.isNotIn.exec(this.ctx).should.be.false();
  });

  it('should execute to true when tuple is in list', function () {
    this.tupleIsIn.exec(this.ctx).should.be.true();
  });

  it('should execute to false when tuple is not in list', function () {
    this.tupleIsNotIn.exec(this.ctx).should.be.false();
  });

  it('should return false if list is null', function () {
    this.inNull.exec(this.ctx).should.be.false();
  });

  it('should return null if null is in list', function () {
    should(this.nullIn.exec(this.ctx)).be.null();
  });

  it('should return null if null is not in list', function () {
    should(this.nullNotIn.exec(this.ctx)).be.null();
  });
});

describe('Contains', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should execute to true when item is in list', function () {
    this.isIn.exec(this.ctx).should.be.true();
  });

  it('should execute to false when item is not in list', function () {
    this.isNotIn.exec(this.ctx).should.be.false();
  });

  it('should execute to true when tuple is in list', function () {
    this.tupleIsIn.exec(this.ctx).should.be.true();
  });

  it('should execute to false when tuple is not in list', function () {
    this.tupleIsNotIn.exec(this.ctx).should.be.false();
  });

  it('should return null if null is contained in the list', function () {
    should(this.nullIn.exec(this.ctx)).be.null();
  });

  it('should return null if null is not contained in the list', function () {
    should(this.nullNotIn.exec(this.ctx)).be.null();
  });

  it('should return false if list is null', function () {
    this.inNull.exec(this.ctx).should.be.false();
  });
});

describe('Includes', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should execute to true when sublist is in list', function () {
    this.isIncluded.exec(this.ctx).should.be.true();
  });

  it('should execute to true when sublist is in list in different order', function () {
    this.isIncludedReversed.exec(this.ctx).should.be.true();
  });

  it('should execute to true when lists are the same', function () {
    this.isSame.exec(this.ctx).should.be.true();
  });

  it('should execute to false when sublist is not in list', function () {
    this.isNotIncluded.exec(this.ctx).should.be.false();
  });

  it('should execute to true when tuple sublist is in list', function () {
    this.tuplesIncluded.exec(this.ctx).should.be.true();
  });

  it('should execute to false when tuple sublist is not in list', function () {
    this.tuplesNotIncluded.exec(this.ctx).should.be.false();
  });

  it.skip('should return true if right arg is null', function () {
    // TODO: currently returns false
    should(this.nullIncluded.exec(this.ctx)).be.true();
  });

  it.skip('should return false if left arg is null', function () {
    // TODO: currently returns null
    should(this.nullIncludes.exec(this.ctx)).be.false();
  });

  it('should correctly handle point comparisons', function () {
    this.dayIncluded.exec(this.ctx).should.be.true();
    this.dayNotIncluded.exec(this.ctx).should.be.false();
    this.integerIncluded.exec(this.ctx).should.be.true();
    this.integerNotIncluded.exec(this.ctx).should.be.false();
    this.quantityInList.exec(this.ctx).should.be.true();
    this.quantityNotInList.exec(this.ctx).should.be.false();
  });
});

describe('IncludedIn', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should execute to true when sublist is in list', function () {
    this.isIncluded.exec(this.ctx).should.be.true();
  });

  it('should execute to true when sublist is in list in different order', function () {
    this.isIncludedReversed.exec(this.ctx).should.be.true();
  });

  it('should execute to true when lists are the same', function () {
    this.isSame.exec(this.ctx).should.be.true();
  });

  it('should execute to false when sublist is not in list', function () {
    this.isNotIncluded.exec(this.ctx).should.be.false();
  });

  it('should execute to true when tuple sublist is in list', function () {
    this.tuplesIncluded.exec(this.ctx).should.be.true();
  });

  it('should execute to false when tuple sublist is not in list', function () {
    this.tuplesNotIncluded.exec(this.ctx).should.be.false();
  });

  it.skip('should return true if left arg is null', function () {
    // TODO: currently returns false
    should(this.nullIncluded.exec(this.ctx)).be.true();
  });

  it.skip('should return false if right arg is null', function () {
    // TODO: currently returns null
    should(this.nullIncludes.exec(this.ctx)).be.false();
  });

  it('should correctly handle point comparisons', function () {
    this.dayIncluded.exec(this.ctx).should.be.true();
    this.dayNotIncluded.exec(this.ctx).should.be.false();
    this.integerIncluded.exec(this.ctx).should.be.true();
    this.integerNotIncluded.exec(this.ctx).should.be.false();
    this.quantityInList.exec(this.ctx).should.be.true();
    this.quantityNotInList.exec(this.ctx).should.be.false();
  });
});

describe('ProperIncludes', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should execute to true when sublist is in list', function () {
    this.isIncluded.exec(this.ctx).should.be.true();
  });

  it('should execute to true when sublist is in list in different order', function () {
    this.isIncludedReversed.exec(this.ctx).should.be.true();
  });

  it('should execute to false when lists are the same', function () {
    this.isSame.exec(this.ctx).should.be.false();
  });

  it('should execute to false when sublist is not in list', function () {
    this.isNotIncluded.exec(this.ctx).should.be.false();
  });

  it('should execute to true when tuple sublist is in list', function () {
    this.tuplesIncluded.exec(this.ctx).should.be.true();
  });

  it('should execute to false when tuple sublist is not in list', function () {
    this.tuplesNotIncluded.exec(this.ctx).should.be.false();
  });

  // TODO: Support for ProperContains
  it.skip('should return null if either arg is null', function () {
    should(this.nullIncluded.exec(this.ctx)).be.null();
    should(this.nullIncludes.exec(this.ctx)).be.null();
  });
});

describe('ProperIncludedIn', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should execute to true when sublist is in list', function () {
    this.isIncluded.exec(this.ctx).should.be.true();
  });

  it('should execute to true when sublist is in list in different order', function () {
    this.isIncludedReversed.exec(this.ctx).should.be.true();
  });

  it('should execute to false when lists are the same', function () {
    this.isSame.exec(this.ctx).should.be.false();
  });

  it('should execute to false when sublist is not in list', function () {
    this.isNotIncluded.exec(this.ctx).should.be.false();
  });

  it('should execute to true when tuple sublist is in list', function () {
    this.tuplesIncluded.exec(this.ctx).should.be.true();
  });

  it('should execute to false when tuple sublist is not in list', function () {
    this.tuplesNotIncluded.exec(this.ctx).should.be.false();
  });

  it('should return null if either arg is null', function () {
    should(this.nullIncluded.exec(this.ctx)).be.null();
    should(this.nullIncludes.exec(this.ctx)).be.null();
  });
});

describe('Flatten', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should flatten a list of lists', function () {
    this.listOfLists
      .exec(this.ctx)
      .should.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
  });

  it('should return null for a null list', function () {
    should(this.nullValue.exec(this.ctx)).be.null();
  });
});

describe('Distinct', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should remove duplicates', function () {
    this.lotsOfDups.exec(this.ctx).should.eql([1, 2, 3, 4, 5]);
  });

  it('should do nothing to an already distinct array', function () {
    this.noDups.exec(this.ctx).should.eql([2, 4, 6, 8, 10]);
  });

  it('should remove duplicate tuples', function () {
    this.dupsTuples
      .exec(this.ctx)
      .should.eql([{ hello: 'world' }, { hello: 'cleveland' }, { hello: 'dolly' }]);
  });

  it('should do nothing to an array of distinct tuples', function () {
    this.noDupsTuples.exec(this.ctx).should.eql([{ hello: 'world' }, { hello: 'cleveland' }]);
  });

  it('should remove duplicate null values', function () {
    // define DuplicateNulls: distinct {null, 1, 2, null, 3, 4, 5, null}
    this.duplicateNulls.exec(this.ctx).should.eql([null, 1, 2, 3, 4, 5]);
  });
});

describe('First', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should get first of a list of numbers', function () {
    this.numbers.exec(this.ctx).should.equal(1);
  });

  it('should get first of a list of letters', function () {
    this.letters.exec(this.ctx).should.equal('a');
  });

  it('should get first of a list of lists', function () {
    this.lists.exec(this.ctx).should.eql(['a', 'b', 'c']);
  });

  it('should get first of a list of tuples', function () {
    this.tuples.exec(this.ctx).should.eql({ a: 1, b: 2, c: 3 });
  });

  it('should get first of a list of unordered numbers', function () {
    this.unordered.exec(this.ctx).should.equal(3);
  });

  it('should return null for an empty list', function () {
    should(this.empty.exec(this.ctx)).be.null();
  });

  it('should return null for a null list', function () {
    should(this.nullValue.exec(this.ctx)).be.null();
  });
});

describe('Last', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should get last of a list of numbers', function () {
    this.numbers.exec(this.ctx).should.equal(4);
  });

  it('should get last of a list of letters', function () {
    this.letters.exec(this.ctx).should.equal('c');
  });

  it('should get last of a list of lists', function () {
    this.lists.exec(this.ctx).should.eql(['d', 'e', 'f']);
  });

  it('should get last of a list of tuples', function () {
    this.tuples.exec(this.ctx).should.eql({ a: 24, b: 25, c: 26 });
  });

  it('should get last of a list of unordered numbers', function () {
    this.unordered.exec(this.ctx).should.equal(2);
  });

  it('should return null for an empty list', function () {
    should(this.empty.exec(this.ctx)).be.null();
  });

  it('should return null for a null list', function () {
    should(this.nullValue.exec(this.ctx)).be.null();
  });
});

describe('Length', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should get length of a list of numbers', function () {
    this.numbers.exec(this.ctx).should.equal(5);
  });

  it('should get length of a list of lists', function () {
    this.lists.exec(this.ctx).should.equal(4);
  });

  it('should get length of a list of tuples', function () {
    this.tuples.exec(this.ctx).should.equal(2);
  });

  it('should get length of an empty list', function () {
    this.empty.exec(this.ctx).should.equal(0);
  });

  it('should return zero for a null list', function () {
    this.nullValue.exec(this.ctx).should.equal(0);
  });
});

describe('ToList', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should return true that 5 is in 5', function () {
    this.fiveInFive.exec(this.ctx).should.be.true();
  });

  it('should return false that 4 is in 5', function () {
    this.fourInFive.exec(this.ctx).should.be.false();
  });

  it('should make null into an empty list', function () {
    this.lengthOfNull.exec(this.ctx).should.equal(0);
  });
});

describe('Skip', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should skip two elements', function () {
    this.skip2.exec(this.ctx).should.eql([3, 4, 5]);
  });

  it('should not skip when using null', function () {
    this.skipNull.exec(this.ctx).should.eql([1, 3, 5]);
  });

  it('should return empty list when using negative number', function () {
    this.skipEmpty.exec(this.ctx).should.eql([]);
  });

  it('should return null when given null', function () {
    should(this.skipIsNull.exec(this.ctx)).be.null();
  });
});

describe('Tail', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should get tail of list', function () {
    this.tail234.exec(this.ctx).should.eql([2, 3, 4]);
  });

  it('should return empty list when given empty list', function () {
    this.tailEmpty.exec(this.ctx).should.eql([]);
  });

  it('should return null when given null', function () {
    should(this.tailIsNull.exec(this.ctx)).be.null();
  });
});

describe('Take', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should take two elements', function () {
    this.take2.exec(this.ctx).should.eql([1, 2]);
  });

  it('should return full list when asked for too many elements', function () {
    this.takeTooMany.exec(this.ctx).should.eql([1, 2]);
  });

  it('should return empty list when using null', function () {
    this.takeEmpty.exec(this.ctx).should.eql([]);
  });

  it('should return null when given null', function () {
    should(this.takeIsNull.exec(this.ctx)).be.null();
  });
});
