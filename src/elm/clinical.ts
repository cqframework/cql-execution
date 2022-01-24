const { Expression } = require('./expression');
const dt = require('../datatypes/datatypes');
const { build } = require('./builder');

class ValueSetDef extends Expression {
  constructor(json) {
    super(json);
    this.name = json.name;
    this.id = json.id;
    this.version = json.version;
  }
  //todo: code systems and versions

  exec(ctx) {
    const valueset =
      ctx.codeService.findValueSet(this.id, this.version) || new dt.ValueSet(this.id, this.version);
    ctx.rootContext().set(this.name, valueset);
    return valueset;
  }
}

class ValueSetRef extends Expression {
  constructor(json) {
    super(json);
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
}

class AnyInValueSet extends Expression {
  constructor(json) {
    super(json);
    this.codes = build(json.codes);
    this.valueset = new ValueSetRef(json.valueset);
  }

  exec(ctx) {
    const valueset = this.valueset.execute(ctx);
    // If the value set reference cannot be resolved, a run-time error is thrown.
    if (valueset == null || !valueset.isValueSet) {
      throw new Error('ValueSet must be provided to InValueSet function');
    }

    const codes = this.codes.exec(ctx);
    return codes != null && codes.some(code => valueset.hasMatch(code));
  }
}

class InValueSet extends Expression {
  constructor(json) {
    super(json);
    this.code = build(json.code);
    this.valueset = new ValueSetRef(json.valueset);
  }

  exec(ctx) {
    // If the code argument is null, the result is false
    if (this.code == null) {
      return false;
    }
    if (this.valueset == null) {
      throw new Error('ValueSet must be provided to InValueSet function');
    }
    const code = this.code.execute(ctx);
    // spec indicates to return false if code is null, throw error if value set cannot be resolved
    if (code == null) {
      return false;
    }
    const valueset = this.valueset.execute(ctx);
    if (valueset == null || !valueset.isValueSet) {
      throw new Error('ValueSet must be provided to InValueSet function');
    }
    // If there is a code and valueset return whether or not the valueset has the code
    return valueset.hasMatch(code);
  }
}

class CodeSystemDef extends Expression {
  constructor(json) {
    super(json);
    this.name = json.name;
    this.id = json.id;
    this.version = json.version;
  }

  exec(ctx) {
    return new dt.CodeSystem(this.id, this.version);
  }
}

class CodeDef extends Expression {
  constructor(json) {
    super(json);
    this.name = json.name;
    this.id = json.id;
    this.systemName = json.codeSystem.name;
    this.display = json.display;
  }

  exec(ctx) {
    const system = ctx.getCodeSystem(this.systemName).execute(ctx);
    return new dt.Code(this.id, system.id, system.version, this.display);
  }
}

class CodeRef extends Expression {
  constructor(json) {
    super(json);
    this.name = json.name;
    this.library = json.libraryName;
  }

  exec(ctx) {
    ctx = this.library ? ctx.getLibraryContext(this.library) : ctx;
    const codeDef = ctx.getCode(this.name);
    return codeDef ? codeDef.execute(ctx) : undefined;
  }
}

class Code extends Expression {
  constructor(json) {
    super(json);
    this.code = json.code;
    this.systemName = json.system.name;
    this.version = json.version;
    this.display = json.display;
  }

  // Define a simple getter to allow type-checking of this class without instanceof
  // and in a way that survives minification (as opposed to checking constructor.name)
  get isCode() {
    return true;
  }

  exec(ctx) {
    const system = ctx.getCodeSystem(this.systemName) || {};
    return new dt.Code(this.code, system.id, this.version, this.display);
  }
}

class ConceptDef extends Expression {
  constructor(json) {
    super(json);
    this.name = json.name;
    this.display = json.display;
    this.codes = json.code;
  }

  exec(ctx) {
    const codes = this.codes.map(code => {
      const codeDef = ctx.getCode(code.name);
      return codeDef ? codeDef.execute(ctx) : undefined;
    });
    return new dt.Concept(codes, this.display);
  }
}

class ConceptRef extends Expression {
  constructor(json) {
    super(json);
    this.name = json.name;
  }

  exec(ctx) {
    const conceptDef = ctx.getConcept(this.name);
    return conceptDef ? conceptDef.execute(ctx) : undefined;
  }
}

class Concept extends Expression {
  constructor(json) {
    super(json);
    this.codes = json.code;
    this.display = json.display;
  }

  // Define a simple getter to allow type-checking of this class without instanceof
  // and in a way that survives minification (as opposed to checking constructor.name)
  get isConcept() {
    return true;
  }

  toCode(ctx, code) {
    const system = ctx.getCodeSystem(code.system.name) || {};
    return new dt.Code(code.code, system.id, code.version, code.display);
  }

  exec(ctx) {
    const codes = this.codes.map(code => this.toCode(ctx, code));
    return new dt.Concept(codes, this.display);
  }
}

class CalculateAge extends Expression {
  constructor(json) {
    super(json);
    this.precision = json.precision;
  }

  exec(ctx) {
    const date1 = this.execArgs(ctx);
    const date2 = dt.DateTime.fromJSDate(ctx.getExecutionDateTime());
    const result =
      date1 != null ? date1.durationBetween(date2, this.precision.toLowerCase()) : undefined;
    if (result != null && result.isPoint()) {
      return result.low;
    } else {
      return result;
    }
  }
}

class CalculateAgeAt extends Expression {
  constructor(json) {
    super(json);
    this.precision = json.precision;
  }

  exec(ctx) {
    let [date1, date2] = this.execArgs(ctx);
    if (date1 != null && date2 != null) {
      // date1 is the birthdate, convert it to date if date2 is a date (to support ignoring time)
      if (date2.isDate && date1.isDateTime) {
        date1 = date1.getDate();
      }
      const result = date1.durationBetween(date2, this.precision.toLowerCase());
      if (result != null && result.isPoint()) {
        return result.low;
      } else {
        return result;
      }
    }

    return null;
  }
}

module.exports = {
  AnyInValueSet,
  CalculateAge,
  CalculateAgeAt,
  Code,
  CodeDef,
  CodeRef,
  CodeSystemDef,
  Concept,
  ConceptDef,
  ConceptRef,
  InValueSet,
  ValueSetDef,
  ValueSetRef
};
