import should from 'should';
import { DateTime, Date } from '../../src/datatypes/datetime';
import { Uncertainty } from '../../src/datatypes/uncertainty';

describe('Overlapping DateTime and Date units', () =>
  it('should match', () => {
    DateTime.Unit.DAY.should.equal(Date.Unit.DAY);
    DateTime.Unit.WEEK.should.equal(Date.Unit.WEEK);
    DateTime.Unit.MONTH.should.equal(Date.Unit.MONTH);
    DateTime.Unit.YEAR.should.equal(Date.Unit.YEAR);
  }));

//#Implicit Conversion Of First Variable

describe('DateTime.differenceBetween with implicit conversion of first variable', () =>
  it('should handle difference between', () => {
    const a = Date.parse('2009-06-15');
    const b = DateTime.parse('2009-06-15T12:37:45.0');
    a.differenceBetween(b, DateTime.Unit.YEAR).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.MONTH).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.DAY).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.HOUR).should.eql(new Uncertainty(12));
    a.differenceBetween(b, DateTime.Unit.MINUTE).should.eql(new Uncertainty(757));
    a.differenceBetween(b, DateTime.Unit.SECOND).should.eql(new Uncertainty(45465));
    a.differenceBetween(b, DateTime.Unit.MILLISECOND).should.eql(new Uncertainty(45465000));
  }));

describe('DateTime.durationBetween with implicit conversion of first variable', () =>
  it('should handle duration', () => {
    const a = Date.parse('2009-06-15');
    const b = DateTime.parse('2009-06-15T12:37:45.0');
    a.durationBetween(b, DateTime.Unit.YEAR).should.eql(new Uncertainty(0));
    a.durationBetween(b, DateTime.Unit.MONTH).should.eql(new Uncertainty(0));
    a.durationBetween(b, DateTime.Unit.WEEK).should.eql(new Uncertainty(0));
    a.durationBetween(b, DateTime.Unit.DAY).should.eql(new Uncertainty(0));
    a.durationBetween(b, DateTime.Unit.HOUR).should.eql(new Uncertainty(12));
    a.durationBetween(b, DateTime.Unit.MINUTE).should.eql(new Uncertainty(757));
    a.durationBetween(b, DateTime.Unit.SECOND).should.eql(new Uncertainty(45465));
    a.durationBetween(b, DateTime.Unit.MILLISECOND).should.eql(new Uncertainty(45465000));
  }));

describe('DateTime.sameAs with implicit conversion of first variable', () => {
  it('should handle imprecision correctly with missing days', () => {
    should.not.exist(Date.parse('2000-05').sameAs(DateTime.parse('2000-05-15T12:35:45.123')));
    should.not.exist(
      Date.parse('2000-05').sameAs(
        DateTime.parse('2000-05-15T12:35:45.123'),
        DateTime.Unit.MILLISECOND
      )
    );
    should.not.exist(
      Date.parse('2000-05').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.SECOND)
    );
    should.not.exist(
      Date.parse('2000-05').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.MINUTE)
    );
    should.not.exist(
      Date.parse('2000-05').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.HOUR)
    );
    should.not.exist(
      Date.parse('2000-05').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.DAY)
    );
    Date.parse('2000-05')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.MONTH)
      .should.be.true();
    Date.parse('2000-05')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.YEAR)
      .should.be.true();
    should.not.exist(Date.parse('2000-05-15').sameAs(DateTime.parse('2000-05')));
    should.not.exist(
      Date.parse('2000-05-15').sameAs(DateTime.parse('2000-05'), DateTime.Unit.MILLISECOND)
    );
    should.not.exist(
      Date.parse('2000-05-15').sameAs(DateTime.parse('2000-05'), DateTime.Unit.SECOND)
    );
    should.not.exist(
      Date.parse('2000-05-15').sameAs(DateTime.parse('2000-05'), DateTime.Unit.MINUTE)
    );
    should.not.exist(
      Date.parse('2000-05-15').sameAs(DateTime.parse('2000-05'), DateTime.Unit.HOUR)
    );
    should.not.exist(Date.parse('2000-05-15').sameAs(DateTime.parse('2000-05'), DateTime.Unit.DAY));
    Date.parse('2000-05-15')
      .sameAs(DateTime.parse('2000-05'), DateTime.Unit.MONTH)
      .should.be.true();
    Date.parse('2000-05-15').sameAs(DateTime.parse('2000-05'), DateTime.Unit.YEAR).should.be.true();
    Date.parse('2000-05').sameAs(DateTime.parse('2000-05')).should.be.true();
    should.not.exist(
      Date.parse('2000-05').sameAs(DateTime.parse('2000-05'), DateTime.Unit.MILLISECOND)
    );
    should.not.exist(Date.parse('2000-05').sameAs(DateTime.parse('2000-05'), DateTime.Unit.SECOND));
    should.not.exist(Date.parse('2000-05').sameAs(DateTime.parse('2000-05'), DateTime.Unit.MINUTE));
    should.not.exist(Date.parse('2000-05').sameAs(DateTime.parse('2000-05'), DateTime.Unit.HOUR));
    should.not.exist(Date.parse('2000-05').sameAs(DateTime.parse('2000-05'), DateTime.Unit.DAY));
    Date.parse('2000-05').sameAs(DateTime.parse('2000-05'), DateTime.Unit.MONTH).should.be.true();
    Date.parse('2000-05').sameAs(DateTime.parse('2000-05'), DateTime.Unit.YEAR).should.be.true();
    Date.parse('2000-06').sameAs(DateTime.parse('2000-05-15T12:35:45.123')).should.be.false();
    Date.parse('2000-06')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.MILLISECOND)
      .should.be.false();
    Date.parse('2000-06')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.SECOND)
      .should.be.false();
    Date.parse('2000-06')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.MINUTE)
      .should.be.false();
    Date.parse('2000-06')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.HOUR)
      .should.be.false();
    Date.parse('2000-06')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.DAY)
      .should.be.false();
    Date.parse('2000-06')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.MONTH)
      .should.be.false();
    Date.parse('2000-06')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.YEAR)
      .should.be.true();
    Date.parse('2000-05-15').sameAs(DateTime.parse('2000-06')).should.be.false();
    Date.parse('2000-05-15')
      .sameAs(DateTime.parse('2000-06'), DateTime.Unit.MILLISECOND)
      .should.be.false();
    Date.parse('2000-05-15')
      .sameAs(DateTime.parse('2000-06'), DateTime.Unit.SECOND)
      .should.be.false();
    Date.parse('2000-05-15')
      .sameAs(DateTime.parse('2000-06'), DateTime.Unit.MINUTE)
      .should.be.false();
    Date.parse('2000-05-15')
      .sameAs(DateTime.parse('2000-06'), DateTime.Unit.HOUR)
      .should.be.false();
    Date.parse('2000-05-15').sameAs(DateTime.parse('2000-06'), DateTime.Unit.DAY).should.be.false();
    Date.parse('2000-05-15')
      .sameAs(DateTime.parse('2000-06'), DateTime.Unit.MONTH)
      .should.be.false();
    Date.parse('2000-05-15').sameAs(DateTime.parse('2000-06'), DateTime.Unit.YEAR).should.be.true();
    Date.parse('2000-06').sameAs(DateTime.parse('2000-05')).should.be.false();
    Date.parse('2000-06')
      .sameAs(DateTime.parse('2000-05'), DateTime.Unit.MILLISECOND)
      .should.be.false();
    Date.parse('2000-06').sameAs(DateTime.parse('2000-05'), DateTime.Unit.SECOND).should.be.false();
    Date.parse('2000-06').sameAs(DateTime.parse('2000-05'), DateTime.Unit.MINUTE).should.be.false();
    Date.parse('2000-06').sameAs(DateTime.parse('2000-05'), DateTime.Unit.HOUR).should.be.false();
    Date.parse('2000-06').sameAs(DateTime.parse('2000-05'), DateTime.Unit.DAY).should.be.false();
    Date.parse('2000-06').sameAs(DateTime.parse('2000-05'), DateTime.Unit.MONTH).should.be.false();
    Date.parse('2000-06').sameAs(DateTime.parse('2000-05'), DateTime.Unit.YEAR).should.be.true();
  });

  it('should handle imprecision correctly with missing months', () => {
    should.not.exist(Date.parse('2000').sameAs(DateTime.parse('2000-05-15T12:35:45.123')));
    should.not.exist(
      Date.parse('2000').sameAs(
        DateTime.parse('2000-05-15T12:35:45.123'),
        DateTime.Unit.MILLISECOND
      )
    );
    should.not.exist(
      Date.parse('2000').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.SECOND)
    );
    should.not.exist(
      Date.parse('2000').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.MINUTE)
    );
    should.not.exist(
      Date.parse('2000').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.HOUR)
    );
    should.not.exist(
      Date.parse('2000').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.DAY)
    );
    should.not.exist(
      Date.parse('2000').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.MONTH)
    );
    Date.parse('2000')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.YEAR)
      .should.be.true();
    should.not.exist(Date.parse('2000-05-15').sameAs(DateTime.parse('2000')));
    should.not.exist(
      Date.parse('2000-05-15').sameAs(DateTime.parse('2000'), DateTime.Unit.MILLISECOND)
    );
    should.not.exist(Date.parse('2000-05-15').sameAs(DateTime.parse('2000'), DateTime.Unit.SECOND));
    should.not.exist(Date.parse('2000-05-15').sameAs(DateTime.parse('2000'), DateTime.Unit.MINUTE));
    should.not.exist(Date.parse('2000-05-15').sameAs(DateTime.parse('2000'), DateTime.Unit.HOUR));
    should.not.exist(Date.parse('2000-05-15').sameAs(DateTime.parse('2000'), DateTime.Unit.DAY));
    should.not.exist(Date.parse('2000-05-15').sameAs(DateTime.parse('2000'), DateTime.Unit.MONTH));
    Date.parse('2000-05-15').sameAs(DateTime.parse('2000'), DateTime.Unit.YEAR).should.be.true();
    Date.parse('2000').sameAs(DateTime.parse('2000')).should.be.true();
    should.not.exist(Date.parse('2000').sameAs(DateTime.parse('2000'), DateTime.Unit.MILLISECOND));
    should.not.exist(Date.parse('2000').sameAs(DateTime.parse('2000'), DateTime.Unit.SECOND));
    should.not.exist(Date.parse('2000').sameAs(DateTime.parse('2000'), DateTime.Unit.MINUTE));
    should.not.exist(Date.parse('2000').sameAs(DateTime.parse('2000'), DateTime.Unit.HOUR));
    should.not.exist(Date.parse('2000').sameAs(DateTime.parse('2000'), DateTime.Unit.DAY));
    should.not.exist(Date.parse('2000').sameAs(DateTime.parse('2000'), DateTime.Unit.MONTH));
    Date.parse('2000').sameAs(DateTime.parse('2000'), DateTime.Unit.YEAR).should.be.true();
    Date.parse('2001').sameAs(DateTime.parse('2000-05-15T12:35:45.123')).should.be.false();
    Date.parse('2001')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.MILLISECOND)
      .should.be.false();
    Date.parse('2001')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.SECOND)
      .should.be.false();
    Date.parse('2001')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.MINUTE)
      .should.be.false();
    Date.parse('2001')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.HOUR)
      .should.be.false();
    Date.parse('2001')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.DAY)
      .should.be.false();
    Date.parse('2001')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.MONTH)
      .should.be.false();
    Date.parse('2001')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.YEAR)
      .should.be.false();
    Date.parse('2000-05-15').sameAs(DateTime.parse('2001')).should.be.false();
    Date.parse('2000-05-15')
      .sameAs(DateTime.parse('2001'), DateTime.Unit.MILLISECOND)
      .should.be.false();
    Date.parse('2000-05-15').sameAs(DateTime.parse('2001'), DateTime.Unit.SECOND).should.be.false();
    Date.parse('2000-05-15').sameAs(DateTime.parse('2001'), DateTime.Unit.MINUTE).should.be.false();
    Date.parse('2000-05-15').sameAs(DateTime.parse('2001'), DateTime.Unit.HOUR).should.be.false();
    Date.parse('2000-05-15').sameAs(DateTime.parse('2001'), DateTime.Unit.DAY).should.be.false();
    Date.parse('2000-05-15').sameAs(DateTime.parse('2001'), DateTime.Unit.MONTH).should.be.false();
    Date.parse('2000-05-15').sameAs(DateTime.parse('2001'), DateTime.Unit.YEAR).should.be.false();
    Date.parse('2001').sameAs(DateTime.parse('2000')).should.be.false();
    Date.parse('2001').sameAs(DateTime.parse('2000'), DateTime.Unit.MILLISECOND).should.be.false();
    Date.parse('2001').sameAs(DateTime.parse('2000'), DateTime.Unit.SECOND).should.be.false();
    Date.parse('2001').sameAs(DateTime.parse('2000'), DateTime.Unit.MINUTE).should.be.false();
    Date.parse('2001').sameAs(DateTime.parse('2000'), DateTime.Unit.HOUR).should.be.false();
    Date.parse('2001').sameAs(DateTime.parse('2000'), DateTime.Unit.DAY).should.be.false();
    Date.parse('2001').sameAs(DateTime.parse('2000'), DateTime.Unit.MONTH).should.be.false();
    Date.parse('2001').sameAs(DateTime.parse('2000'), DateTime.Unit.YEAR).should.be.false();
  });

  it('should allow DateTime precisions when a is a Date', () => {
    should(() =>
      Date.parse('2000-05-15').sameAs(DateTime.parse('2001'), DateTime.Unit.HOUR)
    ).not.throw();
    should(() =>
      Date.parse('2000-05-15').sameAs(DateTime.parse('2001'), DateTime.Unit.MINUTE)
    ).not.throw();
    should(() =>
      Date.parse('2000-05-15').sameAs(DateTime.parse('2001'), DateTime.Unit.SECOND)
    ).not.throw();
    should(() =>
      Date.parse('2000-05-15').sameAs(DateTime.parse('2001'), DateTime.Unit.MILLISECOND)
    ).not.throw();
  });

  it('should throw an error for invalid precisions', () => {
    should(() => Date.parse('2000-05-15').sameAs(DateTime.parse('2001'), DateTime.Unit.WEEK)).throw(
      'Invalid precision: week'
    );
    should(() => Date.parse('2000-05-15').sameAs(DateTime.parse('2001'), 'femtosecond')).throw(
      'Invalid precision: femtosecond'
    );
  });

  it('should handle potentially non-obvious cases of date to datetime conversion', () => {
    should.not.exist(Date.parse('2000-01-01').sameAs(DateTime.parse('2000-01-01')));
    Date.parse('2000-01').sameAs(DateTime.parse('2000-01')).should.be.true();
  });
});

