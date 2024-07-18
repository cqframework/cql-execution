import should from 'should';
import setup from '../../setup';
import { getLocalIdByPath } from '../../testHelpers';
const data = require('./data');

describe('List', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should execute to an array (ints)', async function () {
    (await this.intList.exec(this.ctx)).should.eql([9, 7, 8]);
  });

  it('should execute to an array (strings)', async function () {
    (await this.stringList.exec(this.ctx)).should.eql(['a', 'bee', 'see']);
  });

  it('should execute to an array (mixed)', async function () {
    (await this.mixedList.exec(this.ctx)).should.eql([1, 'two', 3]);
  });

  it('should execute to an empty array', async function () {
    (await this.emptyList.exec(this.ctx)).should.eql([]);
  });
});

describe('Exists', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should return false for empty list', async function () {
    (await this.emptyList.exec(this.ctx)).should.be.false();
  });

  it('should return true for full list', async function () {
    (await this.fullList.exec(this.ctx)).should.be.true();
  });

  it('should return false for list with only one null', async function () {
    (await this.listWithOneNull.exec(this.ctx)).should.be.false();
  });

  it('should return false for list with only two nulls', async function () {
    (await this.listWithTwoNulls.exec(this.ctx)).should.be.false();
  });

  it('should return true for list starting with null and with non-null elements', async function () {
    (await this.listStartingWithNull.exec(this.ctx)).should.be.true();
  });

  it('should return true for list with null and non-null elements', async function () {
    (await this.listWithNull.exec(this.ctx)).should.be.true();
  });

  // NOTE: This test is misleading due to list promotion of the null to a list with null.
  // Test will remain as it still tests a different list creation method. Additionally, it
  // will be useful if list promotion is disabled.
  it('should return false for null argument', async function () {
    (await this.nullExists.exec(this.ctx)).should.be.false();
  });
});

describe('Equal', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should identify equal lists of integers', async function () {
    (await this.equalIntList.exec(this.ctx)).should.be.true();
  });

  it('should identify unequal lists of integers', async function () {
    (await this.unequalIntList.exec(this.ctx)).should.be.false();
  });

  it('should identify re-ordered lists of integers as unequal', async function () {
    (await this.reverseIntList.exec(this.ctx)).should.be.false();
  });

  it('should identify equal lists of strings', async function () {
    (await this.equalStringList.exec(this.ctx)).should.be.true();
  });

  it('should identify unequal lists of strings', async function () {
    (await this.unequalStringList.exec(this.ctx)).should.be.false();
  });

  it('should identify equal lists of tuples', async function () {
    (await this.equalTupleList.exec(this.ctx)).should.be.true();
  });

  it('should identify unequal lists of tuples', async function () {
    (await this.unequalTupleList.exec(this.ctx)).should.be.false();
  });

  describe('should return null', () => {
    it('when first list has a null element', async function () {
      should(await this.firstListHasNull.exec(this.ctx)).be.null();
    });

    it('when second list has a null element', async function () {
      should(await this.secondListHasNull.exec(this.ctx)).be.null();
    });

    it('when both lists have only null elements', async function () {
      should(await this.bothListsHaveNull.exec(this.ctx)).be.null();
    });
  });
});

describe('NotEqual', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should identify equal lists of integers', async function () {
    (await this.equalIntList.exec(this.ctx)).should.be.false();
  });

  it('should identify unequal lists of integers', async function () {
    (await this.unequalIntList.exec(this.ctx)).should.be.true();
  });

  it('should identify re-ordered lists of integers as unequal', async function () {
    (await this.reverseIntList.exec(this.ctx)).should.be.true();
  });

  it('should identify equal lists of strings', async function () {
    (await this.equalStringList.exec(this.ctx)).should.be.false();
  });

  it('should identify unequal lists of strings', async function () {
    (await this.unequalStringList.exec(this.ctx)).should.be.true();
  });

  it('should identify equal lists of tuples', async function () {
    (await this.equalTupleList.exec(this.ctx)).should.be.false();
  });

  it('should identify unequal lists of tuples', async function () {
    (await this.unequalTupleList.exec(this.ctx)).should.be.true();
  });
});

