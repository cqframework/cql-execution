/* eslint-disable
    no-undef,
*/
// TODO: This file was created by bulk-decaffeinate.
// Fix any style issues and re-enable lint.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
window.cql = require('../../cql');

window.executeSimpleELM = function(elm, patientSource, valueSets, libraryName, version, executionDateTime, parameters = {}) {
  let lib;
  if (Array.isArray(elm)) {
    if (elm.length > 1) {
      const rep = new cql.Repository(elm);
      lib = rep.resolve(libraryName, version);
    } else {
      lib = new cql.Library(elm[0]);
    }
  } else {
    lib = new cql.Library(elm);
  }

  const codeService = new cql.CodeService(valueSets);
  const executor = new cql.Executor(lib, codeService, parameters);
  return executor.exec(patientSource, executionDateTime);
};
