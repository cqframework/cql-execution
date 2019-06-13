library     = require './elm/library'
quantity    = require './elm/quantity'
ratio       = require './elm/ratio'
expression  = require './elm/expression'
repository  = require './runtime/repository'
context     = require './runtime/context'
exec        = require './runtime/executor'
results     = require './runtime/results'
datatypes   = require './datatypes/datatypes'
patient     = require './cql-patient'
codeservice = require './cql-code-service'

# Library-related classes
module.exports.Library            = library.Library
module.exports.Repository         = repository.Repository
module.exports.Expression         = expression.Expression

# Execution-related classes
module.exports.Context            = context.Context
module.exports.Executor           = exec.Executor
module.exports.PatientContext     = context.PatientContext
module.exports.PopulationContext  = context.PopulationContext
module.exports.Results            = results.Results

# PatientSource-related classes
module.exports.Patient            = patient.Patient
module.exports.PatientSource      = patient.PatientSource

# TerminologyService-related classes
module.exports.CodeService        = codeservice.CodeService

# DataType classes
module.exports.Code               = datatypes.Code
module.exports.CodeSystem         = datatypes.CodeSystem
module.exports.Concept            = datatypes.Concept
module.exports.Date               = datatypes.Date
module.exports.DateTime           = datatypes.DateTime
module.exports.Interval           = datatypes.Interval
module.exports.Quantity           = quantity.Quantity
module.exports.Ratio              = ratio.Ratio
module.exports.ValueSet           = datatypes.ValueSet
