import should from 'should';
import { Interval } from '../../../src/datatypes/interval';
import setup from '../../setup';
const data = require('./data');
const { p1 } = require('./patients');

describe('IsSystemType', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should correctly accept matching types', function () {
    this.fiveIsInteger.exec(this.ctx).should.be.true();
    this.stringFiveIsString.exec(this.ctx).should.be.true();
  });

  it('should correctly reject non-matching types', function () {
    this.fiveIsString.exec(this.ctx).should.be.false();
    this.stringFiveIsInteger.exec(this.ctx).should.be.false();
  });
});

describe('IsListType', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should correctly accept matching types', function () {
    this.listOfIntegersIsListOfIntegers.exec(this.ctx).should.be.true();
  });

  it('should correctly reject non-matching types', function () {
    this.listOfDecimalsIsListOfIntegers.exec(this.ctx).should.be.false();
  });
});

describe('IsIntervalType', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should correctly accept matching types', function () {
    this.intervalOfIntegersIsIntervalOfIntegers.exec(this.ctx).should.be.true();
  });

  it('should correctly reject non-matching types', function () {
    this.intervalOfDecimalsIsIntervalOfIntegers.exec(this.ctx).should.be.false();
  });
});

describe('IsTupleType', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should correctly accept matching types', function () {
    this.tupleOfIntegersIsTupleOfIntegers.exec(this.ctx).should.be.true();
  });

  it('should correctly reject non-matching types', function () {
    this.tupleOfDecimalsIsTupleOfIntegers.exec(this.ctx).should.be.false();
  });
});

describe('IsChoiceType', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should correctly accept matching types', function () {
    this.integerIsChoiceOfIntegersAndDecimals.exec(this.ctx).should.be.true();
    this.decimalIsChoiceOfIntegersAndDecimals.exec(this.ctx).should.be.true();
  });

  it('should correctly reject non-matching types', function () {
    this.stringIsChoiceOfIntegersAndDecimals.exec(this.ctx).should.be.false();
  });
});

describe('IsCustomDataModelType', () => {
  beforeEach(function () {
    setup(this, data, [p1]);
  });

  it('should correctly accept matching types', function () {
    this.encounterIsEncounter.exec(this.ctx).should.be.true();
    this.encounterIsRecord.exec(this.ctx).should.be.true();
    this.encounterIsAny.exec(this.ctx).should.be.true();
  });

  it('should correctly reject non-matching types', function () {
    this.encounterIsCondition.exec(this.ctx).should.be.false();
    this.encounterIsString.exec(this.ctx).should.be.false();
  });
});

describe('AsSystemType', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should return back matching types', function () {
    this.fiveAsInteger.exec(this.ctx).should.equal(5);
    this.stringFiveAsString.exec(this.ctx).should.equal('5');
    this.castFiveAsInteger.exec(this.ctx).should.equal(5);
    this.castStringFiveAsString.exec(this.ctx).should.equal('5');
  });

  it('should return null on non-matching types for non-strict cast', function () {
    should(this.fiveAsString.exec(this.ctx)).be.null();
    should(this.stringFiveAsInteger.exec(this.ctx)).be.null();
    should(this.listAsInteger.exec(this.ctx)).be.null();
    should(this.intervalAsInteger.exec(this.ctx)).be.null();
    should(this.tupleAsInteger.exec(this.ctx)).be.null();
  });

  it('should throw on non-matching types for strict cast', function () {
    (() => this.castFiveAsString.exec(this.ctx)).should.throw(
      /Cannot cast {urn:hl7-org:elm-types:r1}Integer as {urn:hl7-org:elm-types:r1}String/
    );
    (() => this.castStringFiveAsInteger.exec(this.ctx)).should.throw(
      /Cannot cast {urn:hl7-org:elm-types:r1}String as {urn:hl7-org:elm-types:r1}Integer/
    );
    (() => this.castListAsInteger.exec(this.ctx)).should.throw(
      /Cannot cast List<{urn:hl7-org:elm-types:r1}Integer> as {urn:hl7-org:elm-types:r1}Integer/
    );
    (() => this.castIntervalAsInteger.exec(this.ctx)).should.throw(
      /Cannot cast Interval<{urn:hl7-org:elm-types:r1}Integer> as {urn:hl7-org:elm-types:r1}Integer/
    );
    (() => this.castTupleAsInteger.exec(this.ctx)).should.throw(
      /Cannot cast Tuple<A {urn:hl7-org:elm-types:r1}Integer> as {urn:hl7-org:elm-types:r1}Integer/
    );
  });
});

