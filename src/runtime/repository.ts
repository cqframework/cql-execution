import { Library } from '../elm/library';

export class Repository {
  data: any;
  libraries: any[];

  constructor(data: any) {
    this.data = data;
    this.libraries = Array.from(Object.values(data));
  }

  resolve(path: string, version?: string) {
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
