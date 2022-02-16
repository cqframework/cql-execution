import { Context } from '../runtime/context';
import { Expression } from './expression';
import { build } from './builder';

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

  exec(ctx: Context) {
    // If context parameters contains the name, return value.
    if (ctx && ctx.parameters[this.name] !== undefined) {
      return ctx.parameters[this.name];
      // If the parent context contains the name, return that
    } else if (ctx.getParentParameter(this.name) !== undefined) {
      const parentParam = ctx.getParentParameter(this.name);
      return parentParam.default != null ? parentParam.default.execute(ctx) : parentParam;
      // If default type exists, execute the default type
    } else if (this.default != null) {
      this.default.execute(ctx);
    }
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

  exec(ctx: Context) {
    ctx = this.library ? ctx.getLibraryContext(this.library) : ctx;
    const param = ctx.getParameter(this.name);
    return param != null ? param.execute(ctx) : undefined;
  }
}
