import { Expression } from './expression';
import { resolveValueSet, typeIsArray } from '../util/util';
import { equals } from '../util/comparison';
import { Context } from '../runtime/context';
import { build } from './builder';
import { RetrieveDetails } from '../types/cql-patient.interfaces';
import { Code, CodeSystem, Concept, CQLValueSet, ValueSet } from '../datatypes/clinical';

export class Retrieve extends Expression {
  datatype: string;
  templateId?: string;
  codeProperty?: string;
  codeComparator?: 'in' | '~in' | 'contains' | '~contains' | '=' | '~';
  codes?: Expression | null;
  dateProperty?: string;
  dateRange?: Expression | null;
  valueSetProperty?: string;

  constructor(json: any) {
    super(json);
    this.datatype = json.dataType;
    this.templateId = json.templateId;
    this.codeProperty = json.codeProperty;
    this.codeComparator = json.codeComparator;
    this.codes = build(json.codes) as Expression;
    this.dateProperty = json.dateProperty;
    this.dateRange = build(json.dateRange) as Expression;
    this.valueSetProperty = json.valueSetProperty;
  }

  async exec(ctx: Context) {
    // Object with retrieve information to pass back to patient source
    // Always assign datatype. Assign the others only if present
    const retrieveDetails: RetrieveDetails = {
      datatype: this.datatype,
      ...(this.codeProperty ? { codeProperty: this.codeProperty } : {}),
      ...(this.codeComparator ? { codeComparator: this.codeComparator } : {}),
      ...(this.dateProperty ? { dateProperty: this.dateProperty } : {}),
      ...(this.valueSetProperty ? { valueSetProperty: this.valueSetProperty } : {})
    };

    if (this.codes) {
      const executedCodes = await this.codes.execute(ctx);

      if (executedCodes == null) {
        return [];
      }

      if (typeIsArray(executedCodes)) {
        retrieveDetails.codes = executedCodes as Code[];
      } else if (executedCodes instanceof CQLValueSet) {
        // retrieveDetails codes are expected to be expanded for external usage
        retrieveDetails.codes = await resolveValueSet(executedCodes, ctx);
      } else if (executedCodes instanceof Code || executedCodes instanceof Concept) {
        retrieveDetails.codes =
          executedCodes instanceof Concept ? executedCodes.codes : [executedCodes];
      } else {
        retrieveDetails.codes = executedCodes;
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
      const matches = await Promise.all(
        records.map((r: any) => this.recordMatchesCodesOrVS(r, retrieveDetails.codes, ctx))
      );
      records = records.filter((_r: any, i: number) => matches[i]);
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

  async recordMatchesCodesOrVS(record: any, codesToMatch: any, ctx: Context) {
    let recordCodeValue = record.getCode(this.codeProperty);

    if (recordCodeValue == null) {
      recordCodeValue = [];
    } else if (!Array.isArray(recordCodeValue)) {
      recordCodeValue = [recordCodeValue];
    }

    if (recordCodeValue.length > 0) {
      return this.codeMatchesCodesOrVS(recordCodeValue, codesToMatch);
    }

    if (this.valueSetProperty) {
      return await this.valueSetMatchesCodesOrVS(record, codesToMatch, ctx);
    }

    return false;
  }

  codeMatchesCodesOrVS(recordCodeValue: Array<any>, codesToMatch: any): boolean {
    const equivalence = this.codeComparator?.startsWith('~') ?? false;
    switch (this.codeComparator) {
      case 'in':
      case '~in':
        return this.in(recordCodeValue, codesToMatch, equivalence);

      case 'contains':
      case '~contains':
        // "The equivalent contains operator (~contains) was introduced as the formal converse of the equivalent in operator (~in)
        // (i.e. A ~in B will always result in the same value as B ~contains A)."
        // Note this refers to the standalone operators, not specifically the context of a Retrieve, but we'll maintain that here as well
        return this.in(codesToMatch, recordCodeValue, equivalence);

      case '~':
        return this.equivalent(recordCodeValue, codesToMatch);

      case '=':
        return this.equal(recordCodeValue, codesToMatch);

      default:
        // if there's a terminology filter, there should always be a comparator,
        // but just in case, default to "in"
        return this.in(recordCodeValue, codesToMatch, true);
    }
  }

  async valueSetMatchesCodesOrVS(record: any, codesToMatch: any, ctx: Context): Promise<boolean> {
    // "The valueSetProperty attribute optionally specifies which property of the model contains a value set identifier
    //  that can be used as an alternative mechanism for matching the value set of the retrieve, in the case when no code is specified in the source data."
    // Consider for example a QICore negation, https://hl7.org/fhir/us/qicore/STU7.0.2/negation.html#extent-of-negation
    // Negation of a single code in a MedicationAdministrationNotDone is medicationCodeableConcept.coding
    // Negation of a whole class in a MedicationAdministrationNotDone is medicationCodeableConcept.extension:codeOptions, whose value is a canonical(ValueSet)
    const recordVSIdentifier = record.get(this.valueSetProperty);
    if (!recordVSIdentifier) {
      return false;
    }

    const recordVSInstance = await this.getValueSet(recordVSIdentifier, ctx);
    switch (this.codeComparator) {
      case 'contains':
      case '~contains':
        // "The equivalent contains operator (~contains) was introduced as the formal converse of the equivalent in operator (~in)
        // (i.e. A ~in B will always result in the same value as B ~contains A)."
        // Note that "contains" here isn't well-defined since there's no `ValueSet contains` standalone operator to base it off.
        return this.in(codesToMatch, recordVSInstance, this.codeComparator.startsWith('~'));

      default:
        // TODO. Other operators don't necessarily make sense here. Throw an error for illegal combinations?

        // It's not obvious which operator/operand combinations should be allowed,
        // but if the RHS is a ValueSet, we can at least try to match it by identifier (not by content)
        return codesToMatch instanceof ValueSet && recordVSIdentifier === codesToMatch.oid;
    }
  }

  async getValueSet(identifier: string, ctx: Context) {
    let recordVSInstance = ctx.getValueSet(identifier, null);
    if (!recordVSInstance) {
      if (!ctx.codeService) {
        // TODO: throw error?
        return null;
      }

      recordVSInstance = await ctx.codeService.findValueSet(identifier);
      if (!recordVSInstance) {
        // TODO: throw error?
        return null;
      }
    }
    return recordVSInstance;
  }

  private in(lhs: Code[], rhs: any, equivalence: boolean = true) {
    if (rhs instanceof ValueSet || rhs instanceof CodeSystem) {
      // Note that hasMatch always uses equivalence semantics:
      // CQL 1.5 `in ValueSet` was defined with equivalence semantics, and preserved for backwards compatibility.
      // CQL 2.0 introduced `~in` and `~contains` which makes it more clear it uses equivalence semantics.
      // There is no equality-based terminology membership defined anywhere.
      return rhs.hasMatch(lhs);
    }
    // For code lists, fallback to the implementation in ~/= . See comments below.
    if (equivalence) {
      return this.equivalent(lhs, rhs);
    } else {
      return this.equal(lhs, rhs);
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
