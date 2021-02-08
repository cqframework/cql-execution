const { Expression, UnimplementedExpression } = require('./expression');
const { build } = require('./builder');
const { typeIsArray } = require('../util/util');
const { equals } = require('../util/comparison');

class List extends Expression {
  constructor(json) {
    super(json);
    this.elements = build(json.element) || [];
  }

  get isList() {
    return true;
  }

  exec(ctx) {
    return this.elements.map(item => item.execute(ctx));
  }
}

class Exists extends Expression {
  constructor(json) {
    super(json);
  }

  exec(ctx) {
    const list = this.execArgs(ctx);
    // if list exists and has non empty length we need to make sure it isnt just full of nulls
    if (list) {
      return list.some(item => item != null);
    }
    return false;
  }
}

// Equal is completely handled by overloaded#Equal

// NotEqual is completely handled by overloaded#Equal

// Delegated to by overloaded#Union
function doUnion(a, b) {
  const distinct = doDistinct(a.concat(b));
  return removeDuplicateNulls(distinct);
}

// Delegated to by overloaded#Except
function doExcept(a, b) {
  const distinct = doDistinct(a);
  const setList = removeDuplicateNulls(distinct);
  return setList.filter(item => !doContains(b, item, true));
}

// Delegated to by overloaded#Intersect
function doIntersect(a, b) {
  const distinct = doDistinct(a);
  const setList = removeDuplicateNulls(distinct);
  return setList.filter(item => doContains(b, item, true));
}

// ELM-only, not a product of CQL
class Times extends UnimplementedExpression {}

// ELM-only, not a product of CQL
class Filter extends UnimplementedExpression {}

class SingletonFrom extends Expression {
  constructor(json) {
    super(json);
  }

  exec(ctx) {
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

class ToList extends Expression {
  constructor(json) {
    super(json);
  }

  exec(ctx) {
    const arg = this.execArgs(ctx);
    if (arg != null) {
      return [arg];
    } else {
      return [];
    }
  }
}

class IndexOf extends Expression {
  constructor(json) {
    super(json);
    this.source = build(json.source);
    this.element = build(json.element);
  }

  exec(ctx) {
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
function doContains(container, item, nullEquivalence = false) {
  return container.some(
    element => equals(element, item) || (nullEquivalence && element == null && item == null)
  );
}

// Delegated to by overloaded#Includes and overloaded@IncludedIn
function doIncludes(list, sublist) {
  return sublist.every(x => doContains(list, x));
}

// Delegated to by overloaded#ProperIncludes and overloaded@ProperIncludedIn
function doProperIncludes(list, sublist) {
  return list.length > sublist.length && doIncludes(list, sublist);
}

// ELM-only, not a product of CQL
class ForEach extends UnimplementedExpression {}

class Flatten extends Expression {
  constructor(json) {
    super(json);
  }

  exec(ctx) {
    const arg = this.execArgs(ctx);
    if (typeIsArray(arg) && arg.every(x => typeIsArray(x))) {
      return arg.reduce((x, y) => x.concat(y), []);
    } else {
      return arg;
    }
  }
}

class Distinct extends Expression {
  constructor(json) {
    super(json);
  }

  exec(ctx) {
    const result = this.execArgs(ctx);
    if (result == null) {
      return null;
    }
    return doDistinct(result);
  }
}

function doDistinct(list) {
  const distinct = [];
  list.forEach(item => {
    const isNew = distinct.every(seenItem => !equals(item, seenItem));
    if (isNew) {
      distinct.push(item);
    }
  });
  return removeDuplicateNulls(distinct);
}

function removeDuplicateNulls(list) {
  // Remove duplicate null elements
  let firstNullFound = false;
  const setList = [];
  for (let item of list) {
    if (item !== null) {
      setList.push(item);
    } else if (item === null && !firstNullFound) {
      setList.push(item);
      firstNullFound = true;
    }
  }
  return setList;
}

// ELM-only, not a product of CQL
class Current extends UnimplementedExpression {}

class First extends Expression {
  constructor(json) {
    super(json);
    this.source = build(json.source);
  }

  exec(ctx) {
    const src = this.source.exec(ctx);
    if (src != null && typeIsArray(src) && src.length > 0) {
      return src[0];
    } else {
      return null;
    }
  }
}

class Last extends Expression {
  constructor(json) {
    super(json);
    this.source = build(json.source);
  }

  exec(ctx) {
    const src = this.source.exec(ctx);
    if (src != null && typeIsArray(src) && src.length > 0) {
      return src[src.length - 1];
    } else {
      return null;
    }
  }
}

class Slice extends Expression {
  constructor(json) {
    super(json);
    this.source = build(json.source);
    this.startIndex = build(json.startIndex);
    this.endIndex = build(json.endIndex);
  }

  exec(ctx) {
    const src = this.source.exec(ctx);
    const start = this.startIndex.exec(ctx);
    const end = this.endIndex.exec(ctx);
    if (src != null && typeIsArray(src)) {
      if (src.length > 0) {
        const effectiveStart = start != null ? start : 0;
        const effectiveEnd = end != null ? end : src.length;
        return src.slice(effectiveStart, effectiveEnd);
      }
      return [];
    }
    return null;
  }
}

// Length is completely handled by overloaded#Length

module.exports = {
  Current,
  Distinct,
  Exists,
  Filter,
  First,
  Flatten,
  ForEach,
  IndexOf,
  Last,
  List,
  SingletonFrom,
  Slice,
  Times,
  ToList,
  doContains,
  doIncludes,
  doProperIncludes,
  doUnion,
  doExcept,
  doIntersect
};
