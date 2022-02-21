import setup from '../../setup';
const data = require('./data');
const { p1 } = require('./patients');

describe('ExpressionDef', () => {
  beforeEach(function () {
    setup(this, data);
    this.def = this.lib.expressions.Foo;
  });

  it('should have a name', function () {
    this.def.name.should.equal('Foo');
  });

  it('should have the correct context', function () {
    this.def.context.should.equal('Patient');
  });

  it('should execute to its value', function () {
    this.def.exec(this.ctx).should.equal('Bar');
  });
});

describe('ExpressionRef', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should have a name', function () {
    this.foo.name.should.equal('Life');
  });

  it('should execute to expression value', function () {
    this.foo.exec(this.ctx).should.equal(42);
  });
});

describe('FunctionDefinitions', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should be able to define and use a simple function', function () {
    const e = this.testValue.exec(this.ctx);
    e.should.equal(3);
  });
});

describe('FunctionOverloadsWithSingleArgument', function () {
  beforeEach(function () {
    setup(this, data);
  });

  it('should be able to invoke the correct function based on argument type', function () {
    let e = this.testValue1.exec(this.ctx);
    e.should.equal(2);
    e = this.testValue2.exec(this.ctx);
    e.should.equal('Hello World');
  });
});

describe('FunctionOverloadsWithMultipleArguments', function () {
  beforeEach(function () {
    setup(this, data);
  });

  it('should be able to invoke the correct function based on argument type', function () {
    let e = this.testValue1.exec(this.ctx);
    e.should.equal(0);
    e = this.testValue2.exec(this.ctx);
    e.should.equal('Goodbye World');
  });
});

describe('FunctionOverloadsWithDifferentNumberOfArguments', function () {
  beforeEach(function () {
    setup(this, data);
  });

  it('should be able to invoke the correct function based on number of arguments', function () {
    let e = this.testValue1.exec(this.ctx);
    e.should.equal('Hello World');
    e = this.testValue2.exec(this.ctx);
    e.should.equal('Hola World from Spain');
    e = this.testValue3.exec(this.ctx);
    e.should.equal('Hello World from England');
  });
});

describe('FunctionOverloadsWithArgumentsFromCustomDataModel', function () {
  beforeEach(function () {
    setup(this, data, [p1]);
  });

  it('should be able to invoke the correct function based on argument type', function () {
    let e = this.testValue1.exec(this.ctx);
    e.should.equal('Encounter http://cqframework.org/3/1');
    e = this.testValue2.exec(this.ctx);
    e.should.equal('Condition http://cqframework.org/3/2');
  });
});
