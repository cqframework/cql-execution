should = require 'should'
setup = require '../../setup'
data = require './data'
validateQuantity = (object,expectedValue,expectedUnit) ->
  object.isQuantity.should.be.true()
  object.value.should.equal expectedValue
  object.unit.should.equal expectedUnit


describe 'Count', ->
  @beforeEach ->
    setup @, data

  it 'should be able to count lists without nulls', ->
    @not_null.exec(@ctx).should.equal 5
  it 'should be able to count lists with nulls', ->
    @has_null.exec(@ctx).should.equal 2
  it 'should be able to count empty list', ->
    @empty.exec(@ctx).should.equal 0

describe 'Sum', ->
  @beforeEach ->
    setup @, data

  it 'should be able to sum lists without nulls', ->
    @not_null.exec(@ctx).should.equal 15

  it 'should be able to sum lists with nulls', ->
    @has_null.exec(@ctx).should.equal 3

  it 'should be able to sum empty list', ->
    @empty.exec(@ctx) == null

  it 'should be able to sum quantity lists without nulls', ->
    q = @not_null_q.exec(@ctx)
    validateQuantity q, 15, 'ml'

  it 'should be able to sum  quantity lists with nulls', ->
    validateQuantity @has_null_q.exec(@ctx), 3, 'ml'

  it 'should return null for unmatched units in a list of quantiies', ->
    @unmatched_units_q.exec(@ctx) == null

  it 'should be able to sum quantity lists with related units', ->
    q = @q_diff_units.exec(@ctx)
    validateQuantity q, 15, 'ml'

  it 'should be null if quantity units are not compatible', ->
    should(@incompatibleUnitsNull.exec(@ctx)).be.null()

describe 'Min', ->
  @beforeEach ->
    setup @, data

  it 'should be able to find min in lists without nulls', ->
    @not_null.exec(@ctx).should.equal 0
  it 'should be able to find min in lists with nulls', ->
    @has_null.exec(@ctx).should.equal -1
  it 'should be return null for empty list', ->
    @empty.exec(@ctx) == null
  it 'should be able to find min in lists of quantiies without nulls', ->
    validateQuantity @not_null_q.exec(@ctx), 0, 'ml'
  it 'should be able to find min in lists of quantiies with nulls', ->
    validateQuantity @has_null_q.exec(@ctx), -1 , 'ml'
  it 'should be able to find min in lists of quantiies with related units', ->
    validateQuantity @q_diff_units.exec(@ctx), 0, 'ml'

  it 'list of Integers', ->
    @integerMin.exec(@ctx).should.equal 2

  it 'list of Decimals', ->
    @decimalMin.exec(@ctx).should.equal -5

  it 'list of DateTimes', ->
    dateTimeMin = @dateTimeMin.exec(@ctx)
    dateTimeMin.year.should.equal 2012
    dateTimeMin.month.should.equal 9
    dateTimeMin.day.should.equal 5

  it 'list of Dates', ->
    dateMin = @dateMin.exec(@ctx)
    dateMin.year.should.equal 2012
    dateMin.month.should.equal 1

  it 'list of Times', ->
    timeMin = @timeMin.exec(@ctx)
    timeMin.hour.should.equal 12
    timeMin.minute.should.equal 30
    timeMin.second.should.equal 3

  it 'list of Nulls', ->
    should(@minIsNull.exec(@ctx)).be.null()

  it 'null list', ->
    should(@minIsAlsoNull.exec(@ctx)).be.null()

  it 'should be null if quantity units are not compatible', ->
    should(@incompatibleUnitsNull.exec(@ctx)).be.null()


describe 'Max', ->
  @beforeEach ->
    setup @, data

  it 'should be able to find max in lists without nulls', ->
    @not_null.exec(@ctx).should.equal 10
  it 'should be able to find max in lists with nulls', ->
    @has_null.exec(@ctx).should.equal 2
  it 'should be return null for empty list', ->
    @empty.exec(@ctx) == null
  it 'should be able to find max in lists of quantiies without nulls', ->
    validateQuantity @not_null_q.exec(@ctx),  10, 'ml'
  it 'should be able to find max in lists of quantiies with nulls', ->
    validateQuantity @has_null_q.exec(@ctx), 2, 'ml'
  it 'should be able to find max in lists of quantiies with related units', ->
    validateQuantity @q_diff_units.exec(@ctx),  5, 'l'

  it 'list of Integers', ->
    @integerMax.exec(@ctx).should.equal 8

  it 'list of Decimals', ->
    @decimalMax.exec(@ctx).should.equal 5.1

  it 'list of DateTimes', ->
    dateTimeMax = @dateTimeMax.exec(@ctx)
    dateTimeMax.year.should.equal 2012
    dateTimeMax.month.should.equal 9

  it 'list of Dates', ->
    dateMax = @dateMax.exec(@ctx)
    dateMax.year.should.equal 2013
    dateMax.month.should.equal 1

  it 'list of Times', ->
    timeMax = @timeMax.exec(@ctx)
    timeMax.hour.should.equal 12
    timeMax.minute.should.equal 30
    timeMax.second.should.equal 3

  it 'list of Nulls', ->
    should(@maxIsNull.exec(@ctx)).be.null()

  it 'null list', ->
    should(@maxIsAlsoNull.exec(@ctx)).be.null()

  it 'should be null if quantity units are not compatible', ->
    should(@incompatibleUnitsNull.exec(@ctx)).be.null()