describe('Union', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should union two lists to a single list', async function () {
    (await this.oneToTen.exec(this.ctx)).should.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('should remove duplicate elements (according to CQL 1.2 spec)', async function () {
    (await this.oneToFiveOverlapped.exec(this.ctx)).should.eql([1, 2, 3, 4, 5]);
  });

  it('should remove duplicate null elements', async function () {
    (await this.oneToFiveOverlappedWithNulls.exec(this.ctx)).should.eql([1, null, 2, 3, 4, 5]);
  });

  it('should not fill in values in a disjoint union', async function () {
    (await this.disjoint.exec(this.ctx)).should.eql([1, 2, 4, 5]);
  });

  it('should return one list for multiple nested unions', async function () {
    (await this.nestedToFifteen.exec(this.ctx)).should.eql([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15
    ]);
  });

  it('should return other list if either arg is null', async function () {
    should(await this.unionNull.exec(this.ctx)).be.eql([1, 2, 3]);
    should(await this.nullUnion.exec(this.ctx)).be.eql([1, 2, 3]);
  });

  it('should return an empty list if both args are null but expected to be lists', async function () {
    (await this.nullUnionNull.exec(this.ctx)).should.be.eql([]);
  });
});

describe('Except', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should remove items in second list', async function () {
    (await this.exceptThreeFour.exec(this.ctx)).should.eql([1, 2, 5]);
  });

  it('should not be commutative', async function () {
    (await this.threeFourExcept.exec(this.ctx)).should.eql([]);
  });

  it('should remove items in second list regardless of order', async function () {
    (await this.exceptFiveThree.exec(this.ctx)).should.eql([1, 2, 4]);
  });

  it('should be a no-op when lists have no common items', async function () {
    (await this.exceptNoOp.exec(this.ctx)).should.eql([1, 2, 3, 4, 5]);
  });

  it('should remove all items when lists are the same', async function () {
    (await this.exceptEverything.exec(this.ctx)).should.eql([]);
  });

  it('should return items in first list without 3 and null', async function () {
    (await this.multipleNullExcept.exec(this.ctx)).should.eql([1, 5, 7]);
  });

  it('should be a no-op when second list is empty', async function () {
    (await this.somethingExceptNothing.exec(this.ctx)).should.eql([1, 2, 3, 4, 5]);
  });

  it('should be a no-op when first list is already empty', async function () {
    (await this.nothingExceptSomething.exec(this.ctx)).should.eql([]);
  });

  it('should except lists of tuples', async function () {
    (await this.exceptTuples.exec(this.ctx)).should.eql([{ a: 1 }, { a: 3 }]);
  });

  it('should return null if first arg is null', async function () {
    should(await this.nullExcept.exec(this.ctx)).be.null();
  });

  it('should return first arg if second arg is null', async function () {
    (await this.exceptNull.exec(this.ctx)).should.eql([1, 2, 3, 4, 5]);
  });
});

describe('Intersect', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should intersect two disjoint lists  to an empty list', async function () {
    (await this.noIntersection.exec(this.ctx)).should.eql([]);
  });

  it('should intersect two lists with a single common element', async function () {
    (await this.intersectOnFive.exec(this.ctx)).should.eql([5]);
  });

  it('should intersect two lists with a single common element even with duplicates', async function () {
    (await this.intersectionOnFourDuplicates.exec(this.ctx)).should.eql([4]);
  });

  it('should intersect two lists with several common elements', async function () {
    (await this.intersectOnEvens.exec(this.ctx)).should.eql([2, 4, 6, 8, 10]);
  });

  it('should intersect two identical lists to the same list', async function () {
    (await this.intersectOnAll.exec(this.ctx)).should.eql([1, 2, 3, 4, 5]);
  });

  it('should intersect multiple lists to only those elements common across all', async function () {
    (await this.nestedIntersects.exec(this.ctx)).should.eql([4, 5]);
  });

  it('should intersect lists of tuples', async function () {
    (await this.intersectTuples.exec(this.ctx)).should.eql([
      { a: 1, b: 'c' },
      { a: 2, b: 'c' }
    ]);
  });

  it('should return null if either arg is null', async function () {
    should(await this.intersectNull.exec(this.ctx)).be.null();
    should(await this.nullIntersect.exec(this.ctx)).be.null();
  });

  it('should intersect two lists that contain null', async function () {
    (await this.multipleNullInListIntersect.exec(this.ctx)).should.eql([3, null]);
  });
});

