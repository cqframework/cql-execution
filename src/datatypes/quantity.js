/* eslint-disable
    no-prototype-builtins,
    no-useless-escape,
*/
// TODO: This file was created by bulk-decaffeinate.
// Fix any style issues and re-enable lint.
/*
 * decaffeinate suggestions:
 * DS101: Remove unnecessary use of Array.from
 * DS102: Remove unnecessary code created because of implicit returns
 * DS206: Consider reworking classes to avoid initClass
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
let Quantity;
const { decimalAdjust, isValidDecimal, overflowsOrUnderflows } = require('../util/math');
const ucum = require('ucum');

module.exports.Quantity = (Quantity = (function() {
  Quantity = class Quantity {
    static initClass() {
      // Define a simple getter to allow type-checking of this class without instanceof
      // and in a way that survives minification (as opposed to checking constructor.name)
      Object.defineProperties(this.prototype, {
        isQuantity: {
          get() { return true; }
        }
      }
      );
    }

    constructor(value, unit) {
      this.value = value;
      this.unit = unit;
      if ((this.value == null) || isNaN(this.value)) {
        throw new Error('Cannot create a quantity with an undefined value');
      } else {
        if (!isValidDecimal(this.value)) {
          throw new Error('Cannot create a quantity with an invalid decimal value');
        }
      }

      // Attempt to parse the unit with UCUM. If it fails, throw a friendly error.
      if ((this.unit != null) && !is_valid_ucum_unit(this.unit)) {
        throw new Error(`\'${this.unit}\' is not a valid UCUM unit.`);
      }
    }

    clone() {
      return new Quantity(this.value, this.unit);
    }

    toString() {
      return `${this.value} '${this.unit}'`;
    }

    sameOrBefore(other) {
      if (other != null ? other.isQuantity : undefined) {
        const other_v = convert_value(other.value,ucum_unit(other.unit),ucum_unit(this.unit));
        if((other_v == null)) {
          return null;
        } else {
          return this.value <= other_v;
        }
      }
    }

    sameOrAfter(other) {
      if (other != null ? other.isQuantity : undefined) {
        const other_v = convert_value(other.value,ucum_unit(other.unit),ucum_unit(this.unit));
        if((other_v == null)) {
          return null;
        } else {
          return this.value >= other_v;
        }
      }
    }

    after(other) {
      if (other != null ? other.isQuantity : undefined) {
        const other_v = convert_value(other.value,ucum_unit(other.unit),ucum_unit(this.unit));
        if((other_v == null)) {
          return null;
        } else {
          return this.value > other_v;
        }
      }
    }

    before(other) {
      if (other != null ? other.isQuantity : undefined) {
        const other_v = convert_value(other.value,ucum_unit(other.unit),ucum_unit(this.unit));
        if((other_v == null)) {
          return null;
        } else {
          return this.value < other_v;
        }
      }
    }

    equals(other) {
      if (other != null ? other.isQuantity : undefined) {
        if ((!this.unit && other.unit ) || (this.unit && !other.unit)) {
          return false;
        } else if (!this.unit && !other.unit) {
          return this.value === other.value;
        } else {
          const other_v = convert_value(other.value,ucum_unit(other.unit),ucum_unit(this.unit));
          if((other_v == null)) {
            return null;
          } else {
            return decimalAdjust('round', this.value, -8)  === decimalAdjust('round', other_v, -8);
          }
        }
      }
    }

    convertUnit(to_unit) {
      const value = convert_value(this.value, this.unit, to_unit);
      const unit = to_unit;
      // Need to pass through constructor again to catch invalid units
      return new Quantity(value, unit);
    }

    dividedBy(other) {
      return this.multiplyDivide(other,'/');
    }

    multiplyBy(other) {
      return this.multiplyDivide(other,'.'); // in ucum . represents multiplication
    }

    multiplyDivide(other, operator) {
      if (other != null ? other.isQuantity : undefined) {
        const a = (this.unit != null) ? this : new Quantity(this.value, '1');
        const b = (other.unit != null) ? other : new Quantity(other.value, {unit: '1'});
        const can_val = a.to_ucum();
        const other_can_value = b.to_ucum();
        const ucum_value = ucum_multiply(can_val,[[operator,other_can_value]]);
        if (overflowsOrUnderflows(ucum_value.value)) { return null; }
        try {
          return new Quantity(ucum_value.value, units_to_string(ucum_value.units));
        } catch (error) {
          return null;
        }
      } else {
        const value = operator === '/' ? this.value / other  : this.value * other;
        if (overflowsOrUnderflows(value)) { return null; }
        try {
          return new Quantity(decimalAdjust('round',value,-8), coalesceToOne(this.unit));
        } catch (error1) {
          return null;
        }
      }
    }

    to_ucum() {
      const u = ucum.parse(ucum_unit(this.unit));
      u.value *= this.value;
      return u;
    }
  };
  Quantity.initClass();
  return Quantity;
})());

const clean_unit = function(units) {
  if (ucum_time_units[units]) { return ucum_to_cql_units[ucum_time_units[units]]; } else { return units; }
};

// Hash of time units and their UCUM equivalents, both case-sensitive and case-insensitive
// See http://unitsofmeasure.org/ucum.html#para-31
// The CQL specification says that dates are based on the Gregorian calendar
// UCUM says that years should be Julian. As a result, CQL-based year and month identifiers will
// be matched to the UCUM gregorian units. UCUM-based year and month identifiers will be matched
// to the UCUM julian units.
var ucum_time_units = {'years': 'a_g', 'year': 'a_g', 'YEARS': 'a_g', 'YEAR': 'a_g', 'a_g': 'a_g'
  , 'a': 'a_j', 'ANN': 'a_j', 'ann': 'a_j', 'A': 'a_j', 'a_j': 'a_j'
  , 'months': 'mo_g', 'month':'mo_g', 'mo_g': 'mo_g'
  , 'mo': 'mo_j', 'MO': 'mo_j', 'mo_j': 'mo_j'
  , 'weeks': 'wk', 'week': 'wk', 'wk': 'wk', 'WK': 'wk'
  , 'days': 'd', 'day':'d', 'd': 'd', 'D': 'd'
  , 'hours': 'h', 'hour': 'h', 'h': 'h', 'H': 'h'
  , 'minutes': 'min', 'minute': 'min', 'min': 'min', 'MIN': 'min'
  , 'seconds':'s', 'second':'s', 's': 's', 'S': 's'
  , 'milliseconds' : 'ms', 'millisecond' : 'ms', 'ms': 'ms', 'MS': 'ms'
};

var ucum_to_cql_units = {
  'a_j':  'year'
  , 'a_g':  'year'
  , 'mo_j': 'month'
  , 'mo_g': 'month'
  , 'wk':   'week'
  , 'd':    'day'
  , 'h':    'hour'
  , 'min':  'minute'
  , 's':    'second'
  , 'ms':   'millisecond'
};
// this is used to perform any conversions of CQL date time fields to their ucum equivalents
var ucum_unit = unit => ucum_time_units[unit] || unit || '';

// just a wrapper function to deal with possible exceptions being thrown
var convert_value = function(value, from, to) {
  try {
    if (from === to) {
      return value;
    } else {
      return decimalAdjust('round', ucum.convert(value,ucum_unit(from),ucum_unit(to)), -8);
    }
  // If the units could not be alignied ie: incompareable, exception will be thrown, return null
  } catch (e) {
    return null;
  }
};

// Cache for unit validity results so we dont have to go to ucum.js for every check.
// Is a map of unit string to boolean validity
const unitValidityCache = {};

// Helper for checking if a unit is valid. Checks the cache first, checks with ucum.js otherwise.
var is_valid_ucum_unit = function(unit) {
  if (unitValidityCache.hasOwnProperty(unit)) {
    return unitValidityCache[unit];
  } else {
    try {
      ucum.parse(ucum_unit(unit));
      unitValidityCache[unit] = true;
      return true;
    } catch (error) {
      unitValidityCache[unit] = false;
      return false;
    }
  }
};

module.exports.convert_value = convert_value;
// This method will take a ucum.js representation of units and convert them to a string
// ucum.js units are a has of unit => power values.  For instance m/h (meters per hour) in
// ucum.js will be reprsented by the json object {m: 1, h:-1}  negative values are inverted and
// are akin to denominator values in a fraction.  Positive values are somewhat a kin to numerator
// values in that they preceed the inverted values.  It is possible in ucum to have multiple non inverted
// or inverted values.  This method combines all of the non inverted values and appends them with
// the ucum multiplication operator '.' and then appends the inverted values separated by the ucum
// divisor '/' .
var units_to_string = function(units = {}) {
  const numer = [];
  const denom = [];
  for (let key of Object.keys(units)) {
    const v = units[key];
    const pow = Math.abs(v);
    const str = pow === 1 ? key  : key + pow;
    if (v < 0) { denom.push(str); } else { numer.push(str); }
  }
  let unit_string = '';
  unit_string += numer.join('.');
  if (denom.length > 0) {
    unit_string += '/' + denom.join('/');
  }
  if (unit_string === '') { return '1'; } else { return unit_string; }
};


// this method is taken from the ucum.js library which it does not  export
// so we need to replicate the behavior here in order to perform multiplication
// and division of the ucum values.
// t:  the ucum quantity being multiplied/divided .  This method modifies the object t that is passed in
// ms: an array of arrays whoes format is [<operator>,<ucum quantity>] an example would be [['.', {value: 1, units: {m:2}}]]
// this would represent multiply t by the value m^2
var ucum_multiply = function(t, ms=[]) {
  if (ms.length === 0) { return t; }
  const ret = t;
  for (let mterm of ms) {
    const sign = mterm[0] === '.' ? 1 : -1;
    const b = mterm[1];
    ret.value *= Math.pow(b.value,sign);
    for (let k in b.units) {
      const v = b.units[k];
      ret.units[k] = ret.units[k] || 0;
      ret.units[k] = ret.units[k] + (sign*v);
      if (ret.units[k] === 0) {
        delete ret.units[k];
      }
    }
  }
  return ret;
};

module.exports.parseQuantity = function(str) {
  const components = /([+|-]?\d+\.?\d*)\s*('(.+)')?/.exec(str);
  if ((components != null) && (components[1] != null)) {
    let unit;
    const value = parseFloat(components[1]);
    if (!isValidDecimal(value)) { return null; }
    if (components[3] != null) {
      unit = components[3].trim();
    } else {
      unit = '';
    }
    return new Quantity(value, unit);
  } else {
    return null;
  }
};

const doScaledAddition = function(a,b,scaleForB) {
  let b_unit;
  if ((a != null ? a.isQuantity : undefined) && (b != null ? b.isQuantity : undefined)) {
    let a_unit;
    [a_unit, b_unit] = Array.from([coalesceToOne(a.unit), coalesceToOne(b.unit)]);
    // The units don't have to match (m and m^2), but must be convertable
    // we will choose the unit of a to be the unit we return
    const val = convert_value(b.value * scaleForB, b_unit, a_unit);
    if (val == null) { return null; }
    const sum = a.value + val;
    if (overflowsOrUnderflows(sum)) { return null; } else { return new Quantity(sum, a_unit); }
  } else if (a.copy && a.add) {
    b_unit = (b != null ? b.isQuantity : undefined) ? coalesceToOne(b.unit) : b.unit;
    return a.copy().add(b.value * scaleForB, clean_unit(b_unit));
  } else {
    throw new Error('Unsupported argument types.');
  }
};

module.exports.doAddition = (a, b) => doScaledAddition(a,b,1);

module.exports.doSubtraction = (a, b) => doScaledAddition(a,b,-1);

module.exports.doDivision = function(a,b) {
  if (a != null ? a.isQuantity : undefined) {
    return a.dividedBy(b);
  }
};

module.exports.doMultiplication = function(a,b) {
  if ((a != null ? a.isQuantity : undefined)) { return a.multiplyBy(b); } else { return b.multiplyBy(a); }
};

var coalesceToOne = function(o) {
  if ((o == null) || ((o.trim != null) && !o.trim())) { return '1'; } else { return o; }
};

module.exports.compare_units = function(unit_a, unit_b) {
  try {
    const c = ucum.convert(1,ucum_unit(unit_a),ucum_unit(unit_b));
    if (c > 1) { return 1; } // unit_a is bigger (less precise)
    if (c < 1) { return -1; } // unit_a is smaller
    return 0;  //units are the same
  } catch (e) {
    return null;
  }
};
