{ Expression } = require './expression'
{ typeIsArray , allTrue, anyTrue, removeNulls, numerical_sort} = require '../util/util'
{ build } = require './builder'
{ Exception } = require '../datatypes/exception'
{ greaterThan, lessThan } = require '../util/comparison'
{ Quantity, createQuantity, doMultiplication } = require '../datatypes/quantity'

quantitiesOrArg = (arr) ->
  arr = removeNulls(arr)
  # short curcuit empty arrays and return
  if arr.length == 0
    return arr

  allQs = arr.every (x) -> x.isQuantity
  someQs = arr.some (x) -> x.isQuantity
  if allQs
    unit = arr[0].unit
    values = []
    for i in arr
      values.push i.convertUnits(unit)
    return values
  else if someQs
    throw new Exception("Cannot perform aggregate operations on mixed values of Quantities and non Quantities")
  else
    arr

quantityOrValue = (value, arr) ->
  # we used the first unit in the list to convert to so that is what
  # we will use as a unit for quantities
  if arr?[0]?.unit
    createQuantity(value, arr[0].unit)
  else
    value

class AggregateExpression extends Expression
  constructor:(json) ->
    super
    @source = build json.source

module.exports.Count = class Count extends AggregateExpression
  constructor:(json) ->
    super

  exec: (ctx) ->
    arg = @source.execute(ctx)
    if typeIsArray(arg)
      removeNulls(arg).length

module.exports.Sum = class Sum extends AggregateExpression
  constructor:(json) ->
    super

  exec: (ctx) ->
    arg = @source.execute(ctx)
    if typeIsArray(arg)
      filtered =  quantitiesOrArg(arg)
      val = if filtered.length == 0 then null else filtered.reduce (x,y) -> x+y
      quantityOrValue(val, arg)

module.exports.Min = class Min extends AggregateExpression
  constructor:(json) ->
    super

  exec: (ctx) ->
    list = @source.execute(ctx)
    return null unless list?
    listWithoutNulls = removeNulls(list)
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
    list = @source.execute(ctx)
    return null unless list?
    listWithoutNulls = removeNulls(list)
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
    arg = @source.execute(ctx)
    if typeIsArray(arg)
      filtered = quantitiesOrArg(arg)
      return null if filtered.length == 0
      sum = filtered.reduce (x,y) -> x+y
      quantityOrValue((sum / filtered.length),arg)

module.exports.Median = class Median extends AggregateExpression
  constructor:(json) ->
    super

  exec: (ctx) ->
    arg = @source.execute(ctx)
    if typeIsArray(arg)
      filtered =  numerical_sort(quantitiesOrArg(arg),"asc")
      if filtered.length == 0
        null
      else if (filtered.length % 2 == 1)
         quantityOrValue(filtered[(filtered.length - 1) / 2],arg)
      else
        v = (filtered[(filtered.length / 2) - 1] +
         filtered[(filtered.length / 2)]) / 2
        quantityOrValue(v,arg)

module.exports.Mode = class Mode extends AggregateExpression
  constructor:(json) ->
    super

  exec: (ctx) ->
    arg = @source.execute(ctx)
    if typeIsArray(arg)
      filtered = removeNulls(arg)
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

  constructor:(json) ->
    super
    @type = "standard_deviation"

  exec: (ctx) ->
    args = @source.execute(ctx)
    if typeIsArray(args)
      val = quantitiesOrArg(args)
      if val.length > 0 then quantityOrValue(@calculate(val),args)  else null

  calculate: (list) ->
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
    listOfValues = @source.execute(ctx)
    return null if listOfValues is null
    [product, filtered] = productValue(listOfValues)
    return null if product is null
    return quantityOrValue(product, listOfValues)

module.exports.GeometricMean = class GeometricMean extends AggregateExpression
  constructor:(json) ->
    super

  exec: (ctx) ->
    listOfValues = @source.execute(ctx)
    return null if listOfValues is null
    [product, filtered] = productValue(listOfValues)
    return null if product is null
    geoMean = Math.pow(product, 1.0 / filtered.length)
    return geoMean

productValue = (list) ->
  product = 1
  if typeIsArray(list)
    filtered = removeNulls(list)
    return [null, null] if filtered.length == 0
    for item in filtered
      if item.isQuantity
        product = doMultiplication(product,item)
      else
        product = product * item
    return [product, filtered]
  else
    [null, null]

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
    args =@source.execute(ctx)
    allTrue(args)

module.exports.AnyTrue = class AnyTrue extends AggregateExpression
  constructor:(json) ->
    super

  exec: (ctx) ->
    args = @source.execute(ctx)
    anyTrue(args)
