[![CI Checks](https://github.com/cqframework/cql-execution/actions/workflows/ci-workflow.yml/badge.svg)](https://github.com/cqframework/cql-execution/actions/workflows/ci-workflow.yml)
[![codecov](https://codecov.io/gh/cqframework/cql-execution/branch/master/graph/badge.svg)](https://codecov.io/gh/cqframework/cql-execution)

# CQL Execution Framework

The CQL Execution Framework provides a TypeScript/JavaScript library for executing CQL artifacts expressed as
JSON ELM.

For more information, see the [CQL Execution Framework Overview](OVERVIEW.md).

# Data Model and Terminology Service Implementations

This library (`cql-execution`) focuses on supporting CQL's logical constructs; it does not provide
robust support for any particular data model or terminology service. To fully understand the benefit
of the CQL Execution Framework, it must be used with more robust data model providers (called
`PatientSource` implementations) and terminology providers (called `CodeService` implementations).

Implementors interested in executing electronic Clinical Quality Measures (eCQMs) using the QDM data
model should consider using the [cqm-execution](https://github.com/projecttacoma/cqm-execution)
project (which is based on `cql-execution`).

Implementors interested in executing FHIR-based CQL logic should consider using the
[cql-exec-fhir](https://github.com/cqframework/cql-exec-fhir) `PatientSource` with `cql-execution`.

Implementors interested in using the National Library of Medicine's Value Set Authority Center
(VSAC) as a terminology service for looking up value sets should consider using the
[cql-exec-vsac](https://github.com/cqframework/cql-exec-vsac) `CodeService` with `cql-execution`.

The [cql-exec-examples](https://github.com/cqframework/cql-exec-examples) project provides examples
of how `cql-execution`, `cql-exec-fhir`, and `cql-exec-vsac` can be used together.

# Current Limitations

This library supports operations defined in CQL 1.4 and 1.5, but is not yet a complete implementation.
Implementors should be aware of the following limitations and gaps in `cql-execution`:

* Direct support for specific data models is not provided by this library (see above for details).
* `PatientSource`, `CodeService`, and `Results` APIs are still evolving and subject to change.
* Since this library uses the JavaScript `Number` class for both CQL `Integer` and CQL `Decimal`,
  it may display the following limitations related to numbers and math:
  * Reduced precision compared to that which is specified by the CQL specification
  * Issues typically associated with floating point arithmetic
  * Decimals without a decimal portion (e.g., `2.0`) may be treated as CQL `Integer`s
* The following STU (non-normative) features introduced in CQL 1.5 are not yet supported:
  * `Long` datatype
  * Fluent functions
  * Retrieve search paths
  * Retrieve includes
* In addition the following features defined prior to CQL 1.5 are also not yet supported:
  * Related context retrieves
  * Unfiltered context retrieves
  * Unfiltered context references to other libraries
  * External functions
* While the source code of `cql-execution` is in TypeScript, full-fledged typing of the library is not yet implemented
  * Conversion from JavaScript to TypeScript was done in [this pull request](https://github.com/cqframework/cql-execution/pull/260),
  with the intent on making incremental type improvements in subsequent pull requests.

The above is a partial list covering the most significant limitations. For more details, see the
[CQL_Execution_Features.xlsx](CQL_Execution_Features.xlsx) spreadsheet.

# Project Configuration

To use this project, you should perform the following steps:

1. Install [Node.js](http://nodejs.org/) (Note: `npm` version `6.x.x` recommended)
2. Execute the following from the root directory: `npm install`

# To Execute Your CQL

Please note that while the CQL Execution library supports many aspects of CQL, it does not support
everything in the CQL specification.  You should check to see what is implemented (by referencing
the unit tests) before expecting it to work! For a working example, see `examples`.

There are several steps involved to execute CQL.  First, you must create a JSON representation of
the ELM. For the easiest integration, we will generate a JSON file using cql-to-elm:

1. Install the [Java 11 SDK](https://adoptopenjdk.net/)
2. Clone the [clinical_quality_language](https://github.com/cqframework/clinical_quality_language)
   repository to a location of your choice
3. `cd ${path_to_clinical_quality_language}/Src/java` (replacing
   `${path_to_clinical_quality_language}` with the path to the local clone)
4. `./gradlew :cql-to-elm:installDist`
5. `./cql-to-elm/build/install/cql-to-elm/bin/cql-to-elm --format=JSON --input ${path_to_cql} --output ${path_to_cql-execution}/customCQL`

The above example puts the example CQL into a subfolder of the `cql-execution` project to make the
relative paths to `cql-execution` libraries easier, but it doesn't _have_ to go there.  If you put
it elsewhere, you'll need to modify the examples below so that the `require` statements point to
the correct location of the `cql` export.

In the rest of the examples, we'll assume an `age.cql` file with the following contents. This
follows the example already in the "examples" folder (but of course you can use your own CQL):

```
library AgeAtMP version '1'

// NOTE: This example uses a custom data model that is very simplistic and suitable only for
// demonstration and testing purposes.  Real-world CQL should use a more appropriate model.
using Simple version '1.0.0'

parameter MeasurementPeriod default Interval[DateTime(2013, 1, 1, 0, 0, 0, 0), DateTime(2014, 1, 1, 0, 0, 0, 0))

context Patient

define InDemographic:
    AgeInYearsAt(start of MeasurementPeriod) >= 2 and AgeInYearsAt(start of MeasurementPeriod) < 18
```

## TypeScript Example

Next, we can create a TypeScript file to execute the above CQL. This file will need to contain (or
`import`) JSON patient representations for testing as well. Our example CQL uses a "Simple"
data model developed only for demonstration and testing purposes.  In this model, each patient is
represented using a simple JSON object.  For ease of use, let's put the file in the `customCQL`
directory:

``` typescript
import cql from '../../src/cql';
import * as measure from './age.json'; // Requires the "resolveJsonModule" compiler option to be "true"

const lib = new cql.Library(measure);
const executor = new cql.Executor(lib);
const psource = new cql.PatientSource([
  {
    id: '1',
    recordType: 'Patient',
    name: 'John Smith',
    gender: 'M',
    birthDate: '1980-02-17T06:15'
  },
  {
    id: '2',
    recordType: 'Patient',
    name: 'Sally Smith',
    gender: 'F',
    birthDate: '2007-08-02T11:47'
  }
]);

const result = executor.exec(psource);
console.log(JSON.stringify(result, undefined, 2));
```

In the above file, we've assumed the JSON ELM JSON file for the measure is called
`age.json` and is in the same directory as the file that requires is.  We've
also assumed a couple of very simple patients.  Let's call the file we just created
`exec-age.ts`.

Now we can execute the measure using [ts-node](https://www.npmjs.com/package/ts-node):

``` bash
npx ts-node -O '{ "resolveJsonModule": true }' --files ${path_to_cql-execution}/customCQL/exec-age.ts
```

If all is well, it should print the result object to standard out.

## JavaScript Example

For usage in regular JavaScript, we can refer to the compiled JavaScript in the `lib` directory.
Ensure that this JavaScript is present by running `npm run build` before continuing on to the example.
We will follow the same steps as the above TypeScript example, but our JavaScript code must use `require`
instead of `import`, and will load the `cql-execution` library from the `lib` directory. As before,
let's put the file in the `customCQL` directory:

Next, create a JavaScript file to execute the CQL above.  This file will need to contain (or
`require`) JSON patient representations for testing as well.  Our example CQL uses a "Simple"
data model developed only for demonstration and testing purposes.  In this model, each patient is
represented using a simple JSON object.  For ease of use, let's put the file in the `customCQL`
directory:

```js
const cql = require('../lib/cql');
const measure = require('./age.json');

const lib = new cql.Library(measure);
const executor = new cql.Executor(lib);
const psource = new cql.PatientSource([ {
  'id' : '1',
  'recordType' : 'Patient',
  'name': 'John Smith',
  'gender': 'M',
  'birthDate' : '1980-02-17T06:15'
}, {
  'id' : '2',
  'recordType' : 'Patient',
  'name': 'Sally Smith',
  'gender': 'F',
  'birthDate' : '2007-08-02T11:47'
} ]);

const result = executor.exec(psource);
console.log(JSON.stringify(result, undefined, 2));

```

The above file has the same assumptions as the TypeScript example above. Let's call the file we just created
`exec-age.js`.

Now we can execute the measure using Node.js:

```shell
node ${path_to_cql-execution}/customCQL/exec-age.js
```

If all is well, it should print the result object to standard out, and the output should be identical to that of the TypeScript example.

# To Run the CQL Execution Unit Tests

Execute `npm test`.

# To Develop Tests

Many of the tests require JSON ELM data.  It is much easier to write CQL rather than JSON ELM, so
test authors should create test data by adding new CQL to _test/elm/*/data.cql_.  Some
conventions are followed to make testing easier.  The following is an example of some test data:

    // @Test: And
    define AllTrue: true and true
    define SomeTrue: true and false
    define AllFalse: false and false

The `// @Test: And` indicates the name of the test suite it applies to ("And").  The group of
statements that follows the `# And` represents the CQL Library that will be supplied as test data
to the "And" test suite.

To convert the CQL to JavaScript containing the JSON ELM representation, execute
`npm run build:test-data`. This will use the java _cql-to-elm_ project to generate the
_test/elm/*/data.js_ file containing the following exported variable declaration
(NOTE: It's been slimmed down a bit here to make it easier to read, but nothing substantial
has been removed):

```js
/* And
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define AllTrue: true and true
define SomeTrue: true and false
define AllFalse: false and false
*/

module.exports['And'] = {
   "library" : {
      "identifier" : { "id" : "TestSnippet", "version" : "1" },
      "schemaIdentifier" : { "id" : "urn:hl7-org:elm", "version" : "r1" },
      "usings" : {
         "def" : [
           { "localIdentifier" : "System", "uri" : "urn:hl7-org:elm-types:r1" },
           { "localIdentifier" : "Simple", "uri" : "https://github.com/cqframework/cql-execution/simple", "version" : "1.0.0" }
         ]
      },
      "statements" : {
         "def" : [ {
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "type" : "SingletonFrom",
               "operand" : {
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve"
               }
            }
         }, {
            "name" : "AllTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "And",
               "operand" : [
                  { "valueType" : "{urn:hl7-org:elm-types:r1}Boolean", "value" : "true", "type" : "Literal" },
                  { "valueType" : "{urn:hl7-org:elm-types:r1}Boolean", "value" : "true", "type" : "Literal" }
               ]
            }
         }, {
            "name" : "SomeTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "And",
               "operand" : [
                  { "valueType" : "{urn:hl7-org:elm-types:r1}Boolean", "value" : "true", "type" : "Literal" },
                  { "valueType" : "{urn:hl7-org:elm-types:r1}Boolean", "value" : "false", "type" : "Literal" }
               ]
            }
         }, {
            "name" : "AllFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "And",
               "operand" : [
                  { "valueType" : "{urn:hl7-org:elm-types:r1}Boolean", "value" : "false", "type" : "Literal" },
                  { "valueType" : "{urn:hl7-org:elm-types:r1}Boolean", "value" : "false", "type" : "Literal" }
               ]
            }
         }
      ]}
   }
}
```

Notice that since the CQL didn't declare a library name/version, a data model, or a context,
default values were inserted into the CQL at generation time.  Now this CQL can be used in a test
defined in _test/elm/*/logical-test.ts_.  For example:

```js
describe('And', () => {
  this.beforeEach(function () {
    setup(this, data);
  });

  it('should execute allTrue as true', function () {
    this.allTrue.exec(this.ctx).should.be.true();
  });

  it('should execute someTrue as false', function () {
    this.someTrue.exec(this.ctx).should.be.false();
  });

  it('should execute allFalse as false', function () {
    this.allFalse.exec(this.ctx).should.be.false();
  });
});
```

The test suite above uses [Mocha](http://visionmedia.github.io/mocha/) and
[Should.js](https://github.com/shouldjs/should.js).  The `setup` function sets up the test case by
creating `this.lib` (representing the `CqlLibrary` instance of the test data), creating `@this.ctx`
(representing a `Context` for execution), and creating local variables for each defined concept
(in this case, `this.allTrue`, `this.allFalse`, and `this.someTrue`).  Note that the local variables
use lowercase first letters even though the CQL expression name starts with an uppercase letter.

# Watching For Changes

Rather than continually having to run `npm run build:test-data` and `npm test` after every
modification to the test data text file, you can setup a process to _watch_ for changes and
regenerate the `data.js` files every time it detects changes in the source text file.  Simply
execute `npm run watch:test-data`.

# Pull Requests

If TypeScript source code is modified, `cql4browsers.js` needs to be included in the pull request,
otherwise GitHub Actions CI will fail. To generate this file, run:

```
npm run build:browserify
```
