import should from 'should';
import setup from '../../setup';
const data = require('./data');

// TODO: Comparisons for Dates

describe('Equal', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should be false for 5 = 4', function () {
    this.aGtB_Int.exec(this.ctx).should.be.false();
  });

  it('should be true for 5 = 5', function () {
    this.aEqB_Int.exec(this.ctx).should.be.true();
  });

  it('should be false for 5 = 6', function () {
    this.aLtB_Int.exec(this.ctx).should.be.false();
  });

  it('should identify equal/unequal tuples', function () {
    this.eqTuples.exec(this.ctx).should.be.true();
    this.uneqTuples.exec(this.ctx).should.be.false();
  });

  it('should identify equal tuples with same fields null', function () {
    should(this.eqTuplesWithNullFields.exec(this.ctx)).be.true();
  });

  it('should identify unequal tuples with same fields null', function () {
    should(this.uneqTuplesWithNullFields.exec(this.ctx)).be.false();
  });

  it('should identify uncertian tuples with same fields but one has a null field', function () {
    should(this.uncertTuplesWithNullFieldOnOne.exec(this.ctx)).be.null();
  });

  it('should identify equal/unequal DateTimes in same timezone', function () {
    this.eqDateTimes.exec(this.ctx).should.be.true();
    this.uneqDateTimes.exec(this.ctx).should.be.false();
  });

  it('should identify equal/unequal DateTimes in different timezones', function () {
    this.eqDateTimesTZ.exec(this.ctx).should.be.true();
    this.uneqDateTimesTZ.exec(this.ctx).should.be.false();
  });

  it('should identify equal/unequal DateTimes with null milliseconds', function () {
    this.eqDateTimesNullMs.exec(this.ctx).should.be.true();
    this.eqDateTimesNullOtherMs.exec(this.ctx).should.be.true();
  });

  it('should identify equal/unequal date times specified to only date level', function () {
    should(this.eqDateTimesOnlyDate.exec(this.ctx)).be.true();
    should(this.uneqDateTimesOnlyDate.exec(this.ctx)).be.false();
  });

  it('should identify case of a possibly equal date times with differing precisions', function () {
    should(this.possiblyEqDateTimesOnlyDateOnOne.exec(this.ctx)).be.null();
  });

  it('should identify unequal date times with differing precisions', function () {
    should(this.uneqDateTimesOnlyDateOnOne.exec(this.ctx)).be.false();
  });

  it('should identify uncertain/unequal DateTimes when there is imprecision', function () {
    should(this.possiblyEqualDateTimes.exec(this.ctx)).be.null();
    this.impossiblyEqualDateTimes.exec(this.ctx).should.be.false();
  });

  it('should be null for Date and DateTime equality with same year, month, hour', function () {
    should(this.dateAndDateTimeNull.exec(this.ctx)).be.null();
  });

  it('should be false for Date and DateTime equality with same year, month, hour and additional fields', function () {
    this.dateAndDateTimeUncertainFalse.exec(this.ctx).should.be.false();
  });

  it('should be null for DateTime and Date equality with same year, month, hour', function () {
    should(this.dateTimeAndDateNull.exec(this.ctx)).be.null();
  });

  it('should be null for DateTime and Date equality with same year, month, hour and additional fields', function () {
    this.dateTimeAndDateUncertainFalse.exec(this.ctx).should.be.false();
  });

  it('should be false for Date and DateTime equality with different hour', function () {
    this.dateAndDateTimeNotEqual.exec(this.ctx).should.be.false();
  });

  it('should be false for DateTime and Date equality with different hour', function () {
    this.dateTimeAndDateNotEqual.exec(this.ctx).should.be.false();
  });

  it('should be false for 5 m = 4 m', function () {
    this.aGtB_Quantity.exec(this.ctx).should.be.false();
  });

  it('should be true for 5 m = 5 m', function () {
    this.aEqB_Quantity.exec(this.ctx).should.be.true();
  });

  it('should be false for 5 m = 6 m', function () {
    this.aLtB_Quantity.exec(this.ctx).should.be.false();
  });

  it('should be false for 5 m = 5 cm', function () {
    this.aGtB_Quantity_diff.exec(this.ctx).should.be.false();
  });

  it('should be true for 5 m = 500 cm', function () {
    this.aEqB_Quantity_diff.exec(this.ctx).should.be.true();
  });

  it('should be false for 5 m = 5 km', function () {
    this.aLtB_Quantity_diff.exec(this.ctx).should.be.false();
  });

  it('should be null for 5 Cel = 4 m', function () {
    should(this.aGtB_Quantity_incompatible.exec(this.ctx)).be.null();
  });

  it('should be null for 5 Cel = 5 m', function () {
    should(this.aEqB_Quantity_incompatible.exec(this.ctx)).be.null();
  });

  it('should be null for 5 Cel = 40 m', function () {
    should(this.aLtB_Quantity_incompatible.exec(this.ctx)).be.null();
  });

  it('should be true for 10mg:2dL = 15mg:3dL', function () {
    this.eqRatios.exec(this.ctx).should.be.true();
  });

  it('should be false for 10mg:2dL = 15mg:4dL', function () {
    this.uneqRatios.exec(this.ctx).should.be.false();
  });
});

