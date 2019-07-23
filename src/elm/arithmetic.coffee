{ Expression } = require './expression'
{ typeIsArray , allTrue, anyTrue} = require '../util/util'
{ build } = require './builder'
MathUtil = require '../util/math'
{ Quantity, doAddition, doSubtraction, doMultiplication, doDivision } = require('../datatypes/quantity')

module.exports.Add = class Add extends Expression
  constructor: (json) ->
    super

  exec: (ctx) ->
    args = @execArgs(ctx)
    sum = null
    if (not args? || args.some (x) -> not x?)
      null
    else
      args?.reduce (x,y) ->
        if x.isQuantity  or x.isDateTime or x.isDate or x.isTime
          sum = doAddition(x,y)
        else
          sum = x + y

    return null if MathUtil.overflowsOrUnderflows(sum)
    sum

module.exports.Subtract = class Subtract extends Expression
  constructor: (json) ->
    super

  exec: (ctx) ->
    args = @execArgs(ctx)
    difference = null
    if (not args? || args.some (x) -> not x?)
      null
    else
      args.reduce (x,y) ->
        if x.isQuantity or x.isDateTime or x.isDate
          difference = doSubtraction(x,y)
        else
          difference = x - y

    return null if MathUtil.overflowsOrUnderflows(difference)
    difference


module.exports.Multiply = class Multiply extends Expression
  constructor: (json) ->
    super

  exec: (ctx) ->
    args = @execArgs(ctx)
    product = null
    if (not args? || args.some (x) -> not x?)
      null
    else
      args?.reduce (x,y) ->
        if x.isQuantity or y.isQuantity
          product = doMultiplication(x,y)
        else
          product = x * y

    return null if MathUtil.overflowsOrUnderflows(product)
    product

module.exports.Divide = class Divide extends Expression
  constructor: (json) ->
    super

  exec: (ctx) ->
    args = @execArgs(ctx)
    quotient = null
    if (not args? || args.some (x) -> not x?)
      null
    else
      args?.reduce (x,y) ->
        if x.isQuantity
          quotient = doDivision(x,y)
        else
          quotient = x / y

    # Note, anything divided by 0 is Infinity in Javascript, which will be
    # considered as overflow by this check.
    return null if MathUtil.overflowsOrUnderflows(quotient)
    quotient

module.exports.TruncatedDivide = class TruncatedDivide extends  Expression
  constructor: (json) ->
    super

  exec: (ctx) ->
    args = @execArgs(ctx)
    if (not args? || args.some (x) -> not x?)
      null
    else
      quotient = Math.floor( args.reduce (x,y) -> x / y)

    return null if MathUtil.overflowsOrUnderflows(quotient)
    quotient

module.exports.Modulo = class Modulo extends  Expression
  constructor: (json) ->
    super

  exec: (ctx) ->
    args = @execArgs(ctx)
    if (not args? || args.some (x) -> not x?)
      null
    else
      args.reduce (x,y) -> x % y

module.exports.Ceiling = class Ceiling extends  Expression
  constructor: (json) ->
    super

  exec: (ctx) ->
    arg = @execArgs(ctx)
    if (not arg?)
      null
    else
      Math.ceil arg

module.exports.Floor = class Floor extends  Expression
  constructor: (json) ->
    super

  exec: (ctx) ->
    arg = @execArgs(ctx)
    if (not arg?)
      null
    else
      Math.floor arg

module.exports.Truncate = class Truncate extends Floor

module.exports.Abs = class Abs extends  Expression
  constructor: (json) ->
    super

  exec: (ctx) ->
    arg = @execArgs(ctx)
    if (not arg?)
      null
    else if arg.isQuantity
      new Quantity(Math.abs(arg.value), arg.unit)
    else
      Math.abs arg

module.exports.Negate = class Negate extends Expression
  constructor: (json) ->
    super

  exec: (ctx) ->
    arg = @execArgs(ctx)
    if (not arg?)
      null
    else if arg.isQuantity
      new Quantity(arg.value * -1, arg.unit)
    else
      arg * -1

module.exports.Round = class Round extends  Expression
  constructor: (json) ->
    super
    @precision = build json.precision

  exec: (ctx) ->
    arg = @execArgs(ctx)
    if (not arg?)
      null
    else
      dec = if @precision? then @precision.execute(ctx) else 0
      Math.round(arg * Math.pow(10, dec)) / Math.pow(10, dec)

module.exports.Ln = class Ln extends  Expression
  constructor: (json) ->
    super

  exec: (ctx) ->
    arg = @execArgs(ctx)
    if (not arg?)
      null
    else
      Math.log arg

