/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */
import cql from '../../src/cql';
import * as measure from './age.json'; // Ensure "resolveJsonModule" is set to true in tsconfig.json

const lib = new cql.Library(measure);
const executor = new cql.Executor(lib);
const psource = new cql.PatientSource([
  {
    id: '1',
    recordType: 'Patient',
    name: 'John Smith',
    gender: 'M',
    birthDate: '1980-02-17T06:15'
  },
  {
    id: '2',
    recordType: 'Patient',
    name: 'Sally Smith',
    gender: 'F',
    birthDate: '2007-08-02T11:47'
  }
]);

const result = executor.exec(psource);
console.log(JSON.stringify(result, undefined, 2));
