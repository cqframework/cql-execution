const { Library } = require('../elm/library');

class Repository {
  constructor(data) {
    this.data = data;
    this.libraries = Array.from(Object.values(data));
  }

  resolve(library, version) {
    for (const lib of this.libraries) {
      if (lib.library && lib.library.identifier) {
        const id = lib.library.identifier;

        // Check version immediately if specified, fallback to ID otherwise
        if (version) {
          if (id.id === library && id.version === version) {
            return new Library(lib, this);
          }
        } else if (id.id === library) {
          return new Library(lib, this);
        }
      }
    }
  }
}

module.exports = { Repository };
