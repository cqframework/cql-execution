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
window.cql = require('../../lib/cql');

window.executeSimpleELM = function (
  elm,
  patientSource,
  valueSets,
  libraryName,
  version,
  executionDateTime,
  parameters = {}
) {
  let lib;
  if (Array.isArray(elm)) {
    if (elm.length > 1) {
      const rep = new window.cql.Repository(elm);
      lib = rep.resolve(libraryName, version);
    } else {
      lib = new window.cql.Library(elm[0]);
    }
  } else {
    lib = new window.cql.Library(elm);
  }

  const codeService = new window.cql.CodeService(valueSets);
  const executor = new window.cql.Executor(lib, codeService, parameters);
  return executor.exec(patientSource, executionDateTime);
};
