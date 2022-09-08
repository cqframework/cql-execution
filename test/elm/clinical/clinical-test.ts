import should from 'should';
import setup from '../../setup';
const vsets = require('./valuesets');
import * as DT from '../../../src/datatypes/datatypes';
import { Uncertainty } from '../../../src/datatypes/uncertainty';
const { p1, p2, p3, p4, p5 } = require('./patients');
import { PatientSource } from '../../../src/cql-patient';
const data = require('./data');

describe('ValueSetDef', () => {
  beforeEach(function () {
    setup(this, data, [], vsets);
  });

  it('should return a resolved value set when the codeService knows about it', function () {
    const vs = this.known.exec(this.ctx);
    vs.oid.should.equal('2.16.840.1.113883.3.464.1003.101.12.1061');
    vs.version.should.equal('20140501');
    vs.codes.length.should.equal(3);
  });

  it('should execute one-arg to ValueSet with ID', function () {
    const vs = this['unknown One Arg'].exec(this.ctx);
    vs.oid.should.equal('1.2.3.4.5.6.7.8.9');
    should.not.exist(vs.version);
  });

  it('should execute two-arg to ValueSet with ID and version', function () {
    const vs = this['unknown Two Arg'].exec(this.ctx);
    vs.oid.should.equal('1.2.3.4.5.6.7.8.9');
    vs.version.should.equal('1');
  });
});

describe('ValueSetRef', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should have a name', function () {
    this.foo.name.should.equal('Acute Pharyngitis');
  });

  it('should execute to the defined value set', function () {
    this.foo.exec(this.ctx).oid.should.equal('2.16.840.1.113883.3.464.1003.101.12.1001');
  });
});

describe('InValueSet', () => {
  beforeEach(function () {
    setup(this, data, [], vsets);
  });

  it('should find string code in value set', function () {
    this.string.exec(this.ctx).should.be.true();
  });

  it('should throw an error when codes are in several codesystems', function () {
    should(() => this.sharedCodesFoo.exec(this.ctx)).throw(
      'In (valueset) is ambiguous -- multiple codes with multiple code systems exist in value set.'
    );
  });

  it('should return false when there are multiple codesystems in a valueset but the string does not match any codes in valueset', function () {
    this.sharedCodesNoMatch.exec(this.ctx).should.be.false();
  });

  it('should throw an error if not all codes have the same codesystem', function () {
    should(() => this.improperSharedCodesCodeValue.exec(this.ctx)).throw(
      'In (valueset) is ambiguous -- multiple codes with multiple code systems exist in value set.'
    );
  });

  it('should find string code in versioned value set', function () {
    this.stringInVersionedValueSet.exec(this.ctx).should.be.true();
  });

  it('should not find short code in value set (missing code system)', function () {
    this.shortCode.exec(this.ctx).should.be.false();
  });

  it('should find medium code in value set', function () {
    this.mediumCode.exec(this.ctx).should.be.true();
  });

  it('should find long code in value set', function () {
    this.longCode.exec(this.ctx).should.be.true();
  });

  it('should not find string code in value set', function () {
    this.wrongString.exec(this.ctx).should.be.false();
  });

  it('should not find string code in versioned value set', function () {
    this.wrongStringInVersionedValueSet.exec(this.ctx).should.be.false();
  });

  it('should not find short code in value set (missing code system)', function () {
    this.wrongShortCode.exec(this.ctx).should.be.false();
  });

  it('should not find medium code in value set', function () {
    this.wrongMediumCode.exec(this.ctx).should.be.false();
  });

  it('should find long code with different version in value set', function () {
    this.longCodeDifferentVersion.exec(this.ctx).should.be.true();
  });

  it('should not find code if it is null', function () {
    this.nullCode.exec(this.ctx).should.be.false();
  });

  it('should return true if code in list is equivalent', function () {
    this.inListOfCodes.exec(this.ctx).should.be.true();
  });

  it('should return true if code in list is equivalent using ExpressionRef', function () {
    this.inListOfCodesExpressionRef.exec(this.ctx).should.be.true();
  });

  it('should return false if no code in list is equivalent', function () {
    this.inWrongListOfCodes.exec(this.ctx).should.be.false();
  });

  it('should ignore null codes in list', function () {
    this.listOfCodesWithNull.exec(this.ctx).should.be.true();
  });

  it('should return false for null list of codes', function () {
    this.listOfCodesNull.exec(this.ctx).should.be.false();
  });
});

