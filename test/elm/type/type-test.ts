import should from 'should';
import { Interval } from '../../../src/datatypes/interval';
import setup from '../../setup';
const data = require('./data');
const { p1 } = require('./patients');

describe('IsSystemType', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should correctly accept matching types', async function () {
    (await this.fiveIsInteger.exec(this.ctx)).should.be.true();
    (await this.stringFiveIsString.exec(this.ctx)).should.be.true();
  });

  it('should correctly reject non-matching types', async function () {
    (await this.fiveIsString.exec(this.ctx)).should.be.false();
    (await this.stringFiveIsInteger.exec(this.ctx)).should.be.false();
  });
});

describe('IsListType', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should correctly accept matching types', async function () {
    (await this.listOfIntegersIsListOfIntegers.exec(this.ctx)).should.be.true();
  });

  it('should correctly reject non-matching types', async function () {
    (await this.listOfDecimalsIsListOfIntegers.exec(this.ctx)).should.be.false();
  });
});

describe('IsIntervalType', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should correctly accept matching types', async function () {
    (await this.intervalOfIntegersIsIntervalOfIntegers.exec(this.ctx)).should.be.true();
  });

  it('should correctly reject non-matching types', async function () {
    (await this.intervalOfDecimalsIsIntervalOfIntegers.exec(this.ctx)).should.be.false();
  });
});

describe('IsTupleType', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should correctly accept matching types', async function () {
    (await this.tupleOfIntegersIsTupleOfIntegers.exec(this.ctx)).should.be.true();
  });

  it('should correctly reject non-matching types', async function () {
    (await this.tupleOfDecimalsIsTupleOfIntegers.exec(this.ctx)).should.be.false();
  });
});

describe('IsChoiceType', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should correctly accept matching types', async function () {
    (await this.integerIsChoiceOfIntegersAndDecimals.exec(this.ctx)).should.be.true();
    (await this.decimalIsChoiceOfIntegersAndDecimals.exec(this.ctx)).should.be.true();
  });

  it('should correctly reject non-matching types', async function () {
    (await this.stringIsChoiceOfIntegersAndDecimals.exec(this.ctx)).should.be.false();
  });
});

describe('IsCustomDataModelType', () => {
  beforeEach(function () {
    setup(this, data, [p1]);
  });

  it('should correctly accept matching types', async function () {
    (await this.encounterIsEncounter.exec(this.ctx)).should.be.true();
    (await this.encounterIsRecord.exec(this.ctx)).should.be.true();
    (await this.encounterIsAny.exec(this.ctx)).should.be.true();
  });

  it('should correctly reject non-matching types', async function () {
    (await this.encounterIsCondition.exec(this.ctx)).should.be.false();
    (await this.encounterIsString.exec(this.ctx)).should.be.false();
  });
});

describe('AsSystemType', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should return back matching types', async function () {
    (await this.fiveAsInteger.exec(this.ctx)).should.equal(5);
    (await this.stringFiveAsString.exec(this.ctx)).should.equal('5');
    (await this.castFiveAsInteger.exec(this.ctx)).should.equal(5);
    (await this.castStringFiveAsString.exec(this.ctx)).should.equal('5');
  });

  it('should return null on non-matching types for non-strict cast', async function () {
    should(await this.fiveAsString.exec(this.ctx)).be.null();
    should(await this.stringFiveAsInteger.exec(this.ctx)).be.null();
    should(await this.listAsInteger.exec(this.ctx)).be.null();
    should(await this.intervalAsInteger.exec(this.ctx)).be.null();
    should(await this.tupleAsInteger.exec(this.ctx)).be.null();
  });

  it('should throw on non-matching types for strict cast', async function () {
    await this.castFiveAsString
      .exec(this.ctx)
      .should.be.rejectedWith(
        /Cannot cast {urn:hl7-org:elm-types:r1}Integer as {urn:hl7-org:elm-types:r1}String/
      );
    await this.castStringFiveAsInteger
      .exec(this.ctx)
      .should.be.rejectedWith(
        /Cannot cast {urn:hl7-org:elm-types:r1}String as {urn:hl7-org:elm-types:r1}Integer/
      );
    await this.castListAsInteger
      .exec(this.ctx)
      .should.be.rejectedWith(
        /Cannot cast List<{urn:hl7-org:elm-types:r1}Integer> as {urn:hl7-org:elm-types:r1}Integer/
      );
    await this.castIntervalAsInteger
      .exec(this.ctx)
      .should.be.rejectedWith(
        /Cannot cast Interval<{urn:hl7-org:elm-types:r1}Integer> as {urn:hl7-org:elm-types:r1}Integer/
      );
    await this.castTupleAsInteger
      .exec(this.ctx)
      .should.be.rejectedWith(
        /Cannot cast Tuple<A {urn:hl7-org:elm-types:r1}Integer> as {urn:hl7-org:elm-types:r1}Integer/
      );
  });
});

