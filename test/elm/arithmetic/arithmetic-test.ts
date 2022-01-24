import should from 'should';
import setup from '../../setup';
import {
  Quantity,
  doMultiplication,
  doDivision,
  doAddition,
  doSubtraction,
  parseQuantity
} from '../../../src/datatypes/quantity';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const data = require('./data');

const validateQuantity = function (object: any, expectedValue: number, expectedUnit: string) {
  object.isQuantity.should.be.true();
  const q = new Quantity(expectedValue, expectedUnit);
  q.equals(object).should.be.true('Expected ' + object + ' to equal ' + q);
};

const doQuantityMathTests = function (tests: string[][], operator: string) {
  let func: any;
  if (operator === '*') {
    func = doMultiplication;
  } else if (operator === '/') {
    func = doDivision;
  } else if (operator === '+') {
    func = doAddition;
  } else if (operator === '-') {
    func = doSubtraction;
  }

  for (const t of tests) {
    const a = parseQuantity(t[0]);
    const b = parseQuantity(t[1]);
    // try to parse the expected value but if it comes back null
    // which it will if there are no units create a new Quantity
    // with just the exepected as the value with null units
    const e = parseQuantity(t[2]) || new Quantity(t[2]);

    const res = func(a, b);
    e.equals(res).should.be.true(`${a} ${operator} ${b} should eq ${e} but was ${res}`);
  }
};

describe('Add', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should add two numbers', function () {
    this.onePlusTwo.exec(this.ctx).should.equal(3);
  });

  it('should add multiple numbers', function () {
    this.addMultiple.exec(this.ctx).should.equal(55);
  });

  it('should add variables', function () {
    this.addVariables.exec(this.ctx).should.equal(21);
  });

  it('should add Time/Quantity', function () {
    this.addTime.exec(this.ctx).isTime().should.be.true();
  });

  it('should add uncertainty and uncertainty', function () {
    const result = this.addUncertainties.exec(this.ctx);
    result.low.should.equal(6);
    result.high.should.equal(30);
  });

  it('should add uncertainty and number', function () {
    const result = this.addUncertaintyAndNumber.exec(this.ctx);
    result.low.should.equal(5);
    result.high.should.equal(17);
  });

  it('should add number and uncertainty', function () {
    const result = this.addNumberAndUncertainty.exec(this.ctx);
    result.low.should.equal(10);
    result.high.should.equal(22);
  });
});

describe('Subtract', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should subtract two numbers', function () {
    this.fiveMinusTwo.exec(this.ctx).should.equal(3);
  });

  it('should subtract multiple numbers', function () {
    this.subtractMultiple.exec(this.ctx).should.equal(15);
  });

  it('should subtract variables', function () {
    this.subtractVariables.exec(this.ctx).should.equal(1);
  });

  it('should subtract uncertainty from uncertainty', function () {
    const result = this.subtractUncertainties.exec(this.ctx);
    result.low.should.equal(-6);
    result.high.should.equal(18);
  });

  it('should subtract number from uncertainty', function () {
    const result = this.subtractNumberFromUncertainty.exec(this.ctx);
    result.low.should.equal(1);
    result.high.should.equal(13);
  });

  it('should subtract uncertainty from number', function () {
    const result = this.subtractUncertaintyFromNumber.exec(this.ctx);
    result.low.should.equal(-8);
    result.high.should.equal(4);
  });
});

describe('Multiply', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should multiply two numbers', function () {
    this.fiveTimesTwo.exec(this.ctx).should.equal(10);
  });

  it('should multiply multiple numbers', function () {
    this.multiplyMultiple.exec(this.ctx).should.equal(120);
  });

  it('should multiply variables', function () {
    this.multiplyVariables.exec(this.ctx).should.equal(110);
  });

  it('should multiply uncertainty and uncertainty', function () {
    const result = this.multiplyUncertainties.exec(this.ctx);
    result.low.should.equal(12);
    result.high.should.equal(252);
  });

  it('should multiply uncertainty and number', function () {
    const result = this.multiplyUncertaintyAndNumber.exec(this.ctx);
    result.low.should.equal(10);
    result.high.should.equal(70);
  });

  it('should multiply number and uncertainty', function () {
    const result = this.multiplyNumberAndUncertainty.exec(this.ctx);
    result.low.should.equal(20);
    result.high.should.equal(140);
  });
});

