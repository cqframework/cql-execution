import { Context } from '../runtime/context';
import { allTrue, asyncMergeSort, Direction, typeIsArray } from '../util/util';
import { build } from './builder';
import { Expression, UnimplementedExpression } from './expression';
import { toDistinctList } from './list';

export class AliasedQuerySource {
  alias: any;
  expression: any;

  constructor(json: any) {
    this.alias = json.alias;
    this.expression = build(json.expression);
  }
}

export class LetClause {
  identifier: string;
  expression: any;

  constructor(json: any) {
    this.identifier = json.identifier;
    this.expression = build(json.expression);
  }
}

export class With extends Expression {
  alias: any;
  expression: any;
  suchThat: Expression;

  constructor(json: any) {
    super(json);
    this.alias = json.alias;
    this.expression = build(json.expression);
    this.suchThat = build(json.suchThat) as Expression;
  }
  async exec(ctx: Context) {
    let records: any[] = await this.expression.execute(ctx);
    if (!typeIsArray(records)) {
      records = [records];
    }
    const returns: any[] = [];
    for (const rec of records) {
      const childCtx = ctx.childContext();
      childCtx.set(this.alias, rec);
      returns.push(await this.suchThat.execute(childCtx));
    }
    return returns.some((x: any) => x);
  }
}

export class Without extends With {
  constructor(json: any) {
    super(json);
  }
  async exec(ctx: Context) {
    return !(await super.exec(ctx));
  }
}

// ELM-only, not a product of CQL
export class Sort extends UnimplementedExpression {}

export class ByDirection extends Expression {
  direction: Direction;
  low_order: number;
  high_order: number;

