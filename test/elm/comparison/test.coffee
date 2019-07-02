should = require 'should'
setup = require '../../setup'
data = require './data'

# TODO: Comparisons for Dates

describe 'Equal', ->
  @beforeEach ->
    setup @, data

  it 'should be false for 5 = 4', ->
    @aGtB_Int.exec(@ctx).should.be.false()

  it 'should be true for 5 = 5', ->
    @aEqB_Int.exec(@ctx).should.be.true()

  it 'should be false for 5 = 6', ->
    @aLtB_Int.exec(@ctx).should.be.false()

  it 'should identify equal/unequal tuples', ->
    @eqTuples.exec(@ctx).should.be.true()
    @uneqTuples.exec(@ctx).should.be.false()

  it 'should identify equal tuples with same fields null', ->
    should(@eqTuplesWithNullFields.exec(@ctx)).be.true()

  it 'should identify unequal tuples with same fields null', ->
    should(@uneqTuplesWithNullFields.exec(@ctx)).be.false()

  xit 'should identify unequal tuples with different key names', ->
    # Broken with 1.4.5-SNAPSHOT: Tuple
    @tupleDifferentKeys.exec(@ctx).should.be.false()

  it 'should identify uncertian tuples with same fields but one has a null field', ->
    should(@uncertTuplesWithNullFieldOnOne.exec(@ctx)).be.null()

  xit 'should identify unequal tuples with different fields null', ->
    # Broken with 1.4.5-SNAPSHOT: Tuple
    @uncertTuplesWithDiffNullFields.exec(@ctx).should.be.false()

  it 'should identify equal/unequal DateTimes in same timezone', ->
    @eqDateTimes.exec(@ctx).should.be.true()
    @uneqDateTimes.exec(@ctx).should.be.false()

  it 'should identify equal/unequal DateTimes in different timezones', ->
    @eqDateTimesTZ.exec(@ctx).should.be.true()
    @uneqDateTimesTZ.exec(@ctx).should.be.false()

  it 'should identify equal/unequal DateTimes with null milliseconds', ->
    @eqDateTimesNullMs.exec(@ctx).should.be.true()
    @eqDateTimesNullOtherMs.exec(@ctx).should.be.true()

  it 'should identify equal/unequal date times specified to only date level', ->
    should(@eqDateTimesOnlyDate.exec(@ctx)).be.true()
    should(@uneqDateTimesOnlyDate.exec(@ctx)).be.false()

  it 'should identify case of a possibly equal date times with differing precisions', ->
    should(@possiblyEqDateTimesOnlyDateOnOne.exec(@ctx)).be.null()

  it 'should identify unequal date times with differing precisions', ->
    should(@uneqDateTimesOnlyDateOnOne.exec(@ctx)).be.false()

  it 'should identify uncertain/unequal DateTimes when there is imprecision', ->
    should(@possiblyEqualDateTimes.exec(@ctx)).be.null()
    @impossiblyEqualDateTimes.exec(@ctx).should.be.false()

  it 'should be null for Date and DateTime equality with same year, month, hour', ->
    should(@dateAndDateTimeNull.exec(@ctx)).be.null()

  it 'should be false for Date and DateTime equality with same year, month, hour and additional fields', ->
    @dateAndDateTimeUncertainFalse.exec(@ctx).should.be.false()

  it 'should be null for DateTime and Date equality with same year, month, hour', ->
    should(@dateTimeAndDateNull.exec(@ctx)).be.null()

  it 'should be null for DateTime and Date equality with same year, month, hour and additional fields', ->
    @dateTimeAndDateUncertainFalse.exec(@ctx).should.be.false()

  it 'should be false for Date and DateTime equality with different hour', ->
    @dateAndDateTimeNotEqual.exec(@ctx).should.be.false()

  it 'should be false for DateTime and Date equality with different hour', ->
    @dateTimeAndDateNotEqual.exec(@ctx).should.be.false()

  it 'should be false for 5 m = 4 m', ->
    @aGtB_Quantity.exec(@ctx).should.be.false()

  it 'should be true for 5 m = 5 m', ->
    @aEqB_Quantity.exec(@ctx).should.be.true()

  it 'should be false for 5 m = 6 m', ->
    @aLtB_Quantity.exec(@ctx).should.be.false()

  it 'should be false for 5 m = 5 cm', ->
    @aGtB_Quantity_diff.exec(@ctx).should.be.false()

  it 'should be true for 5 m = 500 cm', ->
    @aEqB_Quantity_diff.exec(@ctx).should.be.true()

  it 'should be false for 5 m = 5 km', ->
    @aLtB_Quantity_diff.exec(@ctx).should.be.false()

  it 'should be null for 5 Cel = 4 m', ->
    should(@aGtB_Quantity_incompatible.exec(@ctx)).be.null()

  it 'should be null for 5 Cel = 5 m', ->
    should(@aEqB_Quantity_incompatible.exec(@ctx)).be.null()

  it 'should be null for 5 Cel = 40 m', ->
    should(@aLtB_Quantity_incompatible.exec(@ctx)).be.null()

  it 'should be true for 10mg:2dL = 15mg:3dL', ->
    @eqRatios.exec(@ctx).should.be.true()

  it 'should be false for 10mg:2dL = 15mg:4dL', ->
    @uneqRatios.exec(@ctx).should.be.false()