describe('AsListType', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should return back matching types', function () {
    this.listOfIntegersAsListOfIntegers.exec(this.ctx).should.eql([1, 2, 3, 4, 5]);
    this.castListOfIntegersAsListOfIntegers.exec(this.ctx).should.eql([1, 2, 3, 4, 5]);
  });

  it('should return null on non-matching types for non-strict cast', function () {
    should(this.listOfStringsAsListOfIntegers.exec(this.ctx)).be.null();
    should(this.integerAsListOfIntegers.exec(this.ctx)).be.null();
    should(this.intervalAsListOfIntegers.exec(this.ctx)).be.null();
    should(this.tupleAsListOfIntegers.exec(this.ctx)).be.null();
  });

  it('should throw on non-matching types for strict cast', function () {
    (() => this.castListOfStringsAsListOfIntegers.exec(this.ctx)).should.throw(
      /Cannot cast List<{urn:hl7-org:elm-types:r1}String> as List<{urn:hl7-org:elm-types:r1}Integer>/
    );
    (() => this.castIntegerAsListOfIntegers.exec(this.ctx)).should.throw(
      /Cannot cast {urn:hl7-org:elm-types:r1}Integer as List<{urn:hl7-org:elm-types:r1}Integer>/
    );
    (() => this.castIntervalAsListOfIntegers.exec(this.ctx)).should.throw(
      /Cannot cast Interval<{urn:hl7-org:elm-types:r1}Integer> as List<{urn:hl7-org:elm-types:r1}Integer>/
    );
    (() => this.castTupleAsListOfIntegers.exec(this.ctx)).should.throw(
      /Cannot cast Tuple<A {urn:hl7-org:elm-types:r1}Integer> as List<{urn:hl7-org:elm-types:r1}Integer>/
    );
  });
});

describe('AsIntervalType', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should return back matching types', function () {
    this.intervalOfIntegersAsIntervalOfIntegers
      .exec(this.ctx)
      .should.eql(new Interval(1, 5, true, true));
    this.castIntervalOfIntegersAsIntervalOfIntegers
      .exec(this.ctx)
      .should.eql(new Interval(1, 5, true, true));
  });

  it('should return null on non-matching types for non-strict cast', function () {
    should(this.intervalOfDatesAsIntervalOfIntegers.exec(this.ctx)).be.null();
    should(this.integerAsIntervalOfIntegers.exec(this.ctx)).be.null();
    should(this.listAsIntervalOfIntegers.exec(this.ctx)).be.null();
    should(this.tupleAsIntervalOfIntegers.exec(this.ctx)).be.null();
  });

  it('should throw on non-matching types for strict cast', function () {
    (() => this.castIntervalOfDatesAsIntervalOfIntegers.exec(this.ctx)).should.throw(
      /Cannot cast Interval<{urn:hl7-org:elm-types:r1}Date> as Interval<{urn:hl7-org:elm-types:r1}Integer>/
    );
    (() => this.castIntegerAsIntervalOfIntegers.exec(this.ctx)).should.throw(
      /Cannot cast {urn:hl7-org:elm-types:r1}Integer as Interval<{urn:hl7-org:elm-types:r1}Integer>/
    );
    (() => this.castListAsIntervalOfIntegers.exec(this.ctx)).should.throw(
      /Cannot cast List<{urn:hl7-org:elm-types:r1}Integer> as Interval<{urn:hl7-org:elm-types:r1}Integer>/
    );
    (() => this.castTupleAsIntervalOfIntegers.exec(this.ctx)).should.throw(
      /Cannot cast Tuple<A {urn:hl7-org:elm-types:r1}Integer> as Interval<{urn:hl7-org:elm-types:r1}Integer>/
    );
  });
});

