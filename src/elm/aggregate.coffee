{ Expression } = require './expression'
{ typeIsArray , allTrue, anyTrue, removeNulls, numerical_sort} = require '../util/util'
{ build } = require './builder'
{ Exception } = require '../datatypes/exception'
{ greaterThan, lessThan } = require '../util/comparison'
{ Quantity, doAddition, doMultiplication } = require '../datatypes/quantity'

class AggregateExpression extends Expression
  constructor:(json) ->
    super
    @source = build json.source

module.exports.Count = class Count extends AggregateExpression
  constructor:(json) ->
    super

  exec: (ctx) ->
    items = @source.execute(ctx)
    return null unless typeIsArray(items)
    removeNulls(items).length

module.exports.Sum = class Sum extends AggregateExpression
  constructor:(json) ->
    super

  exec: (ctx) ->
    items = @source.execute(ctx)
    return null unless typeIsArray(items)

    try
      items = processQuantities(items)
    catch e
      return null

    return null unless items.length > 0

    if hasOnlyQuantities(items)
      values = getValuesFromQuantities(items)
      sum = values.reduce (x, y) -> x + y
      new Quantity(sum, items[0].unit)
    else
      items.reduce (x, y) -> x + y

module.exports.Min = class Min extends AggregateExpression
  constructor:(json) ->
    super

  exec: (ctx) ->
    list = @source.execute(ctx)
    return null unless list?
    listWithoutNulls = removeNulls(list)

    # Check for incompatible units and return null. We don't want to convert
    # the units for Min/Max, so we throw away the converted array if it succeeds
    try
      processQuantities(list)
    catch e
      return null

    return null unless listWithoutNulls.length > 0
    # We assume the list is an array of all the same type.
    minimum = listWithoutNulls[0]
    for element in listWithoutNulls
      minimum = element if lessThan(element, minimum)
    return minimum

module.exports.Max = class Max extends AggregateExpression
  constructor:(json) ->
    super

  exec: (ctx) ->
    items = @source.execute(ctx)
    return null unless items?
    listWithoutNulls = removeNulls(items)

    # Check for incompatible units and return null. We don't want to convert
    # the units for Min/Max, so we throw away the converted array if it succeeds
    try
      processQuantities(items)
    catch e
      return null

    return null unless listWithoutNulls.length > 0
    # We assume the list is an array of all the same type.
    maximum = listWithoutNulls[0]
    for element in listWithoutNulls
      maximum = element if greaterThan(element, maximum)
    maximum

module.exports.Avg = class Avg extends  AggregateExpression
  constructor:(json) ->
    super

  exec: (ctx) ->
    items = @source.execute(ctx)
    return null unless typeIsArray(items)

    try
      items = processQuantities(items)
    catch e
      return null

    return null if items.length == 0

    if hasOnlyQuantities(items)
      values = getValuesFromQuantities(items)
      sum = values.reduce (x, y) -> x + y
      new Quantity(sum / values.length, items[0].unit)
    else
      sum = items.reduce (x, y) -> x + y
      sum / items.length

module.exports.Median = class Median extends AggregateExpression
  constructor:(json) ->
    super

  exec: (ctx) ->
    items = @source.execute(ctx)
    return null unless typeIsArray(items)
    return null unless items.length > 0

    try
      items = processQuantities(items)
    catch e
      return null

    return medianOfNumbers(items) unless hasOnlyQuantities(items)

    values = getValuesFromQuantities(items)
    median = medianOfNumbers(values)
    new Quantity(median, items[0].unit)


module.exports.Mode = class Mode extends AggregateExpression
  constructor:(json) ->
    super

  exec: (ctx) ->
    items = @source.execute(ctx)
    return null unless typeIsArray(items)
    return null unless items.length > 0

    try
      filtered = processQuantities(items)
    catch e
      return null

    if hasOnlyQuantities(filtered)
      values = getValuesFromQuantities(filtered)
      mode = @mode(values)
      if mode.length == 1
        mode = mode[0]
      new Quantity(mode, items[0].unit)
    else
      mode = @mode(filtered)
      if mode.length == 1 then mode[0] else mode

  mode: (arr) ->
    max = 0
    counts = {}
    results = []
    for elem in arr
      cnt = counts[elem] = (counts[elem] ? 0) + 1
      if cnt is max and elem not in results
        results.push elem
      else if cnt > max
        results = [elem]
        max = cnt
    results


