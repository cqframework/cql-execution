import { Expression } from './expression';
import { ThreeValuedLogic } from '../datatypes/datatypes';
import { Context } from '../runtime/context';

export class And extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
    return ThreeValuedLogic.and(...this.execArgs(ctx));
  }
}

export class Or extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
    return ThreeValuedLogic.or(...this.execArgs(ctx));
  }
}

export class Not extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
    return ThreeValuedLogic.not(this.execArgs(ctx));
  }
}

export class Xor extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
    return ThreeValuedLogic.xor(...this.execArgs(ctx));
  }
}

export class IsTrue extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
    return true === this.execArgs(ctx);
  }
}

export class IsFalse extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
    return false === this.execArgs(ctx);
  }
}
