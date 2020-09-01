const { Expression, UnimplementedExpression } = require('./expression');
const { build } = require('./builder');

class Property extends Expression {
  constructor(json) {
    super(json);
    this.scope = json.scope;
    this.source = build(json.source);
    this.path = json.path;
  }

  exec(ctx) {
    let obj = this.scope != null ? ctx.get(this.scope) : this.source;
    if (obj instanceof Expression) {
      obj = obj.execute(ctx);
    }
    let val = getPropertyFromObject(obj, this.path);
    if (val == null) {
      const parts = this.path.split('.');
      let curr_obj = obj;
      for (let part of parts) {
        const _obj = getPropertyFromObject(curr_obj, part);
        curr_obj = _obj instanceof Function ? _obj.call(curr_obj) : _obj;
      }
      val = curr_obj != null ? curr_obj : null; // convert undefined to null
    }
    if (val instanceof Function) {
      return val.call(obj);
    } else {
      return val;
    }
  }
}

function getPropertyFromObject(obj, path) {
  let val;
  if (obj != null) {
    val = obj[path];
    if (val === undefined && typeof obj.get === 'function') {
      val = obj.get(path);
    }
  }
  return val;
}

class Tuple extends Expression {
  constructor(json) {
    super(json);
    this.elements = json.element.map(el => {
      return {
        name: el.name,
        value: build(el.value)
      };
    });
  }

  get isTuple() {
    return true;
  }

  exec(ctx) {
    const val = {};
    for (let el of this.elements) {
      val[el.name] = el.value != null ? el.value.execute(ctx) : undefined;
    }
    return val;
  }
}

class TupleElement extends UnimplementedExpression {}

class TupleElementDefinition extends UnimplementedExpression {}

module.exports = { Property, Tuple, TupleElement, TupleElementDefinition };