module.exports.StdDev = class StdDev extends AggregateExpression
  # TODO: This should be a derived class of an abstract base class 'Statistic'
  # rather than the base class

  constructor: (json) ->
    super
    @type = "standard_deviation"

  exec: (ctx) ->
    items = @source.execute(ctx)
    return null unless typeIsArray(items)

    try
      items = processQuantities(items)
    catch e
      return null

    return null unless items.length > 0

    if hasOnlyQuantities(items)
      values = getValuesFromQuantities(items)
      stdDev = @standardDeviation(values)
      new Quantity(stdDev, items[0].unit)
    else
      @standardDeviation(items)

  standardDeviation: (list) ->
    val = @stats(list)
    if val then val[@type]

  stats:(list) ->
    sum = list.reduce (x,y) -> x+y
    mean = sum / list.length
    sumOfSquares = 0

    for sq in list
      sumOfSquares += Math.pow((sq - mean),2)

    std_var = (1/list.length) * sumOfSquares
    pop_var = (1/(list.length-1)) * sumOfSquares
    std_dev = Math.sqrt std_var
    pop_dev = Math.sqrt pop_var
    {standard_variance: std_var, population_variance: pop_var, standard_deviation: std_dev, population_deviation: pop_dev}

module.exports.Product = class Product extends AggregateExpression
  constructor:(json) ->
    super

  exec: (ctx) ->
    items = @source.execute(ctx)
    return null unless typeIsArray(items)
    try
      items = processQuantities(items)
    catch e
      return null
    return null unless items.length > 0

    if hasOnlyQuantities(items)
      values = getValuesFromQuantities(items)
      product = values.reduce (x, y) -> x * y
      # Units are not multiplied for the geometric product
      new Quantity(product, items[0].unit)
    else
      items.reduce (x, y) -> x * y

module.exports.GeometricMean = class GeometricMean extends AggregateExpression
  constructor:(json) ->
    super

  exec: (ctx) ->
    items = @source.execute(ctx)
    return null unless typeIsArray(items)
    try
      items = processQuantities(items)
    catch e
      return null
    return null unless items.length > 0
    if hasOnlyQuantities(items)
      values = getValuesFromQuantities(items)
      product = values.reduce (x, y) -> x * y
      geoMean = Math.pow(product, 1.0 / items.length)
      new Quantity(geoMean, items[0].unit)
    else
      product = items.reduce (x, y) -> x * y
      Math.pow(product, 1.0 / items.length)

module.exports.PopulationStdDev = class PopulationStdDev extends StdDev
  constructor:(json) ->
    super
    @type = "population_deviation"

module.exports.Variance = class Variance extends  StdDev
  constructor:(json) ->
    super
    @type = "standard_variance"

module.exports.PopulationVariance = class PopulationVariance extends  StdDev
  constructor:(json) ->
    super
    @type = "population_variance"

module.exports.AllTrue = class AllTrue extends AggregateExpression
  constructor:(json) ->
    super

  exec: (ctx) ->
    items = @source.execute(ctx)
    allTrue(items)

module.exports.AnyTrue = class AnyTrue extends AggregateExpression
  constructor:(json) ->
    super

  exec: (ctx) ->
    items = @source.execute(ctx)
    anyTrue(items)

processQuantities = (values) ->
  values = removeNulls(values)
  if hasOnlyQuantities(values)
    values = convertAllUnits(values)
  else if hasSomeQuantities(values)
    throw new Exception("Cannot perform aggregate operations on mixed values of Quantities and non Quantities")
  else
    values

getValuesFromQuantities = (quantities) ->
  quantities.map (quantity) -> quantity.value

hasOnlyQuantities = (arr) ->
  arr.every (x) -> x.isQuantity

hasSomeQuantities = (arr) ->
  arr.some (x) -> x.isQuantity

convertAllUnits = (arr) ->
  # convert all quantities in array to match the unit of the first item
  converted = []
  for quantity in arr
    converted.push(quantity.convertUnit(arr[0].unit))

  converted

medianOfNumbers = (numbers) ->
  numbers = numerical_sort(numbers, "asc")
  if (numbers.length % 2 == 1)
    # Odd number of items
    numbers[(numbers.length - 1) / 2]
  else
    # Even number of items
    (numbers[(numbers.length / 2) - 1] + numbers[(numbers.length / 2)]) / 2
