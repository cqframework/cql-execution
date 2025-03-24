/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Expression } from './expression';
import { ThreeValuedLogic } from '../datatypes/logic';
import { DateTime } from '../datatypes/datetime';
import { resolveValueSet, typeIsArray } from '../util/util';
import { equals, equivalent } from '../util/comparison';
import * as DT from './datetime';
import * as LIST from './list';
import * as IVL from './interval';
import { Context } from '../runtime/context';
import { ValueSet } from '../datatypes/clinical';

export class Equal extends Expression {
  constructor(json: any) {
    super(json);
  }

  async exec(ctx: Context) {
    const args = await this.execArgs(ctx);
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

  async exec(ctx: Context) {
    let [a, b] = await this.execArgs(ctx);
    if (a == null && b == null) {
      return true;
    } else if (a == null || b == null) {
      return false;
    } else {
      // comparison of valueset id/version -> only check expanded equivalence if these don't match
      if (a.isValueSet && b.isValueSet) {
        if (a.id === b.id && a.version === b.version) {
          return true;
        }
      }
      if (a.isValueSet) {
        a = await resolveValueSet(a as ValueSet, ctx);
      }
      if (b.isValueSet) {
        b = await resolveValueSet(b as ValueSet, ctx);
      }
      return equivalent(a, b);
    }
  }
}

export class NotEqual extends Expression {
  constructor(json: any) {
    super(json);
  }

  async exec(ctx: Context) {
    const args = await this.execArgs(ctx);
    if (args[0] == null || args[1] == null) {
      return null;
    }
    // @ts-ignore
    return ThreeValuedLogic.not(equals(...(await this.execArgs(ctx))));
  }
}

export class Union extends Expression {
  constructor(json: any) {
    super(json);
  }

  async exec(ctx: Context) {
    const [a, b] = await this.execArgs(ctx);
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
    return this.args?.some((arg: any) => {
      return arg.asTypeSpecifier != null && arg.asTypeSpecifier.type === 'ListTypeSpecifier';
    });
  }
}

export class Except extends Expression {
  constructor(json: any) {
    super(json);
  }

  async exec(ctx: Context) {
    const [a, b] = await this.execArgs(ctx);
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

  async exec(ctx: Context) {
    const [a, b] = await this.execArgs(ctx);
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

  async exec(ctx: Context) {
    const [operand, index] = await this.execArgs(ctx);
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

  async exec(ctx: Context) {
    const [item, container] = await this.execArgs(ctx);
    if (container == null) {
      return false;
    }
    if (typeIsArray(container)) {
      return LIST.doContains(container, item);
    } else {
      if (item == null) {
        return null;
      }
      return IVL.doContains(container, item, this.precision);
    }
  }
}

export class Contains extends Expression {
  precision?: any;

  constructor(json: any) {
    super(json);
    this.precision = json.precision != null ? json.precision.toLowerCase() : undefined;
  }

  async exec(ctx: Context) {
    const [container, item] = await this.execArgs(ctx);
    if (container == null) {
      return false;
    }
    if (typeIsArray(container)) {
      return LIST.doContains(container, item);
    } else {
      if (item == null) {
        return null;
      }
      return IVL.doContains(container, item, this.precision);
    }
  }
}

export class Includes extends Expression {
  precision?: any;

  constructor(json: any) {
    super(json);
    this.precision = json.precision != null ? json.precision.toLowerCase() : undefined;
  }

  async exec(ctx: Context) {
    const [container, contained] = await this.execArgs(ctx);
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

  async exec(ctx: Context) {
    const [contained, container] = await this.execArgs(ctx);
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

  async exec(ctx: Context) {
    const [container, contained] = await this.execArgs(ctx);
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

  async exec(ctx: Context) {
    const [contained, container] = await this.execArgs(ctx);
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

  async exec(ctx: Context) {
    const arg = await this.execArgs(ctx);
    if (arg != null) {
      return arg.length;
    } else if ((this.arg as any).asTypeSpecifier.type === 'ListTypeSpecifier') {
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

  async exec(ctx: Context) {
    const [a, b] = await this.execArgs(ctx);
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

  async exec(ctx: Context) {
    const [a, b] = await this.execArgs(ctx);
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

  async exec(ctx: Context) {
    const [a, b] = await this.execArgs(ctx);
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

  async exec(ctx: Context) {
    const [d1, d2] = await this.execArgs(ctx);
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

  async exec(ctx: Context) {
    const [d1, d2] = await this.execArgs(ctx);
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

  async exec(ctx: Context) {
    const arg = await this.execArgs(ctx);
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
