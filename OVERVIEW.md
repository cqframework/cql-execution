CQL Execution Framework Reference Implementation
================================================

This reference implementation for executing CQL is still under development. The reference implementation was created to prove that CQL is implementable and has been integrated into production eCQM tools such as [Bonnie](https://bonnie.healthit.gov/) and [Cypress](https://cypress.healthit.gov/). It is also used in several [CDS Connect](https://cds.ahrq.gov/cdsconnect) tools.

The CQL execution framework is licensed under the open source [Apache Version 2.0](../../../LICENSE) license.

Technologies
------------

The CQL execution framework was originally written in [CoffeeScript](http://coffeescript.org/). CoffeeScript is a scripting language that compiles down to JavaScript. In 2020, the CQL Execution framework source code was migrated from CoffeeScript to ES6 JavaScript. JavaScript execution code allows the reference implementation to be integrated into a variety of environments, including servers, other languages’ runtime environments, and standard web browsers.
In 2022, the CQL execution framework was converted to [TypeScript](https://www.typescriptlang.org/) to make use of static typing and support both TypeScript and JavaScript users of the framework.

The CQL execution framework tests and examples are configured to run using [Node.js](http://nodejs.org/), but can be easily integrated into other JavaScript runtime environments.

The CQL execution framework does not currently rely on any backend database for storing patient records. All records are stored as flat files or passed to the execution framework as in-memory instances of `Patient` classes. While this is not the most efficient approach, it is the simplest approach to understand and implement across a variety of use cases.

Approach
--------

### JSON ELM

Despite its name, the CQL execution framework does not execute CQL directly. Instead, it executes a JSON representation of the ELM. The [cql-to-elm](https://github.com/cqframework/clinical_quality_language/tree/master/Src/java/cql-to-elm) project is a reference implementation for translating CQL to ELM in XML or JSON.

Consider the following CQL:

```
define AdditionExample = 1 + 2
```

The expression 1 + 2 is represented in JSON ELM as follows:

```json
{
  "type" : "Add",
  "operand" : [ {
    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
    "value" : "1",
    "type" : "Literal"
  }, {
    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
    "value" : "2",
    "type" : "Literal"
  } ]
}
```

### ELM Expression Classes

Each ELM expression has a corresponding class defined in the TypeScript CQL execution framework. These classes all extend a common `Expression` class and define, at a minimum, these components:

1.	A `constructor` that takes a JSON ELM object as its argument
2.	An `exec` function that takes a `Context` object as its argument

The `constructor` is responsible for setting class properties from the JSON ELM object and for converting property values from nested JSON to their corresponding `Expression` sub-classes. The `exec` function is responsible for executing the intended logic and returning the result.

The following is an example of the `Add` class that corresponds to the JSON ELM example in the previous section:

```typescript
class Add extends Expression {
  arg1: IntegerLiteral;
  arg2: IntegerLiteral;

  constructor(json: any) {
    super(json);
    this.arg1 = new IntegerLiteral(json.operand[0]);
    this.arg2 = new IntegerLiteral(json.operand[1]);
  }

  exec(ctx: Context) {
    return this.arg1.exec(ctx) + this.arg2.exec(ctx);
  }
}
```

When the `constructor` is passed the JSON ELM from the previous example, it constructs `IntegerLiteral` classes from the `operand` elements, and sets `this.arg1` and `this.arg2` to the resulting `IntegerLiteral` instances.

When `exec` is called, it calls `exec` on `this.arg1` and `this.arg2` (resulting in the primitives `1` and `2`) and then adds them using the native `+` operator. The `exec` function returns the result of the native addition operation.

Note that the actual reference implementation of `Add` differs from this example in that it can handle other types of operands (since not all addition is on `IntegerLiteral` expressions). It also utilizes common functions from its superclass, resulting in an actual implementation that is more flexible (but also more complex) than the implementation in this example.

This is the core of how all operations are defined and executed in the CQL execution framework. Since ELM is an abstract syntax tree (AST), execution is simply a chained execution down the tree.

### PatientSource

The CQL execution framework contains a very simplistic data model to support demonstration and testing. Real-world uses will use more complex data models such as FHIR or QDM.  Access to the data model always occurs through a `PatientSource` class, allowing the backend model implementation to vary based on data model.

When the CQL execution framework executes a CQL library, it iterates over the patients provided by the `PatientSource`, calculating each expression in the library’s `Patient` context for each patient. In the `Patient` context, retrieves are always executed against the current patient record. In order to support patient-specific retrieves and record access, the `Patient` class must implement a small number of predefined functions (such as `findRecords` and `get`).

Ideally, a `PatientSource` should provide the pre-filtered set of patients, based on the initial data requiremements (gleaned from the library’s retrieve statements). In the current reference implementation, the `PatientSource` is populated with an array of JSON-formatted patients, usually from a flat file.

### CodeService

In order for the CQL execution framework to determine if a code is in a valueset, it must be able to resolve the valueset to a list of codes. Valueset resolution always occurs through a `CodeService` class, allowing the actual backend implementation to be replaced with another implementation. In the current reference implementation, the CodeService is loaded with a static JSON map of valuesets and codes, usually from a flat file. In an ideal implementation, the CodeService should access a local database of valuesets or an API to a valueset service.

### MessageListener

The CQL specification defines a [Message](https://cql.hl7.org/09-b-cqlreference.html#message) operator that "provides a run-time mechanism for returning messages, warnings, traces, and errors to the calling environment." To support this, the CQL execution framework supports a "MessageListener" API. A MessageListener class must contain an `onMessage` function which will be called by the CQL execution framework if the `condition` passed to the `Message` operator is `true`:
```typescript
onMessage(source: any, code: string, severity: string, message: string) {
  // do something with the message
}
```
The `source` argument may be of any type (depending on where the `Message` operator is used in the CQL), but the `code`, `severity`, and `message` arguments are all strings. According to the specification, the `source` argument is supplied for messages w/ Trace severity and implementers should take care to ensure that no PII or PHI is logged as part of the trace message. The CQL execution framework does not redact any PII/PHI, so it is up to the implementer of the MessageListener to ensure appropriate precautions are taken.

Implementers are encouraged to supply their own MessageListener, but the CQL execution framework exports two basic MessageListener classes: `NullMessageListener`, and `ConsoleMessageListener`. The `NullMessageListener` does nothing and is mainly used internally when no other MessageListener is supplied.  The `ConsoleMessageListener` logs Trace, Message, and Warning messages to stdout, and logs Error messages to stderr. It also take a boolean argument to indicate if Trace messages should log the source (as JSON); this defaults to `false` and should only be set to `true` in test environments using synthetic data.

### Executor

The CQL execution framework provides a basic Executor class for executing a cql document over a PatientSource. An instance of the Executor class provides a wrapping element around a Library instance, a CodeService instance (if required) and a set of CQL input parameters. Once configured, an Executor class can be used multiple times to execute over an arbitary number of PatientSource instances.

Executing CQL Libraries
-----------------------

The following is an example of a JavaScript file for executing a CQL library:

```js
const cql = require('./cql');
const patients = require('./data/example-patients');
const valuesets = require('./data/example-valuesets');
const measure = require('./example-measure');

const lib = new cql.Library(measure);
const patientSource = new cql.PatientSource(patients);
const codeService = new cql.CodeService(valuesets);
const messageListener = new cql.ConsoleMessageListener();

const parameters = {
  MeasurementPeriod : new cql.Interval(
    new cql.DateTime(2013, 1, 1, 0, 0, 0, 0),
    new cql.DateTime(2014, 1, 1, 0, 0, 0, 0),
    true,
    false
  )
};

const executor = new cql.Executor(lib, codeService, parameters, messageListener);
const result = executor.exec(patientSource);
```

The first line imports the CQL execution framework library, while the next three lines import the measure JSON ELM, patient data, and valueset data. The next three lines then construct the CQL `Library`, `PatientSource`, and `CodeService` using the imported data. The `messageListener` definition sets up console logging for CQL `Message` operators. The `parameters` definition overrides the `"MeasurementPeriod"` parameter with an interval representing the entire year of 2013. Finally, the last two lines construct an Executor object that will execute the cql document against the supplied PatientSource.

The result of the execution is a CQL `Results` object containing a list of patients and their calculated values for each named expression in the `Patient` context. If the library contained a `Unfiltered` context, the calculated value of the named expressions for the `Unfiltered` will be included in the `Results` as well.

Besides the `exec(patient_source)` method, the Executor class contains a couple of additional convenience methods for executing cql documents against Patient Sources. The first additional method, `exec_patient_context(patient_source)`, will execute only the expressions defined in the CQL library's Patient Context. Any statements declared in the Unfiltered context will be ignored. The other method, `exec_expression(patient_source)` executes a single expression in the CQL document's Patient Context, along with any expressions that are called internally by the expression to be executed.

Current Status
--------------

The CQL execution framework is still evolving and is not yet complete. See the [README](README.md) for
additional information regarding current limitations.
