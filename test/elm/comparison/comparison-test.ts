import should from 'should';
import setup from '../../setup';
const data = require('./data');
const vsets = require('./valuesets');

// TODO: Comparisons for Dates

describe('Equal', () => {
  beforeEach(function () {
    setup(this, data, [], vsets);
  });

  it('should be false for 5 = 4', async function () {
    (await this.aGtB_Int.exec(this.ctx)).should.be.false();
  });

  it('should be true for 5 = 5', async function () {
    (await this.aEqB_Int.exec(this.ctx)).should.be.true();
  });

  it('should be false for 5 = 6', async function () {
    (await this.aLtB_Int.exec(this.ctx)).should.be.false();
  });

  it('should identify equal/unequal tuples', async function () {
    (await this.eqTuples.exec(this.ctx)).should.be.true();
    (await this.uneqTuples.exec(this.ctx)).should.be.false();
  });

  it('should identify equal tuples with same fields null', async function () {
    should(await this.eqTuplesWithNullFields.exec(this.ctx)).be.true();
  });

  it('should identify unequal tuples with same fields null', async function () {
    should(await this.uneqTuplesWithNullFields.exec(this.ctx)).be.false();
  });

  it('should identify uncertian tuples with same fields but one has a null field', async function () {
    should(await this.uncertTuplesWithNullFieldOnOne.exec(this.ctx)).be.null();
    should(await this.uncertTuplesWithNullFieldOnFirstOne.exec(this.ctx)).be.null();
  });

  it('should identify unequal tuples with different values but one has a null field', async function () {
    should(await this.uneqTuplesWithNullFieldOnOne.exec(this.ctx)).be.false();
    should(await this.uneqTuplesWithNullFieldOnFirstOne.exec(this.ctx)).be.false();
  });

  it('should identify equal/unequal DateTimes in same timezone', async function () {
    (await this.eqDateTimes.exec(this.ctx)).should.be.true();
    (await this.uneqDateTimes.exec(this.ctx)).should.be.false();
  });

  it('should identify equal/unequal DateTimes in different timezones', async function () {
    (await this.eqDateTimesTZ.exec(this.ctx)).should.be.true();
    (await this.uneqDateTimesTZ.exec(this.ctx)).should.be.false();
  });

  it('should identify equal/unequal DateTimes with null milliseconds', async function () {
    (await this.eqDateTimesNullMs.exec(this.ctx)).should.be.true();
    (await this.eqDateTimesNullOtherMs.exec(this.ctx)).should.be.true();
  });

  it('should identify equal/unequal date times specified to only date level', async function () {
    should(await this.eqDateTimesOnlyDate.exec(this.ctx)).be.true();
    should(await this.uneqDateTimesOnlyDate.exec(this.ctx)).be.false();
  });

  it('should identify case of a possibly equal date times with differing precisions', async function () {
    should(await this.possiblyEqDateTimesOnlyDateOnOne.exec(this.ctx)).be.null();
  });

  it('should identify unequal date times with differing precisions', async function () {
    should(await this.uneqDateTimesOnlyDateOnOne.exec(this.ctx)).be.false();
  });

  it('should identify uncertain/unequal DateTimes when there is imprecision', async function () {
    should(await this.possiblyEqualDateTimes.exec(this.ctx)).be.null();
    (await this.impossiblyEqualDateTimes.exec(this.ctx)).should.be.false();
  });

  it('should be true for Date and DateTime equality with same year, month, hour', async function () {
    (await this.dateAndDateTimeTrue.exec(this.ctx)).should.be.true();
  });

  it('should be null for Date and DateTime equality with same year, month, hour and additional fields', async function () {
    should(await this.dateAndDateTimeUncertainNull.exec(this.ctx)).be.null();
  });

  it('should be true for DateTime and Date equality with same year, month, hour', async function () {
    (await this.dateTimeAndDateTrue.exec(this.ctx)).should.be.true();
  });

  it('should be null for DateTime and Date equality with same year, month, hour and additional fields', async function () {
    should(await this.dateTimeAndDateUncertainNull.exec(this.ctx)).be.null();
  });

  it('should be false for DateTime and Date equality with different hour', async function () {
    (await this.dateTimeAndDateNotEqual.exec(this.ctx)).should.be.false();
  });

  it('should be false for Date and DateTime equality with different hour', async function () {
    (await this.dateAndDateTimeNotEqual.exec(this.ctx)).should.be.false();
  });

  it('should be false for DateTime and Date equality with different hour', async function () {
    (await this.dateTimeAndDateNotEqual.exec(this.ctx)).should.be.false();
  });

  it('should be false for 5 m = 4 m', async function () {
    (await this.aGtB_Quantity.exec(this.ctx)).should.be.false();
  });

  it('should be true for 5 m = 5 m', async function () {
    (await this.aEqB_Quantity.exec(this.ctx)).should.be.true();
  });

  it('should be false for 5 m = 6 m', async function () {
    (await this.aLtB_Quantity.exec(this.ctx)).should.be.false();
  });

  it('should be false for 5 m = 5 cm', async function () {
    (await this.aGtB_Quantity_diff.exec(this.ctx)).should.be.false();
  });

  it('should be true for 5 m = 500 cm', async function () {
    (await this.aEqB_Quantity_diff.exec(this.ctx)).should.be.true();
  });

  it('should be false for 5 m = 5 km', async function () {
    (await this.aLtB_Quantity_diff.exec(this.ctx)).should.be.false();
  });

  it('should be null for 5 Cel = 4 m', async function () {
    should(await this.aGtB_Quantity_incompatible.exec(this.ctx)).be.null();
  });

  it('should be null for 5 Cel = 5 m', async function () {
    should(await this.aEqB_Quantity_incompatible.exec(this.ctx)).be.null();
  });

  it('should be null for 5 Cel = 40 m', async function () {
    should(await this.aLtB_Quantity_incompatible.exec(this.ctx)).be.null();
  });

  it('should be true for 10mg:2dL = 15mg:3dL', async function () {
    (await this.eqRatios.exec(this.ctx)).should.be.true();
  });

  it('should be false for 10mg:2dL = 15mg:4dL', async function () {
    (await this.uneqRatios.exec(this.ctx)).should.be.false();
  });
});

