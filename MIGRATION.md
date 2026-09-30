# cql-execution Migration Guide

This document outlines the breaking changes contributed to `cql-execution` that are included in each new major release of the library. 

## v3 to v4

### CQL Long
The CQL Long type is now supported and represented using [JavaScript's `bigint` primitive](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Previous versions of CQL Execution represented Long values as a JavaScript `number` primitive when possible.

### CQL Decimal
[Pull Request #376](https://github.com/cqframework/cql-execution/pull/376) changed the internal representation of the CQL [Decimal](https://cql.hl7.org/09-b-cqlreference.html#decimal-1) type from a plain JavaScript `number` to a new `Decimal` class. This addresses a few major limitations of `number`, notably its lack of precision at the upper and lower ends of the CQL Decimal range and in arithmetic operations, and eliminates the ambiguity of using `number` for both CQL Integer and Decimal. `number` is still used only to represent CQL Integers.


For users who work directly with raw results, `Decimal` instances can be interacted with in a couple ways:
``` TypeScript
const myDecimal = ...

// Numeric comparisons can be performed with the provided API, and most methods accept plain numbers, strings, bigints, or other Decimals:
myDecimal.equals("3.000") // CQL-defined numeric equality, not object equality
myDecimal.greaterThan(0.0)
myDecimal.lessThanOrEquals(1000n)
// etc.

// For display purposes, converting Decimals to strings maintains exact precision
myDecimal.toString()

// Finally, Decimals may be converted to plain numbers, though this risks precision issues
myDecimal.toNumber()

// Note that JSON stringifying a Decimal converts it to a number, not a string
JSON.stringify({ value: myDecimal }) // '{"value":3}'
```

(This class is backed by the [decimal.js](https://github.com/MikeMcl/decimal.js/) library, but CQL Execution consumers should use the provided custom `Decimal` class and its public functions rather than its internal representation, which may change.)

Note: if using [cql-exec-fhir](https://github.com/cqframework/cql-exec-fhir), v2.2.0 of that library is required for Decimal support, and is also backwards compatible with earlier versions of `cql-execution`.


### Removal of cql4browsers.js
Previous versions of the CQL Execution package included a browserified distribution of the library called cql4browsers.js. cql-execution 4.0 no longer packages this file since it is preferable for library consumers to transpile the library for browser environments themselves. See `examples/browser` for an example of how to do this using `esbuild`.

### Dropped support for Node.js 18
Node.js 18 reached end-of-life in 2025 and no longer receives security updates. Users of CQL Execution should upgrade to a later version of Node.js. The current minimum tested version is Node 20, though 24 or higher is recommended.


## v2 to v3
### Async Conversion

[Pull Request #271](https://github.com/cqframework/cql-execution/pull/271) converted the core execution code of `cql-execution` to be asynchronous. This enables a wider variety of [DataProviders](https://github.com/cqframework/cql-execution/blob/7ecb00b236903fc0816966e4ca8368d50d6afbc4/src/types/cql-patient.interfaces.ts#L8)
to integrate with `cql-execution`, as data can now be retrieved using asynchronous operations (e.g. HTTP requests, database lookups, etc.). This conversion requires a change in how an [Executor](https://github.com/cqframework/cql-execution/blob/master/src/runtime/executor.ts) is used in practice:

``` TypeScript
// v2.x.x usage
const result = executor.exec(patientSource);
// Do something with result

// v3.x.x usage
executor.exec(patientSource).then((result) => {
  // Do something with result
})

// or

const result = await executor.exec(patientSource);
```

The above pattern applies to the `exec_expression` and `exec_patient_context` methods of the `Executor` class as well.

In addition, the above pull request also adds support for a [TerminologyProvider](https://github.com/cqframework/cql-execution/blob/9fd81cb6eec615048513fdc8927725f853e2c085/src/types/cql-code-service.interfaces.ts#L29) to use asynchronous implementations of the `findValueSet*` functions
No changes are needed to how one configures an `Executor` to enable this, as the underlying code will now safely handle functions that return a `Promise` or not.

**NOTE:** This asynchronous approach is designed to be backwards-compatible with existing synchronous patient sources (e.g. [cql-exec-fhir](https://github.com/cqframework/cql-exec-fhir)), the only difference being that `exec` needs to be called using the above pattern instead of synchronously.
