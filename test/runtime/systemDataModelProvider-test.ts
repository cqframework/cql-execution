import should from 'should';
import {
  Code,
  CodeSystem,
  CQLValueSet,
  Quantity,
  Ratio,
  ValueSet
} from '../../src/datatypes/datatypes';
import { ExpandValueSet, InValueSet } from '../../src/elm/clinical';
import { Library } from '../../src/elm/library';
import { Context } from '../../src/runtime/context';
import { SystemDataModelProvider } from '../../src/runtime/systemDataModelProvider';
import { ELM_CODESYSTEM_TYPE, ELM_VALUESET_TYPE, ELM_RATIO_TYPE } from '../../src/util/elmTypes';
const simpleELMWithVersion = require('./fixtures/SimpleLibraryWithVersion.json');

describe('SystemDataModelProvider', () => {
  const provider = new SystemDataModelProvider();

  it('should construct a CodeSystem with its metadata', () => {
    const system = provider.createInstance(ELM_CODESYSTEM_TYPE, {
      id: 'http://loinc.org',
      version: '1',
      name: 'LOINC'
    });
    should(system).be.instanceof(CodeSystem);
    should(system.id).equal('http://loinc.org');
    should(system.version).equal('1');
    should(system.name).equal('LOINC');
    should(system.isCodeSystem).be.true();
  });

  it('should construct a CQLValueSet and preserve its code systems', () => {
    const codesystems = [new CodeSystem('http://loinc.org')];
    const valueset = provider.createInstance(ELM_VALUESET_TYPE, {
      id: 'urn:test:valueset',
      version: '1',
      name: 'Test value set',
      codesystems
    });
    should(valueset).be.instanceof(CQLValueSet);
    should(valueset.id).equal('urn:test:valueset');
    should(valueset.version).equal('1');
    should(valueset.name).equal('Test value set');
    should(valueset.codesystems).equal(codesystems);
  });

  it('should allow omitted optional metadata for CodeSystem', () => {
    const instance = provider.createInstance(ELM_CODESYSTEM_TYPE, { id: 'urn:test' });
    should(instance.id).equal('urn:test');
    should(instance.version).be.undefined();
    should(instance.name).be.undefined();
  });

  it('should allow omitted optional metadata for ValueSet', () => {
    const instance = provider.createInstance(ELM_VALUESET_TYPE, { id: 'urn:test' });
    should(instance.id).equal('urn:test');
    should(instance.version).be.undefined();
    should(instance.name).be.undefined();
    should(instance.codesystems).be.undefined();
  });

  it('should construct a Ratio with working quantity operations', () => {
    const numerator = new Quantity(1, 'mg');
    const denominator = new Quantity(2, 'mL');
    const ratio = provider.createInstance(ELM_RATIO_TYPE, { numerator, denominator });
    should(ratio).be.instanceof(Ratio);
    should(ratio.numerator).equal(numerator);
    should(ratio.denominator).equal(denominator);
    should(ratio.equals(new Ratio(new Quantity(2, 'mg'), new Quantity(4, 'mL')))).be.true();
  });

  it('should reject ratios missing either quantity', () => {
    should(() => provider.createInstance(ELM_RATIO_TYPE, { denominator: new Quantity(1) })).throw(
      'Cannot create a ratio with an undefined numerator'
    );
    should(() => provider.createInstance(ELM_RATIO_TYPE, { numerator: new Quantity(1) })).throw(
      'Cannot create a ratio with an undefined denominator'
    );
  });

  it('should decline other namespaces and preserve unknown System types', () => {
    const fields = { id: 'test' };
    should(provider.createInstance('{urn:test}CodeSystem', fields)).be.null();
    should(provider.createInstance('{urn:hl7-org:elm-types:r1}Unknown', fields)).equal(fields);
  });

  it('should support terminology operations on constructed value sets', async () => {
    const code = new Code('12345', 'http://loinc.org');
    const expansion = new ValueSet('urn:test:valueset', '1', [code]);
    const context = new Context(new Library(simpleELMWithVersion));
    context.codeService = {
      findValueSetsByOid: () => [expansion],
      findValueSet: (id, version) => {
        should(id).equal('urn:test:valueset');
        should(version).equal('1');
        return expansion;
      }
    };
    context.set(
      'valueset',
      context.createInstance(ELM_VALUESET_TYPE, {
        id: 'urn:test:valueset',
        version: '1'
      })
    );
    context.set('code', code);
    const valuesetExpression = { type: 'ExpressionRef', name: 'valueset' };
    const contains = new InValueSet({
      code: { type: 'ExpressionRef', name: 'code' },
      valuesetExpression
    });
    should(await contains.exec(context)).be.true();
    should(await new ExpandValueSet({ operand: valuesetExpression }).exec(context)).eql([code]);
  });
});
