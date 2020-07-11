/* eslint-disable
    no-console,
    no-unused-vars,
*/
// TODO: This file was created by bulk-decaffeinate.
// Fix any style issues and re-enable lint.
/* eslint-env mocha */
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const should = require('should');
const cql = require('../lib/cql');

const libNames = [];
// Library-related classes
libNames.push('Library', 'Repository', 'Expression');
// Execution-related classes
libNames.push('Context', 'Executor', 'PatientContext', 'UnfilteredContext', 'Results');
// PatientSource-related classes
libNames.push('Patient', 'PatientSource');
// TerminologyService-related classes
libNames.push('CodeService');
// DataType classes
libNames.push('Code', 'CodeSystem', 'Concept', 'Date', 'DateTime', 'Interval', 'Quantity', 'Ratio', 'ValueSet');

describe('CQL Exports', () => libNames.map((libName) =>
  ((name => it(`should export ${name}`, function() {
    console.log('Testing', name);
    cql[name].should.be.Function();
    return cql[name].name.should.equal(name);
  })))(libName)));
