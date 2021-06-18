const should = require('should');
const setup = require('../../setup');
const data = require('./data');

describe('Message', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should always return the first argument as-is', function () {
    this.oneOverTwo.exec(this.ctx).should.equal(0.5);
    should(this.oneOverZero.exec(this.ctx)).be.null();
  });
});
