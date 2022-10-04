import { Context } from '../runtime/context';
import { Expression } from './expression';

export class Null extends Expression {
  constructor(json: any) {
    super(json);
  }

  async exec(_ctx: Context): Promise<any> {
    return null;
  }
}

export class IsNull extends Expression {
  constructor(json: any) {
    super(json);
  }

  async exec(ctx: Context) {
    return (await this.execArgs(ctx)) == null;
  }
}

export class Coalesce extends Expression {
  constructor(json: any) {
    super(json);
  }

  async exec(ctx: Context) {
    if (this.args) {
      for (const arg of this.args) {
        const result = await arg.execute(ctx);
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
