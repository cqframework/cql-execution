import { MessageListener, NullMessageListener } from './messageListeners';
import { Results } from './results';
import { UnfilteredContext, PatientContext } from './context';
import { DateTime } from '../datatypes/datetime';
import { Parameter } from '../types/runtime.types';
import { DataProvider, TerminologyProvider } from '../types';

export class Executor {
  constructor(
    public library: any,
    public codeService?: TerminologyProvider,
    public parameters?: Parameter,
    public messageListener: MessageListener = new NullMessageListener()
  ) {}

  withLibrary(lib: any) {
    this.library = lib;
    return this;
  }

  withParameters(params: Parameter) {
    this.parameters = params != null ? params : {};
    return this;
  }

  withCodeService(cs: TerminologyProvider) {
    this.codeService = cs;
    return this;
  }

  withMessageListener(ml: MessageListener) {
    this.messageListener = ml;
    return this;
  }

  exec_expression(expression: any, patientSource: DataProvider, executionDateTime: DateTime) {
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

  exec(patientSource: DataProvider, executionDateTime?: DateTime) {
    const r = this.exec_patient_context(patientSource, executionDateTime);
    const unfilteredContext = new UnfilteredContext(
      this.library,
      r,
      this.codeService,
      this.parameters,
      executionDateTime,
      this.messageListener
    );
    const resultMap: any = {};
    for (const key in this.library.expressions) {
      const expr = this.library.expressions[key];
      if (expr.context === 'Unfiltered') {
        resultMap[key] = expr.exec(unfilteredContext);
      }
    }
    r.recordUnfilteredResults(resultMap);
    return r;
  }

  exec_patient_context(patientSource: DataProvider, executionDateTime?: DateTime) {
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
      const resultMap: any = {};
      for (const key in this.library.expressions) {
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
