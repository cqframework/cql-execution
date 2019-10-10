{ Expression } = require './expression'
dt = require '../datatypes/datatypes'
{ build } = require './builder'

module.exports.ValueSetDef = class ValueSetDef extends Expression
  constructor: (json) ->
    super
    @name = json.name
    @id = json.id
    @version = json.version
    #todo: code systems and versions

  exec: (ctx) ->
    valueset = ctx.codeService.findValueSet(@id, @version) ? new dt.ValueSet(@id, @version)
    ctx.rootContext().set @name, valueset
    valueset

module.exports.ValueSetRef = class ValueSetRef extends Expression
  constructor: (json) ->
    super
    @name = json.name
    @libraryName = json.libraryName

  exec: (ctx) ->
    # TODO: This calls the code service every time-- should be optimized
    valueset = ctx.getValueSet(@name, @libraryName)
    if valueset instanceof Expression
      valueset = valueset.execute(ctx)
    valueset

module.exports.AnyInValueSet = class AnyInValueSet extends Expression
  constructor: (json) ->
    super
    @codes = build json.codes
    @valueset = new ValueSetRef json.valueset

  exec: (ctx) ->
    valueset = @valueset.execute(ctx)
    # If the value set reference cannot be resolved, a run-time error is thrown.
    throw new Error("ValueSet must be provided to InValueSet function") unless valueset? and valueset.isValueSet

    codes = @codes.exec(ctx)
    return false unless codes?
    for code in codes
      return true if valueset.hasMatch(code)
    return false

module.exports.InValueSet = class InValueSet extends Expression
  constructor: (json) ->
    super
    @code = build json.code
    @valueset = new ValueSetRef json.valueset

  exec: (ctx) ->
    # If the code argument is null, the result is false
    return false unless @code?
    throw new Error("ValueSet must be provided to InValueSet function") unless @valueset?
    code = @code.execute(ctx)
    # spec indicates to return false if code is null, throw error if value set cannot be resolved
    return false unless code?
    valueset = @valueset.execute(ctx)
    throw new Error("ValueSet must be provided to InValueSet function") unless valueset? and valueset.isValueSet
    # If there is a code and valueset return whether or not the valueset has the code
    return valueset.hasMatch code

module.exports.CodeSystemDef = class CodeSystemDef extends Expression
  constructor: (json) ->
    super
    @name = json.name
    @id = json.id
    @version = json.version

  exec: (ctx) ->
    new dt.CodeSystem(@id, @version)

module.exports.CodeDef = class CodeDef extends Expression
  constructor: (json) ->
    super
    @name = json.name
    @id = json.id
    @systemName = json.codeSystem.name
    @display = json.display

  exec: (ctx) ->
    system = ctx.getCodeSystem(@systemName)?.execute(ctx)
    new dt.Code(@id, system.id, system.version, @display)

module.exports.CodeRef = class CodeRef extends Expression
  constructor: (json) ->
    super
    @name = json.name
    @library = json.libraryName

  exec: (ctx) ->
    ctx = if @library then ctx.getLibraryContext(@library) else ctx
    ctx.getCode(@name)?.execute(ctx)

module.exports.Code = class Code extends Expression
  constructor: (json) ->
    super
    @code = json.code
    @systemName = json.system.name
    @version = json.version
    @display = json.display

  # Define a simple getter to allow type-checking of this class without instanceof
  # and in a way that survives minification (as opposed to checking constructor.name)
  Object.defineProperties @prototype,
    isCode:
      get: -> true

  exec: (ctx) ->
    system = ctx.getCodeSystem(@systemName)?.id
    new dt.Code(@code, system, @version, @display)

module.exports.ConceptDef = class ConceptDef extends Expression
  constructor: (json) ->
    super
    @name = json.name
    @display = json.display
    @codes = json.code

  exec: (ctx) ->
    codes = (ctx.getCode(code.name)?.execute(ctx) for code in @codes)
    new dt.Concept(codes, @display)

module.exports.ConceptRef = class ConceptRef extends Expression
  constructor: (json) ->
    super
    @name = json.name

  exec: (ctx) ->
    ctx.getConcept(@name)?.execute(ctx)

module.exports.Concept = class Concept extends Expression
  constructor: (json) ->
    super
    @codes = json.code
    @display = json.display

  # Define a simple getter to allow type-checking of this class without instanceof
  # and in a way that survives minification (as opposed to checking constructor.name)
  Object.defineProperties @prototype,
    isConcept:
      get: -> true

  toCode: (ctx, code) ->
    system = ctx.getCodeSystem(code.system.name)?.id
    return new dt.Code(code.code, system, code.version, code.display)

  exec: (ctx) ->
    codes = (@toCode(ctx, code) for code in @codes)
    new dt.Concept(codes, @display)

module.exports.CalculateAge = class CalculateAge extends Expression
  constructor: (json) ->
    super
    @precision = json.precision

  exec: (ctx) ->
    date1 = @execArgs(ctx)
    date2 = dt.DateTime.fromJSDate(ctx.getExecutionDateTime())
    result = date1?.durationBetween(date2, @precision.toLowerCase())
    if result? && result.isPoint() then result.low else result

module.exports.CalculateAgeAt = class CalculateAgeAt extends Expression
  constructor: (json) ->
    super
    @precision = json.precision

  exec: (ctx) ->
    [date1, date2] = @execArgs(ctx)
    if date1? && date2?
      # date1 is the birthdate, convert it to date if date2 is a date (to support ignoring time)
      if date2.isDate and date1.isDateTime
        date1 = date1.getDate()
      result = date1.durationBetween(date2, @precision.toLowerCase())
      if result? && result.isPoint() then result.low else result
    else
      null