describe('DateTime.after with implicit conversion of first variable', () => {
  it('should use year precision when requested', () => {
    Date.parse('2000-06-01')
      .after(DateTime.parse('2000-01-01T12:00:00.0+00'), DateTime.Unit.YEAR)
      .should.be.false();
    Date.parse('2000-06-01')
      .after(DateTime.parse('1999-12-31T23:59:59.999+00'), DateTime.Unit.YEAR)
      .should.be.true();
  });

  it('should use month precision when requested', () => {
    Date.parse('2000-02-15')
      .after(DateTime.parse('2000-02-01T12:00:00.0+00'), DateTime.Unit.MONTH)
      .should.be.false();
    Date.parse('2000-02-15')
      .after(DateTime.parse('2000-01-31T23:59:59.999+00'), DateTime.Unit.MONTH)
      .should.be.true();
  });

  it('should use day precision when requested', () => {
    Date.parse('2000-02-15')
      .after(DateTime.parse('2000-02-15T12:00:00.0+00'), DateTime.Unit.DAY)
      .should.be.false();
    Date.parse('2000-02-15')
      .after(DateTime.parse('2000-02-14T23:59:59.999+00'), DateTime.Unit.DAY)
      .should.be.true();
  });

  it('should return false in cases where a is b but there are unknown values with matching precision', () => {
    Date.parse('2000-01').after(DateTime.parse('2000-01')).should.be.false();
    Date.parse('2000').after(DateTime.parse('2000')).should.be.false();
  });

  it('should return null in cases where b has unknown values that prevent deterministic result', () => {
    should.not.exist(Date.parse('2000-01-02').after(DateTime.parse('2000-01')));
    should.not.exist(Date.parse('2000-01-02').after(DateTime.parse('2000')));
  });

  it('should return null in cases where a has unknown values that prevent deterministic result', () => {
    should.not.exist(Date.parse('2000-01').after(DateTime.parse('2000-01-01T00:00:00.001')));
    should.not.exist(Date.parse('2000').after(DateTime.parse('2000-01-01T00:00:00.001')));
  });

  it('should accept cases where b has unknown values but is still deterministicly after a', () => {
    Date.parse('2000-01-02').after(DateTime.parse('2000-01-01T00:00:00')).should.be.true();
    Date.parse('2000-01-02').after(DateTime.parse('2000-01-01T00:00')).should.be.true();
    Date.parse('2000-01-02').after(DateTime.parse('2000-01-01T00')).should.be.true();
    Date.parse('2000-01-02').after(DateTime.parse('2000-01-01')).should.be.true();
    Date.parse('2000-02-01').after(DateTime.parse('2000-01')).should.be.true();
    Date.parse('2001-01-01').after(DateTime.parse('2000')).should.be.true();
  });

  it('should accept cases where a has unknown values but b is still deterministicly after a', () => {
    Date.parse('2000-02').after(DateTime.parse('2000-01-01T00:00:00.0')).should.be.true();
    Date.parse('2001').after(DateTime.parse('2000-01-01T00:00:00.0')).should.be.true();
  });

  it('should reject cases where b has unknown values but is still deterministicly before a', () => {
    Date.parse('1999-01-01').after(DateTime.parse('2000-01-01T00:00:01')).should.be.false();
    Date.parse('1999-01-01').after(DateTime.parse('2000-01-01T00:01')).should.be.false();
    Date.parse('1999-01-01').after(DateTime.parse('2000-01-01T01')).should.be.false();
    Date.parse('2000-01-01').after(DateTime.parse('2000-01-02')).should.be.false();
    Date.parse('2000-01-01').after(DateTime.parse('2000-02')).should.be.false();
    Date.parse('2000-01-01').after(DateTime.parse('2001')).should.be.false();
  });

  it('should reject cases where a has unknown values but b is still deterministicly before a', () => {
    Date.parse('2000-01').after(DateTime.parse('2000-02-01T00:00:00.0')).should.be.false();
    Date.parse('2000').after(DateTime.parse('2001-01-01T00:00:00.0')).should.be.false();
  });

  it('should allow DateTime precisions when a is a Date', () => {
    should(() =>
      Date.parse('2000-05-15').after(DateTime.parse('2001'), DateTime.Unit.HOUR)
    ).not.throw();
    should(() =>
      Date.parse('2000-05-15').after(DateTime.parse('2001'), DateTime.Unit.MINUTE)
    ).not.throw();
    should(() =>
      Date.parse('2000-05-15').after(DateTime.parse('2001'), DateTime.Unit.SECOND)
    ).not.throw();
    should(() =>
      Date.parse('2000-05-15').after(DateTime.parse('2001'), DateTime.Unit.MILLISECOND)
    ).not.throw();
  });

  it('should throw an error for invalid precisions', () => {
    should(() => Date.parse('2000-05-15').after(DateTime.parse('2001'), DateTime.Unit.WEEK)).throw(
      'Invalid precision: week'
    );
    should(() => Date.parse('2000-05-15').after(DateTime.parse('2001'), 'femtosecond')).throw(
      'Invalid precision: femtosecond'
    );
  });

  it('should handle potentially non-obvious cases of date to datetime conversion', () => {
    should.not.exist(Date.parse('2000-01-01').after(DateTime.parse('2000-01-01')));
    Date.parse('2000-01').after(DateTime.parse('2000-01')).should.be.false();
  });
});

