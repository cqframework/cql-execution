{ typeIsArray } = require '../util/util'

module.exports.Code = class Code
  constructor: (@code, @system, @version, @display) ->

  # Define a simple getter to allow type-checking of this class without instanceof
  # and in a way that survives minification (as opposed to checking constructor.name)
  Object.defineProperties @prototype,
    isCode:
      get: -> true

  hasMatch: (code) ->
    if typeof code is 'string'
      # the specific behavior for this is not in the specification. Matching codesystem behavior.
      code == @.code
    else
      codesInList(toCodeList(code), [@])

module.exports.Concept = class Concept
  constructor: (@codes = [], @display) ->

  # Define a simple getter to allow type-checking of this class without instanceof
  # and in a way that survives minification (as opposed to checking constructor.name)
  Object.defineProperties @prototype,
    isConcept:
      get: -> true

  hasMatch: (code) ->
    codesInList(toCodeList(code), @codes)

module.exports.ValueSet = class ValueSet
  constructor: (@oid, @version, @codes = []) ->

  Object.defineProperties @prototype,
    isValueSet:
      get: -> true

  hasMatch: (code) ->
    codesList = toCodeList(code)
    # InValueSet String Overload
    if codesList.length == 1 and typeof codesList[0] is 'string'
      matchFound = false
      multipleCodeSystemsExist = false
      for codeItem in @codes
        # Confirm all code systems match
        if codeItem.system != @codes[0].system
          multipleCodeSystemsExist = true
        if codeItem.code == codesList[0]
          matchFound = true
        if multipleCodeSystemsExist and matchFound
          throw new Error('In (valueset) is ambiguous -- multiple codes with multiple code systems exist in value set.')
      return matchFound
    else
      codesInList(codesList, @codes)

toCodeList = (c) ->
  if not c?
    []
  else if typeIsArray c
    list = []
    for c2 in c
      list = list.concat(toCodeList(c2))
    list
  else if typeIsArray c.codes
    c.codes
  else
    [c]


codesInList = (cl1, cl2) ->
  cl1.some (c1) -> (cl2.some (c2) ->
    # only the left argument (cl1) can contain strings. cl2 will only contain codes.
    if typeof c1 is 'string'
      # for "string in codesystem" this should compare the string to
      # the code's "code" field according to the specification.
      c1 == c2.code
    else
      codesMatch(c1, c2))

codesMatch = (code1, code2) ->
  code1.code == code2.code and code1.system == code2.system

module.exports.CodeSystem = class CodeSystem
  constructor: (@id, @version) ->
