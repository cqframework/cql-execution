/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS103: Rewrite code to no longer use __guard__
 * DS206: Consider reworking classes to avoid initClass
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
let Property, Tuple, TupleElement, TupleElementDefinition;
const { Expression, UnimplementedExpression } = require('./expression');
const { build } = require('./builder');

module.exports.Property = (Property = class Property extends Expression {
  constructor(json) {
    super(...arguments);
    this.scope = json.scope;
    this.source = build(json.source);
    this.path = json.path;
  }

  exec(ctx) {
    let obj = (this.scope != null) ? ctx.get(this.scope) : this.source;
    if (obj instanceof Expression) { obj = obj.execute(ctx); }
    let val = (obj != null ? obj[this.path] : undefined) != null ? (obj != null ? obj[this.path] : undefined) : __guardMethod__(obj, 'get', o => o.get(this.path));

    if (!val) {
      const parts = this.path.split(".");
      let curr_obj = obj;
      const curr_val = null;
      for (var part of parts) {
        const _obj = (curr_obj != null ? curr_obj[part] : undefined) != null ? (curr_obj != null ? curr_obj[part] : undefined) : __guardMethod__(curr_obj, 'get', o1 => o1.get(part));
        curr_obj = _obj instanceof Function ? _obj.call(curr_obj) : _obj;
      }
      val = curr_obj != null ? curr_obj : null; // convert undefined to null
    }
    if (val instanceof Function) { return val.call(obj); } else { return val; }
  }
});

module.exports.Tuple = (Tuple = (function() {
  Tuple = class Tuple extends Expression {
    static initClass() {
  
      // Define a simple getter to allow type-checking of this class without instanceof
      // and in a way that survives minification (as opposed to checking constructor.name)
      Object.defineProperties(this.prototype, {
        isTuple: {
          get() { return true; }
        }
      }
      );
    }
    constructor(json) {
      super(...arguments);
      this.elements = json.element.map((el) => ({
        name: el.name,
        value: build(el.value)
      }));
    }

    exec(ctx) {
      const val = {};
      for (let el of this.elements) {
        val[el.name] = el.value != null ? el.value.execute(ctx) : undefined;
      }
      return val;
    }
  };
  Tuple.initClass();
  return Tuple;
})());

module.exports.TupleElement = (TupleElement = class TupleElement extends UnimplementedExpression {});

module.exports.TupleElementDefinition = (TupleElementDefinition = class TupleElementDefinition extends UnimplementedExpression {});

function __guardMethod__(obj, methodName, transform) {
  if (typeof obj !== 'undefined' && obj !== null && typeof obj[methodName] === 'function') {
    return transform(obj, methodName);
  } else {
    return undefined;
  }
}