module.exports.Exp = class Exp extends  Expression
  constructor: (json) ->
    super

  exec: (ctx) ->
    arg = @execArgs(ctx)
    if (not arg?)
      null
    else
      power = Math.exp arg

    return null if MathUtil.overflowsOrUnderflows(power)
    power

module.exports.Log = class Log extends  Expression
  constructor: (json) ->
    super

  exec: (ctx) ->
    args = @execArgs(ctx)
    if (not args? || args.some (x) -> not x?)
      null
    else
      args.reduce (x,y) -> Math.log(x)/Math.log(y)

module.exports.Power = class Power extends Expression
  constructor: (json) ->
    super

  exec: (ctx) ->
    args = @execArgs(ctx)
    power = null
    if (not args? || args.some (x) -> not x?)
      null
    else
      power = args.reduce (x,y) -> Math.pow(x , y)

    return null if MathUtil.overflowsOrUnderflows(power)
    power

module.exports.MinValue = class MinValue extends Expression
  MIN_VALUES = {}
  MIN_VALUES['{urn:hl7-org:elm-types:r1}Integer'] = MathUtil.MIN_INT_VALUE
  MIN_VALUES['{urn:hl7-org:elm-types:r1}Decimal'] = MathUtil.MIN_FLOAT_VALUE
  MIN_VALUES['{urn:hl7-org:elm-types:r1}DateTime'] = MathUtil.MIN_DATETIME_VALUE
  MIN_VALUES['{urn:hl7-org:elm-types:r1}Date'] = MathUtil.MIN_DATE_VALUE
  MIN_VALUES['{urn:hl7-org:elm-types:r1}Time'] = MathUtil.MIN_TIME_VALUE

  constructor: (json) ->
    super
    @valueType = json.valueType

  exec: (ctx) ->
    if MIN_VALUES[@valueType]
      if @valueType == '{urn:hl7-org:elm-types:r1}DateTime'
        minDateTime = MIN_VALUES[@valueType].copy()
        minDateTime.timezoneOffset = ctx.getTimezoneOffset()
        return minDateTime
      else
        MIN_VALUES[@valueType]
    else
      throw new Error("Minimum not supported for #{@valueType}")

module.exports.MaxValue = class MaxValue extends Expression
  MAX_VALUES = {}
  MAX_VALUES['{urn:hl7-org:elm-types:r1}Integer'] = MathUtil.MAX_INT_VALUE
  MAX_VALUES['{urn:hl7-org:elm-types:r1}Decimal'] = MathUtil.MAX_FLOAT_VALUE
  MAX_VALUES['{urn:hl7-org:elm-types:r1}DateTime'] = MathUtil.MAX_DATETIME_VALUE
  MAX_VALUES['{urn:hl7-org:elm-types:r1}Date'] = MathUtil.MAX_DATE_VALUE
  MAX_VALUES['{urn:hl7-org:elm-types:r1}Time'] = MathUtil.MAX_TIME_VALUE

  constructor: (json) ->
    super
    @valueType = json.valueType

  exec: (ctx) ->
    if MAX_VALUES[@valueType]?
      if @valueType == '{urn:hl7-org:elm-types:r1}DateTime'
        maxDateTime = MAX_VALUES[@valueType].copy()
        maxDateTime.timezoneOffset = ctx.getTimezoneOffset()
        return maxDateTime
      else
        MAX_VALUES[@valueType]
    else
      throw new Error("Maximum not supported for #{@valueType}")

module.exports.Successor = class Successor extends Expression
  constructor: (json) ->
    super

  exec: (ctx) ->
    arg = @execArgs(ctx)
    successor = null
    if (not arg?)
      null
    else
      try
        # MathUtil.successor throws on overflow, and the exception is used in
        # the logic for evaluating `meets`, so it can't be changed to just return null
        successor = MathUtil.successor arg
      catch e
        if e instanceof MathUtil.OverFlowException
          return null

    return null if MathUtil.overflowsOrUnderflows(successor)
    successor

module.exports.Predecessor = class Predecessor extends  Expression
  constructor: (json) ->
    super

  exec: (ctx) ->
    arg = @execArgs(ctx)
    predecessor = null
    if (not arg?)
      null
    else
      # MathUtil.predecessor throws on underflow, and the exception is used in
      # the logic for evaluating `meets`, so it can't be changed to just return null
      try
        predecessor = MathUtil.predecessor arg
      catch e
        if e instanceof MathUtil.OverFlowException
          return null

    return null if MathUtil.overflowsOrUnderflows(predecessor)
    predecessor
