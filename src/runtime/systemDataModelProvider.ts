import { Code, CodeSystem, Concept, CQLValueSet, Quantity, Ratio } from '../datatypes/datatypes';
import { DataModelProvider } from '../types/cql-patient.interfaces';
import {
  ELM_QUANTITY_TYPE,
  ELM_CODE_TYPE,
  ELM_CONCEPT_TYPE,
  ELM_CODESYSTEM_TYPE,
  ELM_VALUESET_TYPE,
  ELM_RATIO_TYPE
} from '../util/elmTypes';

export class SystemDataModelProvider implements DataModelProvider {
  createInstance(classType: string, obj: any) {
    if (!classType.startsWith('{urn:hl7-org:elm-types:r1}')) {
      return null;
    }
    switch (classType) {
      case ELM_QUANTITY_TYPE:
        return new Quantity(obj.value, obj.unit);
      case ELM_CODE_TYPE:
        return new Code(obj.code, obj.system, obj.version, obj.display);
      case ELM_CONCEPT_TYPE:
        return new Concept(obj.codes, obj.display);
      case ELM_CODESYSTEM_TYPE:
        return new CodeSystem(obj.id, obj.version, obj.name);
      case ELM_VALUESET_TYPE:
        return new CQLValueSet(obj.id, obj.version, obj.name, obj.codesystems);
      case ELM_RATIO_TYPE:
        return new Ratio(obj.numerator, obj.denominator);
      default:
        return obj;
    }
  }
}
