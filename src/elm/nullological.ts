import { Context } from '../runtime/context';
import { Expression } from './expression';

export class Null extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec(_ctx: Context): any {
    return null;
  }
}

export class IsNull extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
    return this.execArgs(ctx) == null;
  }
}

export class Coalesce extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
    if (this.args) {
      for (const arg of this.args) {
        const result = arg.execute(ctx);
        // if a single arg that's a list, coalesce over the list
        if (this.args.length === 1 && Array.isArray(result)) {
          const item = result.find(item => item != null);
          if (item != null) {
            return item;
          }
        } else {
          if (result != null) {
            return result;
          }
        }
      }
    }
    return null;
  }
}