describe('DateTime.sameOrAfter with implicit conversion of first variable', () => {
  it('should use year precision when requested', () => {
    Date.parse('2000-01-01')
      .sameOrAfter(DateTime.parse('2000-06-01T00:00:00.0+00'), DateTime.Unit.YEAR)
      .should.be.true();
    Date.parse('1999-12-31')
      .sameOrAfter(DateTime.parse('2000-06-01T00:00:00.0+00'), DateTime.Unit.YEAR)
      .should.be.false();
  });

  it('should use month precision when requested', () => {
    Date.parse('2000-02-01')
      .sameOrAfter(DateTime.parse('2000-02-15T00:00:00.0+00'), DateTime.Unit.MONTH)
      .should.be.true();
    Date.parse('2000-01-31')
      .sameOrAfter(DateTime.parse('2000-02-15T00:00:00.0+00'), DateTime.Unit.MONTH)
      .should.be.false();
  });

  it('should use day precision when requested', () => {
    Date.parse('2000-02-15')
      .sameOrAfter(DateTime.parse('2000-02-15T12:00:00.0+00'), DateTime.Unit.DAY)
      .should.be.true();
    Date.parse('2000-02-14')
      .sameOrAfter(DateTime.parse('2000-02-15T12:00:00.0+00'), DateTime.Unit.DAY)
      .should.be.false();
  });

  it('should return true in cases where a is b but there are unknown values in a and b but precision matches', () => {
    Date.parse('2000-01').sameOrAfter(DateTime.parse('2000-01')).should.be.true();
    Date.parse('2000').sameOrAfter(DateTime.parse('2000')).should.be.true();
  });

  it('should return null in cases where b has unknown values that prevent deterministic result', () => {
    should.not.exist(Date.parse('2000-01-01').sameOrAfter(DateTime.parse('2000-01')));
    should.not.exist(Date.parse('2000-01-01').sameOrAfter(DateTime.parse('2000')));
  });

  it('should return null in cases where a has unknown values that prevent deterministic result', () => {
    should.not.exist(Date.parse('2000-01').sameOrAfter(DateTime.parse('2000-01-02T12:00:00.001')));
    should.not.exist(Date.parse('2000').sameOrAfter(DateTime.parse('2000-01-02T12:00:00.001')));
  });

  it('should accept cases where b has unknown values but is still deterministicly after a', () => {
    Date.parse('2000-01-02').sameOrAfter(DateTime.parse('2000-01-01T00:00:00')).should.be.true();
    Date.parse('2000-01-02').sameOrAfter(DateTime.parse('2000-01-01T00:00')).should.be.true();
    Date.parse('2000-01-02').sameOrAfter(DateTime.parse('2000-01-01T00')).should.be.true();
    Date.parse('2000-01-02').sameOrAfter(DateTime.parse('2000-01-01')).should.be.true();
    Date.parse('2000-02-01').sameOrAfter(DateTime.parse('2000-01')).should.be.true();
    Date.parse('2001-01-01').sameOrAfter(DateTime.parse('2000')).should.be.true();
  });

  it('should accept cases where b has unknown values but is still deterministicly after or same as a', () => {
    Date.parse('2000-01-02').sameOrAfter(DateTime.parse('2000-01-01T00:00')).should.be.true();
    Date.parse('2000-01-02').sameOrAfter(DateTime.parse('2000-01-01T00')).should.be.true();
    Date.parse('2000-01-02').sameOrAfter(DateTime.parse('2000-01-01')).should.be.true();
    Date.parse('2000-02-01').sameOrAfter(DateTime.parse('2000-01')).should.be.true();
    Date.parse('2001-12-31').sameOrAfter(DateTime.parse('2000')).should.be.true();
  });

  it('should accept cases where a has unknown values but a is still deterministicly after b', () => {
    Date.parse('2000-01-02')
      .sameOrAfter(DateTime.parse('2000-01-01T23:59:59.999'))
      .should.be.true();
    Date.parse('2000-02').sameOrAfter(DateTime.parse('2000-01-31T23:59:59.999')).should.be.true();
    Date.parse('2001').sameOrAfter(DateTime.parse('2000-12-31T23:59:59.999')).should.be.true();
  });

  it('should handle cases where a has unknown values but b is not deterministicly after or same as a', () => {
    should.not.exist(Date.parse('2000-01').sameOrAfter(DateTime.parse('2000-01-01T00:00:00.0')));
    should.not.exist(Date.parse('2000').sameOrAfter(DateTime.parse('2000-01-01T00:00:00.0')));
  });

  it('should reject cases where b has unknown values but is still deterministicly before a', () => {
    Date.parse('2000-01-01').sameOrAfter(DateTime.parse('2000-01-02T00:00:01')).should.be.false();
    Date.parse('2000-01-01').sameOrAfter(DateTime.parse('2000-01-02T00:01')).should.be.false();
    Date.parse('2000-01-01').sameOrAfter(DateTime.parse('2000-01-02T01')).should.be.false();
    Date.parse('2000-01-01').sameOrAfter(DateTime.parse('2000-01-02')).should.be.false();
    Date.parse('2000-01-31').sameOrAfter(DateTime.parse('2000-02')).should.be.false();
    Date.parse('2000-12-31').sameOrAfter(DateTime.parse('2001')).should.be.false();
  });

  it('should reject cases where a has unknown values but b is still deterministicly before a', () => {
    Date.parse('2000-01').sameOrAfter(DateTime.parse('2000-02-01T00:00:00')).should.be.false();
    Date.parse('2000').sameOrAfter(DateTime.parse('2001-01-01T00:00:00')).should.be.false();
  });

  it('should allow DateTime precisions when a is a Date', () => {
    should(() =>
      Date.parse('2000-05-15').sameOrAfter(DateTime.parse('2001'), DateTime.Unit.HOUR)
    ).not.throw();
    should(() =>
      Date.parse('2000-05-15').sameOrAfter(DateTime.parse('2001'), DateTime.Unit.MINUTE)
    ).not.throw();
    should(() =>
      Date.parse('2000-05-15').sameOrAfter(DateTime.parse('2001'), DateTime.Unit.SECOND)
    ).not.throw();
    should(() =>
      Date.parse('2000-05-15').sameOrAfter(DateTime.parse('2001'), DateTime.Unit.MILLISECOND)
    ).not.throw();
  });

  it('should throw an error for invalid precisions', () => {
    should(() =>
      Date.parse('2000-05-15').sameOrAfter(DateTime.parse('2001'), DateTime.Unit.WEEK)
    ).throw('Invalid precision: week');
    should(() => Date.parse('2000-05-15').sameOrAfter(DateTime.parse('2001'), 'femtosecond')).throw(
      'Invalid precision: femtosecond'
    );
  });

  it('should handle potentially non-obvious cases of date to datetime conversion', () => {
    should.not.exist(Date.parse('2000-01-01').sameOrAfter(DateTime.parse('2000-01-01')));
    Date.parse('2000-01').sameOrAfter(DateTime.parse('2000-01')).should.be.true();
  });
});

