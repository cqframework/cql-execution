const { Exception } = require('../datatypes/exception');
const { typeIsArray } = require('../util/util');
const dt = require('../datatypes/datatypes');

class Context {
  constructor(parent, _codeService = null, _parameters = {}) {
    this.parent = parent;
    this._codeService = _codeService;
    this.context_values = {};
    this.library_context = {};
    this.localId_context = {};
    // TODO: If there is an issue with number of parameters look into cql4browsers fix: 387ea77538182833283af65e6341e7a05192304c
    this.checkParameters(_parameters); // not crazy about possibly throwing an error in a constructor, but...
    this._parameters = _parameters;
  }

  get parameters() {
    return this._parameters || (this.parent && this.parent.parameters);
  }

  set parameters(params) {
    this.checkParameters(params);
    this._parameters = params;
  }

  get codeService() {
    return this._codeService || (this.parent && this.parent.codeService);
  }

  set codeService(cs) {
    this._codeService = cs;
  }

  withParameters(params) {
    this.parameters = params || {};
    return this;
  }

  withCodeService(cs) {
    this.codeService = cs;
    return this;
  }

  rootContext() {
    if (this.parent) {
      return this.parent.rootContext();
    } else {
      return this;
    }
  }

  findRecords(profile) {
    return this.parent && this.parent.findRecords(profile);
  }

  childContext(context_values = {}) {
    const ctx = new Context(this);
    ctx.context_values = context_values;
    return ctx;
  }

  getLibraryContext(library) {
    return this.parent && this.parent.getLibraryContext(library);
  }

  getLocalIdContext(localId) {
    return this.parent && this.parent.getLocalIdContext(localId);
  }

  getParameter(name) {
    return this.parent && this.parent.getParameter(name);
  }

  getParentParameter(name) {
    if (this.parent) {
      if (this.parent.parameters[name] != null) {
        return this.parent.parameters[name];
      } else {
        return this.parent.getParentParameter(name);
      }
    }
  }

  getTimezoneOffset() {
    if (this.executionDateTime != null) {
      return this.executionDateTime.timezoneOffset;
    } else if (this.parent && this.parent.getTimezoneOffset != null) {
      return this.parent.getTimezoneOffset();
    } else {
      throw new Exception('No Timezone Offset has been set');
    }
  }

  getExecutionDateTime() {
    if (this.executionDateTime != null) {
      return this.executionDateTime;
    } else if (this.parent && this.parent.getExecutionDateTime != null) {
      return this.parent.getExecutionDateTime();
    } else {
      throw new Exception('No Execution DateTime has been set');
    }
  }

  getValueSet(name, library) {
    return this.parent && this.parent.getValueSet(name, library);
  }

  getCodeSystem(name) {
    return this.parent && this.parent.getCodeSystem(name);
  }

  getCode(name) {
    return this.parent && this.parent.getCode(name);
  }

  getConcept(name) {
    return this.parent && this.parent.getConcept(name);
  }

  get(identifier) {
    // Check for undefined because if its null, we actually *do* want to return null (rather than
    // looking at parent), but if it's really undefined, *then* look at the parent
    if (typeof this.context_values[identifier] !== 'undefined') {
      return this.context_values[identifier];
    } else if (identifier === '$this') {
      return this.context_values;
    } else {
      return this.parent != null && this.parent.get(identifier);
    }
  }

  set(identifier, value) {
    this.context_values[identifier] = value;
  }

  setLocalIdWithResult(localId, value) {
    // Temporary fix. Real fix will be to return a list of all result values for a given localId.
    const ctx = this.localId_context[localId];
    if (ctx === false || ctx === null || ctx === undefined || ctx.length === 0) {
      this.localId_context[localId] = value;
    }
  }

  getLocalIdResult(localId) {
    return this.localId_context[localId];
  }

  // Returns an object of objects containing each library name
  // with the localIds and result values
  getAllLocalIds() {
    const localIdResults = {};
    // Add the localIds and result values from the main library
    localIdResults[this.parent.source.library.identifier.id] = {};
    localIdResults[this.parent.source.library.identifier.id] = this.localId_context;

    // Iterate over support libraries and store localIds
    for (let libName in this.library_context) {
      const lib = this.library_context[libName];
      this.supportLibraryLocalIds(lib, localIdResults);
    }
    return localIdResults;
  }