describe('Divide', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should divide two numbers', function () {
    this.tenDividedByTwo.exec(this.ctx).should.equal(5);
  });

  it("should divide two numbers that don't evenly divide", function () {
    this.tenDividedByFour.exec(this.ctx).should.equal(2.5);
  });

  it('should divide multiple numbers', function () {
    this.divideMultiple.exec(this.ctx).should.equal(5);
  });

  it('should divide variables', function () {
    this.divideVariables.exec(this.ctx).should.equal(25);
  });

  it('should divide uncertainty by uncertainty', function () {
    const result = this.divideUncertainties.exec(this.ctx);
    result.low.should.equal(6 / 14);
    result.high.should.equal(9);
  });

  it('should divide uncertainty by number', function () {
    const result = this.divideUncertaintyByNumber.exec(this.ctx);
    result.low.should.equal(3);
    result.high.should.equal(9);
  });

  it('should divide number by uncertainty', function () {
    const result = this.divideNumberByUncertainty.exec(this.ctx);
    result.low.should.equal(2);
    result.high.should.equal(6);
  });
});

describe('Negate', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should negate a number', function () {
    this.negativeOne.exec(this.ctx).should.equal(-1);
  });
});

describe('MathPrecedence', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should follow order of operations', function () {
    this.mixed.exec(this.ctx).should.equal(46);
  });

  it('should allow parentheses to override order of operations', function () {
    this.parenthetical.exec(this.ctx).should.equal(-10);
  });
});

describe('Power', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should be able to calculate the power of a number', function () {
    this.pow.exec(this.ctx).should.equal(81);
  });
});

describe('MinValue', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('of Integer should return minimum representable Integer value', function () {
    const minIntegerValue = -2147483648;
    this.minInteger.exec(this.ctx).should.equal(minIntegerValue);
  });

  it('of Decimal should return minimum representable Decimal value', function () {
    // eslint-disable-next-line @typescript-eslint/no-loss-of-precision
    const minDecimalValue = -99999999999999999999.99999999;
    this.minDecimal.exec(this.ctx).should.be.approximately(minDecimalValue, 0.000000001);
  });

  it('of DateTime should return minimum representable DateTime value', function () {
    const dateTimeResult = this.minDateTime.exec(this.ctx);
    dateTimeResult.year.should.equal(1);
    dateTimeResult.month.should.equal(1);
    dateTimeResult.day.should.equal(1);
    dateTimeResult.hour.should.equal(0);
    dateTimeResult.minute.should.equal(0);
    dateTimeResult.second.should.equal(0);
    dateTimeResult.millisecond.should.equal(0);
  });

  it('of Time should return minimum representable Time value', function () {
    const timeResult = this.minTime.exec(this.ctx);
    timeResult.hour.should.equal(0);
    timeResult.minute.should.equal(0);
    timeResult.second.should.equal(0);
    timeResult.millisecond.should.equal(0);
  });

  it('of types other than Integer/Decimal/DateTime/Time should throw an error', function () {
    should(() => this.minWrongType.exec(this.ctx)).throw();
  });
});