describe('IndexOf', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should return the correct 0-based index when an item is in the list', async function () {
    (await this.indexOfSecond.exec(this.ctx)).should.equal(1);
    this.ctx.rootContext().localId_context[this.indexOfSecond.source.localId].should.not.be.null();
    this.ctx.rootContext().localId_context[this.indexOfSecond.element.localId].should.not.be.null();
  });

  it('should work with complex types like tuples', async function () {
    (await this.indexOfThirdTuple.exec(this.ctx)).should.equal(2);
  });

  it('should return the first index when there are multiple matches', async function () {
    (await this.multipleMatches.exec(this.ctx)).should.equal(3);
  });

  it('should return -1 when the item is not in the list', async function () {
    (await this.itemNotFound.exec(this.ctx)).should.equal(-1);
  });

  it('should return null if either arg is null', async function () {
    should(await this.nullList.exec(this.ctx)).be.null();
    should(await this.nullItem.exec(this.ctx)).be.null();
  });

  describe('should use equality to determine presence in List', () => {
    it('when code is in list but have undefined displays', async function () {
      (await this.listCodeUndefined.exec(this.ctx)).should.equal(0);
    });

    it('when code is in list', async function () {
      (await this.listCode.exec(this.ctx)).should.equal(0);
    });

    it('when code is not in list', async function () {
      (await this.listWrongCode.exec(this.ctx)).should.equal(-1);
    });

    it('when code system is not in list', async function () {
      (await this.listWrongCodeSystem.exec(this.ctx)).should.equal(-1);
    });
  });
});

describe('Indexer', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should return the correct item based on the 0-based index', async function () {
    (await this.secondItem.exec(this.ctx)).should.equal('b');
  });

  it('should NOT return null when accessing index 0', async function () {
    should(await this.zeroIndex.exec(this.ctx)).not.be.null();
  });

  it('should return null when accessing out of bounds index', async function () {
    should(await this.outOfBounds.exec(this.ctx)).be.null();
  });

  it('should return null if either arg is null', async function () {
    should(await this.nullList.exec(this.ctx)).be.null();
    should(await this.nullIndexer.exec(this.ctx)).be.null();
  });
});

describe('In', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should execute to true when item is in list', async function () {
    (await this.isIn.exec(this.ctx)).should.be.true();
  });

  it('should execute to false when item is not in list', async function () {
    (await this.isNotIn.exec(this.ctx)).should.be.false();
  });

  it('should execute to true when tuple is in list', async function () {
    (await this.tupleIsIn.exec(this.ctx)).should.be.true();
  });

  it('should execute to false when tuple is not in list', async function () {
    (await this.tupleIsNotIn.exec(this.ctx)).should.be.false();
  });

  it('should return false if list is null', async function () {
    (await this.inNull.exec(this.ctx)).should.be.false();
  });

  it('should return null if null is in list', async function () {
    should(await this.nullIn.exec(this.ctx)).be.null();
  });

  it('should return null if null is not in list', async function () {
    should(await this.nullNotIn.exec(this.ctx)).be.null();
  });
});

describe('Contains', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should execute to true when item is in list', async function () {
    (await this.isIn.exec(this.ctx)).should.be.true();
  });

  it('should execute to false when item is not in list', async function () {
    (await this.isNotIn.exec(this.ctx)).should.be.false();
  });

  it('should execute to true when tuple is in list', async function () {
    (await this.tupleIsIn.exec(this.ctx)).should.be.true();
  });

  it('should execute to false when tuple is not in list', async function () {
    (await this.tupleIsNotIn.exec(this.ctx)).should.be.false();
  });

  it('should return null if null is contained in the list', async function () {
    should(await this.nullIn.exec(this.ctx)).be.null();
  });

  it('should return null if null is not contained in the list', async function () {
    should(await this.nullNotIn.exec(this.ctx)).be.null();
  });

  it('should return false if list is null', async function () {
    (await this.inNull.exec(this.ctx)).should.be.false();
  });
});

