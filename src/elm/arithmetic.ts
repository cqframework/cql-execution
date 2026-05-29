import { Expression } from './expression';
import * as MathUtil from '../util/math';
import { Quantity, doMultiplication, doDivision } from '../datatypes/quantity';
import { Uncertainty } from '../datatypes/uncertainty';
import { Context } from '../runtime/context';
import { build } from './builder';
import {
  DateTime,
  MAX_DATE_VALUE,
  MAX_DATETIME_VALUE,
  MAX_TIME_VALUE,
  MIN_DATE_VALUE,
  MIN_DATETIME_VALUE,
  MIN_TIME_VALUE
} from '../datatypes/datetime';
import {
  ELM_DECIMAL_TYPE,
  ELM_DATETIME_TYPE,
  ELM_DATE_TYPE,
  ELM_INTEGER_TYPE,
  ELM_LONG_TYPE,
  ELM_TIME_TYPE
} from '../util/elmTypes';
import {
  MAX_FLOAT_VALUE,
  MAX_INT_VALUE,
  MAX_LONG_VALUE,
  MIN_FLOAT_VALUE,
  MIN_INT_VALUE,
  MIN_LONG_VALUE
} from '../util/limits';

export class Add extends Expression {
  constructor(json: any) {
    super(json);
  }

  async exec(ctx: Context) {
    const args = await this.execArgs(ctx);
    if (args == null || args.some((x: any) => x == null)) {
      return null;
    }

    return MathUtil.add(args[0], args[1], this.resultTypeName);
  }
}

export class Subtract extends Expression {
  constructor(json: any) {
    super(json);
  }

  async exec(ctx: Context) {
    const args = await this.execArgs(ctx);
    if (args == null || args.some((x: any) => x == null)) {
      return null;
    }

    return MathUtil.subtract(args[0], args[1], this.resultTypeName);
  }
}

export class Multiply extends Expression {
  constructor(json: any) {
    super(json);
  }

  async exec(ctx: Context) {
    const args = await this.execArgs(ctx);
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

    if (MathUtil.overflowsOrUnderflows(product, this.resultTypeName)) {
      return null;
    }
    return product;
  }
}

export class Divide extends Expression {
  constructor(json: any) {
    super(json);
  }

  async exec(ctx: Context) {
    const args = await this.execArgs(ctx);
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
    if (MathUtil.overflowsOrUnderflows(quotient, this.resultTypeName)) {
      return null;
    }
    return quotient;
  }
}

export class TruncatedDivide extends Expression {
  constructor(json: any) {
    super(json);
  }

  async exec(ctx: Context) {
    const args = await this.execArgs(ctx);
    if (args == null || args.some((x: any) => x == null)) {
      return null;
    }

    let truncatedQuotient: number | bigint;
    if (typeof args[0] === 'bigint') {
      // bigint division always truncates
      try {
        truncatedQuotient = args.reduce((x: bigint, y: bigint) => x / y);
      } catch {
        // bigint divide by 0 throws an error
        return null;
      }
    } else {
      const quotient = args.reduce((x: number, y: number) => x / y);
      truncatedQuotient = quotient >= 0 ? Math.floor(quotient) : Math.ceil(quotient);
    }

    if (MathUtil.overflowsOrUnderflows(truncatedQuotient, this.resultTypeName)) {
      return null;
    }
    return truncatedQuotient;
  }
}

export class Modulo extends Expression {
  constructor(json: any) {
    super(json);
  }

  async exec(ctx: Context) {
    const args = await this.execArgs(ctx);
    if (args == null || args.some((x: any) => x == null)) {
      return null;
    }

    let modulo: number | bigint;
    try {
      modulo = args.reduce((x: any, y: any) => x % y);
    } catch {
      // modulo divide by zero results in null according to specification
      return null;
    }

    return MathUtil.decimalLongOrNull(modulo);
  }
}

export class Ceiling extends Expression {
  constructor(json: any) {
    super(json);
  }