describe 'NotEqual', ->
  @beforeEach ->
    setup @, data

  it 'should be true for 5 <> 4', ->
    @aGtB_Int.exec(@ctx).should.be.true()

  it 'should be false for 5 <> 5', ->
    @aEqB_Int.exec(@ctx).should.be.false()

  it 'should be true for 5 <> 6', ->
    @aLtB_Int.exec(@ctx).should.be.true()

  it 'should identify equal/unequal tuples', ->
    @eqTuples.exec(@ctx).should.be.false()
    @uneqTuples.exec(@ctx).should.be.true()

  it 'should identify equal tuples with same fields null', ->
    should(@eqTuplesWithNullFields.exec(@ctx)).be.false()

  it 'should identify unequal tuples with same fields null', ->
    should(@uneqTuplesWithNullFields.exec(@ctx)).be.true()

  it 'should identify uncertian tuples with same fields but one has a null field', ->
    should(@uncertTuplesWithNullFieldOnOne.exec(@ctx)).be.null()

  xit 'should identify unequal tuples with different fields null', ->
    # Broken with 1.4.5-SNAPSHOT: Tuple
    @uncertTuplesWithDiffNullFields.exec(@ctx).should.be.true()

  it 'should identify equal/unequal DateTimes in same timezone', ->
    @eqDateTimes.exec(@ctx).should.be.false()
    @uneqDateTimes.exec(@ctx).should.be.true()

  it 'should identify equal/unequal DateTimes in different timezones', ->
    @eqDateTimesTZ.exec(@ctx).should.be.false()
    @uneqDateTimesTZ.exec(@ctx).should.be.true()

  it 'should identify equal/unequal DateTimes with null milliseconds', ->
    @eqDateTimesNullMs.exec(@ctx).should.be.false()
    @eqDateTimesNullOtherMs.exec(@ctx).should.be.false()

  it 'should identify equal/unequal date times specified to only date level', ->
    should(@eqDateTimesOnlyDate.exec(@ctx)).be.false()
    should(@uneqDateTimesOnlyDate.exec(@ctx)).be.true()

  it 'should identify case of a possibly equal date times with differing precisions', ->
    should(@possiblyEqDateTimesOnlyDateOnOne.exec(@ctx)).be.null()

  it 'should identify unequal date times with differing precisions', ->
    should(@uneqDateTimesOnlyDateOnOne.exec(@ctx)).be.true()

  it 'should identify uncertain/unequal DateTimes when there is imprecision', ->
    should(@possiblyEqualDateTimes.exec(@ctx)).be.null()
    @impossiblyEqualDateTimes.exec(@ctx).should.be.true()

  it 'should be null for Date and DateTime equality with same year, month, hour', ->
    should(@dateAndDateTimeNull.exec(@ctx)).be.null()

  it 'should be true for date and DateTime with additional fields', ->
    @dateAndDateTimeNotEqual.exec(@ctx).should.be.true()

  it 'should be true for DateTime and Date equality with same year, month, hour', ->
    @dateTimeAndDateNotEqual.exec(@ctx).should.be.true()

  it 'should be null for all DateTime and Date equality with same year, month, hour', ->
    should(@dateTimeAndDateNull.exec(@ctx)).be.null()

  it 'should be true for DateTime and Date equality with same year, month, hour and additional fields', ->
    @dateTimeAndDateUncertainTrue.exec(@ctx).should.be.true()

  it 'should be true for 5 m != 4 m', ->
    @aGtB_Quantity.exec(@ctx).should.be.true()

  it 'should be false for 5 m != 5 m', ->
    @aEqB_Quantity.exec(@ctx).should.be.false()

  it 'should be true for 5 m != 6 m', ->
    @aLtB_Quantity.exec(@ctx).should.be.true()

  it 'should be true for 5 m != 5 cm', ->
    @aGtB_Quantity_diff.exec(@ctx).should.be.true()

  it 'should be false for 5 m != 500 cm ', ->
    @aEqB_Quantity_diff.exec(@ctx).should.be.false()

  it 'should be true for 5 m != 5 km', ->
    @aLtB_Quantity_diff.exec(@ctx).should.be.true()

  it 'should be null for 5 Cel != 4 m', ->
    should(@aGtB_Quantity_incompatible.exec(@ctx)).be.null()

  it 'should be null for 5 Cel != 5 m', ->
    should(@aEqB_Quantity_incompatible.exec(@ctx)).be.null()

  it 'should be null for 5 Cel != 40 m', ->
    should(@aLtB_Quantity_incompatible.exec(@ctx)).be.null()

