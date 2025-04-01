import should from 'should';
import setup from '../../setup';
const data = require('./data');
const { p1 } = require('./patients');
import { Repository } from '../../../src/cql';
import sinon from 'sinon';

describe('ExpressionDef', () => {
  beforeEach(function () {
    setup(this, data);
    this.def = this.lib.expressions.Foo;
  });

  it('should have a name', function () {
    should(this.def.name).equal('Foo');
  });

  it('should have the correct context', function () {
    should(this.def.context).equal('Patient');
  });

  it('should execute to its value', async function () {
    (await this.def.exec(this.ctx)).should.equal('Bar');
  });
});

describe('ExpressionRef', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should have a name', function () {
    this.foo.name.should.equal('Life');
  });

  it('should execute to expression value', async function () {
    (await this.foo.exec(this.ctx)).should.equal(42);
  });

  it('should execute an expensive ExpressionDef once when referenced more than once', async function () {
    const spy = sinon.spy(this.expensiveStatement, 'exec');
    await this.expensiveStatementRef.exec(this.ctx);
    spy.should.have.been.calledOnce();
  });
});

describe('FunctionDefinitions', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should be able to define and use a simple function', async function () {
    const e = await this.testValue.exec(this.ctx);
    e.should.equal(3);
  });
});

describe('FunctionOverloadsWithSingleArgument', async function () {
  beforeEach(function () {
    setup(this, data);
  });

  it('should be able to invoke the correct function based on argument type', async function () {
    let e = await this.testValue1.exec(this.ctx);
    e.should.equal(2);
    e = await this.testValue2.exec(this.ctx);
    e.should.equal('Hello World');
  });
});

describe('FunctionOverloadsWithMultipleArguments', async function () {
  beforeEach(function () {
    setup(this, data);
  });

  it('should be able to invoke the correct function based on argument type', async function () {
    let e = await this.testValue1.exec(this.ctx);
    e.should.equal(0);
    e = await this.testValue2.exec(this.ctx);
    e.should.equal('Goodbye World');
  });
});

describe('FunctionOverloadsWithDifferentNumberOfArguments', async function () {
  beforeEach(function () {
    setup(this, data);
  });

  it('should be able to invoke the correct function based on number of arguments', async function () {
    let e = await this.testValue1.exec(this.ctx);
    e.should.equal('Hello World');
    e = await this.testValue2.exec(this.ctx);
    e.should.equal('Hola World from Spain');
    e = await this.testValue3.exec(this.ctx);
    e.should.equal('Hello World from England');
  });
});

describe('FunctionOverloadsWithArgumentsFromCustomDataModel', async function () {
  beforeEach(function () {
    setup(this, data, [p1]);
  });

  it('should be able to invoke the correct function based on argument type', async function () {
    let e = await this.testValue1.exec(this.ctx);
    e.should.equal('Encounter http://cqframework.org/3/1');
    e = await this.testValue2.exec(this.ctx);
    e.should.equal('Condition http://cqframework.org/3/2');
  });
});

describe('FluentFunctions', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should be able to invoke a fluent function with no arguments', async function () {
    const e = await this.testValue1.exec(this.ctx);
    e.should.equal('Hello World!');
  });

  it('should be able to invoke a fluent function with one extra argument', async function () {
    const e = await this.testValue2.exec(this.ctx);
    e.should.equal(3);
  });
});

describe('FluentFunctionsOverloadCallingSelf', () => {
  beforeEach(function () {
    setup(this, data, [p1], {}, {}, new Repository(data));
  });

  it('should be able to invoke an overloaded fluent function', async function () {
    await this.matchTestFalse.exec(this.ctx).should.be.finally.false();
    await this.matchTestTrue.exec(this.ctx).should.be.finally.true();
    await this.matchTestsFalse.exec(this.ctx).should.be.finally.false();
    await this.matchTestsTrue.exec(this.ctx).should.be.finally.true();
  });

  it('should be able to invoke an overloaded fluent function with patient context', async function () {
    const results = await this.executor
      .withLibrary(this.lib)
      .exec_patient_context(this.patientSource);

    results.patientResults['3'].matchTestFalse.should.be.false();
    results.patientResults['3'].matchTestTrue.should.be.true();
    results.patientResults['3'].matchTestsFalse.should.be.false();
    results.patientResults['3'].matchTestsTrue.should.be.true();
  });

  it('should be able to invoke a fluent function which calls another fluent function overload of the same name', async function () {
    await this.matchTestCallSelfFalse.exec(this.ctx).should.be.finally.false();
    await this.matchTestCallSelfTrue.exec(this.ctx).should.be.finally.true();
    await this.matchTestsCallSelfFalse.exec(this.ctx).should.be.finally.false();
    await this.matchTestsCallSelfTrue.exec(this.ctx).should.be.finally.true();
  });

  it('should be able to invoke a fluent function which calls another fluent function overload of the same name with patient context', async function () {
    const results = await this.executor
      .withLibrary(this.lib)
      .exec_patient_context(this.patientSource);

    results.patientResults['3'].matchTestCallSelfFalse.should.be.false();
    results.patientResults['3'].matchTestCallSelfTrue.should.be.true();
    results.patientResults['3'].matchTestsCallSelfFalse.should.be.false();
    results.patientResults['3'].matchTestsCallSelfTrue.should.be.true();
  });
});

describe('FluentFunctionsOverloadCallingSelfFromOtherLibrary', () => {
  beforeEach(function () {
    setup(this, data, [p1], {}, {}, new Repository(data));
  });

  it('should be able to invoke an overloaded fluent function without patient context', async function () {
    await this.matchTestFalse.exec(this.ctx).should.be.finally.false();
    await this.matchTestTrue.exec(this.ctx).should.be.finally.true();
    await this.matchTestsFalse.exec(this.ctx).should.be.finally.false();
    await this.matchTestsTrue.exec(this.ctx).should.be.finally.true();
  });

  it('should be able to invoke an overloaded fluent function with patient context', async function () {
    const results = await this.executor
      .withLibrary(this.lib)
      .exec_patient_context(this.patientSource);

    results.patientResults['3'].matchTestFalse.should.be.false();
    results.patientResults['3'].matchTestTrue.should.be.true();
    results.patientResults['3'].matchTestsFalse.should.be.false();
    results.patientResults['3'].matchTestsTrue.should.be.true();
  });

  it('should be able to invoke a fluent function which calls another fluent function overload of the same name without patient context', async function () {
    await this.matchTestCallSelfFalse.exec(this.ctx).should.be.finally.false();
    await this.matchTestCallSelfTrue.exec(this.ctx).should.be.finally.true();
    await this.matchTestsCallSelfFalse.exec(this.ctx).should.be.finally.false();
    await this.matchTestsCallSelfTrue.exec(this.ctx).should.be.finally.true();
  });

  it('should be able to invoke a fluent function which calls another fluent function overload of the same name with patient context', async function () {
    const results = await this.executor
      .withLibrary(this.lib)
      .exec_patient_context(this.patientSource);

    results.patientResults['3'].matchTestCallSelfFalse.should.be.false();
    results.patientResults['3'].matchTestCallSelfTrue.should.be.true();
    results.patientResults['3'].matchTestsCallSelfFalse.should.be.false();
    results.patientResults['3'].matchTestsCallSelfTrue.should.be.true();
  });
});
