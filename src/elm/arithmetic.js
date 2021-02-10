const { Expression } = require('./expression');
const { build } = require('./builder');
const MathUtil = require('../util/math');
const {
  Quantity,
  doAddition,
  doSubtraction,
  doMultiplication,
  doDivision
} = require('../datatypes/quantity');
const { Uncertainty } = require('../datatypes/uncertainty');

class Add extends Expression {
  constructor(json) {
    super(json);
  }

  exec(ctx) {
    const args = this.execArgs(ctx);
    if (args == null || args.some(x => x == null)) {
      return null;
    }

    const sum = args.reduce((x, y) => {
      if (x.isQuantity || x.isDateTime || x.isDate || (x.isTime && x.isTime())) {
        return doAddition(x, y);
      } else if (x.isUncertainty && y.isUncertainty) {
        return new Uncertainty(x.low + y.low, x.high + y.high);
      } else {
        return x + y;
      }
    });

    if (MathUtil.overflowsOrUnderflows(sum)) {
      return null;
    }
    return sum;
  }
}

class Subtract extends Expression {
  constructor(json) {
    super(json);
  }

  exec(ctx) {
    let args = this.execArgs(ctx);
    if (args == null || args.some(x => x == null)) {
      return null;
    }

    const difference = args.reduce((x, y) => {
      if (x.isQuantity || x.isDateTime || x.isDate) {
        return doSubtraction(x, y);
      } else if (x.isUncertainty && y.isUncertainty) {
        return new Uncertainty(x.low - y.low, x.high - y.high);
      } else {
        return x - y;
      }
    });

    if (MathUtil.overflowsOrUnderflows(difference)) {
      return null;
    }
    return difference;
  }
}

class Multiply extends Expression {
  constructor(json) {
    super(json);
  }

  exec(ctx) {
    let args = this.execArgs(ctx);
    if (args == null || args.some(x => x == null)) {
      return null;
    }

    const product = args.reduce((x, y) => {
      if (x.isQuantity || y.isQuantity) {
        return doMultiplication(x, y);
      } else if (x.isUncertainty && y.isUncertainty) {
        return new Uncertainty(x.low * y.low, x.high * y.high);
      } else {
        return x * y;
      }
    });

    if (MathUtil.overflowsOrUnderflows(product)) {
      return null;
    }
    return product;
  }
}

class Divide extends Expression {
  constructor(json) {
    super(json);
  }

  exec(ctx) {
    const args = this.execArgs(ctx);
    if (args == null || args.some(x => x == null)) {
      return null;
    }

    const quotient = args.reduce(function (x, y) {
      if (x.isQuantity) {
        return doDivision(x, y);
      } else {
        return x / y;
      }
    });

    // Note, anything divided by 0 is Infinity in Javascript, which will be
    // considered as overflow by this check.
    if (MathUtil.overflowsOrUnderflows(quotient)) {
      return null;
    }
    return quotient;
  }
}

class TruncatedDivide extends Expression {
  constructor(json) {
    super(json);
  }

  exec(ctx) {
    const args = this.execArgs(ctx);
    if (args == null || args.some(x => x == null)) {
      return null;
    }

    const quotient = args.reduce((x, y) => x / y);
    const truncatedQuotient = quotient >= 0 ? Math.floor(quotient) : Math.ceil(quotient);

    if (MathUtil.overflowsOrUnderflows(truncatedQuotient)) {
      return null;
    }
    return truncatedQuotient;
  }
}

class Modulo extends Expression {
  constructor(json) {
    super(json);
  }

  exec(ctx) {
    const args = this.execArgs(ctx);
    if (args == null || args.some(x => x == null)) {
      return null;
    }

    const modulo = args.reduce((x, y) => x % y);

    return MathUtil.decimalOrNull(modulo);
  }
}

class Ceiling extends Expression {
  constructor(json) {
    super(json);
  }

  exec(ctx) {
    const arg = this.execArgs(ctx);
    if (arg == null) {
      return null;
    }

    return Math.ceil(arg);
  }
}

class Floor extends Expression {
  constructor(json) {
    super(json);
  }

  exec(ctx) {
    const arg = this.execArgs(ctx);
    if (arg == null) {
      return null;
    }

    return Math.floor(arg);
  }
}

class Truncate extends Expression {
  constructor(json) {
    super(json);
  }

  exec(ctx) {
    const arg = this.execArgs(ctx);
    if (arg == null) {
      return null;
    }

    return arg >= 0 ? Math.floor(arg) : Math.ceil(arg);
  }
}
class Abs extends Expression {
  constructor(json) {
    super(json);
  }

  exec(ctx) {
    const arg = this.execArgs(ctx);
    if (arg == null) {
      return null;
    } else if (arg.isQuantity) {
      return new Quantity(Math.abs(arg.value), arg.unit);
    } else {
      return Math.abs(arg);
    }
  }
}

class Negate extends Expression {
  constructor(json) {
    super(json);
  }

  exec(ctx) {
    const arg = this.execArgs(ctx);
    if (arg == null) {
      return null;
    } else if (arg.isQuantity) {
      return new Quantity(arg.value * -1, arg.unit);
    } else {
      return arg * -1;
    }
  }
}

class Round extends Expression {
  constructor(json) {
    super(json);
    this.precision = build(json.precision);
  }

  exec(ctx) {
    const arg = this.execArgs(ctx);
    if (arg == null) {
      return null;
    }

    const dec = this.precision != null ? this.precision.execute(ctx) : 0;
    return Math.round(arg * Math.pow(10, dec)) / Math.pow(10, dec);
  }
}

class Ln extends Expression {
  constructor(json) {
    super(json);
  }

