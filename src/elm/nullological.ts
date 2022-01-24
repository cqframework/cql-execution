const { Expression } = require('./expression');

class Null extends Expression {
  constructor(json) {
    super(json);
  }

  exec(ctx) {
    return null;
  }
}

class IsNull extends Expression {
  constructor(json) {
    super(json);
  }

  exec(ctx) {
    return this.execArgs(ctx) == null;
  }
}

class Coalesce extends Expression {
  constructor(json) {
    super(json);
  }

  exec(ctx) {
    for (let arg of this.args) {
      const result = arg.execute(ctx);
      // if a single arg that's a list, coalesce over the list
      if (this.args.length === 1 && Array.isArray(result)) {
        const item = result.find(item => item != null);
        if (item != null) {
          return item;
        }
      } else {
        if (result != null) {
          return result;
        }
      }
    }
    return null;
  }
}

module.exports = { Coalesce, IsNull, Null };
