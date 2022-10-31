import Immutable from 'immutable';
import { Context } from '../runtime/context';
import { equals } from '../util/comparison';
import { KeyValuePair, NormalizedKey, toKvpParams } from '../util/immutableUtil';
import { typeIsArray } from '../util/util';
import { build } from './builder';
import { Expression, UnimplementedExpression } from './expression';

export class List extends Expression {
  elements: Expression[];

  constructor(json: any) {
    super(json);
    this.elements = (build(json.element) as Expression[]) || [];
  }

  get isList() {
    return true;
  }

  async exec(ctx: Context) {
    return await Promise.all(this.elements.map(item => item.execute(ctx)));
  }
}

export class Exists extends Expression {
  constructor(json: any) {
    super(json);
  }

  async exec(ctx: Context) {
    const list = await this.execArgs(ctx);
    // if list exists and has non empty length we need to make sure it isnt just full of nulls
    if (list) {
      return list.some((item: any) => item != null);
    }
    return false;
  }
}

// Equal is completely handled by overloaded#Equal

// NotEqual is completely handled by overloaded#Equal

// Delegated to by overloaded#Union
export function doUnion(a: any, b: any) {
  return doDistinct(a.concat(b));
}

// Delegated to by overloaded#Except
const kvpDoExcept = (a: KeyValuePair[], b: KeyValuePair[]): KeyValuePair[] => {
  const keys_b = Immutable.Set(b.map(x => x.key));
  return kvpDoDistinct(a).filter(x => !keys_b.has(x.key));
};
export const doExcept = (a: unknown[], b: unknown[]) => toKvpParams(kvpDoExcept)(a, b);

// Delegated to by overloaded#Intersect
const kvpDoIntersect = (a: KeyValuePair[], b: KeyValuePair[]): KeyValuePair[] => {
  const keys_b = Immutable.Set(b.map(x => x.key));
  return kvpDoDistinct(a).filter(x => keys_b.has(x.key));
};
export const doIntersect = (a: unknown[], b: unknown[]) => toKvpParams(kvpDoIntersect)(a, b);

// ELM-only, not a product of CQL
export class Times extends UnimplementedExpression {}

// ELM-only, not a product of CQL
export class Filter extends UnimplementedExpression {}

export class SingletonFrom extends Expression {
  constructor(json: any) {
    super(json);
  }

  async exec(ctx: Context) {
    const arg = await this.execArgs(ctx);
    if (arg != null && arg.length > 1) {
      throw new Error("IllegalArgument: 'SingletonFrom' requires a 0 or 1 arg array");
    } else if (arg != null && arg.length === 1) {
      return arg[0];
    } else {
      return null;
    }
  }
}

export class ToList extends Expression {
  constructor(json: any) {
    super(json);
  }

  async exec(ctx: Context) {
    const arg = await this.execArgs(ctx);
    if (arg != null) {
      return [arg];
    } else {
      return [];
    }
  }
}

export class IndexOf extends Expression {
  source: Expression;
  element: Expression;

  constructor(json: any) {
    super(json);
    this.source = build(json.source) as Expression;
    this.element = build(json.element) as Expression;
  }

  async exec(ctx: Context) {
    let index;
    const src = await this.source.execute(ctx);
    const el = await this.element.execute(ctx);
    if (src == null || el == null) {
      return null;
    }
    for (let i = 0; i < src.length; i++) {
      const itm = src[i];
      if (equals(itm, el)) {
        index = i;
        break;
      }
    }
    if (index != null) {
      return index;
    } else {
      return -1;
    }
  }
}

// Indexer is completely handled by overloaded#Indexer

// Delegated to by overloaded#Contains and overloaded#In
export function doContains(container: any[], item: any, nullEquivalence = false) {
  return container.some(
    (element: any) => equals(element, item) || (nullEquivalence && element == null && item == null)
  );
}

// Delegated to by overloaded#Includes and overloaded@IncludedIn
export function doIncludes(list: any, sublist: any) {
  return sublist.every((x: any) => doContains(list, x));
}

// Delegated to by overloaded#ProperIncludes and overloaded@ProperIncludedIn
export function doProperIncludes(list: any, sublist: any) {
  return list.length > sublist.length && doIncludes(list, sublist);
}

// ELM-only, not a product of CQL
export class ForEach extends UnimplementedExpression {}

export class Flatten extends Expression {
  constructor(json: any) {
    super(json);
  }

  async exec(ctx: Context) {
    const arg = await this.execArgs(ctx);
    if (typeIsArray(arg) && (arg as any[]).every(x => typeIsArray(x))) {
      return (arg as any[]).reduce((x, y) => x.concat(y), []);
    } else {
      return arg;
    }
  }
}

export class Distinct extends Expression {
  constructor(json: any) {
    super(json);
  }

  async exec(ctx: Context) {
    const result = await this.execArgs(ctx);
    if (result == null) {
      return null;
    }
    return doDistinct(result);
  }
}

// Cacheable and optimized doDistinct
const kvpDoDistinct = (list: KeyValuePair[]): KeyValuePair[] => {
  const set = Immutable.Set<NormalizedKey>().asMutable();
  const distinct: KeyValuePair[] = [];

  set.withMutations(y => {
    list.forEach(x => {
      // Check set size
      const setSize = y.count();

      // Attempt to insert
      y.add(x.key);

      // If inserted, then size will increase; push to distinct
      if (y.count() > setSize) {
        distinct.push(x);
      }
    });
  });

  return distinct;
};
export const doDistinct = (list: unknown[]): unknown[] => toKvpParams(kvpDoDistinct)(list);

// ELM-only, not a product of CQL
export class Current extends UnimplementedExpression {}

export class First extends Expression {
  source: Expression;

  constructor(json: any) {
    super(json);
    this.source = build(json.source) as Expression;
  }

  async exec(ctx: Context) {
    const src = await this.source.exec(ctx);
    if (src != null && typeIsArray(src) && src.length > 0) {
      return src[0];
    } else {
      return null;
    }
  }
}

export class Last extends Expression {
  source: Expression;

  constructor(json: any) {
    super(json);
    this.source = build(json.source) as Expression;
  }

  async exec(ctx: Context) {
    const src = await this.source.exec(ctx);
    if (src != null && typeIsArray(src) && src.length > 0) {
      return src[src.length - 1];
    } else {
      return null;
    }
  }
}

export class Slice extends Expression {
  source: Expression;
  startIndex: Expression;
  endIndex: Expression;

  constructor(json: any) {
    super(json);
    this.source = build(json.source) as Expression;
    this.startIndex = build(json.startIndex) as Expression;
    this.endIndex = build(json.endIndex) as Expression;
  }

  async exec(ctx: Context) {
    const src = await this.source.exec(ctx);
    if (src != null && typeIsArray(src)) {
      const startIndex = await this.startIndex.exec(ctx);
      const endIndex = await this.endIndex.exec(ctx);
      const start = startIndex != null ? startIndex : 0;
      const end = endIndex != null ? endIndex : src.length;
      if (src.length === 0 || start < 0 || end < 0 || end < start) {
        return [];
      }
      return src.slice(start, end);
    }
    return null;
  }
}

// Length is completely handled by overloaded#Length
