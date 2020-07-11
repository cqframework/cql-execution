{ Expression } = require './expression'
{ FunctionRef } = require './reusable'
{ ValueSet, Code } = require '../datatypes/datatypes'
{ Exception } = require '../datatypes/exception'
{ build } = require './builder'
DT = require '../datatypes/datatypes'

# Unit conversation is currently implemented on for time duration comparison operations
# TODO: Implement unit conversation for time duration mathematical operations
module.exports.Quantity = class Quantity extends Expression
  constructor: (json) ->
    super
    @value = parseFloat(json.value)
    @unit = json.unit

  exec: (ctx) ->
    new DT.Quantity(@value, @unit)