  // Recursive function that will grab nested support library localId results
  supportLibraryLocalIds(lib, localIdResults) {
    // Set library identifier name as the key and the object of localIds with their results as the value
    // if it already exists then we need to merge the results instead of overwriting
    if (localIdResults[lib.library.source.library.identifier.id] != null) {
      this.mergeLibraryLocalIdResults(
        localIdResults,
        lib.library.source.library.identifier.id,
        lib.localId_context
      );
    } else {
      localIdResults[lib.library.source.library.identifier.id] = lib.localId_context;
    }
    // Iterate over any support libraries in the current support library
    Object.values(lib.library_context).forEach(supportLib => {
      this.supportLibraryLocalIds(supportLib, localIdResults);
    });
  }

  // Merges the localId results for a library into the already collected results. The logic used for which result
  // to keep is the same as the logic used above in setLocalIdWithResult, "falsey" results are always replaced.
  mergeLibraryLocalIdResults(localIdResults, libraryId, libraryResults) {
    for (let localId in libraryResults) {
      const localIdResult = libraryResults[localId];
      const existingResult = localIdResults[libraryId][localId];
      // overwite this localid result if the existing result is "falsey". future work could track all results for each localid
      if (
        existingResult === false ||
        existingResult === null ||
        existingResult === undefined ||
        existingResult.length === 0
      ) {
        localIdResults[libraryId][localId] = localIdResult;
      }
    }
  }

  checkParameters(params) {
    for (let pName in params) {
      const pVal = params[pName];
      const pDef = this.getParameter(pName);
      if (pVal == null) {
        return; // Null can theoretically be any type
      }
      if (typeof pDef === 'undefined') {
        return; // This will happen if the parameter is declared in a different (included) library
      } else if (
        pDef.parameterTypeSpecifier != null &&
        !this.matchesTypeSpecifier(pVal, pDef.parameterTypeSpecifier)
      ) {
        throw new Error(`Passed in parameter '${pName}' is wrong type`);
      } else if (pDef['default'] != null && !this.matchesInstanceType(pVal, pDef['default'])) {
        throw new Error(`Passed in parameter '${pName}' is wrong type`);
      }
    }
    return true;
  }

  matchesTypeSpecifier(val, spec) {
    switch (spec.type) {
      case 'NamedTypeSpecifier':
        return this.matchesNamedTypeSpecifier(val, spec);
      case 'ListTypeSpecifier':
        return this.matchesListTypeSpecifier(val, spec);
      case 'TupleTypeSpecifier':
        return this.matchesTupleTypeSpecifier(val, spec);
      case 'IntervalTypeSpecifier':
        return this.matchesIntervalTypeSpecifier(val, spec);
      default:
        return true; // default to true when we don't know
    }
  }

  matchesListTypeSpecifier(val, spec) {
    return typeIsArray(val) && val.every(x => this.matchesTypeSpecifier(x, spec.elementType));
  }

  matchesTupleTypeSpecifier(val, spec) {
    return (
      typeof val === 'object' &&
      !typeIsArray(val) &&
      spec.element.every(
        x =>
          typeof val[x.name] === 'undefined' ||
          this.matchesTypeSpecifier(val[x.name], x.elementType)
      )
    );
  }

  matchesIntervalTypeSpecifier(val, spec) {
    return (
      val.isInterval &&
      (val.low == null || this.matchesTypeSpecifier(val.low, spec.pointType)) &&
      (val.high == null || this.matchesTypeSpecifier(val.high, spec.pointType))
    );
  }

  matchesNamedTypeSpecifier(val, spec) {
    switch (spec.name) {
      case '{urn:hl7-org:elm-types:r1}Boolean':
        return typeof val === 'boolean';
      case '{urn:hl7-org:elm-types:r1}Decimal':
        return typeof val === 'number';
      case '{urn:hl7-org:elm-types:r1}Integer':
        return typeof val === 'number' && Math.floor(val) === val;
      case '{urn:hl7-org:elm-types:r1}String':
        return typeof val === 'string';
      case '{urn:hl7-org:elm-types:r1}Concept':
        return val && val.isConcept;
      case '{urn:hl7-org:elm-types:r1}Code':
        return val && val.isCode;
      case '{urn:hl7-org:elm-types:r1}DateTime':
        return val && val.isDateTime;
      case '{urn:hl7-org:elm-types:r1}Date':
        return val && val.isDate;
      case '{urn:hl7-org:elm-types:r1}Quantity':
        return val && val.isQuantity;
      case '{urn:hl7-org:elm-types:r1}Time':
        return val && val.isDateTime && val.isTime();
      default:
        return true; // TODO: Better checking of custom or complex types
    }
  }

