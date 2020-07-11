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
let Coalesce, IsNull, Null;
const { Expression } = require('./expression');

module.exports.Null = (Null = class Null extends Expression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    return null;
  }
});

module.exports.IsNull = (IsNull = class IsNull extends Expression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    return (this.execArgs(ctx) == null);
  }
});

module.exports.Coalesce = (Coalesce = class Coalesce extends Expression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    for (let arg of this.args) {
      const result = arg.execute(ctx);
      // if a single arg that's a list, coalesce over the list
      if ((this.args.length === 1) && Array.isArray(result)) {
        for (let item of result) {
          if (item != null) { return item; }
        }
      } else {
        if (result != null) { return result; }
      }
    }
    return null;
  }
});
