import { Expression } from './expression';
import { typeIsArray } from '../util/util';
import { Context } from '../runtime/context';
import { build } from './builder';
import { RetrieveDetails } from '../types/cql-patient.interfaces';
import { Interval } from '../datatypes/interval';
import { Code, ValueSet } from '../datatypes/clinical';

export class Retrieve extends Expression {
  datatype: string;
  templateId?: string;
  codeProperty?: string;
  codes?: Expression;
  dateProperty?: string;
  dateRange?: Expression;

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
    // Object with retrieve information to pass back to patient source
    const retrieveDetails: RetrieveDetails = {
      datatype: this.datatype
    };

    let resolvedCodes: Code[] | ValueSet | undefined;
    if (this.codes) {
      resolvedCodes = this.codes.execute(ctx);

      if (resolvedCodes == null) {
        return [];
      }

      retrieveDetails.codes = resolvedCodes;
    }
    // TODO: Added @dateProperty check due to previous fix in cql4browsers in cql_qdm_patient_api hash: ddbc57
    let range: Interval | undefined;
    if (this.dateRange && this.dateProperty) {
      range = this.dateRange.execute(ctx);

      retrieveDetails.dateRange = range;
      retrieveDetails.dateProperty = this.dateProperty;
    }

    if (this.templateId) {
      retrieveDetails.templateId = this.templateId;
    }

    if (resolvedCodes && this.codeProperty) {
      retrieveDetails.codeProperty = this.codeProperty;
    }

    let records = ctx.findRecords(
      this.templateId != null ? this.templateId : this.datatype,
      retrieveDetails
    );

    if (resolvedCodes) {
      records = records.filter((r: any) => this.recordMatchesCodesOrVS(r, resolvedCodes));
    }

    if (range && this.dateProperty) {
      records = records.filter((r: any) => range?.includes(r.getDateOrInterval(this.dateProperty)));
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
