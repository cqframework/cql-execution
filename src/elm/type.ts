import { Context } from '../runtime/context';

import { Expression, UnimplementedExpression } from './expression';
import { DateTime, Date } from '../datatypes/datetime';
import { Concept } from '../datatypes/clinical';
import { Quantity, parseQuantity } from '../datatypes/quantity';
import { isValidDecimal, isValidInteger, limitDecimalPrecision } from '../util/math';
import { normalizeMillisecondsField } from '../util/util';
import { Ratio } from '../datatypes/ratio';
import { Uncertainty } from '../datatypes/uncertainty';

// TODO: Casting and Conversion needs unit tests!

export class As extends Expression {
  asTypeSpecifier: any;
  strict: boolean;

  constructor(json: any) {
    super(json);
    if (json.asTypeSpecifier) {
      this.asTypeSpecifier = json.asTypeSpecifier;
    } else if (json.asType) {
      // convert it to a NamedTypedSpecifier
      this.asTypeSpecifier = {
        name: json.asType,
        type: 'NamedTypeSpecifier'
      };
    }
    this.strict = json.strict != null ? json.strict : false;
  }

  exec(ctx: Context) {
    const arg = this.execArgs(ctx);
    // If it is null, return null
    if (arg == null) {
      return null;
    }
    if (ctx.matchesTypeSpecifier(arg, this.asTypeSpecifier)) {
      // TODO: request patient source to change type identification
      return arg;
    } else if (this.strict) {
      const argTypeString = specifierToString(guessSpecifierType(arg));
      const asTypeString = specifierToString(this.asTypeSpecifier);
      throw new Error(`Cannot cast ${argTypeString} as ${asTypeString}`);
    } else {
      return null;
    }
  }
}

export class ToBoolean extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
    const arg = this.execArgs(ctx);
    if (arg != null) {
      const strArg = arg.toString().toLowerCase();
      if (['true', 't', 'yes', 'y', '1'].includes(strArg)) {
        return true;
      } else if (['false', 'f', 'no', 'n', '0'].includes(strArg)) {
        return false;
      }
    }
    return null;
  }
}

export class ToConcept extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
    const arg = this.execArgs(ctx);
    if (arg != null) {
      return new Concept([arg], arg.display);
    } else {
      return null;
    }
  }
}

export class ToDate extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
    const arg = this.execArgs(ctx);
    if (arg == null) {
      return null;
    } else if (arg.isDateTime) {
      return arg.getDate();
    } else {
      return Date.parse(arg.toString());
    }
  }
}

export class ToDateTime extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
    const arg = this.execArgs(ctx);
    if (arg == null) {
      return null;
    } else if (arg.isDate) {
      return arg.getDateTime();
    } else {
      return DateTime.parse(arg.toString());
    }
  }
}

export class ToDecimal extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
    const arg = this.execArgs(ctx);
    if (arg != null) {
      if (arg.isUncertainty) {
        const low = limitDecimalPrecision(parseFloat(arg.low.toString()));
        const high = limitDecimalPrecision(parseFloat(arg.high.toString()));
        return new Uncertainty(low, high);
      } else {
        const decimal = limitDecimalPrecision(parseFloat(arg.toString()));
        if (isValidDecimal(decimal)) {
          return decimal;
        }
      }
    }
    return null;
  }
}

export class ToInteger extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
    const arg = this.execArgs(ctx);
    if (typeof arg === 'string') {
      const integer = parseInt(arg);
      if (isValidInteger(integer)) {
        return integer;
      }
    } else if (typeof arg === 'boolean') {
      return arg ? 1 : 0;
    }
    return null;
  }
}

export class ToQuantity extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
    return this.convertValue(this.execArgs(ctx));
  }

  convertValue(val: any): any {
    if (val == null) {
      return null;
    } else if (typeof val === 'number') {
      return new Quantity(val, '1');
    } else if (val.isRatio) {
      // numerator and denominator are guaranteed non-null
      return val.numerator.dividedBy(val.denominator);
    } else if (val.isUncertainty) {
      return new Uncertainty(this.convertValue(val.low), this.convertValue(val.high));
    } else {
      // it's a string or something else we'll try to parse as a string
      return parseQuantity(val.toString());
    }
  }
}

