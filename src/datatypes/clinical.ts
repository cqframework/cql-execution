const { typeIsArray } = require('../util/util');

class Code {
  constructor(code, system, version, display) {
    this.code = code;
    this.system = system;
    this.version = version;
    this.display = display;
  }

  get isCode() {
    return true;
  }

  hasMatch(code) {
    if (typeof code === 'string') {
      // the specific behavior for this is not in the specification. Matching codesystem behavior.
      return code === this.code;
    } else {
      return codesInList(toCodeList(code), [this]);
    }
  }
}

class Concept {
  constructor(codes, display) {
    this.codes = codes || [];
    this.display = display;
  }

  get isConcept() {
    return true;
  }

  hasMatch(code) {
    return codesInList(toCodeList(code), this.codes);
  }
}

class ValueSet {
  constructor(oid, version, codes) {
    this.oid = oid;
    this.version = version;
    this.codes = codes || [];
  }

  get isValueSet() {
    return true;
  }

  hasMatch(code) {
    const codesList = toCodeList(code);
    // InValueSet String Overload
    if (codesList.length === 1 && typeof codesList[0] === 'string') {
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
          throw new Error(
            'In (valueset) is ambiguous -- multiple codes with multiple code systems exist in value set.'
          );
        }
      }
      return matchFound;
    } else {
      return codesInList(codesList, this.codes);
    }
  }
}

function toCodeList(c) {
  if (c == null) {
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
}

function codesInList(cl1, cl2) {
  // test each code in c1 against each code in c2 looking for a match
  return cl1.some(c1 =>
    cl2.some(c2 => {
      // only the left argument (cl1) can contain strings. cl2 will only contain codes.
      if (typeof c1 === 'string') {
        // for "string in codesystem" this should compare the string to
        // the code's "code" field according to the specification.
        return c1 === c2.code;
      } else {
        return codesMatch(c1, c2);
      }
    })
  );
}

function codesMatch(code1, code2) {
  return code1.code === code2.code && code1.system === code2.system;
}

class CodeSystem {
  constructor(id, version) {
    this.id = id;
    this.version = version;
  }
}

module.exports = { Code, Concept, ValueSet, CodeSystem };
