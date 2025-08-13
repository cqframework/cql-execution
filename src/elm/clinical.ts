import { Expression } from './expression';
import * as dt from '../datatypes/datatypes';
import { Context } from '../runtime/context';
import { build } from './builder';
import { resolveValueSet } from '../util/util';

export class ValueSetDef extends Expression {
  name: string;
  id: string;
  version?: string;
  codesystems?: CodeSystemRef[];

  constructor(json: any) {
    super(json);
    this.name = json.name;
    this.id = json.id;
    this.version = json.version;
    this.codesystems = json.codeSystem?.map((cs: any) => new CodeSystemRef(cs));
  }

  async exec(ctx: Context) {
    let codeSystems;
    if (this.codesystems) {
      codeSystems = await Promise.all(
        this.codesystems.map(async cs => {
          const csdef = (await cs.exec(ctx)) as CodeSystemDef;
          return new dt.CodeSystem(csdef.id, csdef.version, csdef.name);
        })
      );
    }
    const valueset = new dt.ValueSet(this.id, this.version, this.name, codeSystems);
    // ctx.rootContext().set(this.name, valueset); Note (2025): this seems to be unneccesary, remove completely in future if not needed
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

  async exec(ctx: Context) {
    let valueset = ctx.getValueSet(this.name, this.libraryName);
    if (valueset instanceof Expression) {
      valueset = await valueset.execute(ctx);
    }
    return valueset;
  }
}

export class AnyInValueSet extends Expression {
  codes: Expression;
  valueset: Expression;

  constructor(json: any) {
    super(json);
    this.codes = build(json.codes) as Expression;
    this.valueset = json.valueset
      ? new ValueSetRef(json.valueset)
      : (build(json.valuesetExpression) as Expression);
  }

  async exec(ctx: Context) {
    const codes = await this.codes.execute(ctx);
    // spec indicates to return false if code is null, throw error if value set cannot be resolved
    if (codes == null) {
      return false;
    }
    const valueset: dt.ValueSet = await this.valueset.execute(ctx);
    if (valueset == null || !valueset.isValueSet) {
      throw new Error('ValueSet must be provided to AnyInValueSet expression');
    }
    const vsExpansion = await resolveValueSet(valueset, ctx);
    return codes.some((code: any) => vsExpansion.hasMatch(code));
  }
}

export class InValueSet extends Expression {
  code: Expression;
  valueset: Expression;

  constructor(json: any) {
    super(json);
    this.code = build(json.code) as Expression;
    this.valueset = json.valueset
      ? new ValueSetRef(json.valueset)
      : (build(json.valuesetExpression) as Expression);
  }

  async exec(ctx: Context) {
    const code = await this.code.execute(ctx);
    // spec indicates to return false if code is null, throw error if value set cannot be resolved
    if (code == null) {
      return false;
    }
    const valueset: dt.ValueSet = await this.valueset.execute(ctx);
    if (valueset == null || !valueset.isValueSet) {
      throw new Error('ValueSet must be provided to InValueSet expression');
    }
    // If there is a code and valueset return whether or not the valueset has the code
    const vsExpansion = await resolveValueSet(valueset, ctx);
    return vsExpansion.hasMatch(code);
  }
}

export class ExpandValueSet extends Expression {
  valueset: Expression;

  constructor(json: any) {
    super(json);
    this.valueset = build(json.operand) as Expression;
  }

  async exec(ctx: Context) {
    const valueset: dt.ValueSet = await this.valueset.execute(ctx);
    if (valueset == null) {
      return null;
    } else if (!valueset.isValueSet) {
      throw new Error('ExpandValueSet function invoked on object that is not a ValueSet');
    }
    const vsExpansion = await resolveValueSet(valueset, ctx);
    return vsExpansion.expand();
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

  async exec(_ctx: Context) {
    return new dt.CodeSystem(this.id, this.version, this.name);
  }
}

export class CodeSystemRef extends Expression {
  name: string;
  libraryName: string;

