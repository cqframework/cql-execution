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
        if(id.id === library && id.version === version) {
          return new Library(lib, this);
        }
      }
    }
  }
}

module.exports = { Repository };