describe('Includes', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should execute to true when sublist is in list', async function () {
    (await this.isIncluded.exec(this.ctx)).should.be.true();
  });

  it('should execute to true when sublist is in list in different order', async function () {
    (await this.isIncludedReversed.exec(this.ctx)).should.be.true();
  });

  it('should execute to true when lists are the same', async function () {
    (await this.isSame.exec(this.ctx)).should.be.true();
  });

  it('should execute to false when sublist is not in list', async function () {
    (await this.isNotIncluded.exec(this.ctx)).should.be.false();
  });

  it('should execute to true when tuple sublist is in list', async function () {
    (await this.tuplesIncluded.exec(this.ctx)).should.be.true();
  });

  it('should execute to false when tuple sublist is not in list', async function () {
    (await this.tuplesNotIncluded.exec(this.ctx)).should.be.false();
  });

  it.skip('should return true if right arg is null', async function () {
    // TODO: currently returns false
    should(await this.nullIncluded.exec(this.ctx)).be.true();
  });

  it.skip('should return false if left arg is null', async function () {
    // TODO: currently returns null
    should(await this.nullIncludes.exec(this.ctx)).be.false();
  });

  it('should correctly handle point comparisons', async function () {
    (await this.dayIncluded.exec(this.ctx)).should.be.true();
    (await this.dayNotIncluded.exec(this.ctx)).should.be.false();
    (await this.integerIncluded.exec(this.ctx)).should.be.true();
    (await this.integerNotIncluded.exec(this.ctx)).should.be.false();
    (await this.quantityInList.exec(this.ctx)).should.be.true();
    (await this.quantityNotInList.exec(this.ctx)).should.be.false();
  });
});

describe('IncludedIn', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should execute to true when sublist is in list', async function () {
    (await this.isIncluded.exec(this.ctx)).should.be.true();
  });

  it('should execute to true when sublist is in list in different order', async function () {
    (await this.isIncludedReversed.exec(this.ctx)).should.be.true();
  });

  it('should execute to true when lists are the same', async function () {
    (await this.isSame.exec(this.ctx)).should.be.true();
  });

  it('should execute to false when sublist is not in list', async function () {
    (await this.isNotIncluded.exec(this.ctx)).should.be.false();
  });

  it('should execute to true when tuple sublist is in list', async function () {
    (await this.tuplesIncluded.exec(this.ctx)).should.be.true();
  });

  it('should execute to false when tuple sublist is not in list', async function () {
    (await this.tuplesNotIncluded.exec(this.ctx)).should.be.false();
  });

  it.skip('should return true if left arg is null', async function () {
    // TODO: currently returns false
    should(await this.nullIncluded.exec(this.ctx)).be.true();
  });

  it.skip('should return false if right arg is null', async function () {
    // TODO: currently returns null
    should(await this.nullIncludes.exec(this.ctx)).be.false();
  });

  it('should correctly handle point comparisons', async function () {
    (await this.dayIncluded.exec(this.ctx)).should.be.true();
    (await this.dayNotIncluded.exec(this.ctx)).should.be.false();
    (await this.integerIncluded.exec(this.ctx)).should.be.true();
    (await this.integerNotIncluded.exec(this.ctx)).should.be.false();
    (await this.quantityInList.exec(this.ctx)).should.be.true();
    (await this.quantityNotInList.exec(this.ctx)).should.be.false();
  });
});

describe('ProperIncludes', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should execute to true when sublist is in list', async function () {
    (await this.isIncluded.exec(this.ctx)).should.be.true();
  });

  it('should execute to true when sublist is in list in different order', async function () {
    (await this.isIncludedReversed.exec(this.ctx)).should.be.true();
  });

  it('should execute to false when lists are the same', async function () {
    (await this.isSame.exec(this.ctx)).should.be.false();
  });

  it('should execute to false when sublist is not in list', async function () {
    (await this.isNotIncluded.exec(this.ctx)).should.be.false();
  });

  it('should execute to true when tuple sublist is in list', async function () {
    (await this.tuplesIncluded.exec(this.ctx)).should.be.true();
  });

  it('should execute to false when tuple sublist is not in list', async function () {
    (await this.tuplesNotIncluded.exec(this.ctx)).should.be.false();
  });

  // TODO: Support for ProperContains
  it.skip('should return null if either arg is null', async function () {
    should(await this.nullIncluded.exec(this.ctx)).be.null();
    should(await this.nullIncludes.exec(this.ctx)).be.null();
  });
});

