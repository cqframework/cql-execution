export class NullMessageListener {
  onMessage(_source: any, _code: string, _severity: string, _message: string) {
    // do nothing
  }
}

export class ConsoleMessageListener {
  constructor(public logSourceOnTrace = false) {}

  onMessage(source: any, code: string, severity: string, message: string) {
    // eslint-disable-next-line no-console
    const print = severity === 'Error' ? console.error : console.log;
    let content = `${severity}: [${code}] ${message}`;
    if (severity === 'Trace' && this.logSourceOnTrace) {
      content += `\n<<<<< SOURCE:\n${JSON.stringify(source)}\n>>>>>`;
    }
    print(content);
  }
}

export type MessageListener = NullMessageListener | ConsoleMessageListener;
