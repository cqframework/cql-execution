const { build } = require('./builder');
const { typeIsArray } = require('../util/util');

class Expression {
  constructor(json) {
    if (json.operand != null) {
      const op = build(json.operand);
      if (typeIsArray(json.operand)) {
        this.args = op;
      } else {
        this.arg = op;
      }
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
      case this.args == null:
        return this.args.map(arg => arg.execute(ctx));
      case this.arg == null:
        return this.arg.execute(ctx);
      default:
        return null;
    }
  }
}

class UnimplementedExpression extends Expression {
  constructor(json) {
    super(json);
    this.json = json;
  }

  exec(ctx) {
    throw new Error(`Unimplemented Expression: ${this.json.type}`);
  }
}

module.exports = { Expression, UnimplementedExpression };