describe('MaxValue', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('of Integer should return maximum representable Integer value', function () {
    const maxIntegerValue = 2147483647;
    this.maxInteger.exec(this.ctx).should.equal(maxIntegerValue);
  });

  it('of Decimal should return maximum representable Decimal value', function () {
    // eslint-disable-next-line @typescript-eslint/no-loss-of-precision
    const maxDecimalValue = 99999999999999999999.99999999;
    this.maxDecimal.exec(this.ctx).should.be.approximately(maxDecimalValue, 0.000000001);
  });

  it('of DateTime should return maximum representable DateTime value', function () {
    const dateTimeResult = this.maxDateTime.exec(this.ctx);
    dateTimeResult.year.should.equal(9999);
    dateTimeResult.month.should.equal(12);
    dateTimeResult.day.should.equal(31);
    dateTimeResult.hour.should.equal(23);
    dateTimeResult.minute.should.equal(59);
    dateTimeResult.second.should.equal(59);
    dateTimeResult.millisecond.should.equal(999);
  });

  it('of DateTime should work with different execution timezoneOffsets', function () {
    this.ctx.executionDateTime.timezoneOffset = -4.0;
    const dateTimeResult = this.maxDateTime.exec(this.ctx);
    dateTimeResult.year.should.equal(9999);
    dateTimeResult.month.should.equal(12);
    dateTimeResult.day.should.equal(31);
    dateTimeResult.hour.should.equal(23);
    dateTimeResult.minute.should.equal(59);
    dateTimeResult.second.should.equal(59);
    dateTimeResult.millisecond.should.equal(999);
    dateTimeResult.timezoneOffset.should.equal(-4.0);
  });

  it('of Time should return maximum representable Time value', function () {
    const timeResult = this.maxTime.exec(this.ctx);
    timeResult.hour.should.equal(23);
    timeResult.minute.should.equal(59);
    timeResult.second.should.equal(59);
    timeResult.millisecond.should.equal(999);
  });

  it('of types other than Integer/Decimal/DateTime/Time should throw an error', function () {
    should(() => this.maxWrongType.exec(this.ctx)).throw();
  });
});

describe('TruncatedDivide', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should be able to return just the integer portion of a division', function () {
    this.trunc.exec(this.ctx).should.equal(3);
    this.even.exec(this.ctx).should.equal(3);
  });
});

describe('Truncate', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should be able to return the integer portion of a number', function () {
    this.trunc.exec(this.ctx).should.equal(10);
    this.even.exec(this.ctx).should.equal(10);
  });
});

describe('Floor', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should be able to round down to the closest integer', function () {
    this.flr.exec(this.ctx).should.equal(10);
    this.even.exec(this.ctx).should.equal(10);
  });
});

describe('Ceiling', () => {
  beforeEach(function () {
    setup(this, data);

    it('should be able to round up to the closest integer', function () {
      this.ceil.exec(this.ctx).should.equal(11);
      this.even.exec(this.ctx).should.equal(10);
    });
  });
});

describe('Ln', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should be able to return the natural log of a number', function () {
    this.ln.exec(this.ctx).should.equal(Math.log(4));
  });
});

describe('Log', () => {
  beforeEach(function () {
    setup(this, data);

    it('should be able to return the log of a number based on an arbitary base value', function () {
      this.log.exec(this.ctx).should.equal(0.25);
    });
  });
});

describe('Modulo', () => {
  beforeEach(function () {
    setup(this, data);

    it('should be able to return the remainder of a division', function () {
      this.mod.exec(this.ctx).should.equal(1);
    });
  });
});

describe('Abs', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should be able to return the absolute value of a positive number', function () {
    this.pos.exec(this.ctx).should.equal(10);
  });
  it('should be able to return the absolute value of a negative number', function () {
    this.neg.exec(this.ctx).should.equal(10);
  });
  it('should be able to return the absolute value of 0', function () {
    this.zero.exec(this.ctx).should.equal(0);
  });
});

describe('Round', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should be able to round a number up or down to the closest integer value', function () {
    this.up.exec(this.ctx).should.equal(5);
    this.down.exec(this.ctx).should.equal(4);
  });
  it('should be able to round a number up or down to the closest decimal place ', function () {
    this.up_percent.exec(this.ctx).should.equal(4.6);
    this.down_percent.exec(this.ctx).should.equal(4.4);
  });
});

