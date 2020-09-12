const { Results } = require('./results');
const { UnfilteredContext, PatientContext } = require('./context');

class Executor {
  constructor(library, codeService, parameters) {
    this.library = library;
    this.codeService = codeService;
    this.parameters = parameters;
  }

  withLibrary(lib) {
    this.library = lib;
    return this;
  }

  withParameters(params) {
    this.parameters = params != null ? params : {};
    return this;
  }

  withCodeService(cs) {
    this.codeService = cs;
    return this;
  }

  exec_expression(expression, patientSource) {
    const r = new Results();
    const expr = this.library.expressions[expression];
    if (expr != null) {
      while (patientSource.currentPatient()) {
        const patient_ctx = new PatientContext(
          this.library,
          patientSource.currentPatient(),
          this.codeService,
          this.parameters
        );
        r.recordPatientResult(patient_ctx, expression, expr.execute(patient_ctx));
        patientSource.nextPatient();
      }
    }
    return r;
  }

  exec(patientSource, executionDateTime) {
    const r = this.exec_patient_context(patientSource, executionDateTime);
    const unfilteredContext = new UnfilteredContext(
      this.library,
      r,
      this.codeService,
      this.parameters
    );
    for (let key in this.library.expressions) {
      const expr = this.library.expressions[key];
      if (expr.context === 'Unfiltered') {
        r.recordUnfilteredResult(key, expr.exec(unfilteredContext));
      }
    }
    return r;
  }

  exec_patient_context(patientSource, executionDateTime) {
    const r = new Results();
    while (patientSource.currentPatient()) {
      const patient_ctx = new PatientContext(
        this.library,
        patientSource.currentPatient(),
        this.codeService,
        this.parameters,
        executionDateTime
      );
      for (let key in this.library.expressions) {
        const expr = this.library.expressions[key];
        if (expr.context === 'Patient') {
          r.recordPatientResult(patient_ctx, key, expr.execute(patient_ctx));
        }
      }
      patientSource.nextPatient();
    }
    return r;
  }
}

module.exports = { Executor };
