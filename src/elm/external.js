const { Expression } = require('./expression');
const { build } = require('./builder');
const { typeIsArray } = require('../util/util');

class Retrieve extends Expression {
  constructor(json) {
    super(json);
    this.datatype = json.dataType;
    this.templateId = json.templateId;
    this.codeProperty = json.codeProperty;
    this.codes = build(json.codes);
    this.dateProperty = json.dateProperty;
    this.dateRange = build(json.dateRange);
  }

  exec(ctx) {
    let records = ctx.findRecords(this.templateId != null ? this.templateId : this.datatype);
    let codes = this.codes;
    if (this.codes && typeof this.codes.exec === 'function') {
      codes = this.codes.execute(ctx);
      if (codes == null) {
        return [];
      }
    }
    if (codes) {
      records = records.filter(r => this.recordMatchesCodesOrVS(r, codes));
    }
    // TODO: Added @dateProperty check due to previous fix in cql4browsers in cql_qdm_patient_api hash: ddbc57
    if (this.dateRange && this.dateProperty) {
      const range = this.dateRange.execute(ctx);
      records = records.filter(r => range.includes(r.getDateOrInterval(this.dateProperty)));
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
}

module.exports = { Retrieve };