  constructor(json: any) {
    super(json);
    this.direction = json.direction;
    this.low_order = this.direction === 'asc' || this.direction === 'ascending' ? -1 : 1;
    this.high_order = this.low_order * -1;
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  async exec(ctx: Context, a: any, b: any) {
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
}

export class ByExpression extends Expression {
  expression: any;
  direction: Direction;
  low_order: number;
  high_order: number;

  constructor(json: any) {
    super(json);
    this.expression = build(json.expression);
    this.direction = json.direction;
    this.low_order = this.direction === 'asc' || this.direction === 'ascending' ? -1 : 1;
    this.high_order = this.low_order * -1;
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  async exec(ctx: Context, a: any, b: any) {
    let sctx = ctx.childContext(a);
    const a_val = await this.expression.execute(sctx);
    sctx = ctx.childContext(b);
    const b_val = await this.expression.execute(sctx);

    if (a_val === b_val || (a_val == null && b_val == null)) {
      return 0;
    } else if (a_val == null || b_val == null) {
      return a_val == null ? this.low_order : this.high_order;
    } else if (a_val.isQuantity && b_val.isQuantity) {
      return a_val.before(b_val) ? this.low_order : this.high_order;
    } else {
      return a_val < b_val ? this.low_order : this.high_order;
    }
  }
}

export class ByColumn extends ByExpression {
  constructor(json: any) {
    super(json);
    this.expression = build({
      name: json.path,
      type: 'IdentifierRef'
    });
  }
}

export class ReturnClause {
  expression: any;
  distinct: boolean;

  constructor(json: any) {
    this.expression = build(json.expression);
    this.distinct = json.distinct != null ? json.distinct : true;
  }
}

export class SortClause {
  by: any;

  constructor(json: any) {
    this.by = build(json != null ? json.by : undefined);
  }

  async sort(ctx: Context, values: any[]) {
    if (this.by) {
      return asyncMergeSort(values, async (a: any, b: any) => {
        let order = 0;
        for (const item of this.by) {
          // Do not use execute here because the value of the sort order is not important.
          order = await item.exec(ctx, a, b);
          if (order !== 0) {
            break;
          }
        }
        return order;
      });
    }
    return values;
  }
}

class AggregateClause extends Expression {
  identifier: string;
  expression: any;
  starting: any;
  distinct: boolean;

  constructor(json: any) {
    super(json);
    this.identifier = json.identifier;
    this.expression = build(json.expression);
    this.starting = json.starting ? build(json.starting) : null;
    this.distinct = json.distinct != null ? json.distinct : false;
  }

  async aggregate(returnedValues: any, ctx: Context) {
    let aggregateValue = this.starting != null ? await this.starting.execute(ctx) : null;
    for (const contextValues of returnedValues) {
      const childContext = ctx.childContext(contextValues);
      childContext.set(this.identifier, aggregateValue);
      aggregateValue = await this.expression.execute(childContext);
    }
    return aggregateValue;
  }
}

export class Query extends Expression {
  sources: AliasedQuerySource[];
  letClauses: LetClause[];
  relationship: Expression[];
  where: any;
  returnClause: ReturnClause | null;
  aggregateClause: AggregateClause | null;
  aliases: any;
  sortClause: SortClause | null;

  constructor(json: any) {
    super(json);
    this.sources = json.source.map((s: any) => new AliasedQuerySource(s));
    this.aliases = json.source.map((s: any) => s.alias);
    this.letClauses = json.let != null ? json.let.map((d: any) => new LetClause(d)) : [];
    this.relationship = json.relationship != null ? (build(json.relationship) as Expression[]) : [];
    this.where = build(json.where);
    this.returnClause = json.return != null ? new ReturnClause(json.return) : null;
    this.aggregateClause = json.aggregate != null ? new AggregateClause(json.aggregate) : null;
    this.sortClause = json.sort != null ? new SortClause(json.sort) : null;
  }

  isDistinct() {
    if (this.aggregateClause != null && this.aggregateClause.distinct != null) {
      return this.aggregateClause.distinct;
    } else if (this.returnClause != null && this.returnClause.distinct != null) {
      return this.returnClause.distinct;
    }
    return true;
  }

  async exec(ctx: Context) {
    let sourceResults = await Promise.all(this.sources.map(s => s.expression.execute(ctx)));
    // If every source is null, the result is null
    // See: https://jira.hl7.org/browse/FHIR-40225
    if (sourceResults.every(r => r == null)) {
      return null;
    }
    const isList = sourceResults.some(r => Array.isArray(r));
    // For ease of processing, convert all the sources to lists and
    // convert nulls to empty lists (we already handled the ALL null case)
    sourceResults = sourceResults.map(r => {
      if (r == null) {
        return [];
      } else if (Array.isArray(r)) {
        return r;
      } else {
        return [r];
      }
    });

    // Iterate over the cartesian product of the sources.
    // See: https://cql.hl7.org/03-developersguide.html#multi-source-queries
    const cartesian = cartesianProductOf(sourceResults);
    let returnedValues: any[] = [];
    for (const combo of cartesian) {
      const rctx = ctx.childContext();
      combo.forEach((r: any, i: number) => rctx.set(this.aliases[i], r));

      for (const def of this.letClauses) {
        rctx.set(def.identifier, await def.expression.execute(rctx));
      }

      const relations: any[] = [];
      for (const rel of this.relationship) {
        const child_ctx = rctx.childContext();
        relations.push(await rel.execute(child_ctx));
      }
      const passed = allTrue(relations) && (this.where ? await this.where.execute(rctx) : true);
      if (passed) {
        if (this.returnClause != null) {
          const val = await this.returnClause.expression.execute(rctx);
          returnedValues.push(val);
        } else {
          if (this.aliases.length === 1 && this.aggregateClause == null) {
            returnedValues.push(rctx.get(this.aliases[0]));
          } else {
            returnedValues.push(rctx.context_values);
          }
        }
      }
    }

    if (this.isDistinct()) {
      returnedValues = toDistinctList(returnedValues);
    }

    if (this.aggregateClause != null) {
      returnedValues = await this.aggregateClause.aggregate(returnedValues, ctx);
    }

    if (this.sortClause != null) {
      returnedValues = await this.sortClause.sort(ctx, returnedValues);
    }
    if (isList || this.aggregateClause != null) {
      return returnedValues;
    } else {
      return returnedValues[0];
    }
  }
}

export class AliasRef extends Expression {
  name: string;

  constructor(json: any) {
    super(json);
    this.name = json.name;
  }

  async exec(ctx: Context) {
    return ctx != null ? ctx.get(this.name) : undefined;
  }
}

export class QueryLetRef extends AliasRef {
  constructor(json: any) {
    super(json);
  }
}

// cartesianProductOf function based on Chris West's function:
// https://cwestblog.com/2011/05/02/cartesian-product-of-multiple-arrays/
function cartesianProductOf(sources: any[]) {
  return sources.reduce(
    (a: any[], b: any[]) => {
      const ret: any[] = [];
      a.forEach(a => {
        b.forEach(b => {
          ret.push(a.concat([b]));
        });
      });
      return ret;
    },
    [[]]
  );
}
