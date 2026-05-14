const Module = require('node:module');
const path = require('node:path');

const originalResolveFilename = Module._resolveFilename;
const projectRoot = path.resolve(__dirname, '..', '..');
const sourceRoot = path.join(projectRoot, 'src');

Module._resolveFilename = function resolveCqlSource(request, parent, isMain, options) {
  if (request.endsWith('.mjs') && parent?.filename) {
    try {
      return originalResolveFilename.call(this, request, parent, isMain, options);
    } catch {
      try {
        return originalResolveFilename.call(
          this,
          request.replace(/\.mjs$/, '.mts'),
          parent,
          isMain,
          options
        );
      } catch {
        // Fall back to Node's standard resolver below.
      }
    }
  }

  if (request === 'cql-execution') {
    return path.join(sourceRoot, 'cql.ts');
  }

  const deepImport = request.match(/^cql-execution\/lib\/(.+)$/);
  if (deepImport) {
    return path.join(sourceRoot, `${deepImport[1]}.ts`);
  }

  return originalResolveFilename.call(this, request, parent, isMain, options);
};
