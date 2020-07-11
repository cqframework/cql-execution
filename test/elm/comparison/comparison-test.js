// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/* eslint-env mocha */
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const should = require('should');
const setup = require('../../setup');
const data = require('./data');

// TODO: Comparisons for Dates

describe('Equal', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should be false for 5 = 4', function() {
    return this.aGtB_Int.exec(this.ctx).should.be.false();
  });

  it('should be true for 5 = 5', function() {
    return this.aEqB_Int.exec(this.ctx).should.be.true();
  });

  it('should be false for 5 = 6', function() {
    return this.aLtB_Int.exec(this.ctx).should.be.false();
  });

  it('should identify equal/unequal tuples', function() {
    this.eqTuples.exec(this.ctx).should.be.true();
    return this.uneqTuples.exec(this.ctx).should.be.false();
  });

  it('should identify equal tuples with same fields null', function() {
    return should(this.eqTuplesWithNullFields.exec(this.ctx)).be.true();
  });

  it('should identify unequal tuples with same fields null', function() {
    return should(this.uneqTuplesWithNullFields.exec(this.ctx)).be.false();
  });

  it('should identify uncertian tuples with same fields but one has a null field', function() {
    return should(this.uncertTuplesWithNullFieldOnOne.exec(this.ctx)).be.null();
  });

  it('should identify equal/unequal DateTimes in same timezone', function() {
    this.eqDateTimes.exec(this.ctx).should.be.true();
    return this.uneqDateTimes.exec(this.ctx).should.be.false();
  });

  it('should identify equal/unequal DateTimes in different timezones', function() {
    this.eqDateTimesTZ.exec(this.ctx).should.be.true();
    return this.uneqDateTimesTZ.exec(this.ctx).should.be.false();
  });

  it('should identify equal/unequal DateTimes with null milliseconds', function() {
    this.eqDateTimesNullMs.exec(this.ctx).should.be.true();
    return this.eqDateTimesNullOtherMs.exec(this.ctx).should.be.true();
  });

  it('should identify equal/unequal date times specified to only date level', function() {
    should(this.eqDateTimesOnlyDate.exec(this.ctx)).be.true();
    return should(this.uneqDateTimesOnlyDate.exec(this.ctx)).be.false();
  });

  it('should identify case of a possibly equal date times with differing precisions', function() {
    return should(this.possiblyEqDateTimesOnlyDateOnOne.exec(this.ctx)).be.null();
  });

  it('should identify unequal date times with differing precisions', function() {
    return should(this.uneqDateTimesOnlyDateOnOne.exec(this.ctx)).be.false();
  });

  it('should identify uncertain/unequal DateTimes when there is imprecision', function() {
    should(this.possiblyEqualDateTimes.exec(this.ctx)).be.null();
    return this.impossiblyEqualDateTimes.exec(this.ctx).should.be.false();
  });

  it('should be null for Date and DateTime equality with same year, month, hour', function() {
    return should(this.dateAndDateTimeNull.exec(this.ctx)).be.null();
  });

  it('should be false for Date and DateTime equality with same year, month, hour and additional fields', function() {
    return this.dateAndDateTimeUncertainFalse.exec(this.ctx).should.be.false();
  });

  it('should be null for DateTime and Date equality with same year, month, hour', function() {
    return should(this.dateTimeAndDateNull.exec(this.ctx)).be.null();
  });

  it('should be null for DateTime and Date equality with same year, month, hour and additional fields', function() {
    return this.dateTimeAndDateUncertainFalse.exec(this.ctx).should.be.false();
  });

  it('should be false for Date and DateTime equality with different hour', function() {
    return this.dateAndDateTimeNotEqual.exec(this.ctx).should.be.false();
  });

  it('should be false for DateTime and Date equality with different hour', function() {
    return this.dateTimeAndDateNotEqual.exec(this.ctx).should.be.false();
  });

  it('should be false for 5 m = 4 m', function() {
    return this.aGtB_Quantity.exec(this.ctx).should.be.false();
  });

  it('should be true for 5 m = 5 m', function() {
    return this.aEqB_Quantity.exec(this.ctx).should.be.true();
  });

  it('should be false for 5 m = 6 m', function() {
    return this.aLtB_Quantity.exec(this.ctx).should.be.false();
  });

  it('should be false for 5 m = 5 cm', function() {
    return this.aGtB_Quantity_diff.exec(this.ctx).should.be.false();
  });

  it('should be true for 5 m = 500 cm', function() {
    return this.aEqB_Quantity_diff.exec(this.ctx).should.be.true();
  });

  it('should be false for 5 m = 5 km', function() {
    return this.aLtB_Quantity_diff.exec(this.ctx).should.be.false();
  });

  it('should be null for 5 Cel = 4 m', function() {
    return should(this.aGtB_Quantity_incompatible.exec(this.ctx)).be.null();
  });

  it('should be null for 5 Cel = 5 m', function() {
    return should(this.aEqB_Quantity_incompatible.exec(this.ctx)).be.null();
  });

  it('should be null for 5 Cel = 40 m', function() {
    return should(this.aLtB_Quantity_incompatible.exec(this.ctx)).be.null();
  });

  it('should be true for 10mg:2dL = 15mg:3dL', function() {
    return this.eqRatios.exec(this.ctx).should.be.true();
  });

  return it('should be false for 10mg:2dL = 15mg:4dL', function() {
    return this.uneqRatios.exec(this.ctx).should.be.false();
  });
});