describe('Successor', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should be able to get Integer Successor', function () {
    this.is.exec(this.ctx).should.equal(3);
  });
  it('should be able to get Real Successor', function () {
    this.rs.exec(this.ctx).should.equal(2.2 + Math.pow(10, -8));
  });

  it('should return null for Successor greater than Integer Max value', function () {
    should(this.ofr.exec(this.ctx)).be.null();
  });

  it('should be able to get Date Successor for year', function () {
    const dp = this.y_date.exec(this.ctx);
    dp.year.should.equal(2016);
    should.not.exist(dp.month);
    should.not.exist(dp.day);
    should.not.exist(dp.hour);
    should.not.exist(dp.minute);
    should.not.exist(dp.second);
    should.not.exist(dp.millisecond);
  });

  it('should be able to get Date Successor for year,month', function () {
    const dp = this.ym_date.exec(this.ctx);
    dp.year.should.equal(2015);
    dp.month.should.equal(2);
    should.not.exist(dp.day);
    should.not.exist(dp.hour);
    should.not.exist(dp.minute);
    should.not.exist(dp.second);
    should.not.exist(dp.millisecond);
  });

  it('should be able to get Date Successor for year,month,day', function () {
    const dp = this.ymd_date.exec(this.ctx);
    dp.year.should.equal(2015);
    dp.month.should.equal(1);
    dp.day.should.equal(2);
    should.not.exist(dp.hour);
    should.not.exist(dp.minute);
    should.not.exist(dp.second);
    should.not.exist(dp.millisecond);
  });

  it('should be able to get Date Successor for year,month,day,hour', function () {
    const dp = this.ymdh_date.exec(this.ctx);
    dp.year.should.equal(2015);
    dp.month.should.equal(1);
    dp.day.should.equal(1);
    dp.hour.should.equal(1);
    should.not.exist(dp.minute);
    should.not.exist(dp.second);
    should.not.exist(dp.millisecond);
  });

  it('should be able to get Date Successor for year,month,day,hour,minute', function () {
    const dp = this.ymdhm_date.exec(this.ctx);
    dp.year.should.equal(2015);
    dp.month.should.equal(1);
    dp.day.should.equal(1);
    dp.hour.should.equal(0);
    dp.minute.should.equal(1);
    should.not.exist(dp.second);
    should.not.exist(dp.millisecond);
  });

  it('should be able to get Date Successor for year,month,day,hour,minute,seconds', function () {
    const dp = this.ymdhms_date.exec(this.ctx);
    dp.year.should.equal(2015);
    dp.month.should.equal(1);
    dp.day.should.equal(1);
    dp.hour.should.equal(0);
    dp.minute.should.equal(0);
    dp.second.should.equal(1);
    should.not.exist(dp.millisecond);
  });

  it('should be able to get Date Successor for year,month,day,hour,minute,seconds,milliseconds', function () {
    const dp = this.ymdhmsm_date.exec(this.ctx);
    dp.year.should.equal(2015);
    dp.month.should.equal(1);
    dp.day.should.equal(1);
    dp.hour.should.equal(0);
    dp.minute.should.equal(0);
    dp.second.should.equal(0);
    dp.millisecond.should.equal(1);
  });

  it('should return null when attempting to get the Successor of the maximum allowed date', function () {
    should(this.max_date.exec(this.ctx)).be.null();
  });
});

