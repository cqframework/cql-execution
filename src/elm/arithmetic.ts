import { Expression } from './expression';
import * as MathUtil from '../util/math';
import {
  Quantity,
  doAddition,
  doSubtraction,
  doMultiplication,
  doDivision
} from '../datatypes/quantity';
import { Uncertainty } from '../datatypes/uncertainty';
import { Context } from '../runtime/context';
import { build } from './builder';
import { DateTime } from '../datatypes/datetime';

export class Add extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
    const args = this.execArgs(ctx);
    if (args == null || args.some((x: any) => x == null)) {
      return null;
    }

    const sum = args.reduce((x: any, y: any) => {
      if (x.isUncertainty && !y.isUncertainty) {
        y = new Uncertainty(y, y);
      } else if (y.isUncertainty && !x.isUncertainty) {
        x = new Uncertainty(x, x);
      }

      if (x.isQuantity || x.isDateTime || x.isDate || (x.isTime && x.isTime())) {
        return doAddition(x, y);
      } else if (x.isUncertainty && y.isUncertainty) {
        if (
          x.low.isQuantity ||
          x.low.isDateTime ||
          x.low.isDate ||
          (x.low.isTime && x.low.isTime())
        ) {
          return new Uncertainty(doAddition(x.low, y.low), doAddition(x.high, y.high));
        } else {
          return new Uncertainty(x.low + y.low, x.high + y.high);
        }
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

export class Subtract extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
    const args = this.execArgs(ctx);
    if (args == null || args.some((x: any) => x == null)) {
      return null;
    }

    const difference = args.reduce((x: any, y: any) => {
      if (x.isUncertainty && !y.isUncertainty) {
        y = new Uncertainty(y, y);
      } else if (y.isUncertainty && !x.isUncertainty) {
        x = new Uncertainty(x, x);
      }

      if (x.isQuantity || x.isDateTime || x.isDate) {
        return doSubtraction(x, y);
      } else if (x.isUncertainty && y.isUncertainty) {
        if (x.low.isQuantity || x.low.isDateTime || x.low.isDate) {
          return new Uncertainty(doSubtraction(x.low, y.high), doSubtraction(x.high, y.low));
        } else {
          return new Uncertainty(x.low - y.high, x.high - y.low);
        }
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

export class Multiply extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
    const args = this.execArgs(ctx);
    if (args == null || args.some((x: any) => x == null)) {
      return null;
    }

    const product = args.reduce((x: any, y: any) => {
      if (x.isUncertainty && !y.isUncertainty) {
        y = new Uncertainty(y, y);
      } else if (y.isUncertainty && !x.isUncertainty) {
        x = new Uncertainty(x, x);
      }

      if (x.isQuantity || y.isQuantity) {
        return doMultiplication(x, y);
      } else if (x.isUncertainty && y.isUncertainty) {
        if (x.low.isQuantity) {
          return new Uncertainty(doMultiplication(x.low, y.low), doMultiplication(x.high, y.high));
        } else {
          return new Uncertainty(x.low * y.low, x.high * y.high);
        }
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

export class Divide extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
    const args = this.execArgs(ctx);
    if (args == null || args.some((x: any) => x == null)) {
      return null;
    }

    const quotient = args.reduce((x: any, y: any) => {
      if (x.isUncertainty && !y.isUncertainty) {
        y = new Uncertainty(y, y);
      } else if (y.isUncertainty && !x.isUncertainty) {
        x = new Uncertainty(x, x);
      }

      if (x.isQuantity) {
        return doDivision(x, y);
      } else if (x.isUncertainty && y.isUncertainty) {
        if (x.low.isQuantity) {
          return new Uncertainty(doDivision(x.low, y.high), doDivision(x.high, y.low));
        } else {
          return new Uncertainty(x.low / y.high, x.high / y.low);
        }
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

export class TruncatedDivide extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
    const args = this.execArgs(ctx);
    if (args == null || args.some((x: any) => x == null)) {
      return null;
    }

    const quotient = args.reduce((x: number, y: number) => x / y);
    const truncatedQuotient = quotient >= 0 ? Math.floor(quotient) : Math.ceil(quotient);

    if (MathUtil.overflowsOrUnderflows(truncatedQuotient)) {
      return null;
    }
    return truncatedQuotient;
  }
}

export class Modulo extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
    const args = this.execArgs(ctx);
    if (args == null || args.some((x: any) => x == null)) {
      return null;
    }

    const modulo = args.reduce((x: number, y: number) => x % y);

    return MathUtil.decimalOrNull(modulo);
  }
}

export class Ceiling extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
    const arg = this.execArgs(ctx);
    if (arg == null) {
      return null;
    }

    return Math.ceil(arg);
  }
}

export class Floor extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
    const arg = this.execArgs(ctx);
    if (arg == null) {
      return null;
    }

    return Math.floor(arg);
  }
}

export class Truncate extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
    const arg = this.execArgs(ctx);
    if (arg == null) {
      return null;
    }

    return arg >= 0 ? Math.floor(arg) : Math.ceil(arg);
  }
}
export class Abs extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
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

export class Negate extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
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

export class Round extends Expression {
  precision: any;

  constructor(json: any) {
    super(json);
    this.precision = build(json.precision);
  }

  exec(ctx: Context) {
    const arg = this.execArgs(ctx);
    if (arg == null) {
      return null;
    }

    const dec = this.precision != null ? this.precision.execute(ctx) : 0;
    return Math.round(arg * Math.pow(10, dec)) / Math.pow(10, dec);
  }
}

export class Ln extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
    const arg = this.execArgs(ctx);
    if (arg == null) {
      return null;
    }

    const ln = Math.log(arg);

    return MathUtil.decimalOrNull(ln);
  }
}

