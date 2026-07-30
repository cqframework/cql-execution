/* oxlint-disable no-console */

const cql = require('cql-execution');
const measure = require('./age.json');

async function executeAgeExample() {
  const lib = new cql.Library(measure);
  const executor = new cql.Executor(lib);
  const psource = new cql.PatientSource([
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
  ]);

  return executor.exec(psource);
}

if (require.main === module) {
  console.log(
    'This runs the AgeAtMP CQL against two patients. The CQL counts patients as ' +
      'InDemographic if they were 2 - 17 years old at the start of the measurement ' +
      'period (January 1, 2013).\n'
  );

  executeAgeExample()
    .then(result => {
      console.log(JSON.stringify(result, undefined, 2));
    })
    .catch(err => {
      console.error(err);
      process.exitCode = 1;
    });
}

module.exports = { executeAgeExample };
