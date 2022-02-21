import should from 'should';
import setup from '../../setup';
const data = require('./data');
const dataWithNamespace = require('./data-with-namespace');
import { equivalent } from '../../../src/util/comparison';
import { Repository, Code } from '../../../src/cql';

const { p1, p2 } = require('./patients');

describe('In Age Demographic', () => {
  beforeEach(function () {
    setup(this, data, [p1, p2]);
    this.results = this.executor.withLibrary(this.lib).exec_patient_context(this.patientSource);
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

  it('should include codesystems from CommonLib', function () {
    const codesystems = this.lib.codesystems;
    codesystems.should.not.be.empty();
  });

  it('should have using models defined', function () {
    this.lib.usings.should.not.be.empty();
    this.lib.usings.length.should.equal(1);
    this.lib.usings[0].name.should.equal('Simple');
  });

  it('Should have included a library', function () {
    this.lib.includes.should.not.be.empty();
  });

  it('should be able to execute expression from included library', function () {
    this.results = this.executor.withLibrary(this.lib).exec_patient_context(this.patientSource);
    this.results.patientResults['1'].ID.should.equal(false);
    this.results.patientResults['2'].ID.should.equal(true);
    this.results.patientResults['2'].FuncTest.should.equal(7);
    this.results.patientResults['1'].FuncTest.should.equal(7);
  });

  it('should find the code defined in the included library', function () {
    should.exist(this.supportLibCode.exec(this.ctx));
    equivalent(
      this.supportLibCode.exec(this.ctx),
      new Code('428371000124100', '2.16.840.1.113883.6.96', 'foo', 'directReferenceCode')
    ).should.be.true();
  });
});

describe('Using CommonLib2', () => {
  beforeEach(function () {
    setup(this, data, [], {}, { AnotherNumber: 50 }, new Repository(data));
  });

  it('should execute expression from included library that uses parameter', function () {
    this.exprUsesParam.exec(this.ctx).should.equal(17);
  });

  it('should execute expression from included library that uses sent-in parameter', function () {
    this.exprUsesParam.exec(this.ctx.withParameters({ SomeNumber: 42 })).should.equal(42);
  });

  it('should execute parameter from included library', function () {
    this.exprUsesParamDirectly.exec(this.ctx).should.equal(17);
  });

  it('should execute sent-in parameter from included library', function () {
    this.exprUsesParamDirectly.exec(this.ctx.withParameters({ SomeNumber: 73 })).should.equal(73);
  });

  it('should execute expression from included library that uses parameter', function () {
    this.exprUsesAnotherParam.exec(this.ctx).should.equal(50);
  });

  it('should execute expression from included library that uses sent-in parameter', function () {
    this.exprUsesAnotherParam.exec(this.ctx.withParameters({ AnotherNumber: 66 })).should.equal(66);
  });

  it('should execute parameter from included library', function () {
    this.exprUsesAnotherParamDirectly.exec(this.ctx).should.equal(50);
  });

  it('should execute sent-in parameter from included library', function () {
    this.exprUsesAnotherParamDirectly
      .exec(this.ctx.withParameters({ AnotherNumber: 73 }))
      .should.equal(73);
  });

  it('should execute function from included library that uses parameter', function () {
    this.funcUsesParam.exec(this.ctx).should.equal(22);
  });

  it('should execute expression from included library that calls function', function () {
    this.exprCallsFunc.exec(this.ctx).should.equal(6);
  });

  it('should execute function from included library that calls function', function () {
    this.funcCallsFunc.exec(this.ctx).should.equal(25);
  });

  it('should execute expression from included library that uses expression', function () {
    this.exprUsesExpr.exec(this.ctx).should.equal(3);
  });

  it('should execute function from included library that uses expression', function () {
    this.funcUsesExpr.exec(this.ctx).should.equal(7);
  });

  it('should execute function from included library that uses expression', function () {
    this.exprSortsOnFunc
      .exec(this.ctx)
      .should.eql([{ N: 1 }, { N: 2 }, { N: 3 }, { N: 4 }, { N: 5 }]);
  });
});

describe('Using CommonLib and CommonLib2', () => {
  beforeEach(function () {
    setup(this, data, [p1], {}, {}, new Repository(data));
    this.results = this.executor.withLibrary(this.lib).exec_patient_context(this.patientSource);
    this.commonLocalIdObject = this.results.localIdPatientResultsMap['1'].Common;
    this.common2LocalIdObject = this.results.localIdPatientResultsMap['1'].Common2;
  });

  it('should contain TheParameter localId in the localIdMap', function () {
    const theParameterLocalId = this.lib.includes.common2.expressions.TheParameter.localId;
    should.exist(this.common2LocalIdObject[theParameterLocalId]);
  });

  it('should contain TwoPlusOne localId in the localIdMap', function () {
    const twoPlusOneLocalId = this.lib.includes.common2.expressions.TwoPlusOne.localId;
    should.exist(this.common2LocalIdObject[twoPlusOneLocalId]);
  });

  it('should contian TwoTimesThree localId in the localIdMap', function () {
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
  beforeEach(function () {
    setup(this, dataWithNamespace, [p1], {}, {}, new Repository(dataWithNamespace));
    this.results = this.executor.withLibrary(this.lib).exec_patient_context(this.patientSource);
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

  it('should contian TwoTimesThree localId in the localIdMap with namespace support', function () {
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