export class ToRatio extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
    const arg = this.execArgs(ctx);
    if (arg != null) {
      // Argument will be of form '<quantity>:<quantity>'
      let denominator, numerator;
      try {
        // String will be split into an array. Numerator will be at index 1, Denominator will be at index 4
        const splitRatioString = arg
          .toString()
          .match(/^(\d+(\.\d+)?\s*('.+')?)\s*:\s*(\d+(\.\d+)?\s*('.+')?)$/);
        if (splitRatioString == null) {
          return null;
        }
        numerator = parseQuantity(splitRatioString[1]);
        denominator = parseQuantity(splitRatioString[4]);
      } catch (error) {
        // If the input string is not formatted correctly, or cannot be
        // interpreted as a valid Quantity value, the result is null.
        return null;
      }
      // The value element of a Quantity must be present.
      if (numerator == null || denominator == null) {
        return null;
      }
      return new Ratio(numerator, denominator);
    } else {
      return null;
    }
  }
}

export class ToString extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
    const arg = this.execArgs(ctx);
    if (arg != null) {
      return arg.toString();
    } else {
      return null;
    }
  }
}

export class ToTime extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
    const arg = this.execArgs(ctx);
    if (arg != null) {
      const timeString = arg.toString();
      // Return null if string doesn't represent a valid ISO-8601 Time
      // hh:mm:ss.fff or hh:mm:ss.fff
      const matches = /^T?((\d{2})(:(\d{2})(:(\d{2})(\.(\d+))?)?)?)?(Z|(([+-])(\d{2})(:?(\d{2}))?))?$/.exec(
        timeString
      );
      if (matches == null) {
        return null;
      }
      let hours: any = matches[2];
      let minutes: any = matches[4];
      let seconds: any = matches[6];
      // Validate h/m/s if they exist, but allow null
      if (hours != null) {
        if (hours < 0 || hours > 23) {
          return null;
        }
        hours = parseInt(hours, 10);
      }
      if (minutes != null) {
        if (minutes < 0 || minutes > 59) {
          return null;
        }
        minutes = parseInt(minutes, 10);
      }
      if (seconds != null) {
        if (seconds < 0 || seconds > 59) {
          return null;
        }
        seconds = parseInt(seconds, 10);
      }
      let milliseconds: any = matches[8];
      if (milliseconds != null) {
        milliseconds = parseInt(normalizeMillisecondsField(milliseconds));
      }

      // Time is implemented as Datetime with year 0, month 1, day 1 and null timezoneOffset
      return new DateTime(0, 1, 1, hours, minutes, seconds, milliseconds, null);
    } else {
      return null;
    }
  }
}

export class Convert extends Expression {
  operand: any;
  toType: any;

  constructor(json: any) {
    super(json);
    this.operand = json.operand;
    this.toType = json.toType;
  }

  exec(ctx: Context) {
    switch (this.toType) {
      case '{urn:hl7-org:elm-types:r1}Boolean':
        return new ToBoolean({ type: 'ToBoolean', operand: this.operand }).execute(ctx);
      case '{urn:hl7-org:elm-types:r1}Concept':
        return new ToConcept({ type: 'ToConcept', operand: this.operand }).execute(ctx);
      case '{urn:hl7-org:elm-types:r1}Decimal':
        return new ToDecimal({ type: 'ToDecimal', operand: this.operand }).execute(ctx);
      case '{urn:hl7-org:elm-types:r1}Integer':
        return new ToInteger({ type: 'ToInteger', operand: this.operand }).execute(ctx);
      case '{urn:hl7-org:elm-types:r1}String':
        return new ToString({ type: 'ToString', operand: this.operand }).execute(ctx);
      case '{urn:hl7-org:elm-types:r1}Quantity':
        return new ToQuantity({ type: 'ToQuantity', operand: this.operand }).execute(ctx);
      case '{urn:hl7-org:elm-types:r1}DateTime':
        return new ToDateTime({ type: 'ToDateTime', operand: this.operand }).execute(ctx);
      case '{urn:hl7-org:elm-types:r1}Date':
        return new ToDate({ type: 'ToDate', operand: this.operand }).execute(ctx);
      case '{urn:hl7-org:elm-types:r1}Time':
        return new ToTime({ type: 'ToTime', operand: this.operand }).execute(ctx);
      default:
        return this.execArgs(ctx);
    }
  }
}

export class ConvertsToBoolean extends Expression {
  operand: any;

  constructor(json: any) {
    super(json);
    this.operand = json.operand;
  }

  exec(ctx: Context) {
    const operatorValue = this.execArgs(ctx);
    if (operatorValue === null) {
      return null;
    } else {
      return canConvertToType(ToBoolean, this.operand, ctx);
    }
  }
}

export class ConvertsToDate extends Expression {
  operand: any;

