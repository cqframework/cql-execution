import { Expression } from './expression';
import { Quantity } from '../datatypes/quantity';
import * as DT from '../datatypes/datatypes';
import { Context } from '../runtime/context';

export class Ratio extends Expression {
  numerator: Quantity;
  denominator: Quantity;

  constructor(json: any) {
    super(json);
    if (json.numerator == null) {
      throw new Error('Cannot create a ratio with an undefined numerator value');
    } else {
      this.numerator = new Quantity(json.numerator.value, json.numerator.unit);
    }

    if (json.denominator == null) {
      throw new Error('Cannot create a ratio with an undefined denominator value');
    } else {
      this.denominator = new Quantity(json.denominator.value, json.denominator.unit);
    }
  }

  exec(_ctx: Context) {
    return new DT.Ratio(this.numerator, this.denominator);
  }
}
