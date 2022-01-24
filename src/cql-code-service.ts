const { Code, ValueSet } = require('./datatypes/datatypes');

class CodeService {
  constructor(valueSetsJson = {}) {
    this.valueSets = {};
    for (let oid in valueSetsJson) {
      this.valueSets[oid] = {};
      for (let version in valueSetsJson[oid]) {
        const codes = valueSetsJson[oid][version].map(
          code => new Code(code.code, code.system, code.version)
        );
        this.valueSets[oid][version] = new ValueSet(oid, version, codes);
      }
    }
  }

  findValueSetsByOid(oid) {
    return this.valueSets[oid] ? Object.values(this.valueSets[oid]) : [];
  }

  findValueSet(oid, version) {
    if (version != null) {
      return this.valueSets[oid] != null ? this.valueSets[oid][version] : undefined;
    } else {
      const results = this.findValueSetsByOid(oid);
      if (results.length === 0) {
        return null;
      } else {
        return results.reduce((a, b) => {
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

module.exports.CodeService = CodeService;