describe('NotEqual', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should be true for 5 <> 4', async function () {
    (await this.aGtB_Int.exec(this.ctx)).should.be.true();
  });

  it('should be false for 5 <> 5', async function () {
    (await this.aEqB_Int.exec(this.ctx)).should.be.false();
  });

  it('should be true for 5 <> 6', async function () {
    (await this.aLtB_Int.exec(this.ctx)).should.be.true();
  });

  it('should identify equal/unequal tuples', async function () {
    (await this.eqTuples.exec(this.ctx)).should.be.false();
    (await this.uneqTuples.exec(this.ctx)).should.be.true();
  });

  it('should identify equal tuples with same fields null', async function () {
    should(await this.eqTuplesWithNullFields.exec(this.ctx)).be.false();
  });

  it('should identify unequal tuples with same fields null', async function () {
    should(await this.uneqTuplesWithNullFields.exec(this.ctx)).be.true();
  });

  it('should identify uncertian tuples with same fields but one has a null field', async function () {
    should(await this.uncertTuplesWithNullFieldOnOne.exec(this.ctx)).be.null();
  });

  it('should identify equal/unequal DateTimes in same timezone', async function () {
    (await this.eqDateTimes.exec(this.ctx)).should.be.false();
    (await this.uneqDateTimes.exec(this.ctx)).should.be.true();
  });

  it('should identify equal/unequal DateTimes in different timezones', async function () {
    (await this.eqDateTimesTZ.exec(this.ctx)).should.be.false();
    (await this.uneqDateTimesTZ.exec(this.ctx)).should.be.true();
  });

  it('should identify equal/unequal DateTimes with null milliseconds', async function () {
    (await this.eqDateTimesNullMs.exec(this.ctx)).should.be.false();
    (await this.eqDateTimesNullOtherMs.exec(this.ctx)).should.be.false();
  });

  it('should identify equal/unequal date times specified to only date level', async function () {
    should(await this.eqDateTimesOnlyDate.exec(this.ctx)).be.false();
    should(await this.uneqDateTimesOnlyDate.exec(this.ctx)).be.true();
  });

  it('should identify case of a possibly equal date times with differing precisions', async function () {
    should(await this.possiblyEqDateTimesOnlyDateOnOne.exec(this.ctx)).be.null();
  });

  it('should identify unequal date times with differing precisions', async function () {
    should(await this.uneqDateTimesOnlyDateOnOne.exec(this.ctx)).be.true();
  });

  it('should identify uncertain/unequal DateTimes when there is imprecision', async function () {
    should(await this.possiblyEqualDateTimes.exec(this.ctx)).be.null();
    (await this.impossiblyEqualDateTimes.exec(this.ctx)).should.be.true();
  });

  it('should be false for Date and DateTime equality with same year, month, hour', async function () {
    (await this.dateAndDateTimeFalse.exec(this.ctx)).should.be.false();
  });

  it('should be true for date and DateTime with additional fields', async function () {
    (await this.dateAndDateTimeNotEqual.exec(this.ctx)).should.be.true();
  });

  it('should be true for DateTime and Date equality with same year, month, hour', async function () {
    (await this.dateTimeAndDateNotEqual.exec(this.ctx)).should.be.true();
  });

  it('should be false for all DateTime and Date equality with same year, month, hour', async function () {
    (await this.dateTimeAndDateFalse.exec(this.ctx)).should.be.false();
  });

  it('should be false for all DateTime and Date equality with same year, month, hour', async function () {
    (await this.dateTimeAndDateFalse.exec(this.ctx)).should.be.false();
  });

  it('should be null for DateTime and Date equality with same year, month, hour and additional fields', async function () {
    should(await this.dateTimeAndDateUncertainNull.exec(this.ctx)).be.null();
  });

  it('should be true for 5 m != 4 m', async function () {
    (await this.aGtB_Quantity.exec(this.ctx)).should.be.true();
  });

  it('should be false for 5 m != 5 m', async function () {
    (await this.aEqB_Quantity.exec(this.ctx)).should.be.false();
  });

  it('should be true for 5 m != 6 m', async function () {
    (await this.aLtB_Quantity.exec(this.ctx)).should.be.true();
  });

  it('should be true for 5 m != 5 cm', async function () {
    (await this.aGtB_Quantity_diff.exec(this.ctx)).should.be.true();
  });

  it('should be false for 5 m != 500 cm ', async function () {
    (await this.aEqB_Quantity_diff.exec(this.ctx)).should.be.false();
  });

  it('should be true for 5 m != 5 km', async function () {
    (await this.aLtB_Quantity_diff.exec(this.ctx)).should.be.true();
  });

  it('should be null for 5 Cel != 4 m', async function () {
    should(await this.aGtB_Quantity_incompatible.exec(this.ctx)).be.null();
  });

  it('should be null for 5 Cel != 5 m', async function () {
    should(await this.aEqB_Quantity_incompatible.exec(this.ctx)).be.null();
  });

  it('should be null for 5 Cel != 40 m', async function () {
    should(await this.aLtB_Quantity_incompatible.exec(this.ctx)).be.null();
  });
});