  async exec(ctx: Context) {
    const arg = await this.execArgs(ctx);
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

  async exec(ctx: Context) {
    const arg = await this.execArgs(ctx);
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

  async exec(ctx: Context) {
    const arg = await this.execArgs(ctx);
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

  async exec(ctx: Context) {
    const arg = await this.execArgs(ctx);
    if (arg == null) {
      return null;
    } else if (arg.isQuantity) {
      return new Quantity(Math.abs(arg.value), arg.unit);
    } else if (typeof arg === 'bigint') {
      const absoluteValue = arg < 0n ? -arg : arg;
      return MathUtil.overflowsOrUnderflows(absoluteValue, this.resultTypeName)
        ? null
        : absoluteValue;
    } else {
      const absoluteValue = Math.abs(arg);
      return MathUtil.overflowsOrUnderflows(absoluteValue, this.resultTypeName)
        ? null
        : absoluteValue;
    }
  }
}

export class Negate extends Expression {
  constructor(json: any) {
    super(json);
  }

  async exec(ctx: Context) {
    const arg = await this.execArgs(ctx);
    if (arg == null) {
      return null;
    } else if (arg.isQuantity) {
      return new Quantity(arg.value * -1, arg.unit);
    } else if (typeof arg === 'bigint') {
      const negatedValue = arg * -1n;
      return MathUtil.overflowsOrUnderflows(negatedValue, this.resultTypeName)
        ? null
        : negatedValue;
    } else {
      const negatedValue = arg * -1;
      return MathUtil.overflowsOrUnderflows(negatedValue, this.resultTypeName)
        ? null
        : negatedValue;
    }
  }
}

export class Round extends Expression {
  precision: any;

  constructor(json: any) {
    super(json);
    this.precision = build(json.precision);
  }

  async exec(ctx: Context) {
    const arg = await this.execArgs(ctx);
    if (arg == null) {
      return null;
    }

    const dec = this.precision != null ? await this.precision.execute(ctx) : 0;
    return Math.round(arg * Math.pow(10, dec)) / Math.pow(10, dec);
  }
}

export class Ln extends Expression {
  constructor(json: any) {
    super(json);
  }

  async exec(ctx: Context) {
    const arg = await this.execArgs(ctx);
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

  async exec(ctx: Context) {
    const arg = await this.execArgs(ctx);
    if (arg == null) {
      return null;
    }

    const power = Math.exp(arg);

    if (MathUtil.overflowsOrUnderflows(power, this.resultTypeName)) {
      return null;
    }
    return power;
  }
}

export class Log extends Expression {
  constructor(json: any) {
    super(json);
  }

  async exec(ctx: Context) {
    const args = await this.execArgs(ctx);
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

  async exec(ctx: Context) {
    const args = await this.execArgs(ctx);
    if (args == null || args.some((x: any) => x == null)) {
      return null;
    }

    const power = args.reduce((x: any, y: any) => doPower(x, y));

    // Note: The resultTypeName may be wrong if the exponent is a negative number. Math.overflowsOrUnderflows
    // already accounts for this possibility by only considering it an integer if Number.isInteger(value).
    // E.g., CQL-to-ELM says 10^-1 is an Integer result type, but the correct result is a 0.1 (a Decimal)
    if (MathUtil.overflowsOrUnderflows(power, this.resultTypeName)) {
      return null;
    }
    return power;
  }
}

function doPower(x: any, y: any) {
  if (typeof x === 'bigint' && typeof y === 'bigint' && y < 0n) {
    // x ** y does not support negative exponents for bigint, so downgrade to number if possible, otherwise return null
    if (
      x < BigInt(Number.MIN_SAFE_INTEGER) ||
      x > BigInt(Number.MAX_SAFE_INTEGER) ||
      y < BigInt(Number.MIN_SAFE_INTEGER)
    ) {
      // can't safely convert to number so just return null
      return null;
    }
    return Number(x) ** Number(y);
  }

  try {
    return x ** y;
  } catch {
    // will throw if BigInt goes out of range
    return null;
  }
}

export class MinValue extends Expression {
  static readonly MIN_VALUES = {
    [ELM_INTEGER_TYPE]: MIN_INT_VALUE,
    [ELM_LONG_TYPE]: MIN_LONG_VALUE,
    [ELM_DECIMAL_TYPE]: MIN_FLOAT_VALUE,
    [ELM_DATETIME_TYPE]: MIN_DATETIME_VALUE,
    [ELM_DATE_TYPE]: MIN_DATE_VALUE,
    [ELM_TIME_TYPE]: MIN_TIME_VALUE
  };

  valueType: keyof typeof MinValue.MIN_VALUES;

  constructor(json: any) {
    super(json);
    this.valueType = json.valueType;
  }

  async exec(ctx: Context) {
    if (MinValue.MIN_VALUES[this.valueType]) {
      if (this.valueType === ELM_DATETIME_TYPE) {
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
    [ELM_INTEGER_TYPE]: MAX_INT_VALUE,
    [ELM_LONG_TYPE]: MAX_LONG_VALUE,
    [ELM_DECIMAL_TYPE]: MAX_FLOAT_VALUE,
    [ELM_DATETIME_TYPE]: MAX_DATETIME_VALUE,
    [ELM_DATE_TYPE]: MAX_DATE_VALUE,
    [ELM_TIME_TYPE]: MAX_TIME_VALUE
  };

  valueType: keyof typeof MaxValue.MAX_VALUES;

  constructor(json: any) {
    super(json);
    this.valueType = json.valueType;
  }

  async exec(ctx: Context) {
    if (MaxValue.MAX_VALUES[this.valueType] != null) {
      if (this.valueType === ELM_DATETIME_TYPE) {
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

  async exec(ctx: Context) {
    const arg = await this.execArgs(ctx);
    if (arg == null) {
      return null;
    }

    let successor = null;
    try {
      // MathUtil.successor throws on overflow, and the exception is used in
      // the logic for evaluating `meets`, so it can't be changed to just return null
      successor = MathUtil.successor(arg, this.resultTypeName);
    } catch (e) {
      if (e instanceof MathUtil.OverFlowException) {
        return null;
      }
    }

    if (MathUtil.overflowsOrUnderflows(successor, this.resultTypeName)) {
      return null;
    }
    return successor;
  }
}

export class Predecessor extends Expression {
  constructor(json: any) {
    super(json);
  }

  async exec(ctx: Context) {
    const arg = await this.execArgs(ctx);
    if (arg == null) {
      return null;
    }

    let predecessor = null;
    try {
      // MathUtil.predecessor throws on underflow, and the exception is used in
      // the logic for evaluating `meets`, so it can't be changed to just return null
      predecessor = MathUtil.predecessor(arg, this.resultTypeName);
    } catch (e) {
      if (e instanceof MathUtil.OverFlowException) {
        return null;
      }
    }

    if (MathUtil.overflowsOrUnderflows(predecessor, this.resultTypeName)) {
      return null;
    }
    return predecessor;
  }
}
