import { Parameters } from 'fhir/r4';
import logger from './logger';
import { translateExpression, translateLibrary } from './translate';
import { CodeService, DateTime, Executor, Library, PatientSource } from '../..';
import { toParameters } from './convert';

const USE_TRANSLATION_SERVICE = process.env['USE_TRANSLATION_SERVICE'] === 'true';

let counter = 0;

export interface ExpressionExecution {
  elm: unknown;
  result: unknown;
}

export interface FhirLibraryExecution {
  elm: unknown;
  result: {
    patientResults: unknown;
    unfilteredResults: unknown;
  };
}

interface FhirPatientSourceModule {
  PatientSource?: {
    FHIRv401: (options?: { requireProfileTagging?: boolean }) => {
      loadBundles: (bundles: unknown[]) => void;
    };
  };
}

function getFhirPatientSource() {
  try {
    const module = require('cql-exec-fhir') as FhirPatientSourceModule;
    const factory = module.PatientSource?.FHIRv401;
    if (typeof factory !== 'function') {
      throw new Error("Module does not expose PatientSource.FHIRv401()");
    }
    return factory();
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    throw new Error(
      `FHIR execution requires the optional 'cql-exec-fhir' dependency. Install test-server dependencies when your environment allows it. Details: ${message}`
    );
  }
}

export async function executeExpression(expression: string): Promise<ExpressionExecution> {
  const id = counter++;
  logger.debug(`[${id}] Expression:   ${expression}`);

  // 1: Translate CQL to ELM
  const elm = await translateExpression(expression, USE_TRANSLATION_SERVICE);

  // 2: Execute ELM
  const library = new Library(elm);
  const codeService = new CodeService();
  const patientSource = new PatientSource([]);
  const executionDateTime = DateTime.fromJSDate(new Date(), 0);
  const executor = new Executor(library, codeService);
  const result = await executor.exec(patientSource, executionDateTime);
  logger.debug(`[${id}] Raw Result:  `, result.unfilteredResults.expression);

  return { elm, result: result.unfilteredResults.expression };
}

export async function executeFhirLibrary(cql: string, bundle: unknown): Promise<FhirLibraryExecution> {
  const id = counter++;
  logger.debug(`[${id}] FHIR CQL library received`);

  const elm = await translateLibrary(cql, USE_TRANSLATION_SERVICE);
  const library = new Library(elm);
  const codeService = new CodeService();
  const patientSource = getFhirPatientSource();
  patientSource.loadBundles([bundle]);

  const executionDateTime = DateTime.fromJSDate(new Date(), 0);
  const executor = new Executor(library, codeService);
  const result = await executor.exec(patientSource as never, executionDateTime);
  logger.debug(`[${id}] Patient Results: `, result.patientResults);
  logger.debug(`[${id}] Unfiltered Results: `, result.unfilteredResults);

  return {
    elm,
    result: {
      patientResults: result.patientResults,
      unfilteredResults: result.unfilteredResults
    }
  };
}

export async function $cql(expression: string): Promise<Parameters> {
  const execution = await executeExpression(expression);

  // Convert the result to a FHIR Parameter
  const elm = execution.elm as any;
  const resultType = elm.library?.statements?.def?.[0]?.resultTypeName;
  const resultTypeSpecifier = elm.library?.statements?.def?.[0]?.resultTypeSpecifier;
  const parameters = toParameters(
    execution.result,
    resultTypeSpecifier ?? resultType
  );
  logger.debug(`FHIR Result: `, parameters);

  return parameters;
}
