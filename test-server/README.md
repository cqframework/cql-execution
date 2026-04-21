# CQL Test Server

A barebones implementation of the FHIR [$cql](https://build.fhir.org/ig/HL7/cql-ig/en/OperationDefinition-cql-cql.html) operation that evaluates CQL expressions using the CQL execution engine and uses the [CQL FHIR Type Mapping](https://build.fhir.org/ig/HL7/cql-ig/en/conformance.html#fhir-type-mapping) to return results as a FHIR `Parameters` resource. This server is intended to be used as a target for the [cql-tests-runner](https://github.com/cqframework/cql-tests-runner) and is tuned specifically for that use case.

## Endpoint

- POST `/fhir/$cql`
  - Example request:
    ```json
    {
      "resourceType": "Parameters",
      "parameter": [{ "name": "expression", "valueString": "1 + 2" }]
    }
    ```
  - Example response:
    ```json
    {
      "resourceType": "Parameters",
      "parameter": [{ "name": "return", "valueInteger": 3 }]
    }
    ```
  - Errors:
    - HTTP 400 if the `expression` parameter is missing or empty
    - HTTP 500 if there is an unexpected / unrecoverable server-side error

## Prerequisites

This project uses Node.js. It has been tested using Node 24 but should work with any recent LTS version.

## Developing Scripts

The `package.json` file defines scripts to support development of the test-server source code. These include:

- `npm run lint`: run eslint against the test-server source code
- `npm run lint:fix`: fix eslint errors (as possible)
- `npm run prettier`: run prettier against the test-server source code
- `npm run prettier:fix`: fix prettier violations (as possible)
- `npm test`: run the unit tests

Scripts for building and running the server are documented below.

## Start The Server

From this directory:

### Install dependencies:

```sh
npm install
```

### Development mode:

```sh
npm run dev
```

The development mode builds the `cql-execution` source (to ensure it uses the latest changes) before running the server. It watches for changes to the `test-server` source and hot-reloads as necessary. By default, it uses the javascript CQL-to-ELM translator and listens on `http://localhost:8000`.

_NOTE: The watch mode will NOT detect or hot-reload changes in the `cql-execution` source. You must stop and restart the `test-server` to pick up changes in the `cql-execution` source._

# Production mode::

```sh
npm run build
npm start
```

The production mode builds the `cql-execution` source and `test-server` source then runs the server _without_ watching for changes. By default, it uses the javascript CQL-to-ELM translator and listens on `http://localhost:8000`.

### Configuration

- `PORT` (optional): Port to bind. Defaults to `8000`.
- `USE_TRANSLATION_SERVICE` (optional, default: `false`): If `true`, the server will use a local [CQL Translation Service](https://github.com/cqframework/cql-translation-service) for CQL-to-ELM. In this case, the CQL Translation service must be running and available at `http://localhost:8080`. If `false`, the server will use the javascript CQL-to-ELM module to compile CQL.

You can export these variable before running the server or place them in a `.env` file:

```ini
PORT=8000
USE_TRANSLATION_SERVICE=false
```

## Quick Test With curl

```sh
curl -X POST http://localhost:8000/fhir/\$cql \
  -H "Content-Type: application/fhir+json" \
  -d '{
    "resourceType": "Parameters",
    "parameter": [
      { "name": "expression", "valueString": "1 + 2" }
    ]
  }'
```

## Use With cql-tests-runner

This server is designed to be a `$cql` target for the [cql-tests-runner](https://github.com/cqframework/cql-tests-runner). To execute the test-runner against this server:

1. Download or clone the `cql-tests-runner` repository.

2. Start this test-server (see above), e.g. at `http://localhost:8000`.

3. In cql-tests-runner folder, create or edit a [test runner configuration](https://github.com/cqframework/cql-tests-runner?tab=readme-ov-file#configuration-settings) that points to the test-server endpoint. If you are using port 8000, you may choose to use the existing [conf/cql-execution-local.json](https://github.com/cqframework/cql-tests-runner/blob/main/conf/cql-execution-local.json) file.

4. Run the tests from the cql-tests-runner folder:

  ```sh
  npm install
  git submodule update --init --recursive
  npx tsx src/bin/cql-tests.ts run-tests conf/cql-execution-local.json ./results
  ```

The runner will POST each test expression to `http://localhost:8000/fhir/$cql` and expect FHIR `Parameters` responses per the mapping. The test-server logs each incoming expression, the raw result, and the result mapped to `FHIR Parameters`. When the run is done, you can find the results in the cql-tests-runner folder's `results` sub-folder.

