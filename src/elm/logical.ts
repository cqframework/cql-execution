import { Expression } from './expression';
import { ThreeValuedLogic } from '../datatypes/datatypes';
import { Context } from '../runtime/context';

export class And extends Expression {
  constructor(json: any) {
    super(json);
  }

  async exec(ctx: Context) {
    return ThreeValuedLogic.and(...(await this.execArgs(ctx)));
  }
}

export class Implies extends Expression {
  constructor(json: any) {
    super(json);
  }

  async exec(ctx: Context) {
    const [left, right] = await this.execArgs(ctx);
    return ThreeValuedLogic.implies(left, right);
  }
}

export class Or extends Expression {
  constructor(json: any) {
    super(json);
  }

  async exec(ctx: Context) {
    return ThreeValuedLogic.or(...(await this.execArgs(ctx)));
  }
}

export class Not extends Expression {
  constructor(json: any) {
    super(json);
  }

  async exec(ctx: Context) {
    return ThreeValuedLogic.not(await this.execArgs(ctx));
  }
}

export class Xor extends Expression {
  constructor(json: any) {
    super(json);
  }

  async exec(ctx: Context) {
    return ThreeValuedLogic.xor(...(await this.execArgs(ctx)));
  }
}

export class IsTrue extends Expression {
  constructor(json: any) {
    super(json);
  }

  async exec(ctx: Context) {
    return true === (await this.execArgs(ctx));
  }
}

export class IsFalse extends Expression {
  constructor(json: any) {
    super(json);
  }

  async exec(ctx: Context) {
    return false === (await this.execArgs(ctx));
  }
}
