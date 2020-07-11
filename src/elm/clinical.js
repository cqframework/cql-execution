/*
 * decaffeinate suggestions:
 * DS101: Remove unnecessary use of Array.from
 * DS102: Remove unnecessary code created because of implicit returns
 * DS103: Rewrite code to no longer use __guard__
 * DS104: Avoid inline assignments
 * DS206: Consider reworking classes to avoid initClass
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
let AnyInValueSet, CalculateAge, CalculateAgeAt, Code, CodeDef, CodeRef, CodeSystemDef, Concept, ConceptDef, ConceptRef, InValueSet, ValueSetDef, ValueSetRef;
const { Expression } = require('./expression');
const dt = require('../datatypes/datatypes');
const { build } = require('./builder');

module.exports.ValueSetDef = (ValueSetDef = class ValueSetDef extends Expression {
  constructor(json) {
    super(...arguments);
    this.name = json.name;
    this.id = json.id;
    this.version = json.version;
  }
    //todo: code systems and versions

  exec(ctx) {
    let left;
    const valueset = (left = ctx.codeService.findValueSet(this.id, this.version)) != null ? left : new dt.ValueSet(this.id, this.version);
    ctx.rootContext().set(this.name, valueset);
    return valueset;
  }
});

module.exports.ValueSetRef = (ValueSetRef = class ValueSetRef extends Expression {
  constructor(json) {
    super(...arguments);
    this.name = json.name;
    this.libraryName = json.libraryName;
  }

  exec(ctx) {
    // TODO: This calls the code service every time-- should be optimized
    let valueset = ctx.getValueSet(this.name, this.libraryName);
    if (valueset instanceof Expression) {
      valueset = valueset.execute(ctx);
    }
    return valueset;
  }
});

module.exports.AnyInValueSet = (AnyInValueSet = class AnyInValueSet extends Expression {
  constructor(json) {
    super(...arguments);
    this.codes = build(json.codes);
    this.valueset = new ValueSetRef(json.valueset);
  }

  exec(ctx) {
    const valueset = this.valueset.execute(ctx);
    // If the value set reference cannot be resolved, a run-time error is thrown.
    if ((valueset == null) || !valueset.isValueSet) { throw new Error("ValueSet must be provided to InValueSet function"); }

    const codes = this.codes.exec(ctx);
    if (codes == null) { return false; }
    for (let code of codes) {
      if (valueset.hasMatch(code)) { return true; }
    }
    return false;
  }
});

module.exports.InValueSet = (InValueSet = class InValueSet extends Expression {
  constructor(json) {
    super(...arguments);
    this.code = build(json.code);
    this.valueset = new ValueSetRef(json.valueset);
  }

  exec(ctx) {
    // If the code argument is null, the result is false
    if (this.code == null) { return false; }
    if (this.valueset == null) { throw new Error("ValueSet must be provided to InValueSet function"); }
    const code = this.code.execute(ctx);
    // spec indicates to return false if code is null, throw error if value set cannot be resolved
    if (code == null) { return false; }
    const valueset = this.valueset.execute(ctx);
    if ((valueset == null) || !valueset.isValueSet) { throw new Error("ValueSet must be provided to InValueSet function"); }
    // If there is a code and valueset return whether or not the valueset has the code
    return valueset.hasMatch(code);
  }
});

module.exports.CodeSystemDef = (CodeSystemDef = class CodeSystemDef extends Expression {
  constructor(json) {
    super(...arguments);
    this.name = json.name;
    this.id = json.id;
    this.version = json.version;
  }

  exec(ctx) {
    return new dt.CodeSystem(this.id, this.version);
  }
});

module.exports.CodeDef = (CodeDef = class CodeDef extends Expression {
  constructor(json) {
    super(...arguments);
    this.name = json.name;
    this.id = json.id;
    this.systemName = json.codeSystem.name;
    this.display = json.display;
  }

  exec(ctx) {
    const system = __guard__(ctx.getCodeSystem(this.systemName), x => x.execute(ctx));
    return new dt.Code(this.id, system.id, system.version, this.display);
  }
});

module.exports.CodeRef = (CodeRef = class CodeRef extends Expression {
  constructor(json) {
    super(...arguments);
    this.name = json.name;
    this.library = json.libraryName;
  }

  exec(ctx) {
    ctx = this.library ? ctx.getLibraryContext(this.library) : ctx;
    return __guard__(ctx.getCode(this.name), x => x.execute(ctx));
  }
});

module.exports.Code = (Code = (function() {
  Code = class Code extends Expression {
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
    constructor(json) {
      super(...arguments);
      this.code = json.code;
      this.systemName = json.system.name;
      this.version = json.version;
      this.display = json.display;
    }

    exec(ctx) {
      const system = __guard__(ctx.getCodeSystem(this.systemName), x => x.id);
      return new dt.Code(this.code, system, this.version, this.display);
    }
  };
  Code.initClass();
  return Code;
})());

module.exports.ConceptDef = (ConceptDef = class ConceptDef extends Expression {
  constructor(json) {
    super(...arguments);
    this.name = json.name;
    this.display = json.display;
    this.codes = json.code;
  }

  exec(ctx) {
    const codes = (this.codes.map((code) => __guard__(ctx.getCode(code.name), x => x.execute(ctx))));
    return new dt.Concept(codes, this.display);
  }
});

module.exports.ConceptRef = (ConceptRef = class ConceptRef extends Expression {
  constructor(json) {
    super(...arguments);
    this.name = json.name;
  }

  exec(ctx) {
    return __guard__(ctx.getConcept(this.name), x => x.execute(ctx));
  }
});

module.exports.Concept = (Concept = (function() {
  Concept = class Concept extends Expression {
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
    constructor(json) {
      super(...arguments);
      this.codes = json.code;
      this.display = json.display;
    }

    toCode(ctx, code) {
      const system = __guard__(ctx.getCodeSystem(code.system.name), x => x.id);
      return new dt.Code(code.code, system, code.version, code.display);
    }

    exec(ctx) {
      const codes = (this.codes.map((code) => this.toCode(ctx, code)));
      return new dt.Concept(codes, this.display);
    }
  };
  Concept.initClass();
  return Concept;
})());

module.exports.CalculateAge = (CalculateAge = class CalculateAge extends Expression {
  constructor(json) {
    super(...arguments);
    this.precision = json.precision;
  }

  exec(ctx) {
    const date1 = this.execArgs(ctx);
    const date2 = dt.DateTime.fromJSDate(ctx.getExecutionDateTime());
    const result = date1 != null ? date1.durationBetween(date2, this.precision.toLowerCase()) : undefined;
    if ((result != null) && result.isPoint()) { return result.low; } else { return result; }
  }
});

module.exports.CalculateAgeAt = (CalculateAgeAt = class CalculateAgeAt extends Expression {
  constructor(json) {
    super(...arguments);
    this.precision = json.precision;
  }

  exec(ctx) {
    let [date1, date2] = Array.from(this.execArgs(ctx));
    if ((date1 != null) && (date2 != null)) {
      // date1 is the birthdate, convert it to date if date2 is a date (to support ignoring time)
      if (date2.isDate && date1.isDateTime) {
        date1 = date1.getDate();
      }
      const result = date1.durationBetween(date2, this.precision.toLowerCase());
      if ((result != null) && result.isPoint()) { return result.low; } else { return result; }
    } else {
      return null;
    }
  }
});

function __guard__(value, transform) {
  return (typeof value !== 'undefined' && value !== null) ? transform(value) : undefined;
}