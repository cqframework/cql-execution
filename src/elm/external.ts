import { Expression } from './expression';
import { typeIsArray } from '../util/util';
import { Context } from '../runtime/context';
import { build } from './builder';
import { RetrieveDetails } from '../types/cql-patient.interfaces';
import { Code, ValueSet } from '../datatypes/clinical';

export class Retrieve extends Expression {
  datatype: string;
  templateId?: string;
  codeProperty?: string;
  codes?: Expression | null;
  dateProperty?: string;
  dateRange?: Expression | null;

  constructor(json: any) {
    super(json);
    this.datatype = json.dataType;
    this.templateId = json.templateId;
    this.codeProperty = json.codeProperty;
    this.codes = build(json.codes) as Expression;
    this.dateProperty = json.dateProperty;
    this.dateRange = build(json.dateRange) as Expression;
  }

  async exec(ctx: Context) {
    // Object with retrieve information to pass back to patient source
    // Always assign datatype. Assign codeProperty and dateProperty if present
    const retrieveDetails: RetrieveDetails = {
      datatype: this.datatype,
      ...(this.codeProperty ? { codeProperty: this.codeProperty } : {}),
      ...(this.dateProperty ? { dateProperty: this.dateProperty } : {})
    };

    if (this.codes) {
      const resolvedCodes: Code[] | ValueSet | undefined = await this.codes.execute(ctx);

      if (resolvedCodes == null) {
        return [];
      }

      retrieveDetails.codes = resolvedCodes;
    }

    if (this.dateRange) {
      retrieveDetails.dateRange = await this.dateRange.execute(ctx);
    }

    if (this.templateId) {
      retrieveDetails.templateId = this.templateId;
    }

    let records = await ctx.findRecords(
      this.templateId != null ? this.templateId : this.datatype,
      retrieveDetails
    );

    if (retrieveDetails.codes) {
      records = records.filter((r: any) => this.recordMatchesCodesOrVS(r, retrieveDetails.codes));
    }

    if (retrieveDetails.dateRange && this.dateProperty) {
      records = records.filter((r: any) =>
        retrieveDetails.dateRange?.includes(r.getDateOrInterval(this.dateProperty))
      );
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
