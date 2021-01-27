const { Expression } = require('./expression');
const { ThreeValuedLogic } = require('../datatypes/logic');
const { DateTime } = require('../datatypes/datetime');
const { typeIsArray } = require('../util/util');
const { equals, equivalent } = require('../util/comparison');
const DT = require('./datetime');
const LIST = require('./list');
const IVL = require('./interval');

class Equal extends Expression {
  constructor(json) {
    super(json);
  }

  exec(ctx) {
    const args = this.execArgs(ctx);
    if (args[0] == null || args[1] == null) {
      return null;
    }
    return equals(...this.execArgs(ctx));
  }
}

class Equivalent extends Expression {
  constructor(json) {
    super(json);
  }

  exec(ctx) {
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

class NotEqual extends Expression {
  constructor(json) {
    super(json);
  }

  exec(ctx) {
    const args = this.execArgs(ctx);
    if (args[0] == null || args[1] == null) {
      return null;
    }
    return ThreeValuedLogic.not(equals(...this.execArgs(ctx)));
  }
}

class Union extends Expression {
  constructor(json) {
    super(json);
  }

  exec(ctx) {
    const [a, b] = this.execArgs(ctx);
    if (a == null || b == null) {
      return null;
    }
    const lib = typeIsArray(a) ? LIST : IVL;
    return lib.doUnion(a, b);
  }
}

class Except extends Expression {
  constructor(json) {
    super(json);
  }

  exec(ctx) {
    const [a, b] = this.execArgs(ctx);
    if (a == null || b == null) {
      return null;
    }
    const lib = typeIsArray(a) ? LIST : IVL;
    return lib.doExcept(a, b);
  }
}

class Intersect extends Expression {
  constructor(json) {
    super(json);
  }

  exec(ctx) {
    const [a, b] = this.execArgs(ctx);
    if (a == null || b == null) {
      return null;
    }
    const lib = typeIsArray(a) ? LIST : IVL;
    return lib.doIntersect(a, b);
  }
}

class Indexer extends Expression {
  constructor(json) {
    super(json);
  }

  exec(ctx) {
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

class In extends Expression {
  constructor(json) {
    super(json);
    this.precision = json.precision != null ? json.precision.toLowerCase() : undefined;
  }

  exec(ctx) {
    const [item, container] = this.execArgs(ctx);
    if (container == null || item == null) {
      return null;
    }
    const lib = typeIsArray(container) ? LIST : IVL;
    return lib.doContains(container, item, this.precision);
  }
}

class Contains extends Expression {
  constructor(json) {
    super(json);
    this.precision = json.precision != null ? json.precision.toLowerCase() : undefined;
  }

  exec(ctx) {
    const [container, item] = this.execArgs(ctx);
    if (container == null || item == null) {
      return null;
    }
    const lib = typeIsArray(container) ? LIST : IVL;
    return lib.doContains(container, item, this.precision);
  }
}

class Includes extends Expression {
  constructor(json) {
    super(json);
    this.precision = json.precision != null ? json.precision.toLowerCase() : undefined;
  }

  exec(ctx) {
    const [container, contained] = this.execArgs(ctx);
    if (container == null || contained == null) {
      return null;
    }
    const lib = typeIsArray(container) ? LIST : IVL;
    return lib.doIncludes(container, contained, this.precision);
  }
}

class IncludedIn extends Expression {
  constructor(json) {
    super(json);
    this.precision = json.precision != null ? json.precision.toLowerCase() : undefined;
  }

  exec(ctx) {
    const [contained, container] = this.execArgs(ctx);
    if (container == null || contained == null) {
      return null;
    }
    const lib = typeIsArray(container) ? LIST : IVL;
    return lib.doIncludes(container, contained, this.precision);
  }
}

class ProperIncludes extends Expression {
  constructor(json) {
    super(json);
    this.precision = json.precision != null ? json.precision.toLowerCase() : undefined;
  }

  exec(ctx) {
    const [container, contained] = this.execArgs(ctx);
    if (container == null || contained == null) {
      return null;
    }
    const lib = typeIsArray(container) ? LIST : IVL;
    return lib.doProperIncludes(container, contained, this.precision);
  }
}

class ProperIncludedIn extends Expression {
  constructor(json) {
    super(json);
    this.precision = json.precision != null ? json.precision.toLowerCase() : undefined;
  }

  exec(ctx) {
    const [contained, container] = this.execArgs(ctx);
    if (container == null || contained == null) {
      return null;
    }
    const lib = typeIsArray(container) ? LIST : IVL;
    return lib.doProperIncludes(container, contained, this.precision);
  }
}

class Length extends Expression {
  constructor(json) {
    super(json);
  }

  exec(ctx) {
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

class After extends Expression {
  constructor(json) {
    super(json);
    this.precision = json.precision != null ? json.precision.toLowerCase() : undefined;
  }

  exec(ctx) {
    const [a, b] = this.execArgs(ctx);
    if (a == null || b == null) {
      return null;
    }
    const lib = a instanceof DateTime ? DT : IVL;
    return lib.doAfter(a, b, this.precision);
  }
}

class Before extends Expression {
  constructor(json) {
    super(json);
    this.precision = json.precision != null ? json.precision.toLowerCase() : undefined;
  }

  exec(ctx) {
    const [a, b] = this.execArgs(ctx);
    if (a == null || b == null) {
      return null;
    }
    const lib = a instanceof DateTime ? DT : IVL;
    return lib.doBefore(a, b, this.precision);
  }
}

class SameAs extends Expression {
  constructor(json) {
    super(json);
    this.precision = json.precision;
  }

  exec(ctx) {
    const [a, b] = this.execArgs(ctx);
    if (a != null && b != null) {
      return a.sameAs(b, this.precision != null ? this.precision.toLowerCase() : undefined);
    } else {
      return null;
    }
  }
}

class SameOrAfter extends Expression {
  constructor(json) {
    super(json);
    this.precision = json.precision;
  }

  exec(ctx) {
    const [d1, d2] = this.execArgs(ctx);
    if (d1 != null && d2 != null) {
      return d1.sameOrAfter(d2, this.precision != null ? this.precision.toLowerCase() : undefined);
    } else {
      return null;
    }
  }
}

class SameOrBefore extends Expression {
  constructor(json) {
    super(json);
    this.precision = json.precision;
  }

  exec(ctx) {
    const [d1, d2] = this.execArgs(ctx);
    if (d1 != null && d2 != null) {
      return d1.sameOrBefore(d2, this.precision != null ? this.precision.toLowerCase() : undefined);
    } else {
      return null;
    }
  }
}

module.exports = {
  After,
  Before,
  Contains,
  Equal,
  Equivalent,
  Except,
  In,
  IncludedIn,
  Includes,
  Indexer,
  Intersect,
  Length,
  NotEqual,
  ProperIncludedIn,
  ProperIncludes,
  SameAs,
  SameOrAfter,
  SameOrBefore,
  Union
};
