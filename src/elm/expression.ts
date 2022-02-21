import { Context } from '../runtime/context';
import { typeIsArray } from '../util/util';

import { build } from './builder';

export class Expression {
  localId?: string;
  arg?: any;
  args?: any[];

  constructor(json: any) {
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

  execute(ctx: Context) {
    if (this.localId != null) {
      // Store the localId and result on the root context of this library
      const execValue = this.exec(ctx);
      ctx.rootContext().setLocalIdWithResult(this.localId, execValue);
      return execValue;
    } else {
      return this.exec(ctx);
    }
  }

  exec(_ctx: Context): any {
    return this;
  }

  execArgs(ctx: Context) {
    if (this.args != null) {
      return this.args.map(arg => arg.execute(ctx));
    } else if (this.arg != null) {
      return this.arg.execute(ctx);
    } else {
      return null;
    }
  }
}

export class UnimplementedExpression extends Expression {
  json: any;

  constructor(json: any) {
    super(json);
    this.json = json;
  }

  exec(_ctx: Context) {
    throw new Error(`Unimplemented Expression: ${this.json.type}`);
  }
}