describe('DateTime.before with implicit conversion of first variable', () => {
  it('should use year precision when requested', () => {
    Date.parse('2000-01-01')
      .before(DateTime.parse('2000-06-01T00:00:00.0+00'), DateTime.Unit.YEAR)
      .should.be.false();
    Date.parse('1999-12-31')
      .before(DateTime.parse('2000-06-01T00:00:00.0+00'), DateTime.Unit.YEAR)
      .should.be.true();
  });

  it('should use month precision when requested', () => {
    Date.parse('2000-02-01')
      .before(DateTime.parse('2000-02-15T00:00:00.0+00'), DateTime.Unit.MONTH)
      .should.be.false();
    Date.parse('2000-01-31')
      .before(DateTime.parse('2000-02-15T00:00:00.0+00'), DateTime.Unit.MONTH)
      .should.be.true();
  });

  it('should use day precision when requested', () => {
    Date.parse('2000-02-15')
      .before(DateTime.parse('2000-02-15T12:00:00.0+00'), DateTime.Unit.DAY)
      .should.be.false();
    Date.parse('2000-02-14')
      .before(DateTime.parse('2000-02-15T23:00:00.0+00'), DateTime.Unit.DAY)
      .should.be.true();
  });

  it('should return false in cases where a is b but there are unknown values and precision matches', () => {
    Date.parse('2000-01').before(DateTime.parse('2000-01')).should.be.false();
    Date.parse('2000').before(DateTime.parse('2000')).should.be.false();
  });

  it('should return null in cases where b has unknown values that prevent deterministic result', () => {
    should.not.exist(Date.parse('2000-01-01').before(DateTime.parse('2000-01-01T00:00:00')));
    should.not.exist(Date.parse('2000-01-01').before(DateTime.parse('2000-01-01T00:00')));
    should.not.exist(Date.parse('2000-01-01').before(DateTime.parse('2000-01-01T00')));
    should.not.exist(Date.parse('2000-01-01').before(DateTime.parse('2000-01-01')));
    should.not.exist(Date.parse('2000-01-01').before(DateTime.parse('2000-01')));
    should.not.exist(Date.parse('2000-01-01').before(DateTime.parse('2000')));
  });

  it('should return null in cases where a has unknown values that prevent deterministic result', () => {
    should.not.exist(Date.parse('2000-01').before(DateTime.parse('2000-01-01T00:00:00.001')));
    should.not.exist(Date.parse('2000').before(DateTime.parse('2000-01-01T00:00:00.001')));
  });

  it('should accept cases where b has unknown values but is still deterministicly before a', () => {
    Date.parse('2000-01-01').before(DateTime.parse('2000-01-02T00:00:01')).should.be.true();
    Date.parse('2000-01-01').before(DateTime.parse('2000-01-02T00:01')).should.be.true();
    Date.parse('2000-01-01').before(DateTime.parse('2000-01-02T01')).should.be.true();
    Date.parse('2000-01-01').before(DateTime.parse('2000-01-02')).should.be.true();
    Date.parse('2000-01-01').before(DateTime.parse('2000-02')).should.be.true();
    Date.parse('2000-01-01').before(DateTime.parse('2001')).should.be.true();
  });

  it('should accept cases where a has unknown values but b is still deterministicly before a', () => {
    Date.parse('2000-01').before(DateTime.parse('2000-02-01T00:00:00.0')).should.be.true();
    Date.parse('2000').before(DateTime.parse('2001-01-01T00:00:00.0')).should.be.true();
  });

  it('should reject cases where b has unknown values but is still deterministicly after a', () => {
    Date.parse('2000-01-02').before(DateTime.parse('2000-01-01T00:00:00')).should.be.false();
    Date.parse('2000-01-02').before(DateTime.parse('2000-01-01T00:00')).should.be.false();
    Date.parse('2000-01-02').before(DateTime.parse('2000-01-01T00')).should.be.false();
    Date.parse('2000-01-02').before(DateTime.parse('2000-01-01')).should.be.false();
    Date.parse('2000-02-01').before(DateTime.parse('2000-01')).should.be.false();
    Date.parse('2001-01-01').before(DateTime.parse('2000')).should.be.false();
  });

  it('should reject cases where a has unknown values but b is still deterministicly after a', () => {
    Date.parse('2000-01-02').before(DateTime.parse('2000-01-01T00:00:00.0')).should.be.false();
    Date.parse('2000-02').before(DateTime.parse('2000-01-01T00:00:00.0')).should.be.false();
    Date.parse('2001').before(DateTime.parse('2000-01-01T00:00:00.0')).should.be.false();
  });

  it('should allow DateTime precisions when a is a Date', () => {
    should(() =>
      Date.parse('2000-05-15').before(DateTime.parse('2001'), DateTime.Unit.HOUR)
    ).not.throw();
    should(() =>
      Date.parse('2000-05-15').before(DateTime.parse('2001'), DateTime.Unit.MINUTE)
    ).not.throw();
    should(() =>
      Date.parse('2000-05-15').before(DateTime.parse('2001'), DateTime.Unit.SECOND)
    ).not.throw();
    should(() =>
      Date.parse('2000-05-15').before(DateTime.parse('2001'), DateTime.Unit.MILLISECOND)
    ).not.throw();
  });

  it('should throw an error for invalid precisions', () => {
    should(() => Date.parse('2000-05-15').before(DateTime.parse('2001'), DateTime.Unit.WEEK)).throw(
      'Invalid precision: week'
    );
    should(() => Date.parse('2000-05-15').before(DateTime.parse('2001'), 'femtosecond')).throw(
      'Invalid precision: femtosecond'
    );
  });
});

describe('DateTime.sameOrBefore with implicit conversion of first variable', () => {
  it('should use year precision when requested', () => {
    Date.parse('2000-06-01')
      .sameOrBefore(DateTime.parse('2000-01-02T00:00:00.0+00'), DateTime.Unit.YEAR)
      .should.be.true();
    Date.parse('2000-06-01')
      .sameOrBefore(DateTime.parse('1999-12-31T23:59:59.999+00'), DateTime.Unit.YEAR)
      .should.be.false();
  });

  it('should use month precision when requested', () => {
    Date.parse('2000-02-15')
      .sameOrBefore(DateTime.parse('2000-02-02T00:00:00.0+00'), DateTime.Unit.MONTH)
      .should.be.true();
    Date.parse('2000-02-15')
      .sameOrBefore(DateTime.parse('2000-01-31T23:59:59.999+00'), DateTime.Unit.MONTH)
      .should.be.false();
  });

  it('should use day precision when requested', () => {
    Date.parse('2000-02-15')
      .sameOrBefore(DateTime.parse('2000-02-15T23:59:59.999+00'), DateTime.Unit.DAY)
      .should.be.true();
    Date.parse('2000-02-15')
      .sameOrBefore(DateTime.parse('2000-02-14T23:59:59.999+00'), DateTime.Unit.DAY)
      .should.be.false();
  });

  it('should return true in cases where a is b but there and b have unknown values with matching precision', () => {
    Date.parse('2000-01').sameOrBefore(DateTime.parse('2000-01')).should.be.true();
    Date.parse('2000').sameOrBefore(DateTime.parse('2000')).should.be.true();
  });

  it('should return null in cases where b has unknown values that prevent deterministic result', () => {
    should.not.exist(Date.parse('2000-01-31').sameOrBefore(DateTime.parse('2000-01')));
    should.not.exist(Date.parse('2000-12-31').sameOrBefore(DateTime.parse('2000')));
  });

  it('should return null in cases where a has unknown values that prevent deterministic result', () => {
    should.not.exist(Date.parse('2000-01').sameOrBefore(DateTime.parse('2000-01-01T00:00:00.001')));
    should.not.exist(Date.parse('2000').sameOrBefore(DateTime.parse('2000-01-01T00:00:00.001')));
  });

  it('should accept cases where b has unknown values but is still deterministicly before a', () => {
    Date.parse('2000-01-01').sameOrBefore(DateTime.parse('2000-01-02T00:00:01')).should.be.true();
    Date.parse('2000-01-01').sameOrBefore(DateTime.parse('2000-01-02T00:01')).should.be.true();
    Date.parse('2000-01-01').sameOrBefore(DateTime.parse('2000-01-02T01')).should.be.true();
    Date.parse('2000-01-01').sameOrBefore(DateTime.parse('2000-01-02')).should.be.true();
    Date.parse('2000-01-31').sameOrBefore(DateTime.parse('2000-02')).should.be.true();
    Date.parse('2000-12-31').sameOrBefore(DateTime.parse('2001')).should.be.true();
  });

  it('should accept cases where b has unknown values but is still deterministicly before or same as a', () => {
    Date.parse('2000-01-01').sameOrBefore(DateTime.parse('2000-01-02T00:00:01')).should.be.true();
    Date.parse('2000-01-01').sameOrBefore(DateTime.parse('2000-01-02T00:01')).should.be.true();
    Date.parse('2000-01-01').sameOrBefore(DateTime.parse('2000-01-02T01')).should.be.true();
    Date.parse('2000-01-01').sameOrBefore(DateTime.parse('2000-01-02')).should.be.true();
    Date.parse('2000-01-01').sameOrBefore(DateTime.parse('2000-02')).should.be.true();
    Date.parse('2000-01-01').sameOrBefore(DateTime.parse('2001')).should.be.true();
  });

  it('should accept cases where a has unknown values but b is still deterministicly before or same as a', () => {
    Date.parse('2000-01').sameOrBefore(DateTime.parse('2000-02-01T00:00:00.0')).should.be.true();
    Date.parse('2000').sameOrBefore(DateTime.parse('2001-01-01T00:00:00.0')).should.be.true();
  });

  it('should accept cases where a has unknown values but b is not deterministicly same as or before a', () => {
    should.not.exist(Date.parse('2000-01').sameOrBefore(DateTime.parse('2000-01-31T23:59:59.999')));
    should.not.exist(Date.parse('2000').sameOrBefore(DateTime.parse('2000-12-31T23:59:59.999')));
  });

  it('should reject cases where b has unknown values but is still deterministicly after a', () => {
    Date.parse('2000-01-02').sameOrBefore(DateTime.parse('2000-01-01T00:00:00')).should.be.false();
    Date.parse('2000-01-02').sameOrBefore(DateTime.parse('2000-01-01T00:00')).should.be.false();
    Date.parse('2000-01-02').sameOrBefore(DateTime.parse('2000-01-01T00')).should.be.false();
    Date.parse('2000-01-02').sameOrBefore(DateTime.parse('2000-01-01')).should.be.false();
    Date.parse('2000-02-01').sameOrBefore(DateTime.parse('2000-01')).should.be.false();
    Date.parse('2001-01-01').sameOrBefore(DateTime.parse('2000')).should.be.false();
  });

  it('should reject cases where a has unknown values but b is still deterministicly after a', () => {
    Date.parse('2000-02').sameOrBefore(DateTime.parse('2000-01-31T23:59:59.999')).should.be.false();
    Date.parse('2001').sameOrBefore(DateTime.parse('2000-12-31T23:59:59.999')).should.be.false();
  });

  it('should allow DateTime precisions when a is a Date', () => {
    should(() =>
      Date.parse('2000-05-15').sameOrBefore(DateTime.parse('2001'), DateTime.Unit.HOUR)
    ).not.throw();
    should(() =>
      Date.parse('2000-05-15').sameOrBefore(DateTime.parse('2001'), DateTime.Unit.MINUTE)
    ).not.throw();
    should(() =>
      Date.parse('2000-05-15').sameOrBefore(DateTime.parse('2001'), DateTime.Unit.SECOND)
    ).not.throw();
    should(() =>
      Date.parse('2000-05-15').sameOrBefore(DateTime.parse('2001'), DateTime.Unit.MILLISECOND)
    ).not.throw();
  });

  it('should throw an error for invalid precisions', () => {
    should(() =>
      Date.parse('2000-05-15').sameOrBefore(DateTime.parse('2001'), DateTime.Unit.WEEK)
    ).throw('Invalid precision: week');
    should(() =>
      Date.parse('2000-05-15').sameOrBefore(DateTime.parse('2001'), 'femtosecond')
    ).throw('Invalid precision: femtosecond');
  });

  it('should handle potentially non-obvious cases of date to datetime conversion', () => {
    should.not.exist(Date.parse('2000-01-01').sameOrBefore(DateTime.parse('2000-01-01')));
    Date.parse('2000-01').sameOrBefore(DateTime.parse('2000-01')).should.be.true();
  });
});