describe('NotEqual', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should be true for 5 <> 4', function() {
    return this.aGtB_Int.exec(this.ctx).should.be.true();
  });

  it('should be false for 5 <> 5', function() {
    return this.aEqB_Int.exec(this.ctx).should.be.false();
  });

  it('should be true for 5 <> 6', function() {
    return this.aLtB_Int.exec(this.ctx).should.be.true();
  });

  it('should identify equal/unequal tuples', function() {
    this.eqTuples.exec(this.ctx).should.be.false();
    return this.uneqTuples.exec(this.ctx).should.be.true();
  });

  it('should identify equal tuples with same fields null', function() {
    return should(this.eqTuplesWithNullFields.exec(this.ctx)).be.false();
  });

  it('should identify unequal tuples with same fields null', function() {
    return should(this.uneqTuplesWithNullFields.exec(this.ctx)).be.true();
  });

  it('should identify uncertian tuples with same fields but one has a null field', function() {
    return should(this.uncertTuplesWithNullFieldOnOne.exec(this.ctx)).be.null();
  });

  it('should identify equal/unequal DateTimes in same timezone', function() {
    this.eqDateTimes.exec(this.ctx).should.be.false();
    return this.uneqDateTimes.exec(this.ctx).should.be.true();
  });

  it('should identify equal/unequal DateTimes in different timezones', function() {
    this.eqDateTimesTZ.exec(this.ctx).should.be.false();
    return this.uneqDateTimesTZ.exec(this.ctx).should.be.true();
  });

  it('should identify equal/unequal DateTimes with null milliseconds', function() {
    this.eqDateTimesNullMs.exec(this.ctx).should.be.false();
    return this.eqDateTimesNullOtherMs.exec(this.ctx).should.be.false();
  });

  it('should identify equal/unequal date times specified to only date level', function() {
    should(this.eqDateTimesOnlyDate.exec(this.ctx)).be.false();
    return should(this.uneqDateTimesOnlyDate.exec(this.ctx)).be.true();
  });

  it('should identify case of a possibly equal date times with differing precisions', function() {
    return should(this.possiblyEqDateTimesOnlyDateOnOne.exec(this.ctx)).be.null();
  });

  it('should identify unequal date times with differing precisions', function() {
    return should(this.uneqDateTimesOnlyDateOnOne.exec(this.ctx)).be.true();
  });

  it('should identify uncertain/unequal DateTimes when there is imprecision', function() {
    should(this.possiblyEqualDateTimes.exec(this.ctx)).be.null();
    return this.impossiblyEqualDateTimes.exec(this.ctx).should.be.true();
  });

  it('should be null for Date and DateTime equality with same year, month, hour', function() {
    return should(this.dateAndDateTimeNull.exec(this.ctx)).be.null();
  });

  it('should be true for date and DateTime with additional fields', function() {
    return this.dateAndDateTimeNotEqual.exec(this.ctx).should.be.true();
  });

  it('should be true for DateTime and Date equality with same year, month, hour', function() {
    return this.dateTimeAndDateNotEqual.exec(this.ctx).should.be.true();
  });

  it('should be null for all DateTime and Date equality with same year, month, hour', function() {
    return should(this.dateTimeAndDateNull.exec(this.ctx)).be.null();
  });

  it('should be true for DateTime and Date equality with same year, month, hour and additional fields', function() {
    return this.dateTimeAndDateUncertainTrue.exec(this.ctx).should.be.true();
  });

  it('should be true for 5 m != 4 m', function() {
    return this.aGtB_Quantity.exec(this.ctx).should.be.true();
  });

  it('should be false for 5 m != 5 m', function() {
    return this.aEqB_Quantity.exec(this.ctx).should.be.false();
  });

  it('should be true for 5 m != 6 m', function() {
    return this.aLtB_Quantity.exec(this.ctx).should.be.true();
  });

  it('should be true for 5 m != 5 cm', function() {
    return this.aGtB_Quantity_diff.exec(this.ctx).should.be.true();
  });

  it('should be false for 5 m != 500 cm ', function() {
    return this.aEqB_Quantity_diff.exec(this.ctx).should.be.false();
  });

  it('should be true for 5 m != 5 km', function() {
    return this.aLtB_Quantity_diff.exec(this.ctx).should.be.true();
  });

  it('should be null for 5 Cel != 4 m', function() {
    return should(this.aGtB_Quantity_incompatible.exec(this.ctx)).be.null();
  });

  it('should be null for 5 Cel != 5 m', function() {
    return should(this.aEqB_Quantity_incompatible.exec(this.ctx)).be.null();
  });

  return it('should be null for 5 Cel != 40 m', function() {
    return should(this.aLtB_Quantity_incompatible.exec(this.ctx)).be.null();
  });
});

