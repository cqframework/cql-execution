{ Expression } = require './expression'
{ Quantity } = require('./quantity')

module.exports.Ratio = class Ratio extends Expression
  constructor: (json) ->
    super
    @denominator = json.denominator

    if !json.numerator?
      @numerator = null
    @numerator = new Quantity(json.numerator)

    if !json.denominator?
      @denominator = null
    @denominator = new Quantity(json.denominator)

  # Define a simple getter to allow type-checking of this class without instanceof
  # and in a way that survives minification (as opposed to checking constructor.name)
  Object.defineProperties @prototype,
    isRatio:
      get: -> true

  clone: () ->
    new Ratio({numerator: @numerator, denominator: @denominator})

  exec: (ctx) ->
    @

  toString: () ->
    "#{@numerator.toString()} : #{@denominator.toString()}"

  equals: (other) ->
    if other instanceof Ratio
      if (@numerator.equals(other.numerator) && @denominator.equals(other.denominator))
        true
      else
        false

module.exports.createRatio = createRatio = (numerator, denominator) ->
  new Ratio({numerator: numerator, denominator: denominator})