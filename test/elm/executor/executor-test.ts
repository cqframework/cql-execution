import should from 'should';
import setup from '../../setup';
import { DataProvider, PatientObject } from '../../../src/types';
import { DateTime } from '../../../src/datatypes/datetime';
const data = require('./data');

const { p1, p2 } = require('./patients');
import { Patient, PatientSource } from '../../../src/cql-patient';
import { Results } from '../../../src/cql';
import { nextTick } from 'process';

/**
 * Wrapper for PatientSource/DataProvider to allow for holding resolving of
 * calls to the wrapped PatientSource.
 */
class AsyncPatientSourceWrap implements DataProvider {
  private heldResolves: { value: any; resolve: (value: any | PromiseLike<any>) => void }[];
  constructor(private patientSource: PatientSource) {
    this.heldResolves = [];
  }

  currentPatient(): PatientObject | undefined | Promise<PatientObject | undefined> {
    return new Promise(resolve => {
      this.heldResolves.push({
        value: this.patientSource.currentPatient(),
        resolve: resolve
      });
    });
  }

  nextPatient(): PatientObject | undefined | Promise<PatientObject | undefined> {
    return new Promise(resolve => {
      this.heldResolves.push({
        value: this.patientSource.nextPatient(),
        resolve: resolve
      });
    });
  }

  get heldResolvesCount(): number {
    return this.heldResolves.length;
  }

  /**
   * Release each resolve that was held. Using nextTick to allow for any cascading
   * resolved calls to come forward with new calls.
   */
  async releaseResolves() {
    while (this.heldResolves.length > 0) {
      const heldResolve = this.heldResolves.shift();
      heldResolve.resolve(heldResolve.value);
      await new Promise(resolve => {
        nextTick(resolve);
      });
    }
  }
}

describe('Age', () => {
  beforeEach(async function () {
    setup(this, data, [p1, p2]);
  });

  it('should have correct patient results with sync patient source', async function () {
    const results = await this.executor.withLibrary(this.lib).exec(this.patientSource);
    should(results.patientResults['1'].Age).equal(32);
    should(results.patientResults['2'].Age).equal(5);
  });

  it('should have correct patient results with async patient source', async function () {
    const asyncPatientSource = new AsyncPatientSourceWrap(this.patientSource);
    const resultPromise: Promise<Results> = this.executor
      .withLibrary(this.lib)
      .exec(asyncPatientSource);

    await asyncPatientSource.releaseResolves();
    should(asyncPatientSource.heldResolvesCount).equal(0);

    const results = await resultPromise;
    should(results.patientResults['1'].Age).equal(32);
    should(results.patientResults['2'].Age).equal(5);
  });

  it('should have correct patientEvaluatedRecords for each patient', async function () {
    this.results = await this.executor.withLibrary(this.lib).exec(this.patientSource);
    should(this.results.patientEvaluatedRecords['1']).eql([new Patient(p1)]);
    should(this.results.patientEvaluatedRecords['2']).eql([new Patient(p2)]);
  });

  it('should support older evaluatedRecords array field', async function () {
    this.results = await this.executor.withLibrary(this.lib).exec(this.patientSource);
    should(this.results.evaluatedRecords).eql([new Patient(p1), new Patient(p2)]);
  });

  it('should have the correct unfiltered results', async function () {
    this.results = await this.executor.withLibrary(this.lib).exec(this.patientSource);
    should(this.results.unfilteredResults.AgeSum).equal(37);
  });

  it('should be able to reference other unfiltered context expressions', async function () {
    this.results = await this.executor.withLibrary(this.lib).exec(this.patientSource);
    this.results.unfilteredResults.AgeSumRef.should.equal(37);
  });

  it('should have correct patient results when executing a single expression with sync patient source', async function () {
    const results = await this.executor
      .withLibrary(this.lib)
      .exec_expression('Age', this.patientSource, new DateTime(2024, 12, 31));
    should(results.patientResults['1'].Age).equal(32);
    should(results.patientResults['2'].Age).equal(5);
  });

  it('should have correct patient results when executing a single expression with async patient source', async function () {
    const asyncPatientSource = new AsyncPatientSourceWrap(this.patientSource);
    const resultPromise: Promise<Results> = this.executor
      .withLibrary(this.lib)
      .exec_expression('Age', asyncPatientSource, new DateTime(2024, 12, 31));

    await asyncPatientSource.releaseResolves();
    should(asyncPatientSource.heldResolvesCount).equal(0);

    const results = await resultPromise;
    should(results.patientResults['1'].Age).equal(32);
    should(results.patientResults['2'].Age).equal(5);
  });
});