describe 'Equivalent', ->
  @beforeEach ->
    setup @, data

  it 'should be false for null ~ 4', ->
    @aNull_BDefined.exec(@ctx).should.be.false()

  it 'should be false for ratio compared to date', ->
    @uneqRatioTypes.exec(@ctx).should.be.false()

  it 'should be false for 5 ~ null', ->
    @aDefined_BNull.exec(@ctx).should.be.false()

  it.skip 'should be true for null ~ null', ->
    # Skipping because of cql-to-elm issue that will be fixed in 1.4
    @aNull_BNull.exec(@ctx).should.be.true()

  it 'should be true for 3 ~ 3', ->
    @aDefined_BDefined.exec(@ctx).should.be.true()

  it 'should be true for FOO ~ foo', ->
    @caseInsensitiveStrings.exec(@ctx).should.be.true()

  it 'should be true for foo bar ~ foo\tbar', ->
    @whiteSpaceTabTrue.exec(@ctx).should.be.true()

  it 'should be true for foo\tbar ~ foo\nbar', ->
    @whiteSpaceTabReturnTrue.exec(@ctx).should.be.true()

  it 'should be false for foo bar ~ foo\t\tbar', ->
    @whiteSpaceIncorrectSpaceFalse.exec(@ctx).should.be.false()

  it 'should be false for foo\t\tbar ~ foo\tbar', ->
    @whiteSpaceIncorrectNumberTabsFalse.exec(@ctx).should.be.false()

  it 'should be false for foo bar ~ foobar', ->
    @whiteSpaceNoSpaceFalse.exec(@ctx).should.be.false()

  it 'should be true for 10mg:2dL ~ 15mg:3dL', ->
    @eqRatios.exec(@ctx).should.be.true()

  it 'should be false for 10mg:2dL ~ 15mg:4dL', ->
    @uneqRatios.exec(@ctx).should.be.false()

  it 'should identify equal/unequal DateTimes in same timezone', ->
    @eqDateTimes.exec(@ctx).should.be.true()
    @uneqDateTimes.exec(@ctx).should.be.false()

  it 'should identify equal/unequal DateTimes in different timezones', ->
    @eqDateTimesTZ.exec(@ctx).should.be.true()
    @uneqDateTimesTZ.exec(@ctx).should.be.false()

  it 'should identify equal/unequal DateTimes with null milliseconds', ->
    @eqDateTimesNullMs.exec(@ctx).should.be.true()
    @eqDateTimesNullOtherMs.exec(@ctx).should.be.true()

  it 'should identify equal/unequal date times specified to only date level', ->
    should(@eqDateTimesOnlyDate.exec(@ctx)).be.true()
    should(@uneqDateTimesOnlyDate.exec(@ctx)).be.false()

  it 'should identify case of a possibly equal date times with differing precisions', ->
    @possiblyEqDateTimesOnlyDateOnOne.exec(@ctx).should.be.false()

  it 'should identify unequal date times with differing precisions', ->
    should(@uneqDateTimesOnlyDateOnOne.exec(@ctx)).be.false()

  it 'should identify uncertain/unequal DateTimes when there is imprecision', ->
    @possiblyEqualDateTimes.exec(@ctx).should.be.false()
    @impossiblyEqualDateTimes.exec(@ctx).should.be.false()

  it 'should be false for Date and DateTime equality with same year, month, hour', ->
    @dateAndDateTimeNull.exec(@ctx).should.be.false()

  it 'should be false for Date and DateTime equality with same year, month, hour and additional fields', ->
    @dateAndDateTimeUncertainFalse.exec(@ctx).should.be.false()

  it 'should be false for DateTime and Date equality with same year, month, hour', ->
    @dateTimeAndDateNull.exec(@ctx).should.be.false()

  it 'should be null for DateTime and Date equality with same year, month, hour and additional fields', ->
    @dateTimeAndDateUncertainFalse.exec(@ctx).should.be.false()

  it 'should be false for Date and DateTime equality with different hour', ->
    @dateAndDateTimeNotEqual.exec(@ctx).should.be.false()

  it 'should be false for DateTime and Date equality with different hour', ->
    @dateTimeAndDateNotEqual.exec(@ctx).should.be.false()

  describe 'Tuples', ->
    it.skip 'should return true for empty tuples', ->
      # Note: the spec doesn't explicitly define this, expecting behavior to match null ~ null
      @emptyTuples.exec(@ctx).should.be.true()

    it.skip 'should return false if Tuples are not of the same type', ->
      # Note: There is currently no way to tell the type of Tuples as they are all treated as Objects

    it 'should return true if Tuples are elementwise identical', ->
      @sameTuples.exec(@ctx).should.be.true()

    it 'should return true if Tuples are elementwise identical and null', ->
      @sameTuplesNull.exec(@ctx).should.be.true()

    it 'should return false if Tuples are not elementwise identical', ->
      @differentTuples.exec(@ctx).should.be.false()

    it 'should return true for nested tuples', ->
      @sameNestedTuples.exec(@ctx).should.be.true()

    it 'should return true for nested tuples', ->
      @sameNestedTuplesNull.exec(@ctx).should.be.true()

  describe 'Lists', ->
    it 'should return true for empty lists', ->
      @emptyLists.exec(@ctx).should.be.true()

    it 'should return false for lists with different types', ->
      @differentTypesLists.exec(@ctx).should.be.false()

    it 'should return false for lists with different number of elements', ->
      @differentLengthLists.exec(@ctx).should.be.false()

    it 'should return false for lists with same elements in different order', ->
      @differentOrderLists.exec(@ctx).should.be.false()

    it 'should return true for lists with same elements in same order', ->
      @sameLists.exec(@ctx).should.be.true()

    it 'should return true for lists with same elements in same order including nulls', ->
      @sameListsNull.exec(@ctx).should.be.true()

    it 'should return true for nested lists with same elements in same order', ->
      @sameNestedLists.exec(@ctx).should.be.true()

    it 'should return true for nested lists with same elements in same order including nulls', ->
      @sameNestedListsNull.exec(@ctx).should.be.true()

  describe 'Intervals', ->
    it 'should return true for null low/high', ->
      @emptyInterval.exec(@ctx).should.be.true()

    it 'should return false for different Interval point types', ->
      @intervalDifferentPointTypes.exec(@ctx).should.be.false()

    it 'should return false if different starting points', ->
      @intervalDifferentStarts.exec(@ctx).should.be.false()

    it 'should return false if different ending points', ->
      @intervalDifferentEndings.exec(@ctx).should.be.false()

    it 'should return true for identical Intervals', ->
      @sameIntervals.exec(@ctx).should.be.true()

  describe 'Lists and Tuples', ->
    it 'should return false for List ~ Tuple', ->
      @listAndTuple.exec(@ctx).should.be.false()

    it 'should return false for Tuple ~ List', ->
      @tupleAndList.exec(@ctx).should.be.false()

    it 'should return false for List ~ Tuple with null', ->
      @nullListAndTuple.exec(@ctx).should.be.false()

    it 'should return false for Tuple with null ~ List', ->
      @tupleAndNullList.exec(@ctx).should.be.false()

  describe 'Codes and Concepts', ->
    it 'should return true for same Codes', ->
      @sameCodeAndCode.exec(@ctx).should.be.true()

    it 'should return true for same Code and Concept', ->
      @sameCodeAndConcept.exec(@ctx).should.be.true()

    it 'should return true for same Concept and Code', ->
      @sameConceptAndCode.exec(@ctx).should.be.true()

    it 'should return true for same Concept and Concept', ->
      @sameConceptAndConcept.exec(@ctx).should.be.true()

    it 'should return false for same Codes', ->
      @diffCodeAndCode.exec(@ctx).should.be.false()

    it 'should return false for same Code and Concept', ->
      @diffCodeAndConcept.exec(@ctx).should.be.false()

    it 'should return false for same Concept and Code', ->
      @diffConceptAndCode.exec(@ctx).should.be.false()

    it 'should return false for same Concept and Concept', ->
      @diffConceptAndConcept.exec(@ctx).should.be.false()

