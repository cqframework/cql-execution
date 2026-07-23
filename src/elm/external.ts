import { Expression } from './expression';
import { resolveValueSet, typeIsArray } from '../util/util';
import { equals } from '../util/comparison';
import { Context } from '../runtime/context';
import { build } from './builder';
import { RetrieveDetails } from '../types/cql-patient.interfaces';
import { Code, CodeSystem, CQLValueSet, ValueSet } from '../datatypes/clinical';

export class Retrieve extends Expression {
  datatype: string;
  templateId?: string;
  codeProperty?: string;
  codeComparator?: 'in' | '=' | '~';
  codes?: Expression | null;
  dateProperty?: string;
  dateRange?: Expression | null;

  constructor(json: any) {
    super(json);
    this.datatype = json.dataType;
    this.templateId = json.templateId;
    this.codeProperty = json.codeProperty;
    this.codeComparator = json.codeComparator;
    this.codes = build(json.codes) as Expression;
    this.dateProperty = json.dateProperty;
    this.dateRange = build(json.dateRange) as Expression;
  }

  async exec(ctx: Context) {
    // Object with retrieve information to pass back to patient source
    // Always assign datatype. Assign the others only if present
    const retrieveDetails: RetrieveDetails = {
      datatype: this.datatype,
      ...(this.codeProperty ? { codeProperty: this.codeProperty } : {}),
      ...(this.codeComparator ? { codeComparator: this.codeComparator } : {}),
      ...(this.dateProperty ? { dateProperty: this.dateProperty } : {})
    };

    if (this.codes) {
      const executedCodes: Code[] | CQLValueSet | undefined = await this.codes.execute(ctx);

      if (executedCodes == null) {
        return [];
      }

      if (typeIsArray(executedCodes)) {
        retrieveDetails.codes = executedCodes as Code[];
      } else {
        // retrieveDetails codes are expected to be expanded for external usage
        retrieveDetails.codes = await resolveValueSet(executedCodes as CQLValueSet, ctx);
      }
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
    let recordCodeValue = record.getCode(this.codeProperty);

    if (Array.isArray(recordCodeValue)) {
      if (recordCodeValue.length == 0) {
        return false;
      }
    } else if (!recordCodeValue) {
      return false;
    } else {
      recordCodeValue = [recordCodeValue];
    }

    switch (this.codeComparator) {
      case 'in':
        return this.in(recordCodeValue, codes);

      case '~':
        return this.equivalent(recordCodeValue, codes);

      case '=':
        return this._equal(recordCodeValue, codes);
    }
  }

  private in(lhs: Code[], rhs: any) {
    if (rhs instanceof ValueSet || rhs instanceof CodeSystem) {
      return rhs.hasMatch(lhs);
    } else {
      // For code lists, fallback to the implementation in ~ . See comments below.
      return this.equivalent(lhs, rhs);
    }
  }

  private equivalent(lhs: Code[], rhs: any) {
    if (rhs instanceof CodeSystem) {
      throw new Error("Operator '~' is not defined for Code ~ CodeSystem");
    } else if (rhs instanceof ValueSet) {
      // TODO: explain
      return rhs.hasMatch(lhs);
    } else {
      return (rhs as Code[]).some(c => c.hasMatch(lhs));
    }
  }

  private equal(lhs: Code[], rhs: any) {
    if (rhs instanceof CodeSystem) {
      throw new Error("Operator '=' is not defined for Code = CodeSystem");
    }

    const rhsCodes = rhs instanceof ValueSet ? rhs.expand() : (rhs as Code[]);
    return rhsCodes.some(c => lhs.some(v => equals(c, v)));
  }
}
