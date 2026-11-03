import should from 'should';
import { Context, Decimal, Library, Quantity } from '../../src/cql';
import { ELM_QUANTITY_TYPE } from '../../src/util/elmTypes';
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

    it('should inherit data model providers from its parent', () => {
      const provider = { createInstance: () => ({ fromProvider: true }) };
      const parent = new Context(library, undefined, undefined, undefined, undefined, [provider]);
      const child = parent.childContext();

      should(child.getDataModelProviders()).containEql(provider);
      should(child.createInstance('{urn:test}Record', {})).eql({ fromProvider: true });
    });
  });

  describe('#createInstance', () => {
    let library: Library;
    let context: Context;

    beforeEach(() => {
      library = new Library(simpleELMWithVersion);
      context = new Context(library);
    });
    it('should construct System types', () => {
      const quantity = context.createInstance(ELM_QUANTITY_TYPE, {
        value: Decimal.from(5),
        unit: 'mg'
      });

      should(quantity).be.instanceof(Quantity);
      should(quantity.value).equalDecimal(5);
      should(quantity.unit).equal('mg');
    });

    it('should keep instances as plain objects for unrecognized types', () => {
      const fields = { value: 'test', nested: { code: '123' }, missing: null as null };
      const instance = context.createInstance('{urn:test}Record', fields);

      should(instance).equal(fields);
      should(instance._is).be.a.Function();
    });
  });
});
