const { Exception } = require('../datatypes/exception');
const { typeIsArray } = require('../util/util');
const { NullMessageListener } = require('./messageListeners');
const dt = require('../datatypes/datatypes');

class Context {
  constructor(parent, _codeService, _parameters, executionDateTime, messageListener) {
    this.parent = parent;
    this._codeService = _codeService;
    this.context_values = {};
    this.library_context = {};
    this.localId_context = {};
    this.evaluatedRecords = [];
    // TODO: If there is an issue with number of parameters look into cql4browsers fix: 387ea77538182833283af65e6341e7a05192304c
    this.checkParameters(_parameters); // not crazy about possibly throwing an error in a constructor, but...
    this._parameters = _parameters || {};
    this.executionDateTime = executionDateTime;
    this.messageListener = messageListener;
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

  getMessageListener() {
    if (this.messageListener != null) {
      return this.messageListener;
    } else if (this.parent && this.parent.getMessageListener != null) {
      return this.parent.getMessageListener();
    } else {
      return new NullMessageListener();
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
      case 'ChoiceTypeSpecifier':
        return this.matchesChoiceTypeSpecifier(val, spec);
      default:
        return true; // default to true when we don't know
    }
  }

  matchesListTypeSpecifier(val, spec) {
    return typeIsArray(val) && val.every(x => this.matchesTypeSpecifier(x, spec.elementType));
  }

  matchesTupleTypeSpecifier(val, spec) {
    // TODO: Spec is not clear about exactly how tuples should be matched
    return (
      val != null &&
      typeof val === 'object' &&
      !typeIsArray(val) &&
      !val.isInterval &&
      !val.isConcept &&
      !val.isCode &&
      !val.isDateTime &&
      !val.isDate &&
      !val.isQuantity &&
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

  matchesChoiceTypeSpecifier(val, spec) {
    return spec.choice.some(c => this.matchesTypeSpecifier(val, c));
  }

  matchesNamedTypeSpecifier(val, spec) {
    if (val == null) {
      return true;
    }
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
        return val && val.isTime && val.isTime();
      default:
        // Use the data model's implementation of _is, if it is available
        if (typeof val._is === 'function') {
          return val._is(spec);
        }
        // If the value is an array or interval, then we assume it cannot be cast to a
        // named type. Technically, this is not 100% true because a modelinfo can define
        // a named type whose base type is a list or interval.  But none of our models
        // (FHIR, QDM, QICore) do that, so for those models, this approach will always be
        // correct.
        if (Array.isArray(val) || val.isInterval) {
          return false;
        }
        // Otherwise just default to true to match legacy behavior.
        //
        // NOTE: This is also where arbitrary tuples land because they will not have
        // an "is" function and we don't encode the type information into the runtime
        // objects so we can't easily determine their type. We can't reject them,
        // else things like `Encounter{ id: "1" } is Encounter` would return false.
        // So for now we allow false positives in order to avoid false negatives.
        return true;
    }
  }

  matchesInstanceType(val, inst) {
    if (inst.isBooleanLiteral) {
      return typeof val === 'boolean';
    } else if (inst.isDecimalLiteral) {
      return typeof val === 'number';
    } else if (inst.isIntegerLiteral) {
      return typeof val === 'number' && Math.floor(val) === val;
    } else if (inst.isStringLiteral) {
      return typeof val === 'string';
    } else if (inst.isCode) {
      return val && val.isCode;
    } else if (inst.isConcept) {
      return val && val.isConcept;
    } else if (inst.isTime && inst.isTime()) {
      return val && val.isTime && val.isTime();
    } else if (inst.isDate) {
      return val && val.isDate;
    } else if (inst.isDateTime) {
      return val && val.isDateTime;
    } else if (inst.isQuantity) {
      return val && val.isQuantity;
    } else if (inst.isList) {
      return this.matchesListInstanceType(val, inst);
    } else if (inst.isTuple) {
      return this.matchesTupleInstanceType(val, inst);
    } else if (inst.isInterval) {
      return this.matchesIntervalInstanceType(val, inst);
    }
    return true; // default to true when we don't know for sure
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
    executionDateTime = dt.DateTime.fromJSDate(new Date()),
    messageListener = new NullMessageListener()
  ) {
    super(library, codeService, parameters, executionDateTime, messageListener);
    this.library = library;
    this.patient = patient;
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
    executionDateTime = dt.DateTime.fromJSDate(new Date()),
    messageListener = new NullMessageListener()
  ) {
    super(library, codeService, parameters, executionDateTime, messageListener);
    this.library = library;
    this.results = results;
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
