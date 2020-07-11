/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const should = require('should');
const setup = require('../../setup');
const data = require('./data');

describe('List', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should execute to an array (ints)', function() {
    return this.intList.exec(this.ctx).should.eql([9, 7, 8]);
});

  it('should execute to an array (strings)', function() {
    return this.stringList.exec(this.ctx).should.eql(['a', 'bee', 'see']);
});

  it('should execute to an array (mixed)', function() {
    return this.mixedList.exec(this.ctx).should.eql([1, 'two', 3]);
});

  return it('should execute to an empty array', function() {
    return this.emptyList.exec(this.ctx).should.eql([]);
});
});

describe('Exists', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should return false for empty list', function() {
    return this.emptyList.exec(this.ctx).should.be.false();
  });

  it('should return true for full list', function() {
    return this.fullList.exec(this.ctx).should.be.true();
  });

  it('should return false for list with only one null', function() {
    return this.listWithOneNull.exec(this.ctx).should.be.false();
  });

  it('should return false for list with only two nulls', function() {
    return this.listWithTwoNulls.exec(this.ctx).should.be.false();
  });

  it('should return true for list starting with null and with non-null elements', function() {
    return this.listStartingWithNull.exec(this.ctx).should.be.true();
  });

  it('should return true for list with null and non-null elements', function() {
    return this.listWithNull.exec(this.ctx).should.be.true();
  });

  // NOTE: This test is misleading due to list promotion of the null to a list with null.
  // Test will remain as it still tests a different list creation method. Additionally, it
  // will be useful if list promotion is disabled.
  return it('should return false for null argument', function() {
    return this.nullExists.exec(this.ctx).should.be.false();
  });
});

describe('Equal', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should identify equal lists of integers', function() {
    return this.equalIntList.exec(this.ctx).should.be.true();
  });

  it('should identify unequal lists of integers', function() {
    return this.unequalIntList.exec(this.ctx).should.be.false();
  });

  it('should identify re-ordered lists of integers as unequal', function() {
    return this.reverseIntList.exec(this.ctx).should.be.false();
  });

  it('should identify equal lists of strings', function() {
    return this.equalStringList.exec(this.ctx).should.be.true();
  });

  it('should identify unequal lists of strings', function() {
    return this.unequalStringList.exec(this.ctx).should.be.false();
  });

  it('should identify equal lists of tuples', function() {
    return this.equalTupleList.exec(this.ctx).should.be.true();
  });

  it('should identify unequal lists of tuples', function() {
    return this.unequalTupleList.exec(this.ctx).should.be.false();
  });

  return describe('should return null', function() {
    it('when first list has a null element', function() {
      return should(this.firstListHasNull.exec(this.ctx)).be.null();
    });

    it('when second list has a null element', function() {
      return should(this.secondListHasNull.exec(this.ctx)).be.null();
    });

    return it('when both lists have only null elements', function() {
      return should(this.bothListsHaveNull.exec(this.ctx)).be.null();
    });
  });
});

describe('NotEqual', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should identify equal lists of integers', function() {
    return this.equalIntList.exec(this.ctx).should.be.false();
  });

  it('should identify unequal lists of integers', function() {
    return this.unequalIntList.exec(this.ctx).should.be.true();
  });

  it('should identify re-ordered lists of integers as unequal', function() {
    return this.reverseIntList.exec(this.ctx).should.be.true();
  });

  it('should identify equal lists of strings', function() {
    return this.equalStringList.exec(this.ctx).should.be.false();
  });

  it('should identify unequal lists of strings', function() {
    return this.unequalStringList.exec(this.ctx).should.be.true();
  });

  it('should identify equal lists of tuples', function() {
    return this.equalTupleList.exec(this.ctx).should.be.false();
  });

  return it('should identify unequal lists of tuples', function() {
    return this.unequalTupleList.exec(this.ctx).should.be.true();
  });
});

