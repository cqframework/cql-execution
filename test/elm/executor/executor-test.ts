import should from 'should';
import setup from '../../setup';
const data = require('./data');

const { p1, p2 } = require('./patients');
import { Patient } from '../../../src/cql-patient';

describe('Age', () => {
  beforeEach(async function () {
    setup(this, data, [p1, p2]);
    this.results = await this.executor.withLibrary(this.lib).exec(this.patientSource);
  });

  it('should have correct patient results', function () {
    should(this.results.patientResults['1'].Age).equal(32);
    should(this.results.patientResults['2'].Age).equal(5);
  });

  it('should have correct patientEvaluatedRecords for each patient', function () {
    should(this.results.patientEvaluatedRecords['1']).eql([new Patient(p1)]);
    should(this.results.patientEvaluatedRecords['2']).eql([new Patient(p2)]);
  });

  it('should support older evaluatedRecords array field', function () {
    should(this.results.evaluatedRecords).eql([new Patient(p1), new Patient(p2)]);
  });

  it('should have the correct unfiltered results', function () {
    should(this.results.unfilteredResults.AgeSum).equal(37);
  });

  it('should be able to reference other unfiltered context expressions', function () {
    this.results.unfilteredResults.AgeSumRef.should.equal(37);
  });
});
