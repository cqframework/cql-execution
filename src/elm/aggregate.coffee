{ Expression } = require './expression'
{ typeIsArray , allTrue, anyTrue, compact, numerical_sort} = require '../util/util'
{ build } = require './builder'
{ Exception } = require '../datatypes/exception'
Quantity = require './quantity'

quantitiesOrArg = (arr) ->
  arr = compact(arr)
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
    Quantity.createQuantity(value, arr[0].unit)
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
      compact(arg).length

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
    arg = @source.execute(ctx)
    if typeIsArray(arg)
      filtered =  numerical_sort(quantitiesOrArg(arg),"asc")
      quantityOrValue(filtered[0],arg)

module.exports.Max = class Max extends AggregateExpression
  constructor:(json) ->
    super

  exec: (ctx) ->
    arg = @source.execute(ctx)
    if typeIsArray(arg)
      filtered =  numerical_sort(quantitiesOrArg(arg),"desc")
      quantityOrValue(filtered[0],arg)

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
      filtered = compact(arg)
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
