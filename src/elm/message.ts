import { Context } from '../runtime/context';
import { Expression } from './expression';
import { build } from './builder';

export class Message extends Expression {
  source: any;
  condition: any;
  code: any;
  severity: any;
  message: any;

  constructor(json: any) {
    super(json);
    this.source = build(json.source);
    this.condition = build(json.condition);
    this.code = build(json.code);
    this.severity = build(json.severity);
    this.message = build(json.message);
  }

  exec(ctx: Context) {
    const source = this.source.execute(ctx);
    const condition = this.condition.execute(ctx);
    if (condition) {
      const code = this.code.execute(ctx);
      const severity = this.severity.execute(ctx);
      const message = this.message.execute(ctx);
      const listener = ctx.getMessageListener();
      if (listener && typeof listener.onMessage === 'function') {
        listener.onMessage(source, code, severity, message);
      }
    }
    return source;
  }
}
