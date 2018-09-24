{ Exception } = require '../datatypes/exception'
{ Expression } = require './expression'
{ Quantity } = require('./quantity')

module.exports.Ratio = class Ratio extends Expression
  constructor: (json) ->
    super
    if !json.numerator?
      throw new Error("Cannot create a ratio with an undefined numerator value")
    else
      @numerator = new Quantity(json.numerator)

    if !json.denominator?
      throw new Error("Cannot create a ratio with an undefined denominator value")
    else
      @denominator = new Quantity(json.denominator)

  # Define a simple getter to allow type-checking of this class without instanceof
  # and in a way that survives minification (as opposed to checking constructor.name)
  Object.defineProperties @prototype,
    isRatio:
      get: -> true

  clone: () ->
    new Ratio({numerator: @numerator.clone(), denominator: @denominator.clone()})

  exec: (ctx) ->
    @

  toString: () ->
    "#{@numerator.toString()} : #{@denominator.toString()}"

  equals: (other) ->
    if other instanceof Ratio
      divided_this = @numerator.dividedBy(@denominator)
      divided_other = other.numerator.dividedBy(other.denominator)
      divided_this.equals(divided_other)

module.exports.createRatio = createRatio = (numerator, denominator) ->
  new Ratio({numerator: numerator, denominator: denominator})