  constructor(json: any) {
    super(json);
    this.operand = json.operand;
  }

  exec(ctx: Context) {
    const operatorValue = this.execArgs(ctx);
    if (operatorValue === null) {
      return null;
    } else {
      return canConvertToType(ToDate, this.operand, ctx);
    }
  }
}

export class ConvertsToDateTime extends Expression {
  operand: any;

  constructor(json: any) {
    super(json);
    this.operand = json.operand;
  }

  exec(ctx: Context) {
    const operatorValue = this.execArgs(ctx);
    if (operatorValue === null) {
      return null;
    } else {
      return canConvertToType(ToDateTime, this.operand, ctx);
    }
  }
}

export class ConvertsToDecimal extends Expression {
  operand: any;

  constructor(json: any) {
    super(json);
    this.operand = json.operand;
  }

  exec(ctx: Context) {
    const operatorValue = this.execArgs(ctx);
    if (operatorValue === null) {
      return null;
    } else {
      return canConvertToType(ToDecimal, this.operand, ctx);
    }
  }
}

export class ConvertsToInteger extends Expression {
  operand: any;

  constructor(json: any) {
    super(json);
    this.operand = json.operand;
  }

  exec(ctx: Context) {
    const operatorValue = this.execArgs(ctx);
    if (operatorValue === null) {
      return null;
    } else {
      return canConvertToType(ToInteger, this.operand, ctx);
    }
  }
}

export class ConvertsToQuantity extends Expression {
  operand: any;

  constructor(json: any) {
    super(json);
    this.operand = json.operand;
  }

  exec(ctx: Context) {
    const operatorValue = this.execArgs(ctx);
    if (operatorValue === null) {
      return null;
    } else {
      return canConvertToType(ToQuantity, this.operand, ctx);
    }
  }
}

export class ConvertsToRatio extends Expression {
  operand: any;

  constructor(json: any) {
    super(json);
    this.operand = json.operand;
  }

  exec(ctx: Context) {
    const operatorValue = this.execArgs(ctx);
    if (operatorValue === null) {
      return null;
    } else {
      return canConvertToType(ToRatio, this.operand, ctx);
    }
  }
}

export class ConvertsToString extends Expression {
  operand: any;

  constructor(json: any) {
    super(json);
    this.operand = json.operand;
  }

  exec(ctx: Context) {
    const operatorValue = this.execArgs(ctx);
    if (operatorValue === null) {
      return null;
    } else {
      return canConvertToType(ToString, this.operand, ctx);
    }
  }
}

export class ConvertsToTime extends Expression {
  operand: any;

  constructor(json: any) {
    super(json);
    this.operand = json.operand;
  }

  exec(ctx: Context) {
    const operatorValue = this.execArgs(ctx);
    if (operatorValue === null) {
      return null;
    } else {
      return canConvertToType(ToTime, this.operand, ctx);
    }
  }
}

function canConvertToType(toFunction: any, operand: any, ctx: Context) {
  try {
    const value = new toFunction({ type: toFunction.name, operand: operand }).execute(ctx);
    if (value != null) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}

export class ConvertQuantity extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
    const [quantity, newUnit] = this.execArgs(ctx);

    if (quantity != null && newUnit != null) {
      try {
        return quantity.convertUnit(newUnit);
      } catch (error) {
        // Cannot convert input to target unit, spec says to return null
        return null;
      }
    }
  }
}

export class CanConvertQuantity extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
    const [quantity, newUnit] = this.execArgs(ctx);

    if (quantity != null && newUnit != null) {
      try {
        quantity.convertUnit(newUnit);
        return true;
      } catch (error) {
        return false;
      }
    }
    return null;
  }
}

export class Is extends Expression {
  isTypeSpecifier: any;

  constructor(json: any) {
    super(json);
    if (json.isTypeSpecifier) {
      this.isTypeSpecifier = json.isTypeSpecifier;
    } else if (json.isType) {
      // Convert it to a NamedTypeSpecifier
      this.isTypeSpecifier = {
        name: json.isType,
        type: 'NamedTypeSpecifier'
      };
    }
  }

  exec(ctx: Context) {
    const arg = this.execArgs(ctx);
    if (arg === null) {
      return false;
    }
    if (typeof arg._is !== 'function' && !isSystemType(this.isTypeSpecifier)) {
      // We need an _is implementation in order to check non System types
      throw new Error(`Patient Source does not support Is operation for localId: ${this.localId}`);
    }
    return ctx.matchesTypeSpecifier(arg, this.isTypeSpecifier);
  }
}