describe('NotEqual', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should be true for 5 <> 4', function () {
    this.aGtB_Int.exec(this.ctx).should.be.true();
  });

  it('should be false for 5 <> 5', function () {
    this.aEqB_Int.exec(this.ctx).should.be.false();
  });

  it('should be true for 5 <> 6', function () {
    this.aLtB_Int.exec(this.ctx).should.be.true();
  });

  it('should identify equal/unequal tuples', function () {
    this.eqTuples.exec(this.ctx).should.be.false();
    this.uneqTuples.exec(this.ctx).should.be.true();
  });

  it('should identify equal tuples with same fields null', function () {
    should(this.eqTuplesWithNullFields.exec(this.ctx)).be.false();
  });

  it('should identify unequal tuples with same fields null', function () {
    should(this.uneqTuplesWithNullFields.exec(this.ctx)).be.true();
  });

  it('should identify uncertian tuples with same fields but one has a null field', function () {
    should(this.uncertTuplesWithNullFieldOnOne.exec(this.ctx)).be.null();
  });

  it('should identify equal/unequal DateTimes in same timezone', function () {
    this.eqDateTimes.exec(this.ctx).should.be.false();
    this.uneqDateTimes.exec(this.ctx).should.be.true();
  });

  it('should identify equal/unequal DateTimes in different timezones', function () {
    this.eqDateTimesTZ.exec(this.ctx).should.be.false();
    this.uneqDateTimesTZ.exec(this.ctx).should.be.true();
  });

  it('should identify equal/unequal DateTimes with null milliseconds', function () {
    this.eqDateTimesNullMs.exec(this.ctx).should.be.false();
    this.eqDateTimesNullOtherMs.exec(this.ctx).should.be.false();
  });

  it('should identify equal/unequal date times specified to only date level', function () {
    should(this.eqDateTimesOnlyDate.exec(this.ctx)).be.false();
    should(this.uneqDateTimesOnlyDate.exec(this.ctx)).be.true();
  });

  it('should identify case of a possibly equal date times with differing precisions', function () {
    should(this.possiblyEqDateTimesOnlyDateOnOne.exec(this.ctx)).be.null();
  });

  it('should identify unequal date times with differing precisions', function () {
    should(this.uneqDateTimesOnlyDateOnOne.exec(this.ctx)).be.true();
  });

  it('should identify uncertain/unequal DateTimes when there is imprecision', function () {
    should(this.possiblyEqualDateTimes.exec(this.ctx)).be.null();
    this.impossiblyEqualDateTimes.exec(this.ctx).should.be.true();
  });

  it('should be null for Date and DateTime equality with same year, month, hour', function () {
    should(this.dateAndDateTimeNull.exec(this.ctx)).be.null();
  });

  it('should be true for date and DateTime with additional fields', function () {
    this.dateAndDateTimeNotEqual.exec(this.ctx).should.be.true();
  });

  it('should be true for DateTime and Date equality with same year, month, hour', function () {
    this.dateTimeAndDateNotEqual.exec(this.ctx).should.be.true();
  });

  it('should be null for all DateTime and Date equality with same year, month, hour', function () {
    should(this.dateTimeAndDateNull.exec(this.ctx)).be.null();
  });

  it('should be true for DateTime and Date equality with same year, month, hour and additional fields', function () {
    this.dateTimeAndDateUncertainTrue.exec(this.ctx).should.be.true();
  });

  it('should be true for 5 m != 4 m', function () {
    this.aGtB_Quantity.exec(this.ctx).should.be.true();
  });

  it('should be false for 5 m != 5 m', function () {
    this.aEqB_Quantity.exec(this.ctx).should.be.false();
  });

  it('should be true for 5 m != 6 m', function () {
    this.aLtB_Quantity.exec(this.ctx).should.be.true();
  });

  it('should be true for 5 m != 5 cm', function () {
    this.aGtB_Quantity_diff.exec(this.ctx).should.be.true();
  });

  it('should be false for 5 m != 500 cm ', function () {
    this.aEqB_Quantity_diff.exec(this.ctx).should.be.false();
  });

  it('should be true for 5 m != 5 km', function () {
    this.aLtB_Quantity_diff.exec(this.ctx).should.be.true();
  });

  it('should be null for 5 Cel != 4 m', function () {
    should(this.aGtB_Quantity_incompatible.exec(this.ctx)).be.null();
  });

  it('should be null for 5 Cel != 5 m', function () {
    should(this.aEqB_Quantity_incompatible.exec(this.ctx)).be.null();
  });

  it('should be null for 5 Cel != 40 m', function () {
    should(this.aLtB_Quantity_incompatible.exec(this.ctx)).be.null();
  });
});