describe('ProperIncludedIn', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should execute to true when sublist is in list', async function () {
    (await this.isIncluded.exec(this.ctx)).should.be.true();
  });

  it('should execute to true when sublist is in list in different order', async function () {
    (await this.isIncludedReversed.exec(this.ctx)).should.be.true();
  });

  it('should execute to false when lists are the same', async function () {
    (await this.isSame.exec(this.ctx)).should.be.false();
  });

  it('should execute to false when sublist is not in list', async function () {
    (await this.isNotIncluded.exec(this.ctx)).should.be.false();
  });

  it('should execute to true when tuple sublist is in list', async function () {
    (await this.tuplesIncluded.exec(this.ctx)).should.be.true();
  });

  it('should execute to false when tuple sublist is not in list', async function () {
    (await this.tuplesNotIncluded.exec(this.ctx)).should.be.false();
  });

  it('should return null if either arg is null', async function () {
    should(await this.nullIncluded.exec(this.ctx)).be.null();
    should(await this.nullIncludes.exec(this.ctx)).be.null();
  });
});

describe('Flatten', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should flatten a list of lists', async function () {
    (await this.listOfLists.exec(this.ctx)).should.eql([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      9,
      8,
      7,
      6,
      5,
      4,
      3,
      2,
      1
    ]);
  });

  it('should return null for a null list', async function () {
    should(await this.nullValue.exec(this.ctx)).be.null();
  });
});

describe('Distinct', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should remove duplicates', async function () {
    (await this.lotsOfDups.exec(this.ctx)).should.eql([1, 2, 3, 4, 5]);
  });

  it('should do nothing to an already distinct array', async function () {
    (await this.noDups.exec(this.ctx)).should.eql([2, 4, 6, 8, 10]);
  });

  it('should remove duplicate tuples', async function () {
    (await this.dupsTuples.exec(this.ctx)).should.eql([
      { hello: 'world' },
      { hello: 'cleveland' },
      { hello: 'dolly' }
    ]);
  });

  it('should do nothing to an array of distinct tuples', async function () {
    (await this.noDupsTuples.exec(this.ctx)).should.eql([
      { hello: 'world' },
      { hello: 'cleveland' }
    ]);
  });

  it('should remove duplicate null values', async function () {
    // define DuplicateNulls: distinct {null, 1, 2, null, 3, 4, 5, null}
    (await this.duplicateNulls.exec(this.ctx)).should.eql([null, 1, 2, 3, 4, 5]);
  });
});

describe('First', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should get first of a list of numbers and the localId should exist on the root context', async function () {
    (await this.numbers.exec(this.ctx)).should.equal(1);
    const listLocalId = getLocalIdByPath(data, 'First', 'Numbers', 'source');
    should(listLocalId).not.be.null();
    should(this.ctx.localId_context[listLocalId]).not.be.undefined();
  });

  it('should get first of a list of letters and the localId should exist on the root context', async function () {
    (await this.letters.exec(this.ctx)).should.equal('a');
    const listLocalId = getLocalIdByPath(data, 'First', 'Letters', 'source');
    should(listLocalId).not.be.null();
    should(this.ctx.localId_context[listLocalId]).not.be.undefined();
  });

  it('should get first of a list of lists and the localId should exist on the root context', async function () {
    (await this.lists.exec(this.ctx)).should.eql(['a', 'b', 'c']);
    const listLocalId = getLocalIdByPath(data, 'First', 'Lists', 'source');
    should(listLocalId).not.be.null();
    should(this.ctx.localId_context[listLocalId]).not.be.undefined();
  });

  it('should get first of a list of tuples and the localId should exist on the root context', async function () {
    (await this.tuples.exec(this.ctx)).should.eql({ a: 1, b: 2, c: 3 });
    const listLocalId = getLocalIdByPath(data, 'First', 'Tuples', 'source');
    should(listLocalId).not.be.null();
    should(this.ctx.localId_context[listLocalId]).not.be.undefined();
  });

  it('should get first of a list of unordered numbers and the localId should exist on the root context', async function () {
    (await this.unordered.exec(this.ctx)).should.equal(3);
    const listLocalId = getLocalIdByPath(data, 'First', 'Unordered', 'source');
    should(listLocalId).not.be.null();
    should(this.ctx.localId_context[listLocalId]).not.be.undefined();
  });

  it('should return null for an empty list and the localId should exist on the root context', async function () {
    should(await this.empty.exec(this.ctx)).be.null();
    const listLocalId = getLocalIdByPath(data, 'First', 'Empty', 'source');
    should(listLocalId).not.be.null();
    should(this.ctx.localId_context[listLocalId]).not.be.undefined();
  });

  it('should return null for a null list and the localId should exist on the root context', async function () {
    should(await this.nullValue.exec(this.ctx)).be.null();
    const asLocalId = getLocalIdByPath(data, 'First', 'NullValue', 'source');
    should(asLocalId).not.be.null();
    should(this.ctx.localId_context[asLocalId]).not.be.undefined();
  });
});

