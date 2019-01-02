{ Expression } = require './expression'
{ Uncertainty } = require '../datatypes/datatypes'

# Equal is completely handled by overloaded#Equal

# NotEqual is completely handled by overloaded#Equal

module.exports.Less = class Less extends Expression
  constructor: (json) ->
    super

  exec: (ctx) ->
    args = @execArgs(ctx).map (x) -> Uncertainty.from x
    return null unless args[0]? and args[1]?
    args[0].lessThan args[1]

module.exports.LessOrEqual = class LessOrEqual extends Expression
  constructor: (json) ->
    super

  exec: (ctx) ->
    args = @execArgs(ctx).map (x) -> Uncertainty.from x
    return null unless args[0]? and args[1]?
    args[0].lessThanOrEquals args[1]

module.exports.Greater = class Greater extends Expression
  constructor: (json) ->
    super

  exec: (ctx) ->
    args = @execArgs(ctx).map (x) -> Uncertainty.from x
    return null unless args[0]? and args[1]?
    args[0].greaterThan args[1]

module.exports.GreaterOrEqual = class GreaterOrEqual extends Expression
  constructor: (json) ->
    super

  exec: (ctx) ->
    args = @execArgs(ctx).map (x) -> Uncertainty.from x
    return null unless args[0]? and args[1]?
    args[0].greaterThanOrEquals args[1]

module.exports.SameAs = class SameAs extends Expression
  constructor: (json) ->
    super
    @precision = json.precision

  exec: (ctx) ->
    [a, b] = @execArgs(ctx)
    if a? and b? then a.sameAs(b, @precision?.toLowerCase()) else null