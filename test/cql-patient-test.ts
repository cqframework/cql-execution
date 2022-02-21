import { Patient } from '../src/cql-patient';
import * as DT from '../src/datatypes/datatypes';
import 'should';

describe('Record', () => {
  let encRecord: any, cndRecord: any;
  beforeEach(() => {
    const patient = new Patient({
      records: [
        {
          recordType: 'Encounter',
          id: 'http://cqframework.org/1/1',
          code: {
            code: '185349003',
            system: '2.16.840.1.113883.6.96',
            version: '2013-09',
            display: 'Encounter for "check-up" (procedure)'
          },
          period: { low: '1978-07-15T10:00', high: '1978-07-15T10:45' }
        },
        {
          recordType: 'Condition',
          id: 'http://cqframework.org/1/2',
          code: {
            code: '1532007',
            system: '2.16.840.1.113883.6.96',
            version: '2013-09',
            display: 'Viral pharyngitis (disorder)'
          },
          period: { low: '1982-03-12', high: '1982-03-26' }
        }
      ]
    });
    [encRecord, cndRecord] = Object.values(patient.records).map((r: any) => r[0]);
  });

  it('should get simple record entries', () => {
    encRecord.get('id').should.equal('http://cqframework.org/1/1');
    encRecord.get('recordType').should.equal('Encounter');
    cndRecord.get('id').should.equal('http://cqframework.org/1/2');
    cndRecord.get('recordType').should.equal('Condition');
  });

  it('should get codes', () => {
    encRecord
      .getCode('code')
      .should.eql(new DT.Code('185349003', '2.16.840.1.113883.6.96', '2013-09'));
  });

  it('should get dates', () => {
    cndRecord.getDate('period.low').should.eql(DT.DateTime.parse('1982-03-12'));
    cndRecord.getDate('period.high').should.eql(DT.DateTime.parse('1982-03-26'));
  });

  it('should get intervals', () => {
    encRecord
      .getInterval('period')
      .should.eql(
        new DT.Interval(
          DT.DateTime.parse('1978-07-15T10:00'),
          DT.DateTime.parse('1978-07-15T10:45')
        )
      );
  });

  it('should get date or interval', () => {
    cndRecord.getDateOrInterval('period.low').should.eql(DT.DateTime.parse('1982-03-12'));
    encRecord
      .getDateOrInterval('period')
      .should.eql(
        new DT.Interval(
          DT.DateTime.parse('1978-07-15T10:00'),
          DT.DateTime.parse('1978-07-15T10:45')
        )
      );
  });
});

describe('Patient', () => {
  let patient: Patient;
  beforeEach(() => {
    patient = new Patient({
      id: '1',
      name: 'Bob Jones',
      gender: 'M',
      birthDate: '1974-07-12T11:15',
      records: [
        {
          id: 'http://cqframework.org/1/1',
          recordType: 'Encounter',
          code: {
            code: '185349003',
            system: '2.16.840.1.113883.6.96',
            version: '2013-09',
            display: 'Encounter for "check-up" (procedure)'
          },
          period: { low: '1978-07-15T10:00', high: '1978-07-15T10:45' }
        },
        {
          id: 'http://cqframework.org/1/2',
          recordType: 'Condition',
          code: {
            code: '1532007',
            system: '2.16.840.1.113883.6.96',
            version: '2013-09',
            display: 'Viral pharyngitis (disorder)'
          },
          period: { low: '1982-03-12', high: '1982-03-26' }
        }
      ]
    });
  });

  it('should contain patient attributes', () => {
    patient.id.should.equal('1');
    patient.name.should.equal('Bob Jones');
    patient.gender.should.equal('M');
    patient.birthDate?.should.eql(DT.DateTime.parse('1974-07-12T11:15'));
  });

  it('should find records by profile', () => {
    const encounters = patient.findRecords(
      '{https://github.com/cqframework/cql-execution/simple}Encounter'
    );
    encounters.length.should.equal(1);
    encounters[0].get('id').should.equal('http://cqframework.org/1/1');

    const conditions = patient.findRecords(
      '{https://github.com/cqframework/cql-execution/simple}Condition'
    );
    conditions.length.should.equal(1);
    conditions[0].get('id').should.equal('http://cqframework.org/1/2');
  });

  it('should return empty array for unfound records', () => {
    patient
      .findRecords('{https://github.com/cqframework/cql-execution/simple}Foo')
      .should.be.empty();
  });
});
