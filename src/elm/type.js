{ Expression, UnimplementedExpression } = require './expression'
{ FunctionRef } = require './reusable'
{ DateTime, Date } = require '../datatypes/datetime'
{ Concept } = require '../datatypes/clinical'
{ parseQuantity, Quantity } = require '../datatypes/quantity'
{ isValidDecimal, isValidInteger, limitDecimalPrecision } = require('../util/math')
{ normalizeMillisecondsField } = require '../util/util'
{ Ratio } = require '../datatypes/ratio'

# TODO: Casting and Conversion needs unit tests!

module.exports.As = class As extends Expression
  constructor: (json) ->
    super
    @asType = json.asType
    @asTypeSpecifier = json.asTypeSpecifier
    @strict = json.strict ? false

  exec: (ctx) ->
    # TODO: Currently just returns the arg (which works for null, but probably not others)
    @execArgs(ctx)

module.exports.ToBoolean = class ToBoolean extends Expression
  constructor: (json) ->
    super

  exec: (ctx) ->
    arg = @execArgs(ctx)
    if arg? and typeof arg != 'undefined'
      strArg = arg.toString().toLowerCase()
      if strArg in ["true", "t", "yes", "y", "1"]
        true
      else if strArg in ["false", "f", "no", "n", "0"]
        false
      else
        null
    else
      null

module.exports.ToConcept = class ToConcept extends Expression
  constructor: (json) ->
    super

  exec: (ctx) ->
    arg = @execArgs(ctx)
    if arg? and typeof arg != 'undefined' then new Concept([arg], arg.display) else null

module.exports.ToDate = class ToDate extends Expression
  constructor: (json) ->
    super

  exec: (ctx) ->
    arg = @execArgs(ctx)
    if (not arg?)
      return null
    else if arg.isDateTime
      return arg.getDate()
    else
      return Date.parse(arg.toString())

module.exports.ToDateTime = class ToDateTime extends Expression
  constructor: (json) ->
    super

  exec: (ctx) ->
    arg = @execArgs(ctx)
    if (not arg?)
      return null
    else if arg.isDate
      return arg.getDateTime()
    else
      return DateTime.parse(arg.toString())

module.exports.ToDecimal = class ToDecimal extends Expression
  constructor: (json) ->
    super

  exec: (ctx) ->
    arg = @execArgs(ctx)
    if arg? and typeof arg != 'undefined'
      decimal = parseFloat(arg.toString())
      decimal = limitDecimalPrecision(decimal)
      return decimal if isValidDecimal(decimal)
    return null

module.exports.ToInteger = class ToInteger extends Expression
  constructor: (json) ->
    super

  exec: (ctx) ->
    arg = @execArgs(ctx)
    if arg? and typeof arg != 'undefined'
      integer = parseInt(arg.toString())
      return integer if isValidInteger(integer)
    return null

module.exports.ToQuantity = class ToQuantity extends Expression
  constructor: (json) ->
    super

  exec: (ctx) ->
    arg = @execArgs(ctx)
    if arg? and typeof arg != 'undefined'
      quantity = parseQuantity(arg.toString())
      return quantity
    else
      return null

module.exports.ToRatio = class ToRatio extends Expression
  constructor: (json) ->
    super

  exec: (ctx) ->
    arg = @execArgs(ctx)
    if arg?
      # Argument will be of form '<quantity>:<quantity>'
      try
        # String will be split into an array. Numerator will be at index 1, Denominator will be at index 4
        splitRatioString = arg.toString().match(/^(\d+(\.\d+)?\s*('.+')?)\s*:\s*(\d+(\.\d+)?\s*('.+')?)$/)
        return null if !splitRatioString?
        numerator = parseQuantity(splitRatioString[1])
        denominator = parseQuantity(splitRatioString[4])
      catch
        # If the input string is not formatted correctly, or cannot be
        # interpreted as a valid Quantity value, the result is null.
        return null
      # The value element of a Quantity must be present.
      return null unless numerator? and denominator?
      return new Ratio(numerator, denominator)
    else
      return null

module.exports.ToString = class ToString extends Expression
  constructor: (json) ->
    super

  exec: (ctx) ->
    arg = @execArgs(ctx)
    if arg? and typeof arg != 'undefined' then arg.toString() else null

module.exports.ToTime = class ToTime extends Expression
  constructor: (json) ->
    super

  exec: (ctx) ->
    arg = @execArgs(ctx)
    if arg? and typeof arg != 'undefined'
      timeString = arg.toString()
      # Return null if string doesn't represent a valid ISO-8601 Time
      # hh:mm:ss.fff or hh:mm:ss.fff
      matches = /^((\d{2})(\:(\d{2})(\:(\d{2})(\.(\d+))?)?)?)?$/.exec timeString
      return null unless matches?
      hours = matches[2]
      minutes = matches[4]
      seconds = matches[6]
      # Validate h/m/s if they exist, but allow null
      if hours?
        return null unless hours >= 0 and hours <= 23
        hours = parseInt(hours, 10)
      if minutes?
        return null unless minutes >= 0 and minutes <= 59
        minutes = parseInt(minutes, 10)
      if seconds?
        return null unless seconds >= 0 and seconds <= 59
        seconds = parseInt(seconds, 10)
      milliseconds = matches[8]
      if milliseconds?
        milliseconds = parseInt(normalizeMillisecondsField(milliseconds))

      # Time is implemented as Datetime with year 0, month 1, day 1 and null timezoneOffset
      return new DateTime(0, 1, 1, hours, minutes, seconds, milliseconds, null)
    else
      return null

