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
        return this.equal(recordCodeValue, codes);

      default:
        // if there's a terminology filter, there should always be a comparator,
        // but just in case, default to "in"
        return this.in(recordCodeValue, codes);
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
      // It's not obvious that code ~ ValueSet and code ~ Code[] should be allowed,
      // when code ~ CodeSystem is disallowed. Same for operator = below.
      // In short, due to various translator behaviors, when `rhs` here is Code[],
      // it's possible it was originally written in the CQL as a Code, a List<Code>, or a ValueSet.
      // We can't distinguish, so we have to allow all of them.
      // Then, again because of translator behaviors, x ~ ValueSet could reach this point
      // with `rhs` either being a Code[] or a ValueSet object.
      // Because we can't filter it out in the Code[] path, we should allow it in the ValueSet path as well
      // to reduce unexpected inconsistencies.
      // See full description and discussion at https://github.com/cqframework/cql-execution/pull/370
      return rhs.hasMatch(lhs);
    } else if (Array.isArray(rhs)) {
      // As noted above, there's no way to tell if the original CQL referred to a single code or to a list.
      // So, we treat the operators ~ and = to mean
      // "some match exists between the LHS and RHS, with the appropriate operator"
      // instead of the usual meaning
      // "the LHS and RHS themselves are a match, with the appropriate operator"
      return (rhs as Code[]).some(c => c.hasMatch(lhs));
    } else {
      // Unexpected, but just in case a single code came through
      return (rhs as Code).hasMatch(lhs);
    }
  }

  private equal(lhs: Code[], rhs: any) {
    if (rhs instanceof CodeSystem) {
      throw new Error("Operator '=' is not defined for Code = CodeSystem");
    }

    let rhsCodes: Code[];

    if (rhs instanceof ValueSet) {
      rhsCodes = rhs.expand();
    } else if (Array.isArray(rhs)) {
      rhsCodes = rhs as Code[];
    } else {
      // unexpected, but just in case a single code came through
      rhsCodes = [rhs];
    }

    return rhsCodes.some(c => lhs.some(v => equals(c, v)));
  }
}