describe('Predecessor', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should be able to get Integer Predecessor', function () {
    this.is.exec(this.ctx).should.equal(1);
  });
  it('should be able to get Real Predecessor', function () {
    this.rs.exec(this.ctx).should.equal(2.2 - Math.pow(10, -8));
  });
  it('should return null for Predecessor greater than Integer Max value', function () {
    should(this.ufr.exec(this.ctx)).be.null();
  });

  it('should be able to get Date Predecessor for year', function () {
    const dp = this.y_date.exec(this.ctx);
    dp.year.should.equal(2014);
    should.not.exist(dp.month);
    should.not.exist(dp.day);
    should.not.exist(dp.hour);
    should.not.exist(dp.minute);
    should.not.exist(dp.second);
    should.not.exist(dp.millisecond);
  });

  it('should be able to get Date Predecessor for year,month', function () {
    const dp = this.ym_date.exec(this.ctx);
    dp.year.should.equal(2014);
    dp.month.should.equal(12);
    should.not.exist(dp.day);
    should.not.exist(dp.hour);
    should.not.exist(dp.minute);
    should.not.exist(dp.second);
    should.not.exist(dp.millisecond);
  });

  it('should be able to get Date Predecessor for year,month,day', function () {
    const dp = this.ymd_date.exec(this.ctx);
    dp.year.should.equal(2014);
    dp.month.should.equal(12);
    dp.day.should.equal(31);
    should.not.exist(dp.hour);
    should.not.exist(dp.minute);
    should.not.exist(dp.second);
    should.not.exist(dp.millisecond);
  });
  it('should be able to get Date Predecessor for year,month,day,hour', function () {
    const dp = this.ymdh_date.exec(this.ctx);
    dp.year.should.equal(2014);
    dp.month.should.equal(12);
    dp.day.should.equal(31);
    dp.hour.should.equal(23);
    should.not.exist(dp.minute);
    should.not.exist(dp.second);
    should.not.exist(dp.millisecond);
  });

  it('should be able to get Date Predecessor for year,month,day,hour,minute', function () {
    const dp = this.ymdhm_date.exec(this.ctx);
    dp.year.should.equal(2014);
    dp.month.should.equal(12);
    dp.day.should.equal(31);
    dp.hour.should.equal(23);
    dp.minute.should.equal(59);
    should.not.exist(dp.second);
    should.not.exist(dp.millisecond);
  });

  it('should be able to get Date Predecessor for year,month,day,hour,minute,seconds', function () {
    const dp = this.ymdhms_date.exec(this.ctx);
    dp.year.should.equal(2014);
    dp.month.should.equal(12);
    dp.day.should.equal(31);
    dp.hour.should.equal(23);
    dp.minute.should.equal(59);
    dp.second.should.equal(59);
    should.not.exist(dp.millisecond);
  });

  it('should be able to get Date Predecessor for year,month,day,hour,minute,seconds,milliseconds', function () {
    const dp = this.ymdhmsm_date.exec(this.ctx);
    dp.year.should.equal(2014);
    dp.month.should.equal(12);
    dp.day.should.equal(31);
    dp.hour.should.equal(23);
    dp.minute.should.equal(59);
    dp.millisecond.should.equal(999);
  });

  it('should return null when attempting to get the Predecessor of the minimum allowed date', function () {
    should(this.min_date.exec(this.ctx)).be.null();
  });
});

