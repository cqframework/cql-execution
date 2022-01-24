import { Expression } from './expression';
import { Uncertainty } from '../datatypes/datatypes';
import { Context } from '../runtime/context';

// Equal is completely handled by overloaded#Equal

// NotEqual is completely handled by overloaded#Equal

export class Less extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
    const args = this.execArgs(ctx).map((x: any) => Uncertainty.from(x));
    if (args[0] == null || args[1] == null) {
      return null;
    }
    return args[0].lessThan(args[1]);
  }
}

export class LessOrEqual extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
    const args = this.execArgs(ctx).map((x: any) => Uncertainty.from(x));
    if (args[0] == null || args[1] == null) {
      return null;
    }
    return args[0].lessThanOrEquals(args[1]);
  }
}

export class Greater extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
    const args = this.execArgs(ctx).map((x: any) => Uncertainty.from(x));
    if (args[0] == null || args[1] == null) {
      return null;
    }
    return args[0].greaterThan(args[1]);
  }
}

export class GreaterOrEqual extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
    const args = this.execArgs(ctx).map((x: any) => Uncertainty.from(x));
    if (args[0] == null || args[1] == null) {
      return null;
    }
    return args[0].greaterThanOrEquals(args[1]);
  }
}
