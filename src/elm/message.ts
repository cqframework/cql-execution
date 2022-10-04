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

  async exec(ctx: Context) {
    const source = await this.source.execute(ctx);
    const condition = await this.condition.execute(ctx);
    if (condition) {
      const code = await this.code.execute(ctx);
      const severity = await this.severity.execute(ctx);
      const message = await this.message.execute(ctx);
      const listener = ctx.getMessageListener();
      if (listener && typeof listener.onMessage === 'function') {
        listener.onMessage(source, code, severity, message);
      }
    }
    return source;
  }
}
