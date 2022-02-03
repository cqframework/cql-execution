import { Expression } from './expression';
import * as dt from '../datatypes/datatypes';
import { Context } from '../runtime/context';
import { build } from './builder';

export class ValueSetDef extends Expression {
  name: string;
  id: string;
  version?: string;

  constructor(json: any) {
    super(json);
    this.name = json.name;
    this.id = json.id;
    this.version = json.version;
  }
  //todo: code systems and versions

  exec(ctx: Context) {
    const valueset =
      ctx.codeService.findValueSet(this.id, this.version) || new dt.ValueSet(this.id, this.version);
    ctx.rootContext().set(this.name, valueset);
    return valueset;
  }
}

export class ValueSetRef extends Expression {
  name: string;
  libraryName: string;

  constructor(json: any) {
    super(json);
    this.name = json.name;
    this.libraryName = json.libraryName;
  }

  exec(ctx: Context) {
    // TODO: This calls the code service every time-- should be optimized
    let valueset = ctx.getValueSet(this.name, this.libraryName);
    if (valueset instanceof Expression) {
      valueset = valueset.execute(ctx);
    }
    return valueset;
  }
}

export class AnyInValueSet extends Expression {
  codes: any;
  valueset: ValueSetRef;

  constructor(json: any) {
    super(json);
    this.codes = build(json.codes);
    this.valueset = new ValueSetRef(json.valueset);
  }

  exec(ctx: Context) {
    const valueset = this.valueset.execute(ctx);
    // If the value set reference cannot be resolved, a run-time error is thrown.
    if (valueset == null || !valueset.isValueSet) {
      throw new Error('ValueSet must be provided to InValueSet function');
    }

    const codes = this.codes.exec(ctx);
    return codes != null && codes.some((code: any) => valueset.hasMatch(code));
  }
}

export class InValueSet extends Expression {
  code: any;
  valueset: ValueSetRef;

  constructor(json: any) {
    super(json);
    this.code = build(json.code);
    this.valueset = new ValueSetRef(json.valueset);
  }

  exec(ctx: Context) {
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

export class CodeSystemDef extends Expression {
  name: string;
  id: string;
  version: string;

  constructor(json: any) {
    super(json);
    this.name = json.name;
    this.id = json.id;
    this.version = json.version;
  }

  exec(_ctx: Context) {
    return new dt.CodeSystem(this.id, this.version);
  }
}

export class CodeDef extends Expression {
  name: string;
  id: string;
  systemName: string;
  display?: string;

  constructor(json: any) {
    super(json);
    this.name = json.name;
    this.id = json.id;
    this.systemName = json.codeSystem.name;
    this.display = json.display;
  }

  exec(ctx: Context) {
    const system = ctx.getCodeSystem(this.systemName).execute(ctx);
    return new dt.Code(this.id, system.id, system.version, this.display);
  }
}

export class CodeRef extends Expression {
  name: string;
  library: string;

  constructor(json: any) {
    super(json);
    this.name = json.name;
    this.library = json.libraryName;
  }

  exec(ctx: Context) {
    ctx = this.library ? ctx.getLibraryContext(this.library) : ctx;
    const codeDef = ctx.getCode(this.name);
    return codeDef ? codeDef.execute(ctx) : undefined;
  }
}

export class Code extends Expression {
  code: any;
  systemName: string;
  version: string;
  display?: string;

  constructor(json: any) {
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

  exec(ctx: Context) {
    const system = ctx.getCodeSystem(this.systemName) || {};
    return new dt.Code(this.code, system.id, this.version, this.display);
  }
}

export class ConceptDef extends Expression {
  name: string;
  codes: any;
  display?: string;

  constructor(json: any) {
    super(json);
    this.name = json.name;
    this.display = json.display;
    this.codes = json.code;
  }

  exec(ctx: Context) {
    const codes = this.codes.map((code: any) => {
      const codeDef = ctx.getCode(code.name);
      return codeDef ? codeDef.execute(ctx) : undefined;
    });
    return new dt.Concept(codes, this.display);
  }
}

export class ConceptRef extends Expression {
  name: string;

  constructor(json: any) {
    super(json);
    this.name = json.name;
  }

  exec(ctx: Context) {
    const conceptDef = ctx.getConcept(this.name);
    return conceptDef ? conceptDef.execute(ctx) : undefined;
  }
}

export class Concept extends Expression {
  codes: any;
  display?: string;

  constructor(json: any) {
    super(json);
    this.codes = json.code;
    this.display = json.display;
  }

  // Define a simple getter to allow type-checking of this class without instanceof
  // and in a way that survives minification (as opposed to checking constructor.name)
  get isConcept() {
    return true;
  }

  toCode(ctx: Context, code: any) {
    const system = ctx.getCodeSystem(code.system.name) || {};
    return new dt.Code(code.code, system.id, code.version, code.display);
  }

  exec(ctx: Context) {
    const codes = this.codes.map((code: any) => this.toCode(ctx, code));
    return new dt.Concept(codes, this.display);
  }
}

export class CalculateAge extends Expression {
  precision: string;

  constructor(json: any) {
    super(json);
    this.precision = json.precision;
  }

  exec(ctx: Context) {
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

export class CalculateAgeAt extends Expression {
  precision: string;
  constructor(json: any) {
    super(json);
    this.precision = json.precision;
  }

  exec(ctx: Context) {
    // eslint-disable-next-line prefer-const
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