//# Implicit Conversion Of Second Variable

describe('DateTime.differenceBetween with implicit conversion of second variable', () =>
  it('should handle implicit conversion from Date', () => {
    const a = DateTime.parse('2009-06-15T12:37:45.0');
    const b = Date.parse('2009-06-15');
    a.differenceBetween(b, DateTime.Unit.YEAR).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.MONTH).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.DAY).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.HOUR).should.eql(new Uncertainty(-12));
    a.differenceBetween(b, DateTime.Unit.MINUTE).should.eql(new Uncertainty(-757));
    a.differenceBetween(b, DateTime.Unit.SECOND).should.eql(new Uncertainty(-45465));
    a.differenceBetween(b, DateTime.Unit.MILLISECOND).should.eql(new Uncertainty(-45465000));
  }));

describe('DateTime.durationBetween with implicit conversion of second variable', () =>
  it('should handle implicit conversion from Date', () => {
    const a = DateTime.parse('2009-06-15T12:37:45.0');
    const b = Date.parse('2009-06-15');
    a.durationBetween(b, DateTime.Unit.YEAR).should.eql(new Uncertainty(0));
    a.durationBetween(b, DateTime.Unit.MONTH).should.eql(new Uncertainty(0));
    a.durationBetween(b, DateTime.Unit.WEEK).should.eql(new Uncertainty(0));
    a.durationBetween(b, DateTime.Unit.DAY).should.eql(new Uncertainty(0));
    a.durationBetween(b, DateTime.Unit.HOUR).should.eql(new Uncertainty(-12));
    a.durationBetween(b, DateTime.Unit.MINUTE).should.eql(new Uncertainty(-757));
    a.durationBetween(b, DateTime.Unit.SECOND).should.eql(new Uncertainty(-45465));
    a.durationBetween(b, DateTime.Unit.MILLISECOND).should.eql(new Uncertainty(-45465000));
  }));

describe('DateTime.sameAs with implicit conversion of second variable', () => {
  it('should handle imprecision correctly with missing days', () => {
    should.not.exist(DateTime.parse('2000-05-15T12:35:45.123').sameAs(Date.parse('2000-05')));
    should.not.exist(
      DateTime.parse('2000-05-15T12:35:45.123').sameAs(
        Date.parse('2000-05'),
        DateTime.Unit.MILLISECOND
      )
    );
    should.not.exist(
      DateTime.parse('2000-05-15T12:35:45.123').sameAs(Date.parse('2000-05'), DateTime.Unit.SECOND)
    );
    should.not.exist(
      DateTime.parse('2000-05-15T12:35:45.123').sameAs(Date.parse('2000-05'), DateTime.Unit.MINUTE)
    );
    should.not.exist(
      DateTime.parse('2000-05-15T12:35:45.123').sameAs(Date.parse('2000-05'), DateTime.Unit.HOUR)
    );
    should.not.exist(
      DateTime.parse('2000-05-15T12:35:45.123').sameAs(Date.parse('2000-05'), DateTime.Unit.DAY)
    );
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(Date.parse('2000-05'), DateTime.Unit.MONTH)
      .should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(Date.parse('2000-05'), DateTime.Unit.YEAR)
      .should.be.true();
    should.not.exist(DateTime.parse('2000-05').sameAs(Date.parse('2000-05-15')));
    should.not.exist(
      DateTime.parse('2000-05').sameAs(Date.parse('2000-05-15'), DateTime.Unit.MILLISECOND)
    );
    should.not.exist(
      DateTime.parse('2000-05').sameAs(Date.parse('2000-05-15'), DateTime.Unit.SECOND)
    );
    should.not.exist(
      DateTime.parse('2000-05').sameAs(Date.parse('2000-05-15'), DateTime.Unit.MINUTE)
    );
    should.not.exist(
      DateTime.parse('2000-05').sameAs(Date.parse('2000-05-15'), DateTime.Unit.HOUR)
    );
    should.not.exist(DateTime.parse('2000-05').sameAs(Date.parse('2000-05-15'), DateTime.Unit.DAY));
    DateTime.parse('2000-05')
      .sameAs(Date.parse('2000-05-15'), DateTime.Unit.MONTH)
      .should.be.true();
    DateTime.parse('2000-05').sameAs(Date.parse('2000-05-15'), DateTime.Unit.YEAR).should.be.true();
    DateTime.parse('2000-05').sameAs(Date.parse('2000-05')).should.be.true();
    should.not.exist(
      DateTime.parse('2000-05').sameAs(Date.parse('2000-05'), DateTime.Unit.MILLISECOND)
    );
    should.not.exist(DateTime.parse('2000-05').sameAs(Date.parse('2000-05'), DateTime.Unit.SECOND));
    should.not.exist(DateTime.parse('2000-05').sameAs(Date.parse('2000-05'), DateTime.Unit.MINUTE));
    should.not.exist(DateTime.parse('2000-05').sameAs(Date.parse('2000-05'), DateTime.Unit.HOUR));
    should.not.exist(DateTime.parse('2000-05').sameAs(Date.parse('2000-05'), DateTime.Unit.DAY));
    DateTime.parse('2000-05').sameAs(Date.parse('2000-05'), DateTime.Unit.MONTH).should.be.true();
    DateTime.parse('2000-05').sameAs(Date.parse('2000-05'), DateTime.Unit.YEAR).should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(Date.parse('2000-06')).should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(Date.parse('2000-06'), DateTime.Unit.MILLISECOND)
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(Date.parse('2000-06'), DateTime.Unit.SECOND)
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(Date.parse('2000-06'), DateTime.Unit.MINUTE)
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(Date.parse('2000-06'), DateTime.Unit.HOUR)
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(Date.parse('2000-06'), DateTime.Unit.DAY)
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(Date.parse('2000-06'), DateTime.Unit.MONTH)
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(Date.parse('2000-06'), DateTime.Unit.YEAR)
      .should.be.true();
    DateTime.parse('2000-06').sameAs(Date.parse('2000-05-15')).should.be.false();
    DateTime.parse('2000-06')
      .sameAs(Date.parse('2000-05-15'), DateTime.Unit.MILLISECOND)
      .should.be.false();
    DateTime.parse('2000-06')
      .sameAs(Date.parse('2000-05-15'), DateTime.Unit.SECOND)
      .should.be.false();
    DateTime.parse('2000-06')
      .sameAs(Date.parse('2000-05-15'), DateTime.Unit.MINUTE)
      .should.be.false();
    DateTime.parse('2000-06')
      .sameAs(Date.parse('2000-05-15'), DateTime.Unit.HOUR)
      .should.be.false();
    DateTime.parse('2000-06').sameAs(Date.parse('2000-05-15'), DateTime.Unit.DAY).should.be.false();
    DateTime.parse('2000-06')
      .sameAs(Date.parse('2000-05-15'), DateTime.Unit.MONTH)
      .should.be.false();
    DateTime.parse('2000-06').sameAs(Date.parse('2000-05-15'), DateTime.Unit.YEAR).should.be.true();
    DateTime.parse('2000-05').sameAs(Date.parse('2000-06')).should.be.false();
    DateTime.parse('2000-05')
      .sameAs(Date.parse('2000-06'), DateTime.Unit.MILLISECOND)
      .should.be.false();
    DateTime.parse('2000-05').sameAs(Date.parse('2000-06'), DateTime.Unit.SECOND).should.be.false();
    DateTime.parse('2000-05').sameAs(Date.parse('2000-06'), DateTime.Unit.MINUTE).should.be.false();
    DateTime.parse('2000-05').sameAs(Date.parse('2000-06'), DateTime.Unit.HOUR).should.be.false();
    DateTime.parse('2000-05').sameAs(Date.parse('2000-06'), DateTime.Unit.DAY).should.be.false();
    DateTime.parse('2000-05').sameAs(Date.parse('2000-06'), DateTime.Unit.MONTH).should.be.false();
    DateTime.parse('2000-05').sameAs(Date.parse('2000-06'), DateTime.Unit.YEAR).should.be.true();
  });

  it('should handle imprecision correctly with missing months', () => {
    should.not.exist(DateTime.parse('2000-05-15T12:35:45.123').sameAs(Date.parse('2000')));
    should.not.exist(
      DateTime.parse('2000-05-15T12:35:45.123').sameAs(
        Date.parse('2000'),
        DateTime.Unit.MILLISECOND
      )
    );
    should.not.exist(
      DateTime.parse('2000-05-15T12:35:45.123').sameAs(Date.parse('2000'), DateTime.Unit.SECOND)
    );
    should.not.exist(
      DateTime.parse('2000-05-15T12:35:45.123').sameAs(Date.parse('2000'), DateTime.Unit.MINUTE)
    );
    should.not.exist(
      DateTime.parse('2000-05-15T12:35:45.123').sameAs(Date.parse('2000'), DateTime.Unit.HOUR)
    );
    should.not.exist(
      DateTime.parse('2000-05-15T12:35:45.123').sameAs(Date.parse('2000'), DateTime.Unit.DAY)
    );
    should.not.exist(
      DateTime.parse('2000-05-15T12:35:45.123').sameAs(Date.parse('2000'), DateTime.Unit.MONTH)
    );
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(Date.parse('2000'), DateTime.Unit.YEAR)
      .should.be.true();
    should.not.exist(DateTime.parse('2000').sameAs(Date.parse('2000-05-15')));
    should.not.exist(
      DateTime.parse('2000').sameAs(Date.parse('2000-05-15'), DateTime.Unit.MILLISECOND)
    );
    should.not.exist(DateTime.parse('2000').sameAs(Date.parse('2000-05-15'), DateTime.Unit.SECOND));
    should.not.exist(DateTime.parse('2000').sameAs(Date.parse('2000-05-15'), DateTime.Unit.MINUTE));
    should.not.exist(DateTime.parse('2000').sameAs(Date.parse('2000-05-15'), DateTime.Unit.HOUR));
    should.not.exist(DateTime.parse('2000').sameAs(Date.parse('2000-05-15'), DateTime.Unit.DAY));
    should.not.exist(DateTime.parse('2000').sameAs(Date.parse('2000-05-15'), DateTime.Unit.MONTH));
    DateTime.parse('2000').sameAs(Date.parse('2000-05-15'), DateTime.Unit.YEAR).should.be.true();
    DateTime.parse('2000').sameAs(Date.parse('2000')).should.be.true();
    should.not.exist(DateTime.parse('2000').sameAs(Date.parse('2000'), DateTime.Unit.MILLISECOND));
    should.not.exist(DateTime.parse('2000').sameAs(Date.parse('2000'), DateTime.Unit.SECOND));
    should.not.exist(DateTime.parse('2000').sameAs(Date.parse('2000'), DateTime.Unit.MINUTE));
    should.not.exist(DateTime.parse('2000').sameAs(Date.parse('2000'), DateTime.Unit.HOUR));
    should.not.exist(DateTime.parse('2000').sameAs(Date.parse('2000'), DateTime.Unit.DAY));
    should.not.exist(DateTime.parse('2000').sameAs(Date.parse('2000'), DateTime.Unit.MONTH));
    DateTime.parse('2000').sameAs(Date.parse('2000'), DateTime.Unit.YEAR).should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(Date.parse('2001')).should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(Date.parse('2001'), DateTime.Unit.MILLISECOND)
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(Date.parse('2001'), DateTime.Unit.SECOND)
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(Date.parse('2001'), DateTime.Unit.MINUTE)
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(Date.parse('2001'), DateTime.Unit.HOUR)
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(Date.parse('2001'), DateTime.Unit.DAY)
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(Date.parse('2001'), DateTime.Unit.MONTH)
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(Date.parse('2001'), DateTime.Unit.YEAR)
      .should.be.false();
    DateTime.parse('2001').sameAs(Date.parse('2000-05-15')).should.be.false();
    DateTime.parse('2001')
      .sameAs(Date.parse('2000-05-15'), DateTime.Unit.MILLISECOND)
      .should.be.false();
    DateTime.parse('2001').sameAs(Date.parse('2000-05-15'), DateTime.Unit.SECOND).should.be.false();
    DateTime.parse('2001').sameAs(Date.parse('2000-05-15'), DateTime.Unit.MINUTE).should.be.false();
    DateTime.parse('2001').sameAs(Date.parse('2000-05-15'), DateTime.Unit.HOUR).should.be.false();
    DateTime.parse('2001').sameAs(Date.parse('2000-05-15'), DateTime.Unit.DAY).should.be.false();
    DateTime.parse('2001').sameAs(Date.parse('2000-05-15'), DateTime.Unit.MONTH).should.be.false();
    DateTime.parse('2001').sameAs(Date.parse('2000-05-15'), DateTime.Unit.YEAR).should.be.false();
    DateTime.parse('2000').sameAs(Date.parse('2001')).should.be.false();
    DateTime.parse('2000').sameAs(Date.parse('2001'), DateTime.Unit.MILLISECOND).should.be.false();
    DateTime.parse('2000').sameAs(Date.parse('2001'), DateTime.Unit.SECOND).should.be.false();
    DateTime.parse('2000').sameAs(Date.parse('2001'), DateTime.Unit.MINUTE).should.be.false();
    DateTime.parse('2000').sameAs(Date.parse('2001'), DateTime.Unit.HOUR).should.be.false();
    DateTime.parse('2000').sameAs(Date.parse('2001'), DateTime.Unit.DAY).should.be.false();
    DateTime.parse('2000').sameAs(Date.parse('2001'), DateTime.Unit.MONTH).should.be.false();
    DateTime.parse('2000').sameAs(Date.parse('2001'), DateTime.Unit.YEAR).should.be.false();
  });

  it('should handle potentially non-obvious cases of date to datetime conversion', () => {
    should.not.exist(DateTime.parse('2000-01-01').sameAs(Date.parse('2000-01-01')));
    DateTime.parse('2000-01').sameAs(Date.parse('2000-01')).should.be.true();
  });
});