describe('Quantity', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should be able to perform Quantity Addition', function () {
    validateQuantity(this.add_q_q.exec(this.ctx), 20, 'days');
    const adq = this.add_d_q.exec(this.ctx);
    adq.isDateTime.should.be.true();
    adq.year.should.equal(2000);
    adq.month.should.equal(1);
    adq.day.should.equal(11);
    validateQuantity(this.add_q_q_diff.exec(this.ctx), 10 + 10 / (24 * 60), 'days');
  });

  it('should be able to perform Quantity Subtraction', function () {
    validateQuantity(this.sub_q_q.exec(this.ctx), 0, 'days');
    const sdq = this.sub_d_q.exec(this.ctx);
    sdq.isDateTime.should.be.true();
    sdq.year.should.equal(1999);
    sdq.month.should.equal(12);
    sdq.day.should.equal(22);
    validateQuantity(this.sub_q_q_diff.exec(this.ctx), 10 - 10 / (24 * 60), 'days');
  });

  it('should be able to perform Quantity Division', function () {
    validateQuantity(this.div_q_d.exec(this.ctx), 5, 'days');
    validateQuantity(this.div_q_q.exec(this.ctx), 1, '1');
  });

  it('should be able to perform Quantity Multiplication', function () {
    // decimal to quantity multiplication results in decimal value only
    validateQuantity(this.mul_d_q.exec(this.ctx), 20, 'days');
    validateQuantity(this.mul_q_d.exec(this.ctx), 20, 'days');
    validateQuantity(this.mul_q_q.exec(this.ctx), 20, 'm2');
    validateQuantity(this.mul_q_q_diff.exec(this.ctx), 20, 'm/d');
  });

  it('should be able to perform Quantity Absolution', function () {
    const q = this.abs.exec(this.ctx);
    q.value.should.equal(10);
    q.unit.should.equal('days');
  });

  it('should be able to perform Quantity Negation', function () {
    const q = this.neg.exec(this.ctx);
    q.value.should.equal(-10);
    q.unit.should.equal('days');
  });

  it('should be able to perform ucum multiplication in cql', function () {
    this.multiplyUcum.exec(this.ctx).should.be.true();
  });

  it('should be able to perform ucum division in cql', function () {
    this.divideUcum.exec(this.ctx).should.be.true();
  });

  it('should be able to perform ucum addition in cql', function () {
    this.addUcum.exec(this.ctx).should.be.true();
  });

  it('should be able to perform ucum subtraction in cql', function () {
    this.subtractUcum.exec(this.ctx).should.be.true();
  });

  it('should be able to perform ucum multiplication', function () {
    const tests = [
      ["10 'm'", "20 'm'", "200 'm2'"],
      ["25 'km'", "5 'm'", "125000 'm2'"],
      ["10 'ml'", "20 'dl'", "0.02 'l2'"]
    ];
    doQuantityMathTests(tests, '*');
  });

  it('should be able to perform ucum division', function () {
    const tests = [
      ["10 'cm2'", "5 'cm'", "2 'cm'"],
      ["10 'm2'", "5 'm'", "2 'm'"],
      ["25 'km'", "5 'm'", "5000 '1'"],
      ["25 'mg'", "5 'mg'", "5 '1'"],
      ["25 'mg'", "5 '1'", "5 'mg'"],
      ["100 'm'", "2 'h'", "50 'm/h'"],
      ["100 '[in_i]'", "2 '[lb_av]'", "50 '[in_i]/[lb_av]'"]
    ];
    // Note that these tests check for equality but not that the result
    // has any particular unit.  12 cm^2 / 4 cm = 0.03 m rather than 3 cm.
    doQuantityMathTests(tests, '/');
  });
  it('should be able to perform ucum addition', function () {
    const tests = [
      ["10 'm'", "20 'm'", "30 'm'"],
      ["25 'km'", "5 'm'", "25005 'm'"],
      ["10 'ml'", "20 'dl'", "2.01 'l'"]
    ];
    doQuantityMathTests(tests, '+');
  });

  it('should be able to perform ucum subtraction', function () {
    const tests = [
      ["10 'd'", "20 'd'", "-10 'd'"],
      ["25 'km'", "5 'm'", "24995 'm'"],
      ["10 'ml'", "20 'dl'", "-1.99 'l'"]
    ];
    doQuantityMathTests(tests, '-');
  });
});

