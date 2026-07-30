import assert from 'node:assert/strict';
import test from 'node:test';
import { executeAgeExample } from '../exec-age';

test('executes the age example', async () => {
  const result = await executeAgeExample();

  assert.equal(result.patientResults['1'].InDemographic, false);
  assert.equal(result.patientResults['2'].InDemographic, true);
});