describe('DateTime.before with implicit conversion of second variable', () => {
  it('should use year precision when requested', () => {
    DateTime.parse('2000-01-01T00:00:00.0+00')
      .before(Date.parse('2000-06-01'), DateTime.Unit.YEAR)
      .should.be.false();
    DateTime.parse('1999-12-31T23:59:59.999+00')
      .before(Date.parse('2000-06-01'), DateTime.Unit.YEAR)
      .should.be.true();
  });

  it('should use month precision when requested', () => {
    DateTime.parse('2000-02-01T00:00:00.0+00')
      .before(Date.parse('2000-02-15'), DateTime.Unit.MONTH)
      .should.be.false();
    DateTime.parse('2000-01-31T23:59:59.999+00')
      .before(Date.parse('2000-02-15'), DateTime.Unit.MONTH)
      .should.be.true();
  });

  it('should use day precision when requested', () => {
    DateTime.parse('2000-02-15T00:00:00.0+00')
      .before(Date.parse('2000-02-15'), DateTime.Unit.DAY)
      .should.be.false();
    DateTime.parse('2000-02-14T23:59:59.999+00')
      .before(Date.parse('2000-02-15'), DateTime.Unit.DAY)
      .should.be.true();
  });

  it('should return false in cases where a is b but there are unknown values with matching precision', () => {
    DateTime.parse('2000-01').before(Date.parse('2000-01')).should.be.false();
    DateTime.parse('2000').before(Date.parse('2000')).should.be.false();
  });

  it('should return null in cases where a has unknown values that prevent deterministic result', () => {
    should.not.exist(DateTime.parse('2000-01-01T00:00:00').before(Date.parse('2000-01-01')));
    should.not.exist(DateTime.parse('2000-01-01T00:00').before(Date.parse('2000-01-01')));
    should.not.exist(DateTime.parse('2000-01-01T00').before(Date.parse('2000-01-01')));
    should.not.exist(DateTime.parse('2000-01').before(Date.parse('2000-01-01')));
    should.not.exist(DateTime.parse('2000').before(Date.parse('2000-01-01')));
  });

  it('should return null in cases where b has unknown values that prevent deterministic result', () => {
    should.not.exist(DateTime.parse('2000-01-01T00:00:00.001').before(Date.parse('2000-01')));
    should.not.exist(DateTime.parse('2000-01-01T00:00:00.001').before(Date.parse('2000')));
  });

  it('should accept cases where a has unknown values but is still deterministicly before b', () => {
    DateTime.parse('2000-01-01T00:00:00').before(Date.parse('2000-01-02')).should.be.true();
    DateTime.parse('2000-01-01T00:00').before(Date.parse('2000-01-02')).should.be.true();
    DateTime.parse('2000-01-01T00').before(Date.parse('2000-01-02')).should.be.true();
    DateTime.parse('2000-01-01').before(Date.parse('2000-01-02')).should.be.true();
    DateTime.parse('2000-01').before(Date.parse('2000-02-01')).should.be.true();
    DateTime.parse('2000').before(Date.parse('2001-01-01')).should.be.true();
  });

  it('should accept cases where b has unknown values but a is still deterministicly before b', () => {
    DateTime.parse('2000-01-01T00:00:00.0').before(Date.parse('2000-01-02')).should.be.true();
    DateTime.parse('2000-01-01T00:00:00.0').before(Date.parse('2000-02')).should.be.true();
    DateTime.parse('2000-01-01T00:00:00.0').before(Date.parse('2001')).should.be.true();
  });

  it('should reject cases where a has unknown values but is still deterministicly after b', () => {
    DateTime.parse('2000-01-01T00:00:01').before(Date.parse('1999-01-01')).should.be.false();
    DateTime.parse('2000-01-01T00:01').before(Date.parse('1999-01-01')).should.be.false();
    DateTime.parse('2000-01-01T01').before(Date.parse('1999-01-01')).should.be.false();
    DateTime.parse('2000-01-02').before(Date.parse('2000-01-01')).should.be.false();
    DateTime.parse('2000-02').before(Date.parse('2000-01-01')).should.be.false();
    DateTime.parse('2001').before(Date.parse('2000-01-01')).should.be.false();
  });

  it('should reject cases where b has unknown values but a is still deterministicly after b', () => {
    DateTime.parse('2000-01-02T00:00:00.0').before(Date.parse('2000-01-01')).should.be.false();
    DateTime.parse('2000-02-01T00:00:00.0').before(Date.parse('2000-01')).should.be.false();
    DateTime.parse('2001-01-01T00:00:00.0').before(Date.parse('2000')).should.be.false();
  });
});

