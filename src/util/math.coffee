{ Exception } = require '../datatypes/exception'
{ DateTime } = require '../datatypes/datetime'
{ Uncertainty } = require '../datatypes/uncertainty'

module.exports.MAX_INT_VALUE = MAX_INT_VALUE = Math.pow(2,31)-1
module.exports.MIN_INT_VALUE = MIN_INT_VALUE = Math.pow(-2,31)
module.exports.MAX_FLOAT_VALUE = MAX_FLOAT_VALUE = 99999999999999999999999999999.99999999
module.exports.MIN_FLOAT_VALUE = MIN_FLOAT_VALUE = -99999999999999999999999999999.99999999
module.exports.MIN_FLOAT_PRECISION_VALUE = MIN_FLOAT_PRECISION_VALUE = Math.pow(10,-8)
module.exports.MIN_DATE_VALUE = MIN_DATE_VALUE = DateTime.parse("0001-01-01T00:00:00.000")
module.exports.MAX_DATE_VALUE = MAX_DATE_VALUE = DateTime.parse("9999-12-31T23:59:59.999")
module.exports.MIN_TIME_VALUE = MAX_TIME_VALUE = DateTime.parse("0000-01-01T00:00:00.000")
module.exports.MAX_TIME_VALUE = MAX_TIME_VALUE = DateTime.parse("0000-01-01T23:59:59.999")


module.exports.isValidInteger = isValidInteger = (integer) ->
  throw new Error("Unable to parse Integer") if isNaN(integer)
  throw new Error("Maximum Integer value exceeded") if integer > MAX_INT_VALUE
  throw new Error("Minimum Integer value exceeded") if integer < MIN_INT_VALUE
  return true

module.exports.isValidDecimal = isValidDecimal = (decimal) ->
  throw new Error("Unable to parse Decimal") if isNaN(decimal)
  throw new Error("Maximum Decimal value exceeded") if decimal > MAX_FLOAT_VALUE
  throw new Error("Minimum Decimal value exceeded") if decimal < MIN_FLOAT_VALUE
  throw new Error("Maximum Decimal precision") if getDecimalPrecision(decimal) > 8
  return true

getDecimalPrecision = (decimal) ->
  decimalString = decimal.toString()
  decimalPoints = decimalString.split('.')[1]
  if decimalPoints?
    return decimalPoints.length
  else
    return 0

module.exports.OverFlowException = OverFlowException = class OverFlowException extends Exception

module.exports.successor = successor = (val) ->
  if typeof val is "number"
    if parseInt(val) is val
      if val is MAX_INT_VALUE then throw  new OverFlowException() else val + 1
    else
      #not bothering with the max float test because javascript does not handle floats at the level
      #very well
      val + MIN_FLOAT_PRECISION_VALUE
  else if val instanceof DateTime
    if val.sameAs(MAX_DATE_VALUE) then throw new OverFlowException() else val.successor()
  else if val instanceof Uncertainty
    # For uncertainties, if the high is the max val, don't increment it
    high = try successor val.high; catch e then val.high
    new Uncertainty(successor(val.low), high)
  else if val?.isQuantity
    succ = val.clone()
    succ.value = successor val.value
    succ
  else if not val?
    null

module.exports.predecessor = predecessor = (val) ->
  if typeof val is "number"
    if parseInt(val) is val
      if val is MIN_INT_VALUE then throw  new OverFlowException() else val - 1
    else
      #not bothering with the min float test because javascript does not handle floats at the level
      #very well
      val - MIN_FLOAT_PRECISION_VALUE
  else if val instanceof DateTime
    if val.sameAs(MIN_DATE_VALUE) then throw new OverFlowException() else val.predecessor()
  else if val instanceof Uncertainty
    # For uncertainties, if the low is the min val, don't decrement it
    low = try predecessor val.low; catch e then val.low
    new Uncertainty(low, predecessor(val.high))
  else if val?.isQuantity
    pred = val.clone()
    pred.value = predecessor val.value
    pred
  else if not val?
    null

module.exports.maxValueForInstance = (val) ->
  if typeof val is "number"
    if parseInt(val) is val then MAX_INT_VALUE else MAX_FLOAT_VALUE
  else if val instanceof DateTime
    MAX_DATE_VALUE
  else if val?.isQuantity
    val2 = val.clone()
    val2.value = maxValueForInstance val2.value
    val2
  else
    null

module.exports.minValueForInstance = (val) ->
  if typeof val is "number"
    if parseInt(val) is val then MIN_INT_VALUE else MIN_FLOAT_VALUE
  else if val instanceof DateTime
    MIN_DATE_VALUE
  else if val?.isQuantity
    val2 = val.clone()
    val2.value = minValueForInstance val2.value
    val2
  else
    null


module.exports.decimalAdjust =(type, value, exp) ->
  #If the exp is undefined or zero...
  if typeof exp == 'undefined' || +exp == 0
    return Math[type](value)
  value = +value
  exp = +exp
  #If the value is not a number or the exp is not an integer...
  if isNaN(value) || !(typeof exp == 'number' && exp % 1 == 0)
    return NaN
  #Shift
  value = value.toString().split('e')
  v = if value[1] then (+value[1] - exp) else -exp
  value = Math[type](+(value[0] + 'e' + v))
  #Shift back
  value = value.toString().split('e')
  v = if value[1] then (+value[1] + exp) else exp
  +(value[0] + 'e' + v )
