{ Expression } = require './expression'
{ FunctionRef } = require './reusable'
{ decimalAdjust, isValidDecimal } = require '../util/math'
{ ValueSet, Code } = require '../datatypes/datatypes'
{ Exception } = require '../datatypes/exception'
{ build } = require './builder'
ucum = require  'ucum'

# Unit conversation is currently implemented on for time duration comparison operations
# TODO: Implement unit conversation for time duration mathematical operations
# TODO: Quantity should probably be available as a datatype (not just ELM expression)
module.exports.Quantity = class Quantity extends Expression
  constructor: (json) ->
    super
    @unit = json.unit

    if !json.value?
      throw new Error("Cannot create a quantity with an undefined value")
    else
      @value = parseFloat json.value
      if !isValidDecimal(@value)
        throw new Error("Cannot create a quantity with an invalid decimal value")

    # Attempt to parse the unit with UCUM. If it fails, throw a friendly error.
    if @unit? and !is_valid_ucum_unit(@unit)
      throw new Error("\'#{@unit}\' is not a valid UCUM unit.")

  # Define a simple getter to allow type-checking of this class without instanceof
  # and in a way that survives minification (as opposed to checking constructor.name)
  Object.defineProperties @prototype,
    isQuantity:
      get: -> true

  clone: () ->
    new Quantity({value: @value, unit: @unit})

  exec: (ctx) ->
    @

  toString: () ->
    "#{@value} '#{@unit}'"

  sameOrBefore: (other) ->
    if other instanceof Quantity
      other_v = convert_value(other.value,ucum_unit(other.unit),ucum_unit(@unit))
      if(!other_v?)
        null
      else
        @value <= other_v

  sameOrAfter: (other) ->
    if other instanceof Quantity
      other_v = convert_value(other.value,ucum_unit(other.unit),ucum_unit(@unit))
      if(!other_v?)
        null
      else
        @value >= other_v

  after: (other) ->
    if other instanceof Quantity
      other_v = convert_value(other.value,ucum_unit(other.unit),ucum_unit(@unit))
      if(!other_v?)
        null
      else
        @value > other_v

  before: (other) ->
    if other instanceof Quantity
      other_v = convert_value(other.value,ucum_unit(other.unit),ucum_unit(@unit))
      if(!other_v?)
        null
      else
        @value < other_v

  equals: (other) ->
    if other instanceof Quantity
      if (!@unit && other.unit ) || (@unit && !other.unit)
        false
      else if !@unit && !other.unit
        @value == other.value
      else
        other_v = convert_value(other.value,ucum_unit(other.unit),ucum_unit(@unit))
        if(!other_v?)
          null
        else
          decimalAdjust("round", @value, -8)  == decimalAdjust("round", other_v, -8)

  convertUnits: (to_units) ->
    convert_value(@value,@unit,to_units)

  dividedBy: (other) ->
    @multiplyDivide(other,"/")

  multiplyBy: (other) ->
    @multiplyDivide(other,".") # in ucum . represents multiplication

  multiplyDivide: (other, operator) ->
    if other instanceof Quantity
      a = if this.unit? then this else new Quantity({value: this.value, unit: "1"})
      b = if other.unit? then other else new Quantity({value: other.value, unit: "1"})
      if a.unit and b.unit
        can_val = a.to_ucum()
        other_can_value = b.to_ucum()
        ucum_value = ucum_multiply(can_val,[[operator,other_can_value]])
        try
          createQuantity(ucum_value.value, units_to_string(ucum_value.units))
        catch
          null
      else
        value = if operator == "/" then a.value / b.value  else a.value * b.value
        unit = a.unit || b.unit
        try
          createQuantity(decimalAdjust("round",value,-8), unit)
        catch
          null
    else
      value = if operator == "/" then @value / other  else @value * other
      try
        createQuantity( decimalAdjust("round",value,-8), coalesceToOne(@unit) )
      catch
        null

  to_ucum: ->
    u = ucum.parse(ucum_unit(@unit))
    u.value *= @value
    u

clean_unit = (units) ->
  if ucum_time_units[units] then ucum_to_cql_units[ucum_time_units[units]] else units

# Hash of time units and their UCUM equivalents, both case-sensitive and case-insensitive
# See http://unitsofmeasure.org/ucum.html#para-31
# The CQL specification says that dates are based on the Gregorian calendar
# UCUM says that years should be Julian. As a result, CQL-based year and month identifiers will
# be matched to the UCUM gregorian units. UCUM-based year and month identifiers will be matched
# to the UCUM julian units.
ucum_time_units = {'years': 'a_g', 'year': 'a_g', 'YEARS': 'a_g', 'YEAR': 'a_g', 'a_g': 'a_g'
  , 'a': 'a_j', 'ANN': 'a_j', 'ann': 'a_j', 'A': 'a_j', 'a_j': 'a_j'
  , 'months': 'mo_g', 'month':'mo_g', 'mo_g': 'mo_g'
  , 'mo': 'mo_j', 'MO': 'mo_j', 'mo_j': 'mo_j'
  , 'weeks': 'wk', 'week': 'wk', 'wk': 'wk', 'WK': 'wk'
  , 'days': 'd', 'day':'d', 'd': 'd', 'D': 'd'
  , 'hours': 'h', 'hour': 'h', 'h': 'h', 'H': 'h'
  , 'minutes': 'min', 'minute': 'min', 'min': 'min', 'MIN': 'min'
  , 'seconds':'s', 'second':'s', 's': 's', 'S': 's'
  , 'milliseconds' : 'ms', 'millisecond' : 'ms', 'ms': 'ms', 'MS': 'ms'
  }

