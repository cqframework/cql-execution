import { translateLibrary as translateLibraryService } from './translation-service';
import { translateLibrary as translateLibraryModule } from './translation-module';
import { TranslationError } from './translation-error';

export async function translate(cql: string, useTranslationService = false): Promise<any> {
  const testLib = `library TestCQL version '1.0.0'\n\ncontext Unfiltered\n\ndefine expression: ${cql}`;
  const elm = useTranslationService
    ? await translateLibraryService(testLib)
    : await translateLibraryModule(testLib);
  const error = findTranslationError(elm);
  if (error) {
    throw new TranslationError(error.message);
  }

  return elm;
}

function findTranslationError(elm: any): any {
  return elm?.library?.annotation?.find((annotation: any) => annotation?.errorSeverity === 'error');
}