describe('Union', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should union two lists to a single list', function() {
    return this.oneToTen.exec(this.ctx).should.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

  it('should remove duplicate elements (according to CQL 1.2 spec)', function() {
    return this.oneToFiveOverlapped.exec(this.ctx).should.eql([1, 2, 3, 4, 5]);
});

  it('should remove duplicate null elements', function() {
    return this.oneToFiveOverlappedWithNulls.exec(this.ctx).should.eql([1, null, 2, 3, 4, 5]);
});

  it('should not fill in values in a disjoint union', function() {
    return this.disjoint.exec(this.ctx).should.eql([1, 2, 4, 5]);
});

  it('should return one list for multiple nested unions', function() {
    return this.nestedToFifteen.exec(this.ctx).should.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
});

  return it('should return null if either arg is null', function() {
    should(this.unionNull.exec(this.ctx)).be.null();
    return should(this.nullUnion.exec(this.ctx)).be.null();
  });
});

describe('Except', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should remove items in second list', function() {
    return this.exceptThreeFour.exec(this.ctx).should.eql([1, 2, 5]);
});

  it('should not be commutative', function() {
    return this.threeFourExcept.exec(this.ctx).should.eql([]);
});

  it('should remove items in second list regardless of order', function() {
    return this.exceptFiveThree.exec(this.ctx).should.eql([1, 2, 4]);
});

  it('should be a no-op when lists have no common items', function() {
    return this.exceptNoOp.exec(this.ctx).should.eql([1, 2, 3, 4, 5]);
});

  it('should remove all items when lists are the same', function() {
    return this.exceptEverything.exec(this.ctx).should.eql([]);
});

  it('should return items in first list without 3', function() {
    return this.multipleNullExcept.exec(this.ctx).should.eql([1, 5, 7, null]);
});

  it('should be a no-op when second list is empty', function() {
    return this.somethingExceptNothing.exec(this.ctx).should.eql([1, 2, 3, 4, 5]);
});

  it('should be a no-op when first list is already empty', function() {
    return this.nothingExceptSomething.exec(this.ctx).should.eql([]);
});

  it('should except lists of tuples', function() {
    return this.exceptTuples.exec(this.ctx).should.eql([{a: 1}, {a: 3}]);
});

  return it('should return null if either arg is null', function() {
    should(this.exceptNull.exec(this.ctx)).be.null();
    return should(this.nullExcept.exec(this.ctx)).be.null();
  });
});

describe('Intersect', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should intersect two disjoint lists  to an empty list', function() {
    return this.noIntersection.exec(this.ctx).should.eql([]);
});

  it('should intersect two lists with a single common element', function() {
    return this.intersectOnFive.exec(this.ctx).should.eql([5]);
});

  it('should intersect two lists with a single common element even with duplicates', function() {
    return this.intersectionOnFourDuplicates.exec(this.ctx).should.eql([4]);
});

  it('should intersect two lists with several common elements', function() {
    return this.intersectOnEvens.exec(this.ctx).should.eql([2, 4, 6, 8, 10]);
});

  it('should intersect two identical lists to the same list', function() {
    return this.intersectOnAll.exec(this.ctx).should.eql([1, 2, 3, 4, 5]);
});

  it('should intersect multiple lists to only those elements common across all', function() {
    return this.nestedIntersects.exec(this.ctx).should.eql([4, 5]);
});

  it('should intersect lists of tuples', function() {
    return this.intersectTuples.exec(this.ctx).should.eql([{a:1, b:'c'}, {a:2, b:'c'}]);
});

  it('should return null if either arg is null', function() {
    should(this.intersectNull.exec(this.ctx)).be.null();
    return should(this.nullIntersect.exec(this.ctx)).be.null();
  });

  return it('should intersect on 3', function() {
    return this.multipleNullInListIntersect.exec(this.ctx).should.eql([3]);
});
});

