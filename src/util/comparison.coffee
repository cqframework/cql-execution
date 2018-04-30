{ DateTime } = require '../datatypes/datetime'
{ Uncertainty } = require '../datatypes/uncertainty'

areNumbers = (a, b) ->
  typeof a is 'number' and typeof b is 'number'

areDateTimesOrQuantities = (a, b) ->
  (a instanceof DateTime and b instanceof DateTime) or (a?.isQuantity and b?.isQuantity)

isUncertainty = (x) ->
  x instanceof Uncertainty

module.exports.lessThan = (a, b, precision = DateTime.Unit.MILLISECOND) ->
  switch
    when areNumbers a, b then a < b
    when areDateTimesOrQuantities a, b then a.before(b, precision)
    when isUncertainty a then a.lessThan b
    when isUncertainty b then Uncertainty.from(a).lessThan b
    else null

module.exports.lessThanOrEquals = (a, b, precision = DateTime.Unit.MILLISECOND) ->
  switch
    when areNumbers a, b then a <= b
    when areDateTimesOrQuantities a, b then a.sameOrBefore(b, precision)
    when isUncertainty a then a.lessThanOrEquals b
    when isUncertainty b then Uncertainty.from(a).lessThanOrEquals b
    else null

module.exports.greaterThan = (a, b, precision = DateTime.Unit.MILLISECOND) ->
  switch
    when areNumbers a, b then a > b
    when areDateTimesOrQuantities a, b then a.after(b, precision)
    when isUncertainty a then a.greaterThan b
    when isUncertainty b then Uncertainty.from(a).greaterThan b
    else null

module.exports.greaterThanOrEquals = (a, b, precision = DateTime.Unit.MILLISECOND) ->
  switch
    when areNumbers a, b then a >= b
    when areDateTimesOrQuantities a, b then a.sameOrAfter(b, precision)
    when isUncertainty a then a.greaterThanOrEquals b
    when isUncertainty b then Uncertainty.from(a).greaterThanOrEquals b
    else null

module.exports.equivalent = equivalent = (a, b) ->
  return true if not a? and not b?
  return false unless a? and b?

  return codesAreEquivalent(a, b) if isCode(a)

  [aClass, bClass] = getClassOfObjects(a, b)

  switch aClass
    when '[object Array]'
      return compareEveryItemInArrays(a, b, equivalent)
    when '[object Object]'
      return compareObjects(a, b, equivalent)

  return equals a, b

isCode = (object) ->
  object.hasMatch and typeof object.hasMatch is 'function'

codesAreEquivalent = (code1, code2) ->
  code1.hasMatch(code2)

getClassOfObjects = (object1, object2) ->
  return ({}.toString.call(obj) for obj in [object1, object2])

compareEveryItemInArrays = (array1, array2, comparisonFunction) ->
  return array1.length is array2.length and array1.every (item, i) -> comparisonFunction(item, array2[i])

compareObjects = (a, b, comparisonFunction) ->
  return false unless classesEqual(a, b)
  return deepCompareKeysAndValues(a, b, comparisonFunction)

classesEqual = (object1, object2) ->
  return object2 instanceof object1.constructor and object1 instanceof object2.constructor

deepCompareKeysAndValues = (a, b, comparisonFunction) ->
  aKeys = getKeysFromObject(a)
  bKeys = getKeysFromObject(b)
  return aKeys.length is bKeys.length and aKeys.every (key) -> comparisonFunction(a[key], b[key])

getKeysFromObject = (object) ->
  return (key for key of object unless typeof(key) is 'function')

module.exports.equals = equals = (a, b) ->
  # Handle null cases first: spec says if either is null, return null
  return null unless a? and b?

  # If one is a Quantity, use the Quantity equals function
  return a.equals b if a?.isQuantity

  # If one is an Uncertainty, convert the other to an Uncertainty
  if a instanceof Uncertainty then b = Uncertainty.from(b)
  else if b instanceof Uncertainty then a = Uncertainty.from(a)

  # Use overloaded 'equals' function if it is available
  return a.equals(b) if typeof a.equals is 'function'

  # Return true of the objects are strictly equal
  return true if a is b

  # Return false if they are instances of different classes
  [aClass, bClass] = getClassOfObjects(a, b)
  return false if aClass isnt bClass

  switch aClass
    when '[object Date]'
      # Compare the ms since epoch
      return a.getTime() is b.getTime()
    when '[object RegExp]'
      # Compare the components of the regular expression
      return ['source', 'global', 'ignoreCase', 'multiline'].every (p) -> a[p] is b[p]
    when '[object Array]'
      return null if a.includes(null) or a.includes(undefined) or b.includes(null) or b.includes(undefined)
      return compareEveryItemInArrays(a, b, equals)
    when '[object Object]'
      return compareObjects(a, b, equals)

  # If we made it this far, we can't handle it
  return false
