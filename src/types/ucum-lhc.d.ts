// Types are incomplete; just utilized functions are included
// No existing type defs were found in the DefinitelyTyped repo
// Structures created based on JSDoc comments here: https://github.com/lhncbc/ucum-lhc/blob/master/source-cjs/ucumLhcUtils.js
declare module '@lhncbc/ucum-lhc' {
  export interface Unit {
    code: string;
    name: string;
    guidance: string;
  }

  export interface ValidationSuggestion {
    msg: string;
    invalidUnit: string;
    units: Unit[];
  }

  export interface ConversionSuggestion {
    from?: ValidationSuggestion[];
    to?: ValidationSuggestion[];
  }

  export interface ValidationResponse {
    status: 'valid' | 'invalid' | 'error';
    ucumCode: string | null;
    msg: string[];
    unit: Unit | null;
    suggestions?: ValidationSuggestion[];
  }

  export interface ConversionResponse {
    status: 'succeeded' | 'failed' | 'error';
    toVal: string;
    msg: string[];
    suggestions?: ConversionSuggestion[];
    fromUnit: Unit;
    toUnit: Unit;
  }

  export class UcumLhcUtils {
    static getInstance(): UcumLhcUtils;
    validateUnitString(uStr: string, suggest?: boolean, valConv?: string): ValidationResponse;
    convertUnitTo(fromUnitCode: string, fromVal: number, toUnitCode: string): ConversionResponse;
  }
}