describe 'Less', ->
  @beforeEach ->
    setup @, data

  it 'should be false for 5 < 4', ->
    @aGtB_Int.exec(@ctx).should.be.false()

  it 'should be false for 5 < 5', ->
    @aEqB_Int.exec(@ctx).should.be.false()

  it 'should be true for 5 < 6', ->
    @aLtB_Int.exec(@ctx).should.be.true()

  it 'should be false for 5 m < 4 m', ->
    @aGtB_Quantity.exec(@ctx).should.be.false()

  it 'should be false for 5 m < 5 m', ->
    @aEqB_Quantity.exec(@ctx).should.be.false()

  it 'should be false for 5 m < 6 m', ->
    @aLtB_Quantity.exec(@ctx).should.be.true()

  it 'should be true for 5 m < 5 cm', ->
    @aGtB_Quantity_diff.exec(@ctx).should.be.false()

  it 'should be false for 5 m < 50 cm ', ->
    @aEqB_Quantity_diff.exec(@ctx).should.be.false()

  it 'should be false for 5 m < 5 km', ->
    @aLtB_Quantity_diff.exec(@ctx).should.be.true()

  it 'should be null for 5 Cel < 4 m', ->
    should(@aGtB_Quantity_incompatible.exec(@ctx)).be.null()

  it 'should be null for 5 Cel < 5 m', ->
    should(@aEqB_Quantity_incompatible.exec(@ctx)).be.null()

  it 'should be null for 5 Cel < 40 m', ->
    should(@aLtB_Quantity_incompatible.exec(@ctx)).be.null()

