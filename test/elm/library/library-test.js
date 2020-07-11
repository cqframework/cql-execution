/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const should = require('should');
const setup = require('../../setup');
const data = require('./data');
const {equivalent}= require('../../../lib/util/comparison');
const {Repository, Code} = require('../../../lib/cql');

const { p1, p2 } = require('./patients');

describe('In Age Demographic', function() {
  this.beforeEach(function() {
    setup(this, data, [ p1, p2 ]);
    return this.results = this.executor.withLibrary(this.lib).exec_patient_context(this.patientSource);
  });

  it('should have correct patient results', function() {
    this.results.patientResults['1'].InDemographic.should.equal(false);
    return this.results.patientResults['2'].InDemographic.should.equal(true);
  });

  return it('should have empty unfiltered results', function() {
    return this.results.unfilteredResults.should.be.empty();
  });
});

describe('Using CommonLib', function() {
  this.beforeEach(function() {
    return setup(this, data, [ p1, p2 ], {}, {}, new Repository(data));
  });

  it("should have using models defined", function() {
    this.lib.usings.should.not.be.empty();
    this.lib.usings.length.should.equal(1);
    return this.lib.usings[0].name.should.equal("Simple");
  });

  it('Should have included a library', function() {
    return this.lib.includes.should.not.be.empty();
  });

  it("should be able to execute expression from included library", function() {
    this.results = this.executor.withLibrary(this.lib).exec_patient_context(this.patientSource);
    this.results.patientResults['1'].ID.should.equal(false);
    this.results.patientResults['2'].ID.should.equal(true);
    this.results.patientResults['2'].FuncTest.should.equal(7);
    return this.results.patientResults['1'].FuncTest.should.equal(7);
  });

  return it("should find the code defined in the included library", function() {
    should.exist(this.supportLibCode.exec(this.ctx));
    return equivalent(this.supportLibCode.exec(this.ctx), new Code('428371000124100', '2.16.840.1.113883.6.96', 'foo', 'directReferenceCode')).should.be.true();
  });
});

describe('Using CommonLib2', function() {
  this.beforeEach(function() {
    return setup(this, data, [], {}, {}, new Repository(data));
  });

  it("should execute expression from included library that uses parameter", function() {
    return this.exprUsesParam.exec(this.ctx).should.equal(17);
  });

  it("should execute expression from included library that uses sent-in parameter", function() {
    return this.exprUsesParam.exec(this.ctx.withParameters({SomeNumber: 42})).should.equal(42);
  });

  it("should execute parameter from included library", function() {
    return this.exprUsesParamDirectly.exec(this.ctx).should.equal(17);
  });

  it("should execute sent-in parameter from included library", function() {
    return this.exprUsesParamDirectly.exec(this.ctx.withParameters({SomeNumber: 73})).should.equal(73);
  });

  it("should execute function from included library that uses parameter", function() {
    return this.funcUsesParam.exec(this.ctx).should.equal(22);
  });

  it("should execute expression from included library that calls function", function() {
    return this.exprCallsFunc.exec(this.ctx).should.equal(6);
  });

  it("should execute function from included library that calls function", function() {
    return this.funcCallsFunc.exec(this.ctx).should.equal(25);
  });

  it("should execute expression from included library that uses expression", function() {
    return this.exprUsesExpr.exec(this.ctx).should.equal(3);
  });

  it("should execute function from included library that uses expression", function() {
    return this.funcUsesExpr.exec(this.ctx).should.equal(7);
  });

  return it("should execute function from included library that uses expression", function() {
    return this.exprSortsOnFunc.exec(this.ctx).should.eql([{N: 1}, {N: 2}, {N: 3}, {N: 4}, {N: 5}]);
});
});

describe('Using CommonLib and CommonLib2', function() {
  this.beforeEach(function() {
    setup(this, data, [p1], {}, {}, new Repository(data));
    this.results = this.executor.withLibrary(this.lib).exec_patient_context(this.patientSource);
    this.commonLocalIdObject = this.results.localIdPatientResultsMap['1'].Common;
    return this.common2LocalIdObject = this.results.localIdPatientResultsMap['1'].Common2;
  });

  it("should contain TheParameter localId in the localIdMap", function() {
    const theParameterLocalId = this.lib.includes.common2.expressions.TheParameter.localId;
    return should.exist(this.common2LocalIdObject[theParameterLocalId]);
  });

  it("should contain TwoPlusOne localId in the localIdMap", function() {
    const twoPlusOneLocalId = this.lib.includes.common2.expressions.TwoPlusOne.localId;
    return should.exist(this.common2LocalIdObject[twoPlusOneLocalId]);
  });

  it("should contian TwoTimesThree localId in the localIdMap", function() {
    const twoTimesThreeLocalId = this.lib.includes.common2.expressions.TwoTimesThree.localId;
    return should.exist(this.common2LocalIdObject[twoTimesThreeLocalId]);
  });

  it("should contain SupportLibDef localId in the localIdMap", function() {
    const supportLibDefLocalId = this.lib.includes.common.expressions.SupportLibDef.localId;
    return should.exist(this.commonLocalIdObject[supportLibDefLocalId]);
  });

  return it("should contain SortUsingFunction localId in the localIdMap", function() {
    const sortUsingFunctionLocalId = this.lib.includes.common2.expressions.SortUsingFunction.localId;
    return should.exist(this.common2LocalIdObject[sortUsingFunctionLocalId]);
  });
});
