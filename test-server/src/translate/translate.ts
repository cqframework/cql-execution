import { translateLibrary as translateLibraryService } from './translation-service';
import { translateLibrary as translateLibraryModule } from './translation-module';

export async function translateLibrary(cql: string, useTranslationService = false): Promise<any> {
  if (useTranslationService) {
    return translateLibraryService(cql);
  } else {
    return translateLibraryModule(cql);
  }
}

export async function translateExpression(cql: string, useTranslationService = false): Promise<any> {
  const testLib = `library TestCQL version '1.0.0'\n\ncontext Unfiltered\n\ndefine expression: ${cql}`;
  return translateLibrary(testLib, useTranslationService);
}

export const translate = translateExpression;
