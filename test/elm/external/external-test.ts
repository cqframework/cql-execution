import should from 'should';
import 'should-sinon';
import sinon from 'sinon';
import { Code, Interval, Repository, RetrieveDetails } from '../../../src/cql';
import setup from '../../setup';
import { CodeSystem, Concept, CQLValueSet, ValueSet } from '../../../src/datatypes/clinical';
import { Retrieve } from '../../../src/elm/external';
import { Expression } from '../../../src/elm/expression';
import { Context } from '../../../src/runtime/context';
const data = require('./data');
const vsets = require('./valuesets');
const { p1 } = require('./patients');

describe('CQL 2.0 Retrieve comparators', () => {
  const code = new Code('123', 'system', '1', 'Original');
  const changedDisplay = new Code('123', 'system', '2', 'Changed');
  const otherCode = new Code('other', 'system');

  // TODO: Replace these hand-built Retrieves with translator-generated ELM when the
  // translator emits ~in, contains, ~contains, and valueSetProperty for retrieves.
  function fixture(comparator: string, sourceCode: any, target: any, valueSetId?: string) {
    const retrieve = new Retrieve({
      dataType: 'Condition',
      codeProperty: 'code',
      codeComparator: comparator,
      ...(valueSetId !== undefined ? { valueSetProperty: 'valueSet' } : {})
    });
    retrieve.codes = new Expression({});
    sinon.stub(retrieve.codes, 'execute').resolves(target);
    const record = {
      get: (property: string) => (property === 'valueSet' ? valueSetId : undefined),
      getCode: () => sourceCode
    };
    const findValueSet = sinon
      .stub()
      .callsFake(async (id: string) =>
        id === 'vs' ? new ValueSet('vs', undefined, [code]) : null
      );
    const findRecords = sinon.stub().resolves([record]);
    const getValueSet = sinon.stub().returns(undefined);
    const ctx = {
      findRecords,
      getValueSet,
      codeService: { findValueSet },
      evaluatedRecords: []
    } as unknown as Context;
    return { retrieve, record, ctx, findValueSet, findRecords, getValueSet };
  }

  describe('codeProperty comparisons', () => {
    describe('=', () => {
      it('does not find a record when code version and display differ', async () => {
        const { retrieve, ctx } = fixture('=', [changedDisplay], [code]);
        should(await retrieve.exec(ctx)).be.empty();
      });

      it('finds a record when the code is identical', async () => {
        const { retrieve, ctx } = fixture('=', code, [code]);
        should(await retrieve.exec(ctx)).have.length(1);
      });

      it('does not find a record when the code differs', async () => {
        const { retrieve, ctx } = fixture('=', [otherCode], [code]);
        should(await retrieve.exec(ctx)).be.empty();
      });

      it('does not find a record when codeProperty is null', async () => {
        const { retrieve, ctx } = fixture('=', null, [code]);
        should(await retrieve.exec(ctx)).be.empty();
      });

      it('does not find a record when codeProperty is empty', async () => {
        const { retrieve, ctx } = fixture('=', [], [code]);
        should(await retrieve.exec(ctx)).be.empty();
      });
    });

    describe('~', () => {
      it('finds a record when code and system agree despite different version and display', async () => {
        const { retrieve, ctx } = fixture('~', [changedDisplay], [code]);
        should(await retrieve.exec(ctx)).have.length(1);
      });

      it('finds a record when the code is identical', async () => {
        const { retrieve, ctx } = fixture('~', code, [code]);
        should(await retrieve.exec(ctx)).have.length(1);
      });

      it('does not find a record when the code differs', async () => {
        const { retrieve, ctx } = fixture('~', [otherCode], [code]);
        should(await retrieve.exec(ctx)).be.empty();
      });

      it('does not find a record when codeProperty is null', async () => {
        const { retrieve, ctx } = fixture('~', null, [code]);
        should(await retrieve.exec(ctx)).be.empty();
      });

      it('does not find a record when codeProperty is empty', async () => {
        const { retrieve, ctx } = fixture('~', [], [code]);
        should(await retrieve.exec(ctx)).be.empty();
      });
    });

    describe('in', () => {
      it('does not find a record when code version and display differ', async () => {
        const { retrieve, ctx } = fixture('in', [changedDisplay], [code]);
        should(await retrieve.exec(ctx)).be.empty();
      });

      it('finds a record when the code is identical', async () => {
        const { retrieve, ctx } = fixture('in', code, [code]);
        should(await retrieve.exec(ctx)).have.length(1);
      });

      it('does not find a record when the code differs', async () => {
        const { retrieve, ctx } = fixture('in', [otherCode], [code]);
        should(await retrieve.exec(ctx)).be.empty();
      });

      it('does not find a record when codeProperty is null', async () => {
        const { retrieve, ctx } = fixture('in', null, [code]);
        should(await retrieve.exec(ctx)).be.empty();
      });

      it('does not find a record when codeProperty is empty', async () => {
        const { retrieve, ctx } = fixture('in', [], [code]);
        should(await retrieve.exec(ctx)).be.empty();
      });
    });

    describe('~in', () => {
      it('finds a record when code and system agree despite different version and display', async () => {
        const { retrieve, ctx } = fixture('~in', [changedDisplay], [code]);
        should(await retrieve.exec(ctx)).have.length(1);
      });

      it('finds a record when the code is identical', async () => {
        const { retrieve, ctx } = fixture('~in', code, [code]);
        should(await retrieve.exec(ctx)).have.length(1);
      });

      it('does not find a record when the code differs', async () => {
        const { retrieve, ctx } = fixture('~in', [otherCode], [code]);
        should(await retrieve.exec(ctx)).be.empty();
      });

      it('does not find a record when codeProperty is null', async () => {
        const { retrieve, ctx } = fixture('~in', null, [code]);
        should(await retrieve.exec(ctx)).be.empty();
      });

      it('does not find a record when codeProperty is empty', async () => {
        const { retrieve, ctx } = fixture('~in', [], [code]);
        should(await retrieve.exec(ctx)).be.empty();
      });
    });

    describe('contains', () => {
      it('does not find a record when code version and display differ', async () => {
        const { retrieve, ctx } = fixture('contains', [changedDisplay], [code]);
        should(await retrieve.exec(ctx)).be.empty();
      });

      it('finds a record when the code is identical', async () => {
        const { retrieve, ctx } = fixture('contains', code, [code]);
        should(await retrieve.exec(ctx)).have.length(1);
      });

      it('does not find a record when the code differs', async () => {
        const { retrieve, ctx } = fixture('contains', [otherCode], [code]);
        should(await retrieve.exec(ctx)).be.empty();
      });

      it('does not find a record when codeProperty is null', async () => {
        const { retrieve, ctx } = fixture('contains', null, [code]);
        should(await retrieve.exec(ctx)).be.empty();
      });

      it('does not find a record when codeProperty is empty', async () => {
        const { retrieve, ctx } = fixture('contains', [], [code]);
        should(await retrieve.exec(ctx)).be.empty();
      });
    });

    describe('~contains', () => {
      it('finds a record when code and system agree despite different version and display', async () => {
        const { retrieve, ctx } = fixture('~contains', [changedDisplay], [code]);
        should(await retrieve.exec(ctx)).have.length(1);
      });

      it('finds a record when the code is identical', async () => {
        const { retrieve, ctx } = fixture('~contains', code, [code]);
        should(await retrieve.exec(ctx)).have.length(1);
      });

      it('does not find a record when the code differs', async () => {
        const { retrieve, ctx } = fixture('~contains', [otherCode], [code]);
        should(await retrieve.exec(ctx)).be.empty();
      });

      it('does not find a record when codeProperty is null', async () => {
        const { retrieve, ctx } = fixture('~contains', null, [code]);
        should(await retrieve.exec(ctx)).be.empty();
      });

      it('does not find a record when codeProperty is empty', async () => {
        const { retrieve, ctx } = fixture('~contains', [], [code]);
        should(await retrieve.exec(ctx)).be.empty();
      });
    });

    it('in finds a record when its code is equivalent to a code in the requested ValueSet', async () => {
      const { retrieve, ctx, findValueSet } = fixture(
        'in',
        [changedDisplay],
        new CQLValueSet('vs')
      );
      should(await retrieve.exec(ctx)).have.length(1);
      sinon.assert.calledOnceWithExactly(findValueSet, 'vs', undefined);
    });

    it('in does not find a record when its code is outside the requested ValueSet', async () => {
      const { retrieve, ctx } = fixture('in', [otherCode], new CQLValueSet('vs'));
      should(await retrieve.exec(ctx)).be.empty();
    });

    it('in reports the existing CodeSystem membership limitation', async () => {
      const { retrieve, ctx } = fixture('in', [code], new CodeSystem('system'));
      await retrieve.exec(ctx).should.be.rejectedWith('In CodeSystem operation not yet supported.');
    });

    it('~in finds a record when its code is equivalent to a code in the requested ValueSet', async () => {
      const { retrieve, ctx, findValueSet } = fixture(
        '~in',
        [changedDisplay],
        new CQLValueSet('vs')
      );
      should(await retrieve.exec(ctx)).have.length(1);
      sinon.assert.calledOnceWithExactly(findValueSet, 'vs', undefined);
    });

    it('~in does not find a record when its code is outside the requested ValueSet', async () => {
      const { retrieve, ctx } = fixture('~in', [otherCode], new CQLValueSet('vs'));
      should(await retrieve.exec(ctx)).be.empty();
    });

    it('~in reports the existing CodeSystem membership limitation', async () => {
      const { retrieve, ctx } = fixture('~in', [code], new CodeSystem('system'));
      await retrieve.exec(ctx).should.be.rejectedWith('In CodeSystem operation not yet supported.');
    });

    it('does not query the provider or find records when Retrieve.codes is null', async () => {
      const { retrieve, ctx, findRecords } = fixture('~in', [code], null);
      should(await retrieve.exec(ctx)).be.empty();
      sinon.assert.notCalled(findRecords);
    });
  });

  describe('valueSetProperty fallback', () => {
    // TODO: Use a translator-generated Retrieve once primaryValueSetPath produces
    // valueSetProperty and ~contains can target a direct-reference code.
    it('~contains finds a record when the source ValueSet contains the requested Code', async () => {
      const { retrieve, ctx, findValueSet, findRecords } = fixture('~contains', null, code, 'vs');
      const result = await retrieve.exec(ctx);
      should(result).have.length(1);
      should(ctx.evaluatedRecords).deepEqual(result);
      should(findRecords.firstCall.lastArg.valueSetProperty).equal('valueSet');
      sinon.assert.calledOnceWithExactly(findValueSet, 'vs');
    });

    it('~contains finds a record when the source ValueSet contains a code from the requested Concept', async () => {
      const { retrieve, ctx, findValueSet, findRecords } = fixture(
        '~contains',
        null,
        new Concept([code]),
        'vs'
      );
      const result = await retrieve.exec(ctx);
      should(result).have.length(1);
      should(ctx.evaluatedRecords).deepEqual(result);
      should(findRecords.firstCall.lastArg.valueSetProperty).equal('valueSet');
      sinon.assert.calledOnceWithExactly(findValueSet, 'vs');
    });

    it('~contains finds a record when the source ValueSet contains a code from the requested list', async () => {
      const { retrieve, ctx, findValueSet, findRecords } = fixture('~contains', null, [code], 'vs');
      const result = await retrieve.exec(ctx);
      should(result).have.length(1);
      should(ctx.evaluatedRecords).deepEqual(result);
      should(findRecords.firstCall.lastArg.valueSetProperty).equal('valueSet');
      sinon.assert.calledOnceWithExactly(findValueSet, 'vs');
    });

    it('~contains finds a record when the source ValueSet contains an equivalent Code', async () => {
      const { retrieve, ctx } = fixture('~contains', null, changedDisplay, 'vs');
      should(await retrieve.exec(ctx)).have.length(1);
    });

    it('~contains does not find a record when the requested Code is outside the source ValueSet', async () => {
      const { retrieve, ctx } = fixture('~contains', null, otherCode, 'vs');
      should(await retrieve.exec(ctx)).be.empty();
    });

    it('does not find a record by source ValueSet when a nonmatching source code is present', async () => {
      const { retrieve, ctx, findValueSet } = fixture('~contains', [otherCode], code, 'vs');
      should(await retrieve.exec(ctx)).be.empty();
      sinon.assert.notCalled(findValueSet);
    });

    it('does not find a record when the source ValueSet identifier is missing', async () => {
      const { retrieve, ctx, findValueSet } = fixture('~contains', null, code, '');
      should(await retrieve.exec(ctx)).be.empty();
      sinon.assert.notCalled(findValueSet);
    });

    it('finds a record when source and requested ValueSet identifiers are the same for an in retrieve', async () => {
      const { retrieve, ctx, findRecords } = fixture('in', null, new CQLValueSet('vs'), 'vs');
      should(await retrieve.exec(ctx)).have.length(1);
      should(findRecords.firstCall.lastArg.valueSetProperty).equal('valueSet');
    });

    it('does not find a record when source and requested ValueSet identifiers differ for an in retrieve', async () => {
      const { retrieve, ctx } = fixture('in', null, new CQLValueSet('vs'), 'other-vs');
      should(await retrieve.exec(ctx)).be.empty();
    });

    it('preserves record order after asynchronous source ValueSet resolution', async () => {
      const { retrieve, record, ctx, findRecords, findValueSet } = fixture(
        '~contains',
        null,
        code,
        'vs'
      );
      const nonmatch = { get: () => 'other-vs', getCode: (): null => null };
      const last = { get: () => 'vs', getCode: (): null => null };
      findRecords.resolves([record, nonmatch, last]);
      findValueSet.callsFake(async (id: string) => {
        await new Promise(resolve => setTimeout(resolve, id === 'vs' ? 5 : 1));
        return new ValueSet(id, undefined, id === 'vs' ? [code] : [otherCode]);
      });
      const result = await retrieve.exec(ctx);
      should(result).deepEqual([record, last]);
      should(ctx.evaluatedRecords).deepEqual(result);
    });
  });
});

