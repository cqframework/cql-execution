// Types are incomplete; just utilized functions are included
// No existing type defs were found in the DefinitelyTyped repo
// Structures created based on JSDoc comments here: https://github.com/lhncbc/ucum-lhc/blob/master/source-cjs/ucumLhcUtils.js
declare module '@lhncbc/ucum-lhc' {
  export interface Unit {
    code: string;
    name: string;
    guidance: string;
    csCode_: string;
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
    toVal: number;
    msg: string[];
    suggestions?: ConversionSuggestion[];
    fromUnit: Unit;
    toUnit: Unit;
  }

  export interface BaseUnitConversionResponse {
    status: 'succeeded' | 'invalid' | 'failed' | 'error';
    msg: string[];
    magnitude: number;
    fromUnitIsSpecial?: boolean;
    unitToExp: object; // a map of base units in fromUnit to their exponent
  }

  export class UcumLhcUtils {
    static getInstance(): UcumLhcUtils;
    validateUnitString(uStr: string, suggest?: boolean, valConv?: string): ValidationResponse;
    convertUnitTo(fromUnitCode: string, fromVal: number, toUnitCode: string): ConversionResponse;
    commensurablesList(fromName: string): [Unit[] | null, string[]];
    convertToBaseUnits(fromUnit: string, fromVal: number): BaseUnitConversionResponse;
  }
}
