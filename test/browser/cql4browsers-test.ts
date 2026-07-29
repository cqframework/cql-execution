import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import should from 'should';

const simpleELMWithVersion = require('../runtime/fixtures/SimpleLibraryWithVersion.json');
const bundlePath = path.join(__dirname, '..', '..', 'examples', 'browser', 'cql4browsers.js');

function loadBrowserBundle(): any {
  const context = vm.createContext({
    console,
    elmJson: JSON.stringify(simpleELMWithVersion)
  });
  context.window = context;
  vm.runInContext(fs.readFileSync(bundlePath, 'utf8'), context, { filename: bundlePath });
  return context;
}

describe('cql4browsers', () => {
  it('should expose the CQL API and simple ELM helper on window', () => {
    const browser = loadBrowserBundle();

    should(browser.cql.Library).be.a.Function();
    should(browser.cql.Repository).be.a.Function();
    should(browser.cql.Executor).be.a.Function();
    should(browser.cql.PatientSource).be.a.Function();
    should(browser.executeSimpleELM).be.a.Function();
  });

  it('should execute ELM through the browser bundle', async () => {
    const browser = loadBrowserBundle();
    const result = await vm.runInContext(
      `executeSimpleELM(
        JSON.parse(elmJson),
        new cql.PatientSource([]),
        [],
        'SimpleLibraryWithVersion',
        '0.0.1',
        null
      )`,
      browser
    );

    should(result.constructor.name).equal('Results');
    should(result).have.properties(
      'patientResults',
      'unfilteredResults',
      'localIdPatientResultsMap',
      'patientEvaluatedRecords'
    );
  });
});
