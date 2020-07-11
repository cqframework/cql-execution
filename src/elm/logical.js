/*
 * decaffeinate suggestions:
 * DS101: Remove unnecessary use of Array.from
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
let And, IsFalse, IsTrue, Not, Or, Xor;
const { Expression } = require('./expression');
const { ThreeValuedLogic } = require('../datatypes/datatypes');

module.exports.And = (And = class And extends Expression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    return ThreeValuedLogic.and(...Array.from(this.execArgs(ctx) || []));
  }
});

module.exports.Or = (Or = class Or extends Expression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    return ThreeValuedLogic.or(...Array.from(this.execArgs(ctx) || []));
  }
});

module.exports.Not = (Not = class Not extends Expression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    return ThreeValuedLogic.not(this.execArgs(ctx));
  }
});

module.exports.Xor = (Xor = class Xor extends Expression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    return ThreeValuedLogic.xor(...Array.from(this.execArgs(ctx) || []));
  }
});

module.exports.IsTrue = (IsTrue = class IsTrue extends Expression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    return true === this.execArgs(ctx);
  }
});

module.exports.IsFalse = (IsFalse = class IsFalse extends Expression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    return false === this.execArgs(ctx);
  }
});