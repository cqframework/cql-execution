import should from 'should';
import { CodeSystem, Concept, CQLValueSet } from '../../src/datatypes/clinical';
import { Code, Date, DateTime } from '../../src/datatypes/datatypes';
import { Uncertainty } from '../../src/datatypes/uncertainty';
import { equals } from '../../src/util/comparison';

describe('Uncertainty', () => {
  it('should contruct uncertainties with correct properties', () => {
    const oneToFive = new Uncertainty(1, 5);
    oneToFive.low.should.equal(1);
    oneToFive.high.should.equal(5);

    const oneToPInf = new Uncertainty(1, null);
    oneToPInf.low.should.equal(1);
    should(oneToPInf.high).be.null();

    const nInfToFive = new Uncertainty(null, 5);
    should(nInfToFive.low).be.null();
    nInfToFive.high.should.equal(5);

    const two = new Uncertainty(2);
    two.low.should.equal(2);
    two.high.should.equal(2);

    const everything = new Uncertainty();
    should(everything.low).be.null();
    should(everything.high).be.null();

    const differentTypes = new Uncertainty(1, '1');
    differentTypes.low.should.eql(1);
    differentTypes.high.should.eql('1');
  });

  it('should not use nonenumerable values in uncertainties', () => {
    const code = new Code('ABC', '5.4.3.2.1', '1');
    const codedLow = new Uncertainty(code, 1);
    should(codedLow.low).be.null();
    should(codedLow.high).be.null();

    const codedHigh = new Uncertainty(1, code);
    should(codedHigh.low).be.null();
    should(codedHigh.high).be.null();

    const concept = new Concept([new Code('foo', 'http://foo.org')], 'Foo');
    const conceptLow = new Uncertainty(concept, 1);
    should(conceptLow.low).be.null();
    should(conceptLow.high).be.null();

    const conceptHigh = new Uncertainty(1, concept);
    should(conceptHigh.low).be.null();
    should(conceptHigh.high).be.null();

    const valueSet = new CQLValueSet('1.2.3.4.5', '1', 'name', [new CodeSystem('systemId')]);
    const valueSetLow = new Uncertainty(valueSet, 1);
    should(valueSetLow.low).be.null();
    should(valueSetLow.high).be.null();

    const valueSetHigh = new Uncertainty(1, valueSet);
    should(valueSetHigh.low).be.null();
    should(valueSetHigh.high).be.null();
  });

  it('should set high to low when high is undefined', () => {
    const fiveToOne = new Uncertainty(5, undefined);
    fiveToOne.low.should.equal(5);
    fiveToOne.high.should.equal(5);
  });

  it('should swap low and high when constructed in wrong order', () => {
    const fiveToOne = new Uncertainty(5, 1);
    fiveToOne.low.should.equal(1);
    fiveToOne.high.should.equal(5);
  });

  it('should contruct uncertainties with correct properties 2', () => {
    const oneToFive = new Uncertainty(1, 5);
    oneToFive.low.should.equal(1);
    oneToFive.high.should.equal(5);
  });

  it('should detect zero-width intervals as points', () => {
    new Uncertainty(2).isPoint().should.be.true();
    new Uncertainty(2, 2).isPoint().should.be.true();
    new Uncertainty(null, null).isPoint().should.be.false();
    new Uncertainty(2, null).isPoint().should.be.false();
    new Uncertainty(null, 2).isPoint().should.be.false();
    new Uncertainty(1, 2).isPoint().should.be.false();
    new Uncertainty().isPoint().should.be.false();
    new Uncertainty(1, '1').isPoint().should.be.false();
  });

  it('should properly calculate equality', () => {
    // Equality
    new Uncertainty(1, 1).equals(new Uncertainty(1, 1)).should.be.true();

    // <
    new Uncertainty(null, 1).equals(new Uncertainty(2, 2)).should.be.false();
    new Uncertainty(null, 1).equals(new Uncertainty(2, 3)).should.be.false();
    new Uncertainty(null, 1).equals(new Uncertainty(2, null)).should.be.false();
    new Uncertainty(0, 1).equals(new Uncertainty(2, 2)).should.be.false();
    new Uncertainty(0, 1).equals(new Uncertainty(2, 3)).should.be.false();
    new Uncertainty(0, 1).equals(new Uncertainty(2, null)).should.be.false();
    new Uncertainty(1, 1).equals(new Uncertainty(2, 2)).should.be.false();
    new Uncertainty(1, 1).equals(new Uncertainty(2, 3)).should.be.false();
    new Uncertainty(1, 1).equals(new Uncertainty(2, null)).should.be.false();

    // <=
    should.not.exist(new Uncertainty(null, 1).equals(new Uncertainty(1, 1)));
    should.not.exist(new Uncertainty(null, 1).equals(new Uncertainty(1, 2)));
    should.not.exist(new Uncertainty(null, 1).equals(new Uncertainty(1, null)));
    should.not.exist(new Uncertainty(0, 1).equals(new Uncertainty(1, 1)));
    should.not.exist(new Uncertainty(0, 1).equals(new Uncertainty(1, 2)));
    should.not.exist(new Uncertainty(0, 1).equals(new Uncertainty(1, null)));
    should.not.exist(new Uncertainty(1, 1).equals(new Uncertainty(1, 2)));
    should.not.exist(new Uncertainty(1, 1).equals(new Uncertainty(1, null)));

    // overlaps
    should.not.exist(new Uncertainty(null, null).equals(new Uncertainty(null, null)));
    should.not.exist(new Uncertainty(null, 10).equals(new Uncertainty(5, 5)));
    should.not.exist(new Uncertainty(null, 10).equals(new Uncertainty(5, 10)));
    should.not.exist(new Uncertainty(null, 10).equals(new Uncertainty(5, 15)));
    should.not.exist(new Uncertainty(null, 10).equals(new Uncertainty(5, null)));
    should.not.exist(new Uncertainty(null, 10).equals(new Uncertainty(0, 5)));
    should.not.exist(new Uncertainty(null, 10).equals(new Uncertainty(null, 5)));
    should.not.exist(new Uncertainty(0, 10).equals(new Uncertainty(5, 5)));
    should.not.exist(new Uncertainty(0, 10).equals(new Uncertainty(5, 10)));
    should.not.exist(new Uncertainty(0, 10).equals(new Uncertainty(5, 15)));
    should.not.exist(new Uncertainty(0, 10).equals(new Uncertainty(5, null)));
    should.not.exist(new Uncertainty(0, 10).equals(new Uncertainty(0, 5)));
    should.not.exist(new Uncertainty(0, 10).equals(new Uncertainty(null, 5)));
    should.not.exist(new Uncertainty(10, 10).equals(new Uncertainty(5, 15)));
    should.not.exist(new Uncertainty(10, 10).equals(new Uncertainty(5, null)));
    should.not.exist(new Uncertainty(10, null).equals(new Uncertainty(5, 10)));
    should.not.exist(new Uncertainty(10, null).equals(new Uncertainty(5, 15)));
    should.not.exist(new Uncertainty(10, null).equals(new Uncertainty(5, null)));

    // >=
    should.not.exist(new Uncertainty(1, null).equals(new Uncertainty(null, 1)));
    should.not.exist(new Uncertainty(1, null).equals(new Uncertainty(0, 1)));
    should.not.exist(new Uncertainty(1, null).equals(new Uncertainty(1, 1)));
    should.not.exist(new Uncertainty(1, 2).equals(new Uncertainty(null, 1)));
    should.not.exist(new Uncertainty(1, 2).equals(new Uncertainty(0, 1)));
    should.not.exist(new Uncertainty(1, 2).equals(new Uncertainty(1, 1)));
    should.not.exist(new Uncertainty(1, 1).equals(new Uncertainty(null, 1)));
    should.not.exist(new Uncertainty(1, 1).equals(new Uncertainty(0, 1)));

    // >
    new Uncertainty(2, 2).equals(new Uncertainty(null, 1)).should.be.false();
    new Uncertainty(2, 3).equals(new Uncertainty(null, 1)).should.be.false();
    new Uncertainty(2, null).equals(new Uncertainty(null, 1)).should.be.false();
    new Uncertainty(2, 2).equals(new Uncertainty(0, 1)).should.be.false();
    new Uncertainty(2, 3).equals(new Uncertainty(0, 1)).should.be.false();
    new Uncertainty(2, null).equals(new Uncertainty(0, 1)).should.be.false();
    new Uncertainty(2, 2).equals(new Uncertainty(1, 1)).should.be.false();
    new Uncertainty(2, 3).equals(new Uncertainty(1, 1)).should.be.false();
    new Uncertainty(2, null).equals(new Uncertainty(1, 1)).should.be.false();

    // date/datetime
    new Uncertainty(new Date(2022, 1, 1))
      .equals(new Uncertainty(new DateTime(2022, 1, 1)))
      .should.be.false();
    new Uncertainty(new DateTime(2022, 1, 1))
      .equals(new Uncertainty(new Date(2022, 1, 1)))
      .should.be.false();
  });

  it('should properly calculate sameness for point uncertainties', () => {
    new Uncertainty(1).sameAs(1).should.be.true();
    new Uncertainty(1).sameAs(new Uncertainty(1)).should.be.true();
    new Uncertainty(1).sameAs(2).should.be.false();
    new Uncertainty(1).sameAs('1').should.be.false();

    const first = DateTime.parse('2022-01-01T12:30:15.123');
    const second = DateTime.parse('2022-01-01T12:30:15.456');
    new Uncertainty(first).sameAs(second, DateTime.Unit.MILLISECOND).should.be.false();
    new Uncertainty(first).sameAs(second, DateTime.Unit.SECOND).should.be.true();
    new Uncertainty(first)
      .sameAs(new Uncertainty(second), DateTime.Unit.MILLISECOND)
      .should.be.false();
    new Uncertainty(first).sameAs(new Uncertainty(second), DateTime.Unit.SECOND).should.be.true();

    new Uncertainty(new Date(2022, 1, 1)).sameAs(new DateTime(2022, 1, 1)).should.be.false();
    new Uncertainty(new DateTime(2022, 1, 1)).sameAs(new Date(2022, 1, 1)).should.be.false();
  });

  it('should handle imprecise DateTimes', () => {
    const precise = new Uncertainty(DateTime.parse('2022-01-01T12:30:15.123'));
    const imprecise = new Uncertainty(DateTime.parse('2022-01-01T12:30'));
    const sameImprecise = new Uncertainty(DateTime.parse('2022-01-01T12:30'));
    const laterImprecise = new Uncertainty(DateTime.parse('2022-01-01T12:31'));

    should.not.exist(precise.sameAs(imprecise));
    should.not.exist(precise.sameAs(imprecise, DateTime.Unit.SECOND));
    precise.sameAs(imprecise, DateTime.Unit.MINUTE).should.be.true();
    imprecise.sameAs(sameImprecise).should.be.true();
    should.not.exist(imprecise.sameAs(sameImprecise, DateTime.Unit.SECOND));
    imprecise.sameAs(sameImprecise, DateTime.Unit.MINUTE).should.be.true();

    imprecise.lessThan(laterImprecise, DateTime.Unit.SECOND).should.be.true();
    laterImprecise.greaterThan(imprecise, DateTime.Unit.SECOND).should.be.true();
    imprecise.lessThanOrEquals(laterImprecise, DateTime.Unit.SECOND).should.be.true();
    imprecise.greaterThanOrEquals(laterImprecise, DateTime.Unit.SECOND).should.be.false();
  });

  it('should properly calculate sameness for non-point uncertainties', () => {
    new Uncertainty(1, 2).sameAs(new Uncertainty(3, 4)).should.be.false();
    should.not.exist(new Uncertainty(1, 3).sameAs(new Uncertainty(2, 4)));
    new Uncertainty(1, 2).sameAs(3).should.be.false();
    should.not.exist(new Uncertainty(1, 3).sameAs(2));

    const first = new Uncertainty(
      DateTime.parse('2022-01-01T12:30:15.123'),
      DateTime.parse('2022-01-01T12:30:15.124')
    );
    const second = new Uncertainty(
      DateTime.parse('2022-01-01T12:30:15.125'),
      DateTime.parse('2022-01-01T12:30:15.126')
    );
    first.sameAs(second, DateTime.Unit.MILLISECOND).should.be.false();
    first.sameAs(second, DateTime.Unit.SECOND).should.be.true();
  });

  it('should use precision when calculating inequalities', () => {
    const first = new Uncertainty(
      DateTime.parse('2022-01-01T12:30:15.123'),
      DateTime.parse('2022-01-01T12:30:15.124')
    );
    const second = new Uncertainty(
      DateTime.parse('2022-01-01T12:30:15.125'),
      DateTime.parse('2022-01-01T12:30:15.126')
    );

    first.lessThan(second, DateTime.Unit.MILLISECOND).should.be.true();
    first.lessThan(second, DateTime.Unit.SECOND).should.be.false();
    second.greaterThan(first, DateTime.Unit.MILLISECOND).should.be.true();
    second.greaterThan(first, DateTime.Unit.SECOND).should.be.false();
    first.lessThanOrEquals(second, DateTime.Unit.MILLISECOND).should.be.true();
    first.lessThanOrEquals(second, DateTime.Unit.SECOND).should.be.true();
    first.greaterThanOrEquals(second, DateTime.Unit.MILLISECOND).should.be.false();
    first.greaterThanOrEquals(second, DateTime.Unit.SECOND).should.be.true();
  });

  it('should properly calculate "less than" inequality', () => {
    // Equality
    new Uncertainty(1, 1).lessThan(new Uncertainty(1, 1)).should.be.false();

    // <
    new Uncertainty(null, 1).lessThan(new Uncertainty(2, 2)).should.be.true();
    new Uncertainty(null, 1).lessThan(new Uncertainty(2, 3)).should.be.true();
    new Uncertainty(null, 1).lessThan(new Uncertainty(2, null)).should.be.true();
    new Uncertainty(0, 1).lessThan(new Uncertainty(2, 2)).should.be.true();
    new Uncertainty(0, 1).lessThan(new Uncertainty(2, 3)).should.be.true();
    new Uncertainty(0, 1).lessThan(new Uncertainty(2, null)).should.be.true();
    new Uncertainty(1, 1).lessThan(new Uncertainty(2, 2)).should.be.true();
    new Uncertainty(1, 1).lessThan(new Uncertainty(2, 3)).should.be.true();
    new Uncertainty(1, 1).lessThan(new Uncertainty(2, null)).should.be.true();
    should.not.exist(new Uncertainty(1, '1').lessThan(new Uncertainty(2, null)));

    // <=
    should.not.exist(new Uncertainty(null, 1).lessThan(new Uncertainty(1, 1)));
    should.not.exist(new Uncertainty(null, 1).lessThan(new Uncertainty(1, 2)));
    should.not.exist(new Uncertainty(null, 1).lessThan(new Uncertainty(1, null)));
    should.not.exist(new Uncertainty(0, 1).lessThan(new Uncertainty(1, 1)));
    should.not.exist(new Uncertainty(0, 1).lessThan(new Uncertainty(1, 2)));
    should.not.exist(new Uncertainty(0, 1).lessThan(new Uncertainty(1, null)));
    should.not.exist(new Uncertainty(1, 1).lessThan(new Uncertainty(1, 2)));
    should.not.exist(new Uncertainty(1, 1).lessThan(new Uncertainty(1, null)));

    // overlaps
    should.not.exist(new Uncertainty(null, null).lessThan(new Uncertainty(null, null)));
    should.not.exist(new Uncertainty(null, 10).lessThan(new Uncertainty(5, 5)));
    should.not.exist(new Uncertainty(null, 10).lessThan(new Uncertainty(5, 10)));
    should.not.exist(new Uncertainty(null, 10).lessThan(new Uncertainty(5, 15)));
    should.not.exist(new Uncertainty(null, 10).lessThan(new Uncertainty(5, null)));
    should.not.exist(new Uncertainty(null, 10).lessThan(new Uncertainty(0, 5)));
    should.not.exist(new Uncertainty(null, 10).lessThan(new Uncertainty(null, 5)));
    should.not.exist(new Uncertainty(0, 10).lessThan(new Uncertainty(5, 5)));
    should.not.exist(new Uncertainty(0, 10).lessThan(new Uncertainty(5, 10)));
    should.not.exist(new Uncertainty(0, 10).lessThan(new Uncertainty(5, 15)));
    should.not.exist(new Uncertainty(0, 10).lessThan(new Uncertainty(5, null)));
    should.not.exist(new Uncertainty(0, 10).lessThan(new Uncertainty(0, 5)));
    should.not.exist(new Uncertainty(0, 10).lessThan(new Uncertainty(null, 5)));
    should.not.exist(new Uncertainty(10, 10).lessThan(new Uncertainty(5, 15)));
    should.not.exist(new Uncertainty(10, 10).lessThan(new Uncertainty(5, null)));
    should.not.exist(new Uncertainty(10, null).lessThan(new Uncertainty(5, 15)));
    should.not.exist(new Uncertainty(10, null).lessThan(new Uncertainty(5, null)));

    // >=
    new Uncertainty(1, null).lessThan(new Uncertainty(null, 1)).should.be.false();
    new Uncertainty(1, null).lessThan(new Uncertainty(0, 1)).should.be.false();
    new Uncertainty(1, null).lessThan(new Uncertainty(1, 1)).should.be.false();
    new Uncertainty(1, 2).lessThan(new Uncertainty(null, 1)).should.be.false();
    new Uncertainty(1, 2).lessThan(new Uncertainty(0, 1)).should.be.false();
    new Uncertainty(1, 2).lessThan(new Uncertainty(1, 1)).should.be.false();
    new Uncertainty(1, 1).lessThan(new Uncertainty(null, 1)).should.be.false();
    new Uncertainty(1, 1).lessThan(new Uncertainty(0, 1)).should.be.false();

    // >
    new Uncertainty(2, 2).lessThan(new Uncertainty(null, 1)).should.be.false();
    new Uncertainty(2, 3).lessThan(new Uncertainty(null, 1)).should.be.false();
    new Uncertainty(2, null).lessThan(new Uncertainty(null, 1)).should.be.false();
    new Uncertainty(2, 2).lessThan(new Uncertainty(0, 1)).should.be.false();
    new Uncertainty(2, 3).lessThan(new Uncertainty(0, 1)).should.be.false();
    new Uncertainty(2, null).lessThan(new Uncertainty(0, 1)).should.be.false();
    new Uncertainty(2, 2).lessThan(new Uncertainty(1, 1)).should.be.false();
    new Uncertainty(2, 3).lessThan(new Uncertainty(1, 1)).should.be.false();
    new Uncertainty(2, null).lessThan(new Uncertainty(1, 1)).should.be.false();
  });

  it('should properly calculate "less than or equals" inequality', () => {
    // Equality
    new Uncertainty(1, 1).lessThanOrEquals(new Uncertainty(1, 1)).should.be.true();

    // <
    new Uncertainty(null, 1).lessThanOrEquals(new Uncertainty(2, 2)).should.be.true();
    new Uncertainty(null, 1).lessThanOrEquals(new Uncertainty(2, 3)).should.be.true();
    new Uncertainty(null, 1).lessThanOrEquals(new Uncertainty(2, null)).should.be.true();
    new Uncertainty(0, 1).lessThanOrEquals(new Uncertainty(2, 2)).should.be.true();
    new Uncertainty(0, 1).lessThanOrEquals(new Uncertainty(2, 3)).should.be.true();
    new Uncertainty(0, 1).lessThanOrEquals(new Uncertainty(2, null)).should.be.true();
    new Uncertainty(1, 1).lessThanOrEquals(new Uncertainty(2, 2)).should.be.true();
    new Uncertainty(1, 1).lessThanOrEquals(new Uncertainty(2, 3)).should.be.true();
    new Uncertainty(1, 1).lessThanOrEquals(new Uncertainty(2, null)).should.be.true();

    // <=
    new Uncertainty(null, 1).lessThanOrEquals(new Uncertainty(1, 1)).should.be.true();
    new Uncertainty(null, 1).lessThanOrEquals(new Uncertainty(1, 2)).should.be.true();
    new Uncertainty(null, 1).lessThanOrEquals(new Uncertainty(1, null)).should.be.true();
    new Uncertainty(0, 1).lessThanOrEquals(new Uncertainty(1, 1)).should.be.true();
    new Uncertainty(0, 1).lessThanOrEquals(new Uncertainty(1, 2)).should.be.true();
    new Uncertainty(0, 1).lessThanOrEquals(new Uncertainty(1, null)).should.be.true();
    new Uncertainty(1, 1).lessThanOrEquals(new Uncertainty(1, 2)).should.be.true();
    new Uncertainty(1, 1).lessThanOrEquals(new Uncertainty(1, null)).should.be.true();

    // overlaps
    should.not.exist(new Uncertainty(null, null).lessThanOrEquals(new Uncertainty(null, null)));
    should.not.exist(new Uncertainty(null, 10).lessThanOrEquals(new Uncertainty(5, 5)));
    should.not.exist(new Uncertainty(null, 10).lessThanOrEquals(new Uncertainty(5, 10)));
    should.not.exist(new Uncertainty(null, 10).lessThanOrEquals(new Uncertainty(5, 15)));
    should.not.exist(new Uncertainty(null, 10).lessThanOrEquals(new Uncertainty(5, null)));
    should.not.exist(new Uncertainty(null, 10).lessThanOrEquals(new Uncertainty(0, 5)));
    should.not.exist(new Uncertainty(null, 10).lessThanOrEquals(new Uncertainty(null, 5)));
    should.not.exist(new Uncertainty(0, 10).lessThanOrEquals(new Uncertainty(5, 5)));
    should.not.exist(new Uncertainty(0, 10).lessThanOrEquals(new Uncertainty(5, 10)));
    should.not.exist(new Uncertainty(0, 10).lessThanOrEquals(new Uncertainty(5, 15)));
    should.not.exist(new Uncertainty(0, 10).lessThanOrEquals(new Uncertainty(5, null)));
    should.not.exist(new Uncertainty(0, 10).lessThanOrEquals(new Uncertainty(0, 5)));
    should.not.exist(new Uncertainty(0, 10).lessThanOrEquals(new Uncertainty(null, 5)));
    should.not.exist(new Uncertainty(10, 10).lessThanOrEquals(new Uncertainty(5, 15)));
    should.not.exist(new Uncertainty(10, 10).lessThanOrEquals(new Uncertainty(5, null)));
    should.not.exist(new Uncertainty(10, null).lessThanOrEquals(new Uncertainty(5, 15)));
    should.not.exist(new Uncertainty(10, null).lessThanOrEquals(new Uncertainty(5, null)));

    // >=
    should.not.exist(new Uncertainty(1, null).lessThanOrEquals(new Uncertainty(null, 1)));
    should.not.exist(new Uncertainty(1, null).lessThanOrEquals(new Uncertainty(0, 1)));
    should.not.exist(new Uncertainty(1, null).lessThanOrEquals(new Uncertainty(1, 1)));
    should.not.exist(new Uncertainty(1, 2).lessThanOrEquals(new Uncertainty(null, 1)));
    should.not.exist(new Uncertainty(1, 2).lessThanOrEquals(new Uncertainty(0, 1)));
    should.not.exist(new Uncertainty(1, 2).lessThanOrEquals(new Uncertainty(1, 1)));
    should.not.exist(new Uncertainty(1, 1).lessThanOrEquals(new Uncertainty(null, 1)));
    should.not.exist(new Uncertainty(1, 1).lessThanOrEquals(new Uncertainty(0, 1)));

    // >
    new Uncertainty(2, 2).lessThanOrEquals(new Uncertainty(null, 1)).should.be.false();
    new Uncertainty(2, 3).lessThanOrEquals(new Uncertainty(null, 1)).should.be.false();
    new Uncertainty(2, null).lessThanOrEquals(new Uncertainty(null, 1)).should.be.false();
    new Uncertainty(2, 2).lessThanOrEquals(new Uncertainty(0, 1)).should.be.false();
    new Uncertainty(2, 3).lessThanOrEquals(new Uncertainty(0, 1)).should.be.false();
    new Uncertainty(2, null).lessThanOrEquals(new Uncertainty(0, 1)).should.be.false();
    new Uncertainty(2, 2).lessThanOrEquals(new Uncertainty(1, 1)).should.be.false();
    new Uncertainty(2, 3).lessThanOrEquals(new Uncertainty(1, 1)).should.be.false();
    new Uncertainty(2, null).lessThanOrEquals(new Uncertainty(1, 1)).should.be.false();
  });

  it('should properly calculate "greater than" inequality', () => {
    // Equality
    new Uncertainty(1, 1).greaterThan(new Uncertainty(1, 1)).should.be.false();

    // <
    new Uncertainty(null, 1).greaterThan(new Uncertainty(2, 2)).should.be.false();
    new Uncertainty(null, 1).greaterThan(new Uncertainty(2, 3)).should.be.false();
    new Uncertainty(null, 1).greaterThan(new Uncertainty(2, null)).should.be.false();
    new Uncertainty(0, 1).greaterThan(new Uncertainty(2, 2)).should.be.false();
    new Uncertainty(0, 1).greaterThan(new Uncertainty(2, 3)).should.be.false();
    new Uncertainty(0, 1).greaterThan(new Uncertainty(2, null)).should.be.false();
    new Uncertainty(1, 1).greaterThan(new Uncertainty(2, 2)).should.be.false();
    new Uncertainty(1, 1).greaterThan(new Uncertainty(2, 3)).should.be.false();
    new Uncertainty(1, 1).greaterThan(new Uncertainty(2, null)).should.be.false();

    // <=
    new Uncertainty(null, 1).greaterThan(new Uncertainty(1, 1)).should.be.false();
    new Uncertainty(null, 1).greaterThan(new Uncertainty(1, 2)).should.be.false();
    new Uncertainty(null, 1).greaterThan(new Uncertainty(1, null)).should.be.false();
    new Uncertainty(0, 1).greaterThan(new Uncertainty(1, 1)).should.be.false();
    new Uncertainty(0, 1).greaterThan(new Uncertainty(1, 2)).should.be.false();
    new Uncertainty(0, 1).greaterThan(new Uncertainty(1, null)).should.be.false();
    new Uncertainty(1, 1).greaterThan(new Uncertainty(1, 2)).should.be.false();
    new Uncertainty(1, 1).greaterThan(new Uncertainty(1, null)).should.be.false();

    // overlaps
    should.not.exist(new Uncertainty(null, null).greaterThan(new Uncertainty(null, null)));
    should.not.exist(new Uncertainty(null, 10).greaterThan(new Uncertainty(5, 5)));
    should.not.exist(new Uncertainty(null, 10).greaterThan(new Uncertainty(5, 10)));
    should.not.exist(new Uncertainty(null, 10).greaterThan(new Uncertainty(5, 15)));
    should.not.exist(new Uncertainty(null, 10).greaterThan(new Uncertainty(5, null)));
    should.not.exist(new Uncertainty(null, 10).greaterThan(new Uncertainty(0, 5)));
    should.not.exist(new Uncertainty(null, 10).greaterThan(new Uncertainty(null, 5)));
    should.not.exist(new Uncertainty(0, 10).greaterThan(new Uncertainty(5, 5)));
    should.not.exist(new Uncertainty(0, 10).greaterThan(new Uncertainty(5, 10)));
    should.not.exist(new Uncertainty(0, 10).greaterThan(new Uncertainty(5, 15)));
    should.not.exist(new Uncertainty(0, 10).greaterThan(new Uncertainty(5, null)));
    should.not.exist(new Uncertainty(0, 10).greaterThan(new Uncertainty(0, 5)));
    should.not.exist(new Uncertainty(0, 10).greaterThan(new Uncertainty(null, 5)));
    should.not.exist(new Uncertainty(10, 10).greaterThan(new Uncertainty(5, 15)));
    should.not.exist(new Uncertainty(10, 10).greaterThan(new Uncertainty(5, null)));
    should.not.exist(new Uncertainty(10, null).greaterThan(new Uncertainty(5, 15)));
    should.not.exist(new Uncertainty(10, null).greaterThan(new Uncertainty(5, null)));

    // >=
    should.not.exist(new Uncertainty(1, null).greaterThan(new Uncertainty(null, 1)));
    should.not.exist(new Uncertainty(1, null).greaterThan(new Uncertainty(0, 1)));
    should.not.exist(new Uncertainty(1, null).greaterThan(new Uncertainty(1, 1)));
    should.not.exist(new Uncertainty(1, 2).greaterThan(new Uncertainty(null, 1)));
    should.not.exist(new Uncertainty(1, 2).greaterThan(new Uncertainty(0, 1)));
    should.not.exist(new Uncertainty(1, 2).greaterThan(new Uncertainty(1, 1)));
    should.not.exist(new Uncertainty(1, 1).greaterThan(new Uncertainty(null, 1)));
    should.not.exist(new Uncertainty(1, 1).greaterThan(new Uncertainty(0, 1)));

    // >
    new Uncertainty(2, 2).greaterThan(new Uncertainty(null, 1)).should.be.true();
    new Uncertainty(2, 3).greaterThan(new Uncertainty(null, 1)).should.be.true();
    new Uncertainty(2, null).greaterThan(new Uncertainty(null, 1)).should.be.true();
    new Uncertainty(2, 2).greaterThan(new Uncertainty(0, 1)).should.be.true();
    new Uncertainty(2, 3).greaterThan(new Uncertainty(0, 1)).should.be.true();
    new Uncertainty(2, null).greaterThan(new Uncertainty(0, 1)).should.be.true();
    new Uncertainty(2, 2).greaterThan(new Uncertainty(1, 1)).should.be.true();
    new Uncertainty(2, 3).greaterThan(new Uncertainty(1, 1)).should.be.true();
    new Uncertainty(2, null).greaterThan(new Uncertainty(1, 1)).should.be.true();
  });

  it('should properly calculate "greater than or equals" inequality', () => {
    // Equality
    new Uncertainty(1, 1).greaterThanOrEquals(new Uncertainty(1, 1)).should.be.true();

    // <
    new Uncertainty(null, 1).greaterThanOrEquals(new Uncertainty(2, 2)).should.be.false();
    new Uncertainty(null, 1).greaterThanOrEquals(new Uncertainty(2, 3)).should.be.false();
    new Uncertainty(null, 1).greaterThanOrEquals(new Uncertainty(2, null)).should.be.false();
    new Uncertainty(0, 1).greaterThanOrEquals(new Uncertainty(2, 2)).should.be.false();
    new Uncertainty(0, 1).greaterThanOrEquals(new Uncertainty(2, 3)).should.be.false();
    new Uncertainty(0, 1).greaterThanOrEquals(new Uncertainty(2, null)).should.be.false();
    new Uncertainty(1, 1).greaterThanOrEquals(new Uncertainty(2, 2)).should.be.false();
    new Uncertainty(1, 1).greaterThanOrEquals(new Uncertainty(2, 3)).should.be.false();
    new Uncertainty(1, 1).greaterThanOrEquals(new Uncertainty(2, null)).should.be.false();

    // <=
    should.not.exist(new Uncertainty(null, 1).greaterThanOrEquals(new Uncertainty(1, 1)));
    should.not.exist(new Uncertainty(null, 1).greaterThanOrEquals(new Uncertainty(1, 2)));
    should.not.exist(new Uncertainty(null, 1).greaterThanOrEquals(new Uncertainty(1, null)));
    should.not.exist(new Uncertainty(0, 1).greaterThanOrEquals(new Uncertainty(1, 1)));
    should.not.exist(new Uncertainty(0, 1).greaterThanOrEquals(new Uncertainty(1, 2)));
    should.not.exist(new Uncertainty(0, 1).greaterThanOrEquals(new Uncertainty(1, null)));
    should.not.exist(new Uncertainty(1, 1).greaterThanOrEquals(new Uncertainty(1, 2)));
    should.not.exist(new Uncertainty(1, 1).greaterThanOrEquals(new Uncertainty(1, null)));

    // overlaps
    should.not.exist(new Uncertainty(null, null).greaterThanOrEquals(new Uncertainty(null, null)));
    should.not.exist(new Uncertainty(null, 10).greaterThanOrEquals(new Uncertainty(5, 5)));
    should.not.exist(new Uncertainty(null, 10).greaterThanOrEquals(new Uncertainty(5, 10)));
    should.not.exist(new Uncertainty(null, 10).greaterThanOrEquals(new Uncertainty(5, 15)));
    should.not.exist(new Uncertainty(null, 10).greaterThanOrEquals(new Uncertainty(5, null)));
    should.not.exist(new Uncertainty(null, 10).greaterThanOrEquals(new Uncertainty(0, 5)));
    should.not.exist(new Uncertainty(null, 10).greaterThanOrEquals(new Uncertainty(null, 5)));
    should.not.exist(new Uncertainty(0, 10).greaterThanOrEquals(new Uncertainty(5, 5)));
    should.not.exist(new Uncertainty(0, 10).greaterThanOrEquals(new Uncertainty(5, 10)));
    should.not.exist(new Uncertainty(0, 10).greaterThanOrEquals(new Uncertainty(5, 15)));
    should.not.exist(new Uncertainty(0, 10).greaterThanOrEquals(new Uncertainty(5, null)));
    should.not.exist(new Uncertainty(0, 10).greaterThanOrEquals(new Uncertainty(0, 5)));
    should.not.exist(new Uncertainty(0, 10).greaterThanOrEquals(new Uncertainty(null, 5)));
    should.not.exist(new Uncertainty(10, 10).greaterThanOrEquals(new Uncertainty(5, 15)));
    should.not.exist(new Uncertainty(10, 10).greaterThanOrEquals(new Uncertainty(5, null)));
    should.not.exist(new Uncertainty(10, null).greaterThanOrEquals(new Uncertainty(5, 15)));
    should.not.exist(new Uncertainty(10, null).greaterThanOrEquals(new Uncertainty(5, null)));

    // >=
    new Uncertainty(1, null).greaterThanOrEquals(new Uncertainty(null, 1)).should.be.true();
    new Uncertainty(1, null).greaterThanOrEquals(new Uncertainty(0, 1)).should.be.true();
    new Uncertainty(1, null).greaterThanOrEquals(new Uncertainty(1, 1)).should.be.true();
    new Uncertainty(1, 2).greaterThanOrEquals(new Uncertainty(null, 1)).should.be.true();
    new Uncertainty(1, 2).greaterThanOrEquals(new Uncertainty(0, 1)).should.be.true();
    new Uncertainty(1, 2).greaterThanOrEquals(new Uncertainty(1, 1)).should.be.true();
    new Uncertainty(1, 1).greaterThanOrEquals(new Uncertainty(null, 1)).should.be.true();
    new Uncertainty(1, 1).greaterThanOrEquals(new Uncertainty(0, 1)).should.be.true();

    // >
    new Uncertainty(2, 2).greaterThanOrEquals(new Uncertainty(null, 1)).should.be.true();
    new Uncertainty(2, 3).greaterThanOrEquals(new Uncertainty(null, 1)).should.be.true();
    new Uncertainty(2, null).greaterThanOrEquals(new Uncertainty(null, 1)).should.be.true();
    new Uncertainty(2, 2).greaterThanOrEquals(new Uncertainty(0, 1)).should.be.true();
    new Uncertainty(2, 3).greaterThanOrEquals(new Uncertainty(0, 1)).should.be.true();
    new Uncertainty(2, null).greaterThanOrEquals(new Uncertainty(0, 1)).should.be.true();
    new Uncertainty(2, 2).greaterThanOrEquals(new Uncertainty(1, 1)).should.be.true();
    new Uncertainty(2, 3).greaterThanOrEquals(new Uncertainty(1, 1)).should.be.true();
    new Uncertainty(2, null).greaterThanOrEquals(new Uncertainty(1, 1)).should.be.true();
  });

  it('should maintain consistency with date/datetime equality', () => {
    const d1 = new Date(2022, 1, 1);
    const d2 = new DateTime(2022, 1, 1);
    const u1 = new Uncertainty(new Date(2022, 1, 1));
    const u2 = new Uncertainty(new DateTime(2022, 1, 1));

    // Dates do not equal datetimes
    d1.equals(d2).should.be.false();
    d2.equals(d1).should.be.false();

    // Dates do not equal uncertainties
    d1.equals(u1).should.be.false();
    u1.equals(d1).should.be.true();

    // This inconsistency is resolved in the comparison equals method
    equals(d1, u1).should.be.true();
    equals(u1, d1).should.be.true();

    d1.equals(u2).should.be.false();
    u2.equals(d1).should.be.false();

    // Datetimes do not equal uncertainties
    d2.equals(u1).should.be.false();
    u1.equals(d2).should.be.false();

    d2.equals(u2).should.be.false();
    u2.equals(d2).should.be.true();

    // This inconsistency is resolved in the comparison equals method
    equals(d2, u2).should.be.true();
    equals(u2, d2).should.be.true();
  });

  it('point should distinguish similar but different types', () => {
    // This is an unrealistic example, but is intended to catch the difference between
    // typeof a !== typeof b and
    // typeof a !== typeof b || a?.constructor !== b?.constructor
    const baseDate = new Date(2022, 1, 1);
    const u1 = new Uncertainty(new Date(2022, 1, 1), {
      day: 1,
      month: 1,
      year: 2022,
      isDate: baseDate.isDate,
      isDateTime: baseDate.isDateTime
    });
    u1.isPoint().should.be.false();
  });
});
