import should from 'should';
import setup from '../../setup';
const data = require('./data');
import { Repository } from '../../../src/cql';

describe('Message', () => {
  let messageCollector: any;
  beforeEach(function () {
    setup(this, data);
    messageCollector = new TestMessageCollector();
    this.executor.withMessageListener(messageCollector);
    this.ctx.messageListener = messageCollector;
  });

  it('should always return the first argument as-is', async function () {
    (await this.oneOverTwo.exec(this.ctx)).should.equal(0.5);
    should(await this.oneOverZero.exec(this.ctx)).be.null();
  });

  it('should not log a message when the condition is false', async function () {
    await this.oneOverTwo.exec(this.ctx);
    messageCollector.messages.length.should.equal(0);
  });

  it('should log a message when the condition is true', async function () {
    await this.oneOverZero.exec(this.ctx);
    messageCollector.messages.length.should.equal(1);
    messageCollector.messages[0].should.equal('Error: [DivideByZero] Cannot divide by zero (null)');
  });
});

describe('Retrieve', () => {
  let messageCollector: any;
  beforeEach(function () {
    setup(this, data, [], {}, {}, new Repository(data));
    messageCollector = new TestMessageCollector();
    this.executor.withMessageListener(messageCollector);
    this.ctx.messageListener = messageCollector;
  });

  it('should always return the first argument as-is', async function () {
    (await this.oneOverTwo.exec(this.ctx)).should.equal(0.5);
    should(await this.oneOverZero.exec(this.ctx)).be.null();
  });

  it('should not log a message when the condition is false', async function () {
    await this.oneOverTwo.exec(this.ctx);
    messageCollector.messages.length.should.equal(0);
  });

  it('should log a message when the condition is true', async function () {
    await this.oneOverZero.exec(this.ctx);
    messageCollector.messages.length.should.equal(1);
    messageCollector.messages[0].should.equal('Error: [DivideByZero] Cannot divide by zero in included (null)');
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
