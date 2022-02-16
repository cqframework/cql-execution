/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Expression } from './expression';
import { build } from './builder';
import { Literal } from './literal';
import * as DT from '../datatypes/datatypes';
import { Context } from '../runtime/context';

export class DateTime extends Expression {
  json: any;

  static readonly PROPERTIES = [
    'year',
    'month',
    'day',
    'hour',
    'minute',
    'second',
    'millisecond',
    'timezoneOffset'
  ];

  constructor(json: any) {
    super(json);
    this.json = json;
  }

  exec(ctx: Context) {
    for (const property of DateTime.PROPERTIES) {
      // if json does not contain 'timezoneOffset' set it to the executionDateTime from the context
      if (this.json[property] != null) {
        // @ts-ignore
        this[property] = build(this.json[property]);
      } else if (property === 'timezoneOffset' && ctx.getTimezoneOffset() != null) {
        // @ts-ignore
        this[property] = Literal.from({
          type: 'Literal',
          value: ctx.getTimezoneOffset(),
          valueType: '{urn:hl7-org:elm-types:r1}Integer'
        });
      }
    }
    // @ts-ignore
    const args = DateTime.PROPERTIES.map(p => (this[p] != null ? this[p].execute(ctx) : undefined));
    return new DT.DateTime(...args);
  }
}

export class Date extends Expression {
  json: any;

  static readonly PROPERTIES = ['year', 'month', 'day'];

  constructor(json: any) {
    super(json);
    this.json = json;
  }

  exec(ctx: Context) {
    for (const property of Date.PROPERTIES) {
      if (this.json[property] != null) {
        // @ts-ignore
        this[property] = build(this.json[property]);
      }
    }
    // @ts-ignore
    const args = Date.PROPERTIES.map(p => (this[p] != null ? this[p].execute(ctx) : undefined));
    return new DT.Date(...args);
  }
}

export class Time extends Expression {
  static readonly PROPERTIES = ['hour', 'minute', 'second', 'millisecond'];
  constructor(json: any) {
    super(json);
    for (const property of Time.PROPERTIES) {
      if (json[property] != null) {
        // @ts-ignore
        this[property] = build(json[property]);
      }
    }
  }

  exec(ctx: Context) {
    // @ts-ignore
    const args = Time.PROPERTIES.map(p => (this[p] != null ? this[p].execute(ctx) : undefined));
    return new DT.DateTime(0, 1, 1, ...args).getTime();
  }
}

export class Today extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
    return ctx.getExecutionDateTime().getDate();
  }
}

export class Now extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
    return ctx.getExecutionDateTime();
  }
}

export class TimeOfDay extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
    return ctx.getExecutionDateTime().getTime();
  }
}

export class DateTimeComponentFrom extends Expression {
  precision?: any;

  constructor(json: any) {
    super(json);
    this.precision = json.precision;
  }

  exec(ctx: Context) {
    const arg = this.execArgs(ctx);
    if (arg != null) {
      return arg[this.precision.toLowerCase()];
    } else {
      return null;
    }
  }
}

export class DateFrom extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
    const date = this.execArgs(ctx);
    if (date != null) {
      return date.getDate();
    } else {
      return null;
    }
  }
}

export class TimeFrom extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
    const date = this.execArgs(ctx);
    if (date != null) {
      return date.getTime();
    } else {
      return null;
    }
  }
}

export class TimezoneOffsetFrom extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
    const date = this.execArgs(ctx);
    if (date != null) {
      return date.timezoneOffset;
    } else {
      return null;
    }
  }
}

// Delegated to by overloaded#After
export function doAfter(a: any, b: any, precision: any) {
  return a.after(b, precision);
}

// Delegated to by overloaded#Before
export function doBefore(a: any, b: any, precision: any) {
  return a.before(b, precision);
}

export class DifferenceBetween extends Expression {
  precision?: any;

  constructor(json: any) {
    super(json);
    this.precision = json.precision;
  }

  exec(ctx: Context) {
    const args = this.execArgs(ctx);
    // Check to make sure args exist and that they have differenceBetween functions so that they can be compared to one another
    if (
      args[0] == null ||
      args[1] == null ||
      typeof args[0].differenceBetween !== 'function' ||
      typeof args[1].differenceBetween !== 'function'
    ) {
      return null;
    }
    const result = args[0].differenceBetween(
      args[1],
      this.precision != null ? this.precision.toLowerCase() : undefined
    );
    if (result != null && result.isPoint()) {
      return result.low;
    } else {
      return result;
    }
  }
}

export class DurationBetween extends Expression {
  precision?: any;

  constructor(json: any) {
    super(json);
    this.precision = json.precision;
  }

  exec(ctx: Context) {
    const args = this.execArgs(ctx);
    // Check to make sure args exist and that they have durationBetween functions so that they can be compared to one another
    if (
      args[0] == null ||
      args[1] == null ||
      typeof args[0].durationBetween !== 'function' ||
      typeof args[1].durationBetween !== 'function'
    ) {
      return null;
    }
    const result = args[0].durationBetween(
      args[1],
      this.precision != null ? this.precision.toLowerCase() : undefined
    );
    if (result != null && result.isPoint()) {
      return result.low;
    } else {
      return result;
    }
  }
}
