/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS206: Consider reworking classes to avoid initClass
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
let Abs, Add, Ceiling, Divide, Exp, Floor, Ln, Log, MaxValue, MinValue, Modulo, Multiply, Negate, Power, Predecessor, Round, Subtract, Successor, Truncate, TruncatedDivide;
const { Expression } = require('./expression');
const { typeIsArray , allTrue, anyTrue} = require('../util/util');
const { build } = require('./builder');
const MathUtil = require('../util/math');
const { Quantity, doAddition, doSubtraction, doMultiplication, doDivision } = require('../datatypes/quantity');

module.exports.Add = (Add = class Add extends Expression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    const args = this.execArgs(ctx);
    let sum = null;
    if ((args == null) || args.some(x => x == null)) {
      null;
    } else {
      if (args != null) {
        args.reduce(function(x,y) {
        if (x.isQuantity  || x.isDateTime || x.isDate || x.isTime) {
          return sum = doAddition(x,y);
        } else {
          return sum = x + y;
        }
      });
      }
    }

    if (MathUtil.overflowsOrUnderflows(sum)) { return null; }
    return sum;
  }
});

module.exports.Subtract = (Subtract = class Subtract extends Expression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    const args = this.execArgs(ctx);
    let difference = null;
    if ((args == null) || args.some(x => x == null)) {
      null;
    } else {
      args.reduce(function(x,y) {
        if (x.isQuantity || x.isDateTime || x.isDate) {
          return difference = doSubtraction(x,y);
        } else {
          return difference = x - y;
        }
      });
    }

    if (MathUtil.overflowsOrUnderflows(difference)) { return null; }
    return difference;
  }
});


module.exports.Multiply = (Multiply = class Multiply extends Expression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    const args = this.execArgs(ctx);
    let product = null;
    if ((args == null) || args.some(x => x == null)) {
      null;
    } else {
      if (args != null) {
        args.reduce(function(x,y) {
        if (x.isQuantity || y.isQuantity) {
          return product = doMultiplication(x,y);
        } else {
          return product = x * y;
        }
      });
      }
    }

    if (MathUtil.overflowsOrUnderflows(product)) { return null; }
    return product;
  }
});

module.exports.Divide = (Divide = class Divide extends Expression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    const args = this.execArgs(ctx);
    let quotient = null;
    if ((args == null) || args.some(x => x == null)) {
      null;
    } else {
      if (args != null) {
        args.reduce(function(x,y) {
        if (x.isQuantity) {
          return quotient = doDivision(x,y);
        } else {
          return quotient = x / y;
        }
      });
      }
    }

    // Note, anything divided by 0 is Infinity in Javascript, which will be
    // considered as overflow by this check.
    if (MathUtil.overflowsOrUnderflows(quotient)) { return null; }
    return quotient;
  }
});

module.exports.TruncatedDivide = (TruncatedDivide = class TruncatedDivide extends  Expression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    let quotient;
    const args = this.execArgs(ctx);
    if ((args == null) || args.some(x => x == null)) {
      null;
    } else {
      quotient = Math.floor( args.reduce((x, y) => x / y));
    }

    if (MathUtil.overflowsOrUnderflows(quotient)) { return null; }
    return quotient;
  }
});

module.exports.Modulo = (Modulo = class Modulo extends  Expression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    const args = this.execArgs(ctx);
    if ((args == null) || args.some(x => x == null)) {
      return null;
    } else {
      return args.reduce((x, y) => x % y);
    }
  }
});

module.exports.Ceiling = (Ceiling = class Ceiling extends  Expression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    const arg = this.execArgs(ctx);
    if ((arg == null)) {
      return null;
    } else {
      return Math.ceil(arg);
    }
  }
});

module.exports.Floor = (Floor = class Floor extends  Expression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    const arg = this.execArgs(ctx);
    if ((arg == null)) {
      return null;
    } else {
      return Math.floor(arg);
    }
  }
});

module.exports.Truncate = (Truncate = class Truncate extends Floor {});

module.exports.Abs = (Abs = class Abs extends  Expression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    const arg = this.execArgs(ctx);
    if ((arg == null)) {
      return null;
    } else if (arg.isQuantity) {
      return new Quantity(Math.abs(arg.value), arg.unit);
    } else {
      return Math.abs(arg);
    }
  }
});

module.exports.Negate = (Negate = class Negate extends Expression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    const arg = this.execArgs(ctx);
    if ((arg == null)) {
      return null;
    } else if (arg.isQuantity) {
      return new Quantity(arg.value * -1, arg.unit);
    } else {
      return arg * -1;
    }
  }
});

module.exports.Round = (Round = class Round extends  Expression {
  constructor(json) {
    super(...arguments);
    this.precision = build(json.precision);
  }

  exec(ctx) {
    const arg = this.execArgs(ctx);
    if ((arg == null)) {
      return null;
    } else {
      const dec = (this.precision != null) ? this.precision.execute(ctx) : 0;
      return Math.round(arg * Math.pow(10, dec)) / Math.pow(10, dec);
    }
  }
});

module.exports.Ln = (Ln = class Ln extends  Expression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    const arg = this.execArgs(ctx);
    if ((arg == null)) {
      return null;
    } else {
      return Math.log(arg);
    }
  }
});

