const cql = require('../src/cql');
const measure = require('./diabetes-bp.json');
const codes = require('../src/cql-code-service');
const cqlfhir = require('cql-exec-fhir');
const patients = require('./diabetes-bp-patients');

const codeservice = require('./temp_code');

const lib = new cql.Library(measure);
const executor = new cql.Executor(lib);
const patientSource = cqlfhir.PatientSource.FHIRv400();
const cservice = new codes.CodeService(codeservice);

patientSource.loadBundles(patients);

const parameters = {
  MeasurementPeriod: new cql.Interval(cql.DateTime.parse('2018-12-31'), cql.DateTime.parse('2019-12-31'), true, false)
};
const result = executor.exec(patientSource, cservice, parameters);
console.log(JSON.stringify(result, undefined, 2));
