// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS206: Consider reworking classes to avoid initClass
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
let Ratio;
module.exports.Ratio = (Ratio = (function() {
  Ratio = class Ratio {
    static initClass() {
  
      // Define a simple getter to allow type-checking of this class without instanceof
      // and in a way that survives minification (as opposed to checking constructor.name)
      Object.defineProperties(this.prototype, {
        isRatio: {
          get() { return true; }
        }
      }
      );
    }
    constructor(numerator, denominator) {
      this.numerator = numerator;
      this.denominator = denominator;
      if ((this.numerator == null)) {
        throw new Error('Cannot create a ratio with an undefined numerator');
      }
      if ((this.denominator == null)) {
        throw new Error('Cannot create a ratio with an undefined denominator');
      }
    }

    clone() {
      return new Ratio(this.numerator.clone(), this.denominator.clone());
    }

    toString() {
      return `${this.numerator.toString()} : ${this.denominator.toString()}`;
    }

    equals(other) {
      if (other != null ? other.isRatio : undefined) {
        const divided_this = this.numerator.dividedBy(this.denominator);
        const divided_other = other.numerator.dividedBy(other.denominator);
        return divided_this.equals(divided_other);
      } else {
        return false;
      }
    }

    equivalent(other) {
      const equal = this.equals(other);
      if ((equal == null)) {
        return false;
      }
      return equal;
    }
  };
  Ratio.initClass();
  return Ratio;
})());