  constructor(json: any) {
    super(json);
    this.name = json.name;
    this.libraryName = json.libraryName;
  }

  async exec(ctx: Context) {
    const codeSystemDef = ctx.getCodeSystem(this.name, this.libraryName);
    return codeSystemDef ? codeSystemDef.execute(ctx) : undefined;
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

  async exec(ctx: Context) {
    const system = await ctx.getCodeSystem(this.systemName).execute(ctx);
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

  async exec(ctx: Context) {
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

  async exec(ctx: Context) {
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

  async exec(ctx: Context) {
    const codes = await Promise.all(
      this.codes.map(async (code: any) => {
        const codeDef = ctx.getCode(code.name);
        return codeDef ? codeDef.execute(ctx) : undefined;
      })
    );
    return new dt.Concept(codes, this.display);
  }
}

export class ConceptRef extends Expression {
  name: string;

  constructor(json: any) {
    super(json);
    this.name = json.name;
  }

  async exec(ctx: Context) {
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

  async exec(ctx: Context) {
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

  async exec(ctx: Context) {
    const birthDate = await this.execArgs(ctx);
    // From the spec: "Note that for AgeInYears and AgeInMonths, the birthDate is specified as a
    // Date and Today() is used to obtain the current date; whereas with the other precisions,
    // birthDate is specified as a DateTime, and Now() is used to obtain the current DateTime."
    // See: https://cql.hl7.org/09-b-cqlreference.html#age
    let asOf: dt.Date | dt.DateTime;
    if (
      this.precision.toLowerCase() === dt.DateTime.Unit.YEAR ||
      this.precision.toLowerCase() === dt.DateTime.Unit.MONTH
    ) {
      asOf = dt.DateTime.fromJSDate(ctx.getExecutionDateTime()).getDate();
    } else {
      asOf = dt.DateTime.fromJSDate(ctx.getExecutionDateTime());
    }
    return calculateAge(this.precision, birthDate, asOf);
  }
}

export class CalculateAgeAt extends Expression {
  precision: string;

  constructor(json: any) {
    super(json);
    this.precision = json.precision;
  }

  async exec(ctx: Context) {
    const [birthDate, asOf] = await this.execArgs(ctx);
    const timeZoneOffset = ctx.getExecutionDateTime().timezoneOffset;
    return calculateAge(this.precision, birthDate, asOf, timeZoneOffset);
  }
}

/**
 * Calculates the age as of a certain date based on the passed in birth date. If the asOf date is
 * a Date, then birth date will be converted to a Date (if necessary) before calculation is
 * performed. If the asOf is a DateTime, then the birth date will be converted to a DateTime (if
 * necessary) before calculation is performed. The result is an integer or uncertainty specifying
 * the age in the requested precision units.
 * @param precision - the precision as specified in the ELM (e.g., Year, Month, Week, etc.)
 * @param birthDate - the birth date to use for age calculations (may be Date or DateTime)
 * @param asOf - the date on which the age should be calculated (may be Date or DateTime)
 * @param timeZoneOffset - the passed in timeZoneOffset (if it exists) to be used when
 * converting birthDate from a Date to a DateTime
 * @returns the age as an integer or uncertainty in the requested precision units
 */
function calculateAge(
  precision: string,
  birthDate?: dt.Date | dt.DateTime,
  asOf?: dt.Date | dt.DateTime,
  timeZoneOffset?: number | null
) {
  if (birthDate != null && asOf != null) {
    // Ensure we use like types (Date or DateTime) based on asOf type
    if (asOf.isDate && birthDate.isDateTime) {
      birthDate = (birthDate as dt.DateTime).getDate();
    } else if (asOf.isDateTime && birthDate.isDate) {
      birthDate = birthDate.getDateTime(timeZoneOffset);
    }
    const result = birthDate.durationBetween(asOf, precision.toLowerCase());
    if (result?.isPoint()) {
      return result.low;
    } else {
      return result;
    }
  }
  return null;
}
