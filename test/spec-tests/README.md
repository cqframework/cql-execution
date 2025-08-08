# CQL Tests

These tests are copied from the [cqframework/cql-tests](https://github.com/cqframework/cql-tests) GitHub repository. See that repository for details regarding the tests and test format.

# Skipping Tests

Tests can be skipped by adding them to the `skip-list.txt` file. The general format for that file is:
```
# Comment describing block of skipped tests
PathTo.Skipped.Test                Reason for skipping test
PathTo.Skipped.Test2               Reason for skipping test
```

# Implementation

For the purposes of testing `cql-execution`, we process the XML tests in the `xml` folder and generate corresponding CQL libraries in the `cql` folder. These libraries use Tuples to organize the tests as well as to represent the input and expected output in CQL. For example:

```
library CqlAggregateFunctionsTest version '1.4.0'
using QUICK version '3.3.0'
context Patient

define "AllTrue": Tuple{
  "AllTrueAllTrue": Tuple{
    expression: AllTrue({true,true}),
    output: true
  },
  "AllTrueTrueFirst": Tuple{
    expression: AllTrue({true,false}),
    output: false
  },
  // etc.
}

define "AnyTrue": Tuple{
  "AnyTrueAllTrue": Tuple{
    expression: AnyTrue({true,true}),
    output: true
  },
  "AnyTrueAllFalse": Tuple{
    expression: AnyTrue({false,false}),
    output: false
  },
  // etc.
}
```

Test libraries in the `cql` folder are compiled into ELM using `npm run build:spec-test-data` or `npm run build:all`.

The `spec-tests.ts` TypeScript module creates and executes a Mocha test suite on the fly based on the compiled ELM test libraries.

# TODO

The newest set of tests introduces a `<library>` tag for testing CQL that includes multiple `define` statements. This test framework currently skips those tests, but we should implement support for them when we can. Currently only the `SimpleOverloadMatching` test uses the `<library>` tag.