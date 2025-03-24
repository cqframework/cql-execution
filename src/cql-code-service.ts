import { Code, ValueSetExpansion } from './datatypes/datatypes';
import { TerminologyProvider, ValueSetDictionary, ValueSetObject } from './types';

export class CodeService implements TerminologyProvider {
  valueSets: ValueSetObject;

  constructor(valueSetsJson: ValueSetDictionary = {}) {
    this.valueSets = {};
    for (const oid in valueSetsJson) {
      this.valueSets[oid] = {};
      for (const version in valueSetsJson[oid]) {
        const codes = valueSetsJson[oid][version].map(
          (code: any) => new Code(code.code, code.system, code.version)
        );
        this.valueSets[oid][version] = new ValueSetExpansion(oid, version, codes);
      }
    }
  }

  findValueSetsByOid(oid: string): ValueSetExpansion[] {
    return this.valueSets[oid] ? Object.values(this.valueSets[oid]) : [];
  }

  findValueSet(oid: string, version?: string): ValueSetExpansion | null {
    if (version != null) {
      return this.valueSets[oid] != null ? this.valueSets[oid][version] : null;
    } else {
      const results = this.findValueSetsByOid(oid);
      if (results.length === 0) {
        return null;
      } else {
        return results.reduce((a: any, b: any) => {
          if (a.version > b.version) {
            return a;
          } else {
            return b;
          }
        });
      }
    }
  }
}