describe('Last', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should get last of a list of numbers and the localId should exist on the root context', async function () {
    (await this.numbers.exec(this.ctx)).should.equal(4);
    const listLocalId = getLocalIdByPath(data, 'Last', 'Numbers', 'source');
    should(listLocalId).not.be.null();
    should(this.ctx.localId_context[listLocalId]).not.be.undefined();
  });

  it('should get last of a list of letters and the localId should exist on the root context', async function () {
    (await this.letters.exec(this.ctx)).should.equal('c');
    const listLocalId = getLocalIdByPath(data, 'Last', 'Letters', 'source');
    should(listLocalId).not.be.null();
    should(this.ctx.localId_context[listLocalId]).not.be.undefined();
  });

  it('should get last of a list of lists and the localId should exist on the root context', async function () {
    (await this.lists.exec(this.ctx)).should.eql(['d', 'e', 'f']);
    const listLocalId = getLocalIdByPath(data, 'Last', 'Lists', 'source');
    should(listLocalId).not.be.null();
    should(this.ctx.localId_context[listLocalId]).not.be.undefined();
  });

  it('should get last of a list of tuples and the localId should exist on the root context', async function () {
    (await this.tuples.exec(this.ctx)).should.eql({ a: 24, b: 25, c: 26 });
    const listLocalId = getLocalIdByPath(data, 'Last', 'Tuples', 'source');
    should(listLocalId).not.be.null();
    should(this.ctx.localId_context[listLocalId]).not.be.undefined();
  });

  it('should get last of a list of unordered numbers and the localId should exist on the root context', async function () {
    (await this.unordered.exec(this.ctx)).should.equal(2);
    const listLocalId = getLocalIdByPath(data, 'Last', 'Unordered', 'source');
    should(listLocalId).not.be.null();
    should(this.ctx.localId_context[listLocalId]).not.be.undefined();
  });

  it('should return null for an empty list and the localId should exist on the root context', async function () {
    should(await this.empty.exec(this.ctx)).be.null();
    const listLocalId = getLocalIdByPath(data, 'Last', 'Empty', 'source');
    should(listLocalId).not.be.null();
    should(this.ctx.localId_context[listLocalId]).not.be.undefined();
  });

  it('should return null for a null list and the localId should exist on the root context', async function () {
    should(await this.nullValue.exec(this.ctx)).be.null();
    const asLocalId = getLocalIdByPath(data, 'Last', 'NullValue', 'source');
    should(asLocalId).not.be.null();
    should(this.ctx.localId_context[asLocalId]).not.be.undefined();
  });
});

describe('Length', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should get length of a list of numbers', async function () {
    (await this.numbers.exec(this.ctx)).should.equal(5);
  });

  it('should get length of a list of lists', async function () {
    (await this.lists.exec(this.ctx)).should.equal(4);
  });

  it('should get length of a list of tuples', async function () {
    (await this.tuples.exec(this.ctx)).should.equal(2);
  });

  it('should get length of an empty list', async function () {
    (await this.empty.exec(this.ctx)).should.equal(0);
  });

  it('should return zero for a null list', async function () {
    (await this.nullValue.exec(this.ctx)).should.equal(0);
  });
});

