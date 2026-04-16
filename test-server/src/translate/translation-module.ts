// See: https://github.com/cqframework/clinical_quality_language/tree/main/Src/js/examples/cql2elm-nodejs

import './require-polyfill.mjs';
import * as path from 'path';
import { NamespaceManager } from '@cqframework/cql/cql';
import {
  DefaultModelInfoProvider,
  DefaultLibrarySourceProvider,
  stringAsPath,
  ModelManager,
  LibraryManager,
  CqlTranslator,
  CqlCompilerOptions,
  createUcumService
} from '@cqframework/cql/cql-to-elm';

// lazy initialization of libraryManager
let libraryManager: any = null;

function getLibraryManager() {
  if (libraryManager == null) {
    const namespaceManager = new NamespaceManager();
    const modelManager = new ModelManager(namespaceManager);
    modelManager.modelInfoLoader.registerModelInfoProvider(
      new DefaultModelInfoProvider(stringAsPath(path.resolve(__dirname, 'models')))
    );
    // adjust the options to remove things we don't need and add things we do
    const options = CqlCompilerOptions.defaultOptions();
    options.validateUnits = false;
    const nestedOptions = options.options.asJsSetView() as Set<any>;
    nestedOptions.delete(CqlCompilerOptions.Options.valueOf('EnableAnnotations'));
    nestedOptions.delete(CqlCompilerOptions.Options.valueOf('EnableLocators'));
    nestedOptions.add(CqlCompilerOptions.Options.valueOf('EnableResultTypes'));
    // the translator requires a UCUM service even if validation is off, so make a dummy one
    const nf = () => null;
    const ucumServiceJs = createUcumService(nf, nf, nf, nf);
    // assign the module-scoped librarary manager
    libraryManager = new LibraryManager(modelManager, options, null, ucumServiceJs);
    libraryManager.librarySourceLoader.registerProvider(
      new DefaultLibrarySourceProvider(stringAsPath(path.resolve(__dirname, './libraries')))
    );
  }
  return libraryManager;
}

export async function translateLibrary(cql: string): Promise<any> {
  const translator = CqlTranslator.fromText(cql, getLibraryManager());
  return JSON.parse(translator.toJson());
}
