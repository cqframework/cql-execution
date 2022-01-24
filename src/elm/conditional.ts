import { Expression } from './expression';
import { build } from './builder';
import { equals } from '../util/comparison';
import { Context } from '../runtime/context';

// TODO: Spec lists "Conditional", but it's "If" in the XSD
export class If extends Expression {
  condition: any;
  th: any;
  els: any;

  constructor(json: any) {
    super(json);
    this.condition = build(json.condition);
    this.th = build(json.then);
    this.els = build(json.else);
  }

  exec(ctx: Context) {
    if (this.condition.execute(ctx)) {
      return this.th.execute(ctx);
    } else {
      return this.els.execute(ctx);
    }
  }
}

export class CaseItem {
  when: any;
  then: any;

  constructor(json: any) {
    this.when = build(json.when);
    this.then = build(json.then);
  }
}

export class Case extends Expression {
  comparand: any;
  caseItems: CaseItem[];
  els: any;

  constructor(json: any) {
    super(json);
    this.comparand = build(json.comparand);
    this.caseItems = json.caseItem.map((ci: any) => new CaseItem(ci));
    this.els = build(json.else);
  }

  exec(ctx: Context) {
    if (this.comparand) {
      return this.exec_selected(ctx);
    } else {
      return this.exec_standard(ctx);
    }
  }

  exec_selected(ctx: Context) {
    const val = this.comparand.execute(ctx);
    for (const ci of this.caseItems) {
      if (equals(ci.when.execute(ctx), val)) {
        return ci.then.execute(ctx);
      }
    }
    return this.els.execute(ctx);
  }

  exec_standard(ctx: Context) {
    for (const ci of this.caseItems) {
      if (ci.when.execute(ctx)) {
        return ci.then.execute(ctx);
      }
    }
    return this.els.execute(ctx);
  }
}
