/* eslint-disable
    no-unused-vars,
*/
// TODO: This file was created by bulk-decaffeinate.
// Fix any style issues and re-enable lint.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS104: Avoid inline assignments
 * DS205: Consider reworking code to avoid use of IIFEs
 * DS206: Consider reworking classes to avoid initClass
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
let Current, Distinct, doContains, doIncludes, Exists, Filter, First, Flatten, ForEach, IndexOf, Last, List, SingletonFrom, Times, ToList;
const { Expression, UnimplementedExpression } = require('./expression');
const { ValueSet } = require('../datatypes/datatypes');
const { build } = require('./builder');
const { typeIsArray } = require('../util/util');
const { equals } = require('../util/comparison');

module.exports.List = (List = (function() {
  List = class List extends Expression {
    static initClass() {
  
      // Define a simple getter to allow type-checking of this class without instanceof
      // and in a way that survives minification (as opposed to checking constructor.name)
      Object.defineProperties(this.prototype, {
        isList: {
          get() { return true; }
        }
      }
      );
    }
    constructor(json) {
      let left;
      super(...arguments);
      this.elements = ((left = build(json.element))) != null ? left : [];
    }

    exec(ctx) {
      return (this.elements.map((item) => item.execute(ctx)));
    }
  };
  List.initClass();
  return List;
})());

module.exports.Exists = (Exists = class Exists extends Expression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    const list = this.execArgs(ctx);
    // if list exists and has non empty length we need to make sure it isnt just full of nulls
    if ((list != null ? list.length : undefined) > 0) {
      for (let item of list) {
        // return true if we found an item that isnt null.
        if (item !== null) { return true; }
      }
    }
    return false;
  }
});


// Equal is completely handled by overloaded#Equal

// NotEqual is completely handled by overloaded#Equal

// Delegated to by overloaded#Union
module.exports.doUnion = function(a, b) {
  const distinct = doDistinct(a.concat(b));
  return removeDuplicateNulls(distinct);
};

// Delegated to by overloaded#Except
module.exports.doExcept = function(a, b) {
  const distinct = doDistinct(a);
  const setList = removeDuplicateNulls(distinct);
  return (() => {
    const result = [];
    for (let itm of setList) {       if (!doContains(b, itm)) {
      result.push(itm);
    }
    }
    return result;
  })();
};

// Delegated to by overloaded#Intersect
module.exports.doIntersect = function(a, b) {
  const distinct = doDistinct(a);
  const setList = removeDuplicateNulls(distinct);
  return (() => {
    const result = [];
    for (let itm of setList) {       if (doContains(b, itm)) {
      result.push(itm);
    }
    }
    return result;
  })();
};

// ELM-only, not a product of CQL
module.exports.Times = (Times = class Times extends UnimplementedExpression {});

// ELM-only, not a product of CQL
module.exports.Filter = (Filter = class Filter extends UnimplementedExpression {});

module.exports.SingletonFrom = (SingletonFrom = class SingletonFrom extends Expression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    const arg = this.execArgs(ctx);
    if ((arg != null) && (arg.length > 1)) { throw new Error('IllegalArgument: \'SingletonFrom\' requires a 0 or 1 arg array');
    } else if ((arg != null) && (arg.length === 1)) { return arg[0];
    } else { return null; }
  }
});

module.exports.ToList = (ToList = class ToList extends Expression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    const arg = this.execArgs(ctx);
    if (arg != null) {
      return [arg];
    } else {
      return [];
    }
  }
});

module.exports.IndexOf = (IndexOf = class IndexOf extends Expression {
  constructor(json) {
    super(...arguments);
    this.source = build(json.source);
    this.element = build(json.element);
  }

  exec(ctx) {
    let index;
    const src = this.source.exec(ctx);
    const el = this.element.exec(ctx);
    if ((src == null) || (el == null)) { return null; }
    for (let i = 0; i < src.length; i++) { const itm = src[i]; if (equals(itm, el)) { index = i; break; } }
    if (index != null) { return index; } else { return -1; }
  }
});

// Indexer is completely handled by overloaded#Indexer

// Delegated to by overloaded#Contains and overloaded#In
module.exports.doContains = (doContains = function(container, item) {
  for (let element of container) { if (equals(element, item)) { return true; } }
  return false;
});

// Delegated to by overloaded#Includes and overloaded@IncludedIn
module.exports.doIncludes = (doIncludes = (list, sublist) => sublist.every(x => doContains(list, x)));

// Delegated to by overloaded#ProperIncludes and overloaded@ProperIncludedIn
module.exports.doProperIncludes = (list, sublist) => (list.length > sublist.length) && doIncludes(list, sublist);

// ELM-only, not a product of CQL
module.exports.ForEach = (ForEach = class ForEach extends UnimplementedExpression {});

module.exports.Flatten = (Flatten = class Flatten extends Expression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    const arg = this.execArgs(ctx);
    if (typeIsArray(arg) && (arg.every(x => typeIsArray(x)))) {
      return arg.reduce(((x, y) => x.concat(y)), []);
    } else {
      return arg;
    }
  }
});

module.exports.Distinct = (Distinct = class Distinct extends Expression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    const result = this.execArgs(ctx);
    if ((result == null)) { return null; }
    return doDistinct(result);
  }
});

var doDistinct = function(list) {
  const distinct = [];
  list.filter(function(item) {
    const isNew = distinct.every(seenItem => !equals(item, seenItem));
    if (isNew) { distinct.push(item); }
    return isNew;
  });
  return distinct;
};

var removeDuplicateNulls = function(list) {
  // Remove duplicate null elements
  let firstNullFound = false;
  const setList = [];
  for (let item of list) {
    if (item !== null) { setList.push(item); }
    if ((item === null) && !firstNullFound) {
      setList.push(item);
      firstNullFound = true;
    }
  }
  return setList;
};

// ELM-only, not a product of CQL
module.exports.Current = (Current = class Current extends UnimplementedExpression {});

module.exports.First = (First = class First extends Expression {
  constructor(json) {
    super(...arguments);
    this.source = build(json.source);
  }

  exec(ctx) {
    const src = this.source.exec(ctx);
    if ((src != null) && typeIsArray(src) && (src.length > 0)) { return src[0]; } else { return null; }
  }
});

module.exports.Last = (Last = class Last extends Expression {
  constructor(json) {
    super(...arguments);
    this.source = build(json.source);
  }

  exec(ctx) {
    const src = this.source.exec(ctx);
    if ((src != null) && typeIsArray(src) && (src.length > 0)) { return src[src.length-1]; } else { return null; }
  }
});

// Length is completely handled by overloaded#Length
