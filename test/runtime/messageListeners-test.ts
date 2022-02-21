import { NullMessageListener, ConsoleMessageListener } from '../../src/runtime/messageListeners';
import { stdout, stderr, Inspector } from 'test-console';
import { EOL } from 'os';

describe('ConsoleMessageListener', () => {
  let stdoutInspect: Inspector, stderrInspect: Inspector;

  beforeEach(() => {
    stdoutInspect = stdout.inspect();
    stderrInspect = stderr.inspect();
  });

  afterEach(() => {
    stdoutInspect.restore();
    stderrInspect.restore();
  });

  it('should log an Error to stderr', () => {
    const listener = new ConsoleMessageListener();
    listener.onMessage('My Source', 'test', 'Error', 'Hello World!');
    stdoutInspect.output.should.have.length(0);
    stderrInspect.output.should.eql([`Error: [test] Hello World!${EOL}`]);
  });

  it('should log a Warning to stdout', () => {
    const listener = new ConsoleMessageListener();
    listener.onMessage('My Source', 'test', 'Warning', 'Hello World!');
    stdoutInspect.output.should.eql([`Warning: [test] Hello World!${EOL}`]);
    stderrInspect.output.should.have.length(0);
  });

  it('should log a Message to stdout', () => {
    const listener = new ConsoleMessageListener();
    listener.onMessage('My Source', 'test', 'Message', 'Hello World!');
    stdoutInspect.output.should.eql([`Message: [test] Hello World!${EOL}`]);
    stderrInspect.output.should.have.length(0);
  });

  it('should log a Trace to stdout w/no source output by default', () => {
    const listener = new ConsoleMessageListener();
    listener.onMessage('My Source', 'test', 'Trace', 'Hello World!');
    stdoutInspect.output.should.eql([`Trace: [test] Hello World!${EOL}`]);
    stderrInspect.output.should.have.length(0);
  });

  it('should log a Trace to stdout w/ source if enabled', () => {
    const listener = new ConsoleMessageListener(true);
    listener.onMessage('My Source', 'test', 'Trace', 'Hello World!');
    stdoutInspect.output.should.eql([
      `Trace: [test] Hello World!\n<<<<< SOURCE:\n"My Source"\n>>>>>${EOL}`
    ]);
    stderrInspect.output.should.have.length(0);
  });
});

describe('NullMessageListener', () => {
  let stdoutInspect: Inspector, stderrInspect: Inspector;

  beforeEach(() => {
    stdoutInspect = stdout.inspect();
    stderrInspect = stderr.inspect();
  });

  afterEach(() => {
    stdoutInspect.restore();
    stderrInspect.restore();
  });

  it('should not log an Error', () => {
    const listener = new NullMessageListener();
    listener.onMessage('My Source', 'test', 'Error', 'Hello World!');
    stdoutInspect.output.should.have.length(0);
    stderrInspect.output.should.have.length(0);
  });

  it('should not log a Warning', () => {
    const listener = new NullMessageListener();
    listener.onMessage('My Source', 'test', 'Warning', 'Hello World!');
    stdoutInspect.output.should.have.length(0);
    stderrInspect.output.should.have.length(0);
  });

  it('should not log a Message', () => {
    const listener = new NullMessageListener();
    listener.onMessage('My Source', 'test', 'Message', 'Hello World!');
    stdoutInspect.output.should.have.length(0);
    stderrInspect.output.should.have.length(0);
  });

  it('should not log a Trace', () => {
    const listener = new NullMessageListener();
    listener.onMessage('My Source', 'test', 'Trace', 'Hello World!');
    stdoutInspect.output.should.have.length(0);
    stderrInspect.output.should.have.length(0);
  });
});
