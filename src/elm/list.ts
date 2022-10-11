import Immutable from 'immutable';
import { Context } from '../runtime/context';
import { equals } from '../util/comparison';
import * as Memoizer from '../util/memoizer';
import { typeIsArray } from '../util/util';
import { build } from './builder';
import { Expression, UnimplementedExpression } from './expression';

export class List extends Expression {
  elements: any[];

  constructor(json: any) {
    super(json);
    this.elements = build(json.element) || [];
  }

  get isList() {
    return true;
  }

  exec(ctx: Context) {
    return this.elements.map(item => item.execute(ctx));
  }
}

export class Exists extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
    const list = this.execArgs(ctx);
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
const doExceptMemoizer = new Memoizer.ImmutableMemoizer();
const immutableDoExcept = <S>(
  a: Memoizer.ImmutableKeyValuePair<S>[],
  b: Memoizer.ImmutableKeyValuePair<S>[]
): Memoizer.ImmutableKeyValuePair<S>[] => {
  const keys_b = Immutable.Set(b.map(x => x.key));

  const distinct_a = immutableDoDistinct(a);
  const a_except_b = distinct_a.filter(x => !keys_b.has(x.key));

  return a_except_b;
};
export const doExcept = (a: unknown[], b: unknown[]) =>
  doExceptMemoizer.memoize(immutableDoExcept)(a, b);

// Delegated to by overloaded#Intersect
const doIntersectMemoizer = new Memoizer.ImmutableMemoizer();
const immutableDoIntersect = <S>(
  a: Memoizer.ImmutableKeyValuePair<S>[],
  b: Memoizer.ImmutableKeyValuePair<S>[]
): Memoizer.ImmutableKeyValuePair<S>[] => {
  const keys_b = Immutable.Set(b.map(x => x.key));

  const distinct_a = immutableDoDistinct(a);
  const a_intersect_b = distinct_a.filter(z => keys_b.has(z.key));

  return a_intersect_b;
};
export const doIntersect = (a: unknown[], b: unknown[]) =>
  doIntersectMemoizer.memoize(immutableDoIntersect)(a, b);

// ELM-only, not a product of CQL
export class Times extends UnimplementedExpression {}

// ELM-only, not a product of CQL
export class Filter extends UnimplementedExpression {}

export class SingletonFrom extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
    const arg = this.execArgs(ctx);
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

  exec(ctx: Context) {
    const arg = this.execArgs(ctx);
    if (arg != null) {
      return [arg];
    } else {
      return [];
    }
  }
}

export class IndexOf extends Expression {
  source: any;
  element: any;

  constructor(json: any) {
    super(json);
    this.source = build(json.source);
    this.element = build(json.element);
  }

  exec(ctx: Context) {
    let index;
    const src = this.source.execute(ctx);
    const el = this.element.execute(ctx);
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

  exec(ctx: Context) {
    const arg = this.execArgs(ctx);
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

  exec(ctx: Context) {
    const result = this.execArgs(ctx);
    if (result == null) {
      return null;
    }
    return doDistinct(result);
  }
}

// Cacheable and optimized doDistinct
const doDistinctMemoizer = new Memoizer.ImmutableMemoizer();
const immutableDoDistinct = <S>(
  list: Memoizer.ImmutableKeyValuePair<S>[]
): Memoizer.ImmutableKeyValuePair<S>[] => {
  const set = Immutable.Set<Memoizer.ImmutableObjectKey>().asMutable();
  const distinct: Memoizer.ImmutableKeyValuePair<S>[] = [];

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
export const doDistinct = (list: unknown[]): unknown[] =>
  doDistinctMemoizer.memoize(immutableDoDistinct)(list);

// ELM-only, not a product of CQL
export class Current extends UnimplementedExpression {}

export class First extends Expression {
  source: any;

  constructor(json: any) {
    super(json);
    this.source = build(json.source);
  }

  exec(ctx: Context) {
    const src = this.source.exec(ctx);
    if (src != null && typeIsArray(src) && src.length > 0) {
      return src[0];
    } else {
      return null;
    }
  }
}

export class Last extends Expression {
  source: any;

  constructor(json: any) {
    super(json);
    this.source = build(json.source);
  }

  exec(ctx: Context) {
    const src = this.source.exec(ctx);
    if (src != null && typeIsArray(src) && src.length > 0) {
      return src[src.length - 1];
    } else {
      return null;
    }
  }
}

export class Slice extends Expression {
  source: any;
  startIndex: any;
  endIndex: any;

  constructor(json: any) {
    super(json);
    this.source = build(json.source);
    this.startIndex = build(json.startIndex);
    this.endIndex = build(json.endIndex);
  }

  exec(ctx: Context) {
    const src = this.source.exec(ctx);
    if (src != null && typeIsArray(src)) {
      const startIndex = this.startIndex.exec(ctx);
      const endIndex = this.endIndex.exec(ctx);
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
