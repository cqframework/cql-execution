import { Context } from '../runtime/context';
import { Expression, UnimplementedExpression } from './expression';
import { build } from './builder';

export class Property extends Expression {
  scope: any;
  source: any;
  path: any;

  constructor(json: any) {
    super(json);
    this.scope = json.scope;
    this.source = build(json.source);
    this.path = json.path;
  }

  exec(ctx: Context) {
    let obj = this.scope != null ? ctx.get(this.scope) : this.source;
    if (obj instanceof Expression) {
      obj = obj.execute(ctx);
    }
    let val = getPropertyFromObject(obj, this.path);
    if (val == null) {
      const parts = this.path.split('.');
      let curr_obj = obj;
      for (const part of parts) {
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

function getPropertyFromObject(obj: any, path: any) {
  let val;
  if (obj != null) {
    val = obj[path];
    if (val === undefined && typeof obj.get === 'function') {
      val = obj.get(path);
    }
  }
  return val;
}

export class Tuple extends Expression {
  elements: any[];

  constructor(json: any) {
    super(json);
    const elements = json.element != null ? json.element : [];
    this.elements = elements.map((el: any) => {
      return {
        name: el.name,
        value: build(el.value)
      };
    });
  }

  get isTuple() {
    return true;
  }

  exec(ctx: Context) {
    const val: any = {};
    for (const el of this.elements) {
      val[el.name] = el.value != null ? el.value.execute(ctx) : undefined;
    }
    return val;
  }
}

export class TupleElement extends UnimplementedExpression {}

export class TupleElementDefinition extends UnimplementedExpression {}
