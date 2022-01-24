const {
  Library,
  PatientSource,
  CodeService,
  PatientContext,
  Executor,
  NullMessageListener
} = require('../src/cql');

module.exports = function (
  test,
  data,
  patients = [],
  valuesets = {},
  parameters = {},
  repository = null
) {
  try {
    test.lib = new Library(data[test.test.parent.title], repository);
    const cservice = new CodeService(valuesets);
    const psource = new PatientSource(patients);
    test.ctx = new PatientContext(test.lib, psource.currentPatient(), cservice, parameters);
    test.executor = new Executor(test.lib, cservice, parameters, new NullMessageListener());
    test.patientSource = psource;
    for (let k in test.lib.valuesets) {
      const v = test.lib.valuesets[k];
      test[k[0].toLowerCase() + k.slice(1)] = v;
    }
    for (let k in test.lib.expressions) {
      const v = test.lib.expressions[k];
      test[k[0].toLowerCase() + k.slice(1)] = v.expression;
    }
  } catch (e) {
    e.message = '[' + test.test.parent.title + '] ' + e.message;
    throw e;
  }
};
