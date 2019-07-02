{ Exception } = require '../datatypes/exception'
{ Expression } = require './expression'
{ Quantity } = require('../datatypes/quantity')
DT = require('../datatypes/datatypes')

module.exports.Ratio = class Ratio extends Expression
  constructor: (json) ->
    super
    if !json.numerator?
      throw new Error("Cannot create a ratio with an undefined numerator value")
    else
      @numerator = new Quantity(json.numerator.value, json.numerator.unit)

    if !json.denominator?
      throw new Error("Cannot create a ratio with an undefined denominator value")
    else
      @denominator = new Quantity(json.denominator.value, json.denominator.unit)

  exec: (ctx) ->
    new DT.Ratio(@numerator, @denominator)



