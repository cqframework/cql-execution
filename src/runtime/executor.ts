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

  async exec_expression(expression: any, patientSource: DataProvider, executionDateTime: DateTime) {
    const r = new Results();
    const expr = this.library.expressions[expression];
    if (expr != null) {
      // NOTE: Using await to support async data providers whose implementations return promise
      // await has no effect on functions that don't return promises, so it is safe to use in all cases
      let currentPatient = await patientSource.currentPatient();
      while (currentPatient) {
        const patient_ctx = new PatientContext(
          this.library,
          currentPatient,
          this.codeService,
          this.parameters,
          executionDateTime,
          this.messageListener
        );
        r.recordPatientResults(patient_ctx, { [expression]: expr.execute(patient_ctx) });
        currentPatient = await patientSource.nextPatient();
      }
    }
    return r;
  }

  async exec(patientSource: DataProvider, executionDateTime?: DateTime) {
    const r = await this.exec_patient_context(patientSource, executionDateTime);
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
        resultMap[key] = await expr.exec(unfilteredContext);
      }
    }
    r.recordUnfilteredResults(resultMap);
    return r;
  }

  async exec_patient_context(patientSource: DataProvider, executionDateTime?: DateTime) {
    const r = new Results();

    // NOTE: Using await to support async data providers whose implementations return promise
    // await has no effect on functions that don't return promises, so it is safe to use in all cases
    let currentPatient = await patientSource.currentPatient();
    while (currentPatient) {
      const patient_ctx = new PatientContext(
        this.library,
        currentPatient,
        this.codeService,
        this.parameters,
        executionDateTime,
        this.messageListener
      );
      const resultMap: any = {};
      for (const key in this.library.expressions) {
        const expr = this.library.expressions[key];
        if (expr.context === 'Patient') {
          resultMap[key] = await expr.execute(patient_ctx);
        }
      }
      r.recordPatientResults(patient_ctx, resultMap);
      currentPatient = await patientSource.nextPatient();
    }
    return r;
  }
}
