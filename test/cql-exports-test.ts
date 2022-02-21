import cql from '../src/cql';
import 'should';

const libNames: string[] = [];
// Library-related classes
libNames.push('Library', 'Repository', 'Expression');
// Execution-related classes
libNames.push('Context', 'Executor', 'PatientContext', 'UnfilteredContext', 'Results');
// PatientSource-related classes
libNames.push('Patient', 'PatientSource');
// TerminologyService-related classes
libNames.push('CodeService');
// DataType classes
libNames.push(
  'Code',
  'CodeSystem',
  'Concept',
  'Date',
  'DateTime',
  'Interval',
  'Quantity',
  'Ratio',
  'ValueSet'
);

describe('CQL Exports', () =>
  libNames.map(libName =>
    (name =>
      it(`should export ${name}`, () => {
        cql[name].should.be.Function();
        cql[name].name.should.equal(name);
      }))(libName as keyof typeof cql)
  ));
