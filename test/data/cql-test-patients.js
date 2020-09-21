// Born in 1980
const P1 = {
  recordType: 'Patient',
  id: '1',
  name: 'John Smith',
  gender: 'M',
  birthDate: '1980-02-17T06:15'
};

// Born in 2007
const P2 = {
  recordType: 'Patient',
  id: '2',
  name: 'Sally Smith',
  gender: 'F',
  birthDate: '2007-08-02T11:47'
};

// Acute Pharyngitis and ED/Ambulatory Visits
const P3 = {
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

// ED/Ambulatory Visit
const P4 = {
  recordType: 'Patient',
  id: '4',
  name: 'Jane Jones',
  gender: 'F',
  birthDate: '1976-11-09T14:12',
  records: [
    {
      recordType: 'Encounter',
      id: 'http://cqframework.org/4/1',
      code: {
        code: '439708006',
        system: '2.16.840.1.113883.6.96',
        version: '2013-09',
        display: 'Home visit (procedure)'
      },
      period: { low: '1985-05-01T13:00', high: '1985-05-01T14:00' }
    }
  ]
};

module.exports = { P1, P2, P3, P4, P1AndP2: [P1, P2] };
