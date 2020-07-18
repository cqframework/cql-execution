/* eslint-disable
    no-unused-vars,
*/
// TODO: This file was created by bulk-decaffeinate.
// Fix any style issues and re-enable lint.
/* eslint-env mocha */
/*
 * decaffeinate suggestions:
 * DS101: Remove unnecessary use of Array.from
 * DS102: Remove unnecessary code created because of implicit returns
 * DS104: Avoid inline assignments
 * DS205: Consider reworking code to avoid use of IIFEs
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const should = require('should');
const { Patient } = require('../src/cql-patient');
const DT = require('../src/datatypes/datatypes');

describe('Record', function() {
  this.beforeEach(function() {
    let ref;
    const patient = new Patient({
      'records': [{
        'recordType': 'Encounter',
        'id': 'http://cqframework.org/1/1',
        'code': { 'code': '185349003', 'system': '2.16.840.1.113883.6.96', 'version': '2013-09', 'display': 'Encounter for "check-up" (procedure)' },
        'period': { 'low': '1978-07-15T10:00', 'high': '1978-07-15T10:45' }
      }, {
        'recordType': 'Condition',
        'id': 'http://cqframework.org/1/2',
        'code': { 'code': '1532007', 'system': '2.16.840.1.113883.6.96', 'version': '2013-09', 'display': 'Viral pharyngitis (disorder)' },
        'period': { 'low': '1982-03-12', 'high': '1982-03-26' }
      }]
    });
    [this.encRecord, this.cndRecord] = Array.from((ref = (() => {
      const result = [];
      for (let k in patient.records) {
        const v = patient.records[k];
        result.push(v[0]);
      }
      return result;
    })())), ref;
  });

  it('should get simple record entries', function() {
    this.encRecord.get('id').should.equal('http://cqframework.org/1/1');
    this.encRecord.get('recordType').should.equal('Encounter');
    this.cndRecord.get('id').should.equal('http://cqframework.org/1/2');
    this.cndRecord.get('recordType').should.equal('Condition');
  });

  it('should get codes', function() {
    this.encRecord.getCode('code').should.eql(new DT.Code('185349003', '2.16.840.1.113883.6.96', '2013-09'));
  });

  it('should get dates', function() {
    this.cndRecord.getDate('period.low').should.eql(DT.DateTime.parse('1982-03-12'));
    this.cndRecord.getDate('period.high').should.eql(DT.DateTime.parse('1982-03-26'));
  });

  it('should get intervals', function() {
    this.encRecord.getInterval('period').should.eql(new DT.Interval(DT.DateTime.parse('1978-07-15T10:00'), DT.DateTime.parse('1978-07-15T10:45')));
  });

  it('should get date or interval', function() {
    this.cndRecord.getDateOrInterval('period.low').should.eql(DT.DateTime.parse('1982-03-12'));
    this.encRecord.getDateOrInterval('period').should.eql(new DT.Interval(DT.DateTime.parse('1978-07-15T10:00'), DT.DateTime.parse('1978-07-15T10:45')));
  });
});

describe('Patient', function() {
  this.beforeEach(function() {
    this.patient = new Patient({
      'id': '1',
      'name': 'Bob Jones',
      'gender': 'M',
      'birthDate' : '1974-07-12T11:15',
      'records': [{
        'id': 'http://cqframework.org/1/1',
        'recordType': 'Encounter',
        'code': { 'code': '185349003', 'system': '2.16.840.1.113883.6.96', 'version': '2013-09', 'display': 'Encounter for "check-up" (procedure)' },
        'period': { 'low': '1978-07-15T10:00', 'high': '1978-07-15T10:45' }
      }, {
        'id': 'http://cqframework.org/1/2',
        'recordType': 'Condition',
        'code': { 'code': '1532007', 'system': '2.16.840.1.113883.6.96', 'version': '2013-09', 'display': 'Viral pharyngitis (disorder)' },
        'period': { 'low': '1982-03-12', 'high': '1982-03-26' }
      }
      ]
    });});

  it('should contain patient attributes', function() {
    this.patient.id.should.equal('1');
    this.patient.name.should.equal('Bob Jones');
    this.patient.gender.should.equal('M');
    this.patient.birthDate.should.eql(DT.DateTime.parse('1974-07-12T11:15'));
  });

  it('should find records by profile', function() {
    const encounters = this.patient.findRecords('{https://github.com/cqframework/cql-execution/simple}Encounter');
    encounters.length.should.equal(1);
    encounters[0].get('id').should.equal('http://cqframework.org/1/1');

    const conditions = this.patient.findRecords('{https://github.com/cqframework/cql-execution/simple}Condition');
    conditions.length.should.equal(1);
    conditions[0].get('id').should.equal('http://cqframework.org/1/2');
  });

  it('should return empty array for unfound records', function() {
    this.patient.findRecords('{https://github.com/cqframework/cql-execution/simple}Foo').should.be.empty();
  });
});
