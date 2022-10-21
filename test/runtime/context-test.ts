import should from 'should';
import { Context, Library } from '../../src/cql';
const simpleELMWithVersion = require('./fixtures/SimpleLibraryWithVersion.json');

describe('Context', () => {
  describe('#childContext', () => {
    let library: Library;
    let context: Context;

    beforeEach(() => {
      library = new Library(simpleELMWithVersion);
      context = new Context(library);
    });

    it('should create a child context with values when an argument is passed in', () => {
      const child = context.childContext({ hello: 'world' });
      should(child.context_values).eql({ hello: 'world' });
    });

    it('should create a child context with empty values when no argument is passed in', () => {
      const child = context.childContext();
      should(child.context_values).eql({});
    });

    it('should create a child context with empty values when undefined argument is passed in', () => {
      const child = context.childContext(undefined);
      should(child.context_values).eql({});
    });

    // Tests solution for https://github.com/cqframework/cql-execution/issues/277
    it('should create a child context with empty values when null argument is passed in', () => {
      const child = context.childContext(null);
      should(child.context_values).eql({});
    });
  });
});
