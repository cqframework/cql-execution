const setup = require('../../setup');
const data = require('./data');
const { p1 } = require('./patients');

describe('IsSystemType', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should correctly accept matching types', function () {
    this.fiveIsInteger.exec(this.ctx).should.be.true();
    this.fiveIsDecimal.exec(this.ctx).should.be.true();
    this.fivePointFiveIsDecimal.exec(this.ctx).should.be.true();
  });

  it('should correctly reject non-matching types', function () {
    this.fivePointFiveIsInteger.exec(this.ctx).should.be.false();
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
