This mini-project demonstrates the CQL execution engine in a static browser page. It
uses the same `AgeAtMP` CQL and example patients as the Node.js and TypeScript
mini-projects. It depends on the repository's local `cql-execution` package and owns
its browser build tooling and generated output. The bundle assigns the example patients
to `window.patients`, which is used by both the execution code and the page's patient
table.

From the repository root, install and build `cql-execution`:

```sh
npm install
```

Then install and build the browser example:

```sh
cd examples/browser
npm install
npm run build
```

Open `index.html` in a browser to run the example. For development, `npm run dev`
builds the bundle, serves this directory, and rebuilds when its inputs change. Run
`npm test` to build the bundle and verify both patients' `InDemographic` results.