describe('IndexOf', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should return the correct 0-based index when an item is in the list', function() {
    return this.indexOfSecond.exec(this.ctx).should.equal(1);
  });

  it('should work with complex types like tuples', function() {
    return this.indexOfThirdTuple.exec(this.ctx).should.equal(2);
  });

  it('should return the first index when there are multiple matches', function() {
    return this.multipleMatches.exec(this.ctx).should.equal(3);
  });

  it('should return -1 when the item is not in the list', function() {
    return this.itemNotFound.exec(this.ctx).should.equal(-1);
  });

  it('should return null if either arg is null', function() {
    should(this.nullList.exec(this.ctx)).be.null();
    return should(this.nullItem.exec(this.ctx)).be.null();
  });

  return describe('should use equality to determine presence in List', function() {
    it('when code is in list but have undefined displays', function() {
      return this.listCodeUndefined.exec(this.ctx).should.equal(0);
    });

    it('when code is in list', function() {
      return this.listCode.exec(this.ctx).should.equal(0);
    });

    it('when code is not in list', function() {
      return this.listWrongCode.exec(this.ctx).should.equal(-1);
    });

    return it('when code system is not in list', function() {
      return this.listWrongCodeSystem.exec(this.ctx).should.equal(-1);
    });
  });
});


describe('Indexer', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should return the correct item based on the 0-based index', function() {
    return this.secondItem.exec(this.ctx).should.equal('b');
  });

  it('should NOT return null when accessing index 0', function() {
    return should(this.zeroIndex.exec(this.ctx)).not.be.null();
  });

  it('should return null when accessing out of bounds index', function() {
    return should(this.outOfBounds.exec(this.ctx)).be.null();
  });

  return it('should return null if either arg is null', function() {
    should(this.nullList.exec(this.ctx)).be.null();
    return should(this.nullIndexer.exec(this.ctx)).be.null();
  });
});

describe('In', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should execute to true when item is in list', function() {
    return this.isIn.exec(this.ctx).should.be.true();
  });

  it('should execute to false when item is not in list', function() {
    return this.isNotIn.exec(this.ctx).should.be.false();
  });

  it('should execute to true when tuple is in list', function() {
    return this.tupleIsIn.exec(this.ctx).should.be.true();
  });

  it('should execute to false when tuple is not in list', function() {
    return this.tupleIsNotIn.exec(this.ctx).should.be.false();
  });

  it('should return null if list is null', function() {
    return should(this.inNull.exec(this.ctx)).be.null();
  });

  it('should return null if null is in list', function() {
    return should(this.nullIn.exec(this.ctx)).be.null();
  });

  return it('should return null if null is not in list', function() {
    return should(this.nullNotIn.exec(this.ctx)).be.null();
  });
});

describe('Contains', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should execute to true when item is in list', function() {
    return this.isIn.exec(this.ctx).should.be.true();
  });

  it('should execute to false when item is not in list', function() {
    return this.isNotIn.exec(this.ctx).should.be.false();
  });

  it('should execute to true when tuple is in list', function() {
    return this.tupleIsIn.exec(this.ctx).should.be.true();
  });

  it('should execute to false when tuple is not in list', function() {
    return this.tupleIsNotIn.exec(this.ctx).should.be.false();
  });

  it('should return null if null is contained in the list', function() {
    return should(this.nullIn.exec(this.ctx)).be.null();
  });

  it('should return null if null is not contained in the list', function() {
    return should(this.nullNotIn.exec(this.ctx)).be.null();
  });

  return it('should return null if list is null', function() {
    return should(this.inNull.exec(this.ctx)).be.null();
  });
});

describe('Includes', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should execute to true when sublist is in list', function() {
    return this.isIncluded.exec(this.ctx).should.be.true();
  });

  it('should execute to true when sublist is in list in different order', function() {
    return this.isIncludedReversed.exec(this.ctx).should.be.true();
  });

  it('should execute to true when lists are the same', function() {
    return this.isSame.exec(this.ctx).should.be.true();
  });

  it('should execute to false when sublist is not in list', function() {
    return this.isNotIncluded.exec(this.ctx).should.be.false();
  });

  it('should execute to true when tuple sublist is in list', function() {
    return this.tuplesIncluded.exec(this.ctx).should.be.true();
  });

  it('should execute to false when tuple sublist is not in list', function() {
    return this.tuplesNotIncluded.exec(this.ctx).should.be.false();
  });

  it.skip('should return true if right arg is null', function() {
    // TODO: currently returns false
    return should(this.nullIncluded.exec(this.ctx)).be.true();
  });

  it.skip('should return false if left arg is null', function() {
    // TODO: currently returns null
    return should(this.nullIncludes.exec(this.ctx)).be.false();
  });

  return it('should correctly handle point comparisons', function() {
    this.dayIncluded.exec(this.ctx).should.be.true();
    this.dayNotIncluded.exec(this.ctx).should.be.false();
    this.integerIncluded.exec(this.ctx).should.be.true();
    this.integerNotIncluded.exec(this.ctx).should.be.false();
    this.quantityInList.exec(this.ctx).should.be.true();
    return this.quantityNotInList.exec(this.ctx).should.be.false();
  });
});

