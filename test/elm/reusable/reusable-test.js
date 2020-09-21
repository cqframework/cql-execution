const setup = require('../../setup');
const data = require('./data');

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

describe.skip('FunctionOverloads', function () {
  beforeEach(function () {
    setup(this, data);
  });

  it('should be able to use the function with Integer argument', function () {
    let e = this.testValue1.exec(this.ctx);
    e.should.equal(2);
    e = this.testValue2.exec(this.ctx);
    e.should.equal('Hello World');
  });
});
