// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS101: Remove unnecessary use of Array.from
 * DS102: Remove unnecessary code created because of implicit returns
 * DS206: Consider reworking classes to avoid initClass
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
let Uncertainty;
const { ThreeValuedLogic } = require('./logic');

module.exports.Uncertainty = (Uncertainty = (function() {
  Uncertainty = class Uncertainty {
    static initClass() {
  
      Object.defineProperties(this.prototype, {
        isUncertainty: {
          get() { return true; }
        }
      }
      );
    }
    static from(obj) {
      if ((obj != null ? obj.isUncertainty : undefined)) { return obj; } else { return new Uncertainty(obj); }
    }

    constructor(low = null, high) {
      this.low = low;
      this.high = high;
      const gt = function(a, b) {
        if (typeof a !== typeof b) {
          // TODO: This should probably throw rather than return false.
          // Uncertainties with different types probably shouldn't be supported.
          return false;
        }
        if (typeof a.after === 'function') { return a.after(b); } else { return a > b; }
      };
      const isNonEnumerable = val => (val != null) && (val.isCode || val.isConcept || val.isValueSet);
      if (typeof this.high === 'undefined') { this.high = this.low; }
      if (isNonEnumerable(this.low) || isNonEnumerable(this.high)) { this.low = (this.high = null); }
      if ((this.low != null) && (this.high != null) && gt(this.low, this.high)) { [this.low, this.high] = Array.from([this.high, this.low]); }
    }

    copy() {
      let newLow = this.low;
      let newHigh = this.high;
      if (typeof this.low.copy === 'function') {
        newLow = this.low.copy();
      }
      if (typeof this.high.copy === 'function') {
        newHigh = this.high.copy();
      }

      return new Uncertainty(newLow, newHigh);
    }

    isPoint() {
      // Note: Can't use normal equality, as that fails for Javascript dates
      // TODO: Fix after we don't need to support Javascript date uncertainties anymore
      const lte = function(a, b) {
        if (typeof a !== typeof b) {
          return false;
        }
        if (typeof a.sameOrBefore === 'function') { return a.sameOrBefore(b); } else { return a <= b; }
      };
      const gte = function(a, b) {
        if (typeof a !== typeof b) {
          return false;
        }
        if (typeof a.sameOrBefore === 'function') { return a.sameOrAfter(b); } else { return a >= b; }
      };
      return (this.low != null) && (this.high != null) && lte(this.low, this.high) && gte(this.low, this.high);
    }

    equals(other) {
      other = Uncertainty.from(other);
      return ThreeValuedLogic.not(ThreeValuedLogic.or(this.lessThan(other), this.greaterThan(other)));
    }

    lessThan(other) {
      const lt = function(a, b) {
        if (typeof a !== typeof b) { return false; }
        if (typeof a.before === 'function') { return a.before(b); } else { return a < b; }
      };
      other = Uncertainty.from(other);
      const bestCase = (this.low == null) || (other.high == null) || lt(this.low, other.high);
      const worstCase = (this.high != null) && (other.low != null) && lt(this.high, other.low);
      if (bestCase === worstCase) { return bestCase; } else { return null; }
    }

    greaterThan(other) {
      other = Uncertainty.from(other);
      return other.lessThan(this);
    }

    lessThanOrEquals(other) {
      other = Uncertainty.from(other);
      return ThreeValuedLogic.not(this.greaterThan(other));
    }

    greaterThanOrEquals(other) {
      other = Uncertainty.from(other);
      return ThreeValuedLogic.not(this.lessThan(other));
    }
  };
  Uncertainty.initClass();
  return Uncertainty;
})());
