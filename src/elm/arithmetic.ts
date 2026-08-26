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
import { Decimal, MAX_DECIMAL_VALUE, MIN_DECIMAL_VALUE } from '../datatypes/decimal';
import {
  ELM_DECIMAL_TYPE,
  ELM_DATETIME_TYPE,
  ELM_DATE_TYPE,
  ELM_INTEGER_TYPE,
  ELM_LONG_TYPE,
  ELM_TIME_TYPE
} from '../util/elmTypes';
import { MAX_INT_VALUE, MAX_LONG_VALUE, MIN_INT_VALUE, MIN_LONG_VALUE } from '../util/limits';

export class Add extends Expression {
  constructor(json: any) {
    super(json);
  }

  async exec(ctx: Context) {
    const args = await this.execArgs(ctx);
    if (args == null || args.some((x: any) => x == null)) {
      return null;
    }

    const sum = MathUtil.add(args[0], args[1], this.resultTypeName);
    return MathUtil.finalizeNumericResult(sum, this.resultTypeName);
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

    const difference = MathUtil.subtract(args[0], args[1], this.resultTypeName);
    return MathUtil.finalizeNumericResult(difference, this.resultTypeName);
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

    let [x, y] = args;

    if (x.isUncertainty && !y.isUncertainty) {
      y = new Uncertainty(y, y);
    } else if (y.isUncertainty && !x.isUncertainty) {
      x = new Uncertainty(x, x);
    }

    let product;
    if (x.isQuantity || y.isQuantity) {
      product = doMultiplication(x, y);
    } else if (x.isUncertainty && y.isUncertainty) {
      if (x.low.isQuantity) {
        product = new Uncertainty(doMultiplication(x.low, y.low), doMultiplication(x.high, y.high));
      } else {
        product = new Uncertainty(
          MathUtil.multiply(x.low, y.low),
          MathUtil.multiply(x.high, y.high)
        );
      }
    } else {
      product = MathUtil.multiply(x, y);
    }

    if (MathUtil.overflowsOrUnderflows(product)) {
      return null;
    }

    return MathUtil.finalizeNumericResult(product, this.resultTypeName);
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

    let quotient;
    let [x, y] = args;
    try {
      if (x.isUncertainty && !y.isUncertainty) {
        y = new Uncertainty(y, y);
      } else if (y.isUncertainty && !x.isUncertainty) {
        x = new Uncertainty(x, x);
      }

      if (x.isQuantity) {
        quotient = doDivision(x, y);
      } else if (x.isUncertainty && y.isUncertainty) {
        let low, high;
        if (x.low.isQuantity) {
          low = doDivision(x.low, y.high);
          high = doDivision(x.high, y.low);
        } else {
          low = MathUtil.divide(x.low, y.high);
          high = MathUtil.divide(x.high, y.low);
        }
        quotient = new Uncertainty(low, high);
      } else {
        quotient = MathUtil.divide(x, y);
      }
    } catch {
      // Decimal division by zero throws; CQL defines the result as null.
      return null;
    }

    if (MathUtil.overflowsOrUnderflows(quotient)) {
      return null;
    }
    return MathUtil.finalizeNumericResult(quotient, this.resultTypeName);
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

    const [x, y] = args;
    let quotient;
    if (x.isQuantity) {
      quotient = doDivision(x, y);
      if (quotient instanceof Quantity) {
        quotient = new Quantity(quotient.value.truncated(), quotient.unit);
      }
    } else {
      quotient = MathUtil.divide(x, y);

      // MathUtil.divide performs truncated division for Integers and Longs implicitly
      if (
        quotient != null &&
        (x.isDecimal || y.isDecimal || this.resultTypeName === ELM_DECIMAL_TYPE)
      ) {
        quotient = (quotient as Decimal).truncated();
      }
    }

    if (MathUtil.overflowsOrUnderflows(quotient)) {
      return null;
    }
    return quotient;
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

    let modulo: number | bigint | Decimal;
    const [x, y] = args;
    try {
      modulo = x.isDecimal || y.isDecimal ? Decimal.from(x).modulo(y) : x % y;
    } catch {
      // modulo divide by zero results in null according to specification
      return null;
    }

    return MathUtil.decimalLongOrNull(MathUtil.finalizeNumericResult(modulo, this.resultTypeName));
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

    return arg.isDecimal ? arg.ceil() : Math.ceil(arg);
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

    return arg.isDecimal ? arg.floor() : Math.floor(arg);
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

    return arg.isDecimal ? arg.truncate() : arg >= 0 ? Math.floor(arg) : Math.ceil(arg);
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
      return new Quantity(arg.value.abs(), arg.unit);
    } else if (typeof arg === 'bigint') {
      const absoluteValue = arg < 0n ? -arg : arg;
      return MathUtil.overflowsOrUnderflows(absoluteValue) ? null : absoluteValue;
    } else if (arg.isDecimal) {
      const absoluteValue = arg.abs();
      return MathUtil.overflowsOrUnderflows(absoluteValue) ? null : absoluteValue;
    } else {
      const absoluteValue = Math.abs(arg);
      return MathUtil.overflowsOrUnderflows(absoluteValue) ? null : absoluteValue;
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
      return new Quantity(arg.value.negate(), arg.unit);
    } else if (typeof arg === 'bigint') {
      const negatedValue = arg * -1n;
      return MathUtil.overflowsOrUnderflows(negatedValue) ? null : negatedValue;
    } else if (arg.isDecimal) {
      const negatedValue = arg.negate();
      return MathUtil.overflowsOrUnderflows(negatedValue) ? null : negatedValue;
    } else {
      const negatedValue = arg * -1;
      return MathUtil.overflowsOrUnderflows(negatedValue) ? null : negatedValue;
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
    return Decimal.from(arg).round(dec);
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

    try {
      const ln = Decimal.from(arg).ln();
      if (MathUtil.overflowsOrUnderflows(ln)) {
        return null;
      }
      return MathUtil.finalizeNumericResult(ln);
    } catch {
      return null;
    }
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

    let power;
    try {
      power = Decimal.from(arg).exp().normalized();
    } catch {
      return null;
    }

    if (MathUtil.overflowsOrUnderflows(power)) {
      return null;
    }
    return MathUtil.finalizeNumericResult(power);
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

    try {
      const log = Decimal.from(args[0]).log(args[1]);
      return MathUtil.finalizeNumericResult(log);
    } catch {
      return null;
    }
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

    // Note: The resultTypeName may be wrong if the exponent is a negative number.
    // E.g., CQL-to-ELM says 10^-1 is an Integer result type, but the correct result is a 0.1 (a Decimal)
    // doPower handles this scenario
    const power = doPower(args[0], args[1]);

    if (MathUtil.overflowsOrUnderflows(power)) {
      return null;
    }
    return power;
  }
}

function doPower(x: any, y: any) {
  if (
    x.isDecimal ||
    y.isDecimal ||
    (typeof y == 'number' && y < 0) ||
    (typeof y === 'bigint' && y < 0n)
  ) {
    // Decimal values or negative powers always produce Decimal result
    return Decimal.from(x).power(y);
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
    [ELM_DECIMAL_TYPE]: MIN_DECIMAL_VALUE,
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
    [ELM_DECIMAL_TYPE]: MAX_DECIMAL_VALUE,
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

  async exec(ctx: Context) {
    const arg = await this.execArgs(ctx);
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
