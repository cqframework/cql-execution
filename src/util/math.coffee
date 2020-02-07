{ Exception } = require '../datatypes/exception'
{ DateTime, Date } = require '../datatypes/datetime'
{ Uncertainty } = require '../datatypes/uncertainty'

module.exports.MAX_INT_VALUE = MAX_INT_VALUE = Math.pow(2,31)-1
module.exports.MIN_INT_VALUE = MIN_INT_VALUE = Math.pow(-2,31)
module.exports.MAX_FLOAT_VALUE = MAX_FLOAT_VALUE = 99999999999999999999999999999.99999999
module.exports.MIN_FLOAT_VALUE = MIN_FLOAT_VALUE = -99999999999999999999999999999.99999999
module.exports.MIN_FLOAT_PRECISION_VALUE = MIN_FLOAT_PRECISION_VALUE = Math.pow(10,-8)
module.exports.MIN_DATETIME_VALUE = MIN_DATETIME_VALUE = DateTime.parse("0001-01-01T00:00:00.000")
module.exports.MAX_DATETIME_VALUE = MAX_DATETIME_VALUE = DateTime.parse("9999-12-31T23:59:59.999")
module.exports.MIN_DATE_VALUE = MIN_DATE_VALUE = Date.parse("0001-01-01")
module.exports.MAX_DATE_VALUE = MAX_DATE_VALUE = Date.parse("9999-12-31")
module.exports.MIN_TIME_VALUE = MIN_TIME_VALUE = DateTime.parse("0000-01-01T00:00:00.000")
module.exports.MAX_TIME_VALUE = MAX_TIME_VALUE = DateTime.parse("0000-01-01T23:59:59.999")

module.exports.overflowsOrUnderflows = (value) ->
  return false unless value?
  if value.isQuantity
    return true unless isValidDecimal(value.value)
  else if value.isTime? && value.isTime()
    return true if value.after(MAX_TIME_VALUE)
    return true if value.before(MIN_TIME_VALUE)
  else if value.isDateTime
    return true if value.after(MAX_DATETIME_VALUE)
    return true if value.before(MIN_DATETIME_VALUE)
  else if value.isDate
    return true if value.after(MAX_DATE_VALUE)
    return true if value.before(MIN_DATE_VALUE)
  else if Number.isInteger(value)
    return true unless isValidInteger(value)
  else
    return true unless isValidDecimal(value)
  return false

module.exports.isValidInteger = isValidInteger = (integer) ->
  return false if isNaN(integer)
  return false if integer > MAX_INT_VALUE
  return false if integer < MIN_INT_VALUE
  return true

module.exports.isValidDecimal = isValidDecimal = (decimal) ->
  return false if isNaN(decimal)
  return false if decimal > MAX_FLOAT_VALUE
  return false if decimal < MIN_FLOAT_VALUE
  return true

module.exports.limitDecimalPrecision = (decimal) ->
  decimalString = decimal.toString()
  # For decimals so large that they are represented in scientific notation, javascript has already limited
  # the decimal to its own constraints, so we can't determine the original precision.  Leave as-is unless
  # this becomes problematic, in which case we would need our own parseFloat.
  if decimalString.indexOf('e') != -1
    return decimal

  splitDecimalString = decimalString.split('.')
  decimalPoints = splitDecimalString[1]
  if decimalPoints? and decimalPoints.length > 8
    decimalString = splitDecimalString[0] + '.' + splitDecimalString[1].substring(0,8)
  return parseFloat(decimalString)

module.exports.OverFlowException = OverFlowException = class OverFlowException extends Exception

module.exports.successor = successor = (val) ->
  if typeof val is "number"
    if parseInt(val) is val
      if val is MAX_INT_VALUE then throw  new OverFlowException() else val + 1
    else
      #not bothering with the max float test because javascript does not handle floats at the level
      #very well
      val + MIN_FLOAT_PRECISION_VALUE
  else if val?.isDateTime
    if val.sameAs(MAX_DATETIME_VALUE) then throw new OverFlowException() else val.successor()
  else if val?.isDate
    if val.sameAs(MAX_DATE_VALUE) then throw new OverFlowException() else val.successor()
  else if val?.isTime
    if val.sameAs(MAX_TIME_VALUE) then throw new OverFlowException() else val.successor()
  else if val?.isUncertainty
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
  else if val?.isDateTime
    if val.sameAs(MIN_DATETIME_VALUE) then throw new OverFlowException() else val.predecessor()
  else if val?.isDate
    if val.sameAs(MIN_DATE_VALUE) then throw new OverFlowException() else val.predecessor()
  else if val?.isTime
    if val.sameAs(MIN_TIME_VALUE) then throw new OverFlowException() else val.predecessor()
  else if val?.isUncertainty
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
  else if val?.isDateTime
    MAX_DATETIME_VALUE.copy()
  else if val?.isDate
    MAX_DATE_VALUE.copy()
  else if val?.isTime
    MAX_TIME_VALUE.copy()
  else if val?.isQuantity
    val2 = val.clone()
    val2.value = maxValueForInstance val2.value
    val2
  else
    null

module.exports.minValueForInstance = (val) ->
  if typeof val is "number"
    if parseInt(val) is val then MIN_INT_VALUE else MIN_FLOAT_VALUE
  else if val?.isDateTime
    MIN_DATETIME_VALUE.copy()
  else if val?.isDate
    MIN_DATE_VALUE.copy()
  else if val?.isTime
    MIN_TIME_VALUE.copy()
  else if val?.isQuantity
    val2 = val.clone()
    val2.value = minValueForInstance val2.value
    val2
  else
    null


module.exports.decimalAdjust = (type, value, exp) ->
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
