// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
let build;
const E = require('./expressions');
const { typeIsArray } = require('../util/util');

module.exports.build = (build = function(json) {
  if ((json == null)) { return json; }

  if (typeIsArray(json)) {
    return (json.map((child) => build(child)));
  }

  if (json.type === 'FunctionRef') { return new E.FunctionRef(json);
  } else if (json.type === 'Literal') { return E.Literal.from(json);
  } else if (functionExists(json.type)) { return constructByName(json.type, json);
  } else { return null; }
});

var functionExists = name => typeof E[name] === 'function';

var constructByName = (name, json) => new (E[name])(json);
