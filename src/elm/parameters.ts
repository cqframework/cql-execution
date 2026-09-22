import { Context } from '../runtime/context';
import { Expression } from './expression';
import { build } from './builder';
import { Integer } from '../datatypes/integer';
import { Long } from '../datatypes/long';
import { ELM_INTEGER_TYPE, ELM_LONG_TYPE } from '../util/elmTypes';

export class ParameterDef extends Expression {
  name: string;
  default: any;
  parameterTypeSpecifier: any;

  constructor(json: any) {
    super(json);
    this.name = json.name;
    this.default = build(json.default);
    this.parameterTypeSpecifier = json.parameterTypeSpecifier;
  }

  async exec(ctx: Context) {
    // If context parameters contains the name, return value.
    if (ctx && ctx.parameters[this.name] !== undefined) {
      return normalizeNumericParameter(ctx.parameters[this.name], this.parameterTypeSpecifier);
      // If the parent context contains the name, return that
    } else if (ctx.getParentParameter(this.name) !== undefined) {
      const parentParam = ctx.getParentParameter(this.name);
      return parentParam.default != null ? parentParam.default.execute(ctx) : parentParam;
      // If default type exists, execute the default type
    } else if (this.default != null) {
      return this.default.execute(ctx);
    }
  }
}

// Parameters are an external API boundary. Accept existing primitive inputs,
// while ensuring the evaluator itself sees the CQL numeric runtime types.
function normalizeNumericParameter(value: any, spec: any) {
  if (value == null) {
    return value;
  }
  switch (spec?.name) {
    case ELM_INTEGER_TYPE:
      return Integer.from(value);
    case ELM_LONG_TYPE:
      return Long.from(value);
    default:
      return value;
  }
}

export class ParameterRef extends Expression {
  name: string;
  library: any;

  constructor(json: any) {
    super(json);
    this.name = json.name;
    this.library = json.libraryName;
  }

  async exec(ctx: Context) {
    ctx = this.library ? ctx.getLibraryContext(this.library) : ctx;
    const param = ctx.getParameter(this.name);
    return param != null ? param.execute(ctx) : undefined;
  }
}
