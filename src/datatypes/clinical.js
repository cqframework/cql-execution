/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS206: Consider reworking classes to avoid initClass
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
let Code, CodeSystem, Concept, ValueSet;
const { typeIsArray } = require('../util/util');

module.exports.Code = (Code = (function() {
  Code = class Code {
    static initClass() {
  
      // Define a simple getter to allow type-checking of this class without instanceof
      // and in a way that survives minification (as opposed to checking constructor.name)
      Object.defineProperties(this.prototype, {
        isCode: {
          get() { return true; }
        }
      }
      );
    }
    constructor(code, system, version, display) {
      this.code = code;
      this.system = system;
      this.version = version;
      this.display = display;
    }

    hasMatch(code) {
      if (typeof code === 'string') {
        // the specific behavior for this is not in the specification. Matching codesystem behavior.
        return code === this.code;
      } else {
        return codesInList(toCodeList(code), [this]);
      }
    }
  };
  Code.initClass();
  return Code;
})());

module.exports.Concept = (Concept = (function() {
  Concept = class Concept {
    static initClass() {
  
      // Define a simple getter to allow type-checking of this class without instanceof
      // and in a way that survives minification (as opposed to checking constructor.name)
      Object.defineProperties(this.prototype, {
        isConcept: {
          get() { return true; }
        }
      }
      );
    }
    constructor(codes = [], display) {
      this.codes = codes;
      this.display = display;
    }

    hasMatch(code) {
      return codesInList(toCodeList(code), this.codes);
    }
  };
  Concept.initClass();
  return Concept;
})());

module.exports.ValueSet = (ValueSet = (function() {
  ValueSet = class ValueSet {
    static initClass() {
  
      Object.defineProperties(this.prototype, {
        isValueSet: {
          get() { return true; }
        }
      }
      );
    }
    constructor(oid, version, codes = []) {
      this.oid = oid;
      this.version = version;
      this.codes = codes;
    }

    hasMatch(code) {
      const codesList = toCodeList(code);
      // InValueSet String Overload
      if ((codesList.length === 1) && (typeof codesList[0] === 'string')) {
        let matchFound = false;
        let multipleCodeSystemsExist = false;
        for (let codeItem of this.codes) {
          // Confirm all code systems match
          if (codeItem.system !== this.codes[0].system) {
            multipleCodeSystemsExist = true;
          }
          if (codeItem.code === codesList[0]) {
            matchFound = true;
          }
          if (multipleCodeSystemsExist && matchFound) {
            throw new Error('In (valueset) is ambiguous -- multiple codes with multiple code systems exist in value set.');
          }
        }
        return matchFound;
      } else {
        return codesInList(codesList, this.codes);
      }
    }
  };
  ValueSet.initClass();
  return ValueSet;
})());

var toCodeList = function(c) {
  if ((c == null)) {
    return [];
  } else if (typeIsArray(c)) {
    let list = [];
    for (let c2 of c) {
      list = list.concat(toCodeList(c2));
    }
    return list;
  } else if (typeIsArray(c.codes)) {
    return c.codes;
  } else {
    return [c];
  }
};


var codesInList = (cl1, cl2) => cl1.some(c1 => cl2.some(function(c2) {
  // only the left argument (cl1) can contain strings. cl2 will only contain codes.
  if (typeof c1 === 'string') {
    // for "string in codesystem" this should compare the string to
    // the code's "code" field according to the specification.
    return c1 === c2.code;
  } else {
    return codesMatch(c1, c2);
  }}));

var codesMatch = (code1, code2) => (code1.code === code2.code) && (code1.system === code2.system);

module.exports.CodeSystem = (CodeSystem = class CodeSystem {
  constructor(id, version) {
    this.id = id;
    this.version = version;
  }
});
