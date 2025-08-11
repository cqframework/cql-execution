import should from 'should';
import setup from '../../setup';
const data = require('./data');
const dataWithNamespace = require('./data-with-namespace');
import { equivalent } from '../../../src/util/comparison';
import { Repository, Code } from '../../../src/cql';

const { p1, p2 } = require('./patients');

describe('In Age Demographic', () => {
  beforeEach(async function () {
    setup(this, data, [p1, p2]);
    this.results = await this.executor
      .withLibrary(this.lib)
      .exec_patient_context(this.patientSource);
  });

  it('should have correct patient results', function () {
    this.results.patientResults['1'].InDemographic.should.equal(false);
    this.results.patientResults['2'].InDemographic.should.equal(true);
  });

  it('should have empty unfiltered results', function () {
    this.results.unfilteredResults.should.be.empty();
  });
});

describe('Using CommonLib', () => {
  beforeEach(function () {
    setup(this, data, [p1, p2], {}, {}, new Repository(data));
  });

  it('should have using models defined', function () {
    this.lib.usings.should.not.be.empty();
    this.lib.usings.length.should.equal(1);
    this.lib.usings[0].name.should.equal('Simple');
  });

  it('Should have included a library', function () {
    this.lib.includes.should.not.be.empty();
  });

  it('should be able to execute expression from included library', async function () {
    this.results = await this.executor
      .withLibrary(this.lib)
      .exec_patient_context(this.patientSource);
    this.results.patientResults['1'].ID.should.equal(false);
    this.results.patientResults['2'].ID.should.equal(true);
    this.results.patientResults['2'].FuncTest.should.equal(7);
    this.results.patientResults['1'].FuncTest.should.equal(7);
  });

  it('should find the code defined in the included library', async function () {
    should.exist(await this.supportLibCode.exec(this.ctx));
    equivalent(
      await this.supportLibCode.exec(this.ctx),
      new Code('428371000124100', '2.16.840.1.113883.6.96', 'foo', 'directReferenceCode')
    ).should.be.true();
  });

  it('should find the code system defined in the included library', async function () {
    const snomed = await this.supportLibCodeSystem.exec(this.ctx);
    should.exist(snomed);
    snomed.id.should.equal('2.16.840.1.113883.6.96');
  });

  it('should differentiate between code systems with the same name', async function () {
    const favorites = await this.supportClashingCodeSystemNames.exec(this.ctx);
    favorites.MyFavorite.id.should.equal('2.4.6.8.10');
    favorites.MyLibsFavorite.id.should.equal('1.3.5.7.9');
  });

  it('should find the value set defined in the included library', async function () {
    const pharyngitis = await this.supportLibValueSet.exec(this.ctx);
    should.exist(pharyngitis);
    pharyngitis.oid.should.equal('2.16.840.1.113883.3.464.1003.101.12.1001');
  });

  it('should differentiate between value sets with the same name', async function () {
    const favorites = await this.supportClashingValueSetNames.exec(this.ctx);
    favorites.MyFavorite.oid.should.equal('10.8.6.4.2');
    favorites.MyLibsFavorite.oid.should.equal('9.7.5.3.1');
  });
});

describe('Using CommonLib2', () => {
  beforeEach(function () {
    setup(this, data, [], {}, { AnotherNumber: 50 }, new Repository(data));
  });

  it('should execute expression from included library that uses parameter', async function () {
    (await this.exprUsesParam.exec(this.ctx)).should.equal(17);
  });

  it('should execute expression from included library that uses sent-in parameter', async function () {
    (await this.exprUsesParam.exec(this.ctx.withParameters({ SomeNumber: 42 }))).should.equal(42);
  });

  it('should execute parameter from included library', async function () {
    (await this.exprUsesParamDirectly.exec(this.ctx)).should.equal(17);
  });

  it('should execute sent-in parameter from included library', async function () {
    (
      await this.exprUsesParamDirectly.exec(this.ctx.withParameters({ SomeNumber: 73 }))
    ).should.equal(73);
  });

  it('should execute expression from included library that uses parameter', async function () {
    (await this.exprUsesAnotherParam.exec(this.ctx)).should.equal(50);
  });

  it('should execute expression from included library that uses sent-in parameter', async function () {
    (
      await this.exprUsesAnotherParam.exec(this.ctx.withParameters({ AnotherNumber: 66 }))
    ).should.equal(66);
  });

  it('should execute parameter from included library', async function () {
    (await this.exprUsesAnotherParamDirectly.exec(this.ctx)).should.equal(50);
  });

  it('should execute sent-in parameter from included library', async function () {
    (
      await this.exprUsesAnotherParamDirectly.exec(this.ctx.withParameters({ AnotherNumber: 73 }))
    ).should.equal(73);
  });

  it('should execute function from included library that uses parameter', async function () {
    (await this.funcUsesParam.exec(this.ctx)).should.equal(22);
  });

  it('should execute expression from included library that calls function', async function () {
    (await this.exprCallsFunc.exec(this.ctx)).should.equal(6);
  });

  it('should execute function from included library that calls function', async function () {
    (await this.funcCallsFunc.exec(this.ctx)).should.equal(25);
  });

  it('should execute expression from included library that uses expression', async function () {
    (await this.exprUsesExpr.exec(this.ctx)).should.equal(3);
  });

  it('should execute function from included library that uses expression', async function () {
    (await this.funcUsesExpr.exec(this.ctx)).should.equal(7);
  });

  it('should execute function from included library that uses expression', async function () {
    (await this.exprSortsOnFunc.exec(this.ctx)).should.eql([
      { N: 1 },
      { N: 2 },
      { N: 3 },
      { N: 4 },
      { N: 5 }
    ]);
  });
});

