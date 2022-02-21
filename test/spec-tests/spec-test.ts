import fs from 'fs';
import path from 'path';
import should from 'should';
import { PatientContext } from '../../src/runtime/context';
import '../../src/elm/expressions'; // Needed for side-effect
import { build } from '../../src/elm/builder';
import { Library } from '../../src/elm/library';
import { Uncertainty } from '../../src/datatypes/uncertainty';

describe('CQL Spec Tests (from XML)', () => {
  fs.readdirSync(path.join(__dirname, 'cql')).forEach(f => {
    if (!f.endsWith('.json')) {
      return;
    }
    const p = path.join(__dirname, 'cql', f);
    const elm = JSON.parse(fs.readFileSync(p, 'utf8'));

    if (
      elm.library == null ||
      elm.library.identifier == null ||
      elm.library.identifier.id == null ||
      elm.library.statements == null ||
      !Array.isArray(elm.library.statements.def)
    ) {
      console.error('Invalid ELM JSON in CQL Spec Tests:', f);
      return;
    }
    const library = new Library(elm);
    // describe the high-level module being tested
    describe(elm.library.identifier.id, () => {
      elm.library.statements.def.forEach((suite: any) => {
        // Skip the Patient definition that is automatically inserted by CQL to ELM
        if (
          suite.name === 'Patient' &&
          suite.expression &&
          suite.expression.type === 'SingletonFrom'
        ) {
          return;
        }
        // describe the suite of functionality being tested
        describe(suite.name, () => {
          if (suite.expression.type !== 'Tuple') {
            should.fail(suite.expression.type, 'Tuple', `Invalid test suite: ${suite.name}`);
          }
          suite.expression.element.forEach((t: any) => {
            it(`should properly evaluate ${t.name}`, function () {
              const testCaseMap = convertTupleToMap(t.value);
              if (testCaseMap.has('skipped')) {
                this.skip();
              }
              if (testCaseMap.has('expression') && testCaseMap.has('output')) {
                const ctx = new PatientContext(library);
                ctx.getExecutionDateTime().timezoneOffset = 0;
                const actualExp = build(testCaseMap.get('expression'));
                let actual = actualExp.execute(ctx);
                const expectedExp = build(testCaseMap.get('output'));
                let expected = expectedExp.execute(ctx);
                if (expectedExp.json && expectedExp.json.type === 'Null') {
                  should(actual).be.null();
                } else if (actual && actual.isInterval && expected && expected.isInterval) {
                  // Since intervals can be semantically equal w/ different representations, fall back on Interval.equal function.
                  // E.g., Interval[1,3] == Interval[1,4)
                  if (!actual.equals(expected)) {
                    should.fail(actual, expected, 'Intervals are not equal');
                  }
                } else if (
                  actual &&
                  actual.isUncertainty &&
                  expected &&
                  expected.isInterval &&
                  expected.highClosed &&
                  expected.lowClosed
                ) {
                  // Since there is no literal representation of Uncertainty, the test framework used Interval.
                  // Switch it back to an uncertainty.
                  expected = new Uncertainty(expected.low, expected.high);
                  actual.should.eql(expected);
                } else {
                  // The tests are somewhat inconsistent w/ number of decimal places used.
                  // To get consistency (and avoid false negatives), always round to 8 places.
                  actual = roundDecimalsWhenApplicable(actual);
                  expected = roundDecimalsWhenApplicable(expected);
                  if (actual == null) {
                    should.deepEqual(actual, expected);
                  } else {
                    actual.should.eql(expected);
                  }
                }
              }
            });
          });
        });
      });
    });
  });

  function convertTupleToMap(t: any) {
    const map = new Map();
    t.element.forEach((e: any) => map.set(e.name, e.value));
    return map;
  }

  function roundDecimalsWhenApplicable(item: any) {
    if (typeof item === 'number') {
      // Round to 8 places since that's the number of places used by expected outputs
      item = Math.round(item * 100000000) / 100000000;
    }
    return item;
  }
});
