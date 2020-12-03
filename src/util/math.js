const { Exception } = require('../datatypes/exception');
const {
  MIN_DATETIME_VALUE,
  MAX_DATETIME_VALUE,
  MIN_DATE_VALUE,
  MAX_DATE_VALUE,
  MIN_TIME_VALUE,
  MAX_TIME_VALUE
} = require('../datatypes/datetime');
const { Uncertainty } = require('../datatypes/uncertainty');

const MAX_INT_VALUE = Math.pow(2, 31) - 1;
const MIN_INT_VALUE = Math.pow(-2, 31);
const MAX_FLOAT_VALUE = 99999999999999999999999999999.99999999;
const MIN_FLOAT_VALUE = -99999999999999999999999999999.99999999;
const MIN_FLOAT_PRECISION_VALUE = Math.pow(10, -8);

function overflowsOrUnderflows(value) {
  if (value == null) {
    return false;
  }
  if (value.isQuantity) {
    if (!isValidDecimal(value.value)) {
      return true;
    }
  } else if (value.isTime != null && value.isTime()) {
    if (value.after(MAX_TIME_VALUE)) {
      return true;
    }
    if (value.before(MIN_TIME_VALUE)) {
      return true;
    }
  } else if (value.isDateTime) {
    if (value.after(MAX_DATETIME_VALUE)) {
      return true;
    }
    if (value.before(MIN_DATETIME_VALUE)) {
      return true;
    }
  } else if (value.isDate) {
    if (value.after(MAX_DATE_VALUE)) {
      return true;
    }
    if (value.before(MIN_DATE_VALUE)) {
      return true;
    }
  } else if (Number.isInteger(value)) {
    if (!isValidInteger(value)) {
      return true;
    }
  } else {
    if (!isValidDecimal(value)) {
      return true;
    }
  }
  return false;
}

function isValidInteger(integer) {
  if (isNaN(integer)) {
    return false;
  }
  if (integer > MAX_INT_VALUE) {
    return false;
  }
  if (integer < MIN_INT_VALUE) {
    return false;
  }
  return true;
}

function isValidDecimal(decimal) {
  if (isNaN(decimal)) {
    return false;
  }
  if (decimal > MAX_FLOAT_VALUE) {
    return false;
  }
  if (decimal < MIN_FLOAT_VALUE) {
    return false;
  }
  return true;
}

function limitDecimalPrecision(decimal) {
  let decimalString = decimal.toString();
  // For decimals so large that they are represented in scientific notation, javascript has already limited
  // the decimal to its own constraints, so we can't determine the original precision.  Leave as-is unless
  // this becomes problematic, in which case we would need our own parseFloat.
  if (decimalString.indexOf('e') !== -1) {
    return decimal;
  }

  const splitDecimalString = decimalString.split('.');
  const decimalPoints = splitDecimalString[1];
  if (decimalPoints != null && decimalPoints.length > 8) {
    decimalString = splitDecimalString[0] + '.' + splitDecimalString[1].substring(0, 8);
  }
  return parseFloat(decimalString);
}

class OverFlowException extends Exception {}

function successor(val) {
  if (typeof val === 'number') {
    if (parseInt(val) === val) {
      if (val === MAX_INT_VALUE) {
        throw new OverFlowException();
      } else {
        return val + 1;
      }
    } else {
      if (val === MAX_FLOAT_VALUE) {
        throw new OverFlowException();
      } else {
        return val + MIN_FLOAT_PRECISION_VALUE;
      }
    }
  } else if (val && val.isDateTime) {
    if (val.sameAs(MAX_DATETIME_VALUE)) {
      throw new OverFlowException();
    } else {
      return val.successor();
    }
  } else if (val && val.isDate) {
    if (val.sameAs(MAX_DATE_VALUE)) {
      throw new OverFlowException();
    } else {
      return val.successor();
    }
  } else if (val && val.isTime) {
    if (val.sameAs(MAX_TIME_VALUE)) {
      throw new OverFlowException();
    } else {
      return val.successor();
    }
  } else if (val && val.isUncertainty) {
    // For uncertainties, if the high is the max val, don't increment it
    const high = (() => {
      try {
        return successor(val.high);
      } catch (e) {
        return val.high;
      }
    })();
    return new Uncertainty(successor(val.low), high);
  } else if (val && val.isQuantity) {
    const succ = val.clone();
    succ.value = successor(val.value);
    return succ;
  } else if (val == null) {
    return null;
  }
}