describe('Equivalent', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should be false for null ~ 4', async function () {
    (await this.aNull_BDefined.exec(this.ctx)).should.be.false();
  });

  it('should be false for ratio compared to date', async function () {
    (await this.uneqRatioTypes.exec(this.ctx)).should.be.false();
  });

  it('should be false for 5 ~ null', async function () {
    (await this.aDefined_BNull.exec(this.ctx)).should.be.false();
  });

  it.skip('should be true for null ~ null', async function () {
    // Skipping because of cql-to-elm issue that will be fixed in 1.4
    (await this.aNull_BNull.exec(this.ctx)).should.be.true();
  });

  it('should be true for 3 ~ 3', async function () {
    (await this.aDefined_BDefined.exec(this.ctx)).should.be.true();
  });

  it('should be true for FOO ~ foo', async function () {
    (await this.caseInsensitiveStrings.exec(this.ctx)).should.be.true();
  });

  it('should be true for foo bar ~ foo\tbar', async function () {
    (await this.whiteSpaceTabTrue.exec(this.ctx)).should.be.true();
  });

  it('should be true for foo\tbar ~ foo\nbar', async function () {
    (await this.whiteSpaceTabReturnTrue.exec(this.ctx)).should.be.true();
  });

  it('should be false for foo bar ~ foo\t\tbar', async function () {
    (await this.whiteSpaceIncorrectSpaceFalse.exec(this.ctx)).should.be.false();
  });

  it('should be false for foo\t\tbar ~ foo\tbar', async function () {
    (await this.whiteSpaceIncorrectNumberTabsFalse.exec(this.ctx)).should.be.false();
  });

  it('should be false for foo bar ~ foobar', async function () {
    (await this.whiteSpaceNoSpaceFalse.exec(this.ctx)).should.be.false();
  });

  it('should be true for 10mg:2dL ~ 15mg:3dL', async function () {
    (await this.eqRatios.exec(this.ctx)).should.be.true();
  });

  it('should be false for 10mg:2dL ~ 15mg:4dL', async function () {
    (await this.uneqRatios.exec(this.ctx)).should.be.false();
  });

  it('should identify equal/unequal DateTimes in same timezone', async function () {
    (await this.eqDateTimes.exec(this.ctx)).should.be.true();
    (await this.uneqDateTimes.exec(this.ctx)).should.be.false();
  });

  it('should identify equal/unequal DateTimes in different timezones', async function () {
    (await this.eqDateTimesTZ.exec(this.ctx)).should.be.true();
    (await this.uneqDateTimesTZ.exec(this.ctx)).should.be.false();
  });

  it('should identify equal/unequal DateTimes with null milliseconds', async function () {
    (await this.eqDateTimesNullMs.exec(this.ctx)).should.be.true();
    (await this.eqDateTimesNullOtherMs.exec(this.ctx)).should.be.true();
  });

  it('should identify equal/unequal date times specified to only date level', async function () {
    should(await this.eqDateTimesOnlyDate.exec(this.ctx)).be.true();
    should(await this.uneqDateTimesOnlyDate.exec(this.ctx)).be.false();
  });

  it('should identify case of a possibly equal date times with differing precisions', async function () {
    (await this.possiblyEqDateTimesOnlyDateOnOne.exec(this.ctx)).should.be.false();
  });

  it('should identify unequal date times with differing precisions', async function () {
    should(await this.uneqDateTimesOnlyDateOnOne.exec(this.ctx)).be.false();
  });

  it('should identify uncertain/unequal DateTimes when there is imprecision', async function () {
    (await this.possiblyEqualDateTimes.exec(this.ctx)).should.be.false();
    (await this.impossiblyEqualDateTimes.exec(this.ctx)).should.be.false();
  });

  it('should be true for Date and DateTime equality with same year, month, hour', async function () {
    (await this.dateAndDateTimeTrue.exec(this.ctx)).should.be.true();
  });

  it('should be false for Date and DateTime equality with same year, month, hour and additional fields', async function () {
    (await this.dateAndDateTimeUncertainFalse.exec(this.ctx)).should.be.false();
  });

  it('should be true for DateTime and Date equality with same year, month, hour', async function () {
    (await this.dateTimeAndDateTrue.exec(this.ctx)).should.be.true();
  });

  it('should be null for DateTime and Date equality with same year, month, hour and additional fields', async function () {
    (await this.dateTimeAndDateUncertainFalse.exec(this.ctx)).should.be.false();
  });

  it('should be false for Date and DateTime equality with different hour', async function () {
    (await this.dateAndDateTimeNotEqual.exec(this.ctx)).should.be.false();
  });

  it('should be false for DateTime and Date equality with different hour', async function () {
    (await this.dateTimeAndDateNotEqual.exec(this.ctx)).should.be.false();
  });

  describe('Tuples', () => {
    it.skip('should return true for empty tuples', async function () {
      // Note: the spec doesn't explicitly define this, expecting behavior to match null ~ null
      (await this.emptyTuples.exec(this.ctx)).should.be.true();
    });

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    it.skip('should return false if Tuples are not of the same type', async function () {});
    // Note: There is currently no way to tell the type of Tuples as they are all treated as Objects

    it('should return true if Tuples are elementwise identical', async function () {
      (await this.sameTuples.exec(this.ctx)).should.be.true();
    });

    it('should return true if Tuples are elementwise identical and null', async function () {
      (await this.sameTuplesNull.exec(this.ctx)).should.be.true();
    });

    it('should return false if Tuples are not elementwise identical', async function () {
      (await this.differentTuples.exec(this.ctx)).should.be.false();
    });

    it('should return true for nested tuples', async function () {
      (await this.sameNestedTuples.exec(this.ctx)).should.be.true();
    });

    it('should return true for nested tuples', async function () {
      (await this.sameNestedTuplesNull.exec(this.ctx)).should.be.true();
    });
  });

  describe('Lists', () => {
    it('should return true for empty lists', async function () {
      (await this.emptyLists.exec(this.ctx)).should.be.true();
    });

    it('should return false for lists with different types', async function () {
      (await this.differentTypesLists.exec(this.ctx)).should.be.false();
    });

    it('should return false for lists with different number of elements', async function () {
      (await this.differentLengthLists.exec(this.ctx)).should.be.false();
    });

    it('should return false for lists with same elements in different order', async function () {
      (await this.differentOrderLists.exec(this.ctx)).should.be.false();
    });

    it('should return true for lists with same elements in same order', async function () {
      (await this.sameLists.exec(this.ctx)).should.be.true();
    });

    it('should return true for lists with same elements in same order including nulls', async function () {
      (await this.sameListsNull.exec(this.ctx)).should.be.true();
    });

    it('should return true for nested lists with same elements in same order', async function () {
      (await this.sameNestedLists.exec(this.ctx)).should.be.true();
    });

    it('should return true for nested lists with same elements in same order including nulls', async function () {
      (await this.sameNestedListsNull.exec(this.ctx)).should.be.true();
    });
  });

  describe('Intervals', () => {
    it('should return true for null low/high', async function () {
      (await this.emptyInterval.exec(this.ctx)).should.be.true();
    });

    it('should return false for different Interval point types', async function () {
      (await this.intervalDifferentPointTypes.exec(this.ctx)).should.be.false();
    });

    it('should return false if different starting points', async function () {
      (await this.intervalDifferentStarts.exec(this.ctx)).should.be.false();
    });

    it('should return false if different ending points', async function () {
      (await this.intervalDifferentEndings.exec(this.ctx)).should.be.false();
    });

    it('should return true for identical Intervals', async function () {
      (await this.sameIntervals.exec(this.ctx)).should.be.true();
    });
  });

  describe('Lists and Tuples', () => {
    it('should return false for List ~ Tuple', async function () {
      (await this.listAndTuple.exec(this.ctx)).should.be.false();
    });

    it('should return false for Tuple ~ List', async function () {
      (await this.tupleAndList.exec(this.ctx)).should.be.false();
    });

    it('should return false for List ~ Tuple with null', async function () {
      (await this.nullListAndTuple.exec(this.ctx)).should.be.false();
    });

    it('should return false for Tuple with null ~ List', async function () {
      (await this.tupleAndNullList.exec(this.ctx)).should.be.false();
    });
  });

  describe('Codes and Concepts', () => {
    it('should return true for same Codes', async function () {
      (await this.sameCodeAndCode.exec(this.ctx)).should.be.true();
    });

    it('should return true for same Code and Concept', async function () {
      (await this.sameCodeAndConcept.exec(this.ctx)).should.be.true();
    });

    it('should return true for same Concept and Code', async function () {
      (await this.sameConceptAndCode.exec(this.ctx)).should.be.true();
    });

    it('should return true for same Concept and Concept', async function () {
      (await this.sameConceptAndConcept.exec(this.ctx)).should.be.true();
    });

    it('should return false for same Codes', async function () {
      (await this.diffCodeAndCode.exec(this.ctx)).should.be.false();
    });

    it('should return false for same Code and Concept', async function () {
      (await this.diffCodeAndConcept.exec(this.ctx)).should.be.false();
    });

    it('should return false for same Concept and Code', async function () {
      (await this.diffConceptAndCode.exec(this.ctx)).should.be.false();
    });

    it('should return false for same Concept and Concept', async function () {
      (await this.diffConceptAndConcept.exec(this.ctx)).should.be.false();
    });

    it('should return true for ValueSets with same version and id', async function () {
      (await this.sameVSIdAndVersion.exec(this.ctx)).should.be.true();
    });

    it('should return true for ValueSets with different version but same codes', async function () {
      (await this.sameVSCodes.exec(this.ctx)).should.be.true();
    });

    it('should return false for ValueSets with different version and different codes', async function () {
      (await this.diffVSCodes.exec(this.ctx)).should.be.true();
    });

    it('should return error for unresolvable valueset with different id/version', function () {
      this.unresolvableDiffVS
        .exec(this.ctx)
        .should.be.rejectedWith(
          /Unable to resolve expected valueset with id 1.2.3.4.5.6.7.8.9 and version undefined/
        );
    });
  });
});

