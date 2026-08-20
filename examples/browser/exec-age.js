import cql from 'cql-execution';
import measure from './age.json';

window.cql = cql;
window.patients = [
  {
    id: '1',
    recordType: 'Patient',
    name: 'John Smith',
    gender: 'M',
    birthDate: '1980-02-17'
  },
  {
    id: '2',
    recordType: 'Patient',
    name: 'Sally Smith',
    gender: 'F',
    birthDate: '2007-08-02'
  }
];

window.executeAgeExample = async function () {
  const lib = new cql.Library(measure);
  const executor = new cql.Executor(lib);
  const patientSource = new cql.PatientSource(window.patients);

  return executor.exec(patientSource);
};
