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
const { Code, Concept, ValueSet } = require('../../lib/datatypes/clinical');

describe('Code', function() {
  this.beforeEach(function() {
    this.code = new Code('ABC', '5.4.3.2.1', '1');
    this.code_no_version = new Code('ABC', '5.4.3.2.1');
    return this.code_no_codesystem = new Code('ABC');
  });

  it('should properly represent the code, system, and version', function() {
    this.code.code.should.equal('ABC');
    this.code.system.should.equal('5.4.3.2.1');
    return this.code.version.should.equal('1');
  });

  it('should match code by Code object', function() {
    return this.code.hasMatch(new Code('ABC', '5.4.3.2.1', '1')).should.be.true();
  });

  it('should match code by Concept object', function() {
    return this.code.hasMatch(new Concept([new Code('ABC', '5.4.3.2.1', '2'), new Code('ABC', '5.4.3.2.1', '1')])).should.be.true();
  });

  it('should match code by array of Code objects', function() {
    return this.code.hasMatch([new Code('ABC', '5.4.3.2.1', '1')]).should.be.true();
  });

  it('should match code by array of Concept objects', function() {
    return this.code.hasMatch([new Concept([new Code('ABC', '5.4.3.2.1', '2'), new Code('ABC', '5.4.3.2.1', '1')])]).should.be.true();
  });

  it('should match code with different version', function() {
    return this.code.hasMatch(new Code('ABC', '5.4.3.2.1', '3')).should.be.true();
  });

  it('should match code with no version', function() {
    return this.code.hasMatch(new Code('ABC', '5.4.3.2.1')).should.be.true();
  });

  it('should match code with version if does not have version', function() {
    return this.code_no_version.hasMatch(new Code('ABC', '5.4.3.2.1', '3')).should.be.true();
  });

  it('should match code with no version if does not have version', function() {
    return this.code_no_version.hasMatch(new Code('ABC', '5.4.3.2.1')).should.be.true();
  });

  it('should not match code with different code system', function() {
    return this.code.hasMatch(new Code('ABC', '5.4.3.2.2')).should.be.false();
  });

  it('should not match code with no code system', function() {
    return this.code.hasMatch(new Code('ABC')).should.be.false();
  });

  it('should not match code with code system if does not have code system', function() {
    return this.code_no_codesystem.hasMatch(new Code('ABC', '5.4.3.2.1')).should.be.false();
  });

  it('should match code with no code system if does not have code system', function() {
    return this.code_no_codesystem.hasMatch(new Code('ABC')).should.be.true();
  });

  it('should not match different code with no code system if does not have code system', function() {
    return this.code_no_codesystem.hasMatch(new Code('CBA')).should.be.false();
  });

  return it('should match code with Concept object with different versions', function() {
    return this.code.hasMatch(new Concept([new Code('ABC', '5.4.3.2.1', '9'), new Code('ABC', '5.4.3.2.1', '8')])).should.be.true();
  });
});

describe('Concept', function() {
  this.beforeEach(function() {
    return this.concept = new Concept([new Code('ABC', '5.4.3.2.1', '1'), new Code('ABC', '5.4.3.2.1', '2')]);
  });

  it('should match concept by Code object', function() {
    return this.concept.hasMatch(new Code('ABC', '5.4.3.2.1', '1')).should.be.true();
  });

  it('should match concept by Concept object', function() {
    return this.concept.hasMatch(new Concept([new Code('ABC', '5.4.3.2.1', '2'), new Code('DEF', '5.4.3.2.1', '3')])).should.be.true();
  });

  it('should match concept by array of Code objects', function() {
    return this.concept.hasMatch([new Code('ABC', '5.4.3.2.1', '1')]).should.be.true();
  });

  it('should match concept by array of Concept objects', function() {
    return this.concept.hasMatch([new Concept([new Code('ABC', '5.4.3.2.1', '2'), new Code('DEF', '5.4.3.2.1', '3')])]).should.be.true();
  });

  it('should match concept with Code object with different version', function() {
    return this.concept.hasMatch(new Code('ABC', '5.4.3.2.1', '3')).should.be.true();
  });

  return it('should match Concept object with different versions', function() {
    return this.concept.hasMatch(new Concept([new Code('ABC', '5.4.3.2.1', '9'), new Code('ABC', '5.4.3.2.1', '8')])).should.be.true();
  });
});

describe('ValueSet', function() {
  this.beforeEach(function() {
    return this.valueSet = new ValueSet('1.2.3.4.5', '1', [
      new Code('ABC', '5.4.3.2.1', '1'),
      new Code('DEF', '5.4.3.2.1', '2'),
      new Code('GHI', '5.4.3.4.5', '3'),
    ]);
  });

  it('should properly represent the OID, version and codes', function() {
    this.valueSet.oid.should.equal('1.2.3.4.5');
    this.valueSet.version.should.equal('1');
    this.valueSet.codes.length.should.equal(3);
    this.valueSet.codes[0].should.eql(new Code('ABC', '5.4.3.2.1', '1'));
    this.valueSet.codes[1].should.eql(new Code('DEF', '5.4.3.2.1', '2'));
    return this.valueSet.codes[2].should.eql(new Code('GHI', '5.4.3.4.5', '3'));
  });

  it('should match code by Code object', function() {
    return this.valueSet.hasMatch(new Code('DEF', '5.4.3.2.1', '2')).should.be.true();
  });

  it('should match code by Concept object', function() {
    return this.valueSet.hasMatch(new Concept([new Code('DEF', '5.4.3.2.1', '1'), new Code('DEF', '5.4.3.2.1', '2')])).should.be.true();
  });

  it('should match code by array of Code objects', function() {
    return this.valueSet.hasMatch([new Code('DEF', '5.4.3.2.1', '2')]).should.be.true();
  });

  it('should match code by array of Concept objects', function() {
    return this.valueSet.hasMatch([new Concept([new Code('DEF', '5.4.3.2.1', '1'), new Code('DEF', '5.4.3.2.1', '2')])]).should.be.true();
  });

  it('should match code with different version', function() {
    return this.valueSet.hasMatch(new Code('DEF', '5.4.3.2.1', '3')).should.be.true();
  });

  return it('should match Concept with different code versions', function() {
    return this.valueSet.hasMatch(new Concept([new Code('DEF', '5.4.3.2.1', '9'), new Code('DEF', '5.4.3.2.1', '9')])).should.be.true();
  });
});
