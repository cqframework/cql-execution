import { Expression } from './expression';
import { typeIsArray } from '../util/util';
import { Context } from '../runtime/context';
import { build } from './builder';

export class Retrieve extends Expression {
  datatype: string;
  templateId: string;
  codeProperty: string;
  codes: any;
  dateProperty: string;
  dateRange: any;

  constructor(json: any) {
    super(json);
    this.datatype = json.dataType;
    this.templateId = json.templateId;
    this.codeProperty = json.codeProperty;
    this.codes = build(json.codes);
    this.dateProperty = json.dateProperty;
    this.dateRange = build(json.dateRange);
  }

  exec(ctx: Context) {
    let records = ctx.findRecords(this.templateId != null ? this.templateId : this.datatype);
    let codes = this.codes;
    if (this.codes && typeof this.codes.exec === 'function') {
      codes = this.codes.execute(ctx);
      if (codes == null) {
        return [];
      }
    }
    if (codes) {
      records = records.filter((r: any) => this.recordMatchesCodesOrVS(r, codes));
    }
    // TODO: Added @dateProperty check due to previous fix in cql4browsers in cql_qdm_patient_api hash: ddbc57
    if (this.dateRange && this.dateProperty) {
      const range = this.dateRange.execute(ctx);
      records = records.filter((r: any) => range.includes(r.getDateOrInterval(this.dateProperty)));
    }

    if (Array.isArray(records)) {
      ctx.evaluatedRecords.push(...records);
    } else {
      ctx.evaluatedRecords.push(records);
    }
    return records;
  }

  recordMatchesCodesOrVS(record: any, codes: any) {
    if (typeIsArray(codes)) {
      return (codes as any[]).some(c => c.hasMatch(record.getCode(this.codeProperty)));
    } else {
      return codes.hasMatch(record.getCode(this.codeProperty));
    }
  }
}
