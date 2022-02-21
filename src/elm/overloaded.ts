/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Expression } from './expression';
import { ThreeValuedLogic } from '../datatypes/logic';
import { DateTime } from '../datatypes/datetime';
import { typeIsArray } from '../util/util';
import { equals, equivalent } from '../util/comparison';
import * as DT from './datetime';
import * as LIST from './list';
import * as IVL from './interval';
import { Context } from '../runtime/context';

export class Equal extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
    const args = this.execArgs(ctx);
    if (args[0] == null || args[1] == null) {
      return null;
    }
    // @ts-ignore
    return equals(...args);
  }
}

export class Equivalent extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
    const [a, b] = this.execArgs(ctx);
    if (a == null && b == null) {
      return true;
    } else if (a == null || b == null) {
      return false;
    } else {
      return equivalent(a, b);
    }
  }
}

export class NotEqual extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
    const args = this.execArgs(ctx);
    if (args[0] == null || args[1] == null) {
      return null;
    }
    // @ts-ignore
    return ThreeValuedLogic.not(equals(...this.execArgs(ctx)));
  }
}

export class Union extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
    const [a, b] = this.execArgs(ctx);
    if (a == null && b == null) {
      return this.listTypeArgs() ? [] : null;
    }
    if (a == null || b == null) {
      const notNull = a || b;
      if (typeIsArray(notNull)) {
        return notNull;
      } else {
        return null;
      }
    }
    const lib = typeIsArray(a) ? LIST : IVL;
    return lib.doUnion(a, b);
  }

  listTypeArgs() {
    return this.args?.some(arg => {
      return arg.asTypeSpecifier != null && arg.asTypeSpecifier.type === 'ListTypeSpecifier';
    });
  }
}

export class Except extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
    const [a, b] = this.execArgs(ctx);
    if (a == null) {
      return null;
    }
    if (b == null) {
      return typeIsArray(a) ? a : null;
    }
    const lib = typeIsArray(a) ? LIST : IVL;
    return lib.doExcept(a, b);
  }
}

export class Intersect extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
    const [a, b] = this.execArgs(ctx);
    if (a == null || b == null) {
      return null;
    }
    const lib = typeIsArray(a) ? LIST : IVL;
    return lib.doIntersect(a, b);
  }
}

export class Indexer extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
    const [operand, index] = this.execArgs(ctx);
    if (operand == null || index == null) {
      return null;
    }
    if (index < 0 || index >= operand.length) {
      return null;
    }
    return operand[index];
  }
}

export class In extends Expression {
  precision?: any;

  constructor(json: any) {
    super(json);
    this.precision = json.precision != null ? json.precision.toLowerCase() : undefined;
  }

  exec(ctx: Context) {
    const [item, container] = this.execArgs(ctx);
    if (item == null) {
      return null;
    }
    if (container == null) {
      return false;
    }
    const lib = typeIsArray(container) ? LIST : IVL;
    return lib.doContains(container, item, this.precision);
  }
}

export class Contains extends Expression {
  precision?: any;

  constructor(json: any) {
    super(json);
    this.precision = json.precision != null ? json.precision.toLowerCase() : undefined;
  }

  exec(ctx: Context) {
    const [container, item] = this.execArgs(ctx);
    if (container == null) {
      return false;
    }
    if (item == null) {
      return null;
    }
    const lib = typeIsArray(container) ? LIST : IVL;
    return lib.doContains(container, item, this.precision);
  }
}

export class Includes extends Expression {
  precision?: any;

  constructor(json: any) {
    super(json);
    this.precision = json.precision != null ? json.precision.toLowerCase() : undefined;
  }

  exec(ctx: Context) {
    const [container, contained] = this.execArgs(ctx);
    if (container == null || contained == null) {
      return null;
    }
    const lib = typeIsArray(container) ? LIST : IVL;
    return lib.doIncludes(container, contained, this.precision);
  }
}

export class IncludedIn extends Expression {
  precision?: any;

  constructor(json: any) {
    super(json);
    this.precision = json.precision != null ? json.precision.toLowerCase() : undefined;
  }

