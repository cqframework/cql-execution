import should from 'should';
import setup from '../../setup';
const data = require('./data');

describe('And', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should execute true and...', async function () {
    (await this.tT.exec(this.ctx)).should.be.true();
    (await this.tF.exec(this.ctx)).should.be.false();
    should(await this.tN.exec(this.ctx)).be.null();
  });

  it('should execute false and...', async function () {
    (await this.fF.exec(this.ctx)).should.be.false();
    (await this.fT.exec(this.ctx)).should.be.false();
    (await this.fN.exec(this.ctx)).should.be.false();
  });

  it('should execute null and...', async function () {
    should(await this.nN.exec(this.ctx)).be.null();
    should(await this.nT.exec(this.ctx)).be.null();
    (await this.nF.exec(this.ctx)).should.be.false();
  });
});

describe('Or', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should execute true or...', async function () {
    (await this.tT.exec(this.ctx)).should.be.true();
    (await this.tF.exec(this.ctx)).should.be.true();
    (await this.tN.exec(this.ctx)).should.be.true();
  });

  it('should execute false or...', async function () {
    (await this.fF.exec(this.ctx)).should.be.false();
    (await this.fT.exec(this.ctx)).should.be.true();
    should(await this.fN.exec(this.ctx)).be.null();
  });

  it('should execute null or...', async function () {
    should(await this.nN.exec(this.ctx)).be.null();
    (await this.nT.exec(this.ctx)).should.be.true();
    should(await this.nF.exec(this.ctx)).be.null();
  });
});

describe('Not', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should execute not true as false', async function () {
    (await this.notTrue.exec(this.ctx)).should.be.false();
  });

  it('should execute not false as true', async function () {
    (await this.notFalse.exec(this.ctx)).should.be.true();
  });

  it('should execute not null as null', async function () {
    should(await this.notNull.exec(this.ctx)).be.null();
  });
});

describe('XOr', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should execute true xor...', async function () {
    (await this.tT.exec(this.ctx)).should.be.false();
    (await this.tF.exec(this.ctx)).should.be.true();
    should(await this.tN.exec(this.ctx)).be.null();
  });

  it('should execute false xor...', async function () {
    (await this.fF.exec(this.ctx)).should.be.false();
    (await this.fT.exec(this.ctx)).should.be.true();
    should(await this.fN.exec(this.ctx)).be.null();
  });

  it('should execute null xor...', async function () {
    should(await this.nN.exec(this.ctx)).be.null();
    should(await this.nT.exec(this.ctx)).be.null();
    should(await this.nF.exec(this.ctx)).be.null();
  });
});

describe('IsTrue', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should execute true is true...', async function () {
    (await this.trueIsTrue.exec(this.ctx)).should.be.true();
  });

  it('should execute false is true...', async function () {
    (await this.falseIsTrue.exec(this.ctx)).should.be.false();
  });

  it('should execute null is true...', async function () {
    (await this.nullIsTrue.exec(this.ctx)).should.be.false();
  });
});

describe('IsFalse', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should execute true is false...', async function () {
    (await this.trueIsFalse.exec(this.ctx)).should.be.false();
  });

  it('should execute false is false...', async function () {
    (await this.falseIsFalse.exec(this.ctx)).should.be.true();
  });

  it('should execute null is false...', async function () {
    (await this.nullIsFalse.exec(this.ctx)).should.be.false();
  });
});
