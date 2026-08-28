import { Logger } from 'tslog';

const logger = new Logger({
  stack: {
    capture: 'off'
  },
  pretty: {
    inspectOptions: { depth: null },
    template: '{{logLevelName}}\t'
  }
});

export default logger;