describe 'Avg', ->
  @beforeEach ->
    setup @, data

  it 'should be able to find average for lists without nulls', ->
    @not_null.exec(@ctx).should.equal 3

  it 'should be able to find average for lists with nulls', ->
    @has_null.exec(@ctx).should.equal 1.5

  it 'should be return null for empty list', ->
    @empty.exec(@ctx) == null

  it 'should be able to find average for lists of quantiies without nulls', ->
    q = @not_null_q.exec(@ctx)
    validateQuantity q, 3, 'ml'

  it 'should be able to find average for lists of quantiies with nulls', ->
    q = @has_null_q.exec(@ctx)
    validateQuantity q, 1.5 , 'ml'

  it 'should be able to find average for lists of quantiies with related units', ->
    q = @q_diff_units.exec(@ctx)
    validateQuantity q, 3, 'ml'

  it 'should be null if quantity units are not compatible', ->
    should(@incompatibleUnitsNull.exec(@ctx)).be.null()

describe 'Median', ->
  @beforeEach ->
    setup @, data

  it 'should be able to find median of odd numbered list', ->
    @odd.exec(@ctx).should.equal 3

  it 'should be able to find median of even numbered list', ->
    @even.exec(@ctx).should.equal 3.5

  it 'should be able to find median of odd numbered list that contains duplicates', ->
    @dup_vals_odd.exec(@ctx).should.equal 3

  it 'should be able to find median of even numbered list that contians duplicates', ->
    @dup_vals_even.exec(@ctx).should.equal 2.5

  it 'should be return null for empty list', ->
    @empty.exec(@ctx) == null

  it 'should be able to find median of odd numbered list', ->
    q = @odd_q.exec(@ctx)
    validateQuantity q, 3, 'ml'

  it 'should be able to find median of even numbered list', ->
    q = @even_q.exec(@ctx)
    validateQuantity q, 3.5, 'ml'

  it 'should be able to find median of odd numbered list that contains duplicates', ->
    q = @dup_vals_odd_q.exec(@ctx)
    validateQuantity q,3, 'ml'

  it 'should be able to find median of even numbered list that contians duplicates', ->
    q = @dup_vals_even_q.exec(@ctx)
    validateQuantity q, 2.5, 'ml'

  it 'should be able to find median of even numbered list of quantities with related units', ->
    q = @q_diff_units.exec(@ctx)
    validateQuantity q, 3.5, 'ml'

  it 'should be null if quantity units are not compatible', ->
    should(@incompatibleUnitsNull.exec(@ctx)).be.null()

describe 'Mode', ->
  @beforeEach ->
    setup @, data
  it 'should be able to find mode of lists without nulls', ->
    @not_null.exec(@ctx).should.equal 2
  it 'should be able to find Mode lists with nulls', ->
    @has_null.exec(@ctx).should.equal 2
  it 'should be return null for empty list', ->
    @empty.exec(@ctx) == null
  it 'should be able to find bimodal', ->
    @bi_modal.exec(@ctx).should.eql [2,3]

  it 'should be null if quantity units are not compatible', ->
    should(@incompatibleUnitsNull.exec(@ctx)).be.null()

describe 'PopulationVariance', ->
  @beforeEach ->
    setup @, data
  it 'should be able to find PopulationVariance of a list ', ->
    @v.exec(@ctx).should.equal 2.5
  it 'should be able to find PopulationVariance of a list of like quantities', ->
    validateQuantity @v_q.exec(@ctx), 2.5, 'ml'
  it 'should be able to find PopulationVariance of a list of related quantities', ->
    validateQuantity @q_diff_units.exec(@ctx), 2.5, 'ml'
  it 'should throw an exception when quantities are not compatible ', ->
    try
      @q_throw1.exec(@ctx)
      false.should.be.true("Incompatible Quantities should throw an error")
    catch
  it 'should throw an exception when quanties exist in a list but not all are quantities', ->
    try
      @q_throw2.exec(@ctx)
      false.should.be.true("Incompatible Quantities should throw an error")
    catch

  it 'should be null if quantity units are not compatible', ->
    should(@incompatibleUnitsNull.exec(@ctx)).be.null()

describe 'Variance', ->
  @beforeEach ->
    setup @, data
  it 'should be able to find Variance of a list ', ->
    @v.exec(@ctx).should.equal 2
  it 'should be able to find Variance of a list of matched quantities', ->
    validateQuantity @v_q.exec(@ctx), 2, 'ml'
  it 'should be able to find Variance of a list of related quantities', ->
    validateQuantity @q_diff_units.exec(@ctx), 2, 'ml'
  it 'should throw an exception when quantities are not compatible ', ->
    try
      @q_throw1.exec(@ctx)
      false.should.be.true("Incompatible Quantities should throw an error")
    catch
  it 'should throw an exception when quanties exist in a list but not all are quantities', ->
    try
      @q_throw2.exec(@ctx)
      false.should.be.true("Incompatible Quantities should throw an error")
    catch

  it 'should be null if quantity units are not compatible', ->
    should(@incompatibleUnitsNull.exec(@ctx)).be.null()

