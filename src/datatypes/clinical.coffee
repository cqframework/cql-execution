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
  constructor: (@oid, @version, codes = []) ->
    @systemMap = new Map()
    for code in codes
      unless @systemMap.has code.system
        @systemMap.set(code.system, new Map())
      @systemMap.get(code.system).set(code.code, { version: code.version, display: code.display })

  Object.defineProperties @prototype,
    isValueSet:
      get: -> true
    codes:
      # for backwards compatibility, still support codes array
      get: ->
        Array.from(@systemMap.entries()).reduce((all, curr) ->
          # Note for below: curr is [system, codeMap], c is [code, {version, display}]
          all.push((Array.from(curr[1].entries()).map (c) -> new Code(c[0], curr[0], c[1].version, c[1].display))...)
          return all
        , [])

  hasMatch: (code) ->
    codesList = toCodeList(code)
    # InValueSet String Overload
    if codesList.length == 1 and typeof codesList[0] is 'string'
      multipleCodeSystemsExist = @systemMap.size > 1
      matchFound = Array.from(@systemMap.values()).some (codes) -> codes.has(codesList[0])
      if multipleCodeSystemsExist and matchFound
        throw new Error('In (valueset) is ambiguous -- multiple codes with multiple code systems exist in value set.')
      return matchFound
    else
      codesList.some (c) =>
        @systemMap.has(c.system) and @systemMap.get(c.system).has(c.code)

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
