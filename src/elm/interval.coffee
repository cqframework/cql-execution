{ Expression, UnimplementedExpression } = require './expression'
{ ThreeValuedLogic } = require '../datatypes/logic'
{ build } = require './builder'
{ Quantity, doAddition, doSubtraction, compare_units, convert_value } = require './quantity'
{ successor, predecessor, MIN_FLOAT_PRECISION_VALUE } = require '../util/math'
{ pushOntoArray } = require '../util/util'
dtivl = require '../datatypes/interval'
cmp = require '../util/comparison'


module.exports.Interval = class Interval extends Expression
  constructor: (json) ->
    super
    @lowClosed = json.lowClosed
    @highClosed = json.highClosed
    @low = build(json.low)
    @high = build(json.high)

  # Define a simple getter to allow type-checking of this class without instanceof
  # and in a way that survives minification (as opposed to checking constructor.name)
  Object.defineProperties @prototype,
    isInterval:
      get: -> true

  exec: (ctx) ->
    new dtivl.Interval(@low.execute(ctx), @high.execute(ctx), @lowClosed, @highClosed)

# Equal is completely handled by overloaded#Equal

# NotEqual is completely handled by overloaded#Equal

# Delegated to by overloaded#Contains and overloaded#In
module.exports.doContains = (interval, item, precision) ->
  interval.contains item, precision

# Delegated to by overloaded#Includes and overloaded#IncludedIn
module.exports.doIncludes = doIncludes = (interval, subinterval, precision) ->
  interval.includes subinterval, precision

# Delegated to by overloaded#ProperIncludes and overloaded@ProperIncludedIn
module.exports.doProperIncludes = (interval, subinterval, precision) ->
  interval.properlyIncludes subinterval, precision

# Delegated to by overloaded#After
module.exports.doAfter = (a, b, precision) ->
  a.after b, precision

# Delegated to by overloaded#Before
module.exports.doBefore = (a, b, precision) ->
  a.before b, precision

module.exports.Meets = class Meets extends Expression
  constructor: (json) ->
    super
    @precision = json.precision?.toLowerCase()

  exec: (ctx) ->
    [a, b] = @execArgs ctx
    if a? and b? then a.meets(b, @precision) else null

module.exports.MeetsAfter = class MeetsAfter extends Expression
  constructor: (json) ->
    super
    @precision = json.precision?.toLowerCase()

  exec: (ctx) ->
    [a, b] = @execArgs ctx
    if a? and b? then a.meetsAfter(b, @precision) else null

module.exports.MeetsBefore = class MeetsBefore extends Expression
  constructor: (json) ->
    super
    @precision = json.precision?.toLowerCase()

  exec: (ctx) ->
    [a, b] = @execArgs ctx
    if a? and b? then a.meetsBefore(b, @precision) else null

module.exports.Overlaps = class Overlaps extends Expression
  constructor: (json) ->
    super
    @precision = json.precision?.toLowerCase()

  exec: (ctx) ->
    [a, b] = @execArgs ctx
    if a? and b? then a.overlaps(b, @precision) else null

module.exports.OverlapsAfter = class OverlapsAfter extends Expression
  constructor: (json) ->
    super
    @precision = json.precision?.toLowerCase()

  exec: (ctx) ->
    [a, b] = @execArgs ctx
    if a? and b? then a.overlapsAfter(b, @precision) else null

module.exports.OverlapsBefore = class OverlapsBefore extends Expression
  constructor: (json) ->
    super
    @precision = json.precision?.toLowerCase()

  exec: (ctx) ->
    [a, b] = @execArgs ctx
    if a? and b? then a.overlapsBefore(b, @precision) else null

# Delegated to by overloaded#Union
module.exports.doUnion = (a, b) ->
  a.union(b)

# Delegated to by overloaded#Except
module.exports.doExcept = (a, b) ->
  if a? and b? then a.except(b) else null

# Delegated to by overloaded#Intersect
module.exports.doIntersect = (a, b) ->
  if a? and b? then a.intersect(b) else null

module.exports.Width = class Width extends Expression
  constructor: (json) ->
    super

  exec: (ctx) ->
    @arg.execute(ctx)?.width()

# TODO: Spec has "Begin" defined, but shouldn't it be "Start"?
module.exports.Start = class Start extends Expression
  constructor: (json) ->
    super

  exec: (ctx) ->
    @arg.execute(ctx)?.low

module.exports.End = class End  extends Expression
  constructor: (json) ->
    super

  exec: (ctx) ->
    @arg.execute(ctx)?.high

