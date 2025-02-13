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
  findValueSetsByOid: (oid: string) => ValueSet[] | Promise<ValueSet[]>;
  findValueSet: (oid: string, version?: string) => ValueSet | Promise<ValueSet> | null;
}
//
// /**
//  * Interface extending TerminologyProvider to include advanced terminology operations such as expanding valuesets and codesystems
//  */
//
// export interface AdvancedTerminologyProvider extends TerminologyProvider {
//   inValueSet: (code: Code | Code[], oid: string, version?: string) => boolean | Promise<boolean>;
//   anyInValueSet: (code: Code | Code[], oid: string, version?: string) => boolean | Promise<boolean>;
//   expandValueSet: ( oid: string, version?: string) => Code[] | Promise<Code[]>;
//   inCodeSystem: (code: Code | Code[], codeSystem: CodeSystem) => boolean | Promise<boolean>;
//   // expandCodeSystem: (codeSystem: CodeSystem) => Code[] | Promise<Code[]>;
//   // subsumes: (subsuming: Code | Concept, subsumed: Code | Concept) => boolean | Promise<boolean>;
//
// }
