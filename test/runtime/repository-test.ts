import should from 'should';
import { Library } from '../../src/elm/library';
import { Repository } from '../../src/runtime/repository';
const simpleELMWithVersion = require('./fixtures/SimpleLibraryWithVersion.json');

const simpleELMIdentifier = simpleELMWithVersion.library.identifier;

describe('Repository', () => {
  let simpleELMJson: any;
  beforeEach(() => {
    // Deep clone ELM JSON to modify properties
    simpleELMJson = JSON.parse(JSON.stringify(simpleELMWithVersion));
  });

  it('should resolve with proper id and version', () => {
    const repository = new Repository([simpleELMJson]);
    const mainLib = repository.resolve(
      simpleELMIdentifier.id,
      simpleELMIdentifier.version
    ) as Library;

    mainLib.should.not.be.undefined();
    mainLib.source.library.identifier.id.should.equal(simpleELMIdentifier.id);
    mainLib.source.library.identifier.version.should.equal(simpleELMIdentifier.version);
  });

  it('should fallback to id when version is missing', () => {
    delete simpleELMJson.library.identifier.version;

    const repository = new Repository([simpleELMJson]);
    const mainLib = repository.resolve(simpleELMIdentifier.id) as Library;

    mainLib.should.not.be.undefined();
    mainLib.source.library.identifier.id.should.equal(simpleELMIdentifier.id);
  });

  it('should fail when version is incorrect', () => {
    simpleELMJson.library.identifier.version = 'fake-version';

    const repository = new Repository([simpleELMJson]);

    const mainLib = repository.resolve(simpleELMIdentifier.id, simpleELMIdentifier.version);
    should(mainLib).be.undefined();
  });

  it('should fail when id is incorrect', () => {
    simpleELMJson.library.identifier.id = 'fake-id';

    const repository = new Repository([simpleELMJson]);

    const mainLib = repository.resolve(simpleELMIdentifier.id);
    should(mainLib).be.undefined();
  });
});
