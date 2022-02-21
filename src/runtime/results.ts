export class Results {
  patientResults: any;
  unfilteredResults: any;
  localIdPatientResultsMap: any;
  patientEvaluatedRecords: any;

  constructor() {
    this.patientResults = {};
    this.unfilteredResults = {};
    this.localIdPatientResultsMap = {};
    this.patientEvaluatedRecords = {};
  }

  // Expose an evaluatedRecords array for backwards compatibility
  get evaluatedRecords() {
    return [].concat(...(Object.values(this.patientEvaluatedRecords) as any[]));
  }

  recordPatientResults(patient_ctx: any, resultMap: any) {
    const p = patient_ctx.patient;
    // NOTE: From now on prefer getId() over id() because some data models may have an id property
    // that is not a string (e.g., FHIR) -- so reserve getId() for the API (and expect a string
    // representation) but leave id() for data-model specific formats.
    const patientId = typeof p.getId === 'function' ? p.getId() : p.id();

    // Record the results
    this.patientResults[patientId] = resultMap;

    // Record the local IDs
    this.localIdPatientResultsMap[patientId] = patient_ctx.getAllLocalIds();

    // Record the evaluatedRecords, merging with an aggregated array across all libraries
    this.patientEvaluatedRecords[patientId] = [...patient_ctx.evaluatedRecords];
    Object.values(patient_ctx.library_context).forEach((ctx: any) => {
      this.patientEvaluatedRecords[patientId].push(...ctx.evaluatedRecords);
    });
  }

  recordUnfilteredResults(resultMap: any) {
    this.unfilteredResults = resultMap;
  }
}
