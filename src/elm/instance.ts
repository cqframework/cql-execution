const { Expression } = require('./expression');
const { build } = require('./builder');
const { Quantity } = require('../datatypes/quantity');
const { Code, Concept } = require('../datatypes/datatypes');
class Element {
  constructor(json) {
    this.name = json.name;
    this.value = build(json.value);
  }
  exec(ctx) {
    return this.value != null ? this.value.execute(ctx) : undefined;
  }
}

class Instance extends Expression {
  constructor(json) {
    super(json);
    this.classType = json.classType;
    this.element = json.element.map(child => new Element(child));
  }

  exec(ctx) {
    const obj = {};
    for (let el of this.element) {
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

module.exports = { Instance };