describe('Equivalent', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should be false for null ~ 4', function() {
    return this.aNull_BDefined.exec(this.ctx).should.be.false();
  });

  it('should be false for ratio compared to date', function() {
    return this.uneqRatioTypes.exec(this.ctx).should.be.false();
  });

  it('should be false for 5 ~ null', function() {
    return this.aDefined_BNull.exec(this.ctx).should.be.false();
  });

  it.skip('should be true for null ~ null', function() {
    // Skipping because of cql-to-elm issue that will be fixed in 1.4
    return this.aNull_BNull.exec(this.ctx).should.be.true();
  });

  it('should be true for 3 ~ 3', function() {
    return this.aDefined_BDefined.exec(this.ctx).should.be.true();
  });

  it('should be true for FOO ~ foo', function() {
    return this.caseInsensitiveStrings.exec(this.ctx).should.be.true();
  });

  it('should be true for foo bar ~ foo\tbar', function() {
    return this.whiteSpaceTabTrue.exec(this.ctx).should.be.true();
  });

  it('should be true for foo\tbar ~ foo\nbar', function() {
    return this.whiteSpaceTabReturnTrue.exec(this.ctx).should.be.true();
  });

  it('should be false for foo bar ~ foo\t\tbar', function() {
    return this.whiteSpaceIncorrectSpaceFalse.exec(this.ctx).should.be.false();
  });

  it('should be false for foo\t\tbar ~ foo\tbar', function() {
    return this.whiteSpaceIncorrectNumberTabsFalse.exec(this.ctx).should.be.false();
  });

  it('should be false for foo bar ~ foobar', function() {
    return this.whiteSpaceNoSpaceFalse.exec(this.ctx).should.be.false();
  });

  it('should be true for 10mg:2dL ~ 15mg:3dL', function() {
    return this.eqRatios.exec(this.ctx).should.be.true();
  });

  it('should be false for 10mg:2dL ~ 15mg:4dL', function() {
    return this.uneqRatios.exec(this.ctx).should.be.false();
  });

  it('should identify equal/unequal DateTimes in same timezone', function() {
    this.eqDateTimes.exec(this.ctx).should.be.true();
    return this.uneqDateTimes.exec(this.ctx).should.be.false();
  });

  it('should identify equal/unequal DateTimes in different timezones', function() {
    this.eqDateTimesTZ.exec(this.ctx).should.be.true();
    return this.uneqDateTimesTZ.exec(this.ctx).should.be.false();
  });

  it('should identify equal/unequal DateTimes with null milliseconds', function() {
    this.eqDateTimesNullMs.exec(this.ctx).should.be.true();
    return this.eqDateTimesNullOtherMs.exec(this.ctx).should.be.true();
  });

  it('should identify equal/unequal date times specified to only date level', function() {
    should(this.eqDateTimesOnlyDate.exec(this.ctx)).be.true();
    return should(this.uneqDateTimesOnlyDate.exec(this.ctx)).be.false();
  });

  it('should identify case of a possibly equal date times with differing precisions', function() {
    return this.possiblyEqDateTimesOnlyDateOnOne.exec(this.ctx).should.be.false();
  });

  it('should identify unequal date times with differing precisions', function() {
    return should(this.uneqDateTimesOnlyDateOnOne.exec(this.ctx)).be.false();
  });

  it('should identify uncertain/unequal DateTimes when there is imprecision', function() {
    this.possiblyEqualDateTimes.exec(this.ctx).should.be.false();
    return this.impossiblyEqualDateTimes.exec(this.ctx).should.be.false();
  });

  it('should be false for Date and DateTime equality with same year, month, hour', function() {
    return this.dateAndDateTimeNull.exec(this.ctx).should.be.false();
  });

  it('should be false for Date and DateTime equality with same year, month, hour and additional fields', function() {
    return this.dateAndDateTimeUncertainFalse.exec(this.ctx).should.be.false();
  });

  it('should be false for DateTime and Date equality with same year, month, hour', function() {
    return this.dateTimeAndDateNull.exec(this.ctx).should.be.false();
  });

  it('should be null for DateTime and Date equality with same year, month, hour and additional fields', function() {
    return this.dateTimeAndDateUncertainFalse.exec(this.ctx).should.be.false();
  });

  it('should be false for Date and DateTime equality with different hour', function() {
    return this.dateAndDateTimeNotEqual.exec(this.ctx).should.be.false();
  });

  it('should be false for DateTime and Date equality with different hour', function() {
    return this.dateTimeAndDateNotEqual.exec(this.ctx).should.be.false();
  });

  describe('Tuples', function() {
    it.skip('should return true for empty tuples', function() {
      // Note: the spec doesn't explicitly define this, expecting behavior to match null ~ null
      return this.emptyTuples.exec(this.ctx).should.be.true();
    });

    it.skip('should return false if Tuples are not of the same type', function() {});
    // Note: There is currently no way to tell the type of Tuples as they are all treated as Objects

    it('should return true if Tuples are elementwise identical', function() {
      return this.sameTuples.exec(this.ctx).should.be.true();
    });

    it('should return true if Tuples are elementwise identical and null', function() {
      return this.sameTuplesNull.exec(this.ctx).should.be.true();
    });

    it('should return false if Tuples are not elementwise identical', function() {
      return this.differentTuples.exec(this.ctx).should.be.false();
    });

    it('should return true for nested tuples', function() {
      return this.sameNestedTuples.exec(this.ctx).should.be.true();
    });

    return it('should return true for nested tuples', function() {
      return this.sameNestedTuplesNull.exec(this.ctx).should.be.true();
    });
  });

  describe('Lists', function() {
    it('should return true for empty lists', function() {
      return this.emptyLists.exec(this.ctx).should.be.true();
    });

    it('should return false for lists with different types', function() {
      return this.differentTypesLists.exec(this.ctx).should.be.false();
    });

    it('should return false for lists with different number of elements', function() {
      return this.differentLengthLists.exec(this.ctx).should.be.false();
    });

    it('should return false for lists with same elements in different order', function() {
      return this.differentOrderLists.exec(this.ctx).should.be.false();
    });

    it('should return true for lists with same elements in same order', function() {
      return this.sameLists.exec(this.ctx).should.be.true();
    });

    it('should return true for lists with same elements in same order including nulls', function() {
      return this.sameListsNull.exec(this.ctx).should.be.true();
    });

    it('should return true for nested lists with same elements in same order', function() {
      return this.sameNestedLists.exec(this.ctx).should.be.true();
    });

    return it('should return true for nested lists with same elements in same order including nulls', function() {
      return this.sameNestedListsNull.exec(this.ctx).should.be.true();
    });
  });

  describe('Intervals', function() {
    it('should return true for null low/high', function() {
      return this.emptyInterval.exec(this.ctx).should.be.true();
    });

    it('should return false for different Interval point types', function() {
      return this.intervalDifferentPointTypes.exec(this.ctx).should.be.false();
    });

    it('should return false if different starting points', function() {
      return this.intervalDifferentStarts.exec(this.ctx).should.be.false();
    });

    it('should return false if different ending points', function() {
      return this.intervalDifferentEndings.exec(this.ctx).should.be.false();
    });

    return it('should return true for identical Intervals', function() {
      return this.sameIntervals.exec(this.ctx).should.be.true();
    });
  });

  describe('Lists and Tuples', function() {
    it('should return false for List ~ Tuple', function() {
      return this.listAndTuple.exec(this.ctx).should.be.false();
    });

    it('should return false for Tuple ~ List', function() {
      return this.tupleAndList.exec(this.ctx).should.be.false();
    });

    it('should return false for List ~ Tuple with null', function() {
      return this.nullListAndTuple.exec(this.ctx).should.be.false();
    });

    return it('should return false for Tuple with null ~ List', function() {
      return this.tupleAndNullList.exec(this.ctx).should.be.false();
    });
  });

  return describe('Codes and Concepts', function() {
    it('should return true for same Codes', function() {
      return this.sameCodeAndCode.exec(this.ctx).should.be.true();
    });

    it('should return true for same Code and Concept', function() {
      return this.sameCodeAndConcept.exec(this.ctx).should.be.true();
    });

    it('should return true for same Concept and Code', function() {
      return this.sameConceptAndCode.exec(this.ctx).should.be.true();
    });

    it('should return true for same Concept and Concept', function() {
      return this.sameConceptAndConcept.exec(this.ctx).should.be.true();
    });

    it('should return false for same Codes', function() {
      return this.diffCodeAndCode.exec(this.ctx).should.be.false();
    });

    it('should return false for same Code and Concept', function() {
      return this.diffCodeAndConcept.exec(this.ctx).should.be.false();
    });

    it('should return false for same Concept and Code', function() {
      return this.diffConceptAndCode.exec(this.ctx).should.be.false();
    });

    return it('should return false for same Concept and Concept', function() {
      return this.diffConceptAndConcept.exec(this.ctx).should.be.false();
    });
  });
});

