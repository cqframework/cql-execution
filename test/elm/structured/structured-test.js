/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const should = require('should');
const setup = require('../../setup');
const data = require('./data');

describe('Tuple', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  return it('should be able to define a tuple', function() {
    const e = this.tup.exec(this.ctx);
    e["a"].should.equal(1);
    return e["b"].should.equal(2);
  });
});
