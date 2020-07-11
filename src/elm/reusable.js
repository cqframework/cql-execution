/* eslint-disable
    constructor-super,
    no-constant-condition,
    no-this-before-super,
    no-unused-vars,
*/
// TODO: This file was created by bulk-decaffeinate.
// Fix any style issues and re-enable lint.
/*
 * decaffeinate suggestions:
 * DS001: Remove Babel/TypeScript constructor workaround
 * DS102: Remove unnecessary code created because of implicit returns
 * DS103: Rewrite code to no longer use __guard__
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
let ExpressionDef, ExpressionRef, FunctionDef, FunctionRef, IdentifierRef, OperandRef;
const { Expression } = require('./expression');
const { build } = require('./builder');

module.exports.ExpressionDef = (ExpressionDef = class ExpressionDef extends Expression {
  constructor(json) {
    super(...arguments);
    this.name = json.name;
    this.context = json.context;
    this.expression = build(json.expression);
  }
  exec(ctx) {
    const value = this.expression != null ? this.expression.execute(ctx) : undefined;
    ctx.rootContext().set(this.name,value);
    return value;
  }
});

module.exports.ExpressionRef = (ExpressionRef = class ExpressionRef extends Expression {
  constructor(json) {
    super(...arguments);
    this.name = json.name;
    this.library = json.libraryName;
  }
  exec(ctx) {
    ctx = this.library ? ctx.getLibraryContext(this.library) : ctx;
    let value = ctx.get(this.name);
    if (value instanceof Expression) {
      value = value.execute(ctx);
    }
    return value;
  }
});

module.exports.FunctionDef = (FunctionDef = class FunctionDef extends Expression {
  constructor(json) {
    super(...arguments);
    this.name = json.name;
    this.expression = build(json.expression);
    this.parameters = json.operand;
  }
  exec(ctx) {
    return this;
  }
});

module.exports.FunctionRef = (FunctionRef = class FunctionRef extends Expression {
  constructor(json) {
    super(...arguments);
    this.name = json.name;
    this.library = json.libraryName;
  }
  exec(ctx) {
    const functionDef = this.library ? __guard__(ctx.get(this.library), x => x.get(this.name)) : ctx.get(this.name);
    const args = this.execArgs(ctx);
    const child_ctx = this.library ? __guard__(ctx.getLibraryContext(this.library), x1 => x1.childContext()) : ctx.childContext();
    if (args.length !== functionDef.parameters.length) {
      throw new Error('incorrect number of arguments supplied');
    }
    for (let i = 0; i < functionDef.parameters.length; i++) {
      const p = functionDef.parameters[i];
      child_ctx.set(p.name,args[i]);
    }
    return functionDef.expression.execute(child_ctx);
  }
});

module.exports.OperandRef = (OperandRef = class OperandRef extends Expression {
  constructor(json) {
    {
      // Hack: trick Babel/TypeScript into allowing this before super.
      if (false) { super(); }
      let thisFn = (() => { return this; }).toString();
      let thisName = thisFn.match(/return (?:_assertThisInitialized\()*(\w+)\)*;/)[1];
      eval(`${thisName} = this;`);
    }
    this.name = json.name;
  }
  exec(ctx) {
    return ctx.get(this.name); 
  }
});

     
module.exports.IdentifierRef = (IdentifierRef = class IdentifierRef extends Expression {
  constructor(json) {
    super(...arguments);
    this.name = json.name;
    this.library = json.libraryName;
  }
  exec(ctx) {
    // TODO: Technically, the ELM Translator should never output one of these
    // but this code is needed since it does, as a work-around to get queries
    // to work properly when sorting by a field in a tuple
    let val = this.library ? __guard__(ctx.get(this.library), x => x.get(this.name)) : ctx.get(this.name);

    if ((val == null)) {
      const parts = this.name.split('.');
      val = ctx.get(part);
      if ((val != null) && (parts.length > 1)) {
        let curr_obj = val;
        const curr_val = null;
        for (var part of parts.slice(1)) {
          const _obj = (curr_obj != null ? curr_obj[part] : undefined) != null ? (curr_obj != null ? curr_obj[part] : undefined) : __guardMethod__(curr_obj, 'get', o => o.get(part));
          curr_obj = _obj instanceof Function ? _obj.call(curr_obj) : _obj;
        }
        val = curr_obj;
      }
    }
    if (val instanceof Function) { return val.call(ctx.context_values); } else { return val; }
  }
});

function __guard__(value, transform) {
  return (typeof value !== 'undefined' && value !== null) ? transform(value) : undefined;
}
function __guardMethod__(obj, methodName, transform) {
  if (typeof obj !== 'undefined' && obj !== null && typeof obj[methodName] === 'function') {
    return transform(obj, methodName);
  } else {
    return undefined;
  }
}