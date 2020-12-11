//measure = require './CDC_HbA1c'
// codes = require './cql-code-service'
//codeservice = require '../src/data/temp_code'
//patients = require '../src/data/patients'

const cql = require('../src/cql');
const measure = require('./CDC_HbA1c.json');
const codes = require('../src/cql-code-service');
const cqlfhir = require('cql-exec-fhir');
const patients = require('./cdc-patients');


const codeservice = require('./temp_code');
const lib = new cql.Library(measure);
const cservice = new codes.CodeService(codeservice);
const parameters = {
  MeasurementPeriod: new cql.Interval(cql.DateTime.parse('2018-12-31'), cql.DateTime.parse('2019-12-31'), true, false)
};
const executor = new cql.Executor(lib, cservice, parameters);
const patientSource = cqlfhir.PatientSource.FHIRv400();

patientSource.loadBundles(patients);


// const result = executor.exec(patientSource);
const result = executor.exec(patientSource);
console.log(JSON.stringify(result, undefined, 2));
//console.log(JSON.stringify(result.patientResults.example, undefined, 2));
//console.log(result) 

//cservice = new codes.CodeService codeservice

//lib = new cql.Library(measure)

// parameters = {
//   MeasurementPeriod: new cql.Interval(cql.DateTime.parse('2018-12-31'), cql.DateTime.parse('2019-12-31'), true, false)
// }

//executor = new cql.Executor(lib, cservice, parameters)

//psource = new cql.PatientSource patients

//result = executor.exec(psource)

//console.log("done")
//console.log(result)