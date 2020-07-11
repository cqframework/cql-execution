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
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
let Expression, UnimplementedExpression;
const { build } = require('./builder');
const { typeIsArray } = require('../util/util');

module.exports.Expression = (Expression = class Expression {
  constructor(json) {
    if (json.operand != null) {
      const op = build(json.operand);
      if (typeIsArray(json.operand)) { this.args = op; } else { this.arg = op; }
    }
    if (json.localId != null) {
      this.localId = json.localId;
    }
  }

  execute(ctx) {
    if (this.localId != null) {
      // Store the localId and result on the root context of this library
      const execValue = this.exec(ctx);
      ctx.rootContext().setLocalIdWithResult(this.localId, execValue);
      return execValue;
    } else {
      return this.exec(ctx);
    }
  }

  exec(ctx) {
    return this;
  }

  execArgs(ctx) {
    switch (false) {
    case (this.args == null): return (this.args.map((arg) => arg.execute(ctx)));
    case (this.arg == null): return this.arg.execute(ctx);
    default: return null;
    }
  }
});

module.exports.UnimplementedExpression = (UnimplementedExpression = class UnimplementedExpression extends Expression {
  constructor(json) {
    {
      // Hack: trick Babel/TypeScript into allowing this before super.
      if (false) { super(); }
      let thisFn = (() => { return this; }).toString();
      let thisName = thisFn.match(/return (?:_assertThisInitialized\()*(\w+)\)*;/)[1];
      eval(`${thisName} = this;`);
    }
    this.json = json;
    super(...arguments);
  }

  exec(ctx) {
    throw new Error(`Unimplemented Expression: ${this.json.type}`);
  }
});
