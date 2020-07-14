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
const vsets = require('./valuesets');
const { p1 } = require('./patients');
const {Repository} = require('../../../src/cql');

describe('Retrieve', function() {
  this.beforeEach(function() {
    return setup(this, data, [ p1 ], vsets, {}, new Repository(data));
  });

  it('should find conditions', function() {
    const c = this.conditions.exec(this.ctx);
    c.should.have.length(2);
    c[0].id.should.equal('http://cqframework.org/3/2');
    return c[1].id.should.equal('http://cqframework.org/3/4');
  });

  it('should find encounter performances', function() {
    const e = this.encounters.exec(this.ctx);
    e.should.have.length(3);
    e[0].id.should.equal('http://cqframework.org/3/1');
    e[1].id.should.equal('http://cqframework.org/3/3');
    return e[2].id.should.equal('http://cqframework.org/3/5');
  });

  it('should find observations with a value set from included library', function() {
    const p = this.pharyngitisConditions.exec(this.ctx);
    p.should.have.length(1);
    return p[0].id.should.equal('http://cqframework.org/3/2');
  });

  it('should find encounter performances with a value set', function() {
    const a = this.ambulatoryEncounters.exec(this.ctx);
    a.should.have.length(3);
    a[0].id.should.equal('http://cqframework.org/3/1');
    a[1].id.should.equal('http://cqframework.org/3/3');
    return a[2].id.should.equal('http://cqframework.org/3/5');
  });

  it('should find encounter performances by code', function() {
    const e = this.encountersByCode.exec(this.ctx);
    e.should.have.length(3);
    e[0].id.should.equal('http://cqframework.org/3/1');
    e[1].id.should.equal('http://cqframework.org/3/3');
    return e[2].id.should.equal('http://cqframework.org/3/5');
  });

  it('should not find conditions with wrong valueset', function() {
    const e = this.wrongValueSet.exec(this.ctx);
    return e.should.be.empty();
  });

  it('should not find encounter performances using wrong codeProperty', function() {
    const e = this.wrongCodeProperty.exec(this.ctx);
    return e.should.be.empty();
  });

  it('should find conditions by specific pharyngitis code', function() {
    const e = this.conditionsByCode.exec(this.ctx);
    e.should.have.length(1);
    return e[0].id.should.equal('http://cqframework.org/3/2');
  });

  return it('should find conditions by specific pharyngitis concept', function() {
    const e = this.conditionsByConcept.exec(this.ctx);
    e.should.have.length(1);
    return e[0].id.should.equal('http://cqframework.org/3/2');
  });
});
