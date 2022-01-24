import { Expression } from './expression';
import { ThreeValuedLogic } from '../datatypes/datatypes';
import { Context } from '../runtime/context';

class And extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
    return ThreeValuedLogic.and(...this.execArgs(ctx));
  }
}

class Or extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
    return ThreeValuedLogic.or(...this.execArgs(ctx));
  }
}

class Not extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
    return ThreeValuedLogic.not(this.execArgs(ctx));
  }
}

class Xor extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
    return ThreeValuedLogic.xor(...this.execArgs(ctx));
  }
}

class IsTrue extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
    return true === this.execArgs(ctx);
  }
}

class IsFalse extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
    return false === this.execArgs(ctx);
  }
}

export { And, IsFalse, IsTrue, Not, Or, Xor };