module.exports.Starts = class Starts extends Expression
  constructor: (json) ->
    super
    @precision = json.precision?.toLowerCase()

  exec: (ctx) ->
    [a, b] = @execArgs ctx
    if a? and b? then a.starts(b, @precision) else null

module.exports.Ends = class Ends extends Expression
  constructor: (json) ->
    super
    @precision = json.precision?.toLowerCase()

  exec: (ctx) ->
    [a, b] = @execArgs ctx
    if a? and b? then a.ends(b, @precision) else null

module.exports.Expand = class Expand extends Expression
  constructor: (json) ->
    super

  exec: (ctx) ->
    # expand(argument List<Interval<T>>, per Quantity) List<Interval<T>>
    [intervals, per] = @execArgs ctx
    intervals = collapseIntervals(intervals, per)
    results = []
    for interval in intervals
      if !interval?
        continue
      # We do not support open ended intervals since result would likely be too long
      if !interval.low? or !interval.high?
        return null

      # if we mix date and datetime, convert to datetime
      if ((interval.low.isDate or interval.high.isDate) and 
      (interval.low.isDateTime or interval.high.isDateTime))
        interval = interval.copy()
        interval.low = interval.low.getDateTime()
        interval.high = interval.high.getDateTime()
      
      # Support for Date, Datetime, Time
      if ((interval.low.isDate and interval.high.isDate) or
      (interval.low.isDateTime and interval.high.isDateTime) or
      (interval.low.isTime?() and interval.high.isTime?()))
        func = @expandDTishInterval

      # Support for Quantity
      else if (interval.low.isQuantity and interval.high.isQuantity)
        func = @expandQuantityInterval

      # Support for Decimal and Integer (note Decimals with .0 (eg 1.0) are considered Integers)
      else if (typeof interval.low is 'number' and typeof interval.high is 'number')
        func = @expandNumericInterval

      if func?
        items = func.call(@,interval,per)
        return null if items == null
        pushOntoArray(results,items)
      # If we are here, Interval type is unsupported or mismatched
      else
        return null

    return results

  expandDTishInterval: (interval, per) ->
    per = per ? new Quantity(value: 1, unit: interval.low.getPrecision())
    if per.unit in ['week', 'weeks']
      per.value *= 7
      per.unit = 'day'
    # return null if precision not applicable (e.g. gram, or minutes for dates)
    return null if per.unit not in interval.low.constructor.FIELDS
    # return null if interval ends have mismatched precision
    return null if interval.low.getPrecision() != interval.high.getPrecision()
    # return null if per is more precise than the ends
    return null if interval.low.isLessPrecise(per.unit)

    start = if interval.lowClosed then interval.low else interval.low.successor()
    return [] if start.after(interval.high)
    # count is how many items to put in the result, take duration and thenn add a one for cases 
    # where e.g. the high point ends a month, like 2018-03-31.
    # we do this to avoid a date comparison operation for each item in the result list
    count = start.durationBetween(interval.high,per.unit).low + 1
    current_low = start
    results = []
    # check if interval should be a point interval
    if current_low.add(per.value, per.unit).predecessor().equals(current_low)
      for i in [0..count]
        results.push(new dtivl.Interval(current_low, current_low.copy(), true, true))
        current_low = current_low.add(per.value, per.unit)
    else
      for i in [0..count]
        high = current_low.add(per.value, per.unit).predecessor()
        results.push(new dtivl.Interval(current_low, high, true, true))
        current_low = current_low.add(per.value, per.unit)
    return [] if results.length == 0    
    # because of the +1 on count, we might have added up to 2 extraneous items at the end
    while results.length > 0 and results[results.length-1].high.after(interval.high)
      results.pop()
    return [] if results.length == 0
    if !interval.highClosed and results[results.length-1].high.equals(interval.high)
      results.pop()
    return results
    
  expandQuantityInterval: (interval, per) ->
    per = per ? new Quantity(value: 1, unit: interval.low.unit)
    # we want to convert everything to the more precise of the interval.low or per
    if compare_units(interval.low.unit, per.unit) > 0 #interval.low.unit is 'bigger' aka les precise
      result_units = per.unit
    else
      result_units = interval.low.unit
    low_value = convert_value(interval.low.value, interval.low.unit, result_units)
    high_value = convert_value(interval.high.value, interval.high.unit, result_units)
    per_value = convert_value(per.value, per.unit, result_units)

    # return null if unit conversion failed, must have mismatched units
    return null if not (low_value? and high_value? and per_value?)

    results = @makeNumericIntervalList(
      low_value, high_value, interval.lowClosed, interval.highClosed, per_value)

    for itvl in results
      itvl.low = new Quantity(value: itvl.low, unit:result_units)
      itvl.high = new Quantity(value: itvl.high, unit:result_units)
    return results

  expandNumericInterval: (interval, per) ->
    return null if per?.unit? and per.unit != '1'
    per_value = per?.value ? 1
    return @makeNumericIntervalList(
      interval.low, interval.high, interval.lowClosed, interval.highClosed, per_value)

  makeNumericIntervalList: (low, high, lowClosed, highClosed, per) ->
    point_intervals = Number.isInteger(low) and Number.isInteger(high) and Number.isInteger(per)
    gap = if point_intervals then 1 else MIN_FLOAT_PRECISION_VALUE
    low = low + gap if !lowClosed
    high = high - gap if !highClosed
    width = per - gap
    return [] if low > high
    results = (new dtivl.Interval(x, x + width, true, true) for x in [low..(high - width)] by per)
    return results