describe('Less', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should be false for 5 < 4', async function () {
    (await this.aGtB_Int.exec(this.ctx)).should.be.false();
  });

  it('should be false for 5 < 5', async function () {
    (await this.aEqB_Int.exec(this.ctx)).should.be.false();
  });

  it('should be true for 5 < 6', async function () {
    (await this.aLtB_Int.exec(this.ctx)).should.be.true();
  });

  it('should be false for 5 m < 4 m', async function () {
    (await this.aGtB_Quantity.exec(this.ctx)).should.be.false();
  });

  it('should be false for 5 m < 5 m', async function () {
    (await this.aEqB_Quantity.exec(this.ctx)).should.be.false();
  });

  it('should be false for 5 m < 6 m', async function () {
    (await this.aLtB_Quantity.exec(this.ctx)).should.be.true();
  });

  it('should be true for 5 m < 5 cm', async function () {
    (await this.aGtB_Quantity_diff.exec(this.ctx)).should.be.false();
  });

  it('should be false for 5 m < 50 cm ', async function () {
    (await this.aEqB_Quantity_diff.exec(this.ctx)).should.be.false();
  });

  it('should be false for 5 m < 5 km', async function () {
    (await this.aLtB_Quantity_diff.exec(this.ctx)).should.be.true();
  });

  it('should be null for 5 Cel < 4 m', async function () {
    should(await this.aGtB_Quantity_incompatible.exec(this.ctx)).be.null();
  });

  it('should be null for 5 Cel < 5 m', async function () {
    should(await this.aEqB_Quantity_incompatible.exec(this.ctx)).be.null();
  });

  it('should be null for 5 Cel < 40 m', async function () {
    should(await this.aLtB_Quantity_incompatible.exec(this.ctx)).be.null();
  });
});

