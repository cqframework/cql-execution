import should from 'should';
import {
  checkUnit,
  convertUnit,
  normalizeUnitsWhenPossible,
  convertToCQLDateUnit,
  compareUnits,
  getProductOfUnits,
  getQuotientOfUnits
} from '../../src/util/units';

describe('checkUnit', () => {
  it('should validate proper simple units', () => {
    checkUnit('m').should.eql({ valid: true });
  });

  it('should validate units with a power', () => {
    checkUnit('m2').should.eql({ valid: true });
  });

  it('should validate "per" units', () => {
    checkUnit('/m').should.eql({ valid: true });
  });

  it('should validate multiplied units', () => {
    checkUnit('cm.m').should.eql({ valid: true });
  });

  it('should validate divided units', () => {
    checkUnit('dL/mg').should.eql({ valid: true });
  });

  it('should validate custom units with {} syntax', () => {
    checkUnit('{butterfly kisses}').should.eql({ valid: true });
  });

  it('should validate empty and null units as 1 by default', () => {
    checkUnit('').should.eql({ valid: true });
    checkUnit(null).should.eql({ valid: true });
  });

  it('should fail validation for empty and null units when empty not allowed', () => {
    checkUnit('', false).should.eql({
      valid: false,
      message: "Invalid UCUM unit: ''."
    });
    checkUnit(null, false).should.eql({
      valid: false,
      message: "Invalid UCUM unit: 'null'."
    });
  });

  it('should validate CQL date units by default', () => {
    checkUnit('year').should.eql({ valid: true });
    checkUnit('month').should.eql({ valid: true });
    checkUnit('day').should.eql({ valid: true });
    checkUnit('hour').should.eql({ valid: true });
    checkUnit('minute').should.eql({ valid: true });
    checkUnit('second').should.eql({ valid: true });
    checkUnit('millisecond').should.eql({ valid: true });
  });

  it('should fail validation for CQL date units when CQL date units not allowed', () => {
    checkUnit('year', true, false).should.eql({
      valid: false,
      message: "Invalid UCUM unit: 'year'. Did you mean 'a'?"
    });
    checkUnit('month', true, false).should.eql({
      valid: false,
      message: "Invalid UCUM unit: 'month'. Did you mean 'mo'?"
    });
    checkUnit('day', true, false).should.eql({
      valid: false,
      message: "Invalid UCUM unit: 'day'. Did you mean 'd'?"
    });
    checkUnit('hour', true, false).should.eql({
      valid: false,
      message: "Invalid UCUM unit: 'hour'. Did you mean 'h'?"
    });
    checkUnit('minute', true, false).should.eql({
      valid: false,
      message: "Invalid UCUM unit: 'minute'. Did you mean 'min'?"
    });
    checkUnit('second', true, false).should.eql({
      valid: false,
      message: "Invalid UCUM unit: 'second'."
    });
    checkUnit('millisecond', true, false).should.eql({
      valid: false,
      message: "Invalid UCUM unit: 'millisecond'. Did you mean 'ms'?"
    });
  });

  it('should fail validation for invalid units', () => {
    checkUnit('butterfly kisses').should.eql({
      valid: false,
      message: "Invalid UCUM unit: 'butterfly kisses'."
    });
  });

  it('should throw and suggest for common invalid units', () => {
    checkUnit('inch').should.eql({
      valid: false,
      message: "Invalid UCUM unit: 'inch'. Did you mean '[in_i]'?"
    });
  });
});

describe('convertUnit', () => {
  it('should convert compatible units', () => {
    convertUnit(18, '[in_i]', '[ft_i]').should.eql(1.5);
  });

  it('should return same value for same units', () => {
    convertUnit(18, '[in_i]', '[in_i]').should.eql(18);
  });

  it('should consider empty as 1 during conversion', () => {
    convertUnit(18, '', '').should.eql(18);
    convertUnit(18, null, null).should.eql(18);
    convertUnit(18, '', null).should.eql(18);
    convertUnit(18, null, '').should.eql(18);
  });

  it('should support CQL date units during conversion', () => {
    convertUnit(18, 'months', 'years').should.eql(1.5);
    convertUnit(1.5, 'years', 'months').should.eql(18);
    convertUnit(2, 'seconds', 'milliseconds').should.eql(2000);
    convertUnit(2000, 'milliseconds', 'seconds').should.eql(2);
  });

  it('should truncate precision to 8 decimals by default', () => {
    const result = convertUnit(1, '[ft_i]', '[mi_i]');
    result.should.equal(0.00018939);
  });

  it('should note truncate precision to 8 decimals when adjustPrecision is false', () => {
    const result = convertUnit(1, '[ft_i]', '[mi_i]', false);
    result.should.not.equal(0.00018939);
    result.toString().length.should.be.greaterThan(10);
    result.toString().should.startWith('0.000189393939393');
  });

  it('should return undefined for incompatible units', () => {
    should(convertUnit(18, '[in_i]', '[in_i]2')).be.undefined();
  });
});

