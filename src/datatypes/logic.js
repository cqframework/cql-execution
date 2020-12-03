class ThreeValuedLogic {
  static and(...val) {
    if (val.includes(false)) {
      return false;
    } else if (val.includes(null)) {
      return null;
    } else {
      return true;
    }
  }

  static or(...val) {
    if (val.includes(true)) {
      return true;
    } else if (val.includes(null)) {
      return null;
    } else {
      return false;
    }
  }

  static xor(...val) {
    if (val.includes(null)) {
      return null;
    } else {
      return val.reduce((a, b) => (!a ^ !b) === 1);
    }
  }

  static not(val) {
    if (val != null) {
      return !val;
    } else {
      return null;
    }
  }
}

module.exports = { ThreeValuedLogic };
