export function emptyListParameter(name: string) {
  return {
    name,
    _valueBoolean: {
      extension: [
        {
          url: 'http://hl7.org/fhir/StructureDefinition/cqf-isEmptyList',
          valueBoolean: true
        }
      ]
    }
  };
}
export function emptyTupleParameter(name: string) {
  return {
    name,
    _valueBoolean: {
      extension: [
        {
          url: 'http://hl7.org/fhir/StructureDefinition/cqf-isEmptyTuple',
          valueBoolean: true
        }
      ]
    }
  };
}
export function nullValueParameter(name: string) {
  return {
    name,
    _valueBoolean: {
      extension: [
        {
          url: 'http://hl7.org/fhir/StructureDefinition/data-absent-reason',
          valueCode: 'unknown'
        }
      ]
    }
  };
}