describe('Retrieve', () => {
  let findRecordsSpy: sinon.SinonSpy<any[], any>;
  beforeEach(function () {
    this.patientFixture = structuredClone(p1);
    setup(this, data, [this.patientFixture], vsets, {}, new Repository(data));
    findRecordsSpy = sinon.spy(this.ctx, 'findRecords');
  });

  it('should find conditions', async function () {
    const c = await this.conditions.exec(this.ctx);
    should(c).have.length(2);
    c[0].id.should.equal('http://cqframework.org/3/2');
    c[1].id.should.equal('http://cqframework.org/3/4');
    this.ctx.evaluatedRecords.should.have.length(2);
    this.ctx.evaluatedRecords.should.containDeep(c);
  });

  it('should find encounter performances', async function () {
    const e = await this.encounters.exec(this.ctx);
    should(e).have.length(3);
    e[0].id.should.equal('http://cqframework.org/3/1');
    e[1].id.should.equal('http://cqframework.org/3/3');
    e[2].id.should.equal('http://cqframework.org/3/5');
    this.ctx.evaluatedRecords.should.have.length(3);
    this.ctx.evaluatedRecords.should.containDeep(e);
  });

  it('should find observations with a value set from included library', async function () {
    const p = await this.pharyngitisConditions.exec(this.ctx);
    should(p).have.length(1);
    p[0].id.should.equal('http://cqframework.org/3/2');
    this.ctx.evaluatedRecords.should.have.length(1);
    this.ctx.evaluatedRecords.should.containDeep(p);
  });

  it('should find encounter performances with a value set', async function () {
    const a = await this.ambulatoryEncounters.exec(this.ctx);
    should(a).have.length(3);
    a[0].id.should.equal('http://cqframework.org/3/1');
    a[1].id.should.equal('http://cqframework.org/3/3');
    a[2].id.should.equal('http://cqframework.org/3/5');
    this.ctx.evaluatedRecords.should.have.length(3);
    this.ctx.evaluatedRecords.should.containDeep(a);
  });

  it('should find encounter performances by code', async function () {
    const e = await this.encountersByCode.exec(this.ctx);
    should(e).have.length(3);
    e[0].id.should.equal('http://cqframework.org/3/1');
    e[1].id.should.equal('http://cqframework.org/3/3');
    e[2].id.should.equal('http://cqframework.org/3/5');
    this.ctx.evaluatedRecords.should.have.length(3);
    this.ctx.evaluatedRecords.should.containDeep(e);
  });

  it('should not find conditions with wrong valueset', async function () {
    const e = await this.wrongValueSet.exec(this.ctx);
    should(e).be.empty();
    this.ctx.evaluatedRecords.should.be.empty();
  });

  it('should not find encounter performances using wrong codeProperty', async function () {
    const e = await this.wrongCodeProperty.exec(this.ctx);
    should(e).be.empty();
    this.ctx.evaluatedRecords.should.be.empty();
  });

  it('should find conditions by specific pharyngitis code', async function () {
    const e = await this.conditionsByCode.exec(this.ctx);
    should(e).have.length(1);
    e[0].id.should.equal('http://cqframework.org/3/2');
    this.ctx.evaluatedRecords.should.have.length(1);
    this.ctx.evaluatedRecords.should.containDeep(e);
  });

  it('should find conditions by specific pharyngitis concept', async function () {
    const e = await this.conditionsByConcept.exec(this.ctx);
    should(e).have.length(1);
    e[0].id.should.equal('http://cqframework.org/3/2');
    this.ctx.evaluatedRecords.should.have.length(1);
    this.ctx.evaluatedRecords.should.containDeep(e);
  });

  it('should find conditions by ValueSet using the default comparator', async function () {
    const e = await this.conditionsByVS.exec(this.ctx);
    should(e).have.length(1);
    e[0].id.should.equal('http://cqframework.org/3/2');
    this.ctx.evaluatedRecords.should.have.length(1);
    this.ctx.evaluatedRecords.should.containDeep(e);
  });

  it('should find conditions by code list using the default comparator', async function () {
    const e = await this.conditionsByCodeList.exec(this.ctx);
    should(e).have.length(1);
    e[0].id.should.equal('http://cqframework.org/3/2');
    this.ctx.evaluatedRecords.should.have.length(1);
    this.ctx.evaluatedRecords.should.containDeep(e);
  });

  it('should error on conditions by CodeSystem using the default comparator', async function () {
    const e = this.conditionsByCS.exec(this.ctx);
    e.should.be.rejectedWith(Error);
  });

  it('should error on conditions by CodeSystem using in', async function () {
    const e = this.conditionsByCodeInCS.exec(this.ctx);
    e.should.be.rejectedWith(Error);
  });

  it('should error on conditions by CodeSystem using equality', async function () {
    const e = this.conditionsByCodeEqualsCS.exec(this.ctx);
    e.should.be.rejectedWith(Error);
  });

  it('should error on conditions by CodeSystem using equivalence', async function () {
    const e = this.conditionsByCodeEquivCS.exec(this.ctx);
    e.should.be.rejectedWith(Error);
  });

  it('should find conditions by ValueSet using in', async function () {
    const e = await this.conditionsByCodeInVS.exec(this.ctx);
    should(e).have.length(1);
    e[0].id.should.equal('http://cqframework.org/3/2');
    this.ctx.evaluatedRecords.should.have.length(1);
    this.ctx.evaluatedRecords.should.containDeep(e);
  });

  it('should find conditions by ValueSet using equivalence', async function () {
    const e = await this.conditionsByCodeEquivVS.exec(this.ctx);
    should(e).have.length(1);
    e[0].id.should.equal('http://cqframework.org/3/2');
    this.ctx.evaluatedRecords.should.have.length(1);
    this.ctx.evaluatedRecords.should.containDeep(e);
  });

  it('should find conditions by code using in', async function () {
    const e = await this.conditionsByCodeInCode.exec(this.ctx);
    should(e).have.length(1);
    e[0].id.should.equal('http://cqframework.org/3/2');
    this.ctx.evaluatedRecords.should.have.length(1);
    this.ctx.evaluatedRecords.should.containDeep(e);
  });

  it('should find conditions by code list using in', async function () {
    const e = await this.conditionsByCodeInCodeList.exec(this.ctx);
    should(e).have.length(1);
    e[0].id.should.equal('http://cqframework.org/3/2');
    this.ctx.evaluatedRecords.should.have.length(1);
    this.ctx.evaluatedRecords.should.containDeep(e);
  });

  it('should find conditions by code list using equality', async function () {
    const e = await this.conditionsByCodeEqualsCodeList.exec(this.ctx);
    should(e).have.length(1);
    e[0].id.should.equal('http://cqframework.org/3/2');
    this.ctx.evaluatedRecords.should.have.length(1);
    this.ctx.evaluatedRecords.should.containDeep(e);
  });

  it('should find conditions by code list using equivalence', async function () {
    const e = await this.conditionsByCodeEquivCodeList.exec(this.ctx);
    should(e).have.length(1);
    e[0].id.should.equal('http://cqframework.org/3/2');
    this.ctx.evaluatedRecords.should.have.length(1);
    this.ctx.evaluatedRecords.should.containDeep(e);
  });

  it('should find conditions by specific pharyngitis code by equality when code matches exactly', async function () {
    const e = await this.conditionsByCodeEqualsCode.exec(this.ctx);
    should(e).have.length(1);
    e[0].id.should.equal('http://cqframework.org/3/2');
    this.ctx.evaluatedRecords.should.have.length(1);
    this.ctx.evaluatedRecords.should.containDeep(e);
  });

  it('should find conditions by specific pharyngitis concept by equality when code matches exactly', async function () {
    const e = await this.conditionsByCodeEqualsConcept.exec(this.ctx);
    should(e).have.length(1);
    e[0].id.should.equal('http://cqframework.org/3/2');
    this.ctx.evaluatedRecords.should.have.length(1);
    this.ctx.evaluatedRecords.should.containDeep(e);
  });

  it('should NOT find conditions by specific pharyngitis code by equality when code does not match exactly', async function () {
    this.patientFixture['records'][1]['code']['display'] = 'Viral pharyngitis'; // original is 'Viral pharyngitis (disorder)'
    const e = await this.conditionsByCodeEqualsCode.exec(this.ctx);
    should(e).have.length(0);
    this.ctx.evaluatedRecords.should.have.length(0);
  });

  it('should NOT find conditions by specific pharyngitis concept by equality when code does not match exactly', async function () {
    this.patientFixture['records'][1]['code']['display'] = 'Viral pharyngitis'; // original is 'Viral pharyngitis (disorder)'
    const e = await this.conditionsByCodeEqualsConcept.exec(this.ctx);
    should(e).have.length(0);
    this.ctx.evaluatedRecords.should.have.length(0);
  });

  it('should find conditions by specific pharyngitis code by equivalence when code matches exactly', async function () {
    const e = await this.conditionsByCodeEquivCode.exec(this.ctx);
    should(e).have.length(1);
    e[0].id.should.equal('http://cqframework.org/3/2');
    this.ctx.evaluatedRecords.should.have.length(1);
    this.ctx.evaluatedRecords.should.containDeep(e);
  });

  it('should find conditions by specific pharyngitis code by equivalence when code does not match exactly', async function () {
    this.patientFixture['records'][1]['code']['display'] = 'Viral pharyngitis'; // original is 'Viral pharyngitis (disorder)'
    const e = await this.conditionsByCodeEquivCode.exec(this.ctx);
    should(e).have.length(1);
    e[0].id.should.equal('http://cqframework.org/3/2');
    this.ctx.evaluatedRecords.should.have.length(1);
    this.ctx.evaluatedRecords.should.containDeep(e);
  });

  it('should find conditions by specific pharyngitis concept by equivalence when code matches exactly', async function () {
    const e = await this.conditionsByCodeEquivConcept.exec(this.ctx);
    should(e).have.length(1);
    e[0].id.should.equal('http://cqframework.org/3/2');
    this.ctx.evaluatedRecords.should.have.length(1);
    this.ctx.evaluatedRecords.should.containDeep(e);
  });

  it('should find conditions by specific pharyngitis concept by equivalence when code does not match exactly', async function () {
    this.patientFixture['records'][1]['code']['display'] = 'Viral pharyngitis'; // original is 'Viral pharyngitis (disorder)'
    const e = await this.conditionsByCodeEquivConcept.exec(this.ctx);
    should(e).have.length(1);
    e[0].id.should.equal('http://cqframework.org/3/2');
    this.ctx.evaluatedRecords.should.have.length(1);
    this.ctx.evaluatedRecords.should.containDeep(e);
  });

  it('should find conditions by code in concept', async function () {
    const e = await this.conditionsByCodeInConcept.exec(this.ctx);
    should(e).have.length(1);
    e[0].id.should.equal('http://cqframework.org/3/2');
    this.ctx.evaluatedRecords.should.have.length(1);
    this.ctx.evaluatedRecords.should.containDeep(e);
  });

  it('should find conditions by code = ValueSet', async function () {
    const e = await this.conditionsByCodeEqualsVS.exec(this.ctx);
    should(e).have.length(1);
    e[0].id.should.equal('http://cqframework.org/3/2');
    this.ctx.evaluatedRecords.should.have.length(1);
    this.ctx.evaluatedRecords.should.containDeep(e);
  });

  it('should find conditions by bodySite in ValueSet', async function () {
    const e = await this.conditionsByBodySiteInVS.exec(this.ctx);
    should(e).have.length(1);
    e[0].id.should.equal('http://cqframework.org/3/2');
    this.ctx.evaluatedRecords.should.have.length(1);
    this.ctx.evaluatedRecords.should.containDeep(e);
  });

  it('should find conditions by bodySite = ValueSet', async function () {
    const e = await this.conditionsByBodySiteEqualsVS.exec(this.ctx);
    should(e).have.length(1);
    e[0].id.should.equal('http://cqframework.org/3/2');
    this.ctx.evaluatedRecords.should.have.length(1);
    this.ctx.evaluatedRecords.should.containDeep(e);
  });

  it('should find conditions by bodySite ~ ValueSet', async function () {
    const e = await this.conditionsByBodySiteEquivVS.exec(this.ctx);
    should(e).have.length(1);
    e[0].id.should.equal('http://cqframework.org/3/2');
    this.ctx.evaluatedRecords.should.have.length(1);
    this.ctx.evaluatedRecords.should.containDeep(e);
  });

  it('should find conditions by bodySite in code', async function () {
    const e = await this.conditionsByBodySiteInCode.exec(this.ctx);
    should(e).have.length(1);
    e[0].id.should.equal('http://cqframework.org/3/2');
    this.ctx.evaluatedRecords.should.have.length(1);
    this.ctx.evaluatedRecords.should.containDeep(e);
  });

  it('should find conditions by bodySite = code', async function () {
    const e = await this.conditionsByBodySiteEqualsCode.exec(this.ctx);
    should(e).have.length(1);
    e[0].id.should.equal('http://cqframework.org/3/2');
    this.ctx.evaluatedRecords.should.have.length(1);
    this.ctx.evaluatedRecords.should.containDeep(e);
  });

  it('should find conditions by bodySite ~ code', async function () {
    const e = await this.conditionsByBodySiteEquivCode.exec(this.ctx);
    should(e).have.length(1);
    e[0].id.should.equal('http://cqframework.org/3/2');
    this.ctx.evaluatedRecords.should.have.length(1);
    this.ctx.evaluatedRecords.should.containDeep(e);
  });

  it('should pass datatype to findRecords call for simple retrieve', async function () {
    await this.conditions.exec(this.ctx);

    const expectedRetrieveDetail: RetrieveDetails = {
      datatype: '{https://github.com/cqframework/cql-execution/simple}Condition'
    };

    findRecordsSpy.should.be.calledWithExactly(this.conditions.datatype, expectedRetrieveDetail);
  });

  it('should pass codeProperty to findRecords when defined', async function () {
    await this.pharyngitisConditions.exec(this.ctx);

    const expectedRetrieveDetail: RetrieveDetails = {
      datatype: '{https://github.com/cqframework/cql-execution/simple}Condition',
      codeProperty: 'code'
    };

    findRecordsSpy.should.be.calledOnce();

    const retrieveDetails = findRecordsSpy.getCall(0).lastArg;

    retrieveDetails.should.containDeep(expectedRetrieveDetail);
  });

  it('should pass resolved codes to findRecords from valueSet', async function () {
    await this.pharyngitisConditions.exec(this.ctx);

    findRecordsSpy.should.be.calledOnce();

    const retrieveDetails = findRecordsSpy.getCall(0).lastArg;

    should(retrieveDetails.codes).not.be.undefined();

    retrieveDetails.codes.should.be.instanceOf(ValueSet);

    const vs = retrieveDetails.codes;
    should(vs.codes).not.be.undefined();
    vs.codes.should.be.an.Array();
    vs.codes.forEach((c: unknown) => {
      c.should.be.instanceOf(Code);
    });
  });

  it('should pass resolved codes to findRecords from direct reference code', async function () {
    await this.conditionsByCode.exec(this.ctx);

    findRecordsSpy.should.be.calledOnce();

    const retrieveDetails = findRecordsSpy.getCall(0).lastArg;

    should(retrieveDetails.codes).not.be.undefined();
    retrieveDetails.codes.should.be.an.Array();
    retrieveDetails.codes.forEach((c: unknown) => {
      c.should.be.instanceOf(Code);
    });
  });

  it('should pass dateProperty and resolved dateRange to findRecords', async function () {
    await this.conditionsByDate.exec(this.ctx);

    findRecordsSpy.should.be.calledOnce();

    const retrieveDetails = findRecordsSpy.getCall(0).lastArg;

    should(retrieveDetails.dateProperty).equal('period');
    should(retrieveDetails.dateRange).not.be.undefined();
    retrieveDetails.dateRange.should.be.instanceOf(Interval);
  });
});
