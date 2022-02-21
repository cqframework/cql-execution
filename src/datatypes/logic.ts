export class ThreeValuedLogic {
  static and(...val: (boolean | null)[]) {
    if (val.includes(false)) {
      return false;
    } else if (val.includes(null)) {
      return null;
    } else {
      return true;
    }
  }

  static or(...val: (boolean | null)[]) {
    if (val.includes(true)) {
      return true;
    } else if (val.includes(null)) {
      return null;
    } else {
      return false;
    }
  }

  static xor(...val: (boolean | null)[]) {
    if (val.includes(null)) {
      return null;
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return val.reduce((a, b) => (!a ^ !b) === 1);
    }
  }

  static not(val: boolean | null) {
    if (val != null) {
      return !val;
    } else {
      return null;
    }
  }
}
