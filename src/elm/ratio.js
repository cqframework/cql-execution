/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
let Ratio;
const { Exception } = require('../datatypes/exception');
const { Expression } = require('./expression');
const { Quantity } = require('../datatypes/quantity');
const DT = require('../datatypes/datatypes');

module.exports.Ratio = (Ratio = class Ratio extends Expression {
  constructor(json) {
    super(...arguments);
    if ((json.numerator == null)) {
      throw new Error("Cannot create a ratio with an undefined numerator value");
    } else {
      this.numerator = new Quantity(json.numerator.value, json.numerator.unit);
    }

    if ((json.denominator == null)) {
      throw new Error("Cannot create a ratio with an undefined denominator value");
    } else {
      this.denominator = new Quantity(json.denominator.value, json.denominator.unit);
    }
  }

  exec(ctx) {
    return new DT.Ratio(this.numerator, this.denominator);
  }
});



