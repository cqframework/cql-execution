// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS206: Consider reworking classes to avoid initClass
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
let BooleanLiteral, DecimalLiteral, IntegerLiteral, Literal, StringLiteral;
const { Expression } = require('./expression');

module.exports.Literal = (Literal = class Literal extends Expression {
  static from(json) {
    switch(json.valueType) {
    case '{urn:hl7-org:elm-types:r1}Boolean': return new BooleanLiteral(json);
    case '{urn:hl7-org:elm-types:r1}Integer': return new IntegerLiteral(json);
    case '{urn:hl7-org:elm-types:r1}Decimal': return new DecimalLiteral(json);
    case '{urn:hl7-org:elm-types:r1}String': return new StringLiteral(json);
    default: return new Literal(json);
    }
  }

  constructor(json) {
    super(...arguments);
    this.valueType = json.valueType;
    this.value = json.value;
  }

  exec(ctx) {
    return this.value;
  }
});

// The following are not defined in ELM, but helpful for execution

module.exports.BooleanLiteral = (BooleanLiteral = (function() {
  BooleanLiteral = class BooleanLiteral extends Literal {
    static initClass() {
  
      // Define a simple getter to allow type-checking of this class without instanceof
      // and in a way that survives minification (as opposed to checking constructor.name)
      Object.defineProperties(this.prototype, {
        isBooleanLiteral: {
          get() { return true; }
        }
      }
      );
    }
    constructor(json) {
      super(...arguments);
      this.value = this.value === 'true';
    }

    exec(ctx) {
      return this.value;
    }
  };
  BooleanLiteral.initClass();
  return BooleanLiteral;
})());

module.exports.IntegerLiteral = (IntegerLiteral = (function() {
  IntegerLiteral = class IntegerLiteral extends Literal {
    static initClass() {
  
      // Define a simple getter to allow type-checking of this class without instanceof
      // and in a way that survives minification (as opposed to checking constructor.name)
      Object.defineProperties(this.prototype, {
        isIntegerLiteral: {
          get() { return true; }
        }
      }
      );
    }
    constructor(json) {
      super(...arguments);
      this.value = parseInt(this.value, 10);
    }

    exec(ctx) {
      return this.value;
    }
  };
  IntegerLiteral.initClass();
  return IntegerLiteral;
})());

module.exports.DecimalLiteral = (DecimalLiteral = (function() {
  DecimalLiteral = class DecimalLiteral extends Literal {
    static initClass() {
  
      // Define a simple getter to allow type-checking of this class without instanceof
      // and in a way that survives minification (as opposed to checking constructor.name)
      Object.defineProperties(this.prototype, {
        isDecimalLiteral: {
          get() { return true; }
        }
      }
      );
    }
    constructor(json) {
      super(...arguments);
      this.value = parseFloat(this.value);
    }

    exec(ctx) {
      return this.value;
    }
  };
  DecimalLiteral.initClass();
  return DecimalLiteral;
})());

module.exports.StringLiteral = (StringLiteral = (function() {
  StringLiteral = class StringLiteral extends Literal {
    static initClass() {
  
      // Define a simple getter to allow type-checking of this class without instanceof
      // and in a way that survives minification (as opposed to checking constructor.name)
      Object.defineProperties(this.prototype, {
        isStringLiteral: {
          get() { return true; }
        }
      }
      );
    }
    constructor(json) {
      super(...arguments);
    }

    exec(ctx) {
      // TODO: Remove these replacements when CQL-to-ELM fixes bug: https://github.com/cqframework/clinical_quality_language/issues/82
      return this.value.replace(/\\'/g, '\'').replace(/\\"/g, '"');
    }
  };
  StringLiteral.initClass();
  return StringLiteral;
})());
