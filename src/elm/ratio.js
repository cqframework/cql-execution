const { Expression } = require('./expression');
const { Quantity } = require('../datatypes/quantity');
const DT = require('../datatypes/datatypes');

class Ratio extends Expression {
  constructor(json) {
    super(json);
    if (json.numerator == null) {
      throw new Error('Cannot create a ratio with an undefined numerator value');
    } else {
      this.numerator = new Quantity(json.numerator.value, json.numerator.unit);
    }

    if (json.denominator == null) {
      throw new Error('Cannot create a ratio with an undefined denominator value');
    } else {
      this.denominator = new Quantity(json.denominator.value, json.denominator.unit);
    }
  }

  exec(ctx) {
    return new DT.Ratio(this.numerator, this.denominator);
  }
}

module.exports = { Ratio };
