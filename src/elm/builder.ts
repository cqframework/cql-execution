const E = require('./expressions');
const { typeIsArray } = require('../util/util');

function build(json) {
  if (json == null) {
    return json;
  }

  if (typeIsArray(json)) {
    return json.map(child => build(child));
  }

  if (json.type === 'FunctionRef') {
    return new E.FunctionRef(json);
  } else if (json.type === 'Literal') {
    return E.Literal.from(json);
  } else if (functionExists(json.type)) {
    return constructByName(json.type, json);
  } else {
    return null;
  }
}

function functionExists(name) {
  return typeof E[name] === 'function';
}

function constructByName(name, json) {
  return new E[name](json);
}

module.exports = { build };