describe('Equivalent', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should be false for null ~ 4', function () {
    this.aNull_BDefined.exec(this.ctx).should.be.false();
  });

  it('should be false for ratio compared to date', function () {
    this.uneqRatioTypes.exec(this.ctx).should.be.false();
  });

  it('should be false for 5 ~ null', function () {
    this.aDefined_BNull.exec(this.ctx).should.be.false();
  });

  it.skip('should be true for null ~ null', function () {
    // Skipping because of cql-to-elm issue that will be fixed in 1.4
    this.aNull_BNull.exec(this.ctx).should.be.true();
  });

  it('should be true for 3 ~ 3', function () {
    this.aDefined_BDefined.exec(this.ctx).should.be.true();
  });

  it('should be true for FOO ~ foo', function () {
    this.caseInsensitiveStrings.exec(this.ctx).should.be.true();
  });

  it('should be true for foo bar ~ foo\tbar', function () {
    this.whiteSpaceTabTrue.exec(this.ctx).should.be.true();
  });

  it('should be true for foo\tbar ~ foo\nbar', function () {
    this.whiteSpaceTabReturnTrue.exec(this.ctx).should.be.true();
  });

  it('should be false for foo bar ~ foo\t\tbar', function () {
    this.whiteSpaceIncorrectSpaceFalse.exec(this.ctx).should.be.false();
  });

  it('should be false for foo\t\tbar ~ foo\tbar', function () {
    this.whiteSpaceIncorrectNumberTabsFalse.exec(this.ctx).should.be.false();
  });

  it('should be false for foo bar ~ foobar', function () {
    this.whiteSpaceNoSpaceFalse.exec(this.ctx).should.be.false();
  });

  it('should be true for 10mg:2dL ~ 15mg:3dL', function () {
    this.eqRatios.exec(this.ctx).should.be.true();
  });

  it('should be false for 10mg:2dL ~ 15mg:4dL', function () {
    this.uneqRatios.exec(this.ctx).should.be.false();
  });

  it('should identify equal/unequal DateTimes in same timezone', function () {
    this.eqDateTimes.exec(this.ctx).should.be.true();
    this.uneqDateTimes.exec(this.ctx).should.be.false();
  });

  it('should identify equal/unequal DateTimes in different timezones', function () {
    this.eqDateTimesTZ.exec(this.ctx).should.be.true();
    this.uneqDateTimesTZ.exec(this.ctx).should.be.false();
  });

  it('should identify equal/unequal DateTimes with null milliseconds', function () {
    this.eqDateTimesNullMs.exec(this.ctx).should.be.true();
    this.eqDateTimesNullOtherMs.exec(this.ctx).should.be.true();
  });

  it('should identify equal/unequal date times specified to only date level', function () {
    should(this.eqDateTimesOnlyDate.exec(this.ctx)).be.true();
    should(this.uneqDateTimesOnlyDate.exec(this.ctx)).be.false();
  });

  it('should identify case of a possibly equal date times with differing precisions', function () {
    this.possiblyEqDateTimesOnlyDateOnOne.exec(this.ctx).should.be.false();
  });

  it('should identify unequal date times with differing precisions', function () {
    should(this.uneqDateTimesOnlyDateOnOne.exec(this.ctx)).be.false();
  });

  it('should identify uncertain/unequal DateTimes when there is imprecision', function () {
    this.possiblyEqualDateTimes.exec(this.ctx).should.be.false();
    this.impossiblyEqualDateTimes.exec(this.ctx).should.be.false();
  });

  it('should be false for Date and DateTime equality with same year, month, hour', function () {
    this.dateAndDateTimeNull.exec(this.ctx).should.be.false();
  });

  it('should be false for Date and DateTime equality with same year, month, hour and additional fields', function () {
    this.dateAndDateTimeUncertainFalse.exec(this.ctx).should.be.false();
  });

  it('should be false for DateTime and Date equality with same year, month, hour', function () {
    this.dateTimeAndDateNull.exec(this.ctx).should.be.false();
  });

  it('should be null for DateTime and Date equality with same year, month, hour and additional fields', function () {
    this.dateTimeAndDateUncertainFalse.exec(this.ctx).should.be.false();
  });

  it('should be false for Date and DateTime equality with different hour', function () {
    this.dateAndDateTimeNotEqual.exec(this.ctx).should.be.false();
  });

  it('should be false for DateTime and Date equality with different hour', function () {
    this.dateTimeAndDateNotEqual.exec(this.ctx).should.be.false();
  });

  describe('Tuples', () => {
    it.skip('should return true for empty tuples', function () {
      // Note: the spec doesn't explicitly define this, expecting behavior to match null ~ null
      this.emptyTuples.exec(this.ctx).should.be.true();
    });

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    it.skip('should return false if Tuples are not of the same type', function () {});
    // Note: There is currently no way to tell the type of Tuples as they are all treated as Objects

    it('should return true if Tuples are elementwise identical', function () {
      this.sameTuples.exec(this.ctx).should.be.true();
    });

    it('should return true if Tuples are elementwise identical and null', function () {
      this.sameTuplesNull.exec(this.ctx).should.be.true();
    });

    it('should return false if Tuples are not elementwise identical', function () {
      this.differentTuples.exec(this.ctx).should.be.false();
    });

    it('should return true for nested tuples', function () {
      this.sameNestedTuples.exec(this.ctx).should.be.true();
    });

    it('should return true for nested tuples', function () {
      this.sameNestedTuplesNull.exec(this.ctx).should.be.true();
    });
  });

  describe('Lists', () => {
    it('should return true for empty lists', function () {
      this.emptyLists.exec(this.ctx).should.be.true();
    });

    it('should return false for lists with different types', function () {
      this.differentTypesLists.exec(this.ctx).should.be.false();
    });

    it('should return false for lists with different number of elements', function () {
      this.differentLengthLists.exec(this.ctx).should.be.false();
    });

    it('should return false for lists with same elements in different order', function () {
      this.differentOrderLists.exec(this.ctx).should.be.false();
    });

    it('should return true for lists with same elements in same order', function () {
      this.sameLists.exec(this.ctx).should.be.true();
    });

    it('should return true for lists with same elements in same order including nulls', function () {
      this.sameListsNull.exec(this.ctx).should.be.true();
    });

    it('should return true for nested lists with same elements in same order', function () {
      this.sameNestedLists.exec(this.ctx).should.be.true();
    });

    it('should return true for nested lists with same elements in same order including nulls', function () {
      this.sameNestedListsNull.exec(this.ctx).should.be.true();
    });
  });

  describe('Intervals', () => {
    it('should return true for null low/high', function () {
      this.emptyInterval.exec(this.ctx).should.be.true();
    });

    it('should return false for different Interval point types', function () {
      this.intervalDifferentPointTypes.exec(this.ctx).should.be.false();
    });

    it('should return false if different starting points', function () {
      this.intervalDifferentStarts.exec(this.ctx).should.be.false();
    });

    it('should return false if different ending points', function () {
      this.intervalDifferentEndings.exec(this.ctx).should.be.false();
    });

    it('should return true for identical Intervals', function () {
      this.sameIntervals.exec(this.ctx).should.be.true();
    });
  });

  describe('Lists and Tuples', () => {
    it('should return false for List ~ Tuple', function () {
      this.listAndTuple.exec(this.ctx).should.be.false();
    });

    it('should return false for Tuple ~ List', function () {
      this.tupleAndList.exec(this.ctx).should.be.false();
    });

    it('should return false for List ~ Tuple with null', function () {
      this.nullListAndTuple.exec(this.ctx).should.be.false();
    });

    it('should return false for Tuple with null ~ List', function () {
      this.tupleAndNullList.exec(this.ctx).should.be.false();
    });
  });

  describe('Codes and Concepts', () => {
    it('should return true for same Codes', function () {
      this.sameCodeAndCode.exec(this.ctx).should.be.true();
    });

    it('should return true for same Code and Concept', function () {
      this.sameCodeAndConcept.exec(this.ctx).should.be.true();
    });

    it('should return true for same Concept and Code', function () {
      this.sameConceptAndCode.exec(this.ctx).should.be.true();
    });

    it('should return true for same Concept and Concept', function () {
      this.sameConceptAndConcept.exec(this.ctx).should.be.true();
    });

    it('should return false for same Codes', function () {
      this.diffCodeAndCode.exec(this.ctx).should.be.false();
    });

    it('should return false for same Code and Concept', function () {
      this.diffCodeAndConcept.exec(this.ctx).should.be.false();
    });

    it('should return false for same Concept and Code', function () {
      this.diffConceptAndCode.exec(this.ctx).should.be.false();
    });

    it('should return false for same Concept and Concept', function () {
      this.diffConceptAndConcept.exec(this.ctx).should.be.false();
    });
  });
});

