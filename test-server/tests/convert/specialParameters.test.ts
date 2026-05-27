import { describe, it, expect } from 'vitest';
import {
  emptyListParameter,
  emptyTupleParameter,
  nullValueParameter
} from '@src/convert/specialParameters';

describe('specialParameters', () => {
  it('emptyListParameter constructs expected FHIR extension', () => {
    const result = emptyListParameter('MyList');
    expect(result).toEqual({
      name: 'MyList',
      _valueBoolean: {
        extension: [
          {
            url: 'http://hl7.org/fhir/StructureDefinition/cqf-isEmptyList',
            valueBoolean: true
          }
        ]
      }
    });
  });

  it('emptyTupleParameter constructs expected FHIR extension', () => {
    const result = emptyTupleParameter('MyTuple');
    expect(result).toEqual({
      name: 'MyTuple',
      _valueBoolean: {
        extension: [
          {
            url: 'http://hl7.org/fhir/StructureDefinition/cqf-isEmptyTuple',
            valueBoolean: true
          }
        ]
      }
    });
  });

  it('nullValueParameter constructs expected data-absent-reason extension', () => {
    const result = nullValueParameter('MyNull');
    expect(result).toEqual({
      name: 'MyNull',
      _valueBoolean: {
        extension: [
          {
            url: 'http://hl7.org/fhir/StructureDefinition/data-absent-reason',
            valueCode: 'unknown'
          }
        ]
      }
    });
  });
});
