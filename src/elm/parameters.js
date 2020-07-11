/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS103: Rewrite code to no longer use __guard__
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
let ParameterDef, ParameterRef;
const { Expression } = require('./expression');
const { build } = require('./builder');

module.exports.ParameterDef = (ParameterDef = class ParameterDef extends Expression {
  constructor(json) {
    super(...arguments);
    this.name = json.name;
    this.default = build(json.default);
    this.parameterTypeSpecifier = json.parameterTypeSpecifier;
  }

  exec(ctx) {
    // If context parameters contains the name, return value.
    if ((ctx != null ? ctx.parameters[this.name] : undefined) != null) {
      return ctx.parameters[this.name];
    // If default type exists, execute the default type
    } else if (this.default != null) {
      return (this.default != null ? this.default.execute(ctx) : undefined);
    // Else, if context and context's parent exist return the value of the parent's parameters with the given name.
    } else {
      return ctx.getParentParameter(this.name);
    }
  }
});

module.exports.ParameterRef = (ParameterRef = class ParameterRef extends Expression {
  constructor(json) {
    super(...arguments);
    this.name = json.name;
    this.library = json.libraryName;
  }

  exec(ctx) {
    ctx = this.library ? ctx.getLibraryContext(this.library) : ctx;
    return __guard__(ctx.getParameter(this.name), x => x.execute(ctx));
  }
});
function __guard__(value, transform) {
  return (typeof value !== 'undefined' && value !== null) ? transform(value) : undefined;
}