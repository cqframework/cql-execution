import setup from '../../setup';
const data = require('./data');
const vsets = require('./valuesets');
const { p1 } = require('./patients');
import { Repository } from '../../../src/cql';

describe('Retrieve', () => {
  beforeEach(function () {
    setup(this, data, [p1], vsets, {}, new Repository(data));
  });

  it('should find conditions', function () {
    const c = this.conditions.exec(this.ctx);
    c.should.have.length(2);
    c[0].id.should.equal('http://cqframework.org/3/2');
    c[1].id.should.equal('http://cqframework.org/3/4');
    this.ctx.evaluatedRecords.should.have.length(2);
    this.ctx.evaluatedRecords.should.containDeep(c);
  });

  it('should find encounter performances', function () {
    const e = this.encounters.exec(this.ctx);
    e.should.have.length(3);
    e[0].id.should.equal('http://cqframework.org/3/1');
    e[1].id.should.equal('http://cqframework.org/3/3');
    e[2].id.should.equal('http://cqframework.org/3/5');
    this.ctx.evaluatedRecords.should.have.length(3);
    this.ctx.evaluatedRecords.should.containDeep(e);
  });

  it('should find observations with a value set from included library', function () {
    const p = this.pharyngitisConditions.exec(this.ctx);
    p.should.have.length(1);
    p[0].id.should.equal('http://cqframework.org/3/2');
    this.ctx.evaluatedRecords.should.have.length(1);
    this.ctx.evaluatedRecords.should.containDeep(p);
  });

  it('should find encounter performances with a value set', function () {
    const a = this.ambulatoryEncounters.exec(this.ctx);
    a.should.have.length(3);
    a[0].id.should.equal('http://cqframework.org/3/1');
    a[1].id.should.equal('http://cqframework.org/3/3');
    a[2].id.should.equal('http://cqframework.org/3/5');
    this.ctx.evaluatedRecords.should.have.length(3);
    this.ctx.evaluatedRecords.should.containDeep(a);
  });

  it('should find encounter performances by code', function () {
    const e = this.encountersByCode.exec(this.ctx);
    e.should.have.length(3);
    e[0].id.should.equal('http://cqframework.org/3/1');
    e[1].id.should.equal('http://cqframework.org/3/3');
    e[2].id.should.equal('http://cqframework.org/3/5');
    this.ctx.evaluatedRecords.should.have.length(3);
    this.ctx.evaluatedRecords.should.containDeep(e);
  });

  it('should not find conditions with wrong valueset', function () {
    const e = this.wrongValueSet.exec(this.ctx);
    e.should.be.empty();
    this.ctx.evaluatedRecords.should.be.empty;
  });

  it('should not find encounter performances using wrong codeProperty', function () {
    const e = this.wrongCodeProperty.exec(this.ctx);
    e.should.be.empty();
    this.ctx.evaluatedRecords.should.be.empty;
  });

  it('should find conditions by specific pharyngitis code', function () {
    const e = this.conditionsByCode.exec(this.ctx);
    e.should.have.length(1);
    e[0].id.should.equal('http://cqframework.org/3/2');
    this.ctx.evaluatedRecords.should.have.length(1);
    this.ctx.evaluatedRecords.should.containDeep(e);
  });

  it('should find conditions by specific pharyngitis concept', function () {
    const e = this.conditionsByConcept.exec(this.ctx);
    e.should.have.length(1);
    e[0].id.should.equal('http://cqframework.org/3/2');
    this.ctx.evaluatedRecords.should.have.length(1);
    this.ctx.evaluatedRecords.should.containDeep(e);
  });
});