describe('Less', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should be false for 5 < 4', function() {
    return this.aGtB_Int.exec(this.ctx).should.be.false();
  });

  it('should be false for 5 < 5', function() {
    return this.aEqB_Int.exec(this.ctx).should.be.false();
  });

  it('should be true for 5 < 6', function() {
    return this.aLtB_Int.exec(this.ctx).should.be.true();
  });

  it('should be false for 5 m < 4 m', function() {
    return this.aGtB_Quantity.exec(this.ctx).should.be.false();
  });

  it('should be false for 5 m < 5 m', function() {
    return this.aEqB_Quantity.exec(this.ctx).should.be.false();
  });

  it('should be false for 5 m < 6 m', function() {
    return this.aLtB_Quantity.exec(this.ctx).should.be.true();
  });

  it('should be true for 5 m < 5 cm', function() {
    return this.aGtB_Quantity_diff.exec(this.ctx).should.be.false();
  });

  it('should be false for 5 m < 50 cm ', function() {
    return this.aEqB_Quantity_diff.exec(this.ctx).should.be.false();
  });

  it('should be false for 5 m < 5 km', function() {
    return this.aLtB_Quantity_diff.exec(this.ctx).should.be.true();
  });

  it('should be null for 5 Cel < 4 m', function() {
    return should(this.aGtB_Quantity_incompatible.exec(this.ctx)).be.null();
  });

  it('should be null for 5 Cel < 5 m', function() {
    return should(this.aEqB_Quantity_incompatible.exec(this.ctx)).be.null();
  });

  return it('should be null for 5 Cel < 40 m', function() {
    return should(this.aLtB_Quantity_incompatible.exec(this.ctx)).be.null();
  });
});

