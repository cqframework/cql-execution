import { Expression } from './expression';
import { Quantity } from '../datatypes/quantity';
import { Code, Concept } from '../datatypes/datatypes';
import { Context } from '../runtime/context';
import { build } from './builder';
import { ELM_QUANTITY_TYPE, ELM_CONCEPT_TYPE } from '../util/elmTypes';

class Element {
  name: string;
  value: any;

  constructor(json: any) {
    this.name = json.name;
    this.value = build(json.value);
  }
  async exec(ctx: Context) {
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

  async exec(ctx: Context) {
    const obj: any = {};
    for (const el of this.element) {
      obj[el.name] = await el.exec(ctx);
    }
    switch (this.classType) {
      case ELM_QUANTITY_TYPE:
        return new Quantity(obj.value, obj.unit);
      case '{urn:hl7-org:elm-types:r1}Code':
        return new Code(obj.code, obj.system, obj.version, obj.display);
      case ELM_CONCEPT_TYPE:
        return new Concept(obj.codes, obj.display);
      default:
        return obj;
    }
  }
}