describe('AsListType', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should return back matching types', async function () {
    (await this.listOfIntegersAsListOfIntegers.exec(this.ctx)).should.eql([1, 2, 3, 4, 5]);
    (await this.castListOfIntegersAsListOfIntegers.exec(this.ctx)).should.eql([1, 2, 3, 4, 5]);
  });

  it('should return null on non-matching types for non-strict cast', async function () {
    should(await this.listOfStringsAsListOfIntegers.exec(this.ctx)).be.null();
    should(await this.integerAsListOfIntegers.exec(this.ctx)).be.null();
    should(await this.intervalAsListOfIntegers.exec(this.ctx)).be.null();
    should(await this.tupleAsListOfIntegers.exec(this.ctx)).be.null();
  });

  it('should throw on non-matching types for strict cast', async function () {
    await this.castListOfStringsAsListOfIntegers
      .exec(this.ctx)
      .should.be.rejectedWith(
        /Cannot cast List<{urn:hl7-org:elm-types:r1}String> as List<{urn:hl7-org:elm-types:r1}Integer>/
      );
    await this.castIntegerAsListOfIntegers
      .exec(this.ctx)
      .should.be.rejectedWith(
        /Cannot cast {urn:hl7-org:elm-types:r1}Integer as List<{urn:hl7-org:elm-types:r1}Integer>/
      );
    await this.castIntervalAsListOfIntegers
      .exec(this.ctx)
      .should.be.rejectedWith(
        /Cannot cast Interval<{urn:hl7-org:elm-types:r1}Integer> as List<{urn:hl7-org:elm-types:r1}Integer>/
      );
    await this.castTupleAsListOfIntegers
      .exec(this.ctx)
      .should.be.rejectedWith(
        /Cannot cast Tuple<A {urn:hl7-org:elm-types:r1}Integer> as List<{urn:hl7-org:elm-types:r1}Integer>/
      );
  });
});

describe('AsIntervalType', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should return back matching types', async function () {
    (await this.intervalOfIntegersAsIntervalOfIntegers.exec(this.ctx)).should.eql(
      new Interval(1, 5, true, true)
    );
    (await this.castIntervalOfIntegersAsIntervalOfIntegers.exec(this.ctx)).should.eql(
      new Interval(1, 5, true, true)
    );
  });

  it('should return null on non-matching types for non-strict cast', async function () {
    should(await this.intervalOfDatesAsIntervalOfIntegers.exec(this.ctx)).be.null();
    should(await this.integerAsIntervalOfIntegers.exec(this.ctx)).be.null();
    should(await this.listAsIntervalOfIntegers.exec(this.ctx)).be.null();
    should(await this.tupleAsIntervalOfIntegers.exec(this.ctx)).be.null();
  });

  it('should throw on non-matching types for strict cast', async function () {
    await this.castIntervalOfDatesAsIntervalOfIntegers
      .exec(this.ctx)
      .should.be.rejectedWith(
        /Cannot cast Interval<{urn:hl7-org:elm-types:r1}Date> as Interval<{urn:hl7-org:elm-types:r1}Integer>/
      );
    await this.castIntegerAsIntervalOfIntegers
      .exec(this.ctx)
      .should.be.rejectedWith(
        /Cannot cast {urn:hl7-org:elm-types:r1}Integer as Interval<{urn:hl7-org:elm-types:r1}Integer>/
      );
    await this.castListAsIntervalOfIntegers
      .exec(this.ctx)
      .should.be.rejectedWith(
        /Cannot cast List<{urn:hl7-org:elm-types:r1}Integer> as Interval<{urn:hl7-org:elm-types:r1}Integer>/
      );
    await this.castTupleAsIntervalOfIntegers
      .exec(this.ctx)
      .should.be.rejectedWith(
        /Cannot cast Tuple<A {urn:hl7-org:elm-types:r1}Integer> as Interval<{urn:hl7-org:elm-types:r1}Integer>/
      );
  });
});

