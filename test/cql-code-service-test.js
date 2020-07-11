// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/* eslint-env mocha */
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const should = require('should');
const { CodeService } = require('../lib/cql-code-service');
const { Code, ValueSet } = require('../lib/datatypes/datatypes');


describe('CodeService', function() {
  this.beforeEach(function() {
    this.svc = new CodeService({
      '1.2.3.4.5' : {
        '1' : [
          { 'code': 'ABC', 'system': '5.4.3.2.1', 'version': '1' },
          { 'code': 'DEF', 'system': '5.4.3.2.1', 'version': '2' },
          { 'code': 'GHI', 'system': '5.4.3.4.5', 'version': '3' }
        ],
        '2' : [
          { 'code': 'ABC', 'system': '5.4.3.2.1', 'version': '1' },
          { 'code': 'DEF', 'system': '5.4.3.2.1', 'version': '2' },
          { 'code': 'JKL', 'system': '5.4.3.2.1', 'version': '3' }
        ]
      },
      '6.7.8.9.0' : {
        'A' : [
          { 'code': 'MNO', 'system': '2.4.6.8.0', 'version': '3' },
          { 'code': 'PQR', 'system': '2.4.6.8.0', 'version': '2' },
          { 'code': 'STU', 'system': '2.4.6.8.0', 'version': '1' }
        ]
      }
    });
    this.vsOne = new ValueSet('1.2.3.4.5', '1', [
      new Code('ABC', '5.4.3.2.1', '1'),
      new Code('DEF', '5.4.3.2.1', '2'),
      new Code('GHI', '5.4.3.4.5', '3'),
    ]);
    this.vsTwo = new ValueSet('1.2.3.4.5', '2', [
      new Code('ABC', '5.4.3.2.1', '1'),
      new Code('DEF', '5.4.3.2.1', '2'),
      new Code('JKL', '5.4.3.2.1', '3'),
    ]);
    return this.vsThree = new ValueSet('6.7.8.9.0', 'A', [
      new Code('MNO', '2.4.6.8.0', '3'),
      new Code('PQR', '2.4.6.8.0', '2'),
      new Code('STU', '2.4.6.8.0', '1'),
    ]);
  });

  it('should find value sets by OID', function() {
    let valueSets = this.svc.findValueSetsByOid('1.2.3.4.5');
    valueSets.length.should.equal(2);
    valueSets.should.containEql(this.vsOne);
    valueSets.should.containEql(this.vsTwo);

    valueSets = this.svc.findValueSetsByOid('6.7.8.9.0');
    valueSets.length.should.equal(1);
    return valueSets.should.containEql(this.vsThree);
  });

  it('should find a single value set by OID and version', function() {
    return this.svc.findValueSet('1.2.3.4.5', '1').should.eql(this.vsOne);
  });

  it('should find a single value set by OID (using latest version)', function() {
    return this.svc.findValueSet('1.2.3.4.5').should.eql(this.vsTwo);
  });

  it('should return empty array when searching for value sets by wrong OID', function() {
    return this.svc.findValueSetsByOid('0.0.0.0.0').should.be.empty();
  });

  it('should return null when looking for a single value set by wrong OID', function() {
    return should.not.exist(this.svc.findValueSet('0.0.0.0.0'));
  });

  return it('should return null when looking for a single value set by wrong version', function() {
    return should.not.exist(this.svc.findValueSet('1.2.3.4.5', '3'));
  });
});
