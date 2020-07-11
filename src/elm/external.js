/* eslint-disable
    no-unused-vars,
*/
// TODO: This file was created by bulk-decaffeinate.
// Fix any style issues and re-enable lint.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS205: Consider reworking code to avoid use of IIFEs
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
let Retrieve;
const { Expression } = require('./expression');
const { build } = require('./builder');
const { typeIsArray } = require('../util/util');

module.exports.Retrieve = (Retrieve = class Retrieve extends Expression {
  constructor(json) {
    super(...arguments);
    this.datatype = json.dataType;
    this.templateId = json.templateId;
    this.codeProperty = json.codeProperty;
    this.codes = build(json.codes);
    this.dateProperty = json.dateProperty;
    this.dateRange = build(json.dateRange);
  }

  exec(ctx) {
    let r;
    let records = ctx.findRecords(this.templateId != null ? this.templateId : this.datatype);
    let {
      codes
    } = this;
    if (this.codes && (typeof this.codes.exec === 'function')) {
      codes = this.codes.execute(ctx);
      if ((codes == null)) {
        return [];
      }
    }
    if (codes) {
      records = records.filter(r => this.recordMatchesCodesOrVS(r, codes));
    }
    // TODO: Added @dateProperty check due to previous fix in cql4browsers in cql_qdm_patient_api hash: ddbc57
    if (this.dateRange && this.dateProperty) {
      const range = this.dateRange.execute(ctx);
      records = ((() => {
        const result = [];
        for (r of records) {           if (range.includes(r.getDateOrInterval(this.dateProperty))) {
          result.push(r);
        }
        }
        return result;
      })());
    }

    return records;
  }

  recordMatchesCodesOrVS(record, codes) {
    if (typeIsArray(codes)) {
      return codes.some(c => c.hasMatch(record.getCode(this.codeProperty)));
    } else {
      return codes.hasMatch(record.getCode(this.codeProperty));
    }
  }
});