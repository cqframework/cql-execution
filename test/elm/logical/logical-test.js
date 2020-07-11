/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const should = require('should');
const setup = require('../../setup');
const data = require('./data');

describe('And', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should execute true and...', function() {
    this.tT.exec(this.ctx).should.be.true();
    this.tF.exec(this.ctx).should.be.false();
    return should(this.tN.exec(this.ctx)).be.null();
  });

  it('should execute false and...', function() {
    this.fF.exec(this.ctx).should.be.false();
    this.fT.exec(this.ctx).should.be.false();
    return this.fN.exec(this.ctx).should.be.false();
  });

  return it('should execute null and...', function() {
    should(this.nN.exec(this.ctx)).be.null();
    should(this.nT.exec(this.ctx)).be.null();
    return this.nF.exec(this.ctx).should.be.false();
  });
});

describe('Or', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should execute true or...', function() {
    this.tT.exec(this.ctx).should.be.true();
    this.tF.exec(this.ctx).should.be.true();
    return this.tN.exec(this.ctx).should.be.true();
  });

  it('should execute false or...', function() {
    this.fF.exec(this.ctx).should.be.false();
    this.fT.exec(this.ctx).should.be.true();
    return should(this.fN.exec(this.ctx)).be.null();
  });

  return it('should execute null or...', function() {
    should(this.nN.exec(this.ctx)).be.null();
    this.nT.exec(this.ctx).should.be.true();
    return should(this.nF.exec(this.ctx)).be.null();
  });
});

describe('Not', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should execute not true as false', function() {
    return this.notTrue.exec(this.ctx).should.be.false();
  });

  it('should execute not false as true', function() {
    return this.notFalse.exec(this.ctx).should.be.true();
  });

  return it('should execute not null as null', function() {
    return should(this.notNull.exec(this.ctx)).be.null();
  });
});

describe('XOr', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should execute true xor...', function() {
    this.tT.exec(this.ctx).should.be.false();
    this.tF.exec(this.ctx).should.be.true();
    return should(this.tN.exec(this.ctx)).be.null();
  });

  it('should execute false xor...', function() {
    this.fF.exec(this.ctx).should.be.false();
    this.fT.exec(this.ctx).should.be.true();
    return should(this.fN.exec(this.ctx)).be.null();
  });

  return it('should execute null xor...', function() {
    should(this.nN.exec(this.ctx)).be.null();
    should(this.nT.exec(this.ctx)).be.null();
    return should(this.nF.exec(this.ctx)).be.null();
  });
});

describe('IsTrue', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should execute true is true...', function() {
    return this.trueIsTrue.exec(this.ctx).should.be.true();
  });

  it('should execute false is true...', function() {
    return this.falseIsTrue.exec(this.ctx).should.be.false();
  });

  return it('should execute null is true...', function() {
    return this.nullIsTrue.exec(this.ctx).should.be.false();
  });
});

describe('IsFalse', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should execute true is false...', function() {
    return this.trueIsFalse.exec(this.ctx).should.be.false();
  });

  it('should execute false is false...', function() {
    return this.falseIsFalse.exec(this.ctx).should.be.true();
  });

  return it('should execute null is false...', function() {
    return this.nullIsFalse.exec(this.ctx).should.be.false();
  });
});