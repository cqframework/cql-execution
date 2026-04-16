import { Parameters } from 'fhir/r4';
import logger from './logger';
import { translate } from './translate';
import { CodeService, DateTime, Executor, Library } from '../..';
import { PatientSource } from 'cql-exec-fhir';
import { toParameters } from './convert';

const USE_TRANSLATION_SERVICE = process.env['USE_TRANSLATION_SERVICE'] == 'true';

let counter = 0;

export async function $cql(expression: string): Promise<Parameters> {
  const id = counter++;
  logger.debug(`[${id}] Expression:   ${expression}`);

  // 1: Translate CQL to ELM
  const elm = await translate(expression, USE_TRANSLATION_SERVICE);

  // 2: Execute ELM
  const library = new Library(elm);
  const codeService = new CodeService();
  const patientSource = PatientSource.FHIRv401();
  const executionDateTime = DateTime.fromJSDate(new Date(), 0);
  const executor = new Executor(library, codeService);
  const result = await executor.exec(patientSource, executionDateTime);
  logger.debug(`[${id}] Raw Result:  `, result.unfilteredResults.expression);

  // 3: Convert the result to a FHIR Parameter
  const resultType = elm.library?.statements?.def?.[0]?.resultTypeName;
  const resultTypeSpecifier = elm.library?.statements?.def?.[0]?.resultTypeSpecifier;
  const parameters = toParameters(
    result.unfilteredResults.expression,
    resultTypeSpecifier ?? resultType
  );
  logger.debug(`[${id}] FHIR Result: `, parameters);

  return parameters;
}
