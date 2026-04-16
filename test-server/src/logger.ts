import { Logger } from 'tslog';

const logger = new Logger({
  hideLogPositionForProduction: true,
  prettyInspectOptions: { depth: null },
  prettyLogTemplate: '{{logLevelName}}\t'
});

export default logger;
