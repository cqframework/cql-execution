// Acute Pharyngitis and ED/Ambulatory Visits
const p1 = {
  recordType: 'Patient',
  id: '3',
  name: 'Bob Jones',
  gender: 'M',
  birthDate: '1974-07-12T11:15',
  records: [
    {
      recordType: 'Encounter',
      id: 'http://cqframework.org/3/1',
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
      id: 'http://cqframework.org/3/2',
      code: {
        code: '1532007',
        system: '2.16.840.1.113883.6.96',
        version: '2013-09',
        display: 'Viral pharyngitis (disorder)'
      },
      period: { low: '1982-03-12', high: '1982-03-26' }
    },
    {
      recordType: 'Encounter',
      id: 'http://cqframework.org/3/3',
      code: {
        code: '406547006',
        system: '2.16.840.1.113883.6.96',
        version: '2013-09',
        display: 'Urgent follow-up (procedure)'
      },
      period: { low: '1982-03-15T15:00', high: '1982-03-15T15:30' }
    },
    {
      recordType: 'Condition',
      id: 'http://cqframework.org/3/4',
      code: {
        code: '109962001',
        system: '2.16.840.1.113883.6.96',
        version: '2013-09',
        display: "Diffuse non-Hodgkin's lymphoma (disorder)"
      },
      period: { low: '2010-10-24', high: '2011-02-01T11:55:00' }
    },
    {
      recordType: 'Encounter',
      id: 'http://cqframework.org/3/5',
      code: {
        code: '185349003',
        system: '2.16.840.1.113883.6.96',
        version: '2013-09',
        display: 'Encounter for "check-up" (procedure)'
      },
      period: { low: '2013-05-23T10:00', high: '2013-05-23T11:00' }
    }
  ]
};

module.exports = { p1 };