export class Exp extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
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

export class Log extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
    const args = this.execArgs(ctx);
    if (args == null || args.some((x: any) => x == null)) {
      return null;
    }

    const log = args.reduce((x: number, y: number) => Math.log(x) / Math.log(y));

    return MathUtil.decimalOrNull(log);
  }
}

export class Power extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
    const args = this.execArgs(ctx);
    if (args == null || args.some((x: any) => x == null)) {
      return null;
    }

    const power = args.reduce((x: number, y: number) => Math.pow(x, y));

    if (MathUtil.overflowsOrUnderflows(power)) {
      return null;
    }
    return power;
  }
}

export class MinValue extends Expression {
  static readonly MIN_VALUES = {
    '{urn:hl7-org:elm-types:r1}Integer': MathUtil.MIN_INT_VALUE,
    '{urn:hl7-org:elm-types:r1}Decimal': MathUtil.MIN_FLOAT_VALUE,
    '{urn:hl7-org:elm-types:r1}DateTime': MathUtil.MIN_DATETIME_VALUE,
    '{urn:hl7-org:elm-types:r1}Date': MathUtil.MIN_DATE_VALUE,
    '{urn:hl7-org:elm-types:r1}Time': MathUtil.MIN_TIME_VALUE
  };

  valueType: keyof typeof MinValue.MIN_VALUES;

  constructor(json: any) {
    super(json);
    this.valueType = json.valueType;
  }

  exec(ctx: Context) {
    if (MinValue.MIN_VALUES[this.valueType]) {
      if (this.valueType === '{urn:hl7-org:elm-types:r1}DateTime') {
        const minDateTime = (MinValue.MIN_VALUES[this.valueType] as DateTime).copy();
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

export class MaxValue extends Expression {
  static readonly MAX_VALUES = {
    '{urn:hl7-org:elm-types:r1}Integer': MathUtil.MAX_INT_VALUE,
    '{urn:hl7-org:elm-types:r1}Decimal': MathUtil.MAX_FLOAT_VALUE,
    '{urn:hl7-org:elm-types:r1}DateTime': MathUtil.MAX_DATETIME_VALUE,
    '{urn:hl7-org:elm-types:r1}Date': MathUtil.MAX_DATE_VALUE,
    '{urn:hl7-org:elm-types:r1}Time': MathUtil.MAX_TIME_VALUE
  };

  valueType: keyof typeof MaxValue.MAX_VALUES;

  constructor(json: any) {
    super(json);
    this.valueType = json.valueType;
  }

  exec(ctx: Context) {
    if (MaxValue.MAX_VALUES[this.valueType] != null) {
      if (this.valueType === '{urn:hl7-org:elm-types:r1}DateTime') {
        const maxDateTime = (MaxValue.MAX_VALUES[this.valueType] as DateTime).copy();
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

export class Successor extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
    const arg = this.execArgs(ctx);
    if (arg == null) {
      return null;
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

export class Predecessor extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
    const arg = this.execArgs(ctx);
    if (arg == null) {
      return null;
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