describe('LessOrEqual', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should be false for 5 <= 4', async function () {
    (await this.aGtB_Int.exec(this.ctx)).should.be.false();
  });

  it('should be true for 5 <= 5', async function () {
    (await this.aEqB_Int.exec(this.ctx)).should.be.true();
  });

  it('should be true for 5 <= 6', async function () {
    (await this.aLtB_Int.exec(this.ctx)).should.be.true();
  });

  it('should be true for 5 m <= 4 m', async function () {
    (await this.aGtB_Quantity.exec(this.ctx)).should.be.false();
  });

  it('should be false for 5 m <= 5 m', async function () {
    (await this.aEqB_Quantity.exec(this.ctx)).should.be.true();
  });

  it('should be false for 5 m <= 6 m', async function () {
    (await this.aLtB_Quantity.exec(this.ctx)).should.be.true();
  });

  it('should be true for 5 m <= 5 cm', async function () {
    (await this.aGtB_Quantity_diff.exec(this.ctx)).should.be.false();
  });

  it('should be false for 5 m <= 500 cm ', async function () {
    (await this.aEqB_Quantity_diff.exec(this.ctx)).should.be.true();
  });

  it('should be false for 5 m <= 5 km', async function () {
    (await this.aLtB_Quantity_diff.exec(this.ctx)).should.be.true();
  });

  it('should be null for 5 Cel <= 4 m', async function () {
    should(await this.aGtB_Quantity_incompatible.exec(this.ctx)).be.null();
  });

  it('should be null for 5 Cel <= 5 m', async function () {
    should(await this.aEqB_Quantity_incompatible.exec(this.ctx)).be.null();
  });

  it('should be null for 5 Cel <= 40 m', async function () {
    should(await this.aLtB_Quantity_incompatible.exec(this.ctx)).be.null();
  });
});