describe('Less', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should be false for 5 < 4', function () {
    this.aGtB_Int.exec(this.ctx).should.be.false();
  });

  it('should be false for 5 < 5', function () {
    this.aEqB_Int.exec(this.ctx).should.be.false();
  });

  it('should be true for 5 < 6', function () {
    this.aLtB_Int.exec(this.ctx).should.be.true();
  });

  it('should be false for 5 m < 4 m', function () {
    this.aGtB_Quantity.exec(this.ctx).should.be.false();
  });

  it('should be false for 5 m < 5 m', function () {
    this.aEqB_Quantity.exec(this.ctx).should.be.false();
  });

  it('should be false for 5 m < 6 m', function () {
    this.aLtB_Quantity.exec(this.ctx).should.be.true();
  });

  it('should be true for 5 m < 5 cm', function () {
    this.aGtB_Quantity_diff.exec(this.ctx).should.be.false();
  });

  it('should be false for 5 m < 50 cm ', function () {
    this.aEqB_Quantity_diff.exec(this.ctx).should.be.false();
  });

  it('should be false for 5 m < 5 km', function () {
    this.aLtB_Quantity_diff.exec(this.ctx).should.be.true();
  });

  it('should be null for 5 Cel < 4 m', function () {
    should(this.aGtB_Quantity_incompatible.exec(this.ctx)).be.null();
  });

  it('should be null for 5 Cel < 5 m', function () {
    should(this.aEqB_Quantity_incompatible.exec(this.ctx)).be.null();
  });

  it('should be null for 5 Cel < 40 m', function () {
    should(this.aLtB_Quantity_incompatible.exec(this.ctx)).be.null();
  });
});

