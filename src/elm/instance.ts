import { Expression } from './expression';
import { Quantity } from '../datatypes/quantity';
import { Code, Concept } from '../datatypes/datatypes';
import { Context } from '../runtime/context';
import { build } from './builder';

class Element {
  name: string;
  value: any;

  constructor(json: any) {
    this.name = json.name;
    this.value = build(json.value);
  }
  exec(ctx: Context) {
    return this.value != null ? this.value.execute(ctx) : undefined;
  }
}

export class Instance extends Expression {
  classType: string;
  element: Element[];

  constructor(json: any) {
    super(json);
    this.classType = json.classType;
    this.element = json.element.map((child: any) => new Element(child));
  }

  exec(ctx: Context) {
    const obj: any = {};
    for (const el of this.element) {
      obj[el.name] = el.exec(ctx);
    }
    switch (this.classType) {
      case '{urn:hl7-org:elm-types:r1}Quantity':
        return new Quantity(obj.value, obj.unit);
      case '{urn:hl7-org:elm-types:r1}Code':
        return new Code(obj.code, obj.system, obj.version, obj.display);
      case '{urn:hl7-org:elm-types:r1}Concept':
        return new Concept(obj.codes, obj.display);
      default:
        return obj;
    }
  }
}
