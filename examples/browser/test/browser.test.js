import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';
import vm from 'node:vm';

const bundleUrl = new URL('../dist/cql4browsers.js', import.meta.url);

function loadBrowserBundle() {
  const context = vm.createContext({ console });
  context.window = context;
  vm.runInContext(fs.readFileSync(bundleUrl, 'utf8'), context, {
    filename: bundleUrl.pathname
  });
  return context;
}

test('exposes the CQL API and age example on window', () => {
  const browser = loadBrowserBundle();

  assert.equal(typeof browser.cql.Library, 'function');
  assert.equal(typeof browser.cql.Executor, 'function');
  assert.equal(typeof browser.cql.PatientSource, 'function');
  assert.equal(typeof browser.executeAgeExample, 'function');
  assert.deepEqual(JSON.parse(JSON.stringify(browser.patients)), [
    {
      id: '1',
      recordType: 'Patient',
      name: 'John Smith',
      gender: 'M',
      birthDate: '1980-02-17'
    },
    {
      id: '2',
      recordType: 'Patient',
      name: 'Sally Smith',
      gender: 'F',
      birthDate: '2007-08-02'
    }
  ]);
});

test('executes the age example through the browser bundle', async () => {
  const browser = loadBrowserBundle();
  const result = await vm.runInContext('executeAgeExample()', browser);

  assert.equal(result.patientResults['1'].InDemographic, false);
  assert.equal(result.patientResults['2'].InDemographic, true);
});