describe('normalizeUnitsWhenPossible', () => {
  it('should keep same units', () => {
    normalizeUnitsWhenPossible(10, 'm', 1, 'm').should.eql([10, 'm', 1, 'm']);
  });

  it('should convert compatible units, preferring smaller units', () => {
    normalizeUnitsWhenPossible(10, 'cm', 1, 'm').should.eql([10, 'cm', 100, 'cm']);
    normalizeUnitsWhenPossible(1, 'm', 10, 'cm').should.eql([100, 'cm', 10, 'cm']);
  });

  it('should treat null or empty string units as 1', () => {
    normalizeUnitsWhenPossible(10, null, 1, '').should.eql([10, '1', 1, '1']);
    normalizeUnitsWhenPossible(1, '', 10, null).should.eql([1, '1', 10, '1']);
  });

  it('should normalize CQL date units and return CQL date units', () => {
    normalizeUnitsWhenPossible(10, 'year', 12, 'month').should.eql([120, 'month', 12, 'month']);
  });

  it('should return CQL date units when UCUM units are passed in', () => {
    normalizeUnitsWhenPossible(10, 'a_g', 12, 'mo_g').should.eql([120, 'mo_g', 12, 'mo_g']);
  });

  it('should not convert units of different dimensions', () => {
    normalizeUnitsWhenPossible(10, 'm', 1, 'm2').should.eql([10, 'm', 1, 'm2']);
  });

  it('should not convert incompatible units', () => {
    normalizeUnitsWhenPossible(10, 'm', 1, 'mg').should.eql([10, 'm', 1, 'mg']);
  });
});

describe('convertToCQLDateUnit', () => {
  it('should convert UCUM units to CQL units', () => {
    convertToCQLDateUnit('a').should.eql('year');
    convertToCQLDateUnit('a_j').should.eql('year');
    convertToCQLDateUnit('a_g').should.eql('year');
    convertToCQLDateUnit('mo').should.eql('month');
    convertToCQLDateUnit('mo_j').should.eql('month');
    convertToCQLDateUnit('mo_g').should.eql('month');
    convertToCQLDateUnit('wk').should.eql('week');
    convertToCQLDateUnit('d').should.eql('day');
    convertToCQLDateUnit('h').should.eql('hour');
    convertToCQLDateUnit('min').should.eql('minute');
    convertToCQLDateUnit('s').should.eql('second');
    convertToCQLDateUnit('ms').should.eql('millisecond');
  });

  it('should leave singular CQL units as-is', () => {
    convertToCQLDateUnit('year').should.eql('year');
    convertToCQLDateUnit('month').should.eql('month');
    convertToCQLDateUnit('week').should.eql('week');
    convertToCQLDateUnit('day').should.eql('day');
    convertToCQLDateUnit('hour').should.eql('hour');
    convertToCQLDateUnit('minute').should.eql('minute');
    convertToCQLDateUnit('second').should.eql('second');
    convertToCQLDateUnit('millisecond').should.eql('millisecond');
  });

  it('should convert plural CQL units to singular', () => {
    convertToCQLDateUnit('years').should.eql('year');
    convertToCQLDateUnit('months').should.eql('month');
    convertToCQLDateUnit('weeks').should.eql('week');
    convertToCQLDateUnit('days').should.eql('day');
    convertToCQLDateUnit('hours').should.eql('hour');
    convertToCQLDateUnit('minutes').should.eql('minute');
    convertToCQLDateUnit('seconds').should.eql('second');
    convertToCQLDateUnit('milliseconds').should.eql('millisecond');
  });

  it('should return undefined for non-date units', () => {
    should(convertToCQLDateUnit('mg')).be.undefined();
  });
});

