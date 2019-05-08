[![Build Status](https://travis-ci.org/cqframework/cql-execution.svg?branch=master)](https://travis-ci.org/cqframework/cql-execution)
[![codecov](https://codecov.io/gh/cqframework/cql-execution/branch/master/graph/badge.svg)](https://codecov.io/gh/cqframework/cql-execution)

# CQL Execution Framework

The CQL Execution Framework is a set of [CoffeeScript](http://coffeescript.org/) libraries that
can execute CQL artifacts expressed as JSON ELM.

For more information, see the [CQL Execution Framework Overview](OVERVIEW.md).

# Project Configuration

To use this project, you should perform the following steps:

1. Install [Node.js](http://nodejs.org/)
2. Install [Yarn](https://yarnpkg.com)
3. Install [CoffeeScript](http://coffeescript.org/)
4. Execute the following from the root directory: `yarn install`

# To Execute Your CQL

Please note that while the CQL Execution Framework supports many aspects of CQL, it does not support
everything in the CQL specification.  You should check to see what is implemented before expecting it to work!
For a working example, see `src/example`.

There are several steps involved to execture CQL.  First, you must create a JSON representation of the ELM.
For easiest integration, we will generate a coffee file using cql-to-elm:

1. Install the [Java 8 SDK](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
2. Clone the [clinical_quality_language](https://github.com/cqframework/clinical_quality_language) repository to a location of your choice
2. `cd ${path_to_clinical_quality_language}/Src/java` (replacing `${path_to_clinical_quality_language}` with the path to the local clone)
3. `./gradlew :cql-to-elm:installDist`
4. `./cql-to-elm/build/install/cql-to-elm/bin/cql-to-elm --format=COFFEE --input ${path_to_cql} --output ${path_to_cql-execution}/src/`

The above example puts the example CQL into the src directory to make things easy, but it
doesn't _have_ to go there.  If you put it elsewhere, you'll need to compile it to javascript and
modify the examples below with the new path (where applicable).

In the rest of the examples, we'll assume an `age.cql` file with the following contents (but of course you can use
your own CQL):

```
library AgeAtMP version '1'

using QUICK

parameter MeasurementPeriod default Interval[DateTime(2013, 1, 1, 0, 0, 0, 0), DateTime(2014, 1, 1, 0, 0, 0, 0))

context Patient

define InDemographic:
    AgeInYearsAt(start of MeasurementPeriod) >= 2 and AgeInYearsAt(start of MeasurementPeriod) < 18
```

Next, create a coffeescript file to execute the measure.  This file will need to contain (or
`require`) JSON patient representations for testing as well.  Since our example CQL uses the QUICK
data model, each patient is represented using a FHIR bundle.  For ease of use, let's put the file
in the `src` directory:

```coffee
cql = require './cql'
measure = require './age'

lib = new cql.Library(measure)
executor = new cql.Executor(lib)
psource = new cql.PatientSource [ {
    "resourceType": "Bundle",
    "id": "example1",
    "meta": {
      "versionId": "1",
      "lastUpdated": "2014-08-18T01:43:30Z"
    },
    "base": "http://example.com/base",
    "entry" : [{
        "resource": {
        "id" : "1",
        "meta" :{ "profile" : ["patient-qicore-qicore-patient"]},
        "resourceType" : "Patient",
        "identifier": [{ "value": "1" }],
        "name": {"given":["John"], "family": ["Smith"]},
        "gender": "M",
        "birthDate" : "1980-02-17T06:15"}
        }
    ]
  }, {
    "resourceType": "Bundle",
    "id": "example1",
    "meta": {
      "versionId": "1",
      "lastUpdated": "2014-08-18T01:43:30Z"
    },
    "base": "http://example.com/base",
    "entry" : [{
        "resource": {
        "id" : "2",
        "meta" :{ "profile" : ["patient-qicore-qicore-patient"]},
        "resourceType" : "Patient",
        "identifier": [{ "value": "2" }],
        "name": {"given":["Sally"], "family": ["Smith"]},
        "gender": "F",
        "birthDate" : "2007-08-02T11:47"}
        }
    ]
  } ]


result = executor.exec(psource)
console.log JSON.stringify(result, undefined, 2)
```

In the above file, we've assumed the JSON ELM coffeescript file for the measure is called
`age.coffee` and is in the same directory as the file (and `cql` library).  We've
also assumed a couple of very simple patients.  Let's call the file we just created
`age-exec.coffee`.

Now we must compile it to javascript in the `lib` directory.  There is a simple Cakefile
build script for this (cake is installed with coffeescript):

1. `cd ${path_to_cql-execution}`
2. `cake build`

Now we can execute the measure using Node.js:

1. `cd ${path_to_cql-execution}/lib`
2. `node age-exec`

If all is well, it should print the result object to standard out.

# To Run the CQL Execution Unit Tests

Execute `yarn test` or `cake test`.

# To Develop Tests

Many of the tests require JSON ELM data.  It is much easier to write CQL rather than JSON ELM, so
test authors should create test data by adding new CQL to _test/data/cql-test-data.txt_.  Some
conventions are followed to make testing easier.  The following is an example of some test data:

    // @Test: And
    define AllTrue = true and true
    define AllFalse = false and false
    define SomeTrue = true and false

The `// @Test: And` indicates the name of the test suite it applies to ("And").  The group of
statements that follows the `# And` represents the CQL Library that will be supplied as test data
to the "And" test suite.

To convert the CQL to CoffeeScript containing the JSON ELM representation, execute
`cake build-test-data`. This will use the java _cql-to-elm_ project to generate the
_test/data/cql-test-data.coffee_ file containing the following exported variable declaration:

```coffee
### And
library TestSnippet version '1'
using QUICK
context Patient
define AllTrue = true and true
define AllFalse = false and false
define SomeTrue = true and false
###

module.exports.And = {
   "library" : {
      "identifier" : {
         "id" : "TestSnippet",
         "version" : "1"
      },
      "dataModels" : {
         "modelReference" : [ {
            "referencedModel" : {
               "value" : "http://org.hl7.fhir"
            }
         } ]
      },
      "statements" : {
         "def" : [ {
            "name" : "AllTrue",
            "context" : "Patient",
            "expression" : {
               "type" : "And",
               "operand" : [ {
                  "valueType" : "{http://www.w3.org/2001/XMLSchema}bool",
                  "value" : "true",
                  "type" : "Literal"
               }, {
                  "valueType" : "{http://www.w3.org/2001/XMLSchema}bool",
                  "value" : "true",
                  "type" : "Literal"
               } ]
            }
         }, {
            "name" : "AllFalse",
            "context" : "Patient",
            "expression" : {
               "type" : "And",
               "operand" : [ {
                  "valueType" : "{http://www.w3.org/2001/XMLSchema}bool",
                  "value" : "false",
                  "type" : "Literal"
               }, {
                  "valueType" : "{http://www.w3.org/2001/XMLSchema}bool",
                  "value" : "false",
                  "type" : "Literal"
               } ]
            }
         }, {
            "name" : "SomeTrue",
            "context" : "Patient",
            "expression" : {
               "type" : "And",
               "operand" : [ {
                  "valueType" : "{http://www.w3.org/2001/XMLSchema}bool",
                  "value" : "true",
                  "type" : "Literal"
               }, {
                  "valueType" : "{http://www.w3.org/2001/XMLSchema}bool",
                  "value" : "false",
                  "type" : "Literal"
               } ]
            }
         } ]
      }
   }
}
```

Notice that since the CQL didn't declare a library name/version, a data model, or a context,
default values were inserted into the CQL at generation time.  Now this CQL can be used in a test
defined in _test/cql-exec-test.coffee_.  For example:

```coffee
describe 'And', ->
  @beforeEach ->
    setup @

  it 'should have type: And', ->
    @allTrue.type.should.equal 'And'

  it 'should execute allTrue as true', ->
    @allTrue.exec(@ctx).should.be.true

  it 'should execute allFalse as false', ->
    @allFalse.exec(@ctx).should.be.false

  it 'should execute someTrue as false', ->
    @someTrue.exec(@ctx).should.be.false
```

The test suite above uses [Mocha](http://visionmedia.github.io/mocha/) and
[Should.js](https://github.com/shouldjs/should.js).  The `setup @` sets up the test case by
creating `@lib` (representing the `CqlLibrary` instance of the test data), creating `@ctx`
(representing a `Context` for execution), and creating local variables for each defined concept
(in this case, `@allTrue`, `@allFalse`, and `@someTrue`).

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