describe('AsTupleType', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should return back matching types', async function () {
    (await this.tupleOfAIntegerBStringAsTupleOfAIntegerBString.exec(this.ctx)).should.eql({
      A: 1,
      B: '2'
    });
    (await this.castTupleOfAIntegerBStringAsTupleOfAIntegerBString.exec(this.ctx)).should.eql({
      A: 1,
      B: '2'
    });
  });

  it('should return null on non-matching types for non-strict cast', async function () {
    should(await this.tupleOfAStringBIntegerAsTupleOfAIntegerBString.exec(this.ctx)).be.null();
    should(await this.integerAsTupleOfInteger.exec(this.ctx)).be.null();
    should(await this.listAsTupleOfInteger.exec(this.ctx)).be.null();
    should(await this.intervalAsTupleOfInteger.exec(this.ctx)).be.null();
  });

  it('should throw on non-matching types for strict cast', async function () {
    await this.castTupleOfAStringBIntegerAsTupleOfAIntegerBString
      .exec(this.ctx)
      .should.be.rejectedWith(
        /Cannot cast Tuple<A {urn:hl7-org:elm-types:r1}String, B {urn:hl7-org:elm-types:r1}Integer> as Tuple<A {urn:hl7-org:elm-types:r1}Integer, B {urn:hl7-org:elm-types:r1}String>/
      );
    await this.castIntegerAsTupleOfInteger
      .exec(this.ctx)
      .should.be.rejectedWith(
        /Cannot cast {urn:hl7-org:elm-types:r1}Integer as Tuple<A {urn:hl7-org:elm-types:r1}Integer>/
      );
    await this.castListAsTupleOfInteger
      .exec(this.ctx)
      .should.be.rejectedWith(
        /Cannot cast List<{urn:hl7-org:elm-types:r1}Integer> as Tuple<A {urn:hl7-org:elm-types:r1}Integer>/
      );
    await this.castIntervalAsTupleOfInteger
      .exec(this.ctx)
      .should.be.rejectedWith(
        /Cannot cast Interval<{urn:hl7-org:elm-types:r1}Integer> as Tuple<A {urn:hl7-org:elm-types:r1}Integer>/
      );
  });
});

describe('AsChoiceType', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should return back matching types', async function () {
    (await this.integerAsChoiceOfIntegersAndStrings.exec(this.ctx)).should.eql(5);
    (await this.castIntegerAsChoiceOfIntegersAndStrings.exec(this.ctx)).should.eql(5);
    (await this.stringAsChoiceOfIntegersAndStrings.exec(this.ctx)).should.eql('Foo');
    (await this.castStringAsChoiceOfIntegersAndStrings.exec(this.ctx)).should.eql('Foo');
  });

  it('should return null on non-matching types for non-strict cast', async function () {
    should(await this.decimalAsChoiceOfIntegersAndStrings.exec(this.ctx)).be.null();
    should(await this.listAsChoiceOfIntegersAndStrings.exec(this.ctx)).be.null();
    should(await this.intervalAsChoiceOfIntegersAndStrings.exec(this.ctx)).be.null();
    should(await this.tupleAsChoiceOfIntegersAndStrings.exec(this.ctx)).be.null();
  });

  it('should throw on non-matching types for strict cast', async function () {
    await this.castDecimalAsChoiceOfIntegersAndStrings
      .exec(this.ctx)
      .should.be.rejectedWith(
        /Cannot cast {urn:hl7-org:elm-types:r1}Decimal as Choice<{urn:hl7-org:elm-types:r1}Integer, {urn:hl7-org:elm-types:r1}String>/
      );
    await this.castListAsChoiceOfIntegersAndStrings
      .exec(this.ctx)
      .should.be.rejectedWith(
        /Cannot cast List<Choice<{urn:hl7-org:elm-types:r1}Integer, {urn:hl7-org:elm-types:r1}String>> as Choice<{urn:hl7-org:elm-types:r1}Integer, {urn:hl7-org:elm-types:r1}String>/
      );
    await this.castIntervalAsChoiceOfIntegersAndStrings
      .exec(this.ctx)
      .should.be.rejectedWith(
        /Cannot cast Interval<{urn:hl7-org:elm-types:r1}Integer> as Choice<{urn:hl7-org:elm-types:r1}Integer, {urn:hl7-org:elm-types:r1}String>/
      );
    await this.castTupleAsChoiceOfIntegersAndStrings
      .exec(this.ctx)
      .should.be.rejectedWith(
        /Cannot cast Tuple<A {urn:hl7-org:elm-types:r1}Integer, B {urn:hl7-org:elm-types:r1}String> as Choice<{urn:hl7-org:elm-types:r1}Integer, {urn:hl7-org:elm-types:r1}String>/
      );
  });
});

