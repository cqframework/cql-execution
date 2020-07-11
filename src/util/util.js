module.exports.removeNulls = (things) -> things.filter (x) -> x?

module.exports.numerical_sort = (things, direction="asc") ->
  things.sort (a,b)->
    if direction is "asc"
      a - b
    else
      b - a

module.exports.isNull = (value) ->
  return value==null
  
module.exports.typeIsArray  = typeIsArray  = Array.isArray || ( value ) ->
  return {}.toString.call( value ) is '[object Array]'

module.exports.allTrue = (things) ->
  if typeIsArray things
    things.every (x) -> x
  else
    things

module.exports.anyTrue = (things) ->
  if typeIsArray things
    things.some (x) -> x
  else
    things

#The export below is to make it easier if js Date is overwritten with CQL Date
module.exports.jsDate = Date
module.exports.normalizeMillisecondsFieldInString = normalizeMillisecondsFieldInString = (string, msString) ->
  # TODO: verify we are only removing numeral digits
  msString = normalizeMillisecondsField(msString)
  [beforeMs, msAndAfter] = string.split('.')
  timezoneSeparator = getTimezoneSeparatorFromString(msAndAfter)

  timezoneField = msAndAfter?.split(timezoneSeparator)[1] if !!timezoneSeparator
  timezoneField = '' if !timezoneField?
  string = beforeMs + '.' + msString + timezoneSeparator + timezoneField

module.exports.normalizeMillisecondsField = normalizeMillisecondsField = (msString) ->
  # fix up milliseconds by padding zeros and/or truncating (5 --> 500, 50 --> 500, 54321 --> 543, etc.)
  msString = (msString + "00").substring(0, 3)

module.exports.getTimezoneSeparatorFromString = getTimezoneSeparatorFromString = (string) ->
  if string?.match(/-/)?.length == 1
    timezoneSeparator = '-'
  else if string?.match(/\+/)?.length == 1
    timezoneSeparator = '+'
  else
    timezoneSeparator = ''
