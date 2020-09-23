class Library {
  constructor(json, libraryManager) {
    this.source = json;
    // usings
    const usingDefs = (json.library.usings && json.library.usings.def) || [];
    this.usings = usingDefs
      .filter(u => u.localIdentifier !== 'System')
      .map(u => {
        return { name: u.localIdentifier, version: u.version };
      });
    // parameters
    const paramDefs = (json.library.parameters && json.library.parameters.def) || [];
    this.parameters = {};
    for (let param of paramDefs) {
      this.parameters[param.name] = new ParameterDef(param);
    }
    // code systems
    const csDefs = (json.library.codeSystems && json.library.codeSystems.def) || [];
    this.codesystems = {};
    for (let codesystem of csDefs) {
      this.codesystems[codesystem.name] = new CodeSystemDef(codesystem);
    }
    // value sets
    const vsDefs = (json.library.valueSets && json.library.valueSets.def) || [];
    this.valuesets = {};
    for (let valueset of vsDefs) {
      this.valuesets[valueset.name] = new ValueSetDef(valueset);
    }
    // codes
    const codeDefs = (json.library.codes && json.library.codes.def) || [];
    this.codes = {};
    for (let code of codeDefs) {
      this.codes[code.name] = new CodeDef(code);
    }
    // concepts
    const conceptDefs = (json.library.concepts && json.library.concepts.def) || [];
    this.concepts = {};
    for (let concept of conceptDefs) {
      this.concepts[concept.name] = new ConceptDef(concept);
    }
    // expressions
    const exprDefs = (json.library.statements && json.library.statements.def) || [];
    this.expressions = {};
    this.functions = {};
    for (let expr of exprDefs) {
      if (expr.type === 'FunctionDef') {
        if (!this.functions[expr.name]) {
          this.functions[expr.name] = [];
        }
        this.functions[expr.name].push(new FunctionDef(expr));
      } else {
        this.expressions[expr.name] = new ExpressionDef(expr);
      }
    }
    // includes
    const inclDefs = (json.library.includes && json.library.includes.def) || [];
    this.includes = {};
    for (let incl of inclDefs) {
      if (libraryManager) {
        this.includes[incl.localIdentifier] = libraryManager.resolve(incl.path, incl.version);
      }
    }
  }

  getFunction(identifier) {
    return this.functions[identifier][0];
  }

  get(identifier) {
    return (
      this.expressions[identifier] ||
      this.includes[identifier] ||
      this.functions[identifier][this.functions[identifier].length - 1]
    );
  }

  getValueSet(identifier, libraryName) {
    if (this.valuesets[identifier] != null) {
      return this.valuesets[identifier];
    }
    return this.includes[libraryName] != null
      ? this.includes[libraryName].valuesets[identifier]
      : undefined;
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
}

// These requires are at the end of the file because having them first in the
// file creates errors due to the order that the libraries are loaded.
const {
  ExpressionDef,
  FunctionDef,
  ParameterDef,
  ValueSetDef,
  CodeSystemDef,
  CodeDef,
  ConceptDef
} = require('./expressions');

module.exports = { Library };
