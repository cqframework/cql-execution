const { Expression } = require('./expression');
const { build } = require('./builder');

class Message extends Expression {
  constructor(json) {
    super(json);
    this.source = build(json.source);
    this.condition = build(json.condition);
    this.code = build(json.code);
    this.severity = build(json.severity);
    this.message = build(json.message);
  }

  exec(ctx) {
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

module.exports = { Message };
