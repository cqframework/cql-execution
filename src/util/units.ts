import * as ucum from '@lhncbc/ucum-lhc';
import { decimalAdjust } from './math';
const utils = ucum.UcumLhcUtils.getInstance();

// The CQL specification says that dates are based on the Gregorian calendar, so CQL-based year and month
// identifiers will be matched to the UCUM gregorian units. See http://unitsofmeasure.org/ucum.html#para-31
const CQL_TO_UCUM_DATE_UNITS = {
  years: 'a_g',
  year: 'a_g',
  months: 'mo_g',
  month: 'mo_g',
  weeks: 'wk',
  week: 'wk',
  days: 'd',
  day: 'd',
  hours: 'h',
  hour: 'h',
  minutes: 'min',
  minute: 'min',
  seconds: 's',
  second: 's',
  milliseconds: 'ms',
  millisecond: 'ms'
};

type CQLUnitKey = keyof typeof CQL_TO_UCUM_DATE_UNITS;

const UCUM_TO_CQL_DATE_UNITS = {
  a: 'year',
  a_j: 'year',
  a_g: 'year',
  mo: 'month',
  mo_j: 'month',
  mo_g: 'month',
  wk: 'week',
  d: 'day',
  h: 'hour',
  min: 'minute',
  s: 'second',
  ms: 'millisecond'
};

type UCUMUnitKey = keyof typeof UCUM_TO_CQL_DATE_UNITS;

// Cache Map<string, boolean> for unit validity results so we dont have to go to ucum-lhc for every check.
const unitValidityCache = new Map();

export function checkUnit(unit: any, allowEmptyUnits = true, allowCQLDateUnits = true) {
  if (allowEmptyUnits) {
    unit = fixEmptyUnit(unit);
  }
  if (allowCQLDateUnits) {
    unit = fixCQLDateUnit(unit);
  }
  if (!unitValidityCache.has(unit)) {
    const result = utils.validateUnitString(unit, true);
    if (result.status === 'valid') {
      unitValidityCache.set(unit, { valid: true });
    } else {
      let msg = `Invalid UCUM unit: '${unit}'.`;
      if (result.ucumCode != null) {
        msg += ` Did you mean '${result.ucumCode}'?`;
      }
      unitValidityCache.set(unit, { valid: false, message: msg });
    }
  }
  return unitValidityCache.get(unit);
}

export function convertUnit(fromVal: any, fromUnit: any, toUnit: any, adjustPrecision = true) {
  [fromUnit, toUnit] = [fromUnit, toUnit].map(fixUnit);
  const result = utils.convertUnitTo(fixUnit(fromUnit), fromVal, fixUnit(toUnit));
  if (result.status !== 'succeeded') {
    return;
  }
  return adjustPrecision ? decimalAdjust('round', result.toVal, -8) : result.toVal;
}

export function normalizeUnitsWhenPossible(val1: any, unit1: any, val2: any, unit2: any) {
  // If both units are CQL date units, return CQL date units
  const useCQLDateUnits = unit1 in CQL_TO_UCUM_DATE_UNITS && unit2 in CQL_TO_UCUM_DATE_UNITS;
  const resultConverter = (unit: any) => {
    return useCQLDateUnits ? convertToCQLDateUnit(unit) : unit;
  };

  [unit1, unit2] = [unit1, unit2].map(u => fixUnit(u) as CQLUnitKey);
  if (unit1 === unit2) {
    return [val1, unit1, val2, unit2];
  }
  const baseUnit1 = getBaseUnitAndPower(unit1)[0];
  const baseUnit2 = getBaseUnitAndPower(unit2)[0];
  const [newVal2, newUnit2] = convertToBaseUnit(val2, unit2, baseUnit1);
  if (newVal2 == null) {
    // it was not convertible, so just return the quantities as-is
    return [val1, resultConverter(unit1), val2, resultConverter(unit2)];
  }
  // If the new val2 > old val2, return since we prefer conversion to smaller units
  if (newVal2 >= val2) {
    return [val1, resultConverter(unit1), newVal2, resultConverter(newUnit2)];
  }
  // else it was a conversion to a larger unit, so go the other way around
  const [newVal1, newUnit1] = convertToBaseUnit(val1, unit1, baseUnit2);
  if (newVal1 == null) {
    // this should not happen since we established they are convertible, but just in case...
    return [val1, resultConverter(unit1), newVal2, resultConverter(newUnit2)];
  }
  return [newVal1, resultConverter(newUnit1), val2, resultConverter(unit2)];
}

