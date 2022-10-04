import should from 'should';
import setup from '../../setup';
const data = require('./data');
const { p1 } = require('./patients');

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
