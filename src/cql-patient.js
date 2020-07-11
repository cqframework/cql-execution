DT = require './datatypes/datatypes'
{ typeIsArray } = require './util/util'

toDate = (str) ->
  if typeof str is 'string' then new Date(str)
  else null

class Record
  constructor: (@json) ->
    @id = @json.id

  _recursiveGet: (field) ->
    if (field? and field.indexOf('.') >= 0)
      [root, rest] =  field.split('.', 2)
      return (new Record(@_recursiveGet(root)))._recursiveGet(rest)
    return @json[field]

  get: (field) ->
    # the model should return the correct type for the field. For this simple model example,
    # we just cheat and use the shape of the value to determine it. Real implementations should
    # have a more sophisticated approach
    value = @_recursiveGet field
    if typeof value is 'string' and /\d{4}-\d{2}-\d{2}(T[\d\-.]+)?/.test(value) then return @getDate(field)
    if value? and typeof value is 'object' and value.code? and value.system? then return @getCode(field)
    if value? and typeof value is 'object' and (value.low? or value.high?) then return @getInterval(field)
    return value

  getId: () ->
    @id

  getDate: (field) ->
    val = @_recursiveGet field
    if val? then DT.DateTime.parse(val) else null

  getInterval: (field) ->
    val = @_recursiveGet field
    if val? and typeof val is 'object'
      low = if val.low? then DT.DateTime.parse val.low else null
      high = if val.high? then DT.DateTime.parse val.high else null
      new DT.Interval(low, high)

  getDateOrInterval: (field) ->
    val = @_recursiveGet field
    if val? and typeof val is 'object' then @getInterval field else @getDate field

  getCode: (field) ->
    val = @_recursiveGet field
    if val? and typeof val is 'object' then new DT.Code(val.code, val.system, val.version)

class Patient extends Record
  constructor: (json) ->
    super
    @name = json.name
    @gender = json.gender
    @birthDate = if json.birthDate? then DT.DateTime.parse json.birthDate
    @records = {}
    for r in json.records ? []
      @records[r.recordType] ?= []
      @records[r.recordType].push new Record(r)

  findRecords: (profile) ->
    recordType = profile?.match(/(\{https:\/\/github\.com\/cqframework\/cql-execution\/simple\})?(.*)/)[2]
    if recordType is 'Patient' then [@] else @records[recordType] ? []

class PatientSource
  constructor: (@patients) ->
    @nextPatient()

  currentPatient: ->
    @current

  nextPatient: ->
    currentJSON = @patients.shift()
    @current = if currentJSON then new Patient(currentJSON) else undefined

module.exports.Patient = Patient
module.exports.PatientSource = PatientSource
