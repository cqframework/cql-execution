class Results {
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
    if (this.patientResults[patientId] == null) {
      this.patientResults[patientId] = {};
    }
    this.patientResults[patientId][resultName] = result;
    this.localIdPatientResultsMap[patientId] = patient_ctx.getAllLocalIds();
  }

  recordUnfilteredResult(resultName, result) {
    this.unfilteredResults[resultName] = result;
  }
}

module.exports = { Results };