function isSystemType(spec: any): any {
  switch (spec.type) {
    case 'NamedTypeSpecifier':
      return spec.name.startsWith('{urn:hl7-org:elm-types:r1}');
    case 'ListTypeSpecifier':
      return isSystemType(spec.elementType);
    case 'TupleTypeSpecifier':
      return spec.element.every((e: any) => isSystemType(e.elementType));
    case 'IntervalTypeSpecifier':
      return isSystemType(spec.pointType);
    case 'ChoiceTypeSpecifier':
      return spec.choice.every((c: any) => isSystemType(c));
    default:
      return false;
  }
}

function specifierToString(spec: any): any {
  if (typeof spec === 'string') {
    return spec;
  } else if (spec == null || spec.type == null) {
    return '';
  }
  switch (spec.type) {
    case 'NamedTypeSpecifier':
      return spec.name;
    case 'ListTypeSpecifier':
      return `List<${specifierToString(spec.elementType)}>`;
    case 'TupleTypeSpecifier':
      return `Tuple<${spec.element
        .map((e: any) => `${e.name} ${specifierToString(e.elementType)}`)
        .join(', ')}>`;
    case 'IntervalTypeSpecifier':
      return `Interval<${specifierToString(spec.pointType)}>`;
    case 'ChoiceTypeSpecifier':
      return `Choice<${spec.choice.map((c: any) => specifierToString(c)).join(', ')}>`;
    default:
      return JSON.stringify(spec);
  }
}

function guessSpecifierType(val: any): any {
  if (val == null) {
    return 'Null';
  }
  const typeHierarchy = typeof val._typeHierarchy === 'function' && val._typeHierarchy();
  if (typeHierarchy && typeHierarchy.length > 0) {
    return typeHierarchy[0];
  } else if (typeof val === 'boolean') {
    return { type: 'NamedTypeSpecifier', name: '{urn:hl7-org:elm-types:r1}Boolean' };
  } else if (typeof val === 'number' && Math.floor(val) === val) {
    // it could still be a decimal, but we have to just take our best guess!
    return { type: 'NamedTypeSpecifier', name: '{urn:hl7-org:elm-types:r1}Integer' };
  } else if (typeof val === 'number') {
    return { type: 'NamedTypeSpecifier', name: '{urn:hl7-org:elm-types:r1}Decimal' };
  } else if (typeof val === 'string') {
    return { type: 'NamedTypeSpecifier', name: '{urn:hl7-org:elm-types:r1}String' };
  } else if (val.isConcept) {
    return { type: 'NamedTypeSpecifier', name: '{urn:hl7-org:elm-types:r1}Concept' };
  } else if (val.isCode) {
    return { type: 'NamedTypeSpecifier', name: '{urn:hl7-org:elm-types:r1}Code' };
  } else if (val.isDate) {
    return { type: 'NamedTypeSpecifier', name: '{urn:hl7-org:elm-types:r1}Date' };
  } else if (val.isTime && val.isTime()) {
    return { type: 'NamedTypeSpecifier', name: '{urn:hl7-org:elm-types:r1}Time' };
  } else if (val.isDateTime) {
    return { type: 'NamedTypeSpecifier', name: '{urn:hl7-org:elm-types:r1}DateTime' };
  } else if (val.isQuantity) {
    return { type: 'NamedTypeSpecifier', name: '{urn:hl7-org:elm-types:r1}DateTime' };
  } else if (Array.isArray(val)) {
    // Get unique types from the array (by converting to string and putting in a Set)
    const typesAsStrings = Array.from(new Set(val.map(v => JSON.stringify(guessSpecifierType(v)))));
    const types = typesAsStrings.map(ts => (/^{/.test(ts) ? JSON.parse(ts) : ts));
    return {
      type: 'ListTypeSpecifier',
      elementType: types.length == 1 ? types[0] : { type: 'ChoiceTypeSpecifier', choice: types }
    };
  } else if (val.isInterval) {
    return {
      type: 'IntervalTypeSpecifier',
      pointType: val.pointType
    };
  } else if (typeof val === 'object' && Object.keys(val).length > 0) {
    return {
      type: 'TupleTypeSpecifier',
      element: Object.keys(val).map(k => ({ name: k, elementType: guessSpecifierType(val[k]) }))
    };
  }
  return 'Unknown';
}

export class IntervalTypeSpecifier extends UnimplementedExpression {}
export class ListTypeSpecifier extends UnimplementedExpression {}
export class NamedTypeSpecifier extends UnimplementedExpression {}
export class TupleTypeSpecifier extends UnimplementedExpression {}