describe('ToList', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should return true that 5 is in 5', async function () {
    (await this.fiveInFive.exec(this.ctx)).should.be.true();
  });

  it('should return false that 4 is in 5', async function () {
    (await this.fourInFive.exec(this.ctx)).should.be.false();
  });

  it('should make null into an empty list', async function () {
    (await this.lengthOfNull.exec(this.ctx)).should.equal(0);
  });
});

describe('Skip', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should skip two elements and the localId of the source and the startIndex should exist on the root context', async function () {
    (await this.skip2.exec(this.ctx)).should.eql([3, 4, 5]);
    const listLocalId = getLocalIdByPath(data, 'Skip', 'Skip2', 'source');
    should(listLocalId).not.be.null();
    should(this.ctx.localId_context[listLocalId]).not.be.undefined();
    const literalLocalId = getLocalIdByPath(data, 'Skip', 'Skip2', 'startIndex');
    should(literalLocalId).not.be.null();
    should(this.ctx.localId_context[literalLocalId]).not.be.undefined();
  });

  it('should not skip when using null and the localId of the source should exist on the root context', async function () {
    (await this.skipNull.exec(this.ctx)).should.eql([1, 3, 5]);
    const listLocalId = getLocalIdByPath(data, 'Skip', 'SkipNull', 'source');
    should(listLocalId).not.be.null();
    should(this.ctx.localId_context[listLocalId]).not.be.undefined();
  });

  it('should return empty list when using negative number and the localId of the source and the startIndex should exist on the root context', async function () {
    (await this.skipEmpty.exec(this.ctx)).should.eql([]);
    const listLocalId = getLocalIdByPath(data, 'Skip', 'SkipEmpty', 'source');
    should(listLocalId).not.be.null();
    should(this.ctx.localId_context[listLocalId]).not.be.undefined();
    const negateLocalId = getLocalIdByPath(data, 'Skip', 'SkipEmpty', 'startIndex');
    should(negateLocalId).not.be.null();
    should(this.ctx.localId_context[negateLocalId]).not.be.undefined();
  });

  it('should return null when given null', async function () {
    should(await this.skipIsNull.exec(this.ctx)).be.null();
  });
});

describe('Tail', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should get tail of list and the localId of the source should exist on the root context', async function () {
    (await this.tail234.exec(this.ctx)).should.eql([2, 3, 4]);
    const listLocalId = getLocalIdByPath(data, 'Tail', 'Tail234', 'source');
    should(listLocalId).not.be.null();
    should(this.ctx.localId_context[listLocalId]).not.be.undefined();
  });

  it('should return empty list when given empty list and the localId of the source should exist on the root context', async function () {
    (await this.tailEmpty.exec(this.ctx)).should.eql([]);
    const listLocalId = getLocalIdByPath(data, 'Tail', 'TailEmpty', 'source');
    should(listLocalId).not.be.null();
    should(this.ctx.localId_context[listLocalId]).not.be.undefined();
  });

  it('should return null when given null', async function () {
    should(await this.tailIsNull.exec(this.ctx)).be.null();
  });
});

describe('Take', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should take two elements and the localId of the source should exist on the root context', async function () {
    (await this.take2.exec(this.ctx)).should.eql([1, 2]);
    const listLocalId = getLocalIdByPath(data, 'Take', 'Take2', 'source');
    should(listLocalId).not.be.null();
    should(this.ctx.localId_context[listLocalId]).not.be.undefined();
  });

  it('should return full list when asked for too many elements and the localId of the source should exist on the root context', async function () {
    (await this.takeTooMany.exec(this.ctx)).should.eql([1, 2]);
    const listLocalId = getLocalIdByPath(data, 'Take', 'TakeTooMany', 'source');
    should(listLocalId).not.be.null();
    should(this.ctx.localId_context[listLocalId]).not.be.undefined();
  });

  it('should return empty list when using null and the localId of the source should exist on the root context', async function () {
    (await this.takeEmpty.exec(this.ctx)).should.eql([]);
    const listLocalId = getLocalIdByPath(data, 'Take', 'TakeEmpty', 'source');
    should(listLocalId).not.be.null();
    should(this.ctx.localId_context[listLocalId]).not.be.undefined();
  });

  it('should return null when given null', async function () {
    should(await this.takeIsNull.exec(this.ctx)).be.null();
  });
});
