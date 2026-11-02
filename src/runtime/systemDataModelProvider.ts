import { Code, Concept, Quantity } from '../datatypes/datatypes';
import { DataModelProvider } from '../types/cql-patient.interfaces';
import { ELM_QUANTITY_TYPE, ELM_CODE_TYPE, ELM_CONCEPT_TYPE } from '../util/elmTypes';

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
      default:
        // TODO: consider implementing other types here, such as ValueSet and CodeSystem
        return obj;
    }
  }
}
