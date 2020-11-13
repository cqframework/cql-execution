const { Expression } = require('./expression');
const { build } = require('./builder');

class ParameterDef extends Expression {
  constructor(json) {
    super(json);
    this.name = json.name;
    this.default = build(json.default);
    this.parameterTypeSpecifier = json.parameterTypeSpecifier;
  }

  exec(ctx) {
    // If context parameters contains the name, return value.
    if (ctx && ctx.parameters[this.name] !== undefined) {
      return ctx.parameters[this.name];
      // If the parent context contains the name, return that
    } else if (ctx.getParentParameter(this.name) !== undefined) {
      const parentParam = ctx.getParentParameter(this.name);
      return parentParam.default != null ? parentParam.default.execute(ctx) : parentParam;
      // If default type exists, execute the default type
    } else if (this.default != null) {
      return this.default != null ? this.default.execute(ctx) : undefined;
    }
  }
}

class ParameterRef extends Expression {
  constructor(json) {
    super(json);
    this.name = json.name;
    this.library = json.libraryName;
  }

  exec(ctx) {
    ctx = this.library ? ctx.getLibraryContext(this.library) : ctx;
    const param = ctx.getParameter(this.name);
    return param != null ? param.execute(ctx) : undefined;
  }
}

module.exports = { ParameterDef, ParameterRef };