module.exports.Exp = (Exp = class Exp extends  Expression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    let power;
    const arg = this.execArgs(ctx);
    if ((arg == null)) {
      null;
    } else {
      power = Math.exp(arg);
    }

    if (MathUtil.overflowsOrUnderflows(power)) { return null; }
    return power;
  }
});

module.exports.Log = (Log = class Log extends  Expression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    const args = this.execArgs(ctx);
    if ((args == null) || args.some(x => x == null)) {
      return null;
    } else {
      return args.reduce((x, y) => Math.log(x)/Math.log(y));
    }
  }
});

module.exports.Power = (Power = class Power extends Expression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    const args = this.execArgs(ctx);
    let power = null;
    if ((args == null) || args.some(x => x == null)) {
      null;
    } else {
      power = args.reduce((x, y) => Math.pow(x , y));
    }

    if (MathUtil.overflowsOrUnderflows(power)) { return null; }
    return power;
  }
});

module.exports.MinValue = (MinValue = (function() {
  let MIN_VALUES = undefined;
  MinValue = class MinValue extends Expression {
    static initClass() {
      MIN_VALUES = {};
      MIN_VALUES['{urn:hl7-org:elm-types:r1}Integer'] = MathUtil.MIN_INT_VALUE;
      MIN_VALUES['{urn:hl7-org:elm-types:r1}Decimal'] = MathUtil.MIN_FLOAT_VALUE;
      MIN_VALUES['{urn:hl7-org:elm-types:r1}DateTime'] = MathUtil.MIN_DATETIME_VALUE;
      MIN_VALUES['{urn:hl7-org:elm-types:r1}Date'] = MathUtil.MIN_DATE_VALUE;
      MIN_VALUES['{urn:hl7-org:elm-types:r1}Time'] = MathUtil.MIN_TIME_VALUE;
    }

    constructor(json) {
      super(...arguments);
      this.valueType = json.valueType;
    }

    exec(ctx) {
      if (MIN_VALUES[this.valueType]) {
        if (this.valueType === '{urn:hl7-org:elm-types:r1}DateTime') {
          const minDateTime = MIN_VALUES[this.valueType].copy();
          minDateTime.timezoneOffset = ctx.getTimezoneOffset();
          return minDateTime;
        } else {
          return MIN_VALUES[this.valueType];
        }
      } else {
        throw new Error(`Minimum not supported for ${this.valueType}`);
      }
    }
  };
  MinValue.initClass();
  return MinValue;
})());

module.exports.MaxValue = (MaxValue = (function() {
  let MAX_VALUES = undefined;
  MaxValue = class MaxValue extends Expression {
    static initClass() {
      MAX_VALUES = {};
      MAX_VALUES['{urn:hl7-org:elm-types:r1}Integer'] = MathUtil.MAX_INT_VALUE;
      MAX_VALUES['{urn:hl7-org:elm-types:r1}Decimal'] = MathUtil.MAX_FLOAT_VALUE;
      MAX_VALUES['{urn:hl7-org:elm-types:r1}DateTime'] = MathUtil.MAX_DATETIME_VALUE;
      MAX_VALUES['{urn:hl7-org:elm-types:r1}Date'] = MathUtil.MAX_DATE_VALUE;
      MAX_VALUES['{urn:hl7-org:elm-types:r1}Time'] = MathUtil.MAX_TIME_VALUE;
    }

    constructor(json) {
      super(...arguments);
      this.valueType = json.valueType;
    }

    exec(ctx) {
      if (MAX_VALUES[this.valueType] != null) {
        if (this.valueType === '{urn:hl7-org:elm-types:r1}DateTime') {
          const maxDateTime = MAX_VALUES[this.valueType].copy();
          maxDateTime.timezoneOffset = ctx.getTimezoneOffset();
          return maxDateTime;
        } else {
          return MAX_VALUES[this.valueType];
        }
      } else {
        throw new Error(`Maximum not supported for ${this.valueType}`);
      }
    }
  };
  MaxValue.initClass();
  return MaxValue;
})());

module.exports.Successor = (Successor = class Successor extends Expression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    const arg = this.execArgs(ctx);
    let successor = null;
    if ((arg == null)) {
      null;
    } else {
      try {
        // MathUtil.successor throws on overflow, and the exception is used in
        // the logic for evaluating `meets`, so it can't be changed to just return null
        successor = MathUtil.successor(arg);
      } catch (e) {
        if (e instanceof MathUtil.OverFlowException) {
          return null;
        }
      }
    }

    if (MathUtil.overflowsOrUnderflows(successor)) { return null; }
    return successor;
  }
});

module.exports.Predecessor = (Predecessor = class Predecessor extends  Expression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    const arg = this.execArgs(ctx);
    let predecessor = null;
    if ((arg == null)) {
      null;
    } else {
      // MathUtil.predecessor throws on underflow, and the exception is used in
      // the logic for evaluating `meets`, so it can't be changed to just return null
      try {
        predecessor = MathUtil.predecessor(arg);
      } catch (e) {
        if (e instanceof MathUtil.OverFlowException) {
          return null;
        }
      }
    }

    if (MathUtil.overflowsOrUnderflows(predecessor)) { return null; }
    return predecessor;
  }
});
