const { Expression } = require('./expression');
const { Uncertainty } = require('../datatypes/datatypes');

// Equal is completely handled by overloaded#Equal

// NotEqual is completely handled by overloaded#Equal

class Less extends Expression {
  constructor(json) {
    super(json);
  }

  exec(ctx) {
    const args = this.execArgs(ctx).map(x => Uncertainty.from(x));
    if (args[0] == null || args[1] == null) {
      return null;
    }
    return args[0].lessThan(args[1]);
  }
}

class LessOrEqual extends Expression {
  constructor(json) {
    super(json);
  }

  exec(ctx) {
    const args = this.execArgs(ctx).map(x => Uncertainty.from(x));
    if (args[0] == null || args[1] == null) {
      return null;
    }
    return args[0].lessThanOrEquals(args[1]);
  }
}

class Greater extends Expression {
  constructor(json) {
    super(json);
  }

  exec(ctx) {
    const args = this.execArgs(ctx).map(x => Uncertainty.from(x));
    if (args[0] == null || args[1] == null) {
      return null;
    }
    return args[0].greaterThan(args[1]);
  }
}

class GreaterOrEqual extends Expression {
  constructor(json) {
    super(json);
  }

  exec(ctx) {
    const args = this.execArgs(ctx).map(x => Uncertainty.from(x));
    if (args[0] == null || args[1] == null) {
      return null;
    }
    return args[0].greaterThanOrEquals(args[1]);
  }
}

module.exports = { Greater, GreaterOrEqual, Less, LessOrEqual };
