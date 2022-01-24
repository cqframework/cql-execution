const { Expression } = require('./expression');
const { build } = require('./builder');
const { Literal } = require('./literal');
const DT = require('../datatypes/datatypes');

class DateTime extends Expression {
  constructor(json) {
    super(json);
    this.json = json;
  }

  exec(ctx) {
    for (let property of DateTime.PROPERTIES) {
      // if json does not contain 'timezoneOffset' set it to the executionDateTime from the context
      if (this.json[property] != null) {
        this[property] = build(this.json[property]);
      } else if (property === 'timezoneOffset' && ctx.getTimezoneOffset() != null) {
        this[property] = Literal.from({
          type: 'Literal',
          value: ctx.getTimezoneOffset(),
          valueType: '{urn:hl7-org:elm-types:r1}Integer'
        });
      }
    }
    const args = DateTime.PROPERTIES.map(p => (this[p] != null ? this[p].execute(ctx) : undefined));
    return new DT.DateTime(...args);
  }
}

DateTime.PROPERTIES = [
  'year',
  'month',
  'day',
  'hour',
  'minute',
  'second',
  'millisecond',
  'timezoneOffset'
];

class Date extends Expression {
  constructor(json) {
    super(json);
    this.json = json;
  }

  exec(ctx) {
    for (let property of Date.PROPERTIES) {
      if (this.json[property] != null) {
        this[property] = build(this.json[property]);
      }
    }
    const args = Date.PROPERTIES.map(p => (this[p] != null ? this[p].execute(ctx) : undefined));
    return new DT.Date(...args);
  }
}

Date.PROPERTIES = ['year', 'month', 'day'];

class Time extends Expression {
  constructor(json) {
    super(json);
    for (let property of Time.PROPERTIES) {
      if (json[property] != null) {
        this[property] = build(json[property]);
      }
    }
  }

  exec(ctx) {
    const args = Time.PROPERTIES.map(p => (this[p] != null ? this[p].execute(ctx) : undefined));
    return new DT.DateTime(0, 1, 1, ...args).getTime();
  }
}

Time.PROPERTIES = ['hour', 'minute', 'second', 'millisecond'];

class Today extends Expression {
  constructor(json) {
    super(json);
  }

  exec(ctx) {
    return ctx.getExecutionDateTime().getDate();
  }
}

class Now extends Expression {
  constructor(json) {
    super(json);
  }

  exec(ctx) {
    return ctx.getExecutionDateTime();
  }
}

class TimeOfDay extends Expression {
  constructor(json) {
    super(json);
  }

  exec(ctx) {
    return ctx.getExecutionDateTime().getTime();
  }
}

class DateTimeComponentFrom extends Expression {
  constructor(json) {
    super(json);
    this.precision = json.precision;
  }

  exec(ctx) {
    const arg = this.execArgs(ctx);
    if (arg != null) {
      return arg[this.precision.toLowerCase()];
    } else {
      return null;
    }
  }
}

class DateFrom extends Expression {
  constructor(json) {
    super(json);
  }

  exec(ctx) {
    const date = this.execArgs(ctx);
    if (date != null) {
      return date.getDate();
    } else {
      return null;
    }
  }
}

class TimeFrom extends Expression {
  constructor(json) {
    super(json);
  }

  exec(ctx) {
    const date = this.execArgs(ctx);
    if (date != null) {
      return date.getTime();
    } else {
      return null;
    }
  }
}

class TimezoneOffsetFrom extends Expression {
  constructor(json) {
    super(json);
  }

  exec(ctx) {
    const date = this.execArgs(ctx);
    if (date != null) {
      return date.timezoneOffset;
    } else {
      return null;
    }
  }
}

// Delegated to by overloaded#After
function doAfter(a, b, precision) {
  return a.after(b, precision);
}

// Delegated to by overloaded#Before
function doBefore(a, b, precision) {
  return a.before(b, precision);
}

class DifferenceBetween extends Expression {
  constructor(json) {
    super(json);
    this.precision = json.precision;
  }

  exec(ctx) {
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

class DurationBetween extends Expression {
  constructor(json) {
    super(json);
    this.precision = json.precision;
  }

  exec(ctx) {
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

module.exports = {
  Date,
  DateFrom,
  DateTime,
  DateTimeComponentFrom,
  DifferenceBetween,
  DurationBetween,
  Now,
  Time,
  TimeFrom,
  TimeOfDay,
  TimezoneOffsetFrom,
  Today,
  doAfter,
  doBefore
};
