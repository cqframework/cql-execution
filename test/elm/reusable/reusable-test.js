/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const should = require('should');
const setup = require('../../setup');
const data = require('./data');

describe('ExpressionDef', function() {
  this.beforeEach(function() {
    setup(this, data);
    return this.def = this.lib.expressions.Foo;
  });

  it('should have a name', function() {
    return this.def.name.should.equal('Foo');
  });

  it('should have the correct context', function() {
    return this.def.context.should.equal('Patient');
  });

  return it('should execute to its value', function() {
    return this.def.exec(this.ctx).should.equal('Bar');
  });
});

describe('ExpressionRef', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should have a name', function() {
    return this.foo.name.should.equal('Life');
  });

  return it('should execute to expression value', function() {
    return this.foo.exec(this.ctx).should.equal(42);
  });
});

describe('FunctionDefinitions', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  return it('should be able to define and use a simple function' , function() {
    const e = this.testValue.exec(this.ctx);
    return e.should.equal(3);
  });
});

describe.skip('FunctionOverloads', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  return it('should be able to use the function with Integer argument' , function() {
    let e = this.testValue1.exec(this.ctx);
    e.should.equal(2);
    e = this.testValue2.exec(this.ctx);
    return e.should.equal('Hello World');
  });
});