module.exports.compact = (things)-> things.filter (x)-> x?

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