describe('LessOrEqual', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should be false for 5 <= 4', function () {
    this.aGtB_Int.exec(this.ctx).should.be.false();
  });

  it('should be true for 5 <= 5', function () {
    this.aEqB_Int.exec(this.ctx).should.be.true();
  });

  it('should be true for 5 <= 6', function () {
    this.aLtB_Int.exec(this.ctx).should.be.true();
  });

  it('should be true for 5 m <= 4 m', function () {
    this.aGtB_Quantity.exec(this.ctx).should.be.false();
  });

  it('should be false for 5 m <= 5 m', function () {
    this.aEqB_Quantity.exec(this.ctx).should.be.true();
  });

  it('should be false for 5 m <= 6 m', function () {
    this.aLtB_Quantity.exec(this.ctx).should.be.true();
  });

  it('should be true for 5 m <= 5 cm', function () {
    this.aGtB_Quantity_diff.exec(this.ctx).should.be.false();
  });

  it('should be false for 5 m <= 500 cm ', function () {
    this.aEqB_Quantity_diff.exec(this.ctx).should.be.true();
  });

  it('should be false for 5 m <= 5 km', function () {
    this.aLtB_Quantity_diff.exec(this.ctx).should.be.true();
  });

  it('should be null for 5 Cel <= 4 m', function () {
    should(this.aGtB_Quantity_incompatible.exec(this.ctx)).be.null();
  });

  it('should be null for 5 Cel <= 5 m', function () {
    should(this.aEqB_Quantity_incompatible.exec(this.ctx)).be.null();
  });

  it('should be null for 5 Cel <= 40 m', function () {
    should(this.aLtB_Quantity_incompatible.exec(this.ctx)).be.null();
  });
});