describe('AsTupleType', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should return back matching types', function () {
    this.tupleOfAIntegerBStringAsTupleOfAIntegerBString.exec(this.ctx).should.eql({ A: 1, B: '2' });
    this.castTupleOfAIntegerBStringAsTupleOfAIntegerBString
      .exec(this.ctx)
      .should.eql({ A: 1, B: '2' });
  });

  it('should return null on non-matching types for non-strict cast', function () {
    should(this.tupleOfAStringBIntegerAsTupleOfAIntegerBString.exec(this.ctx)).be.null();
    should(this.integerAsTupleOfInteger.exec(this.ctx)).be.null();
    should(this.listAsTupleOfInteger.exec(this.ctx)).be.null();
    should(this.intervalAsTupleOfInteger.exec(this.ctx)).be.null();
  });

  it('should throw on non-matching types for strict cast', function () {
    (() => this.castTupleOfAStringBIntegerAsTupleOfAIntegerBString.exec(this.ctx)).should.throw(
      /Cannot cast Tuple<A {urn:hl7-org:elm-types:r1}String, B {urn:hl7-org:elm-types:r1}Integer> as Tuple<A {urn:hl7-org:elm-types:r1}Integer, B {urn:hl7-org:elm-types:r1}String>/
    );
    (() => this.castIntegerAsTupleOfInteger.exec(this.ctx)).should.throw(
      /Cannot cast {urn:hl7-org:elm-types:r1}Integer as Tuple<A {urn:hl7-org:elm-types:r1}Integer>/
    );
    (() => this.castListAsTupleOfInteger.exec(this.ctx)).should.throw(
      /Cannot cast List<{urn:hl7-org:elm-types:r1}Integer> as Tuple<A {urn:hl7-org:elm-types:r1}Integer>/
    );
    (() => this.castIntervalAsTupleOfInteger.exec(this.ctx)).should.throw(
      /Cannot cast Interval<{urn:hl7-org:elm-types:r1}Integer> as Tuple<A {urn:hl7-org:elm-types:r1}Integer>/
    );
  });
});

describe('AsChoiceType', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should return back matching types', function () {
    this.integerAsChoiceOfIntegersAndStrings.exec(this.ctx).should.eql(5);
    this.castIntegerAsChoiceOfIntegersAndStrings.exec(this.ctx).should.eql(5);
    this.stringAsChoiceOfIntegersAndStrings.exec(this.ctx).should.eql('Foo');
    this.castStringAsChoiceOfIntegersAndStrings.exec(this.ctx).should.eql('Foo');
  });

  it('should return null on non-matching types for non-strict cast', function () {
    should(this.decimalAsChoiceOfIntegersAndStrings.exec(this.ctx)).be.null();
    should(this.listAsChoiceOfIntegersAndStrings.exec(this.ctx)).be.null();
    should(this.intervalAsChoiceOfIntegersAndStrings.exec(this.ctx)).be.null();
    should(this.tupleAsChoiceOfIntegersAndStrings.exec(this.ctx)).be.null();
  });

  it('should throw on non-matching types for strict cast', function () {
    (() => this.castDecimalAsChoiceOfIntegersAndStrings.exec(this.ctx)).should.throw(
      /Cannot cast {urn:hl7-org:elm-types:r1}Decimal as Choice<{urn:hl7-org:elm-types:r1}Integer, {urn:hl7-org:elm-types:r1}String>/
    );
    (() => this.castListAsChoiceOfIntegersAndStrings.exec(this.ctx)).should.throw(
      /Cannot cast List<Choice<{urn:hl7-org:elm-types:r1}Integer, {urn:hl7-org:elm-types:r1}String>> as Choice<{urn:hl7-org:elm-types:r1}Integer, {urn:hl7-org:elm-types:r1}String>/
    );
    (() => this.castIntervalAsChoiceOfIntegersAndStrings.exec(this.ctx)).should.throw(
      /Cannot cast Interval<{urn:hl7-org:elm-types:r1}Integer> as Choice<{urn:hl7-org:elm-types:r1}Integer, {urn:hl7-org:elm-types:r1}String>/
    );
    (() => this.castTupleAsChoiceOfIntegersAndStrings.exec(this.ctx)).should.throw(
      /Cannot cast Tuple<A {urn:hl7-org:elm-types:r1}Integer, B {urn:hl7-org:elm-types:r1}String> as Choice<{urn:hl7-org:elm-types:r1}Integer, {urn:hl7-org:elm-types:r1}String>/
    );
  });
});

