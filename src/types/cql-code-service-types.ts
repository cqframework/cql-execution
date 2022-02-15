import { ValueSet } from '../datatypes/datatypes';

export interface ValueSetDictionary {
  [oid: string]: {
    [version: string]: {
      code: string;
      system: string;
      version?: string;
      display?: string;
    }[];
  };
}

export interface ValueSetObject {
  [oid: string]: {
    [version: string]: ValueSet;
  };
}

export interface TerminologyProvider {
  valueSets: ValueSetObject;
  findValueSetsByOid: (oid: string) => any;
  findValueSet: (oid: string, version?: string) => any;
}