describe 'LessOrEqual', ->
  @beforeEach ->
    setup @, data

  it 'should be false for 5 <= 4', ->
    @aGtB_Int.exec(@ctx).should.be.false()

  it 'should be true for 5 <= 5', ->
    @aEqB_Int.exec(@ctx).should.be.true()

  it 'should be true for 5 <= 6', ->
    @aLtB_Int.exec(@ctx).should.be.true()

  it 'should be true for 5 m <= 4 m', ->
    @aGtB_Quantity.exec(@ctx).should.be.false()

  it 'should be false for 5 m <= 5 m', ->
    @aEqB_Quantity.exec(@ctx).should.be.true()

  it 'should be false for 5 m <= 6 m', ->
    @aLtB_Quantity.exec(@ctx).should.be.true()

  it 'should be true for 5 m <= 5 cm', ->
    @aGtB_Quantity_diff.exec(@ctx).should.be.false()

  it 'should be false for 5 m <= 500 cm ', ->
    @aEqB_Quantity_diff.exec(@ctx).should.be.true()

  it 'should be false for 5 m <= 5 km', ->
    @aLtB_Quantity_diff.exec(@ctx).should.be.true()

  it 'should be null for 5 Cel <= 4 m', ->
    should(@aGtB_Quantity_incompatible.exec(@ctx)).be.null()

  it 'should be null for 5 Cel <= 5 m', ->
    should(@aEqB_Quantity_incompatible.exec(@ctx)).be.null()

  it 'should be null for 5 Cel <= 40 m', ->
    should(@aLtB_Quantity_incompatible.exec(@ctx)).be.null()