export function convertToCQLDateUnit(unit: any) {
  let dateUnit;
  if (unit in CQL_TO_UCUM_DATE_UNITS) {
    // it's already a CQL unit, so return it as-is, removing trailing 's' if necessary (e.g., years -> year)
    dateUnit = unit.replace(/s$/, '');
  } else if (unit in UCUM_TO_CQL_DATE_UNITS) {
    dateUnit = UCUM_TO_CQL_DATE_UNITS[unit as UCUMUnitKey];
  }
  return dateUnit;
}

export function compareUnits(unit1: any, unit2: any) {
  try {
    const c = convertUnit(1, unit1, unit2);
    if (c && c > 1) {
      // unit1 is bigger (less precise)
      return 1;
    } else if (c && c < 1) {
      // unit1 is smaller
      return -1;
    }
    //units are the same
    return 0;
  } catch (e) {
    return null;
  }
}

export function getProductOfUnits(unit1: any, unit2: any): any {
  [unit1, unit2] = [unit1, unit2].map(fixEmptyUnit);
  if (!checkUnit(unit1).valid || !checkUnit(unit2).valid) {
    return null;
  }

  // If either unit contains a divisor,combine the numerators and denominators, then divide
  if (unit1.indexOf('/') >= 0 || unit2.indexOf('/') >= 0) {
    // NOTE: We're not trying to get perfection on unit simplification, but doing what is reasonable
    const match1 = unit1.match(/([^/]*)(\/(.*))?/);
    const match2 = unit2.match(/([^/]*)(\/(.*))?/);
    // In the previous regexes, numerator is match[1], denominator is match[3]
    const newNum = getProductOfUnits(match1[1], match2[1]);
    const newDen = getProductOfUnits(match1[3], match2[3]);
    return getQuotientOfUnits(newNum, newDen);
  }

  // Get all the individual units being combined, accounting for multipliers (e.g., 'm.L'),
  // and then group like base units to combine powers (and remove '1's since they are no-ops)
  // e.g., 'm.L' * 'm' ==> { m: 2, L: 1}; 'm.L' * '1' ==> { m: 1, L: 1 }; '1' : '1' ==> { }
  const factorPowerMap = new Map();
  const factors = [...unit1.split('.'), ...unit2.split('.')];
  factors.forEach(factor => {
    const [baseUnit, power] = getBaseUnitAndPower(factor);
    if (baseUnit === '1' || power === 0) {
      // skip factors that are 1 since 1 * N is N.
      return;
    }
    const accumulatedPower = (factorPowerMap.get(baseUnit) || 0) + power;
    factorPowerMap.set(baseUnit, accumulatedPower);
  });

  // Loop through the factor map, rebuilding each factor w/ combined power and join them all
  // back via the multiplier '.', treating a final '' (no non-1 units) as '1'
  // e.g.,  { m: 2, L: 1 } ==> 'm2.L'
  return fixUnit(
    Array.from(factorPowerMap.entries())
      .map(([base, power]) => `${base}${power > 1 ? power : ''}`)
      .join('.')
  );
}

