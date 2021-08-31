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
        const libraryUri = `${system}/${id}`;

        if (path === libraryUri || path === id) {
          if (version) {
            if (libraryVersion === version) {
              return new Library(lib, this);
            }
          } else {
            return new Library(lib, this);
          }
        }
      }
    }
  }
}

module.exports = { Repository };