describe('DateTime.sameOrBefore with implicit conversion of second variable', () => {
  it('should use year precision when requested', () => {
    DateTime.parse('2000-06-01T00:00:00.0+00')
      .sameOrBefore(Date.parse('2000-01-01'), DateTime.Unit.YEAR)
      .should.be.true();
    DateTime.parse('2000-06-01T00:00:00.0+00')
      .sameOrBefore(Date.parse('1999-12-31'), DateTime.Unit.YEAR)
      .should.be.false();
  });

  it('should use month precision when requested', () => {
    DateTime.parse('2000-02-15T00:00:00.0+00')
      .sameOrBefore(Date.parse('2000-02-01'), DateTime.Unit.MONTH)
      .should.be.true();
    DateTime.parse('2000-02-15T00:00:00.0+00')
      .sameOrBefore(Date.parse('2000-01-31'), DateTime.Unit.MONTH)
      .should.be.false();
  });

  it('should use day precision when requested', () => {
    DateTime.parse('2000-02-15T12:00:00.0+00')
      .sameOrBefore(Date.parse('2000-02-15'), DateTime.Unit.DAY)
      .should.be.true();
    DateTime.parse('2000-02-15T12:00:00.0+00')
      .sameOrBefore(Date.parse('2000-02-14'), DateTime.Unit.DAY)
      .should.be.false();
  });

  it('should return true in cases where a is b but there are unknown values in a and b with matching precision', () => {
    DateTime.parse('2000-01').sameOrBefore(Date.parse('2000-01')).should.be.true();
    DateTime.parse('2000').sameOrBefore(Date.parse('2000')).should.be.true();
  });

  it('should return null in cases where a has unknown values that prevent deterministic result', () => {
    should.not.exist(DateTime.parse('2000-01-01T00:00:00').sameOrBefore(Date.parse('2000-01-01')));
    should.not.exist(DateTime.parse('2000-01-01T00:00').sameOrBefore(Date.parse('2000-01-01')));
    should.not.exist(DateTime.parse('2000-01-01T00').sameOrBefore(Date.parse('2000-01-01')));
    // Same precision therefore true.
    should.not.exist(DateTime.parse('2000-01').sameOrBefore(Date.parse('2000-01-01')));
    should.not.exist(DateTime.parse('2000').sameOrBefore(Date.parse('2000-01-01')));
  });

  it('should return null in cases where b has unknown values that prevent deterministic result', () => {
    should.not.exist(DateTime.parse('2000-01-01').sameOrBefore(Date.parse('2000-01-01')));
    should.not.exist(DateTime.parse('2000-01-01T00:00:00.001').sameOrBefore(Date.parse('2000-01')));
    should.not.exist(DateTime.parse('2000-01-01T00:00:00.001').sameOrBefore(Date.parse('2000')));
  });

  it('should accept cases where a has unknown values but is still deterministicly before b', () => {
    DateTime.parse('2000-01-01T00:00:00').sameOrBefore(Date.parse('2000-01-02')).should.be.true();
    DateTime.parse('2000-01-01T00:00').sameOrBefore(Date.parse('2000-01-02')).should.be.true();
    DateTime.parse('2000-01-01T00').sameOrBefore(Date.parse('2000-01-02')).should.be.true();
    DateTime.parse('2000-01-01').sameOrBefore(Date.parse('2000-01-02')).should.be.true();
    DateTime.parse('2000-01').sameOrBefore(Date.parse('2000-02-01')).should.be.true();
    DateTime.parse('2000').sameOrBefore(Date.parse('2001-01-01')).should.be.true();
  });

  it('should accept cases where a has unknown values but is still deterministicly before or same as b', () => {
    DateTime.parse('2000-01-01T00:00:00').sameOrBefore(Date.parse('2000-01-02')).should.be.true();
    DateTime.parse('2000-01-01T00:00').sameOrBefore(Date.parse('2000-01-02')).should.be.true();
    DateTime.parse('2000-01-01T00').sameOrBefore(Date.parse('2000-01-02')).should.be.true();
    DateTime.parse('2000-01-01').sameOrBefore(Date.parse('2000-01-02')).should.be.true();
    DateTime.parse('2000-01').sameOrBefore(Date.parse('2000-02-01')).should.be.true();
    DateTime.parse('2000').sameOrBefore(Date.parse('2001-12-31')).should.be.true();
  });

  it('should accept cases where b has unknown values but a is still deterministicly before b', () => {
    DateTime.parse('2000-01-01T23:59:59.999')
      .sameOrBefore(Date.parse('2000-01-02'))
      .should.be.true();
    DateTime.parse('2000-01-31T23:59:59.999').sameOrBefore(Date.parse('2000-02')).should.be.true();
    DateTime.parse('2000-12-31T23:59:59.999').sameOrBefore(Date.parse('2001')).should.be.true();
  });

  it('should return null for cases where b has unknown values but a is not deterministicly before or same as b', () => {
    should.not.exist(DateTime.parse('2000-01-01T00:00:00.0').sameOrBefore(Date.parse('2000-01')));
    should.not.exist(DateTime.parse('2000-01-01T00:00:00.0').sameOrBefore(Date.parse('2000')));
  });

  it('should reject cases where a has unknown values but is still deterministicly after b', () => {
    DateTime.parse('2000-01-01T00:00:01').sameOrBefore(Date.parse('2000-01-01')).should.be.false();
    DateTime.parse('2000-01-02T00:01').sameOrBefore(Date.parse('2000-01-01')).should.be.false();
    DateTime.parse('2000-01-02T01').sameOrBefore(Date.parse('2000-01-01')).should.be.false();
    DateTime.parse('2000-01-02').sameOrBefore(Date.parse('2000-01-01')).should.be.false();
    DateTime.parse('2000-02').sameOrBefore(Date.parse('2000-01-31')).should.be.false();
    DateTime.parse('2001').sameOrBefore(Date.parse('2000-12-31')).should.be.false();
  });

  it('should reject cases where b has unknown values but a is still deterministicly after b', () => {
    DateTime.parse('2000-01-02T00:00:00').sameOrBefore(Date.parse('2000-01-01')).should.be.false();
    DateTime.parse('2000-02-01T00:00:00').sameOrBefore(Date.parse('2000-01')).should.be.false();
    DateTime.parse('2001-01-01T00:00:00').sameOrBefore(Date.parse('2000')).should.be.false();
  });

  it('should handle potentially non-obvious cases of date to datetime conversion', () => {
    should.not.exist(DateTime.parse('2000-01-01').sameOrBefore(Date.parse('2000-01-01')));
    DateTime.parse('2000-01').sameOrBefore(Date.parse('2000-01')).should.be.true();
  });
});

describe('DateTime.after with implicit conversion of second variable', () => {
  it('should use year precision when requested', () => {
    DateTime.parse('2000-06-01T00:00:00.0+00')
      .after(Date.parse('2000-01-01'), DateTime.Unit.YEAR)
      .should.be.false();
    DateTime.parse('2000-06-01T00:00:00.0+00')
      .after(Date.parse('1999-12-31'), DateTime.Unit.YEAR)
      .should.be.true();
  });

  it('should use month precision when requested', () => {
    DateTime.parse('2000-02-15T00:00:00.0+00')
      .after(Date.parse('2000-02-01'), DateTime.Unit.MONTH)
      .should.be.false();
    DateTime.parse('2000-02-15T00:00:00.0+00')
      .after(Date.parse('2000-01-31'), DateTime.Unit.MONTH)
      .should.be.true();
  });

  it('should use day precision when requested', () => {
    DateTime.parse('2000-02-15T12:00:00.0+00')
      .after(Date.parse('2000-02-15'), DateTime.Unit.DAY)
      .should.be.false();
    DateTime.parse('2000-02-15T12:00:00.0+00')
      .after(Date.parse('2000-02-14'), DateTime.Unit.DAY)
      .should.be.true();
  });

  it('should return true in cases where a is b but there are unknown values but precision matches', () => {
    DateTime.parse('2000-01').after(Date.parse('2000-01')).should.be.false();
    DateTime.parse('2000').after(Date.parse('2000')).should.be.false();
  });

  it('should handle cases where a has unknown values that prevent deterministic result', () => {
    should.not.exist(DateTime.parse('2000-01-01').after(Date.parse('2000-01-01')));
    should.not.exist(DateTime.parse('2000-01-01T00:00:00').after(Date.parse('2000-01-01')));
    should.not.exist(DateTime.parse('2000-01-01T00:00').after(Date.parse('2000-01-01')));
    should.not.exist(DateTime.parse('2000-01-01T00').after(Date.parse('2000-01-01')));
    // matching precisions should be false
    should.not.exist(DateTime.parse('2000-01').after(Date.parse('2000-01-01')));
    should.not.exist(DateTime.parse('2000').after(Date.parse('2000-01-01')));
  });

  it('should return null in cases where b has unknown values that prevent deterministic result', () => {
    should.not.exist(DateTime.parse('2000-01-01').after(Date.parse('2000-01-01')));
    should.not.exist(DateTime.parse('2000-01-01T00:00:00.001').after(Date.parse('2000-01')));
    should.not.exist(DateTime.parse('2000-01-01T00:00:00.001').after(Date.parse('2000')));
  });

  it('should accept cases where a has unknown values but is still deterministicly after b', () => {
    DateTime.parse('2000-01-01T00:00:01').after(Date.parse('2000-01-01')).should.be.true();
    DateTime.parse('2000-01-02T00:01').after(Date.parse('2000-01-01')).should.be.true();
    DateTime.parse('2000-01-02T01').after(Date.parse('2000-01-01')).should.be.true();
    DateTime.parse('2000-01-02').after(Date.parse('2000-01-01')).should.be.true();
    DateTime.parse('2000-02').after(Date.parse('2000-01-01')).should.be.true();
    DateTime.parse('2001').after(Date.parse('2000-01-01')).should.be.true();
  });

  it('should accept cases where b has unknown values but a is still deterministicly after b', () => {
    DateTime.parse('2000-01-02T00:00:00.0').after(Date.parse('2000-01-01')).should.be.true();
    DateTime.parse('2000-02-01T00:00:00.0').after(Date.parse('2000-01')).should.be.true();
    DateTime.parse('2001-01-01T00:00:00.0').after(Date.parse('2000')).should.be.true();
  });

  it('should reject cases where a has unknown values but is still deterministicly before b', () => {
    DateTime.parse('2000-01-01T00:00:00').after(Date.parse('2000-01-02')).should.be.false();
    DateTime.parse('2000-01-01T00:00').after(Date.parse('2000-01-02')).should.be.false();
    DateTime.parse('2000-01-01T00').after(Date.parse('2000-01-02')).should.be.false();
    DateTime.parse('2000-01-01').after(Date.parse('2000-01-02')).should.be.false();
    DateTime.parse('2000-01').after(Date.parse('2000-02-01')).should.be.false();
    DateTime.parse('2000').after(Date.parse('2001-01-01')).should.be.false();
  });

  it('should reject cases where b has unknown values but a is still deterministicly before b', () => {
    DateTime.parse('2000-01-01T00:00:00.0').after(Date.parse('2000-01-02')).should.be.false();
    DateTime.parse('2000-01-01T00:00:00.0').after(Date.parse('2000-02')).should.be.false();
    DateTime.parse('2000-01-01T00:00:00.0').after(Date.parse('2001')).should.be.false();
  });
});