describe('Greater', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should be true for 5 > 4', function () {
    this.aGtB_Int.exec(this.ctx).should.be.true();
  });

  it('should be false for 5 > 5', function () {
    this.aEqB_Int.exec(this.ctx).should.be.false();
  });

  it('should be false for 5 > 6', function () {
    this.aLtB_Int.exec(this.ctx).should.be.false();
  });

  it('should be true for 5 m > 4 m', function () {
    this.aGtB_Quantity.exec(this.ctx).should.be.true();
  });

  it('should be false for 5 m > 5 m', function () {
    this.aEqB_Quantity.exec(this.ctx).should.be.false();
  });

  it('should be false for 5 m > 6 m', function () {
    this.aLtB_Quantity.exec(this.ctx).should.be.false();
  });

  it('should be true for 5 m > 5 cm', function () {
    this.aGtB_Quantity_diff.exec(this.ctx).should.be.true();
  });

  it('should be false for 5 m > 50 cm ', function () {
    this.aEqB_Quantity_diff.exec(this.ctx).should.be.false();
  });

  it('should be false for 5 m > 5 km', function () {
    this.aLtB_Quantity_diff.exec(this.ctx).should.be.false();
  });

  it('should be null for 5 Cel > 4 m', function () {
    should(this.aGtB_Quantity_incompatible.exec(this.ctx)).be.null();
  });

  it('should be null for 5 Cel > 5 m', function () {
    should(this.aEqB_Quantity_incompatible.exec(this.ctx)).be.null();
  });

  it('should be null for 5 Cel > 40 m', function () {
    should(this.aLtB_Quantity_incompatible.exec(this.ctx)).be.null();
  });
});

describe('GreaterOrEqual', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should be true for 5 >= 4', function () {
    this.aGtB_Int.exec(this.ctx).should.be.true();
  });

  it('should be true for 5 >= 5', function () {
    this.aEqB_Int.exec(this.ctx).should.be.true();
  });

  it('should be false for 5 >= 6', function () {
    this.aLtB_Int.exec(this.ctx).should.be.false();
  });

  it('should be true for 5 m >= 4 m', function () {
    this.aGtB_Quantity.exec(this.ctx).should.be.true();
  });

  it('should be false for 5 m  >= 5 m', function () {
    this.aEqB_Quantity.exec(this.ctx).should.be.true();
  });

  it('should be false for 5 m >= 6 m', function () {
    this.aLtB_Quantity.exec(this.ctx).should.be.false();
  });

  it('should be true for 5 m >= 5 cm', function () {
    this.aGtB_Quantity_diff.exec(this.ctx).should.be.true();
  });

  it('should be false for 5 m  >= 50 cm ', function () {
    this.aEqB_Quantity_diff.exec(this.ctx).should.be.true();
  });

  it('should be false for 5 m  >=5 km', function () {
    this.aLtB_Quantity_diff.exec(this.ctx).should.be.false();
  });

  it('should be null for 5 Cel >= 4 m', function () {
    should(this.aGtB_Quantity_incompatible.exec(this.ctx)).be.null();
  });

  it('should be null for 5 Cel >= 5 m', function () {
    should(this.aEqB_Quantity_incompatible.exec(this.ctx)).be.null();
  });

  it('should be null for 5 Cel >= 40 m', function () {
    should(this.aLtB_Quantity_incompatible.exec(this.ctx)).be.null();
  });

  it('should be null for 100 [nmi_i] / 2 h > 49 mg/[lb_av]', function () {
    should(this.divideUcum_incompatible.exec(this.ctx)).be.null();
  });

  it('should be true for 100 mg / 2 [lb_av]  > 49 mg/[lb_av]', function () {
    this.divideUcum.exec(this.ctx).should.be.true();
  });
});
