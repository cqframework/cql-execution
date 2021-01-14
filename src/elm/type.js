const { Expression, UnimplementedExpression } = require('./expression');
const { DateTime, Date } = require('../datatypes/datetime');
const { Concept } = require('../datatypes/clinical');
const { parseQuantity } = require('../datatypes/quantity');
const { isValidDecimal, isValidInteger, limitDecimalPrecision } = require('../util/math');
const { normalizeMillisecondsField } = require('../util/util');
const { Ratio } = require('../datatypes/ratio');

// TODO: Casting and Conversion needs unit tests!

class As extends Expression {
  constructor(json) {
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

  exec(ctx) {
    const arg = this.execArgs(ctx);
    // If it is null, return null
    if (arg == null) {
      return null;
    }
    if (typeof arg._is !== 'function' && !isSystemType(this.asTypeSpecifier)) {
      // We need an _is implementation in order to check non System types
      // If this is not found then we should just return the arg to match old functionality.
      return arg;
    }
    if (ctx.matchesTypeSpecifier(arg, this.asTypeSpecifier)) {
      // TODO: request patient source to change type identification
      return arg;
    } else {
      return null;
    }
  }
}

class ToBoolean extends Expression {
  constructor(json) {
    super(json);
  }

  exec(ctx) {
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

class ToConcept extends Expression {
  constructor(json) {
    super(json);
  }

  exec(ctx) {
    const arg = this.execArgs(ctx);
    if (arg != null) {
      return new Concept([arg], arg.display);
    } else {
      return null;
    }
  }
}

class ToDate extends Expression {
  constructor(json) {
    super(json);
  }

  exec(ctx) {
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

class ToDateTime extends Expression {
  constructor(json) {
    super(json);
  }

  exec(ctx) {
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

class ToDecimal extends Expression {
  constructor(json) {
    super(json);
  }

  exec(ctx) {
    const arg = this.execArgs(ctx);
    if (arg != null) {
      const decimal = limitDecimalPrecision(parseFloat(arg.toString()));
      if (isValidDecimal(decimal)) {
        return decimal;
      }
    }
    return null;
  }
}

class ToInteger extends Expression {
  constructor(json) {
    super(json);
  }

  exec(ctx) {
    const arg = this.execArgs(ctx);
    if (arg != null) {
      const integer = parseInt(arg.toString());
      if (isValidInteger(integer)) {
        return integer;
      }
    }
    return null;
  }
}

class ToQuantity extends Expression {
  constructor(json) {
    super(json);
  }

  exec(ctx) {
    const arg = this.execArgs(ctx);
    if (arg != null) {
      return parseQuantity(arg.toString());
    } else {
      return null;
    }
  }
}

class ToRatio extends Expression {
  constructor(json) {
    super(json);
  }

  exec(ctx) {
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

class ToString extends Expression {
  constructor(json) {
    super(json);
  }

  exec(ctx) {
    const arg = this.execArgs(ctx);
    if (arg != null) {
      return arg.toString();
    } else {
      return null;
    }
  }
}

class ToTime extends Expression {
  constructor(json) {
    super(json);
  }

  exec(ctx) {
    const arg = this.execArgs(ctx);
    if (arg != null) {
      const timeString = arg.toString();
      // Return null if string doesn't represent a valid ISO-8601 Time
      // hh:mm:ss.fff or hh:mm:ss.fff
      const matches = /^T?((\d{2})(:(\d{2})(:(\d{2})(\.(\d+))?)?)?)?([Z+-].*)?$/.exec(timeString);
      if (matches == null) {
        return null;
      }
      let hours = matches[2];
      let minutes = matches[4];
      let seconds = matches[6];
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
      let milliseconds = matches[8];
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

class Convert extends Expression {
  constructor(json) {
    super(json);
    this.operand = json.operand;
    this.toType = json.toType;
  }

  exec(ctx) {
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

class ConvertsToBoolean extends Expression {
  constructor(json) {
    super(json);
    this.operand = json.operand;
  }

  exec(ctx) {
    const operatorValue = this.execArgs(ctx);
    if (operatorValue === null) {
      return null;
    } else {
      return canConvertToType(ToBoolean, this.operand, ctx);
    }
  }
}

class ConvertsToDate extends Expression {
  constructor(json) {
    super(json);
    this.operand = json.operand;
  }

  exec(ctx) {
    const operatorValue = this.execArgs(ctx);
    if (operatorValue === null) {
      return null;
    } else {
      return canConvertToType(ToDate, this.operand, ctx);
    }
  }
}

class ConvertsToDateTime extends Expression {
  constructor(json) {
    super(json);
    this.operand = json.operand;
  }

  exec(ctx) {
    const operatorValue = this.execArgs(ctx);
    if (operatorValue === null) {
      return null;
    } else {
      return canConvertToType(ToDateTime, this.operand, ctx);
    }
  }
}

class ConvertsToDecimal extends Expression {
  constructor(json) {
    super(json);
    this.operand = json.operand;
  }

  exec(ctx) {
    const operatorValue = this.execArgs(ctx);
    if (operatorValue === null) {
      return null;
    } else {
      return canConvertToType(ToDecimal, this.operand, ctx);
    }
  }
}

class ConvertsToInteger extends Expression {
  constructor(json) {
    super(json);
    this.operand = json.operand;
  }

  exec(ctx) {
    const operatorValue = this.execArgs(ctx);
    if (operatorValue === null) {
      return null;
    } else {
      return canConvertToType(ToInteger, this.operand, ctx);
    }
  }
}

class ConvertsToQuantity extends Expression {
  constructor(json) {
    super(json);
    this.operand = json.operand;
  }

  exec(ctx) {
    const operatorValue = this.execArgs(ctx);
    if (operatorValue === null) {
      return null;
    } else {
      return canConvertToType(ToQuantity, this.operand, ctx);
    }
  }
}

class ConvertsToRatio extends Expression {
  constructor(json) {
    super(json);
    this.operand = json.operand;
  }

  exec(ctx) {
    const operatorValue = this.execArgs(ctx);
    if (operatorValue === null) {
      return null;
    } else {
      return canConvertToType(ToRatio, this.operand, ctx);
    }
  }
}

class ConvertsToString extends Expression {
  constructor(json) {
    super(json);
    this.operand = json.operand;
  }

  exec(ctx) {
    const operatorValue = this.execArgs(ctx);
    if (operatorValue === null) {
      return null;
    } else {
      return canConvertToType(ToString, this.operand, ctx);
    }
  }
}

class ConvertsToTime extends Expression {
  constructor(json) {
    super(json);
    this.operand = json.operand;
  }

  exec(ctx) {
    const operatorValue = this.execArgs(ctx);
    if (operatorValue === null) {
      return null;
    } else {
      return canConvertToType(ToTime, this.operand, ctx);
    }
  }
}

function canConvertToType(toFunction, operand, ctx) {
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

class ConvertQuantity extends Expression {
  constructor(json) {
    super(json);
  }

  exec(ctx) {
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

class CanConvertQuantity extends Expression {
  constructor(json) {
    super(json);
  }

  exec(ctx) {
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

class Is extends Expression {
  constructor(json) {
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

  exec(ctx) {
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

function isSystemType(spec) {
  switch (spec.type) {
    case 'NamedTypeSpecifier':
      return spec.name.startsWith('{urn:hl7-org:elm-types:r1}');
    case 'ListTypeSpecifier':
      return isSystemType(spec.elementType);
    case 'TupleTypeSpecifier':
      return spec.element.every(e => isSystemType(e.elementType));
    case 'IntervalTypeSpecifier':
      return isSystemType(spec.pointType);
    case 'ChoiceTypeSpecifier':
      return spec.choice.every(c => isSystemType(c));
    default:
      return false;
  }
}

class IntervalTypeSpecifier extends UnimplementedExpression {}
class ListTypeSpecifier extends UnimplementedExpression {}
class NamedTypeSpecifier extends UnimplementedExpression {}
class TupleTypeSpecifier extends UnimplementedExpression {}

module.exports = {
  As,
  CanConvertQuantity,
  Convert,
  ConvertQuantity,
  ConvertsToBoolean,
  ConvertsToDate,
  ConvertsToDateTime,
  ConvertsToDecimal,
  ConvertsToInteger,
  ConvertsToQuantity,
  ConvertsToRatio,
  ConvertsToString,
  ConvertsToTime,
  IntervalTypeSpecifier,
  Is,
  ListTypeSpecifier,
  NamedTypeSpecifier,
  ToBoolean,
  ToConcept,
  ToDate,
  ToDateTime,
  ToDecimal,
  ToInteger,
  ToQuantity,
  ToRatio,
  ToString,
  ToTime,
  TupleTypeSpecifier
};