describe('IncludedIn', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should execute to true when sublist is in list', function() {
    return this.isIncluded.exec(this.ctx).should.be.true();
  });

  it('should execute to true when sublist is in list in different order', function() {
    return this.isIncludedReversed.exec(this.ctx).should.be.true();
  });

  it('should execute to true when lists are the same', function() {
    return this.isSame.exec(this.ctx).should.be.true();
  });

  it('should execute to false when sublist is not in list', function() {
    return this.isNotIncluded.exec(this.ctx).should.be.false();
  });

  it('should execute to true when tuple sublist is in list', function() {
    return this.tuplesIncluded.exec(this.ctx).should.be.true();
  });

  it('should execute to false when tuple sublist is not in list', function() {
    return this.tuplesNotIncluded.exec(this.ctx).should.be.false();
  });

  it.skip('should return true if left arg is null', function() {
    // TODO: currently returns false
    return should(this.nullIncluded.exec(this.ctx)).be.true();
  });

  it.skip('should return false if right arg is null', function() {
    // TODO: currently returns null
    return should(this.nullIncludes.exec(this.ctx)).be.false();
  });

  return it('should correctly handle point comparisons', function() {
    this.dayIncluded.exec(this.ctx).should.be.true();
    this.dayNotIncluded.exec(this.ctx).should.be.false();
    this.integerIncluded.exec(this.ctx).should.be.true();
    this.integerNotIncluded.exec(this.ctx).should.be.false();
    this.quantityInList.exec(this.ctx).should.be.true();
    return this.quantityNotInList.exec(this.ctx).should.be.false();
  });
});

describe('ProperIncludes', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should execute to true when sublist is in list', function() {
    return this.isIncluded.exec(this.ctx).should.be.true();
  });

  it('should execute to true when sublist is in list in different order', function() {
    return this.isIncludedReversed.exec(this.ctx).should.be.true();
  });

  it('should execute to false when lists are the same', function() {
    return this.isSame.exec(this.ctx).should.be.false();
  });

  it('should execute to false when sublist is not in list', function() {
    return this.isNotIncluded.exec(this.ctx).should.be.false();
  });

  it('should execute to true when tuple sublist is in list', function() {
    return this.tuplesIncluded.exec(this.ctx).should.be.true();
  });

  it('should execute to false when tuple sublist is not in list', function() {
    return this.tuplesNotIncluded.exec(this.ctx).should.be.false();
  });

  // TODO: Support for ProperContains
  return it.skip('should return null if either arg is null', function() {
    should(this.nullIncluded.exec(this.ctx)).be.null();
    return should(this.nullIncludes.exec(this.ctx)).be.null();
  });
});

describe('ProperIncludedIn', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should execute to true when sublist is in list', function() {
    return this.isIncluded.exec(this.ctx).should.be.true();
  });

  it('should execute to true when sublist is in list in different order', function() {
    return this.isIncludedReversed.exec(this.ctx).should.be.true();
  });

  it('should execute to false when lists are the same', function() {
    return this.isSame.exec(this.ctx).should.be.false();
  });

  it('should execute to false when sublist is not in list', function() {
    return this.isNotIncluded.exec(this.ctx).should.be.false();
  });

  it('should execute to true when tuple sublist is in list', function() {
    return this.tuplesIncluded.exec(this.ctx).should.be.true();
  });

  it('should execute to false when tuple sublist is not in list', function() {
    return this.tuplesNotIncluded.exec(this.ctx).should.be.false();
  });

  return it('should return null if either arg is null', function() {
    should(this.nullIncluded.exec(this.ctx)).be.null();
    return should(this.nullIncludes.exec(this.ctx)).be.null();
  });
});

