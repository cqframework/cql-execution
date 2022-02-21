import should from 'should';
import setup from '../../setup';
const data = require('./data');

describe('Message', () => {
  let messageCollector: any;
  beforeEach(function () {
    setup(this, data);
    messageCollector = new TestMessageCollector();
    this.executor.withMessageListener(messageCollector);
    this.ctx.messageListener = messageCollector;
  });

  it('should always return the first argument as-is', function () {
    this.oneOverTwo.exec(this.ctx).should.equal(0.5);
    should(this.oneOverZero.exec(this.ctx)).be.null();
  });

  it('should not log a message when the condition is false', function () {
    this.oneOverTwo.exec(this.ctx);
    messageCollector.messages.length.should.equal(0);
  });

  it('should log a message when the condition is true', function () {
    this.oneOverZero.exec(this.ctx);
    messageCollector.messages.length.should.equal(1);
    messageCollector.messages[0].should.equal('Error: [DivideByZero] Cannot divide by zero (null)');
  });
});

class TestMessageCollector {
  messages: any[];

  constructor() {
    this.messages = [];
  }

  onMessage(source: any, code: string, severity: string, message: string) {
    this.messages.push(`${severity}: [${code}] ${message} (${JSON.stringify(source)})`);
  }
}
