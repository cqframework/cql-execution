/* eslint-disable
    no-unused-vars,
*/
// TODO: This file was created by bulk-decaffeinate.
// Fix any style issues and re-enable lint.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
let ThreeValuedLogic;
module.exports.ThreeValuedLogic = (ThreeValuedLogic = class ThreeValuedLogic {
  static and(...val) {
    if (val.includes(false)) { return false;
    } else if (val.includes(null)) { return null;
    } else { return true; }
  }

  static or(...val) {
    if (val.includes(true)) { return true;
    } else if (val.includes(null)) { return null;
    } else { return false; }
  }

  static xor(...val) {
    if (val.includes(null)) { return null;
    } else { return val.reduce((a, b) => (!a ^ !b) === 1); }
  }

  static not(val) {
    if (val != null) { return !val; } else { return null; }
  }
});
