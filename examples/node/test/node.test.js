const assert = require('node:assert/strict');
const test = require('node:test');
const { executeAgeExample } = require('../exec-age');

test('executes the age example', async () => {
  const result = await executeAgeExample();

  assert.equal(result.patientResults['1'].InDemographic, false);
  assert.equal(result.patientResults['2'].InDemographic, true);
});