describe('compareUnits', () => {
  it('should return -1 if the first unit is smaller than the second', () => {
    compareUnits('mg', 'g').should.equal(-1);
    compareUnits('cm', 'm').should.equal(-1);
    compareUnits('min', 'h').should.equal(-1);
  });

  it('should return 1 if the first unit is larger than the second', () => {
    compareUnits('g', 'mg').should.equal(1);
    compareUnits('m', 'cm').should.equal(1);
    compareUnits('h', 'min').should.equal(1);
  });

  it('should return 0 if the first unit is the same size as the second', () => {
    compareUnits('g', 'g').should.equal(0);
    compareUnits('m', 'm').should.equal(0);
    compareUnits('h', 'h').should.equal(0);
  });

  it('should support CQL date units', () => {
    compareUnits('day', 'month').should.equal(-1);
    compareUnits('hour', 'minute').should.equal(1);
    compareUnits('second', 's').should.equal(0);
  });

  it('should treat empty units as 1', () => {
    compareUnits('', null).should.equal(0);
    compareUnits('1', '').should.equal(0);
    compareUnits(null, '1').should.equal(0);
  });
});

describe('getProductOfUnits', () => {
  it('should return other unit when one of the units is 1', () => {
    getProductOfUnits('m', '1').should.equal('m');
    getProductOfUnits('1', 'm').should.equal('m');
    getProductOfUnits('m.g', '1').should.equal('m.g');
    getProductOfUnits('m/L', '1').should.equal('m/L');
    getProductOfUnits('1', '1').should.equal('1');
  });

  it('should combine powers of like units', () => {
    getProductOfUnits('m', 'm').should.equal('m2');
    getProductOfUnits('m2', 'm3').should.equal('m5');
    getProductOfUnits('1', '1').should.equal('1');
  });

  it('should use . to combine different units', () => {
    getProductOfUnits('m', 'g').should.equal('m.g');
  });

  it('should handle multipliers in the units', () => {
    getProductOfUnits('m.g', 'L.mol').should.equal('m.g.L.mol');
    getProductOfUnits('m.g', 'm.g2').should.equal('m2.g3');
    getProductOfUnits('m.g.L', 'g2.L3.m4').should.equal('m5.g3.L4');
  });

  it('should handle divisors in the units', () => {
    getProductOfUnits('m', '/m').should.equal('1');
    getProductOfUnits('/m', 'm').should.equal('1');
    getProductOfUnits('m', '/1').should.equal('m');
    getProductOfUnits('/1', 'm').should.equal('m');
    getProductOfUnits('m2/m3', 'm2/m3').should.equal('/m2');
    getProductOfUnits('m3/m2', 'm3/m2').should.equal('m2');
    getProductOfUnits('m/L', 'm/L').should.equal('m2/L2');
    getProductOfUnits('m/L', 'L/g').should.equal('m/g');
    getProductOfUnits('m/mol', 'L/g').should.equal('m.L/(mol.g)');
  });
});

describe('getQuotientOfUnits', () => {
  it('should return unit1 when unit2 is 1', () => {
    getQuotientOfUnits('m', '1').should.equal('m');
    getQuotientOfUnits('m.g', '1').should.equal('m.g');
    getQuotientOfUnits('m/L', '1').should.equal('m/L');
    getQuotientOfUnits('1', '1').should.equal('1');
  });

  it('should return /unit2 when unit1 is 1', () => {
    getQuotientOfUnits('1', 'm').should.equal('/m');
    getQuotientOfUnits('1', 'm.g').should.equal('/(m.g)');
    getQuotientOfUnits('1', 'm/L').should.equal('/(m/L)');
  });

  it('should return 1 when both units are the same', () => {
    getQuotientOfUnits('m', 'm').should.equal('1');
    getQuotientOfUnits('m.g', 'm.g').should.equal('1');
    getQuotientOfUnits('m.g', 'g.m').should.equal('1');
    getQuotientOfUnits('m/g', 'm/g').should.equal('1');
  });

  it('should simplify when possible', () => {
    getQuotientOfUnits('m2', 'm').should.equal('m');
    getQuotientOfUnits('m', 'm2').should.equal('/m');
    getQuotientOfUnits('m2.g4.L5', 'm5.g2.d').should.equal('g2.L5/(m3.d)');
  });

  it('should use / to combine different units', () => {
    getQuotientOfUnits('m', 'g').should.equal('m/g');
  });

  it('should handle multipliers in the units', () => {
    getQuotientOfUnits('m.g', 'L.mol').should.equal('m.g/(L.mol)');
  });

  it('should handle divisors in the units', () => {
    getQuotientOfUnits('m/mol', 'L/g').should.equal('m/mol/(L/g)');
    // the following tests just show some cases where we don't simplify
    // because it gets too complicated. The results are still valid.
    getQuotientOfUnits('m', '/m').should.equal('m/(/m)');
    getQuotientOfUnits('/m', 'm').should.equal('/m/m');
    getQuotientOfUnits('m/L', 'L/g').should.equal('m/L/(L/g)');
  });
});
