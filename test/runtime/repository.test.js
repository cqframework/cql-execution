const should = require('should');
const { Repository } = require('../../src/runtime/repository');
const simpleELMInclude = require('./fixtures/SimpleLibraryWithInclude.json');
const simpleELMDependency = require('./fixtures/SimpleDependentLibrary.json');

const simpleIncludeIdentifier = simpleELMInclude.library.identifier;
const simpleDependencyIdentifier = simpleELMDependency.library.identifier;

describe('Repository', () => {
  let simpleELMJson;
  beforeEach(() => {
    // Deep clone ELM JSON to modify properties
    simpleELMJson = JSON.parse(JSON.stringify(simpleELMInclude));
  });

  it('should resolve with proper id and version', () => {
    const repository = new Repository([simpleELMJson, simpleELMDependency]);
    const mainLib = repository.resolve(simpleIncludeIdentifier.id, simpleIncludeIdentifier.version);

    mainLib.includes[simpleDependencyIdentifier.id].should.not.be.undefined();
  });

  it('should fallback to id when version is missing', () => {
    delete simpleELMJson.library.includes.def[0].version;

    const repository = new Repository([simpleELMJson, simpleELMDependency]);
    const mainLib = repository.resolve(simpleIncludeIdentifier.id, simpleIncludeIdentifier.version);

    mainLib.includes[simpleDependencyIdentifier.id].should.not.be.undefined();
  });

  it('should fail when version is incorrect', () => {
    simpleELMJson.library.includes.def[0].version = 'fake-version';

    const repository = new Repository([simpleELMJson, simpleELMDependency]);

    // When resolution can't happen, an error is thrown
    should(() =>
      repository.resolve(simpleIncludeIdentifier.id, simpleIncludeIdentifier.version)
    ).throw();
  });
});
