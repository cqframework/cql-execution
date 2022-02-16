import { Context } from '../runtime/context';
import { Expression } from './expression';
import { build } from './builder';
import { Parameter } from '../types/runtime.types';

export class ExpressionDef extends Expression {
  name: string;
  context: any;
  expression: any;

  constructor(json: any) {
    super(json);
    this.name = json.name;
    this.context = json.context;
    this.expression = build(json.expression);
  }
  exec(ctx: Context) {
    const value = this.expression != null ? this.expression.execute(ctx) : undefined;
    ctx.rootContext().set(this.name, value);
    return value;
  }
}

export class ExpressionRef extends Expression {
  name: string;
  library: string;

  constructor(json: any) {
    super(json);
    this.name = json.name;
    this.library = json.libraryName;
  }
  exec(ctx: Context) {
    ctx = this.library ? ctx.getLibraryContext(this.library) : ctx;
    let value = ctx.get(this.name);
    if (value instanceof Expression) {
      value = value.execute(ctx);
    }
    return value;
  }
}

export class FunctionDef extends Expression {
  name: string;
  expression: any;
  parameters?: Parameter;

  constructor(json: any) {
    super(json);
    this.name = json.name;
    this.expression = build(json.expression);
    this.parameters = json.operand;
  }
  exec(_ctx: Context) {
    return this;
  }
}

export class FunctionRef extends Expression {
  name: string;
  library: string;

  constructor(json: any) {
    super(json);
    this.name = json.name;
    this.library = json.libraryName;
  }

  exec(ctx: Context) {
    let functionDefs, child_ctx;
    if (this.library) {
      const lib = ctx.get(this.library);
      functionDefs = lib ? lib.getFunction(this.name) : undefined;
      const libCtx = ctx.getLibraryContext(this.library);
      child_ctx = libCtx ? libCtx.childContext() : undefined;
    } else {
      functionDefs = ctx.get(this.name);
      child_ctx = ctx.childContext();
    }
    const args = this.execArgs(ctx);

    // Filter out functions w/ wrong number of arguments.
    functionDefs = functionDefs.filter((f: any) => f.parameters.length === args.length);
    // If there is still > 1 matching function, filter by argument types
    if (functionDefs.length > 1) {
      functionDefs = functionDefs.filter((f: any) => {
        let match = true;
        for (let i = 0; i < args.length && match; i++) {
          if (args[i] !== null) {
            let operandTypeSpecifier = f.parameters[i].operandTypeSpecifier;
            if (operandTypeSpecifier == null && f.parameters[i].operandType != null) {
              // convert it to a NamedTypedSpecifier
              operandTypeSpecifier = {
                name: f.parameters[i].operandType,
                type: 'NamedTypeSpecifier'
              };
            }
            match = ctx.matchesTypeSpecifier(args[i], operandTypeSpecifier);
          }
        }
        return match;
      });
    }
    // If there is still > 1 matching function, calculate a score based on quality of matches
    if (functionDefs.length > 1) {
      // TODO
    }

    if (functionDefs.length === 0) {
      throw new Error('no function with matching signature could be found');
    }
    // By this point, we should have only one function, but until implementation is completed,
    // use the last one (no matter how many still remain)
    const functionDef = functionDefs[functionDefs.length - 1];
    for (let i = 0; i < functionDef.parameters.length; i++) {
      child_ctx.set(functionDef.parameters[i].name, args[i]);
    }
    return functionDef.expression.execute(child_ctx);
  }
}

export class OperandRef extends Expression {
  name: string;

  constructor(json: any) {
    super(json);
    this.name = json.name;
  }

  exec(ctx: Context) {
    return ctx.get(this.name);
  }
}

export class IdentifierRef extends Expression {
  name: string;
  library: string;

  constructor(json: any) {
    super(json);
    this.name = json.name;
    this.library = json.libraryName;
  }
  exec(ctx: Context) {
    // TODO: Technically, the ELM Translator should never output one of these
    // but this code is needed since it does, as a work-around to get queries
    // to work properly when sorting by a field in a tuple
    const lib = this.library ? ctx.get(this.library) : undefined;
    let val = lib ? lib.get(this.name) : ctx.get(this.name);
    if (val == null) {
      const parts = this.name.split('.');
      val = ctx.get(parts[0]);
      if (val != null && parts.length > 1) {
        let curr_obj = val;
        for (const part of parts.slice(1)) {
          // _obj = curr_obj?[part] ? curr_obj?.get?(part)
          // curr_obj = if _obj instanceof Function then _obj.call(curr_obj) else _obj
          let _obj;
          if (curr_obj != null) {
            _obj = curr_obj[part];
            if (_obj === undefined && typeof curr_obj.get === 'function') {
              _obj = curr_obj.get(part);
            }
          }
          curr_obj = _obj instanceof Function ? _obj.call(curr_obj) : _obj;
        }
        val = curr_obj;
      }
    }
    if (val instanceof Function) {
      return val.call(ctx.context_values);
    } else {
      return val;
    }
  }
}
