import should from 'should';
import setup from '../../setup';
const data = require('./data');
import { Code, Concept } from '../../../src/datatypes/clinical';
import { Quantity } from '../../../src/datatypes/quantity';

describe('Instance', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should be able to construct a Quantity', async function () {
    const q = await this.quantityA.exec(this.ctx);
    should(q).be.instanceof(Quantity);
    q.unit.should.eql('a');
    q.value.should.eql(12);
    q.toString().should.equal("12 'a'");
    (await this.val.exec(this.ctx)).should.eql(12);
  });

  it('should be able to construct a Code', async function () {
    const c = await this.codeA.exec(this.ctx);
    should(c).be.instanceof(Code);
    c.code.should.equal('12345');
    c.system.should.equal('http://loinc.org');
    c.version.should.equal('1');
    c.display.should.equal('Test Code');
  });

  it('should be able to construct a Concept', async function () {
    const c = await this.conceptA.exec(this.ctx);
    should(c).be.instanceof(Concept);
    c.codes.should.have.length(1);
    c.codes[0].code.should.equal('12345');
    c.codes[0].system.should.equal('http://loinc.org');
    c.codes[0].version.should.equal('1');
    c.codes[0].display.should.equal('Test Code');
    c.display.should.equal('Test Concept');
  });

  it('should create generic json objects with the correct key values', async function () {
    (await this.pharyngitis.exec(this.ctx)).status.code.should.eql('active');
    (await this.pharyngitis.exec(this.ctx)).code.display.should.eql('Viral pharyngitis (disorder)');
  });
});