describe('DateTime.sameOrAfter with implicit conversion of second variable', () => {
  it('should use year precision when requested', () => {
    DateTime.parse('2000-01-01T00:00:00.0+00')
      .sameOrAfter(Date.parse('2000-06-01'), DateTime.Unit.YEAR)
      .should.be.true();
    DateTime.parse('1999-12-31T23:59:59.999+00')
      .sameOrAfter(Date.parse('2000-06-01'), DateTime.Unit.YEAR)
      .should.be.false();
  });

  it('should use month precision when requested', () => {
    DateTime.parse('2000-02-01T00:00:00.0+00')
      .sameOrAfter(Date.parse('2000-02-15'), DateTime.Unit.MONTH)
      .should.be.true();
    DateTime.parse('2000-01-31T23:59:59.999+00')
      .sameOrAfter(Date.parse('2000-02-15'), DateTime.Unit.MONTH)
      .should.be.false();
  });

  it('should use day precision when requested', () => {
    DateTime.parse('2000-02-15T00:00:00.0+00')
      .sameOrAfter(DateTime.parse('2000-02-15T12:00:00.0+00'))
      .should.be.false();
    DateTime.parse('2000-02-15T00:00:00.0+00')
      .sameOrAfter(DateTime.parse('2000-02-15T12:00:00.0+00'), DateTime.Unit.DAY)
      .should.be.true();
    DateTime.parse('2000-02-14T23:59:59.999+00')
      .sameOrAfter(DateTime.parse('2000-02-15T12:00:00.0+00'), DateTime.Unit.DAY)
      .should.be.false();
    DateTime.parse('2000-02-15T00:00:00.0+00')
      .sameOrAfter(Date.parse('2000-02-15'), DateTime.Unit.DAY)
      .should.be.true();
    DateTime.parse('2000-02-14T23:59:59.999+00')
      .sameOrAfter(Date.parse('2000-02-15'), DateTime.Unit.DAY)
      .should.be.false();
  });

  it('should handle cases where a is b but there and b have unknown values', () => {
    should.not.exist(DateTime.parse('2000-01-01T00:00:00').sameOrAfter(Date.parse('2000-01-01')));
    should.not.exist(DateTime.parse('2000-01-01T00:00').sameOrAfter(Date.parse('2000-01-01')));
    should.not.exist(DateTime.parse('2000-01-01T00').sameOrAfter(Date.parse('2000-01-01')));
    // matching precision, therefore true
    DateTime.parse('2000-01').sameOrAfter(Date.parse('2000-01')).should.be.true();
    DateTime.parse('2000').sameOrAfter(Date.parse('2000')).should.be.true();
  });

  it('should return null in cases where a has unknown values that prevent deterministic result', () => {
    should.not.exist(DateTime.parse('2000-01-01').sameOrAfter(Date.parse('2000-01-01')));
    should.not.exist(DateTime.parse('2000-01-01T00:00:00').sameOrAfter(Date.parse('2000-01-01')));
    should.not.exist(DateTime.parse('2000-01-01T00:00').sameOrAfter(Date.parse('2000-01-01')));
    should.not.exist(DateTime.parse('2000-01-01T00').sameOrAfter(Date.parse('2000-01-01')));
    // matching precision, therefore true
    should.not.exist(DateTime.parse('2000-01').sameOrAfter(Date.parse('2000-01-31')));
    should.not.exist(DateTime.parse('2000').sameOrAfter(Date.parse('2000-12-31')));
  });

  it('should return null in cases where b has unknown values that prevent deterministic result', () => {
    should.not.exist(DateTime.parse('2000-01-01').sameOrAfter(Date.parse('2000-01-01')));
    should.not.exist(DateTime.parse('2000-01-01T00:00:00.001').sameOrAfter(Date.parse('2000-01')));
    should.not.exist(DateTime.parse('2000-01-01T00:00:00.001').sameOrAfter(Date.parse('2000')));
  });

  it('should accept cases where a has unknown values but is still deterministicly after b', () => {
    DateTime.parse('2000-01-01T00:00:01').sameOrAfter(Date.parse('2000-01-01')).should.be.true();
    DateTime.parse('2000-01-02T00:01').sameOrAfter(Date.parse('2000-01-01')).should.be.true();
    DateTime.parse('2000-01-02T01').sameOrAfter(Date.parse('2000-01-01')).should.be.true();
    DateTime.parse('2000-01-02').sameOrAfter(Date.parse('2000-01-01')).should.be.true();
    DateTime.parse('2000-02').sameOrAfter(Date.parse('2000-01-31')).should.be.true();
    DateTime.parse('2001').sameOrAfter(Date.parse('2000-12-31')).should.be.true();
  });

  it('should accept cases where a has unknown values but is still deterministicly after or same as b', () => {
    DateTime.parse('2000-01-02T00:00:01').sameOrAfter(Date.parse('2000-01-01')).should.be.true();
    DateTime.parse('2000-01-02T00:01').sameOrAfter(Date.parse('2000-01-01')).should.be.true();
    DateTime.parse('2000-01-02T01').sameOrAfter(Date.parse('2000-01-01')).should.be.true();
    DateTime.parse('2000-01-02').sameOrAfter(Date.parse('2000-01-01')).should.be.true();
    DateTime.parse('2000-02').sameOrAfter(Date.parse('2000-01-01')).should.be.true();
    DateTime.parse('2001').sameOrAfter(Date.parse('2000-01-01')).should.be.true();
  });

  it('should accept cases where b has unknown values but a is still deterministicly after or same as b', () => {
    DateTime.parse('2000-01-01T00:00:00.1').sameOrAfter(Date.parse('2000-01-01')).should.be.true();
    DateTime.parse('2000-02-01T00:00:00.0').sameOrAfter(Date.parse('2000-01')).should.be.true();
    DateTime.parse('2001-01-01T00:00:00.0').sameOrAfter(Date.parse('2000')).should.be.true();
  });

  it('should reject cases where b has unknown values but a is not deterministicly same as or after b', () => {
    should.not.exist(DateTime.parse('2000-01-31T23:59:59.999').sameOrAfter(Date.parse('2000-01')));
    should.not.exist(DateTime.parse('2000-12-31T23:59:59.999').sameOrAfter(Date.parse('2000')));
  });

  it('should reject cases where a has unknown values but is still deterministicly before b', () => {
    DateTime.parse('2000-01-01T00:00:00').sameOrAfter(Date.parse('2000-01-02')).should.be.false();
    DateTime.parse('2000-01-01T00:00').sameOrAfter(Date.parse('2000-01-02')).should.be.false();
    DateTime.parse('2000-01-01T00').sameOrAfter(Date.parse('2000-01-02')).should.be.false();
    DateTime.parse('2000-01-01').sameOrAfter(Date.parse('2000-01-02')).should.be.false();
    DateTime.parse('2000-01').sameOrAfter(Date.parse('2000-02-01')).should.be.false();
    DateTime.parse('2000').sameOrAfter(Date.parse('2001-01-01')).should.be.false();
  });

  it('should reject cases where b has unknown values but a is still deterministicly before b', () => {
    DateTime.parse('2000-01-01T23:59:59.999')
      .sameOrAfter(Date.parse('2000-01-02'))
      .should.be.false();
    DateTime.parse('2000-01-31T23:59:59.999').sameOrAfter(Date.parse('2000-02')).should.be.false();
    DateTime.parse('2000-12-31T23:59:59.999').sameOrAfter(Date.parse('2001')).should.be.false();
  });

  it('should handle potentially non-obvious cases of date to datetime conversion', () => {
    should.not.exist(DateTime.parse('2000-01-01').sameOrAfter(Date.parse('2000-01-01')));
    DateTime.parse('2000-01').sameOrAfter(Date.parse('2000-01')).should.be.true();
  });
});