describe 'Greater', ->
  @beforeEach ->
    setup @, data

  it 'should be true for 5 > 4', ->
    @aGtB_Int.exec(@ctx).should.be.true()

  it 'should be false for 5 > 5', ->
    @aEqB_Int.exec(@ctx).should.be.false()

  it 'should be false for 5 > 6', ->
    @aLtB_Int.exec(@ctx).should.be.false()

  it 'should be true for 5 m > 4 m', ->
    @aGtB_Quantity.exec(@ctx).should.be.true()

  it 'should be false for 5 m > 5 m', ->
    @aEqB_Quantity.exec(@ctx).should.be.false()

  it 'should be false for 5 m > 6 m', ->
    @aLtB_Quantity.exec(@ctx).should.be.false()

  it 'should be true for 5 m > 5 cm', ->
    @aGtB_Quantity_diff.exec(@ctx).should.be.true()

  it 'should be false for 5 m > 50 cm ', ->
    @aEqB_Quantity_diff.exec(@ctx).should.be.false()

  it 'should be false for 5 m > 5 km', ->
    @aLtB_Quantity_diff.exec(@ctx).should.be.false()

  it 'should be null for 5 Cel > 4 m', ->
    should(@aGtB_Quantity_incompatible.exec(@ctx)).be.null()

  it 'should be null for 5 Cel > 5 m', ->
    should(@aEqB_Quantity_incompatible.exec(@ctx)).be.null()

  it 'should be null for 5 Cel > 40 m', ->
    should(@aLtB_Quantity_incompatible.exec(@ctx)).be.null()

describe 'GreaterOrEqual', ->
  @beforeEach ->
    setup @, data

  it 'should be true for 5 >= 4', ->
    @aGtB_Int.exec(@ctx).should.be.true()

  it 'should be true for 5 >= 5', ->
    @aEqB_Int.exec(@ctx).should.be.true()

  it 'should be false for 5 >= 6', ->
    @aLtB_Int.exec(@ctx).should.be.false()

  it 'should be true for 5 m >= 4 m', ->
    @aGtB_Quantity.exec(@ctx).should.be.true()

  it 'should be false for 5 m  >= 5 m', ->
    @aEqB_Quantity.exec(@ctx).should.be.true()

  it 'should be false for 5 m >= 6 m', ->
    @aLtB_Quantity.exec(@ctx).should.be.false()

  it 'should be true for 5 m >= 5 cm', ->
    @aGtB_Quantity_diff.exec(@ctx).should.be.true()

  it 'should be false for 5 m  >= 50 cm ', ->
    @aEqB_Quantity_diff.exec(@ctx).should.be.true()

  it 'should be false for 5 m  >=5 km', ->
    @aLtB_Quantity_diff.exec(@ctx).should.be.false()

  it 'should be null for 5 Cel >= 4 m', ->
    should(@aGtB_Quantity_incompatible.exec(@ctx)).be.null()

  it 'should be null for 5 Cel >= 5 m', ->
    should(@aEqB_Quantity_incompatible.exec(@ctx)).be.null()

  it 'should be null for 5 Cel >= 40 m', ->
    should(@aLtB_Quantity_incompatible.exec(@ctx)).be.null()

  it 'should be null for 100 [nmi_i] / 2 h > 49 mg/[lb_av]', ->
    should(@divideUcum_incompatible.exec(@ctx)).be.null()

  it 'should be true for 100 mg / 2 [lb_av]  > 49 mg/[lb_av]', ->
    @divideUcum.exec(@ctx).should.be.true()