describe('Using CommonLib and CommonLib2', () => {
  beforeEach(async function () {
    setup(this, data, [p1], {}, {}, new Repository(data));
    this.results = await this.executor
      .withLibrary(this.lib)
      .exec_patient_context(this.patientSource);
    this.commonLocalIdObject = this.results.localIdPatientResultsMap['1'].Common;
    this.common2LocalIdObject = this.results.localIdPatientResultsMap['1'].Common2;
  });

  it('should have name and version defined since CQL used library identifier', function () {
    this.lib.name.should.equal('UsingTwoLibs');
    this.lib.version.should.equal('0.0.1');
  });

  it('should contain TheParameter localId in the localIdMap', function () {
    const theParameterLocalId = this.lib.includes.common2.expressions.TheParameter.localId;
    should.exist(this.common2LocalIdObject[theParameterLocalId]);
  });

  it('should contain TwoPlusOne localId in the localIdMap', function () {
    const twoPlusOneLocalId = this.lib.includes.common2.expressions.TwoPlusOne.localId;
    should.exist(this.common2LocalIdObject[twoPlusOneLocalId]);
  });

  it('should contain TwoTimesThree localId in the localIdMap', function () {
    const twoTimesThreeLocalId = this.lib.includes.common2.expressions.TwoTimesThree.localId;
    should.exist(this.common2LocalIdObject[twoTimesThreeLocalId]);
  });

  it('should contain SupportLibDef localId in the localIdMap', function () {
    const supportLibDefLocalId = this.lib.includes.common.expressions.SupportLibDef.localId;
    should.exist(this.commonLocalIdObject[supportLibDefLocalId]);
  });

  it('should contain SortUsingFunction localId in the localIdMap', function () {
    const sortUsingFunctionLocalId = this.lib.includes.common2.expressions.SortUsingFunction
      .localId;
    should.exist(this.common2LocalIdObject[sortUsingFunctionLocalId]);
  });
});

// NOTE: These all use the manually maintained fixture, see
//       https://github.com/cqframework/cql-execution/pull/251
describe('Using CommonLib and CommonLib2 with namespace support', () => {
  beforeEach(async function () {
    setup(this, dataWithNamespace, [p1], {}, {}, new Repository(dataWithNamespace));
    this.results = await this.executor
      .withLibrary(this.lib)
      .exec_patient_context(this.patientSource);
    this.commonLocalIdObject = this.results.localIdPatientResultsMap['1'].Common;
    this.common2LocalIdObject = this.results.localIdPatientResultsMap['1'].Common2;
  });

  it('should contain TheParameter localId in the localIdMap with namespace support', function () {
    const theParameterLocalId = this.lib.includes.common2.expressions.TheParameter.localId;
    should.exist(this.common2LocalIdObject[theParameterLocalId]);
  });

  it('should contain TwoPlusOne localId in the localIdMap with namespace support', function () {
    const twoPlusOneLocalId = this.lib.includes.common2.expressions.TwoPlusOne.localId;
    should.exist(this.common2LocalIdObject[twoPlusOneLocalId]);
  });

  it('should contain TwoTimesThree localId in the localIdMap with namespace support', function () {
    const twoTimesThreeLocalId = this.lib.includes.common2.expressions.TwoTimesThree.localId;
    should.exist(this.common2LocalIdObject[twoTimesThreeLocalId]);
  });

  it('should contain SupportLibDef localId in the localIdMap with namespace support', function () {
    const supportLibDefLocalId = this.lib.includes.common.expressions.SupportLibDef.localId;
    should.exist(this.commonLocalIdObject[supportLibDefLocalId]);
  });

  it('should contain SortUsingFunction localId in the localIdMap with namespace support', function () {
    const sortUsingFunctionLocalId = this.lib.includes.common2.expressions.SortUsingFunction
      .localId;
    should.exist(this.common2LocalIdObject[sortUsingFunctionLocalId]);
  });
});