describe('LessOrEqual', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should be false for 5 <= 4', function() {
    return this.aGtB_Int.exec(this.ctx).should.be.false();
  });

  it('should be true for 5 <= 5', function() {
    return this.aEqB_Int.exec(this.ctx).should.be.true();
  });

  it('should be true for 5 <= 6', function() {
    return this.aLtB_Int.exec(this.ctx).should.be.true();
  });

  it('should be true for 5 m <= 4 m', function() {
    return this.aGtB_Quantity.exec(this.ctx).should.be.false();
  });

  it('should be false for 5 m <= 5 m', function() {
    return this.aEqB_Quantity.exec(this.ctx).should.be.true();
  });

  it('should be false for 5 m <= 6 m', function() {
    return this.aLtB_Quantity.exec(this.ctx).should.be.true();
  });

  it('should be true for 5 m <= 5 cm', function() {
    return this.aGtB_Quantity_diff.exec(this.ctx).should.be.false();
  });

  it('should be false for 5 m <= 500 cm ', function() {
    return this.aEqB_Quantity_diff.exec(this.ctx).should.be.true();
  });

  it('should be false for 5 m <= 5 km', function() {
    return this.aLtB_Quantity_diff.exec(this.ctx).should.be.true();
  });

  it('should be null for 5 Cel <= 4 m', function() {
    return should(this.aGtB_Quantity_incompatible.exec(this.ctx)).be.null();
  });

  it('should be null for 5 Cel <= 5 m', function() {
    return should(this.aEqB_Quantity_incompatible.exec(this.ctx)).be.null();
  });

  return it('should be null for 5 Cel <= 40 m', function() {
    return should(this.aLtB_Quantity_incompatible.exec(this.ctx)).be.null();
  });
});

