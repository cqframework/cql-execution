const { Expression } = require('./expression');
const DT = require('../datatypes/datatypes');

// Unit conversation is currently implemented on for time duration comparison operations
// TODO: Implement unit conversation for time duration mathematical operations
class Quantity extends Expression {
  constructor(json) {
    super(json);
    this.value = parseFloat(json.value);
    this.unit = json.unit;
  }

  exec(ctx) {
    return new DT.Quantity(this.value, this.unit);
  }
}

module.exports = { Quantity };