describe('Flatten', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should flatten a list of lists', function() {
    return this.listOfLists.exec(this.ctx).should.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
});

  return it('should return null for a null list', function() {
    return should(this.nullValue.exec(this.ctx)).be.null();
  });
});

describe('Distinct', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should remove duplicates', function() {
    return this.lotsOfDups.exec(this.ctx).should.eql([1, 2, 3, 4, 5]);
});

  it('should do nothing to an already distinct array', function() {
    return this.noDups.exec(this.ctx).should.eql([2, 4, 6, 8, 10]);
});

  it('should remove duplicate tuples', function() {
    return this.dupsTuples.exec(this.ctx).should.eql([{ hello: 'world' }, { hello: 'cleveland' }, { hello: 'dolly'}]);
});

  it('should do nothing to an array of distinct tuples', function() {
    return this.noDupsTuples.exec(this.ctx).should.eql([{ hello: 'world' }, { hello: 'cleveland' }]);
});

  return it('should preserve duplicate null values in original order', function() {
    // define DuplicateNulls: distinct {null, 1, 2, null, 3, 4, 5, null}
    return this.duplicateNulls.exec(this.ctx).should.eql([null, 1, 2, null, 3, 4, 5, null]);
});
});

describe('First', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should get first of a list of numbers', function() {
    return this.numbers.exec(this.ctx).should.equal(1);
  });

  it('should get first of a list of letters', function() {
    return this.letters.exec(this.ctx).should.equal('a');
  });

  it('should get first of a list of lists', function() {
    return this.lists.exec(this.ctx).should.eql(['a','b','c']);
});

  it('should get first of a list of tuples', function() {
    return this.tuples.exec(this.ctx).should.eql({ a: 1, b: 2, c: 3 });
});

  it('should get first of a list of unordered numbers', function() {
    return this.unordered.exec(this.ctx).should.equal(3);
  });

  it('should return null for an empty list', function() {
    return should(this.empty.exec(this.ctx)).be.null();
  });

  return it('should return null for an empty list', function() {
    return should(this.nullValue.exec(this.ctx)).be.null();
  });
});

describe('Last', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should get last of a list of numbers', function() {
    return this.numbers.exec(this.ctx).should.equal(4);
  });

  it('should get last of a list of letters', function() {
    return this.letters.exec(this.ctx).should.equal('c');
  });

  it('should get last of a list of lists', function() {
    return this.lists.exec(this.ctx).should.eql(['d','e','f']);
});

  it('should get last of a list of tuples', function() {
    return this.tuples.exec(this.ctx).should.eql({ a: 24, b: 25, c: 26 });
});

  it('should get last of a list of unordered numbers', function() {
    return this.unordered.exec(this.ctx).should.equal(2);
  });

  it('should return null for an empty list', function() {
    return should(this.empty.exec(this.ctx)).be.null();
  });

  return it('should return null for an empty list', function() {
    return should(this.nullValue.exec(this.ctx)).be.null();
  });
});

describe('Length', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should get length of a list of numbers', function() {
    return this.numbers.exec(this.ctx).should.equal(5);
  });

  it('should get length of a list of lists', function() {
    return this.lists.exec(this.ctx).should.equal(4);
  });

  it('should get length of a list of tuples', function() {
    return this.tuples.exec(this.ctx).should.equal(2);
  });

  it('should get length of an empty list', function() {
    return this.empty.exec(this.ctx).should.equal(0);
  });

  return it('should return null for an empty list', function() {
    return should(this.nullValue.exec(this.ctx)).be.null();
  });
});

describe('ToList', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should return true that 5 is in 5', function() {
    return this.fiveInFive.exec(this.ctx).should.be.true();
  });

  it('should return false that 4 is in 5', function() {
    return this.fourInFive.exec(this.ctx).should.be.false();
  });

  return it('should make null into an empty list', function() {
    return this.lengthOfNull.exec(this.ctx).should.equal(0);
  });
});
