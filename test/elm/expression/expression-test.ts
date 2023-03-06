import { Expression } from '../../../src/cql';
import should from 'should';
import setup from '../../setup';
const data = require('./data');

class FailingExpression extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec() {
    throw new Error('Execution Failed!');
  }
}

const testData1 = {
  localId: 'test'
};

const testData2 = {
  localId: 'test-nested'
};

describe('Expression', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('execute should throw error with localId, libraryIdentifier, and class name on invalid elm in Patient context', function () {
    const testExpression = new FailingExpression(testData1);

    should(() => testExpression.execute(this.ctx)).throw(
      'Expression FailingExpression from CQL Library: TestSnippet|1 with ELM local id: test caused the following error during execution: Execution Failed!'
    );
  });

  it('execute should throw error with localId, libraryIdentifier, and class name on invalid elm in child context', function () {
    const testExpression = new FailingExpression(testData2);
    should(() => testExpression.execute(this.ctx.childContext())).throw(
      'Expression FailingExpression from CQL Library: TestSnippet|1 with ELM local id: test-nested caused the following error during execution: Execution Failed!'
    );
  });
});
