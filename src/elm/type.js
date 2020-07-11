/*
 * decaffeinate suggestions:
 * DS101: Remove unnecessary use of Array.from
 * DS102: Remove unnecessary code created because of implicit returns
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
let As, CanConvertQuantity, Convert, ConvertQuantity, ConvertsToBoolean, ConvertsToDate, ConvertsToDateTime, ConvertsToDecimal, ConvertsToInteger, ConvertsToQuantity, ConvertsToRatio, ConvertsToString, ConvertsToTime, IntervalTypeSpecifier, Is, ListTypeSpecifier, NamedTypeSpecifier, ToBoolean, ToConcept, ToDate, ToDateTime, ToDecimal, ToInteger, ToQuantity, ToRatio, ToString, ToTime, TupleTypeSpecifier;
const { Expression, UnimplementedExpression } = require('./expression');
const { FunctionRef } = require('./reusable');
const { DateTime, Date } = require('../datatypes/datetime');
const { Concept } = require('../datatypes/clinical');
const { parseQuantity, Quantity } = require('../datatypes/quantity');
const { isValidDecimal, isValidInteger, limitDecimalPrecision } = require('../util/math');
const { normalizeMillisecondsField } = require('../util/util');
const { Ratio } = require('../datatypes/ratio');

// TODO: Casting and Conversion needs unit tests!

module.exports.As = (As = class As extends Expression {
  constructor(json) {
    super(...arguments);
    this.asType = json.asType;
    this.asTypeSpecifier = json.asTypeSpecifier;
    this.strict = json.strict != null ? json.strict : false;
  }

  exec(ctx) {
    // TODO: Currently just returns the arg (which works for null, but probably not others)
    return this.execArgs(ctx);
  }
});

module.exports.ToBoolean = (ToBoolean = class ToBoolean extends Expression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    const arg = this.execArgs(ctx);
    if ((arg != null) && (typeof arg !== 'undefined')) {
      const strArg = arg.toString().toLowerCase();
      if (["true", "t", "yes", "y", "1"].includes(strArg)) {
        return true;
      } else if (["false", "f", "no", "n", "0"].includes(strArg)) {
        return false;
      } else {
        return null;
      }
    } else {
      return null;
    }
  }
});

module.exports.ToConcept = (ToConcept = class ToConcept extends Expression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    const arg = this.execArgs(ctx);
    if ((arg != null) && (typeof arg !== 'undefined')) { return new Concept([arg], arg.display); } else { return null; }
  }
});

module.exports.ToDate = (ToDate = class ToDate extends Expression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    const arg = this.execArgs(ctx);
    if ((arg == null)) {
      return null;
    } else if (arg.isDateTime) {
      return arg.getDate();
    } else {
      return Date.parse(arg.toString());
    }
  }
});

module.exports.ToDateTime = (ToDateTime = class ToDateTime extends Expression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    const arg = this.execArgs(ctx);
    if ((arg == null)) {
      return null;
    } else if (arg.isDate) {
      return arg.getDateTime();
    } else {
      return DateTime.parse(arg.toString());
    }
  }
});

module.exports.ToDecimal = (ToDecimal = class ToDecimal extends Expression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    const arg = this.execArgs(ctx);
    if ((arg != null) && (typeof arg !== 'undefined')) {
      let decimal = parseFloat(arg.toString());
      decimal = limitDecimalPrecision(decimal);
      if (isValidDecimal(decimal)) { return decimal; }
    }
    return null;
  }
});

module.exports.ToInteger = (ToInteger = class ToInteger extends Expression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    const arg = this.execArgs(ctx);
    if ((arg != null) && (typeof arg !== 'undefined')) {
      const integer = parseInt(arg.toString());
      if (isValidInteger(integer)) { return integer; }
    }
    return null;
  }
});

module.exports.ToQuantity = (ToQuantity = class ToQuantity extends Expression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    const arg = this.execArgs(ctx);
    if ((arg != null) && (typeof arg !== 'undefined')) {
      const quantity = parseQuantity(arg.toString());
      return quantity;
    } else {
      return null;
    }
  }
});

module.exports.ToRatio = (ToRatio = class ToRatio extends Expression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    const arg = this.execArgs(ctx);
    if (arg != null) {
      // Argument will be of form '<quantity>:<quantity>'
      let denominator, numerator;
      try {
        // String will be split into an array. Numerator will be at index 1, Denominator will be at index 4
        const splitRatioString = arg.toString().match(/^(\d+(\.\d+)?\s*('.+')?)\s*:\s*(\d+(\.\d+)?\s*('.+')?)$/);
        if ((splitRatioString == null)) { return null; }
        numerator = parseQuantity(splitRatioString[1]);
        denominator = parseQuantity(splitRatioString[4]);
      } catch (error) {
        // If the input string is not formatted correctly, or cannot be
        // interpreted as a valid Quantity value, the result is null.
        return null;
      }
      // The value element of a Quantity must be present.
      if ((numerator == null) || (denominator == null)) { return null; }
      return new Ratio(numerator, denominator);
    } else {
      return null;
    }
  }
});

module.exports.ToString = (ToString = class ToString extends Expression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    const arg = this.execArgs(ctx);
    if ((arg != null) && (typeof arg !== 'undefined')) { return arg.toString(); } else { return null; }
  }
});

module.exports.ToTime = (ToTime = class ToTime extends Expression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    const arg = this.execArgs(ctx);
    if ((arg != null) && (typeof arg !== 'undefined')) {
      const timeString = arg.toString();
      // Return null if string doesn't represent a valid ISO-8601 Time
      // hh:mm:ss.fff or hh:mm:ss.fff
      const matches = /^((\d{2})(\:(\d{2})(\:(\d{2})(\.(\d+))?)?)?)?$/.exec(timeString);
      if (matches == null) { return null; }
      let hours = matches[2];
      let minutes = matches[4];
      let seconds = matches[6];
      // Validate h/m/s if they exist, but allow null
      if (hours != null) {
        if (!(hours >= 0) || !(hours <= 23)) { return null; }
        hours = parseInt(hours, 10);
      }
      if (minutes != null) {
        if (!(minutes >= 0) || !(minutes <= 59)) { return null; }
        minutes = parseInt(minutes, 10);
      }
      if (seconds != null) {
        if (!(seconds >= 0) || !(seconds <= 59)) { return null; }
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
});

module.exports.Convert = (Convert = class Convert extends Expression {
  constructor(json) {
    super(...arguments);
    this.operand = json.operand;
    this.toType = json.toType;
  }

  exec(ctx) {
    switch (this.toType) {
      case "{urn:hl7-org:elm-types:r1}Boolean":
        return new ToBoolean({"type": "ToBoolean", "operand": this.operand}).execute(ctx);
      case "{urn:hl7-org:elm-types:r1}Concept":
        return new ToConcept({"type": "ToConcept", "operand": this.operand}).execute(ctx);
      case "{urn:hl7-org:elm-types:r1}Decimal":
        return new ToDecimal({"type": "ToDecimal", "operand": this.operand}).execute(ctx);
      case "{urn:hl7-org:elm-types:r1}Integer":
        return new ToInteger({"type": "ToInteger", "operand": this.operand}).execute(ctx);
      case "{urn:hl7-org:elm-types:r1}String":
        return new ToString({"type": "ToString", "operand": this.operand}).execute(ctx);
      case "{urn:hl7-org:elm-types:r1}Quantity":
        return new ToQuantity({"type": "ToQuantity", "operand": this.operand}).execute(ctx);
      case "{urn:hl7-org:elm-types:r1}DateTime":
        return new ToDateTime({"type": "ToDateTime", "operand": this.operand}).execute(ctx);
      case "{urn:hl7-org:elm-types:r1}Date":
        return new ToDate({"type": "ToDate", "operand": this.operand}).execute(ctx);
      case "{urn:hl7-org:elm-types:r1}Time":
        return new ToTime({"type": "ToTime", "operand": this.operand}).execute(ctx);
      default:
        return this.execArgs(ctx);
    }
  }
});

module.exports.ConvertsToBoolean = (ConvertsToBoolean = class ConvertsToBoolean extends Expression {
  constructor(json) {
    super(...arguments);
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
});

module.exports.ConvertsToDate = (ConvertsToDate = class ConvertsToDate extends Expression {
  constructor(json) {
    super(...arguments);
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
});

module.exports.ConvertsToDateTime = (ConvertsToDateTime = class ConvertsToDateTime extends Expression {
  constructor(json) {
    super(...arguments);
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
});

module.exports.ConvertsToDecimal = (ConvertsToDecimal = class ConvertsToDecimal extends Expression {
  constructor(json) {
    super(...arguments);
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
});

module.exports.ConvertsToInteger = (ConvertsToInteger = class ConvertsToInteger extends Expression {
  constructor(json) {
    super(...arguments);
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
});

module.exports.ConvertsToQuantity = (ConvertsToQuantity = class ConvertsToQuantity extends Expression {
  constructor(json) {
    super(...arguments);
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
});

module.exports.ConvertsToRatio = (ConvertsToRatio = class ConvertsToRatio extends Expression {
  constructor(json) {
    super(...arguments);
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
});

module.exports.ConvertsToString = (ConvertsToString = class ConvertsToString extends Expression {
  constructor(json) {
    super(...arguments);
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
});

module.exports.ConvertsToTime = (ConvertsToTime = class ConvertsToTime extends Expression {
  constructor(json) {
    super(...arguments);
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
});

var canConvertToType = function(toFunction, operand, ctx) {
  try {
    const value = new toFunction({"type": toFunction.name, "operand": operand}).execute(ctx);
    if (value != null) { return true; } else { return false; }
  } catch (error) {
    return false;
  }
};

module.exports.ConvertQuantity = (ConvertQuantity = class ConvertQuantity extends Expression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    const [quantity, newUnit] = Array.from(this.execArgs(ctx));

    if ((quantity != null) && (newUnit != null)) {
      try {
        return quantity.convertUnit(newUnit);
      } catch (error) {
        // Cannot convert input to target unit, spec says to return null
        return null;
      }
    }
  }
});

module.exports.CanConvertQuantity = (CanConvertQuantity = class CanConvertQuantity extends Expression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    const [quantity, newUnit] = Array.from(this.execArgs(ctx));

    if ((quantity != null) && (newUnit != null)) {
      try {
        quantity.convertUnit(newUnit);
        return true;
      } catch (error) {
        return false;
      }
    }
    return null;
  }
});

module.exports.Is = (Is = class Is extends UnimplementedExpression {});
module.exports.IntervalTypeSpecifier = (IntervalTypeSpecifier = class IntervalTypeSpecifier extends UnimplementedExpression {});
module.exports.ListTypeSpecifier = (ListTypeSpecifier = class ListTypeSpecifier extends UnimplementedExpression {});
module.exports.NamedTypeSpecifier = (NamedTypeSpecifier = class NamedTypeSpecifier extends UnimplementedExpression {});
module.exports.TupleTypeSpecifier = (TupleTypeSpecifier = class TupleTypeSpecifier extends UnimplementedExpression {});
