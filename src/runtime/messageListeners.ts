class NullMessageListener {
  onMessage(source, code, severity, message) {
    // do nothing
  }
}

class ConsoleMessageListener {
  constructor(logSourceOnTrace = false) {
    this.logSourceOnTrace = logSourceOnTrace;
  }

  onMessage(source, code, severity, message) {
    // eslint-disable-next-line no-console
    const print = severity === 'Error' ? console.error : console.log;
    let content = `${severity}: [${code}] ${message}`;
    if (severity === 'Trace' && this.logSourceOnTrace) {
      content += `\n<<<<< SOURCE:\n${JSON.stringify(source)}\n>>>>>`;
    }
    print(content);
  }
}

module.exports = { NullMessageListener, ConsoleMessageListener };
