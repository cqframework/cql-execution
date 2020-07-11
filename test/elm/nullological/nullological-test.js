/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const should = require('should');
const setup = require('../../setup');
const data = require('./data');

describe('Nil', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  return it('should execute as null', function() {
    return should(this.nil.exec(this.ctx)).be.null();
  });
});

describe('IsNull', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should detect that null is null', function() {
    return this.nullIsNull.exec(this.ctx).should.be.true();
  });

  it('should detect that null variable is null', function() {
    return this.nullVarIsNull.exec(this.ctx).should.be.true();
  });

  it('should detect that string is not null', function() {
    return this.stringIsNull.exec(this.ctx).should.be.false();
  });

  return it('should detect that non-null variable is not null', function() {
    return this.nonNullVarIsNull.exec(this.ctx).should.be.false();
  });
});

describe('Coalesce', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should return first non-null when leading args are null', function() {
    return this.nullNullHelloNullWorld.exec(this.ctx).should.equal('Hello');
  });

  it('should return first arg when it is non-null', function() {
    return this.fooNullNullBar.exec(this.ctx).should.equal('Foo');
  });

  it('should return null when they are all null', function() {
    return should(this.allNull.exec(this.ctx)).be.null();
  });

  it('should return first non-null in array', function() {
    return this.listArgStartsWithNull.exec(this.ctx).should.equal('One');
  });

  it('should return null for all-null array', function() {
    return should(this.listArgAllNull.exec(this.ctx)).be.null();
  });

  it('should be able to handle ExpressionRef with list', function() {
    return this.listExpressionRef.exec(this.ctx).should.equal('One');
  });

  it('should be able to handle Retrieve as list', function() {
    return should(this.retrieveAsList.exec(this.ctx)).be.null();
  });

  return it('should be able to handle Union as list', function() {
    return this.unionAsList.exec(this.ctx).should.equal(3);
  });
});
