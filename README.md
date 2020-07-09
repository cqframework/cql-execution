[![Build Status](https://travis-ci.org/cqframework/cql-execution.svg?branch=master)](https://travis-ci.org/cqframework/cql-execution)
[![codecov](https://codecov.io/gh/cqframework/cql-execution/branch/master/graph/badge.svg)](https://codecov.io/gh/cqframework/cql-execution)

# CQL Execution Framework

The CQL Execution Framework is a set of [CoffeeScript](http://coffeescript.org/) libraries that
can execute CQL artifacts expressed as JSON ELM.

For more information, see the [CQL Execution Framework Overview](OVERVIEW.md).

# Data Model and Terminology Service Implementations

This library (`cql-execution`) focuses on supporting CQL's logical constructs; it does not provide
robust support for any particular data model or terminology service. To fully understand the benefit
of the CQL Execution Framework, it must be used with more robust data model providers (called
`PatientSource` implementations) and terminology providers (called `CodeService` implementations).

Implementors interested in executing FHIR-based CQL logic should consider using the
[cql-exec-fhir](https://github.com/cqframework/cql-exec-fhir) `PatientSource` with `cql-exection`.

Implementors interested in using the National Library of Medicine's Value Set Authority Center
(VSAC) as a terminology service for looking up value sets should consider using the
[cql-exec-vsac](https://github.com/cqframework/cql-exec-vsac) `CodeService` with `cql-execution`.

The [cql-exec-examples](https://github.com/cqframework/cql-exec-examples) project provides examples
of how `cql-execution`, `cql-exec-fhir`, and `cql-exec-vsac` can be used together.

Implementors interested in executing electronic Clinical Quality Measures (eCQMs) using the QDM data
model should consider using the [cqm-execution](https://github.com/projecttacoma/cqm-execution)
project (which is based on `cql-execution`).

# Project Configuration

To use this project, you should perform the following steps:

1. Install [Node.js](http://nodejs.org/)
2. Install [Yarn](https://yarnpkg.com)
3. Install [CoffeeScript](http://coffeescript.org/)
4. Execute the following from the root directory: `yarn install`

> Note that on Windows platforms, the spawn will not recognize the coffee command with the .cmd extension, so if you see an error with something like this: <br/>
> `Error: spawn coffee ENOENT` <br/>
> then you may need to change [this](https://github.com/cqframework/cql-execution/blob/master/Cakefile#L11) line in the Cakefile to: <br/>
> `coffee = spawn 'coffee.cmd', args`


# To Execute Your CQL

Please note that while the CQL Execution Framework supports many aspects of CQL, it does not support
everything in the CQL specification.  You should check to see what is implemented before expecting it to work!
For a working example, see `src/example`.

There are several steps involved to execute CQL.  First, you must create a JSON representation of the ELM.
For easiest integration, we will generate a coffee file using cql-to-elm:

1. Install the [Java 8 SDK](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
2. Clone the [clinical_quality_language](https://github.com/cqframework/clinical_quality_language) repository to a location of your choice
2. `cd ${path_to_clinical_quality_language}/Src/java` (replacing `${path_to_clinical_quality_language}` with the path to the local clone)
3. `./gradlew :cql-to-elm:installDist`
4. `./cql-to-elm/build/install/cql-to-elm/bin/cql-to-elm --format=COFFEE --input ${path_to_cql} --output ${path_to_cql-execution}/src/customCQL`

The above example puts the example CQL into a subfolder of the src directory to make things easy, but it
doesn't _have_ to go there.  If you put it elsewhere, you'll need to compile it to javascript and
modify the examples below with the new path (where applicable).

In the rest of the examples, we'll assume an `age.cql` file with the following contents. This follows the example
already in the "src/example" folder (but of course you can use your own CQL):

```
library AgeAtMP version '1'

using Simple version '1.0.0'

parameter MeasurementPeriod default Interval[DateTime(2013, 1, 1, 0, 0, 0, 0), DateTime(2014, 1, 1, 0, 0, 0, 0))

context Patient

define InDemographic:
    AgeInYearsAt(start of MeasurementPeriod) >= 2 and AgeInYearsAt(start of MeasurementPeriod) < 18
```

Next, create a coffeescript file to execute the measure.  This file will need to contain (or
`require`) JSON patient representations for testing as well.  Our example CQL uses a Simple
data model developed only for demonstration and testing purposes.  In this model, each patient is represented
using a simple JSON object.  For ease of use, let's put the file in the `src/customCQL` directory:

```coffee
cql = require '../cql'
measure = require './age'

lib = new cql.Library(measure)
executor = new cql.Executor(lib)
psource = new cql.PatientSource [ {
  "id" : "1",
  "recordType" : "Patient",
  "name": "John Smith",
  "gender": "M",
  "birthDate" : "1980-02-17T06:15"
}, {
  "id" : "2",
  "recordType" : "Patient",
  "name": "Sally Smith",
  "gender": "F",
  "birthDate" : "2007-08-02T11:47"
} ]

result = executor.exec(psource)
console.log JSON.stringify(result, undefined, 2)
```

In the above file, we've assumed the JSON ELM coffeescript file for the measure is called
`age.coffee` and is in the same directory as the file (and `cql` library).  We've
also assumed a couple of very simple patients.  Let's call the file we just created
`exec-age.coffee`.

Now we must compile it to javascript in the `lib` directory.  There is a simple Cakefile
build script for this (cake is installed with coffeescript):

1. `cd ${path_to_cql-execution}`
2. `cake build`

Now we can execute the measure using Node.js:

1. `cd ${path_to_cql-execution}/lib/customCQL`
2. `node exec-age`

If all is well, it should print the result object to standard out.

# To Run the CQL Execution Unit Tests

Execute `yarn test` or `cake test`.

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

To convert the CQL to CoffeeScript containing the JSON ELM representation, execute
`cake build-test-data`. This will use the java _cql-to-elm_ project to generate the
_test/elm/*/data.coffee_ file containing the following exported variable declaration
(NOTE: It's been slimmed down a bit here to make it easier to read, but nothing substantial
has been removed):

```coffee
### And
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define AllTrue: true and true
define SomeTrue: true and false
define AllFalse: false and false
###

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

Notice that since the CQL didn't declare a library name/version, a data model, or a context;
default values were inserted into the CQL at generation time.  Now this CQL can be used in a test
defined in _test/elm/*/test.coffee_.  For example:

```coffee
describe 'And', ->
  @beforeEach ->
    setup @

  it 'should have type: And', ->
    @allTrue.type.should.equal 'And'

  it 'should execute allTrue as true', ->
    @allTrue.exec(@ctx).should.be.true

  it 'should execute someTrue as false', ->
    @someTrue.exec(@ctx).should.be.false

  it 'should execute allFalse as false', ->
    @allFalse.exec(@ctx).should.be.false
```

The test suite above uses [Mocha](http://visionmedia.github.io/mocha/) and
[Should.js](https://github.com/shouldjs/should.js).  The `setup @` sets up the test case by
creating `@lib` (representing the `CqlLibrary` instance of the test data), creating `@ctx`
(representing a `Context` for execution), and creating local variables for each defined concept
(in this case, `@allTrue`, `@allFalse`, and `@someTrue`).  Note that the local variables use
lowercase first letters even though the CQL expression name starts with an uppercase letter.

# Watching For Changes

Rather than continually having to run `cake build-test-data` after every modification to the test
data text file, you can setup a process to _watch_ for changes and regenerate the
`cql-test-data.coffee` file every time it detects changes in the source text file.  Simply
execute `cake watch-test-data`.

To watch for _all_ changes (Coffeescript _and_ CQL), use:

   `cake watch-all`


# Pull Requests

If coffeescript source is modified, `cql4browsers.js` needs to be included. Otherwise Travis CI will fail. To generate this file, run:

  `yarn run build-everything`