describe('Patient Property In ValueSet', () => {
  beforeEach(function () {
    setup(this, data, [], vsets);
  });

  it('should find that John is not female', function () {
    this.ctx.patient = new PatientSource([p1]).currentPatient();
    this.isFemale.exec(this.ctx).should.be.false();
  });

  it('should find that Sally is female', function () {
    this.ctx.patient = new PatientSource([p2]).currentPatient();
    this.isFemale.exec(this.ctx).should.be.true();
  });
});

describe('CodeDef', () => {
  beforeEach(function () {
    setup(this, data, []);
  });

  it('should return a CodeDef', function () {
    const codeDef = this.lib.getCode('Tobacco smoking status code');
    codeDef.constructor.name.should.equal('CodeDef');
    codeDef.name.should.equal('Tobacco smoking status code');
  });

  it('should execute to a Code datatype', function () {
    const codeDef = this.lib.getCode('Tobacco smoking status code');
    const code = codeDef.exec(this.ctx);
    code.code.should.equal('72166-2');
    code.system.should.equal('http://loinc.org');
    should.not.exist(code.version);
    code.display.should.equal('Tobacco smoking status');
  });
});

describe('CodeRef', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should have a name', function () {
    this.foo.name.should.equal('Tobacco smoking status code');
  });

  it('should execute to the defined code', function () {
    const code = this.foo.exec(this.ctx);
    code.code.should.equal('72166-2');
    code.system.should.equal('http://loinc.org');
    should.not.exist(code.version);
    code.display.should.equal('Tobacco smoking status');
  });
});

describe('ConceptDef', () => {
  beforeEach(function () {
    setup(this, data, []);
  });

  it('should return a ConceptDef', function () {
    const conceptDef = this.lib.getConcept('Tobacco smoking status');
    conceptDef.constructor.name.should.equal('ConceptDef');
    conceptDef.name.should.equal('Tobacco smoking status');
  });

  it('should execute to a Concept datatype', function () {
    const conceptDef = this.lib.getConcept('Tobacco smoking status');
    const concept = conceptDef.exec(this.ctx);
    concept.display.should.equal('Tobacco smoking status');
    concept.codes.should.have.length(1);
    concept.codes[0].code.should.equal('72166-2');
    concept.codes[0].system.should.equal('http://loinc.org');
    should.not.exist(concept.codes[0].version);
    concept.codes[0].display.should.equal('Tobacco smoking status');
  });
});

describe('ConceptRef', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should have a name', function () {
    this.foo.name.should.equal('Tobacco smoking status');
  });

  it('should execute to the defined concept', function () {
    const concept = this.foo.exec(this.ctx);
    concept.display.should.equal('Tobacco smoking status');
    concept.codes.should.have.length(1);
    concept.codes[0].code.should.equal('72166-2');
    concept.codes[0].system.should.equal('http://loinc.org');
    should.not.exist(concept.codes[0].version);
    concept.codes[0].display.should.equal('Tobacco smoking status');
  });
});

describe('CalculateAge: Fully Specified Birth Date', () => {
  // Patient birth date: 1980-06-17 at 9:00am GMT
  beforeEach(function () {
    setup(this, data, [p1]);
    // Execute these tests as if it is 2020-10-01 at 12:01:02.003 GMT
    this.ctx.executionDateTime = new DT.DateTime(2020, 10, 1, 12, 1, 2, 3, 0);
  });

  it('should execute age in years', function () {
    this.years.exec(this.ctx).should.equal(40);
  });

  it('should execute age in months', function () {
    this.months.exec(this.ctx).should.equal(483);
  });

  it('should execute age in weeks', function () {
    this.weeks.exec(this.ctx).should.equal(2102);
  });

  it('should execute age in days', function () {
    this.days.exec(this.ctx).should.equal(14716);
  });

  it('should execute age in hours', function () {
    // 14716 days * 24 hours + 3 hours
    this.hours.exec(this.ctx).should.equal(353187);
  });

  it('should execute age in minutes', function () {
    // 353187 hours * 60 minutes + 1 minute
    this.minutes.exec(this.ctx).should.equal(21191221);
  });

  it('should execute age in seconds', function () {
    // 21191221 minutes * 60 seconds + 2 seconds
    this.seconds.exec(this.ctx).should.equal(1271473262);
  });
});

