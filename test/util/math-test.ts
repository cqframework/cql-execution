import { Uncertainty } from '../../src/datatypes/uncertainty';
import { MAX_FLOAT_VALUE, MIN_FLOAT_VALUE } from '../../src/util/limits';
import { Decimal } from '../../src/datatypes/decimal';
import { parseQuantity, Quantity } from '../../src/datatypes/quantity';
import {
  finalizeNumericResult,
  predecessor,
  successor,
  add,
  subtract,
  multiply,
  divide
} from '../../src/util/math';

describe('successor', () => {
  it('should preserve integers in an Uncertainty', () => {
    const result = successor(new Uncertainty(1, 2));
    result.low.should.equal(2);
    result.high.should.equal(3);
  });

  it('should preserve decimals in an Uncertainty', () => {
    const result = successor(new Uncertainty(Decimal.from('1.0'), Decimal.from('2.0')));
    result.low.should.equalDecimal('1.1');
    result.high.should.equalDecimal('2.1');
  });

  it('should leave the uncertainty high unchanged when it overflows', () => {
    const result = successor(new Uncertainty(Decimal.from('1.0'), MAX_FLOAT_VALUE));
    result.should.eql(new Uncertainty(Decimal.from('1.1'), MAX_FLOAT_VALUE));
  });
});

describe('predecessor', () => {
  it('should preserve integers in an Uncertainty', () => {
    const result = successor(new Uncertainty(1, 2));
    result.low.should.equal(2);
    result.high.should.equal(3);
  });

  it('should preserve decimals in an Uncertainty', () => {
    const result = successor(new Uncertainty(Decimal.from('1.0'), Decimal.from('2.0')));
    result.low.should.equalDecimal('1.1');
    result.high.should.equalDecimal('2.1');
  });

  it('should leave the uncertainty low unchanged when it underflows', () => {
    const result = predecessor(new Uncertainty(MIN_FLOAT_VALUE, Decimal.from('2.0')));
    result.should.eql(new Uncertainty(MIN_FLOAT_VALUE, Decimal.from('1.9')));
  });
});

describe('finalizeNumericResult', () => {
  it('should normalize Decimal results to eight places using the implicit rounding mode', () => {
    const result = finalizeNumericResult(Decimal.from('1.234567895'));

    result.should.equalDecimal('1.23456790');
  });

  it('should return a new normalized Uncertainty without modifying the input', () => {
    const input = new Uncertainty(Decimal.from('1.234567895'), Decimal.from('2.345678995'));
    const result = finalizeNumericResult(input);

    result.should.not.equal(input);
    input.low.should.equalDecimal('1.234567895');
    input.high.should.equalDecimal('2.345678995');
    result.low.should.equalDecimal('1.23456790');
    result.high.should.equalDecimal('2.34567900');
  });
});

const doQuantityMathTests = function (tests: string[][], operator: string) {
  let func: any;
  if (operator === '*') {
    func = multiply;
  } else if (operator === '/') {
    func = divide;
  } else if (operator === '+') {
    func = add;
  } else if (operator === '-') {
    func = subtract;
  }

  for (const t of tests) {
    const a = parseQuantity(t[0]);
    const b = parseQuantity(t[1]);
    // try to parse the expected value but if it comes back null
    // which it will if there are no units create a new Quantity
    // with just the expected as the value with null units
    const e = parseQuantity(t[2]) || new Quantity(t[2]);

    const res = func(a, b);
    e.equals(res).should.be.true(`${a} ${operator} ${b} should eq ${e} but was ${res}`);
  }
};

describe('Quantity math utilities', () => {
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
