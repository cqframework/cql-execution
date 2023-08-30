// Fully Specified Birth Date
const p1 = {
  recordType: 'Patient',
  id: '1',
  name: 'John Smith',
  gender: 'M',
  birthDate: '1980-06-17T09:00:00.000Z'
};

// Date-Only Birth Date
const p2 = {
  recordType: 'Patient',
  id: '2',
  name: 'Sally Smith',
  gender: 'F',
  birthDate: '1980-06-17'
};

// Fully Specified Birth Date
const p3 = {
  recordType: 'Patient',
  id: '1',
  name: 'John Smith',
  gender: 'M',
  birthDate: '1994-12-01T23:59:00.000Z'
};

// Fully Specified Birth Date on "Today"
const p4 = {
  recordType: 'Patient',
  id: '1',
  name: 'John Smith',
  gender: 'M',
  birthDate: '1980-10-01T14:00:00.000Z'
};

// Date-Only Birth Date on "Today"
const p5 = {
  recordType: 'Patient',
  id: '2',
  name: 'Sally Smith',
  gender: 'F',
  birthDate: '1980-10-01'
};

// Date-Only Birth Date on December 31
const p6 = {
  recordType: 'Patient',
  id: '1',
  name: 'John Smith',
  gender: 'M',
  birthDate: '2005-12-31'
};

// Fully Specified Birth Date on December 31
const p7 = {
  recordType: 'Patient',
  id: '1',
  name: 'John Smith',
  gender: 'M',
  birthDate: '2005-12-31T14:00:00.000Z'
};

module.exports = { p1, p2, p3, p4, p5, p6, p7 };
