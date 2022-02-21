import should from 'should';
import setup from '../../setup';
const data = require('./data');

describe('And', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should execute true and...', function () {
    this.tT.exec(this.ctx).should.be.true();
    this.tF.exec(this.ctx).should.be.false();
    should(this.tN.exec(this.ctx)).be.null();
  });

  it('should execute false and...', function () {
    this.fF.exec(this.ctx).should.be.false();
    this.fT.exec(this.ctx).should.be.false();
    this.fN.exec(this.ctx).should.be.false();
  });

  it('should execute null and...', function () {
    should(this.nN.exec(this.ctx)).be.null();
    should(this.nT.exec(this.ctx)).be.null();
    this.nF.exec(this.ctx).should.be.false();
  });
});

describe('Or', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should execute true or...', function () {
    this.tT.exec(this.ctx).should.be.true();
    this.tF.exec(this.ctx).should.be.true();
    this.tN.exec(this.ctx).should.be.true();
  });

  it('should execute false or...', function () {
    this.fF.exec(this.ctx).should.be.false();
    this.fT.exec(this.ctx).should.be.true();
    should(this.fN.exec(this.ctx)).be.null();
  });

  it('should execute null or...', function () {
    should(this.nN.exec(this.ctx)).be.null();
    this.nT.exec(this.ctx).should.be.true();
    should(this.nF.exec(this.ctx)).be.null();
  });
});

describe('Not', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should execute not true as false', function () {
    this.notTrue.exec(this.ctx).should.be.false();
  });

  it('should execute not false as true', function () {
    this.notFalse.exec(this.ctx).should.be.true();
  });

  it('should execute not null as null', function () {
    should(this.notNull.exec(this.ctx)).be.null();
  });
});

describe('XOr', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should execute true xor...', function () {
    this.tT.exec(this.ctx).should.be.false();
    this.tF.exec(this.ctx).should.be.true();
    should(this.tN.exec(this.ctx)).be.null();
  });

  it('should execute false xor...', function () {
    this.fF.exec(this.ctx).should.be.false();
    this.fT.exec(this.ctx).should.be.true();
    should(this.fN.exec(this.ctx)).be.null();
  });

  it('should execute null xor...', function () {
    should(this.nN.exec(this.ctx)).be.null();
    should(this.nT.exec(this.ctx)).be.null();
    should(this.nF.exec(this.ctx)).be.null();
  });
});

describe('IsTrue', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should execute true is true...', function () {
    this.trueIsTrue.exec(this.ctx).should.be.true();
  });

  it('should execute false is true...', function () {
    this.falseIsTrue.exec(this.ctx).should.be.false();
  });

  it('should execute null is true...', function () {
    this.nullIsTrue.exec(this.ctx).should.be.false();
  });
});

describe('IsFalse', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should execute true is false...', function () {
    this.trueIsFalse.exec(this.ctx).should.be.false();
  });

  it('should execute false is false...', function () {
    this.falseIsFalse.exec(this.ctx).should.be.true();
  });

  it('should execute null is false...', function () {
    this.nullIsFalse.exec(this.ctx).should.be.false();
  });
});
