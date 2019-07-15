module.exports.Results = class Results
  constructor: () ->
    @patientResults = {}
    @unfilteredResults = {}
    @localIdPatientResultsMap = {}

  recordPatientResult: (patient_ctx, resultName, result) ->
    p = patient_ctx.patient
    # NOTE: From now on prefer getId() over id() because some data models may have an id property
    # that is not a string (e.g., FHIR) -- so reserve getId() for the API (and expect a string
    # representation) but leave id() for data-model specific formats.
    patientId = if typeof p.getId == 'function' then p.getId() else p.id()
    @patientResults[patientId] ?= {}
    @patientResults[patientId][resultName] = result
    @localIdPatientResultsMap[patientId] = patient_ctx.getAllLocalIds()

  recordUnfilteredResult: (resultName, result) ->
    @unfilteredResults[resultName] = result
