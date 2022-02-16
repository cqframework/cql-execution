import { ValueSet } from '../datatypes/datatypes';

/*
 * Lookup of all codes used based on their ValueSet
 */
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

/*
 * Lookup of ValueSet objects
 */
export interface ValueSetObject {
  [oid: string]: {
    [version: string]: ValueSet;
  };
}

/*
 * Structure of an implementation to look up ValueSets based on oid and version
 */
export interface TerminologyProvider {
  findValueSetsByOid: (oid: string) => any;
  findValueSet: (oid: string, version?: string) => any;
}