module.exports.Collapse = class Collapse extends Expression
  constructor: (json) ->
    super

  exec: (ctx) ->
    # collapse(argument List<Interval<T>>, per Quantity) List<Interval<T>>
    [intervals, perWidth] = @execArgs ctx
    return collapseIntervals(intervals, perWidth)

collapseIntervals = (intervals, perWidth) ->
  # Clone intervals so this function remains idempotent
  intervalsClone = []
  for interval in intervals
    # The spec says to ignore null intervals
    if interval?
      intervalsClone.push interval.copy()

  # If the list is null, return null
  if !intervals?
    null
  else if intervalsClone?.length <= 1
    intervalsClone
  else
    # If the per argument is null, the default unit interval for the point type
    # of the intervals involved will be used (i.e. the interval that has a
    # width equal to the result of the successor function for the point type).
    if !perWidth?
      if intervalsClone[0].low?
        if intervalsClone[0].low.isDateTime
          precisionUnits = intervalsClone[0].low.getPrecision()
          perWidth = new Quantity(value: 1, unit: precisionUnits)
        else if intervalsClone[0].low.isQuantity
          perWidth = doSubtraction(successor(intervalsClone[0].low), intervalsClone[0].low)
        else
          perWidth = successor(intervalsClone[0].low) - intervalsClone[0].low
      else if intervalsClone[0].high?
        if intervalsClone[0].high.isDateTime
          precisionUnits = intervalsClone[0].high.getPrecision()
          perWidth = new Quantity(value: 1, unit: precisionUnits)
        else if intervalsClone[0].high.isQuantity
          perWidth = doSubtraction(successor(intervalsClone[0].high), intervalsClone[0].high)
        else
          perWidth = successor(intervalsClone[0].high) - intervalsClone[0].high
      else
        throw new Error("Point type of intervals provided to collapse cannot be determined.")

      if typeof perWidth is 'number'
        perWidth = new Quantity(value: perWidth, unit: '1')

    # sort intervalsClone by start
    intervalsClone.sort (a,b)->
      if typeof a.low?.before == 'function'
        return -1 if b.low? and a.low.before b.low
        return 1 if !b.low? or a.low.after b.low
      else if a.low? and b.low?
        return -1 if a.low < b.low
        return 1 if a.low > b.low
      else if a.low? and !b.low?
        return 1
      else if !a.low? and b.low?
        return -1
      # if both lows are undefined, sort by high
      if typeof a.high?.before == 'function'
        return -1 if !b.high? or a.high.before b.high
        return 1 if a.high.after b.high
      else if a.high? and b.high?
        return -1 if a.high < b.high
        return 1 if a.high > b.high
      else if a.high? and !b.high?
        return -1
      else if !a.high? and b.high?
        return 1
      0

    # collapse intervals as necessary
    collapsedIntervals = []
    a = intervalsClone.shift()
    b = intervalsClone.shift()

    while b
      if typeof b.low?.durationBetween == 'function'
        # handle DateTimes using durationBetween
        if a.high?.sameOrAfter b.low # overlap
          a.high = b.high if !b.high? or b.high.after a.high
        else if a.high?.durationBetween(b.low, perWidth.unit).high <= perWidth.value
          a.high = b.high
        else
          collapsedIntervals.push a
          a = b
      else if typeof b.low?.sameOrBefore == 'function'
        if a.high? and b.low.sameOrBefore doAddition(a.high, perWidth)
          a.high = b.high if !b.high? or b.high.after a.high
        else
          collapsedIntervals.push a
          a = b
      else
        if (b.low - a.high) <= perWidth.value
          a.high = b.high if b.high > a.high || !b.high?
        else
          collapsedIntervals.push a
          a = b
      b = intervalsClone.shift()
    collapsedIntervals.push a
    collapsedIntervals
