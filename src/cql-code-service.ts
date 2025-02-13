import {Code, CodeSystem, ValueSet, Concept} from './datatypes/datatypes';
import {AdvancedTerminologyProvider, TerminologyProvider, ValueSetDictionary, ValueSetObject} from './types';

class CodeService implements TerminologyProvider {
  valueSets: ValueSetObject;

  constructor(valueSetsJson: ValueSetDictionary = {}) {
    this.valueSets = {};
    for (const oid in valueSetsJson) {
      this.valueSets[oid] = {};
      for (const version in valueSetsJson[oid]) {
        const codes = valueSetsJson[oid][version].map(
          (code: any) => new Code(code.code, code.system, code.version)
        );
        this.valueSets[oid][version] = new ValueSet(oid, version, codes);
      }
    }
  }

  findValueSetsByOid(oid: string): ValueSet[] {
    return this.valueSets[oid] ? Object.values(this.valueSets[oid]) : [];
  }

  findValueSet(oid: string, version?: string): ValueSet | null {
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


class AdvancedCodeService implements AdvancedTerminologyProvider {
  valueSets: ValueSetObject;

  constructor(valueSetsJson: ValueSetDictionary = {}) {
    this.valueSets = {};
    for (const oid in valueSetsJson) {
      this.valueSets[oid] = {};
      for (const version in valueSetsJson[oid]) {
        const codes = valueSetsJson[oid][version].map(
          (code: any) => new Code(code.code, code.system, code.version)
        );
        this.valueSets[oid][version] = new ValueSet(oid, version, codes);
      }
    }
  }

  findValueSetsByOid(oid: string): ValueSet[] {
    return this.valueSets[oid] ? Object.values(this.valueSets[oid]) : [];
  }

  findValueSet(oid: string, version?: string): ValueSet | null {
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



  expandValueSet(oid: string, version?: string): Code[] {
    const results: Code[] = [];
    const valueSet: ValueSet | null = this.findValueSet(oid, version);
    if (valueSet == null) {
      return [];
    }
    valueSet.codes.forEach(code => {
      if (!results.find(result => {
        result === code;
      })) {
        results.push(code);

      }
    });
    return results;
  }



  inValueSet(code: Code | Code[], oid: string, version?: string): boolean {
    throw new Error('This function is not implemented.');
  }


  expandCodeSystem(codeSystem: CodeSystem): Code[] {
    throw new Error('This function is not implemented.');
  }


  inCodeSystem(code: Code | Code[], codeSystem: CodeSystem): boolean {
    throw new Error('This function is not implemented.');
  }

  subsumes(subsuming: Code | Concept, subsumed: Code | Concept): boolean {
    throw new Error('This function is not implemented.');
  }
}



export {CodeService,AdvancedCodeService};
