import { Parameters } from 'fhir/r4';
import logger from './logger';
import { translate } from './translate';
import { CodeService, DateTime, Executor, Library, PatientSource } from '../..';
import { toParameters } from './convert';

const USE_TRANSLATION_SERVICE = process.env['USE_TRANSLATION_SERVICE'] === 'true';

let counter = 0;

export interface ExpressionExecution {
  elm: unknown;
  result: unknown;
}

export async function executeExpression(expression: string): Promise<ExpressionExecution> {
  const id = counter++;
  logger.debug(`[${id}] Expression:   ${expression}`);

  // 1: Translate CQL to ELM
  const elm = await translate(expression, USE_TRANSLATION_SERVICE);

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
