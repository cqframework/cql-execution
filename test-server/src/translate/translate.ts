import { translateLibrary as translateLibraryService } from './translation-service';
import { translateLibrary as translateLibraryModule } from './translation-module';

export async function translate(cql: string, useTranslationService = false): Promise<any> {
  const testLib = `library TestCQL version '1.0.0'\n\ncontext Unfiltered\n\ndefine expression: ${cql}`;
  if (useTranslationService) {
    return translateLibraryService(testLib);
  } else {
    return translateLibraryModule(testLib);
  }
}