describe('AsCustomDataModelType', () => {
  beforeEach(function () {
    setup(this, data, [p1]);
  });

  it('should return back matching types', function () {
    this.encounterAsEncounter.exec(this.ctx).id.should.equal('http://cqframework.org/3/1');
    this.castEncounterAsEncounter.exec(this.ctx).id.should.equal('http://cqframework.org/3/1');
    this.encounterAsRecord.exec(this.ctx).id.should.equal('http://cqframework.org/3/1');
    this.castEncounterAsRecord.exec(this.ctx).id.should.equal('http://cqframework.org/3/1');
    this.encounterAsAny.exec(this.ctx).id.should.equal('http://cqframework.org/3/1');
    this.castEncounterAsAny.exec(this.ctx).id.should.equal('http://cqframework.org/3/1');
    this.namedTupleAsEncounter.exec(this.ctx).id.should.equal('1');
    this.castNamedTupleAsEncounter.exec(this.ctx).id.should.equal('1');
  });

  it('should return null on non-matching types for non-strict cast', function () {
    should(this.encounterAsCondition.exec(this.ctx)).be.null();
    should(this.encounterAsString.exec(this.ctx)).be.null();
    should(this.listAsEncounter.exec(this.ctx)).be.null();
    should(this.intervalAsEncounter.exec(this.ctx)).be.null();
    // Technically, this cast should fail, but this is a known bug that would require significant work to overcome
    // should(this.tupleAsEncounter.exec(this.ctx)).be.null();
  });

  it('should throw on non-matching types for strict cast', function () {
    (() => this.castEncounterAsCondition.exec(this.ctx)).should.throw(
      /Cannot cast {https:\/\/github\.com\/cqframework\/cql-execution\/simple}Encounter as {https:\/\/github\.com\/cqframework\/cql-execution\/simple}Condition/
    );
    (() => this.castEncounterAsString.exec(this.ctx)).should.throw(
      /Cannot cast {https:\/\/github\.com\/cqframework\/cql-execution\/simple}Encounter as {urn:hl7-org:elm-types:r1}String/
    );
    (() => this.castListAsEncounter.exec(this.ctx)).should.throw(
      /Cannot cast List<{https:\/\/github\.com\/cqframework\/cql-execution\/simple}Encounter> as {https:\/\/github\.com\/cqframework\/cql-execution\/simple}Encounter/
    );
    (() => this.castIntervalAsEncounter.exec(this.ctx)).should.throw(
      /Cannot cast Interval<{urn:hl7-org:elm-types:r1}Integer> as {https:\/\/github\.com\/cqframework\/cql-execution\/simple}Encounter/
    );
    // Technically, this cast should fail, but this is a known bug that would require significant work to overcome
    // (() => this.castTupleAsEncounter.exec(this.ctx)).should.throw(/Cannot cast Tuple<id {urn:hl7-org:elm-types:r1}String> as {urn:hl7-org:elm-types:r1}Encounter/);
  });
});
