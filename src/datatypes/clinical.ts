import { typeIsArray } from '../util/util';

export class Code {
  constructor(
    public code: string,
    public system?: string,
    public version?: string,
    public display?: string
  ) {}

  get isCode() {
    return true;
  }

  hasMatch(code: any) {
    if (typeof code === 'string') {
      // the specific behavior for this is not in the specification. Matching codesystem behavior.
      return code === this.code;
    } else {
      return codesInList(toCodeList(code), [this]);
    }
  }
}

export class Concept {
  constructor(public codes: any[], public display?: string) {
    this.codes ||= [];
  }

  get isConcept() {
    return true;
  }

  hasMatch(code: any) {
    return codesInList(toCodeList(code), this.codes);
  }
}

export class ValueSet {
  constructor(public oid: string, public version?: string, public codes: any[] = []) {
    this.codes ||= [];
  }

  get isValueSet() {
    return true;
  }

  hasMatch(code: any) {
    const codesList = toCodeList(code);
    // InValueSet String Overload
    if (codesList.length === 1 && typeof codesList[0] === 'string') {
      let matchFound = false;
      let multipleCodeSystemsExist = false;
      for (const codeItem of this.codes) {
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

function toCodeList(c: any): any {
  if (c == null) {
    return [];
  } else if (typeIsArray(c)) {
    let list: any = [];
    for (const c2 of c) {
      list = list.concat(toCodeList(c2));
    }
    return list;
  } else if (typeIsArray(c.codes)) {
    return c.codes;
  } else {
    return [c];
  }
}

function codesInList(cl1: any, cl2: any) {
  // test each code in c1 against each code in c2 looking for a match
  return cl1.some((c1: any) =>
    cl2.some((c2: any) => {
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

function codesMatch(code1: Code, code2: Code) {
  return code1.code === code2.code && code1.system === code2.system;
}

export class CodeSystem {
  constructor(public id: string, public version?: string) {}
}
