const { NullMessageListener } = require('./messageListeners');
const { Results } = require('./results');
const { UnfilteredContext, PatientContext } = require('./context');

class Executor {
  constructor(library, codeService, parameters, messageListener = new NullMessageListener()) {
    this.library = library;
    this.codeService = codeService;
    this.parameters = parameters;
    this.messageListener = messageListener;
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

  withMessageListener(ml) {
    this.messageListener = ml;
    return this;
  }

  exec_expression(expression, patientSource, executionDateTime) {
    const r = new Results();
    const expr = this.library.expressions[expression];
    if (expr != null) {
      while (patientSource.currentPatient()) {
        const patient_ctx = new PatientContext(
          this.library,
          patientSource.currentPatient(),
          this.codeService,
          this.parameters,
          executionDateTime,
          this.messageListener
        );
        r.recordPatientResults(patient_ctx, { [expression]: expr.execute(patient_ctx) });
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
      this.parameters,
      executionDateTime,
      this.messageListener
    );
    const resultMap = {};
    for (let key in this.library.expressions) {
      const expr = this.library.expressions[key];
      if (expr.context === 'Unfiltered') {
        resultMap[key] = expr.exec(unfilteredContext);
      }
    }
    r.recordUnfilteredResults(resultMap);
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
        executionDateTime,
        this.messageListener
      );
      const resultMap = {};
      for (let key in this.library.expressions) {
        const expr = this.library.expressions[key];
        if (expr.context === 'Patient') {
          resultMap[key] = expr.execute(patient_ctx);
        }
      }
      r.recordPatientResults(patient_ctx, resultMap);
      patientSource.nextPatient();
    }
    return r;
  }
}

module.exports = { Executor };