describe('Greater', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should be true for 5 > 4', async function () {
    (await this.aGtB_Int.exec(this.ctx)).should.be.true();
  });

  it('should be false for 5 > 5', async function () {
    (await this.aEqB_Int.exec(this.ctx)).should.be.false();
  });

  it('should be false for 5 > 6', async function () {
    (await this.aLtB_Int.exec(this.ctx)).should.be.false();
  });

  it('should be true for 5 m > 4 m', async function () {
    (await this.aGtB_Quantity.exec(this.ctx)).should.be.true();
  });

  it('should be false for 5 m > 5 m', async function () {
    (await this.aEqB_Quantity.exec(this.ctx)).should.be.false();
  });

  it('should be false for 5 m > 6 m', async function () {
    (await this.aLtB_Quantity.exec(this.ctx)).should.be.false();
  });

  it('should be true for 5 m > 5 cm', async function () {
    (await this.aGtB_Quantity_diff.exec(this.ctx)).should.be.true();
  });

  it('should be false for 5 m > 50 cm ', async function () {
    (await this.aEqB_Quantity_diff.exec(this.ctx)).should.be.false();
  });

  it('should be false for 5 m > 5 km', async function () {
    (await this.aLtB_Quantity_diff.exec(this.ctx)).should.be.false();
  });

  it('should be null for 5 Cel > 4 m', async function () {
    should(await this.aGtB_Quantity_incompatible.exec(this.ctx)).be.null();
  });

  it('should be null for 5 Cel > 5 m', async function () {
    should(await this.aEqB_Quantity_incompatible.exec(this.ctx)).be.null();
  });

  it('should be null for 5 Cel > 40 m', async function () {
    should(await this.aLtB_Quantity_incompatible.exec(this.ctx)).be.null();
  });
});

