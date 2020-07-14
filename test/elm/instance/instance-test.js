/* eslint-disable
    no-unused-vars,
*/
// TODO: This file was created by bulk-decaffeinate.
// Fix any style issues and re-enable lint.
/* eslint-env mocha */
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const should = require('should');
const setup = require('../../setup');
const data = require('./data');
const { DateTime } = require('../../../src/datatypes/datetime');
const { Code, Concept } = require('../../../src/datatypes/clinical');
const { Quantity } = require('../../../src/datatypes/quantity');

describe('Instance', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should be able to construct a Quantity', function() {
    const q = this.quantityA.exec(this.ctx);
    q.should.be.instanceof(Quantity);
    q.unit.should.eql('a');
    q.value.should.eql(12);
    q.toString().should.equal('12 \'a\'');
    return this.val.exec(this.ctx).should.eql(12);
  });

  it('should be able to construct a Code', function() {
    const c = this.codeA.exec(this.ctx);
    c.should.be.instanceof(Code);
    c.code.should.equal('12345');
    c.system.should.equal('http://loinc.org');
    c.version.should.equal('1');
    return c.display.should.equal('Test Code');
  });

  it('should be able to construct a Concept', function() {
    const c = this.conceptA.exec(this.ctx);
    c.should.be.instanceof(Concept);
    c.codes.should.have.length(1);
    c.codes[0].code.should.equal('12345');
    c.codes[0].system.should.equal('http://loinc.org');
    c.codes[0].version.should.equal('1');
    c.codes[0].display.should.equal('Test Code');
    return c.display.should.equal('Test Concept');
  });

  return it('should create generic json objects with the correct key values', function() {
    this.pharyngitis.exec(this.ctx).status.code.should.eql('active');
    return this.pharyngitis.exec(this.ctx).code.display.should.eql('Viral pharyngitis (disorder)');
  });
});