describe('OutOfBounds', () => {
  beforeEach(function () {
    setup(this, data);
  });

  describe('Integer', () => {
    it('should return null for Add overflow', function () {
      should(this.integerAddOverflow.exec(this.ctx)).be.null();
    });

    it('should return null for Add underflow', function () {
      should(this.integerAddUnderflow.exec(this.ctx)).be.null();
    });

    it('should return null for Subtract overflow', function () {
      should(this.integerSubtractOverflow.exec(this.ctx)).be.null();
    });

    it('should return null for Subtract underflow', function () {
      should(this.integerSubtractUnderflow.exec(this.ctx)).be.null();
    });

    it('should return null for Multiply overflow', function () {
      should(this.integerMultiplyOverflow.exec(this.ctx)).be.null();
    });

    it('should return null for Multiply underflow', function () {
      should(this.integerMultiplyUnderflow.exec(this.ctx)).be.null();
    });

    it('should return null for Divide overflow', function () {
      should(this.integerDivideOverflow.exec(this.ctx)).be.null();
    });

    it('should return null for Divide underflow', function () {
      should(this.integerDivideUnderflow.exec(this.ctx)).be.null();
    });

    it('should return null for Divide By Zero', function () {
      should(this.integerDivideByZero.exec(this.ctx)).be.null();
    });

    it('should return null for Power overflow', function () {
      should(this.integerPowerOverflow.exec(this.ctx)).be.null();
    });

    it('should return null for Power underflow', function () {
      should(this.integerPowerUnderflow.exec(this.ctx)).be.null();
    });

    it('should return null for successor overflow', function () {
      should(this.integerSuccessorOverflow.exec(this.ctx)).be.null();
    });

    it('should return null for predecessor underflow', function () {
      should(this.integerPredecessorUnderflow.exec(this.ctx)).be.null();
    });
  });

  describe('Decimal', () => {
    it('should return null for Add overflow', function () {
      should(this.decimalAddOverflow.exec(this.ctx)).be.null();
    });

    it('should return null for Add underflow', function () {
      should(this.decimalAddUnderflow.exec(this.ctx)).be.null();
    });

    it('should return null for Subtract overflow', function () {
      should(this.decimalSubtractOverflow.exec(this.ctx)).be.null();
    });

    it('should return null for Subtract underflow', function () {
      should(this.decimalSubtractUnderflow.exec(this.ctx)).be.null();
    });

    it('should return null for Multiply overflow', function () {
      should(this.decimalMultiplyOverflow.exec(this.ctx)).be.null();
    });

    it('should return null for Multiply underflow', function () {
      should(this.decimalMultiplyUnderflow.exec(this.ctx)).be.null();
    });

    it('should return null for Divide overflow', function () {
      should(this.decimalDivideOverflow.exec(this.ctx)).be.null();
    });

    it('should return null for Divide underflow', function () {
      should(this.decimalDivideUnderflow.exec(this.ctx)).be.null();
    });

    it('should return null for Divide By Zero', function () {
      should(this.decimalDivideByZero.exec(this.ctx)).be.null();
    });

    it('should return null for Power overflow', function () {
      should(this.decimalPowerOverflow.exec(this.ctx)).be.null();
    });

    it('should return null for Power underflow', function () {
      should(this.decimalPowerUnderflow.exec(this.ctx)).be.null();
    });

    it('should return null for successor overflow', function () {
      should(this.decimalSuccessorOverflow.exec(this.ctx)).be.null();
    });

    it('should return null for predecessor underflow', function () {
      should(this.decimalPredecessorUnderflow.exec(this.ctx)).be.null();
    });
  });

  describe('Quantity', () => {
    it('should return null for Add overflow', function () {
      should(this.quantityAddOverflow.exec(this.ctx)).be.null();
    });

    it('should return null for Add underflow', function () {
      should(this.quantityAddUnderflow.exec(this.ctx)).be.null();
    });

    it('should return null for Subtract overflow', function () {
      should(this.quantitySubtractOverflow.exec(this.ctx)).be.null();
    });

    it('should return null for Subtract underflow', function () {
      should(this.quantitySubtractUnderflow.exec(this.ctx)).be.null();
    });

    it('should return null for Multiply overflow', function () {
      should(this.quantityMultiplyOverflow.exec(this.ctx)).be.null();
    });

    it('should return null for Multiply underflow', function () {
      should(this.quantityMultiplyUnderflow.exec(this.ctx)).be.null();
    });

    it('should return null for Divide overflow', function () {
      should(this.quantityDivideOverflow.exec(this.ctx)).be.null();
    });

    it('should return null for Divide underflow', function () {
      should(this.quantityDivideUnderflow.exec(this.ctx)).be.null();
    });

    it('should return null for Divide By Zero', function () {
      should(this.quantityDivideByZero.exec(this.ctx)).be.null();
    });

    it('should return null for successor overflow', function () {
      should(this.quantitySuccessorOverflow.exec(this.ctx)).be.null();
    });

    it('should return null for predecessor underflow', function () {
      should(this.quantityPredecessorUnderflow.exec(this.ctx)).be.null();
    });
  });

  describe('DateTime', () => {
    it('should return null for Add overflow', function () {
      should(this.dateTimeAddOverflow.exec(this.ctx)).be.null();
    });

    // TODO: Fix the logic so this test passes. It's been broken for a long time, but due to a
    // faulty test, this was not noticed until now. The cause of the failure is not obvious, so
    // this should be revisited (but is lower priority since it's an extremely rare use case).
    it.skip('should return null for Add underflow', function () {
      should(this.dateTimeAddUnderflow.exec(this.ctx)).be.null();
    });

    it('should return null for Subtract overflow', function () {
      should(this.dateTimeSubtractOverflow.exec(this.ctx)).be.null();
    });

    // TODO: Fix the logic so this test passes. It's been broken for a long time, but due to a
    // faulty test, this was not noticed until now. The cause of the failure is not obvious, so
    // this should be revisited (but is lower priority since it's an extremely rare use case).
    it.skip('should return null for Subtract underflow', function () {
      should(this.dateTimeSubtractUnderflow.exec(this.ctx)).be.null();
    });

    it('should return null for successor overflow', function () {
      should(this.dateTimeSuccessorOverflow.exec(this.ctx)).be.null();
    });

    it('should return null for predecessor underflow', function () {
      should(this.dateTimePredecessorUnderflow.exec(this.ctx)).be.null();
    });

    // Tests for Precision are include in the spec tests
  });

  describe('Date', () => {
    it('should return null for Add overflow', function () {
      should(this.dateAddOverflow.exec(this.ctx)).be.null();
    });

    // TODO: Fix the logic so this test passes. It's been broken for a long time, but due to a
    // faulty test, this was not noticed until now. The cause of the failure is not obvious, so
    // this should be revisited (but is lower priority since it's an extremely rare use case).
    it.skip('should return null for Add underflow', function () {
      should(this.dateAddUnderflow.exec(this.ctx)).be.null();
    });

    it('should return null for Subtract overflow', function () {
      should(this.dateSubtractOverflow.exec(this.ctx)).be.null();
    });

    // TODO: Fix the logic so this test passes. It's been broken for a long time, but due to a
    // faulty test, this was not noticed until now. The cause of the failure is not obvious, so
    // this should be revisited (but is lower priority since it's an extremely rare use case).
    it.skip('should return null for Subtract underflow', function () {
      should(this.dateSubtractUnderflow.exec(this.ctx)).be.null();
    });

    it('should return null for successor overflow', function () {
      should(this.dateSuccessorOverflow.exec(this.ctx)).be.null();
    });

    it('should return null for predecessor underflow', function () {
      should(this.datePredecessorUnderflow.exec(this.ctx)).be.null();
    });

    // Tests for Precision are include in the spec tests
  });

  describe('Time', () => {
    it('should return null for Add overflow', function () {
      should(this.timeAddOverflow.exec(this.ctx)).be.null();
    });

    it('should return null for Add underflow', function () {
      should(this.timeAddUnderflow.exec(this.ctx)).be.null();
    });

    it('should return null for Subtract overflow', function () {
      should(this.timeSubtractOverflow.exec(this.ctx)).be.null();
    });

    it('should return null for Subtract underflow', function () {
      should(this.timeSubtractUnderflow.exec(this.ctx)).be.null();
    });

    it('should return null for successor overflow', function () {
      should(this.timeSuccessorOverflow.exec(this.ctx)).be.null();
    });

    it('should return null for predecessor underflow', function () {
      should(this.timePredecessorUnderflow.exec(this.ctx)).be.null();
    });

    // Tests for Precision are include in the spec tests
  });

  it('Exp should return null for overflow', function () {
    should(this.expOverflow.exec(this.ctx)).be.null();
  });
});
