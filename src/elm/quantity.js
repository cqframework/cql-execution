/* eslint-disable
    no-unused-vars,
*/
// TODO: This file was created by bulk-decaffeinate.
// Fix any style issues and re-enable lint.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
let Quantity;
const { Expression } = require('./expression');
const { FunctionRef } = require('./reusable');
const { ValueSet, Code } = require('../datatypes/datatypes');
const { Exception } = require('../datatypes/exception');
const { build } = require('./builder');
const DT = require('../datatypes/datatypes');

// Unit conversation is currently implemented on for time duration comparison operations
// TODO: Implement unit conversation for time duration mathematical operations
module.exports.Quantity = (Quantity = class Quantity extends Expression {
  constructor(json) {
    super(...arguments);
    this.value = parseFloat(json.value);
    this.unit = json.unit;
  }

  exec(ctx) {
    return new DT.Quantity(this.value, this.unit);
  }
});
