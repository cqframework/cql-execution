import { describe, it, expect } from 'vitest';
import { translateLibrary } from '@src/translate/translation-module';

describe('translation-module.translateLibrary (integration)', () => {
  it('returns ELM JSON with correct translation for a simple library', async () => {
    const cql = [
      "library LocalTest version '1.0.0'",
      'context Unfiltered',
      'define expression: 1 + 2'
    ].join('\n');

    const elm = await translateLibrary(cql);

    // Just check that the most important properties are there since doing a full object match may
    // be brittle as the translation NPM module is updated.
    expect(elm).toMatchObject({
      library: {
        identifier: {
          id: 'LocalTest',
          version: '1.0.0'
        },
        statements: {
          def: [
            {
              resultTypeName: '{urn:hl7-org:elm-types:r1}Integer',
              name: 'expression',
              context: 'Unfiltered',
              expression: {
                type: 'Add',
                operand: [
                  {
                    type: 'Literal',
                    valueType: '{urn:hl7-org:elm-types:r1}Integer',
                    value: '1'
                  },
                  {
                    type: 'Literal',
                    valueType: '{urn:hl7-org:elm-types:r1}Integer',
                    value: '2'
                  }
                ]
              }
            }
          ]
        }
      }
    });
  });
});
