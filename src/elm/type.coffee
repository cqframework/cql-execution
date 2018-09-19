{ Expression, UnimplementedExpression } = require './expression'
{ FunctionRef } = require './reusable'
{ DateTime, Date } = require '../datatypes/datetime'
{ Concept } = require '../datatypes/clinical'
{ parseQuantity } = require './quantity'
{ isValidDecimal, isValidInteger, limitDecimalPrecision } = require('../util/math')

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
      strArg = arg.toString()
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
     else
      return null

module.exports.ToInteger = class ToInteger extends Expression
  constructor: (json) ->
    super

  exec: (ctx) ->
    arg = @execArgs(ctx)
    if arg? and typeof arg != 'undefined'
      integer = parseInt(arg.toString())
      return integer if isValidInteger(integer)
    else
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
      dt = DateTime.parse(arg.toString())
      if dt? and typeof dt != 'undefined' then dt.getTime() else null
    else
      null

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
