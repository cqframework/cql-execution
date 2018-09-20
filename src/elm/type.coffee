{ Expression, UnimplementedExpression } = require './expression'
{ FunctionRef } = require './reusable'
{ DateTime, Date } = require '../datatypes/datetime'
{ Concept } = require '../datatypes/clinical'
{ parseQuantity } = require './quantity'
{ isValidDecimal, isValidInteger, limitDecimalPrecision } = require('../util/math')
{ normalizeMillisecondsField, normalizeMillisecondsFieldInString } = require '../util/util'

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
        throw new Error("cannot convert #{strArg} to Boolean")
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
    if arg? and typeof arg != 'undefined' then Date.parse(arg.toString()) else null

module.exports.ToDateTime = class ToDateTime extends Expression
  constructor: (json) ->
    super

  exec: (ctx) ->
    arg = @execArgs(ctx)
    if (not arg?) or (arg == undefined)
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
      # Thh:mm:ss.fff(+|-)hh:mm or Thh:mm:ss.fffZ
      matches = /T((\d{2})(\:(\d{2})(\:(\d{2})(\.(\d+))?)?)?)?(Z|(([+-])(\d{2})(\:?(\d{2}))?))?/.exec timeString
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

      if matches[11]?
        tz = parseInt(matches[12],10) + (if matches[14]? then parseInt(matches[14],10) / 60 else 0)
        timezoneOffset = if matches[11] is '+' then tz else tz * -1
      else if matches[9] == 'Z'
        timezoneOffset = 0

      # Time is implemented as Datetime with year 0, month 1, day 1
      return new DateTime(0, 1, 1, hours, minutes, seconds, milliseconds, timezoneOffset)
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
module.exports.Is = class Is extends UnimplementedExpression

module.exports.IntervalTypeSpecifier = class IntervalTypeSpecifier extends UnimplementedExpression

module.exports.ListTypeSpecifier = class ListTypeSpecifier extends UnimplementedExpression

module.exports.NamedTypeSpecifier = class NamedTypeSpecifier extends UnimplementedExpression

module.exports.TupleTypeSpecifier = class TupleTypeSpecifier extends UnimplementedExpression
