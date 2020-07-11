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
let Case, CaseItem, If;
const { Expression } = require('./expression');
const { build } = require('./builder');
const { equals } = require('../util/comparison');

// TODO: Spec lists "Conditional", but it's "If" in the XSD
module.exports.If = (If = class If extends Expression {
  constructor(json) {
    super(...arguments);
    this.condition = build(json.condition);
    this.th = build(json.then);
    this.els = build(json.else);
  }

  exec(ctx) {
    if (this.condition.execute(ctx)) { return this.th.execute(ctx); } else { return this.els.execute(ctx); }
  }
});

module.exports.CaseItem = (CaseItem = (CaseItem = class CaseItem {
  constructor(json) {
    this.when = build(json.when);
    this.then = build(json.then);
  }
}));

module.exports.Case = (Case = class Case extends Expression {

  constructor(json) {
    super(...arguments);
    this.comparand = build(json.comparand);
    this.caseItems = json.caseItem.map((ci) =>
      new CaseItem(ci));
    this.els = build(json.else);
  }

  exec(ctx) {
    if (this.comparand) { return this.exec_selected(ctx); } else { return this.exec_standard(ctx); }
  }

  exec_selected(ctx) {
    const val = this.comparand.execute(ctx);
    for (let ci of this.caseItems) {
      if (equals(ci.when.execute(ctx), val)) {
        return ci.then.execute(ctx);
      }
    }
    return this.els.execute(ctx);
  }

  exec_standard(ctx) {
    for (let ci of this.caseItems) {
      if (ci.when.execute(ctx)) {
        return ci.then.execute(ctx);
      }
    }
    return this.els.execute(ctx);
  }
});
