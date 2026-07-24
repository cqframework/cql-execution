import should from 'should';
import 'should-sinon';
import sinon from 'sinon';
import { Code, Interval, Repository, RetrieveDetails } from '../../../src/cql';
import setup from '../../setup';
import { ValueSet } from '../../../src/datatypes/clinical';
const data = require('./data');
const vsets = require('./valuesets');
const { p1 } = require('./patients');

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
