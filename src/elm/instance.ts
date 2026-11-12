import { Expression } from './expression';
import { Context } from '../runtime/context';
import { build } from './builder';

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
    return ctx.createInstance(this.classType, obj);
  }
}
