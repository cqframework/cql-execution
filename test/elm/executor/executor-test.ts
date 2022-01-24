import setup from '../../setup';
const data = require('./data');

const { p1, p2 } = require('./patients');
import { Patient } from '../../../src/cql-patient';

describe('Age', () => {
  beforeEach(function () {
    setup(this, data, [p1, p2]);
    this.results = this.executor.withLibrary(this.lib).exec(this.patientSource);
  });

  it('should have correct patient results', function () {
    this.results.patientResults['1'].Age.should.equal(32);
    this.results.patientResults['2'].Age.should.equal(5);
  });

  it('should have correct patientEvaluatedRecords for each patient', function () {
    this.results.patientEvaluatedRecords['1'].should.eql([new Patient(p1)]);
    this.results.patientEvaluatedRecords['2'].should.eql([new Patient(p2)]);
  });

  it('should support older evaluatedRecords array field', function () {
    this.results.evaluatedRecords.should.eql([new Patient(p1), new Patient(p2)]);
  });

  it('should have the correct unfiltered results', function () {
    this.results.unfilteredResults.AgeSum.should.equal(37);
  });

  it('should be able to reference other unfiltered context expressions', function () {
    this.results.unfilteredResults.AgeSumRef.should.equal(37);
  });
});
