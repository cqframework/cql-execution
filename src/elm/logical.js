const { Expression } = require('./expression');
const { ThreeValuedLogic } = require('../datatypes/datatypes');

class And extends Expression {
  constructor(json) {
    super(json);
  }

  exec(ctx) {
    return ThreeValuedLogic.and(...this.execArgs(ctx));
  }
}

class Or extends Expression {
  constructor(json) {
    super(json);
  }

  exec(ctx) {
    return ThreeValuedLogic.or(...this.execArgs(ctx));
  }
}

class Not extends Expression {
  constructor(json) {
    super(json);
  }

  exec(ctx) {
    return ThreeValuedLogic.not(this.execArgs(ctx));
  }
}

class Xor extends Expression {
  constructor(json) {
    super(json);
  }

  exec(ctx) {
    return ThreeValuedLogic.xor(...this.execArgs(ctx));
  }
}

class IsTrue extends Expression {
  constructor(json) {
    super(json);
  }

  exec(ctx) {
    return true === this.execArgs(ctx);
  }
}

class IsFalse extends Expression {
  constructor(json) {
    super(json);
  }

  exec(ctx) {
    return false === this.execArgs(ctx);
  }
}

module.exports = { And, IsFalse, IsTrue, Not, Or, Xor };