describe('CalculateAge: Fully Specified Birth Date on Today', () => {
  // Patient birth date: 1980-10-01 at 2:00pm GMT
  beforeEach(function () {
    setup(this, data, [p4]);
    // Execute these tests as if it is 2020-10-01 at 12:01:02.003 GMT
    this.ctx.executionDateTime = new DT.DateTime(2020, 10, 1, 12, 1, 2, 3, 0);
  });

  it('should execute age in years', function () {
    this.years.exec(this.ctx).should.equal(40);
  });

  it('should execute age in months', function () {
    this.months.exec(this.ctx).should.equal(480);
  });

  it('should execute age in weeks', function () {
    this.weeks.exec(this.ctx).should.equal(2087);
  });

  it('should execute age in days', function () {
    this.days.exec(this.ctx).should.equal(14609);
  });

  it('should execute age in hours', function () {
    // 14609 days * 24 hours + 22 hours
    this.hours.exec(this.ctx).should.equal(350638);
  });

  it('should execute age in minutes', function () {
    // 350638 hours * 60 minutes + 1 minute
    this.minutes.exec(this.ctx).should.equal(21038281);
  });

  it('should execute age in seconds', function () {
    // 21038281 minutes * 60 seconds + 2 seconds
    this.seconds.exec(this.ctx).should.equal(1262296862);
  });
});

describe('CalculateAge: Date-Only Birth Date as DateTime', () => {
  // Patient birth date: 1980-06-17 w/ no time component
  beforeEach(function () {
    setup(this, data, [p2]);
    // Execute these tests as if it is 2020-10-01 at 12:01:02.003 GMT
    this.ctx.executionDateTime = new DT.DateTime(2020, 10, 1, 12, 1, 2, 3, 0);
    // Fix the timezone offset to 0 to make things more predictable
    this.ctx.patient.birthDate.timezoneOffset = 0;
  });

  it('should execute age in years', function () {
    this.years.exec(this.ctx).should.equal(40);
  });

  it('should execute age in months', function () {
    this.months.exec(this.ctx).should.equal(483);
  });

  it('should execute age in weeks', function () {
    this.weeks.exec(this.ctx).should.equal(2102);
  });

  it('should execute age in days', function () {
    this.days.exec(this.ctx).should.eql(new Uncertainty(14715, 14716));
  });

  it('should execute age in hours', function () {
    // Uncertain low (from 1980-06-17TZ23:23:59.999Z):  14716 days * 24 hours - 12
    // Uncertain high (from 1980-06-17T00:00:00.000Z): 14716 days * 24 hour + 12 hours
    this.hours.exec(this.ctx).should.eql(new Uncertainty(353172, 353196));
  });

  it('should execute age in minutes', function () {
    // Uncertain low (from 1980-06-17TZ23:23:59.999Z):  353172 hours * 60 minutes + 1 minute
    // Uncertain high (from 1980-06-17T00:00:00.000Z): 353196 hours * 60 minutes + 1 minute
    this.minutes.exec(this.ctx).should.eql(new Uncertainty(21190321, 21191761));
  });

  it('should execute age in seconds', function () {
    // Uncertain low (from 1980-06-17TZ23:23:59.999Z):  21190321 minutes * 60 seconds + 2 seconds
    // Uncertain high (from 1980-06-17T00:00:00.000Z): 21191761 minutes * 60 seconds + 2 seconds
    this.seconds.exec(this.ctx).should.eql(new Uncertainty(1271419262, 1271505662));
  });
});

describe('CalculateAge: Date-Only Birth Date as DateTime on Today', () => {
  // Patient birth date: 1980-10-01
  beforeEach(function () {
    setup(this, data, [p5]);
    // Execute these tests as if it is 2020-10-01 at 12:01:02.003 GMT
    this.ctx.executionDateTime = new DT.DateTime(2020, 10, 1, 12, 1, 2, 3, 0);
    // Fix the timezone offset to 0 to make things more predictable
    this.ctx.patient.birthDate.timezoneOffset = 0;
  });

  it('should execute age in years', function () {
    this.years.exec(this.ctx).should.equal(40);
  });

  it('should execute age in months', function () {
    this.months.exec(this.ctx).should.equal(480);
  });

  it('should execute age in weeks', function () {
    this.weeks.exec(this.ctx).should.equal(2087);
  });

  it('should execute age in days', function () {
    this.days.exec(this.ctx).should.eql(new Uncertainty(14609, 14610));
  });

  it('should execute age in hours', function () {
    // Uncertain low (from 1980-10-01TZ23:23:59.999Z):  14610 days * 24 hours - 12
    // Uncertain high (from 1980-10-01T00:00:00.000Z): 14610 days * 24 hour + 12 hours
    this.hours.exec(this.ctx).should.eql(new Uncertainty(350628, 350652));
  });

  it('should execute age in minutes', function () {
    // Uncertain low (from 1980-10-01TZ23:23:59.999Z):  350628 hours * 60 minutes + 1 minute
    // Uncertain high (from 1980-10-01T00:00:00.000Z): 350652 hours * 60 minutes + 1 minute
    this.minutes.exec(this.ctx).should.eql(new Uncertainty(21037681, 21039121));
  });

  it('should execute age in seconds', function () {
    // Uncertain low (from 1980-10-01TZ23:23:59.999Z):  21037681 minutes * 60 seconds + 2 seconds
    // Uncertain high (from 1980-10-01T00:00:00.000Z): 21039121 minutes * 60 seconds + 2 seconds
    this.seconds.exec(this.ctx).should.eql(new Uncertainty(1262260862, 1262347262));
  });
});

