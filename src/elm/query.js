/* eslint-disable
    no-unused-vars,
*/
// TODO: This file was created by bulk-decaffeinate.
// Fix any style issues and re-enable lint.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS205: Consider reworking code to avoid use of IIFEs
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
let AliasedQuerySource,
  AliasRef,
  ByColumn,
  ByDirection,
  ByExpression,
  LetClause,
  Query,
  QueryLetRef,
  ReturnClause,
  Sort,
  SortClause,
  With,
  Without;
const { Expression, UnimplementedExpression } = require('./expression');
const { Context } = require('../runtime/context');
const { build } = require('./builder');
const { typeIsArray, allTrue } = require('../util/util');
const { equals } = require('../util/comparison');

module.exports.AliasedQuerySource = AliasedQuerySource = class AliasedQuerySource {
  constructor(json) {
    this.alias = json.alias;
    this.expression = build(json.expression);
  }
};

module.exports.LetClause = LetClause = class LetClause {
  constructor(json) {
    this.identifier = json.identifier;
    this.expression = build(json.expression);
  }
};

module.exports.With = With = class With extends Expression {
  constructor(json) {
    super(...arguments);
    this.alias = json.alias;
    this.expression = build(json.expression);
    this.suchThat = build(json.suchThat);
  }
  exec(ctx) {
    let records = this.expression.execute(ctx);
    this.isList = typeIsArray(records);
    records = this.isList ? records : [records];
    const returns = (() => {
      const result = [];
      for (let rec of records) {
        const childCtx = ctx.childContext();
        childCtx.set(this.alias, rec);
        result.push(this.suchThat.execute(childCtx));
      }
      return result;
    })();
    return returns.some(x => x);
  }
};

module.exports.Without = Without = class Without extends With {
  constructor(json) {
    super(...arguments);
  }
  exec(ctx) {
    return !super.exec(ctx);
  }
};

// ELM-only, not a product of CQL
module.exports.Sort = Sort = class Sort extends UnimplementedExpression {};

module.exports.ByDirection = ByDirection = class ByDirection extends Expression {
  constructor(json) {
    super(...arguments);
    this.direction = json.direction;
    this.low_order = this.direction === 'asc' ? -1 : 1;
    this.high_order = this.low_order * -1;
  }

  exec(ctx, a, b) {
    if (a === b) {
      return 0;
    } else if (a.isQuantity && b.isQuantity) {
      if (a.before(b)) {
        return this.low_order;
      } else {
        return this.high_order;
      }
    } else if (a < b) {
      return this.low_order;
    } else {
      return this.high_order;
    }
  }
};

module.exports.ByExpression = ByExpression = class ByExpression extends Expression {
  constructor(json) {
    super(...arguments);
    this.expression = build(json.expression);
    this.direction = json.direction;
    this.low_order = this.direction === 'asc' ? -1 : 1;
    this.high_order = this.low_order * -1;
  }

  exec(ctx, a, b) {
    let sctx = ctx.childContext(a);
    const a_val = this.expression.execute(sctx);
    sctx = ctx.childContext(b);
    const b_val = this.expression.execute(sctx);

    if (a_val === b_val) {
      return 0;
    } else if (a_val.isQuantity && b_val.isQuantity) {
      if (a_val.before(b_val)) {
        return this.low_order;
      } else {
        return this.high_order;
      }
    } else if (a_val < b_val) {
      return this.low_order;
    } else {
      return this.high_order;
    }
  }
};

module.exports.ByColumn = ByColumn = class ByColumn extends ByExpression {
  constructor(json) {
    super(...arguments);
    this.expression = build({
      name: json.path,
      type: 'IdentifierRef'
    });
  }
};

module.exports.ReturnClause = ReturnClause = ReturnClause = class ReturnClause {
  constructor(json) {
    this.expression = build(json.expression);
    this.distinct = json.distinct != null ? json.distinct : true;
  }
};

