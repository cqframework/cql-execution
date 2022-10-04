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

  async exec() {
    throw new Error('Execution Failed!');
  }
}

describe('Expression', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should throw annotated error with localId, locator, libraryIdentifier, and class name on invalid elm in Patient context fully formatted during execution failure', async function () {
    const testExpression = new FailingExpression({
      localId: 'test',
      locator: '7:19-19:96'
    });

    return testExpression
      .execute(this.ctx)
      .should.be.rejectedWith(
        'Encountered unexpected error during execution.\n\n\tError Message:\tExecution Failed!\n\tCQL Library:\tTestSnippet|1\n\tExpression:\tFailingExpression\n\tELM Local ID:\ttest\n\tCQL Locator:\t7:19-19:96\n'
      );
  });

  it('should include publicly accessible properties on annotated error when defined', async function () {
    const testExpression = new FailingExpression({
      localId: 'test',
      locator: '7:19-19:96'
    });

    try {
      await testExpression.execute(this.ctx.childContext());
      fail('test should have thrown an error before reaching this statement');
    } catch (e: any) {
      should(e).be.instanceOf(AnnotatedError);

      const err = e as AnnotatedError;
      err.libraryName.should.equal('TestSnippet|1');
      err.expressionName.should.equal('FailingExpression');
      should(err.locator).equal('7:19-19:96');
      should(err.localId).equal('test');
    }
  });

  it('should throw annotated error with localId, libraryIdentifier, and class name on invalid elm in child context during execution failure', async function () {
    const testExpression = new FailingExpression({
      localId: 'test-nested'
    });

    try {
      await testExpression.execute(this.ctx.childContext());
      fail('test should have thrown an error before reaching this statement');
    } catch (e: any) {
      should(e).be.instanceOf(AnnotatedError);
      should(e.message).containEql('Error Message:\tExecution Failed!');
      should(e.message).containEql('CQL Library:\tTestSnippet|1');
      should(e.message).containEql('Expression:\tFailingExpression');
      should(e.message).containEql('ELM Local ID:\ttest-nested');
    }
  });

  it('should report "(unknown)" library for annotated error when parent of context is null', async function () {
    const testExpression = new FailingExpression({
      localId: 'test'
    });

    try {
      const childCtx = this.ctx.childContext();
      childCtx.parent = null;
      await testExpression.execute(childCtx);
      fail('test should have thrown an error before reaching this statement');
    } catch (e: any) {
      should(e).be.instanceOf(AnnotatedError);
      should(e.message).containEql('CQL Library:\t(unknown)');
    }
  });

  it('should omit localId for annotated error when undefined on expression', async function () {
    const expressionNoLocalId = new FailingExpression({});

    try {
      await expressionNoLocalId.execute(this.ctx.childContext());
      fail('test should have thrown an error before reaching this statement');
    } catch (e: any) {
      should(e).be.instanceOf(AnnotatedError);
      should(e.message).not.containEql('ELM Local ID:');
    }
  });

  it('should omit locator for annotated error when undefined on expression', async function () {
    const testExpression = new FailingExpression({});

    try {
      await testExpression.execute(this.ctx);
      fail('test should have thrown an error before reaching this statement');
    } catch (e: any) {
      should(e).be.instanceOf(AnnotatedError);
      should(e.message).not.containEql('CQL Locator:');
    }
  });
});
