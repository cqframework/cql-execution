// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS205: Consider reworking code to avoid use of IIFEs
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const { Code, ValueSet } = require('./datatypes/datatypes');

class CodeService {
  constructor(valueSetsJson = {}) {
    this.valueSets = {};
    for (let oid in valueSetsJson) {
      this.valueSets[oid] = {};
      for (let version in valueSetsJson[oid]) {
        const codes = (valueSetsJson[oid][version].map((code) => new Code(code.code, code.system, code.version)));
        this.valueSets[oid][version] = new ValueSet(oid, version, codes);
      }
    }
  }

  findValueSetsByOid(oid) {
    return (() => {
      const result = [];
      for (let version in this.valueSets[oid]) {
        const valueSet = this.valueSets[oid][version];
        result.push(valueSet);
      }
      return result;
    })();
  }

  findValueSet(oid, version) {
    if (version != null) {
      return (this.valueSets[oid] != null ? this.valueSets[oid][version] : undefined);
    } else {
      const results = this.findValueSetsByOid(oid);
      if (results.length === 0) { return null; } else { return results.reduce(function(a, b) { if (a.version > b.version) { return a; } else { return b; } }); }
    }
  }
}

module.exports.CodeService = CodeService;
