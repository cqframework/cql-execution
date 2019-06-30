{ DateTime } = require '../datatypes/datetime'
{ Uncertainty } = require '../datatypes/uncertainty'

areNumbers = (a, b) ->
  typeof a is 'number' and typeof b is 'number'

areDateTimesOrQuantities = (a, b) ->
  a?.isDateTime and b?.isDateTime or
  a?.isDate and b?.isDate or
  a?.isTime and b?.isTime or
  a?.isQuantity and b?.isQuantity

isUncertainty = (x) ->
  x instanceof Uncertainty

module.exports.lessThan = (a, b, precision) ->
  switch
    when areNumbers a, b then a < b
    when areDateTimesOrQuantities a, b then a.before(b, precision)
    when isUncertainty a then a.lessThan b
    when isUncertainty b then Uncertainty.from(a).lessThan b
    else null

module.exports.lessThanOrEquals = (a, b, precision) ->
  switch
    when areNumbers a, b then a <= b
    when areDateTimesOrQuantities a, b then a.sameOrBefore(b, precision)
    when isUncertainty a then a.lessThanOrEquals b
    when isUncertainty b then Uncertainty.from(a).lessThanOrEquals b
    else null

module.exports.greaterThan = (a, b, precision) ->
  switch
    when areNumbers a, b then a > b
    when areDateTimesOrQuantities a, b then a.after(b, precision)
    when isUncertainty a then a.greaterThan b
    when isUncertainty b then Uncertainty.from(a).greaterThan b
    else null

module.exports.greaterThanOrEquals = (a, b, precision) ->
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

  # Use overloaded 'equivalent' function if it is available
  return a.equivalent(b) if typeof a.equivalent is 'function'

  [aClass, bClass] = getClassOfObjects(a, b)

  switch aClass
    when '[object Array]'
      return compareEveryItemInArrays(a, b, equivalent)
    when '[object Object]'
      return compareObjects(a, b, equivalent)
    when '[object String]'
      # Make sure b is also a string
      if bClass == '[object String]'
        # String equivalence is case- and locale insensitive
        a = a.replace(/\s/g, ' ')
        b = b.replace(/\s/g, ' ')
        return (a.localeCompare(b, 'en', {sensitivity: 'base'})) == 0

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
  aKeys = getKeysFromObject(a).sort()
  bKeys = getKeysFromObject(b).sort()
  # Array.every() will only return true or false, so set a flag for if we should return null
  shouldReturnNull = false
  # Check if both arrays of keys are the same length and key names match
  if aKeys.length is bKeys.length and aKeys.every((value, index) => value == bKeys[index])
    finalComparisonResult = aKeys.every (key) ->
      # if both are null we should return true to satisfy ignoring empty values in tuples
      return true if not a[key]? and not b[key]?
      comparisonResult = comparisonFunction(a[key], b[key])
      shouldReturnNull = true if comparisonResult == null
      return comparisonResult
  else
    finalComparisonResult = false

  return null if shouldReturnNull
  return finalComparisonResult

getKeysFromObject = (object) ->
  objectClass = {}.toString.call(object)
  return (key for key of object unless isFunction(key))

isFunction = (input) ->
  return input instanceof Function || {}.toString.call(input) == '[object Function]'

module.exports.equals = equals = (a, b) ->
  # Handle null cases first: spec says if either is null, return null
  return null unless a? and b?

  # If one is a Quantity, use the Quantity equals function
  return a.equals b if a?.isQuantity

  # If one is a Ratio, use the ratio equals function
  return a.equals b if a?.isRatio

  # If one is an Uncertainty, convert the other to an Uncertainty
  if a instanceof Uncertainty then b = Uncertainty.from(b)
  else if b instanceof Uncertainty then a = Uncertainty.from(a)

  # Use overloaded 'equals' function if it is available
  return a.equals(b) if typeof a.equals is 'function'

  # Return true of the objects are primitives and are strictly equal
  if typeof a is typeof b and typeof a is 'string' or typeof a is 'number' or typeof a is 'boolean'
    return a is b

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
      return null if a.indexOf(null) >= 0 or a.indexOf(undefined) >= 0 or b.indexOf(null) >= 0 or b.indexOf(undefined) >= 0
      return compareEveryItemInArrays(a, b, equals)
    when '[object Object]'
      return compareObjects(a, b, equals)
    when '[object Function]'
      return a.toString() == b.toString()

  # If we made it this far, we can't handle it
  return false
