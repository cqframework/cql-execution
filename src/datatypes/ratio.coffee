module.exports.Ratio = class Ratio
  constructor: (@numerator, @denominator) ->
    if !@numerator?
      throw new Error("Cannot create a ratio with an undefined numerator")
    if !@denominator?
      throw new Error("Cannot create a ratio with an undefined denominator")

  # Define a simple getter to allow type-checking of this class without instanceof
  # and in a way that survives minification (as opposed to checking constructor.name)
  Object.defineProperties @prototype,
    isRatio:
      get: -> true

  clone: () ->
    new Ratio(@numerator.clone(), @denominator.clone())

  toString: () ->
    "#{@numerator.toString()} : #{@denominator.toString()}"

  equals: (other) ->
    if other?.isRatio
      divided_this = @numerator.dividedBy(@denominator)
      divided_other = other.numerator.dividedBy(other.denominator)
      divided_this.equals(divided_other)
    else
      false

  equivalent: (other) ->
    equal = @equals(other)
    if !equal?
      return false
    equal