  exec(ctx) {
    const arg = this.execArgs(ctx);
    if (arg == null) {
      return null;
    }

    const ln = Math.log(arg);

    return MathUtil.decimalOrNull(ln);
  }
}

class Exp extends Expression {
  constructor(json) {
    super(json);
  }

  exec(ctx) {
    const arg = this.execArgs(ctx);
    if (arg == null) {
      return null;
    }

    const power = Math.exp(arg);

    if (MathUtil.overflowsOrUnderflows(power)) {
      return null;
    }
    return power;
  }
}

class Log extends Expression {
  constructor(json) {
    super(json);
  }

  exec(ctx) {
    const args = this.execArgs(ctx);
    if (args == null || args.some(x => x == null)) {
      return null;
    }

    const log = args.reduce((x, y) => Math.log(x) / Math.log(y));

    return MathUtil.decimalOrNull(log);
  }
}

class Power extends Expression {
  constructor(json) {
    super(json);
  }

  exec(ctx) {
    const args = this.execArgs(ctx);
    if (args == null || args.some(x => x == null)) {
      return null;
    }

    const power = args.reduce((x, y) => Math.pow(x, y));

    if (MathUtil.overflowsOrUnderflows(power)) {
      return null;
    }
    return power;
  }
}

class MinValue extends Expression {
  constructor(json) {
    super(json);
    this.valueType = json.valueType;
  }

  exec(ctx) {
    if (MinValue.MIN_VALUES[this.valueType]) {
      if (this.valueType === '{urn:hl7-org:elm-types:r1}DateTime') {
        const minDateTime = MinValue.MIN_VALUES[this.valueType].copy();
        minDateTime.timezoneOffset = ctx.getTimezoneOffset();
        return minDateTime;
      } else {
        return MinValue.MIN_VALUES[this.valueType];
      }
    } else {
      throw new Error(`Minimum not supported for ${this.valueType}`);
    }
  }
}

MinValue.MIN_VALUES = {};
MinValue.MIN_VALUES['{urn:hl7-org:elm-types:r1}Integer'] = MathUtil.MIN_INT_VALUE;
MinValue.MIN_VALUES['{urn:hl7-org:elm-types:r1}Decimal'] = MathUtil.MIN_FLOAT_VALUE;
MinValue.MIN_VALUES['{urn:hl7-org:elm-types:r1}DateTime'] = MathUtil.MIN_DATETIME_VALUE;
MinValue.MIN_VALUES['{urn:hl7-org:elm-types:r1}Date'] = MathUtil.MIN_DATE_VALUE;
MinValue.MIN_VALUES['{urn:hl7-org:elm-types:r1}Time'] = MathUtil.MIN_TIME_VALUE;

class MaxValue extends Expression {
  constructor(json) {
    super(json);
    this.valueType = json.valueType;
  }

  exec(ctx) {
    if (MaxValue.MAX_VALUES[this.valueType] != null) {
      if (this.valueType === '{urn:hl7-org:elm-types:r1}DateTime') {
        const maxDateTime = MaxValue.MAX_VALUES[this.valueType].copy();
        maxDateTime.timezoneOffset = ctx.getTimezoneOffset();
        return maxDateTime;
      } else {
        return MaxValue.MAX_VALUES[this.valueType];
      }
    } else {
      throw new Error(`Maximum not supported for ${this.valueType}`);
    }
  }
}

MaxValue.MAX_VALUES = {};
MaxValue.MAX_VALUES['{urn:hl7-org:elm-types:r1}Integer'] = MathUtil.MAX_INT_VALUE;
MaxValue.MAX_VALUES['{urn:hl7-org:elm-types:r1}Decimal'] = MathUtil.MAX_FLOAT_VALUE;
MaxValue.MAX_VALUES['{urn:hl7-org:elm-types:r1}DateTime'] = MathUtil.MAX_DATETIME_VALUE;
MaxValue.MAX_VALUES['{urn:hl7-org:elm-types:r1}Date'] = MathUtil.MAX_DATE_VALUE;
MaxValue.MAX_VALUES['{urn:hl7-org:elm-types:r1}Time'] = MathUtil.MAX_TIME_VALUE;

class Successor extends Expression {
  constructor(json) {
    super(json);
  }

  exec(ctx) {
    const arg = this.execArgs(ctx);
    if (arg == null) {
      null;
    }

    let successor = null;
    try {
      // MathUtil.successor throws on overflow, and the exception is used in
      // the logic for evaluating `meets`, so it can't be changed to just return null
      successor = MathUtil.successor(arg);
    } catch (e) {
      if (e instanceof MathUtil.OverFlowException) {
        return null;
      }
    }

    if (MathUtil.overflowsOrUnderflows(successor)) {
      return null;
    }
    return successor;
  }
}

class Predecessor extends Expression {
  constructor(json) {
    super(json);
  }

  exec(ctx) {
    const arg = this.execArgs(ctx);
    if (arg == null) {
      null;
    }

    let predecessor = null;
    try {
      // MathUtil.predecessor throws on underflow, and the exception is used in
      // the logic for evaluating `meets`, so it can't be changed to just return null
      predecessor = MathUtil.predecessor(arg);
    } catch (e) {
      if (e instanceof MathUtil.OverFlowException) {
        return null;
      }
    }

    if (MathUtil.overflowsOrUnderflows(predecessor)) {
      return null;
    }
    return predecessor;
  }
}

module.exports = {
  Abs,
  Add,
  Ceiling,
  Divide,
  Exp,
  Floor,
  Ln,
  Log,
  MaxValue,
  MinValue,
  Modulo,
  Multiply,
  Negate,
  Power,
  Predecessor,
  Round,
  Subtract,
  Successor,
  Truncate,
  TruncatedDivide
};
