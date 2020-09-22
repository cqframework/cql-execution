class BaseDataType {
  constructor() {
    this.type = new.target.name;
  }

  _is(namespace, type) {
    return namespace.includes('elm-types') && this.type === type;
  }
}

module.exports = { BaseDataType };