module.exports.SortClause = SortClause = SortClause = class SortClause {
  constructor(json) {
    this.by = build(json != null ? json.by : undefined);
  }

  sort(ctx, values) {
    if (this.by) {
      return values.sort((a, b) => {
        let order = 0;
        for (let item of this.by) {
          // Do not use execute here because the value of the sort order is not important.
          order = item.exec(ctx, a, b);
          if (order !== 0) {
            break;
          }
        }
        return order;
      });
    }
  }
};

const toDistinctList = function (xList) {
  const yList = [];
  for (let x of xList) {
    let inYList = false;
    for (let y of yList) {
      if (equals(x, y)) {
        inYList = true;
      }
    }
    if (!inYList) {
      yList.push(x);
    }
  }
  return yList;
};

module.exports.Query = Query = class Query extends Expression {
  constructor(json) {
    super(...arguments);
    this.sources = new MultiSource(json.source.map(s => new AliasedQuerySource(s)));
    this.letClauses = (json.let != null ? json.let : []).map(d => new LetClause(d));
    this.relationship = json.relationship != null ? build(json.relationship) : [];
    this.where = build(json.where);
    this.returnClause = json.return != null ? new ReturnClause(json.return) : null;
    this.aliases = this.sources.aliases();
    this.sortClause = json.sort != null ? new SortClause(json.sort) : null;
  }

  exec(ctx) {
    let returnedValues = [];
    this.sources.forEach(ctx, rctx => {
      for (let def of this.letClauses) {
        rctx.set(def.identifier, def.expression.execute(rctx));
      }

      const relations = (() => {
        const result = [];
        for (let rel of this.relationship) {
          const child_ctx = rctx.childContext();
          result.push(rel.execute(child_ctx));
        }
        return result;
      })();
      let passed = allTrue(relations);
      passed = passed && (this.where ? this.where.execute(rctx) : passed);
      if (passed) {
        if (this.returnClause != null) {
          const val = this.returnClause.expression.execute(rctx);
          return returnedValues.push(val);
        } else {
          if (this.aliases.length === 1) {
            return returnedValues.push(rctx.get(this.aliases[0]));
          } else {
            return returnedValues.push(rctx.context_values);
          }
        }
      }
    });

    const distinct = this.returnClause != null ? this.returnClause.distinct : true;
    if (distinct) {
      returnedValues = toDistinctList(returnedValues);
    }

    if (this.sortClause != null) {
      this.sortClause.sort(ctx, returnedValues);
    }
    if (this.sources.returnsList()) {
      return returnedValues;
    } else {
      return returnedValues[0];
    }
  }
};

module.exports.AliasRef = AliasRef = class AliasRef extends Expression {
  constructor(json) {
    super(...arguments);
    this.name = json.name;
  }

  exec(ctx) {
    return ctx != null ? ctx.get(this.name) : undefined;
  }
};

module.exports.QueryLetRef = QueryLetRef = class QueryLetRef extends AliasRef {
  constructor(json) {
    super(...arguments);
  }
};

// The following is not defined by ELM but is helpful for execution

class MultiSource {
  constructor(sources) {
    this.sources = sources;
    this.alias = this.sources[0].alias;
    this.expression = this.sources[0].expression;
    this.isList = true;
    if (this.sources.length > 1) {
      this.rest = new MultiSource(this.sources.slice(1));
    }
  }

  aliases() {
    let a = [this.alias];
    if (this.rest) {
      a = a.concat(this.rest.aliases());
    }
    return a;
  }

  returnsList() {
    return this.isList || (this.rest && this.rest.returnsList());
  }

  forEach(ctx, func) {
    let records = this.expression.execute(ctx);
    this.isList = typeIsArray(records);
    records = this.isList ? records : [records];
    return (() => {
      const result = [];
      for (let rec of records) {
        const rctx = new Context(ctx);
        rctx.set(this.alias, rec);
        if (this.rest) {
          result.push(this.rest.forEach(rctx, func));
        } else {
          result.push(func(rctx));
        }
      }
      return result;
    })();
  }
}
