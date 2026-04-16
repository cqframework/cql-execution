import { describe, it, expect, vi, beforeEach, afterEach, MockInstance } from 'vitest';
import { $cql } from '@src/operation';
import * as translateModule from '@src/translate';
import * as convertModule from '@src/convert';
import { Parameters } from 'fhir/r4';
import logger from '@src/logger';

describe('operation.$cql', () => {
  let translateSpy: MockInstance<typeof translateModule.translate>;
  let toParametersSpy: MockInstance<typeof convertModule.toParameters>;

  const elm = {
    library: {
      identifier: { id: 'LocalTest', version: '1.0.0' },
      usings: {
        def: [{ localIdentifier: 'System', uri: 'urn:hl7-org:elm-types:r1', annotation: [] }]
      },
      contexts: { def: [{ name: 'Unfiltered', annotation: [] }] },
      statements: {
        def: [
          {
            resultTypeName: '{urn:hl7-org:elm-types:r1}Integer',
            name: 'expression',
            context: 'Unfiltered',
            accessLevel: 'Public',
            expression: {
              type: 'Add',
              operand: [
                { type: 'Literal', valueType: '{urn:hl7-org:elm-types:r1}Integer', value: '1' },
                { type: 'Literal', valueType: '{urn:hl7-org:elm-types:r1}Integer', value: '2' }
              ]
            }
          }
        ]
      }
    }
  };

  const parameters = {
    resourceType: 'Parameters',
    parameter: [{ name: 'return', valueInteger: 3 }]
  } as Parameters;

  beforeEach(() => {
    vi.spyOn(logger, 'debug').mockImplementation(() => {}); // suppress logs
    translateSpy = vi.spyOn(translateModule, 'translate').mockResolvedValue(elm);
    toParametersSpy = vi.spyOn(convertModule, 'toParameters').mockReturnValue(parameters);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('translates, executes, and converts the result to FHIR Parameters', async () => {
    const result = await $cql('1 + 2');

    expect(translateSpy).toHaveBeenCalledWith('1 + 2', expect.toBeOneOf([true, false]));
    expect(toParametersSpy).toHaveBeenCalledWith(3, '{urn:hl7-org:elm-types:r1}Integer');
    expect(result).toBe(parameters);
  });
});