describe 'StdDev', ->
  @beforeEach ->
    setup @, data
  it 'should be able to find Standard Dev of a list ', ->
    @std.exec(@ctx).should.equal 1.4142135623730951
  it 'should be able to find Standard Dev of a list of like quantities', ->
    validateQuantity @std_q.exec(@ctx), 1.4142135623730951, 'ml'
  it 'should be able to find Standard Dev of a list of related quantities', ->
    validateQuantity @q_diff_units.exec(@ctx), 1.4142135623730951, 'ml'
  it 'should throw an exception when quantities are not compatible ', ->
    try
      @q_throw1.exec(@ctx)
      false.should.be.true("Incompatible Quantities should throw an error")
    catch
  it 'should throw an exception when quanties exist in a list but not all are quantities', ->
    try
      @q_throw2.exec(@ctx)
      false.should.be.true("Incompatible Quantities should throw an error")
    catch

  it 'should be null if quantity units are not compatible', ->
    should(@incompatibleUnitsNull.exec(@ctx)).be.null()

describe 'PopulationStdDev', ->
  @beforeEach ->
    setup @, data
  it 'should be able to find Population Standard Dev of a list ', ->
    @dev.exec(@ctx).should.equal 1.5811388300841898
  it 'should be able to find Population Standard Dev of a list of quantities', ->
    validateQuantity @dev_q.exec(@ctx), 1.5811388300841898, 'ml'
  it 'should be able to find Population Standard Dev of a list of related quantities', ->
    validateQuantity @q_diff_units.exec(@ctx), 1.5811388300841898, 'ml'
  it 'should throw an exception when quantities are not compatible ', ->
    try
      @q_throw1.exec(@ctx)
      false.should.be.true("Incompatible Quantities should throw an error")
    catch
  it 'should throw an exception when quanties exist in a list but not all are quantities', ->
    try
      @q_throw2.exec(@ctx)
      false.should.be.true("Incompatible Quantities should throw an error")
    catch

  it 'should be null if quantity units are not compatible', ->
    should(@incompatibleUnitsNull.exec(@ctx)).be.null()

describe 'Product', ->
  @beforeEach ->
    setup @, data

  it 'should return a decimal product', ->
    @decimal_product.exec(@ctx).should.equal 24.0

  it 'should return a integer product', ->
    @integer_product.exec(@ctx).should.equal 100

  it 'should return 0', ->
    @zero_product.exec(@ctx).should.equal 0

  it 'should return product of non-null items', ->
    @product_with_null.exec(@ctx).should.equal 20

  it 'should return a quantity product', ->
    validateQuantity @quantity_product.exec(@ctx), 24, 'g'

  it 'should return a 0 quantity product', ->
    q = @quantity_zero_product.exec(@ctx)
    validateQuantity q, 0, 'g'

  it 'should return null when null list is passed in', ->
    should(@product_null.exec(@ctx)).be.null()

  it 'should return null when passed in list of null quantities', ->
    should(@product_quantity_null.exec(@ctx)).be.null()

  it 'should return null when list is all null', ->
    should(@product_of_nulls.exec(@ctx)).be.null()

  it 'should be null if quantity units are not compatible', ->
    should(@incompatibleUnitsNull.exec(@ctx)).be.null()

describe 'GeometricMean', ->
  @beforeEach ->
    setup @, data

  it 'should return decimal geometric mean', ->
    @decimal_geometric_mean.exec(@ctx).should.equal 4.0

  it 'should retun 0 as a geometric mean', ->
    @zero_geometric_mean.exec(@ctx).should.equal 0

  it 'should return value when pass in list that contains nulls', ->
    @null_geometric_mean.exec(@ctx).should.equal 1.4142135623730951

  it 'should return null when list is all null', ->
    should(@all_nulls.exec(@ctx)).be.null()

  it 'should return null when pass in list as null', ->
    should(@also_null_geometric_mean.exec(@ctx)).be.null()

  it 'should be null if quantity units are not compatible', ->
    should(@incompatibleUnitsNull.exec(@ctx)).be.null()

describe 'AllTrue', ->
  @beforeEach ->
    setup @, data

  it 'should be able to calculate all true', ->
    @at.exec(@ctx).should.equal true
    @atwn.exec(@ctx).should.equal false
    @atf.exec(@ctx).should.equal false
    @atfwn.exec(@ctx).should.equal false

describe 'AnyTrue', ->
  @beforeEach ->
    setup @, data

  it 'should be able to calculate any true', ->
    @at.exec(@ctx).should.equal true
    @atwn.exec(@ctx).should.equal true
    @atf.exec(@ctx).should.equal false
    @atfwn.exec(@ctx).should.equal false
