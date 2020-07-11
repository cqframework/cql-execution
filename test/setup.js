/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS205: Consider reworking code to avoid use of IIFEs
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const { Library, Context, PatientSource, CodeService, PatientContext, UnfilteredContext, Executor} =  require('../lib/cql');

module.exports = function(test, data, patients=[], valuesets={}, parameters={}, repository=null) {
  try {
    let k, v;
    test.lib = new Library(data[test.test.parent.title],repository);
    const cservice = new CodeService(valuesets);
    const psource = new PatientSource(patients);
    test.ctx = new PatientContext(test.lib, psource.currentPatient(), cservice, parameters);
    test.executor = new Executor(test.lib,cservice,parameters);
    test.patientSource = psource;
    for (k in test.lib.valuesets) {
      v = test.lib.valuesets[k];
      test[k[0].toLowerCase() + k.slice(1)] = v;
    }
    return (() => {
      const result = [];
      for (k in test.lib.expressions) {
        v = test.lib.expressions[k];
        result.push(test[k[0].toLowerCase() + k.slice(1)] = v.expression);
      }
      return result;
    })();
  } catch (e) {
    e.message = '[' + test.test.parent.title + '] ' + e.message;
    throw e;
  }
};