  exec(ctx: Context) {
    const [contained, container] = this.execArgs(ctx);
    if (container == null || contained == null) {
      return null;
    }
    const lib = typeIsArray(container) ? LIST : IVL;
    return lib.doIncludes(container, contained, this.precision);
  }
}

export class ProperIncludes extends Expression {
  precision?: any;

  constructor(json: any) {
    super(json);
    this.precision = json.precision != null ? json.precision.toLowerCase() : undefined;
  }

  exec(ctx: Context) {
    const [container, contained] = this.execArgs(ctx);
    if (container == null || contained == null) {
      return null;
    }
    const lib = typeIsArray(container) ? LIST : IVL;
    return lib.doProperIncludes(container, contained, this.precision);
  }
}

export class ProperIncludedIn extends Expression {
  precision?: any;

  constructor(json: any) {
    super(json);
    this.precision = json.precision != null ? json.precision.toLowerCase() : undefined;
  }

  exec(ctx: Context) {
    const [contained, container] = this.execArgs(ctx);
    if (container == null || contained == null) {
      return null;
    }
    const lib = typeIsArray(container) ? LIST : IVL;
    return lib.doProperIncludes(container, contained, this.precision);
  }
}

export class Length extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
    const arg = this.execArgs(ctx);
    if (arg != null) {
      return arg.length;
    } else if (this.arg.asTypeSpecifier.type === 'ListTypeSpecifier') {
      return 0;
    } else {
      return null;
    }
  }
}

export class After extends Expression {
  precision?: any;

  constructor(json: any) {
    super(json);
    this.precision = json.precision != null ? json.precision.toLowerCase() : undefined;
  }

  exec(ctx: Context) {
    const [a, b] = this.execArgs(ctx);
    if (a == null || b == null) {
      return null;
    }
    const lib = a instanceof DateTime ? DT : IVL;
    return lib.doAfter(a, b, this.precision);
  }
}

export class Before extends Expression {
  precision?: any;

  constructor(json: any) {
    super(json);
    this.precision = json.precision != null ? json.precision.toLowerCase() : undefined;
  }

  exec(ctx: Context) {
    const [a, b] = this.execArgs(ctx);
    if (a == null || b == null) {
      return null;
    }
    const lib = a instanceof DateTime ? DT : IVL;
    return lib.doBefore(a, b, this.precision);
  }
}

export class SameAs extends Expression {
  precision?: any;

  constructor(json: any) {
    super(json);
    this.precision = json.precision;
  }

  exec(ctx: Context) {
    const [a, b] = this.execArgs(ctx);
    if (a != null && b != null) {
      return a.sameAs(b, this.precision != null ? this.precision.toLowerCase() : undefined);
    } else {
      return null;
    }
  }
}

export class SameOrAfter extends Expression {
  precision?: any;

  constructor(json: any) {
    super(json);
    this.precision = json.precision;
  }

  exec(ctx: Context) {
    const [d1, d2] = this.execArgs(ctx);
    if (d1 != null && d2 != null) {
      return d1.sameOrAfter(d2, this.precision != null ? this.precision.toLowerCase() : undefined);
    } else {
      return null;
    }
  }
}

export class SameOrBefore extends Expression {
  precision?: any;

  constructor(json: any) {
    super(json);
    this.precision = json.precision;
  }

  exec(ctx: Context) {
    const [d1, d2] = this.execArgs(ctx);
    if (d1 != null && d2 != null) {
      return d1.sameOrBefore(d2, this.precision != null ? this.precision.toLowerCase() : undefined);
    } else {
      return null;
    }
  }
}

// Implemented for DateTime, Date, and Time but not for Decimal yet
export class Precision extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
    const arg = this.execArgs(ctx);
    if (arg == null) {
      return null;
    }

    // Since we can't extend UnimplementedExpression directly for this overloaded function,
    // we have to copy the error to throw here if we are not using the correct type
    if (!arg.getPrecisionValue) {
      throw new Error(`Unimplemented Expression: Precision`);
    }

    return arg.getPrecisionValue();
  }
}