export function getQuotientOfUnits(unit1: any, unit2: any) {
  [unit1, unit2] = [unit1, unit2].map(fixEmptyUnit);
  if (!checkUnit(unit1).valid || !checkUnit(unit2).valid) {
    return null;
  }

  // Try to simplify division when neither unit contains a divisor itself
  if (unit1.indexOf('/') === -1 && unit2.indexOf('/') === -1) {
    // Get all the individual units in numerator and denominator accounting for multipliers
    // (e.g., 'm.L'), and then group like base units to combine powers, inversing denominator
    // powers since they are being divided.
    // e.g., 'm3.L' / 'm' ==> { m: 2, L: -1}; 'm.L' / '1' ==> { m: 1, L: 1 }; '1' / '1' ==> { 1: 0 }
    const factorPowerMap = new Map();
    unit1.split('.').forEach((factor: any) => {
      const [baseUnit, power] = getBaseUnitAndPower(factor);
      const accumulatedPower = (factorPowerMap.get(baseUnit) || 0) + power;
      factorPowerMap.set(baseUnit, accumulatedPower);
    });
    unit2.split('.').forEach((factor: any) => {
      const [baseUnit, power] = getBaseUnitAndPower(factor);
      const accumulatedPower = (factorPowerMap.get(baseUnit) || 0) - power;
      factorPowerMap.set(baseUnit, accumulatedPower);
    });

    // Construct the numerator from factors with positive power, and denominator from factors
    // with negative power, filtering out base `1` and power 0 (which is also 1).
    // e.g. numerator:   { m: 2, L: -2 } ==> 'm2'; { 1: 1, L: -1 } => ''
    // e.g. denominator: { m: 2, L: -2 } ==> 'L2'; { 1: 1, L: -1 } => 'L'
    const numerator = Array.from(factorPowerMap.entries())
      .filter(([base, power]) => base !== '1' && power > 0)
      .map(([base, power]) => `${base}${power > 1 ? power : ''}`)
      .join('.');
    let denominator = Array.from(factorPowerMap.entries())
      .filter(([base, power]) => base !== '1' && power < 0)
      .map(([base, power]) => `${base}${power < -1 ? power * -1 : ''}`)
      .join('.');
    // wrap the denominator in parentheses if necessary
    denominator = /[.]/.test(denominator) ? `(${denominator})` : denominator;
    return fixUnit(`${numerator}${denominator !== '' ? '/' + denominator : ''}`);
  }

  // One of the units had a divisor, so don't try to be too smart; just construct it from the parts
  if (unit1 === unit2) {
    // e.g. 'm/g' / 'm/g' ==> '1'
    return '1';
  } else if (unit2 === '1') {
    // e.g., 'm/g' / '1' ==> 'm/g/'
    return unit1;
  } else {
    // denominator is unit2, wrapped in parentheses if necessary
    const denominator = /[./]/.test(unit2) ? `(${unit2})` : unit2;
    if (unit1 === '1') {
      // e.g., '1' / 'm' ==> '/m'; '1' / 'm.g' ==> '/(m.g)'
      return `/${denominator}`;
    }
    // e.g., 'L' / 'm' ==> 'L/m'; 'L' / 'm.g' ==> 'L/(m.g)'
    return `${unit1}/${denominator}`;
  }
}

// UNEXPORTED FUNCTIONS

function convertToBaseUnit(fromVal: any, fromUnit: any, toBaseUnit: any) {
  const fromPower = getBaseUnitAndPower(fromUnit)[1];
  const toUnit = fromPower === 1 ? toBaseUnit : `${toBaseUnit}${fromPower}`;
  const newVal = convertUnit(fromVal, fromUnit, toUnit);
  return newVal != null ? [newVal, toUnit] : [];
}

function getBaseUnitAndPower(unit: any) {
  // don't try to extract power from complex units (containing multipliers or divisors)
  if (/[./]/.test(unit)) {
    return [unit, 1];
  }
  unit = fixUnit(unit);
  let [term, power] = unit.match(/^(.*[^-\d])?([-]?\d*)$/).slice(1);
  if (term == null || term === '') {
    term = power;
    power = '1';
  } else if (power == null || power === '') {
    power = '1';
  }
  return [term, parseInt(power)];
}

function fixEmptyUnit(unit: any) {
  if (unit == null || (unit.trim && unit.trim() === '')) {
    return '1';
  }
  return unit;
}

function fixCQLDateUnit(unit: CQLUnitKey) {
  return CQL_TO_UCUM_DATE_UNITS[unit] || unit;
}

function fixUnit(unit: any) {
  return fixCQLDateUnit(fixEmptyUnit(unit));
}
