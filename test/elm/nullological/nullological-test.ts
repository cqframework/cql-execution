import should from 'should';
import setup from '../../setup';
const data = require('./data');

describe('Nil', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should execute as null', async function () {
    should(await this.nil.exec(this.ctx)).be.null();
  });
});

describe('IsNull', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should detect that null is null', async function () {
    (await this.nullIsNull.exec(this.ctx)).should.be.true();
  });

  it('should detect that null variable is null', async function () {
    (await this.nullVarIsNull.exec(this.ctx)).should.be.true();
  });

  it('should detect that string is not null', async function () {
    (await this.stringIsNull.exec(this.ctx)).should.be.false();
  });

  it('should detect that non-null variable is not null', async function () {
    (await this.nonNullVarIsNull.exec(this.ctx)).should.be.false();
  });
});

describe('Coalesce', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should return first non-null when leading args are null', async function () {
    (await this.nullNullHelloNullWorld.exec(this.ctx)).should.equal('Hello');
  });

  it('should return first arg when it is non-null', async function () {
    (await this.fooNullNullBar.exec(this.ctx)).should.equal('Foo');
  });

  it('should return null when they are all null', async function () {
    should(await this.allNull.exec(this.ctx)).be.null();
  });

  it('should return first non-null in array', async function () {
    (await this.listArgStartsWithNull.exec(this.ctx)).should.equal('One');
  });

  it('should return null for all-null array', async function () {
    should(await this.listArgAllNull.exec(this.ctx)).be.null();
  });

  it('should be able to handle ExpressionRef with list', async function () {
    (await this.listExpressionRef.exec(this.ctx)).should.equal('One');
  });

  it('should be able to handle Retrieve as list', async function () {
    should(await this.retrieveAsList.exec(this.ctx)).be.null();
  });

  it('should be able to handle Union as list', async function () {
    (await this.unionAsList.exec(this.ctx)).should.equal(3);
  });
});
