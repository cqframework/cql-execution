This document outlines the breaking changes contributed to `cql-execution` that will be included in a `v3.0.0` release of the library. This document will be updated as new breaking changes are contributed to the repository before finalizing a `v3.0.0` release.

## Async Conversion

[This pull request](https://github.com/cqframework/cql-execution/pull/271) converted the core execution code of `cql-execution` to be asynchronous. This enables a wider variety of [DataProviders](https://github.com/cqframework/cql-execution/blob/7ecb00b236903fc0816966e4ca8368d50d6afbc4/src/types/cql-patient.interfaces.ts#L8)
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

**NOTE:** This asynchronous approach is designed to be backwards-compatible with existing synchronous patient sources (e.g. [cql-exec-fhir](https://github.com/cqframework/cql-exec-fhir)), the only difference being that `exec` needs to be called using the above pattern instead of synchronously.
