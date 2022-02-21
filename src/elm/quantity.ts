import { Expression } from './expression';
import * as DT from '../datatypes/datatypes';
import { Context } from '../runtime/context';

// Unit conversation is currently implemented on for time duration comparison operations
// TODO: Implement unit conversation for time duration mathematical operations
export class Quantity extends Expression {
  value: number;
  unit: any;

  constructor(json: any) {
    super(json);
    this.value = parseFloat(json.value);
    this.unit = json.unit;
  }

  exec(_ctx: Context) {
    return new DT.Quantity(this.value, this.unit);
  }
}