describe('GreaterOrEqual', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should be true for 5 >= 4', async function () {
    (await this.aGtB_Int.exec(this.ctx)).should.be.true();
  });

  it('should be true for 5 >= 5', async function () {
    (await this.aEqB_Int.exec(this.ctx)).should.be.true();
  });

  it('should be false for 5 >= 6', async function () {
    (await this.aLtB_Int.exec(this.ctx)).should.be.false();
  });

  it('should be true for 5 m >= 4 m', async function () {
    (await this.aGtB_Quantity.exec(this.ctx)).should.be.true();
  });

  it('should be false for 5 m  >= 5 m', async function () {
    (await this.aEqB_Quantity.exec(this.ctx)).should.be.true();
  });

  it('should be false for 5 m >= 6 m', async function () {
    (await this.aLtB_Quantity.exec(this.ctx)).should.be.false();
  });

  it('should be true for 5 m >= 5 cm', async function () {
    (await this.aGtB_Quantity_diff.exec(this.ctx)).should.be.true();
  });

  it('should be false for 5 m  >= 50 cm ', async function () {
    (await this.aEqB_Quantity_diff.exec(this.ctx)).should.be.true();
  });

  it('should be false for 5 m  >=5 km', async function () {
    (await this.aLtB_Quantity_diff.exec(this.ctx)).should.be.false();
  });

  it('should be null for 5 Cel >= 4 m', async function () {
    should(await this.aGtB_Quantity_incompatible.exec(this.ctx)).be.null();
  });

  it('should be null for 5 Cel >= 5 m', async function () {
    should(await this.aEqB_Quantity_incompatible.exec(this.ctx)).be.null();
  });

  it('should be null for 5 Cel >= 40 m', async function () {
    should(await this.aLtB_Quantity_incompatible.exec(this.ctx)).be.null();
  });

  it('should be null for 100 [nmi_i] / 2 h > 49 mg/[lb_av]', async function () {
    should(await this.divideUcum_incompatible.exec(this.ctx)).be.null();
  });

  it('should be true for 100 mg / 2 [lb_av]  > 49 mg/[lb_av]', async function () {
    (await this.divideUcum.exec(this.ctx)).should.be.true();
  });
});
