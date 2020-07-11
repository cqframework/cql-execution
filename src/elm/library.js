/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
let Library;
module.exports.Library = (Library = class Library {
  constructor(json, libraryManager) {
    let expr;
    this.source = json;
    this.usings = [];
    for (let u of (json.library.usings != null ? json.library.usings.def : undefined) != null ? (json.library.usings != null ? json.library.usings.def : undefined) : []) {
      if (u.localIdentifier !== "System") { this.usings.push({"name" : u.localIdentifier, "version" : u.version}); }
    }
    this.parameters = {};
    for (let param of (json.library.parameters != null ? json.library.parameters.def : undefined) != null ? (json.library.parameters != null ? json.library.parameters.def : undefined) : []) {
      this.parameters[param.name] = new ParameterDef(param);
    }
    this.codesystems = {};
    for (let codesystem of (json.library.codeSystems != null ? json.library.codeSystems.def : undefined) != null ? (json.library.codeSystems != null ? json.library.codeSystems.def : undefined) : []) {
      this.codesystems[codesystem.name] = new CodeSystemDef(codesystem);
    }
    this.valuesets = {};
    for (let valueset of (json.library.valueSets != null ? json.library.valueSets.def : undefined) != null ? (json.library.valueSets != null ? json.library.valueSets.def : undefined) : []) {
      this.valuesets[valueset.name] = new ValueSetDef(valueset);
    }
    this.codes = {};
    for (let code of (json.library.codes != null ? json.library.codes.def : undefined) != null ? (json.library.codes != null ? json.library.codes.def : undefined) : []) {
      this.codes[code.name] = new CodeDef(code);
    }
    this.concepts = {};
    for (let concept of (json.library.concepts != null ? json.library.concepts.def : undefined) != null ? (json.library.concepts != null ? json.library.concepts.def : undefined) : []) {
      this.concepts[concept.name] = new ConceptDef(concept);
    }
    this.expressions = {};
    for (expr of (json.library.statements != null ? json.library.statements.def : undefined) != null ? (json.library.statements != null ? json.library.statements.def : undefined) : []) {
      this.expressions[expr.name] = expr.type === "FunctionDef"  ? new FunctionDef(expr) : new ExpressionDef(expr);
    }
    this.includes = {};
    for (expr of (json.library.includes != null ? json.library.includes.def : undefined) != null ? (json.library.includes != null ? json.library.includes.def : undefined) : []) {
      if (libraryManager) { this.includes[expr.localIdentifier] =  libraryManager.resolve(expr.path,expr.version); }
    }
  }

  get(identifier) {
    return this.expressions[identifier] || this.includes[identifier];
  }

  getValueSet(identifier, libraryName) {
    if (this.valuesets[identifier] != null) {
      return this.valuesets[identifier];
    }
    return (this.includes[libraryName] != null ? this.includes[libraryName].valuesets[identifier] : undefined);
  }

  getCodeSystem(identifier) {
    return this.codesystems[identifier];
  }

  getCode(identifier) {
    return this.codes[identifier];
  }

  getConcept(identifier) {
    return this.concepts[identifier];
  }

  getParameter(name) {
    return this.parameters[name];
  }
});
// These requires are at the end of the file because having them first in the
// file creates errors due to the order that the libraries are loaded.
var { ExpressionDef, FunctionDef, ParameterDef, ValueSetDef, CodeSystemDef, CodeDef, ConceptDef } = require('./expressions');
const { Results } = require('../runtime/results');
