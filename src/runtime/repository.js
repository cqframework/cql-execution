const { Library } = require('../elm/library');

class Repository {
  constructor(data) {
    this.data = data;
    this.libraries = Array.from(Object.values(data));
  }

  resolve(path, version) {
    for (const lib of this.libraries) {
      if (lib.library && lib.library.identifier) {
        const { id, system, version: libraryVersion } = lib.library.identifier;
        let libraryUri = `${system}/${id}`;

        if (!path.includes('/')) {
          libraryUri = id;
        }

        if (version) {
          if (path === libraryUri && libraryVersion === version) {
            return new Library(lib, this);
          }
        } else if (path === libraryUri) {
          return new Library(lib, this);
        }
      }
    }
  }
}

module.exports = { Repository };