describe('CalculateAge: Date-Only Birth Date as Date', () => {
  // Patient birth date: 1980-06-17 w/ no time component
  beforeEach(function () {
    setup(this, data, [p2]);
    // Execute these tests as if it is 2020-10-01 at 12:01:02.003 GMT
    this.ctx.executionDateTime = new DT.DateTime(2020, 10, 1, 12, 1, 2, 3, 0);
    // Change it to the Date class
    this.ctx.patient.birthDate = new DT.Date(1980, 6, 17);
  });

  it('should execute age in years', function () {
    this.years.exec(this.ctx).should.equal(40);
  });

  it('should execute age in months', function () {
    this.months.exec(this.ctx).should.equal(483);
  });

  it('should execute age in weeks', function () {
    this.weeks.exec(this.ctx).should.equal(2102);
  });

  it('should execute age in days', function () {
    this.days.exec(this.ctx).should.eql(new Uncertainty(14715, 14716));
  });

  // Don't test below days, as engine converts Date to DateTime, adding the local timezone.
  // This is a problem for tests since DST affects the values.
});

describe('CalculateAge: Date-Only Birth Date as Date on Today', () => {
  // Patient birth date: 1980-10-01
  beforeEach(function () {
    setup(this, data, [p5]);
    // Execute these tests as if it is 2020-10-01 at 12:01:02.003 GMT
    this.ctx.executionDateTime = new DT.DateTime(2020, 10, 1, 12, 1, 2, 3, 0);
    // Change it to the Date class
    this.ctx.patient.birthDate = new DT.Date(1980, 10, 1);
  });

  it('should execute age in years', function () {
    this.years.exec(this.ctx).should.equal(40);
  });

  it('should execute age in months', function () {
    this.months.exec(this.ctx).should.equal(480);
  });

  it('should execute age in weeks', function () {
    this.weeks.exec(this.ctx).should.equal(2087);
  });

  it('should execute age in days', function () {
    this.days.exec(this.ctx).should.eql(new Uncertainty(14609, 14610));
  });

  // Don't test below days, as engine converts Date to DateTime, adding the local timezone.
  // This is a problem for tests since DST affects the values.
});

describe('CalculateAgeAt', () => {
  beforeEach(function () {
    setup(this, data, [p1]);
  });

  it('should execute age at 2012 as 31 - 32 (since 2012 is not precise to days)', function () {
    this.ageAt2012.exec(this.ctx).should.eql(new Uncertainty(31, 32));
  });

  it('should execute age at 19810216 as 0', function () {
    this.ageAt19810216.exec(this.ctx).should.equal(0);
  });

  it('should execute age at 1975 as -5 to -4 (since 1975 is not precise to days)', function () {
    this.ageAt1975.exec(this.ctx).should.eql(new Uncertainty(-5, -4));
  });

  it('should give an uncertainty due to birthdate time component with (using AgeInYearsAt)', function () {
    setup(this, data, [p3]);
    this.ageInYearsDateTimeArg.exec(this.ctx).should.eql(new Uncertainty(17, 18));
  });

  it('should give an uncertainty due to birthdate time component (using CalculateAgeInYearsAt)', function () {
    setup(this, data, [p3]);
    this.calculateAgeInYearsDateTimeArg.exec(this.ctx).should.eql(new Uncertainty(17, 18));
  });

  it('should convert birthdate to date, give 18 (using AgeInYearsAt)', function () {
    setup(this, data, [p3]);
    this.ageInYearsDateArg.exec(this.ctx).should.eql(18);
  });

  it('should convert date to DateTime, give uncertainty (using CalculateAgeInYearsAt)', function () {
    setup(this, data, [p3]);
    this.calculateAgeInYearsDateArg.exec(this.ctx).should.eql(new Uncertainty(17, 18));
  });
});
