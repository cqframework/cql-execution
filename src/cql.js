const library     = require('./elm/library');
const quantity    = require('./elm/quantity');
const expression  = require('./elm/expression');
const repository  = require('./runtime/repository');
const context     = require('./runtime/context');
const exec        = require('./runtime/executor');
const results     = require('./runtime/results');
const datatypes   = require('./datatypes/datatypes');
const patient     = require('./cql-patient');
const codeservice = require('./cql-code-service');

// Library-related classes
module.exports.Library            = library.Library;
module.exports.Repository         = repository.Repository;
module.exports.Expression         = expression.Expression;

// Execution-related classes
module.exports.Context            = context.Context;
module.exports.Executor           = exec.Executor;
module.exports.PatientContext     = context.PatientContext;
module.exports.UnfilteredContext  = context.UnfilteredContext;
module.exports.Results            = results.Results;

// PatientSource-related classes
module.exports.Patient            = patient.Patient;
module.exports.PatientSource      = patient.PatientSource;

// TerminologyService-related classes
module.exports.CodeService        = codeservice.CodeService;

// DataType classes
module.exports.Code               = datatypes.Code;
module.exports.CodeSystem         = datatypes.CodeSystem;
module.exports.Concept            = datatypes.Concept;
module.exports.Date               = datatypes.Date;
module.exports.DateTime           = datatypes.DateTime;
module.exports.Interval           = datatypes.Interval;
module.exports.Quantity           = datatypes.Quantity;
module.exports.Ratio              = datatypes.Ratio;
module.exports.ValueSet           = datatypes.ValueSet;
