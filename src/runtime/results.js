/* eslint-disable
    no-unused-vars,
*/
// TODO: This file was created by bulk-decaffeinate.
// Fix any style issues and re-enable lint.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
let Results;
module.exports.Results = (Results = class Results {
  constructor() {
    this.patientResults = {};
    this.unfilteredResults = {};
    this.localIdPatientResultsMap = {};
  }

  recordPatientResult(patient_ctx, resultName, result) {
    const p = patient_ctx.patient;
    // NOTE: From now on prefer getId() over id() because some data models may have an id property
    // that is not a string (e.g., FHIR) -- so reserve getId() for the API (and expect a string
    // representation) but leave id() for data-model specific formats.
    const patientId = typeof p.getId === 'function' ? p.getId() : p.id();
    if (this.patientResults[patientId] == null) { this.patientResults[patientId] = {}; }
    this.patientResults[patientId][resultName] = result;
    return this.localIdPatientResultsMap[patientId] = patient_ctx.getAllLocalIds();
  }

  recordUnfilteredResult(resultName, result) {
    return this.unfilteredResults[resultName] = result;
  }
});
