/* eslint-disable
    no-unused-vars,
*/
// TODO: This file was created by bulk-decaffeinate.
// Fix any style issues and re-enable lint.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
let Greater, GreaterOrEqual, Less, LessOrEqual;
const { Expression } = require('./expression');
const { Uncertainty } = require('../datatypes/datatypes');

// Equal is completely handled by overloaded#Equal

// NotEqual is completely handled by overloaded#Equal

module.exports.Less = (Less = class Less extends Expression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    const args = this.execArgs(ctx).map(x => Uncertainty.from(x));
    if ((args[0] == null) || (args[1] == null)) { return null; }
    return args[0].lessThan(args[1]);
  }
});

module.exports.LessOrEqual = (LessOrEqual = class LessOrEqual extends Expression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    const args = this.execArgs(ctx).map(x => Uncertainty.from(x));
    if ((args[0] == null) || (args[1] == null)) { return null; }
    return args[0].lessThanOrEquals(args[1]);
  }
});

module.exports.Greater = (Greater = class Greater extends Expression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    const args = this.execArgs(ctx).map(x => Uncertainty.from(x));
    if ((args[0] == null) || (args[1] == null)) { return null; }
    return args[0].greaterThan(args[1]);
  }
});

module.exports.GreaterOrEqual = (GreaterOrEqual = class GreaterOrEqual extends Expression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    const args = this.execArgs(ctx).map(x => Uncertainty.from(x));
    if ((args[0] == null) || (args[1] == null)) { return null; }
    return args[0].greaterThanOrEquals(args[1]);
  }
});
