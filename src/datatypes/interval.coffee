{ DateTime } = require './datetime'
{ Uncertainty } = require './uncertainty'
{ ThreeValuedLogic } = require './logic'
{ successor, predecessor, maxValueForInstance, minValueForInstance } = require '../util/math'
cmp = require '../util/comparison'

module.exports.Interval = class Interval
  constructor: (@low, @high, @lowClosed = true, @highClosed = true) ->

  # Define a simple getter to allow type-checking of this class without instanceof
  # and in a way that survives minification (as opposed to checking constructor.name)
  Object.defineProperties @prototype,
    isInterval:
      get: -> true

  copy: ->
    newLow = @low
    newHigh = @high
    if @low? and typeof @low.copy == 'function'
      newLow = @low.copy()
    if @high? and typeof @high.copy == 'function'
      newHigh = @high.copy();

    new Interval(newLow, newHigh, @lowClosed, @highClosed)

  contains: (item, precision) ->
    if item instanceof Interval then throw new Error("Argument to contains must be a point")
    closed = @toClosed()
    ThreeValuedLogic.and(
      cmp.lessThanOrEquals(closed.low, item, precision),
      cmp.greaterThanOrEquals(closed.high, item, precision)
    )

  properlyIncludes: (other, precision) ->
    if not (other instanceof Interval) then throw new Error("Argument to properlyIncludes must be an interval")
    ThreeValuedLogic.and(
      @includes(other, precision),
      ThreeValuedLogic.not(other.includes(@, precision))
    )

  includes: (other, precision) ->
    if not (other instanceof Interval)
      return @.contains(other,precision)
    a = @toClosed()
    b = other.toClosed()
    ThreeValuedLogic.and(
      cmp.lessThanOrEquals(a.low, b.low, precision),
      cmp.greaterThanOrEquals(a.high, b.high, precision)
    )

  includedIn: (other, precision) ->
    # For the point overload, this operator is a synonym for the in operator
    if not (other instanceof Interval)
      @.contains(other, precision)
    else
      other.includes @

  overlaps: (item, precision) ->
    closed = @toClosed()
    [low, high] = if item instanceof Interval
      itemClosed = item.toClosed()
      [itemClosed.low, itemClosed.high]
    else
      [item, item]
    ThreeValuedLogic.and(
      cmp.lessThanOrEquals(closed.low, high, precision),
      cmp.greaterThanOrEquals(closed.high, low, precision)
    )

  overlapsAfter: (item, precision) ->
    closed = @toClosed()
    high = if item instanceof Interval then item.toClosed().high else item
    ThreeValuedLogic.and(
      cmp.lessThanOrEquals(closed.low, high, precision),
      cmp.greaterThan(closed.high, high, precision)
    )

  overlapsBefore: (item, precision) ->
    closed = @toClosed()
    low = if item instanceof Interval then item.toClosed().low else item
    ThreeValuedLogic.and(
      cmp.lessThan(closed.low, low, precision),
      cmp.greaterThanOrEquals(closed.high, low, precision)
    )

  areDateTimes = (x, y) ->
    [x, y].every (z) -> z instanceof DateTime

  areNumeric = (x, y) ->
    [x, y].every (z) -> typeof z is 'number' or (z instanceof Uncertainty and typeof z.low is 'number')

  lowestNumericUncertainty = (x, y) ->
    if not(x instanceof Uncertainty) then x = new Uncertainty(x)
    if not(y instanceof Uncertainty) then y = new Uncertainty(y)
    low = if x.low < y.low then x.low else y.low
    high = if x.high < y.high then x.high else y.high
    if low != high then return new Uncertainty(low, high) else return low

  highestNumericUncertainty = (x, y) ->
    if not(x instanceof Uncertainty) then x = new Uncertainty(x)
    if not(y instanceof Uncertainty) then y = new Uncertainty(y)
    low = if x.low > y.low then x.low else y.low
    high = if x.high > y.high then x.high else y.high
    if low != high then return new Uncertainty(low, high) else return low

  union: (other) ->
    if not (other instanceof Interval) then throw new Error("Argument to union must be an interval")
    # Note that interval union is only defined if the arguments overlap or meet.
    if @overlaps(other) or @meets(other)
      [a, b] = [@toClosed(), other.toClosed()]
      [l, lc] = switch
        when cmp.lessThanOrEquals(a.low, b.low) then [@low, @lowClosed]
        when cmp.greaterThanOrEquals(a.low, b.low) then [other.low, other.lowClosed]
        when areNumeric(a.low, b.low) then [lowestNumericUncertainty(a.low, b.low), true]
        # TODO: Do we need to support quantities here?
        when areDateTimes(a.low, b.low) and a.low.isMorePrecise(b.low) then [other.low, other.lowClosed]
        else [@low, @lowClosed]
      [h, hc] = switch
        when cmp.greaterThanOrEquals(a.high, b.high) then [@high, @highClosed]
        when cmp.lessThanOrEquals(a.high, b.high) then [other.high, other.highClosed]
        when areNumeric(a.high, b.high) then [highestNumericUncertainty(a.high, b.high), true]
        # TODO: Do we need to support quantities here?
        when areDateTimes(a.high, b.high) and a.high.isMorePrecise(b.high) then [other.high, other.highClosed]
        else [@high, @highClosed]
      new Interval(l, h, lc, hc)
    else
      null

  intersect: (other) ->
    if not (other instanceof Interval) then throw new Error("Argument to union must be an interval")
    # Note that interval union is only defined if the arguments overlap.
    if @overlaps(other)
      [a, b] = [@toClosed(), other.toClosed()]
      [l, lc] = switch
        when cmp.greaterThanOrEquals(a.low, b.low) then [@low, @lowClosed]
        when cmp.lessThanOrEquals(a.low, b.low) then [other.low, other.lowClosed]
        when areNumeric(a.low, b.low) then [highestNumericUncertainty(a.low, b.low), true]
        # TODO: Do we need to support quantities here?
        when areDateTimes(a.low, b.low) and b.low.isMorePrecise(a.low) then [other.low, other.lowClosed]
        else [@low, @lowClosed]
      [h, hc] = switch
        when cmp.lessThanOrEquals(a.high, b.high) then [@high, @highClosed]
        when cmp.greaterThanOrEquals(a.high, b.high) then [other.high, other.highClosed]
        when areNumeric(a.high, b.high) then [lowestNumericUncertainty(a.high, b.high), true]
        # TODO: Do we need to support quantities here?
        when areDateTimes(a.high, b.high) and b.high.isMorePrecise(a.high) then [other.high, other.highClosed]
        else [@high, @highClosed]
      new Interval(l, h, lc, hc)
    else
      null

  except: (other) ->
    if (other == null) then return null
    if not (other instanceof Interval) then throw new Error("Argument to except must be an interval")

    ol = @overlaps other
    if ol is true
      olb = @overlapsBefore other
      ola = @overlapsAfter other
      if olb is true and ola is false then new Interval(@low, other.low, @lowClosed, not other.lowClosed)
      else if ola is true and olb is false then new Interval(other.high, @high, not other.highClosed, @highClosed)
      else null
    else if ol is false
      @
    else # ol is null
      null

  sameAs: (other, precision) ->
    # This large if and else if block handles the scenarios where there is an open ended null
    # If both lows or highs exists, it can be determined that intervals are not Same As
    if (@low? and other.low? and !@high? and other.high? and !@highClosed) or
       (@low? and other.low? and @high? and !other.high? and !other.highClosed) or
       (@low? and other.low? and !@high? and !other.high? and !other.highClosed and !@highClosed)
      if typeof @low == 'number'
        if !(@.start() == other.start()) then return false
      else
        if !(@.start().sameAs(other.start(), precision)) then return false
    else if (@low? and !other.low? and @high? and other.high?) or
            (!@low? and other.low? and @high? and other.high?) or
            (!@low? and !other.low? and @high? and other.high?)
      if typeof @high == 'number'
        if !(@.end() == other.end()) then return false
      else
        if !(@.end().sameAs(other.end(), precision)) then return false

    # Checks to see if any of the Intervals have a open, null boundary
    if (!@low? and !@lowClosed) or
       (!@high? and !@highClosed) or
       (!other.low? and !other.lowClosed) or
       (!other.high? and !other.highClosed)
      return null

    # For the special cases where @ is Interval[null,null]
    if @lowClosed and !@low? and @highClosed and !@high?
      return other.lowClosed and !other.low? and other.highClosed and !other.high?

    # For the special case where Interval[...] same as Interval[null,null] should return false
    # This accounts for the inverse of the if statement above: where the second Interval is [null,null] and not the first Interval
    # The reason why this isn't caught below is due to how start() and end() work
    # There is no way to tell the datatype for MIN and MAX if both boundaries are null
    if other.lowClosed and !other.low? and other.highClosed and !other.high?
      return false

    if typeof @low == 'number'
      @.start() == other.start() and @.end() == other.end()
    else
      @.start().sameAs(other.start(), precision) and @.end().sameAs(other.end(), precision)

  equals: (other) ->
    if other instanceof Interval
      [a, b] = [@toClosed(), other.toClosed()]
      ThreeValuedLogic.and(
        cmp.equals(a.low, b.low),
        cmp.equals(a.high, b.high)
      )
    else
      false

  after: (other, precision) ->
    closed = @toClosed()
    # Meets spec, but not 100% correct (e.g., (null, 5] after [6, 10] --> null)
    # Simple way to fix it: and w/ not overlaps
    if !!other.toClosed
      cmp.greaterThan closed.low, other.toClosed().high, precision
    else
      cmp.greaterThan closed.low, other, precision

  before: (other, precision) ->
    closed = @toClosed()
    # Meets spec, but not 100% correct (e.g., (null, 5] after [6, 10] --> null)
    # Simple way to fix it: and w/ not overlaps
    if !!other.toClosed
      cmp.lessThan closed.high, other.toClosed().low, precision
    else
      cmp.lessThan closed.high, other, precision

  meets: (other, precision) ->
    ThreeValuedLogic.or(
      @meetsBefore(other, precision),
      @meetsAfter(other, precision)
    )

  meetsAfter: (other, precision) ->
    try
      if precision? and @low instanceof DateTime
        @toClosed().low.sameAs(other.toClosed().high?.add(1, precision), precision)
      else
        cmp.equals @toClosed().low, successor(other.toClosed().high)
    catch
      false

  meetsBefore: (other, precision) ->
    try
      if precision? and @high instanceof DateTime
        @toClosed().high.sameAs(other.toClosed().low?.add(-1, precision), precision)
      else
        cmp.equals @toClosed().high, predecessor(other.toClosed().low)
    catch
      false

  start: () ->
    if !@low?
      if @lowClosed
        return minValueForInstance(@high)
      else
        return @low
    return @toClosed().low

  end: () ->
    if !@high?
      if @highClosed
        return maxValueForInstance(@low)
      else
        return @high
    return @toClosed().high

  starts: (other, precision) ->
    if precision? and @low instanceof DateTime
      startEqual = @low.sameAs(other.low, precision)
    else
      startEqual = cmp.equals(@low, other.low)
    endLessThanOrEqual = cmp.lessThanOrEquals(@high, other.high, precision)
    startEqual and endLessThanOrEqual

  ends: (other, precision) ->
    startGreaterThanOrEqual = cmp.greaterThanOrEquals(@low, other.low, precision)
    if precision? and @low instanceof DateTime
      endEqual = @high.sameAs(other.high, precision)
    else
      endEqual = cmp.equals(@high, other.high)
    startGreaterThanOrEqual && endEqual

  width: () ->
    if @low instanceof DateTime or @high instanceof DateTime
      throw new Error("Width of DateTime intervals is not supported")

    closed = @toClosed()
    if closed.low instanceof Uncertainty or closed.high instanceof Uncertainty
      null
    else
      # TODO: Fix precision to 8 decimals in other places that return numbers
      diff = Math.abs(closed.high - closed.low)
      Math.round(diff * Math.pow(10, 8)) / Math.pow(10, 8)


  toClosed: () ->
    point = @low ? @high
    if typeof(point) is 'number' or point instanceof DateTime or point?.isQuantity or point?.isDate
      low = switch
        when @lowClosed and not @low? then minValueForInstance point
        when not @lowClosed and @low? then successor @low
        else @low
      high = switch
        when @highClosed and not @high? then maxValueForInstance point
        when not @highClosed and @high? then predecessor @high
        else @high
      if not low? then low = new Uncertainty(minValueForInstance(point), high)
      if not high? then high = new Uncertainty(low, maxValueForInstance(point))
      new Interval(low, high, true, true)
    else
      new Interval(@low, @high, true, true)

  toString:  () ->
    start = if @lowClosed then '[' else '('
    end = if @highClosed then ']' else ')'
    return start + @low.toString() + ', ' + @high.toString() + end
