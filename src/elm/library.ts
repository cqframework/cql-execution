import { Parameter } from '../types/runtime.types';
import {
  ExpressionDef,
  FunctionDef,
  ParameterDef,
  ValueSetDef,
  CodeSystemDef,
  CodeDef,
  ConceptDef
} from './expressions';

export class Library {
  source: any;
  usings: any;
  parameters: Parameter;
  codesystems: any;
  valuesets: any;
  codes: any;
  concepts: any;
  expressions: any;
  functions: any;
  includes: any;

  constructor(json: any, libraryManager?: any) {
    this.source = json;
    // usings
    const usingDefs = (json.library.usings && json.library.usings.def) || [];
    this.usings = usingDefs
      .filter((u: any) => u.localIdentifier !== 'System')
      .map((u: any) => {
        return { name: u.localIdentifier, version: u.version };
      });
    // parameters
    const paramDefs = (json.library.parameters && json.library.parameters.def) || [];
    this.parameters = {};
    for (const param of paramDefs) {
      this.parameters[param.name] = new ParameterDef(param);
    }
    // code systems
    const csDefs = (json.library.codeSystems && json.library.codeSystems.def) || [];
    this.codesystems = {};
    for (const codesystem of csDefs) {
      this.codesystems[codesystem.name] = new CodeSystemDef(codesystem);
    }
    // value sets
    const vsDefs = (json.library.valueSets && json.library.valueSets.def) || [];
    this.valuesets = {};
    for (const valueset of vsDefs) {
      this.valuesets[valueset.name] = new ValueSetDef(valueset);
    }
    // codes
    const codeDefs = (json.library.codes && json.library.codes.def) || [];
    this.codes = {};
    for (const code of codeDefs) {
      this.codes[code.name] = new CodeDef(code);
    }
    // concepts
    const conceptDefs = (json.library.concepts && json.library.concepts.def) || [];
    this.concepts = {};
    for (const concept of conceptDefs) {
      this.concepts[concept.name] = new ConceptDef(concept);
    }
    // expressions
    const exprDefs = (json.library.statements && json.library.statements.def) || [];
    this.expressions = {};
    this.functions = {};
    for (const expr of exprDefs) {
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
    for (const incl of inclDefs) {
      if (libraryManager) {
        this.includes[incl.localIdentifier] = libraryManager.resolve(incl.path, incl.version);
      }
    }

    // Include codesystems from includes
    for (const iProperty in this.includes) {
      if (this.includes[iProperty] && this.includes[iProperty].codesystems) {
        for (const csProperty in this.includes[iProperty].codesystems) {
          this.codesystems[csProperty] = this.includes[iProperty].codesystems[csProperty];
        }
      }
    }
  }

  getFunction(identifier: string) {
    return this.functions[identifier];
  }

  get(identifier: string) {
    return (
      this.expressions[identifier] || this.includes[identifier] || this.getFunction(identifier)
    );
  }

  getValueSet(identifier: string, libraryName: string) {
    if (this.valuesets[identifier] != null) {
      return this.valuesets[identifier];
    }
    return this.includes[libraryName] != null
      ? this.includes[libraryName].valuesets[identifier]
      : undefined;
  }

  getCodeSystem(identifier: string) {
    return this.codesystems[identifier];
  }

  getCode(identifier: string) {
    return this.codes[identifier];
  }

  getConcept(identifier: string) {
    return this.concepts[identifier];
  }

  getParameter(name: string) {
    return this.parameters[name];
  }
}
