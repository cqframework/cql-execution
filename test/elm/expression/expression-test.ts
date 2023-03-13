import { fail } from 'assert';
import should from 'should';
import { Expression } from '../../../src/cql';
import setup from '../../setup';
import { AnnotatedError } from '../../../src/util/customErrors';
const data = require('./data');

class FailingExpression extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec() {
    throw new Error('Execution Failed!');
  }
}

describe('Expression', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should throw annotated error with localId, libraryIdentifier, and class name on invalid elm in Patient context fully formatted during execution failure', function () {
    const testExpression = new FailingExpression({
      localId: 'test'
    });

    should(() => testExpression.execute(this.ctx)).throw(
      'Encountered unexpected error during execution.\n\n\tError Message:\tExecution Failed!\n\tCQL Library:\tTestSnippet|1\n\tExpression:\tFailingExpression\n\tELM Local ID:\ttest\n'
    );
  });

  it('should throw annotated error with localId, libraryIdentifier, and class name on invalid elm in child context during execution failure', function () {
    const testExpression = new FailingExpression({
      localId: 'test-nested'
    });

    try {
      testExpression.execute(this.ctx.childContext());
      fail('test should have thrown an error before reaching this statement');
    } catch (e: any) {
      should(e).be.instanceOf(AnnotatedError);
      should(e.message).containEql('Error Message:\tExecution Failed!');
      should(e.message).containEql('CQL Library:\tTestSnippet|1');
      should(e.message).containEql('Expression:\tFailingExpression');
      should(e.message).containEql('ELM Local ID:\ttest-nested');
    }
  });

  it('should throw annotated error with localId, libraryIdentifier, and class name on invalid elm in child context during execution failure', function () {
    const expressionNoLocalId = new FailingExpression({});

    try {
      expressionNoLocalId.execute(this.ctx.childContext());
      fail('test should have thrown an error before reaching this statement');
    } catch (e: any) {
      should(e).be.instanceOf(AnnotatedError);
      should(e.message).not.containEql('ELM Local ID:');
    }
  });

  it('should report "(unknown)" library for annotated error when parent of context is null', function () {
    const testExpression = new FailingExpression({
      localId: 'test'
    });

    try {
      const childCtx = this.ctx.childContext();
      childCtx.parent = null;
      testExpression.execute(childCtx);
      fail('test should have thrown an error before reaching this statement');
    } catch (e: any) {
      should(e).be.instanceOf(AnnotatedError);
      should(e.message).containEql('CQL Library:\t(unknown)');
    }
  });
});
