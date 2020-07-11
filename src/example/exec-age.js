cql = require '../cql'
measure = require './age'

lib = new cql.Library(measure)
executor = new cql.Executor(lib)
psource = new cql.PatientSource [ {
  "id" : "1",
  "recordType" : "Patient",
  "name": "John Smith",
  "gender": "M",
  "birthDate" : "1980-02-17T06:15"
}, {
  "id" : "2",
  "recordType" : "Patient",
  "name": "Sally Smith",
  "gender": "F",
  "birthDate" : "2007-08-02T11:47"
} ]

result = executor.exec(psource)
console.log JSON.stringify(result, undefined, 2)