describe('AsCustomDataModelType', () => {
  beforeEach(function () {
    setup(this, data, [p1]);
  });

  it('should return back matching types', async function () {
    (await this.encounterAsEncounter.exec(this.ctx)).id.should.equal('http://cqframework.org/3/1');
    (await this.castEncounterAsEncounter.exec(this.ctx)).id.should.equal(
      'http://cqframework.org/3/1'
    );
    (await this.encounterAsRecord.exec(this.ctx)).id.should.equal('http://cqframework.org/3/1');
    (await this.castEncounterAsRecord.exec(this.ctx)).id.should.equal('http://cqframework.org/3/1');
    (await this.encounterAsAny.exec(this.ctx)).id.should.equal('http://cqframework.org/3/1');
    (await this.castEncounterAsAny.exec(this.ctx)).id.should.equal('http://cqframework.org/3/1');
    (await this.namedTupleAsEncounter.exec(this.ctx)).id.should.equal('1');
    (await this.castNamedTupleAsEncounter.exec(this.ctx)).id.should.equal('1');
  });

  it('should return null on non-matching types for non-strict cast', async function () {
    should(await this.encounterAsCondition.exec(this.ctx)).be.null();
    should(await this.encounterAsString.exec(this.ctx)).be.null();
    should(await this.listAsEncounter.exec(this.ctx)).be.null();
    should(await this.intervalAsEncounter.exec(this.ctx)).be.null();
    // Technically, this cast should fail, but this is a known bug that would require significant work to overcome
    // should((await this.tupleAsEncounter.exec(this.ctx))).be.null();
  });

  it('should throw on non-matching types for strict cast', async function () {
    await this.castEncounterAsCondition
      .exec(this.ctx)
      .should.be.rejectedWith(
        /Cannot cast {https:\/\/github\.com\/cqframework\/cql-execution\/simple}Encounter as {https:\/\/github\.com\/cqframework\/cql-execution\/simple}Condition/
      );
    await this.castEncounterAsString
      .exec(this.ctx)
      .should.be.rejectedWith(
        /Cannot cast {https:\/\/github\.com\/cqframework\/cql-execution\/simple}Encounter as {urn:hl7-org:elm-types:r1}String/
      );
    await this.castListAsEncounter
      .exec(this.ctx)
      .should.be.rejectedWith(
        /Cannot cast List<{https:\/\/github\.com\/cqframework\/cql-execution\/simple}Encounter> as {https:\/\/github\.com\/cqframework\/cql-execution\/simple}Encounter/
      );
    await this.castIntervalAsEncounter
      .exec(this.ctx)
      .should.be.rejectedWith(
        /Cannot cast Interval<{urn:hl7-org:elm-types:r1}Integer> as {https:\/\/github\.com\/cqframework\/cql-execution\/simple}Encounter/
      );
    // Technically, this cast should fail, but this is a known bug that would require significant work to overcome
    // await this.castTupleAsEncounter.exec(this.ctx).should.be.rejectedWith(/Cannot cast Tuple<id {urn:hl7-org:elm-types:r1}String> as {urn:hl7-org:elm-types:r1}Encounter/);
  });
});