function predecessor(val) {
  if (typeof val === 'number') {
    if (parseInt(val) === val) {
      if (val === MIN_INT_VALUE) {
        throw new OverFlowException();
      } else {
        return val - 1;
      }
    } else {
      if (val === MIN_FLOAT_VALUE) {
        throw new OverFlowException();
      } else {
        return val - MIN_FLOAT_PRECISION_VALUE;
      }
    }
  } else if (val && val.isDateTime) {
    if (val.sameAs(MIN_DATETIME_VALUE)) {
      throw new OverFlowException();
    } else {
      return val.predecessor();
    }
  } else if (val && val.isDate) {
    if (val.sameAs(MIN_DATE_VALUE)) {
      throw new OverFlowException();
    } else {
      return val.predecessor();
    }
  } else if (val && val.isTime) {
    if (val.sameAs(MIN_TIME_VALUE)) {
      throw new OverFlowException();
    } else {
      return val.predecessor();
    }
  } else if (val && val.isUncertainty) {
    // For uncertainties, if the low is the min val, don't decrement it
    const low = (() => {
      try {
        return predecessor(val.low);
      } catch (e) {
        return val.low;
      }
    })();
    return new Uncertainty(low, predecessor(val.high));
  } else if (val && val.isQuantity) {
    const pred = val.clone();
    pred.value = predecessor(val.value);
    return pred;
  } else if (val == null) {
    return null;
  }
}

function maxValueForInstance(val) {
  if (typeof val === 'number') {
    if (parseInt(val) === val) {
      return MAX_INT_VALUE;
    } else {
      return MAX_FLOAT_VALUE;
    }
  } else if (val && val.isDateTime) {
    return MAX_DATETIME_VALUE.copy();
  } else if (val && val.isDate) {
    return MAX_DATE_VALUE.copy();
  } else if (val && val.isTime) {
    return MAX_TIME_VALUE.copy();
  } else if (val && val.isQuantity) {
    const val2 = val.clone();
    val2.value = maxValueForInstance(val2.value);
    return val2;
  } else {
    return null;
  }
}

function minValueForInstance(val) {
  if (typeof val === 'number') {
    if (parseInt(val) === val) {
      return MIN_INT_VALUE;
    } else {
      return MIN_FLOAT_VALUE;
    }
  } else if (val && val.isDateTime) {
    return MIN_DATETIME_VALUE.copy();
  } else if (val && val.isDate) {
    return MIN_DATE_VALUE.copy();
  } else if (val && val.isTime) {
    return MIN_TIME_VALUE.copy();
  } else if (val && val.isQuantity) {
    const val2 = val.clone();
    val2.value = minValueForInstance(val2.value);
    return val2;
  } else {
    return null;
  }
}

function decimalAdjust(type, value, exp) {
  //If the exp is undefined or zero...
  if (typeof exp === 'undefined' || +exp === 0) {
    return Math[type](value);
  }
  value = +value;
  exp = +exp;
  //If the value is not a number or the exp is not an integer...
  if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
    return NaN;
  }
  //Shift
  value = value.toString().split('e');
  let v = value[1] ? +value[1] - exp : -exp;
  value = Math[type](+(value[0] + 'e' + v));
  //Shift back
  value = value.toString().split('e');
  v = value[1] ? +value[1] + exp : exp;
  return +(value[0] + 'e' + v);
}

module.exports = {
  MAX_INT_VALUE,
  MIN_INT_VALUE,
  MAX_FLOAT_VALUE,
  MIN_FLOAT_VALUE,
  MIN_FLOAT_PRECISION_VALUE,
  MIN_DATETIME_VALUE,
  MAX_DATETIME_VALUE,
  MIN_DATE_VALUE,
  MAX_DATE_VALUE,
  MIN_TIME_VALUE,
  MAX_TIME_VALUE,
  overflowsOrUnderflows,
  isValidInteger,
  isValidDecimal,
  limitDecimalPrecision,
  OverFlowException,
  successor,
  predecessor,
  maxValueForInstance,
  minValueForInstance,
  decimalAdjust
};
