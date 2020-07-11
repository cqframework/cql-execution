/*
 * decaffeinate suggestions:
 * DS001: Remove Babel/TypeScript constructor workaround
 * DS101: Remove unnecessary use of Array.from
 * DS102: Remove unnecessary code created because of implicit returns
 * DS205: Consider reworking code to avoid use of IIFEs
 * DS206: Consider reworking classes to avoid initClass
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
let Date, DateFrom, DateTime, DateTimeComponentFrom, DifferenceBetween, DurationBetween, Now, Time, TimeFrom, TimeOfDay, TimezoneOffsetFrom, Today;
const { Expression } = require('./expression');
const { build } = require('./builder');
const { Literal } = require('./literal');
const DT = require('../datatypes/datatypes');

module.exports.DateTime = (DateTime = (function() {
  DateTime = class DateTime extends Expression {
    static initClass() {
      this.PROPERTIES = ['year', 'month', 'day', 'hour', 'minute', 'second', 'millisecond', 'timezoneOffset'];
    }
    constructor(json) {
      {
        // Hack: trick Babel/TypeScript into allowing this before super.
        if (false) { super(); }
        let thisFn = (() => { return this; }).toString();
        let thisName = thisFn.match(/return (?:_assertThisInitialized\()*(\w+)\)*;/)[1];
        eval(`${thisName} = this;`);
      }
      this.json = json;
      super(...arguments);
    }

    exec(ctx) {
      for (let property of DateTime.PROPERTIES) {
        // if json does not contain 'timezoneOffset' set it to the executionDateTime from the context
        if (this.json[property] != null) {
          this[property] = build(this.json[property]);
        } else if ((property === 'timezoneOffset') && (ctx.getTimezoneOffset() != null)) {
          this[property] = Literal.from({"type": "Literal", "value": ctx.getTimezoneOffset(), "valueType": "{urn:hl7-org:elm-types:r1}Integer"});
        }
      }
      const args = ((() => {
        const result = [];
        for (let p of DateTime.PROPERTIES) {           if (this[p] != null) { result.push(this[p].execute(ctx)); } else {
            result.push(undefined);
          }
        }
        return result;
      })());
      return new DT.DateTime(...Array.from(args || []));
    }
  };
  DateTime.initClass();
  return DateTime;
})());

module.exports.Date = (Date = (function() {
  Date = class Date extends Expression {
    static initClass() {
      this.PROPERTIES = ['year', 'month', 'day'];
    }
    constructor(json) {
      {
        // Hack: trick Babel/TypeScript into allowing this before super.
        if (false) { super(); }
        let thisFn = (() => { return this; }).toString();
        let thisName = thisFn.match(/return (?:_assertThisInitialized\()*(\w+)\)*;/)[1];
        eval(`${thisName} = this;`);
      }
      this.json = json;
      super(...arguments);
    }

    exec(ctx) {
      for (let property of Date.PROPERTIES) {
        if (this.json[property] != null) {
          this[property] = build(this.json[property]);
        }
      }
      const args = ((() => {
        const result = [];
        for (let p of Date.PROPERTIES) {           if (this[p] != null) { result.push(this[p].execute(ctx)); } else {
            result.push(undefined);
          }
        }
        return result;
      })());
      return new DT.Date(...Array.from(args || []));
    }
  };
  Date.initClass();
  return Date;
})());

module.exports.Time = (Time = (function() {
  Time = class Time extends Expression {
    static initClass() {
      this.PROPERTIES = ['hour', 'minute', 'second', 'millisecond'];
    }
    constructor(json) {
      super(...arguments);
      for (let property of Time.PROPERTIES) {
        if (json[property] != null) { this[property] = build(json[property]); }
      }
    }

    exec(ctx) {
      const args = ((() => {
        const result = [];
        for (let p of Time.PROPERTIES) {           if (this[p] != null) { result.push(this[p].execute(ctx)); } else {
            result.push(undefined);
          }
        }
        return result;
      })());
      return (new DT.DateTime(0, 1, 1, ...Array.from(args))).getTime();
    }
  };
  Time.initClass();
  return Time;
})());

module.exports.Today = (Today = class Today extends Expression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    return ctx.getExecutionDateTime().getDate();
  }
});

module.exports.Now = (Now = class Now extends Expression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    return ctx.getExecutionDateTime();
  }
});

module.exports.TimeOfDay = (TimeOfDay = class TimeOfDay extends Expression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    return ctx.getExecutionDateTime().getTime();
  }
});

module.exports.DateTimeComponentFrom = (DateTimeComponentFrom = class DateTimeComponentFrom extends Expression {
  constructor(json) {
    super(...arguments);
    this.precision = json.precision;
  }

  exec(ctx) {
    const arg = this.execArgs(ctx);
    if (arg != null) { return arg[this.precision.toLowerCase()]; } else { return null; }
  }
});

module.exports.DateFrom = (DateFrom = class DateFrom extends Expression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    const date = this.execArgs(ctx);
    if (date != null) { return date.getDate(); } else { return null; }
  }
});

module.exports.TimeFrom = (TimeFrom = class TimeFrom extends Expression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    const date = this.execArgs(ctx);
    if (date != null) { return date.getTime(); } else { return null; }
  }
});

module.exports.TimezoneOffsetFrom = (TimezoneOffsetFrom = class TimezoneOffsetFrom extends Expression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    const date = this.execArgs(ctx);
    if (date != null) { return date.timezoneOffset; } else { return null; }
  }
});

// Delegated to by overloaded#After
module.exports.doAfter = (a, b, precision) => a.after(b, precision);

// Delegated to by overloaded#Before
module.exports.doBefore = (a, b, precision) => a.before(b, precision);

module.exports.DifferenceBetween = (DifferenceBetween = class DifferenceBetween extends Expression {
  constructor(json) {
    super(...arguments);
    this.precision = json.precision;
  }

  exec(ctx) {
    const args = this.execArgs(ctx);
    // Check to make sure args exist and that they have differenceBetween functions so that they can be compared to one another
    if ((args[0] == null) || (args[1] == null) || (typeof args[0].differenceBetween !== 'function') || (typeof args[1].differenceBetween !== 'function')) {
      return null;
    }
    const result = args[0].differenceBetween(args[1], this.precision != null ? this.precision.toLowerCase() : undefined);
    if ((result != null) && result.isPoint()) { return result.low; } else { return result; }
  }
});

module.exports.DurationBetween = (DurationBetween = class DurationBetween extends Expression {
  constructor(json) {
    super(...arguments);
    this.precision = json.precision;
  }

  exec(ctx) {
    const args = this.execArgs(ctx);
    // Check to make sure args exist and that they have durationBetween functions so that they can be compared to one another
    if ((args[0] == null) || (args[1] == null) || (typeof args[0].durationBetween !== 'function') || (typeof args[1].durationBetween !== 'function')) {
      return null;
    }
    const result = args[0].durationBetween(args[1], this.precision != null ? this.precision.toLowerCase() : undefined);
    if ((result != null) && result.isPoint()) { return result.low; } else { return result; }
  }
});
