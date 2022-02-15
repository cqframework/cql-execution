This example demonstrates a static html page running a _browserified_ version of the
CQL execution engine.  It currently only supports CQL using the System datatypes.  It
does not support other data models or execution on patients.

The browserified code is checked into source control, but if you need to update it,
you can follow these steps:

1. Install [Node.js](http://nodejs.org/) (Note: `npm` version `6.x.x` recommended)
2. Execute the following from the _cql-execution_ directory:
   1. `npm install`
   2. `npm run build:all`