describe('Greater', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should be true for 5 > 4', function() {
    return this.aGtB_Int.exec(this.ctx).should.be.true();
  });

  it('should be false for 5 > 5', function() {
    return this.aEqB_Int.exec(this.ctx).should.be.false();
  });

  it('should be false for 5 > 6', function() {
    return this.aLtB_Int.exec(this.ctx).should.be.false();
  });

  it('should be true for 5 m > 4 m', function() {
    return this.aGtB_Quantity.exec(this.ctx).should.be.true();
  });

  it('should be false for 5 m > 5 m', function() {
    return this.aEqB_Quantity.exec(this.ctx).should.be.false();
  });

  it('should be false for 5 m > 6 m', function() {
    return this.aLtB_Quantity.exec(this.ctx).should.be.false();
  });

  it('should be true for 5 m > 5 cm', function() {
    return this.aGtB_Quantity_diff.exec(this.ctx).should.be.true();
  });

  it('should be false for 5 m > 50 cm ', function() {
    return this.aEqB_Quantity_diff.exec(this.ctx).should.be.false();
  });

  it('should be false for 5 m > 5 km', function() {
    return this.aLtB_Quantity_diff.exec(this.ctx).should.be.false();
  });

  it('should be null for 5 Cel > 4 m', function() {
    return should(this.aGtB_Quantity_incompatible.exec(this.ctx)).be.null();
  });

  it('should be null for 5 Cel > 5 m', function() {
    return should(this.aEqB_Quantity_incompatible.exec(this.ctx)).be.null();
  });

  return it('should be null for 5 Cel > 40 m', function() {
    return should(this.aLtB_Quantity_incompatible.exec(this.ctx)).be.null();
  });
});

describe('GreaterOrEqual', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should be true for 5 >= 4', function() {
    return this.aGtB_Int.exec(this.ctx).should.be.true();
  });

  it('should be true for 5 >= 5', function() {
    return this.aEqB_Int.exec(this.ctx).should.be.true();
  });

  it('should be false for 5 >= 6', function() {
    return this.aLtB_Int.exec(this.ctx).should.be.false();
  });

  it('should be true for 5 m >= 4 m', function() {
    return this.aGtB_Quantity.exec(this.ctx).should.be.true();
  });

  it('should be false for 5 m  >= 5 m', function() {
    return this.aEqB_Quantity.exec(this.ctx).should.be.true();
  });

  it('should be false for 5 m >= 6 m', function() {
    return this.aLtB_Quantity.exec(this.ctx).should.be.false();
  });

  it('should be true for 5 m >= 5 cm', function() {
    return this.aGtB_Quantity_diff.exec(this.ctx).should.be.true();
  });

  it('should be false for 5 m  >= 50 cm ', function() {
    return this.aEqB_Quantity_diff.exec(this.ctx).should.be.true();
  });

  it('should be false for 5 m  >=5 km', function() {
    return this.aLtB_Quantity_diff.exec(this.ctx).should.be.false();
  });

  it('should be null for 5 Cel >= 4 m', function() {
    return should(this.aGtB_Quantity_incompatible.exec(this.ctx)).be.null();
  });

  it('should be null for 5 Cel >= 5 m', function() {
    return should(this.aEqB_Quantity_incompatible.exec(this.ctx)).be.null();
  });

  it('should be null for 5 Cel >= 40 m', function() {
    return should(this.aLtB_Quantity_incompatible.exec(this.ctx)).be.null();
  });

  it('should be null for 100 [nmi_i] / 2 h > 49 mg/[lb_av]', function() {
    return should(this.divideUcum_incompatible.exec(this.ctx)).be.null();
  });

  return it('should be true for 100 mg / 2 [lb_av]  > 49 mg/[lb_av]', function() {
    return this.divideUcum.exec(this.ctx).should.be.true();
  });
});