module.exports.Convert = class Convert extends Expression
  constructor: (json) ->
    super
    @operand = json.operand
    @toType = json.toType

  exec: (ctx) ->
    switch @toType
      when "{urn:hl7-org:elm-types:r1}Boolean"
        new ToBoolean({"type": "ToBoolean", "operand": @operand}).execute(ctx)
      when "{urn:hl7-org:elm-types:r1}Concept"
        new ToConcept({"type": "ToConcept", "operand": @operand}).execute(ctx)
      when "{urn:hl7-org:elm-types:r1}Decimal"
        new ToDecimal({"type": "ToDecimal", "operand": @operand}).execute(ctx)
      when "{urn:hl7-org:elm-types:r1}Integer"
        new ToInteger({"type": "ToInteger", "operand": @operand}).execute(ctx)
      when "{urn:hl7-org:elm-types:r1}String"
        new ToString({"type": "ToString", "operand": @operand}).execute(ctx)
      when "{urn:hl7-org:elm-types:r1}Quantity"
        new ToQuantity({"type": "ToQuantity", "operand": @operand}).execute(ctx)
      when "{urn:hl7-org:elm-types:r1}DateTime"
        new ToDateTime({"type": "ToDateTime", "operand": @operand}).execute(ctx)
      when "{urn:hl7-org:elm-types:r1}Date"
        new ToDate({"type": "ToDate", "operand": @operand}).execute(ctx)
      when "{urn:hl7-org:elm-types:r1}Time"
        new ToTime({"type": "ToTime", "operand": @operand}).execute(ctx)
      else
        @execArgs(ctx)

module.exports.ConvertsToBoolean = class ConvertsToBoolean extends Expression
  constructor: (json) ->
    super
    @operand = json.operand

  exec: (ctx) ->
    operatorValue = @execArgs(ctx)
    if operatorValue is null
      return null
    else
      canConvertToType(ToBoolean, @operand, ctx)

module.exports.ConvertsToDate = class ConvertsToDate extends Expression
  constructor: (json) ->
    super
    @operand = json.operand

  exec: (ctx) ->
    operatorValue = @execArgs(ctx)
    if operatorValue is null
      return null
    else
      canConvertToType(ToDate, @operand, ctx)

module.exports.ConvertsToDateTime = class ConvertsToDateTime extends Expression
  constructor: (json) ->
    super
    @operand = json.operand

  exec: (ctx) ->
    operatorValue = @execArgs(ctx)
    if operatorValue is null
      return null
    else
      canConvertToType(ToDateTime, @operand, ctx)

module.exports.ConvertsToDecimal = class ConvertsToDecimal extends Expression
  constructor: (json) ->
    super
    @operand = json.operand

  exec: (ctx) ->
    operatorValue = @execArgs(ctx)
    if operatorValue is null
      return null
    else
      canConvertToType(ToDecimal, @operand, ctx)

module.exports.ConvertsToInteger = class ConvertsToInteger extends Expression
  constructor: (json) ->
    super
    @operand = json.operand

  exec: (ctx) ->
    operatorValue = @execArgs(ctx)
    if operatorValue is null
      return null
    else
      canConvertToType(ToInteger, @operand, ctx)

module.exports.ConvertsToQuantity = class ConvertsToQuantity extends Expression
  constructor: (json) ->
    super
    @operand = json.operand

  exec: (ctx) ->
    operatorValue = @execArgs(ctx)
    if operatorValue is null
      return null
    else
      canConvertToType(ToQuantity, @operand, ctx)

module.exports.ConvertsToRatio = class ConvertsToRatio extends Expression
  constructor: (json) ->
    super
    @operand = json.operand

  exec: (ctx) ->
    operatorValue = @execArgs(ctx)
    if operatorValue is null
      return null
    else
      canConvertToType(ToRatio, @operand, ctx)

module.exports.ConvertsToString = class ConvertsToString extends Expression
  constructor: (json) ->
    super
    @operand = json.operand

  exec: (ctx) ->
    operatorValue = @execArgs(ctx)
    if operatorValue is null
      return null
    else
      canConvertToType(ToString, @operand, ctx)

module.exports.ConvertsToTime = class ConvertsToTime extends Expression
  constructor: (json) ->
    super
    @operand = json.operand

  exec: (ctx) ->
    operatorValue = @execArgs(ctx)
    if operatorValue is null
      return null
    else
      canConvertToType(ToTime, @operand, ctx)

canConvertToType = (toFunction, operand, ctx) ->
  try
    value = new toFunction({"type": toFunction.name, "operand": operand}).execute(ctx)
    if value? then true else false
  catch
    false

module.exports.ConvertQuantity = class ConvertQuantity extends Expression
  constructor: (json) ->
    super

  exec: (ctx) ->
    [quantity, newUnit] = @execArgs(ctx)

    if quantity? and newUnit?
      try
        quantity.convertUnit(newUnit)
      catch
        # Cannot convert input to target unit, spec says to return null
        null

module.exports.CanConvertQuantity = class CanConvertQuantity extends Expression
  constructor: (json) ->
    super

  exec: (ctx) ->
    [quantity, newUnit] = @execArgs(ctx)

    if quantity? and newUnit?
      try
        quantity.convertUnit(newUnit)
        return true
      catch
        return false
    return null

module.exports.Is = class Is extends UnimplementedExpression
module.exports.IntervalTypeSpecifier = class IntervalTypeSpecifier extends UnimplementedExpression
module.exports.ListTypeSpecifier = class ListTypeSpecifier extends UnimplementedExpression
module.exports.NamedTypeSpecifier = class NamedTypeSpecifier extends UnimplementedExpression
module.exports.TupleTypeSpecifier = class TupleTypeSpecifier extends UnimplementedExpression