ucum_to_cql_units = {
    'a_j':  'year'
  , 'a_g':  'year'
  , 'mo_j': 'month'
  , 'mo_g': 'month'
  , 'wk':   'week'
  , 'd':    'day'
  , 'h':    'hour'
  , 'min':  'minute'
  , 's':    'second'
  , 'ms':   'millisecond'
}
# this is used to perform any conversions of CQL date time fields to their ucum equivalents
ucum_unit = (unit) ->
  ucum_time_units[unit] || unit || ''

#just a wrapper function to deal with possible exceptions being thrown
convert_value = (value, from, to) ->
  try
    if from == to
      value
    else
      decimalAdjust("round", ucum.convert(value,ucum_unit(from),ucum_unit(to)), -8)
  # If the units could not be alignied ie: incompareable, exception will be thrown, return null
  catch e
    return null

# Cache for unit validity results so we dont have to go to ucum.js for every check.
# Is a map of unit string to boolean validity
unitValidityCache = {}

# Helper for checking if a unit is valid. Checks the cache first, checks with ucum.js otherwise.
is_valid_ucum_unit = (unit) ->
  if unitValidityCache.hasOwnProperty(unit)
    return unitValidityCache[unit]
  else
    try
      ucum.parse(ucum_unit(unit))
      unitValidityCache[unit] = true
      return true
    catch
      unitValidityCache[unit] = false
      return false

module.exports.convert_value = convert_value
# This method will take a ucum.js representation of units and convert them to a string
# ucum.js units are a has of unit => power values.  For instance m/h (meters per hour) in
# ucum.js will be reprsented by the json object {m: 1, h:-1}  negative values are inverted and
# are akin to denominator values in a fraction.  Positive values are somewhat a kin to numerator
# values in that they preceed the inverted values.  It is possible in ucum to have multiple non inverted
# or inverted values.  This method combines all of the non inverted values and appends them with
# the ucum multiplication operator '.' and then appends the inverted values separated by the ucum
# divisor '/' .
units_to_string = (units = {}) ->
  numer = []
  denom = []
  for key in Object.keys(units)
    v = units[key]
    pow = Math.abs v
    str = if pow == 1 then key  else key + pow
    if v < 0 then denom.push str else numer.push str
  unit_string = ""
  unit_string += numer.join(".")
  if denom.length > 0
    unit_string += "/" + denom.join("/")
  if unit_string == "" then "1" else unit_string


# this method is taken from the ucum.js library which it does not  export
# so we need to replicate the behavior here in order to perform multiplication
# and division of the ucum values.
# t:  the ucum quantity being multiplied/divided .  This method modifies the object t that is passed in
# ms: an array of arrays whoes format is [<operator>,<ucum quantity>] an example would be [['.', {value: 1, units: {m:2}}]]
# this would represent multiply t by the value m^2
ucum_multiply = (t, ms=[]) ->
  return t if ms.length == 0
  ret = t
  for mterm in ms
    sign = if mterm[0] == '.' then 1 else -1
    b = mterm[1]
    ret.value *= Math.pow(b.value,sign)
    for k,v of b.units
      ret.units[k] = ret.units[k] || 0
      ret.units[k] = ret.units[k] + sign*v
      if ret.units[k] == 0
        delete ret.units[k]
  ret

module.exports.createQuantity = createQuantity = (value,unit) ->
  new Quantity({value: value, unit: unit})

module.exports.parseQuantity = (str) ->
  components = /([+|-]?\d+\.?\d*)\s*('(.+)')?/.exec str
  if components? and components[1]?
    value = parseFloat(components[1])
    return null unless isValidDecimal(value)
    if components[3]?
      unit = components[3].trim()
    else
      unit = ""
    new Quantity({value: value, unit: unit})
  else
    null

module.exports.doAddition = (a,b) ->
  if a instanceof Quantity and b instanceof Quantity
    [a_unit, b_unit] = [coalesceToOne(a.unit), coalesceToOne(b.unit)]
    # The units don't have to match (m and m^2), but must be convertable
    # we will choose the unit of a to be the unit we return
    val = convert_value(b.value, b_unit, a_unit)
    return null unless val?
    new Quantity({unit: a_unit, value: a.value + val})
  else
    b_unit = if b instanceof Quantity then coalesceToOne(b.unit) else b.unit
    a.copy?().add?(b.value, clean_unit(b_unit))

module.exports.doSubtraction = (a,b) ->
  if a instanceof Quantity and b instanceof Quantity
    [a_unit, b_unit] = [coalesceToOne(a.unit), coalesceToOne(b.unit)]
    # The units don't have to match (m and m^2), but must be convertable
    val = convert_value(b.value, b_unit, a_unit)
    return null unless val?
    new Quantity({unit: a_unit, value: a.value - val})
  else
    b_unit = if b instanceof Quantity then coalesceToOne(b.unit) else b.unit
    a.copy?().add?(b.value * -1 , clean_unit(b_unit))


module.exports.doDivision = (a,b) ->
  if a instanceof Quantity
    a.dividedBy(b)

module.exports.doMultiplication = (a,b) ->
  if a instanceof Quantity then a.multiplyBy(b) else b.multiplyBy(a)

coalesceToOne = (o) ->
  if o? then o else '1'