  matchesInstanceType(val, inst) {
    switch (false) {
      case !inst.isBooleanLiteral:
        return typeof val === 'boolean';
      case !inst.isDecimalLiteral:
        return typeof val === 'number';
      case !inst.isIntegerLiteral:
        return typeof val === 'number' && Math.floor(val) === val;
      case !inst.isStringLiteral:
        return typeof val === 'string';
      case !inst.isCode:
        return val && val.isCode;
      case !inst.isConcept:
        return val && val.isConcept;
      case !inst.isDateTime:
        return val && val.isDateTime;
      case !inst.isQuantity:
        return val && val.isQuantity;
      case !inst.isTime:
        return val && val.isDateTime && val.isTime();
      case !inst.isList:
        return this.matchesListInstanceType(val, inst);
      case !inst.isTuple:
        return this.matchesTupleInstanceType(val, inst);
      case !inst.isInterval:
        return this.matchesIntervalInstanceType(val, inst);
      default:
        return true; // default to true when we don't know for sure
    }
  }

  matchesListInstanceType(val, list) {
    return typeIsArray(val) && val.every(x => this.matchesInstanceType(x, list.elements[0]));
  }

  matchesTupleInstanceType(val, tpl) {
    return (
      typeof val === 'object' &&
      !typeIsArray(val) &&
      tpl.elements.every(
        x => typeof val[x.name] === 'undefined' || this.matchesInstanceType(val[x.name], x.value)
      )
    );
  }

  matchesIntervalInstanceType(val, ivl) {
    const pointType = ivl.low != null ? ivl.low : ivl.high;
    return (
      val.isInterval &&
      (val.low == null || this.matchesInstanceType(val.low, pointType)) &&
      (val.high == null || this.matchesInstanceType(val.high, pointType))
    );
  }
}

class PatientContext extends Context {
  constructor(
    library,
    patient,
    codeService,
    parameters,
    executionDateTime = dt.DateTime.fromJSDate(new Date())
  ) {
    super(library, codeService, parameters);
    this.library = library;
    this.patient = patient;
    this.executionDateTime = executionDateTime;
  }

  rootContext() {
    return this;
  }

  getLibraryContext(library) {
    if (this.library_context[library] == null) {
      this.library_context[library] = new PatientContext(
        this.get(library),
        this.patient,
        this.codeService,
        this.parameters,
        this.executionDateTime
      );
    }
    return this.library_context[library];
  }

  getLocalIdContext(localId) {
    if (this.localId_context[localId] == null) {
      this.localId_context[localId] = new PatientContext(
        this.get(localId),
        this.patient,
        this.codeService,
        this.parameters,
        this.executionDateTime
      );
    }
    return this.localId_context[localId];
  }

  findRecords(profile) {
    return this.patient && this.patient.findRecords(profile);
  }
}

class UnfilteredContext extends Context {
  constructor(
    library,
    results,
    codeService,
    parameters,
    executionDateTime = dt.DateTime.fromJSDate(new Date())
  ) {
    super(library, codeService, parameters);
    this.library = library;
    this.results = results;
    this.executionDateTime = executionDateTime;
  }

  rootContext() {
    return this;
  }

  findRecords(template) {
    throw new Exception('Retreives are not currently supported in Unfiltered Context');
  }

  getLibraryContext(library) {
    throw new Exception('Library expressions are not currently supported in Unfiltered Context');
  }

  get(identifier) {
    //First check to see if the identifier is a unfiltered context expression that has already been cached
    if (this.context_values[identifier]) {
      return this.context_values[identifier];
    }
    //if not look to see if the library has a unfiltered expression of that identifier
    if (this.library[identifier] && this.library[identifier].context === 'Unfiltered') {
      return this.library.expressions[identifier];
    }
    //lastley attempt to gather all patient level results that have that identifier
    // should this compact null values before return ?
    return Object.values(this.results.patientResults).map(pr => pr[identifier]);
  }
}

module.exports = { Context, PatientContext, UnfilteredContext };
