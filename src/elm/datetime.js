{ Expression } = require './expression'
{ build } = require './builder'
{ Literal } = require './literal'
DT = require '../datatypes/datatypes'

module.exports.DateTime = class DateTime extends Expression
  @PROPERTIES = ['year', 'month', 'day', 'hour', 'minute', 'second', 'millisecond', 'timezoneOffset']
  constructor: (@json) ->
    super

  exec: (ctx) ->
    for property in DateTime.PROPERTIES
      # if json does not contain 'timezoneOffset' set it to the executionDateTime from the context
      if @json[property]?
        @[property] = build @json[property]
      else if property == 'timezoneOffset' and ctx.getTimezoneOffset()?
        @[property] = Literal.from({"type": "Literal", "value": ctx.getTimezoneOffset(), "valueType": "{urn:hl7-org:elm-types:r1}Integer"})
    args = ((if @[p]? then @[p].execute(ctx)) for p in DateTime.PROPERTIES)
    new DT.DateTime(args...)

module.exports.Date = class Date extends Expression
  @PROPERTIES = ['year', 'month', 'day']
  constructor: (@json) ->
    super

  exec: (ctx) ->
    for property in Date.PROPERTIES
      if @json[property]?
        @[property] = build @json[property]
    args = ((if @[p]? then @[p].execute(ctx)) for p in Date.PROPERTIES)
    new DT.Date(args...)

module.exports.Time = class Time extends Expression
  @PROPERTIES = ['hour', 'minute', 'second', 'millisecond']
  constructor: (json) ->
    super
    for property in Time.PROPERTIES
      if json[property]? then @[property] = build json[property]

  exec: (ctx) ->
    args = ((if @[p]? then @[p].execute(ctx)) for p in Time.PROPERTIES)
    (new DT.DateTime(0, 1, 1, args...)).getTime()

module.exports.Today = class Today extends Expression
  constructor: (json) ->
    super

  exec: (ctx) ->
    ctx.getExecutionDateTime().getDate()

module.exports.Now = class Now extends Expression
  constructor: (json) ->
    super

  exec: (ctx) ->
    ctx.getExecutionDateTime()

module.exports.TimeOfDay = class TimeOfDay extends Expression
  constructor: (json) ->
    super

  exec: (ctx) ->
    ctx.getExecutionDateTime().getTime()

module.exports.DateTimeComponentFrom = class DateTimeComponentFrom extends Expression
  constructor: (json) ->
    super
    @precision = json.precision

  exec: (ctx) ->
    arg = @execArgs(ctx)
    if arg? then arg[@precision.toLowerCase()] else null

module.exports.DateFrom = class DateFrom extends Expression
  constructor: (json) ->
    super

  exec: (ctx) ->
    date = @execArgs(ctx)
    if date? then date.getDate() else null

module.exports.TimeFrom = class TimeFrom extends Expression
  constructor: (json) ->
    super

  exec: (ctx) ->
    date = @execArgs(ctx)
    if date? then date.getTime() else null

module.exports.TimezoneOffsetFrom = class TimezoneOffsetFrom extends Expression
  constructor: (json) ->
    super

  exec: (ctx) ->
    date = @execArgs(ctx)
    if date? then date.timezoneOffset else null

# Delegated to by overloaded#After
module.exports.doAfter = (a, b, precision) ->
  a.after b, precision

# Delegated to by overloaded#Before
module.exports.doBefore = (a, b, precision) ->
  a.before b, precision

module.exports.DifferenceBetween = class DifferenceBetween extends Expression
  constructor: (json) ->
    super
    @precision = json.precision

  exec: (ctx) ->
    args = @execArgs(ctx)
    # Check to make sure args exist and that they have differenceBetween functions so that they can be compared to one another
    if !args[0]? || !args[1]? || typeof args[0].differenceBetween != 'function' || typeof args[1].differenceBetween != 'function'
      return null
    result = args[0].differenceBetween(args[1], @precision?.toLowerCase())
    if result? && result.isPoint() then result.low else result

module.exports.DurationBetween = class DurationBetween extends Expression
  constructor: (json) ->
    super
    @precision = json.precision

  exec: (ctx) ->
    args = @execArgs(ctx)
    # Check to make sure args exist and that they have durationBetween functions so that they can be compared to one another
    if !args[0]? || !args[1]? || typeof args[0].durationBetween != 'function' || typeof args[1].durationBetween != 'function'
      return null
    result = args[0].durationBetween(args[1], @precision?.toLowerCase())
    if result? && result.isPoint() then result.low else result
