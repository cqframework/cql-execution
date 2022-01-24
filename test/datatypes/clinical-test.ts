const { Code, Concept, ValueSet } = require('../../src/datatypes/clinical');

describe('Code', () => {
  let code, code_no_version, code_no_codesystem;
  beforeEach(() => {
    code = new Code('ABC', '5.4.3.2.1', '1');
    code_no_version = new Code('ABC', '5.4.3.2.1');
    code_no_codesystem = new Code('ABC');
  });

  it('should properly represent the code, system, and version', () => {
    code.code.should.equal('ABC');
    code.system.should.equal('5.4.3.2.1');
    code.version.should.equal('1');
  });

  it('should match code by Code object', () => {
    code.hasMatch(new Code('ABC', '5.4.3.2.1', '1')).should.be.true();
  });

  it('should match code by Concept object', () => {
    code
      .hasMatch(new Concept([new Code('ABC', '5.4.3.2.1', '2'), new Code('ABC', '5.4.3.2.1', '1')]))
      .should.be.true();
  });

  it('should match code by array of Code objects', () => {
    code.hasMatch([new Code('ABC', '5.4.3.2.1', '1')]).should.be.true();
  });

  it('should match code by array of Concept objects', () => {
    code
      .hasMatch([
        new Concept([new Code('ABC', '5.4.3.2.1', '2'), new Code('ABC', '5.4.3.2.1', '1')])
      ])
      .should.be.true();
  });

  it('should match code with different version', () => {
    code.hasMatch(new Code('ABC', '5.4.3.2.1', '3')).should.be.true();
  });

  it('should match code with no version', () => {
    code.hasMatch(new Code('ABC', '5.4.3.2.1')).should.be.true();
  });

  it('should match code with version if does not have version', () => {
    code_no_version.hasMatch(new Code('ABC', '5.4.3.2.1', '3')).should.be.true();
  });

  it('should match code with no version if does not have version', () => {
    code_no_version.hasMatch(new Code('ABC', '5.4.3.2.1')).should.be.true();
  });

  it('should not match code with different code system', () => {
    code.hasMatch(new Code('ABC', '5.4.3.2.2')).should.be.false();
  });

  it('should not match code with no code system', () => {
    code.hasMatch(new Code('ABC')).should.be.false();
  });

  it('should not match code with code system if does not have code system', () => {
    code_no_codesystem.hasMatch(new Code('ABC', '5.4.3.2.1')).should.be.false();
  });

  it('should match code with no code system if does not have code system', () => {
    code_no_codesystem.hasMatch(new Code('ABC')).should.be.true();
  });

  it('should not match different code with no code system if does not have code system', () => {
    code_no_codesystem.hasMatch(new Code('CBA')).should.be.false();
  });

  it('should match code with Concept object with different versions', () => {
    code
      .hasMatch(new Concept([new Code('ABC', '5.4.3.2.1', '9'), new Code('ABC', '5.4.3.2.1', '8')]))
      .should.be.true();
  });
});

describe('Concept', () => {
  let concept;
  beforeEach(() => {
    concept = new Concept([new Code('ABC', '5.4.3.2.1', '1'), new Code('ABC', '5.4.3.2.1', '2')]);
  });

  it('should match concept by Code object', () => {
    concept.hasMatch(new Code('ABC', '5.4.3.2.1', '1')).should.be.true();
  });

  it('should match concept by Concept object', () => {
    concept
      .hasMatch(new Concept([new Code('ABC', '5.4.3.2.1', '2'), new Code('DEF', '5.4.3.2.1', '3')]))
      .should.be.true();
  });

  it('should match concept by array of Code objects', () => {
    concept.hasMatch([new Code('ABC', '5.4.3.2.1', '1')]).should.be.true();
  });

  it('should match concept by array of Concept objects', () => {
    concept
      .hasMatch([
        new Concept([new Code('ABC', '5.4.3.2.1', '2'), new Code('DEF', '5.4.3.2.1', '3')])
      ])
      .should.be.true();
  });

  it('should match concept with Code object with different version', () => {
    concept.hasMatch(new Code('ABC', '5.4.3.2.1', '3')).should.be.true();
  });

  it('should match Concept object with different versions', () => {
    concept
      .hasMatch(new Concept([new Code('ABC', '5.4.3.2.1', '9'), new Code('ABC', '5.4.3.2.1', '8')]))
      .should.be.true();
  });
});

describe('ValueSet', () => {
  let valueSet;
  beforeEach(() => {
    valueSet = new ValueSet('1.2.3.4.5', '1', [
      new Code('ABC', '5.4.3.2.1', '1'),
      new Code('DEF', '5.4.3.2.1', '2'),
      new Code('GHI', '5.4.3.4.5', '3')
    ]);
  });

  it('should properly represent the OID, version and codes', () => {
    valueSet.oid.should.equal('1.2.3.4.5');
    valueSet.version.should.equal('1');
    valueSet.codes.length.should.equal(3);
    valueSet.codes[0].should.eql(new Code('ABC', '5.4.3.2.1', '1'));
    valueSet.codes[1].should.eql(new Code('DEF', '5.4.3.2.1', '2'));
    valueSet.codes[2].should.eql(new Code('GHI', '5.4.3.4.5', '3'));
  });

  it('should match code by Code object', () => {
    valueSet.hasMatch(new Code('DEF', '5.4.3.2.1', '2')).should.be.true();
  });

  it('should match code by Concept object', () => {
    valueSet
      .hasMatch(new Concept([new Code('DEF', '5.4.3.2.1', '1'), new Code('DEF', '5.4.3.2.1', '2')]))
      .should.be.true();
  });

  it('should match code by array of Code objects', () => {
    valueSet.hasMatch([new Code('DEF', '5.4.3.2.1', '2')]).should.be.true();
  });

  it('should match code by array of Concept objects', () => {
    valueSet
      .hasMatch([
        new Concept([new Code('DEF', '5.4.3.2.1', '1'), new Code('DEF', '5.4.3.2.1', '2')])
      ])
      .should.be.true();
  });

  it('should match code with different version', () => {
    valueSet.hasMatch(new Code('DEF', '5.4.3.2.1', '3')).should.be.true();
  });

  it('should match Concept with different code versions', () => {
    valueSet
      .hasMatch(new Concept([new Code('DEF', '5.4.3.2.1', '9'), new Code('DEF', '5.4.3.2.1', '9')]))
      .should.be.true();
  });
});
