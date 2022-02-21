import should from 'should';
import setup from '../../setup';
const vsets = require('./valuesets');
import * as DT from '../../../src/datatypes/datatypes';
import { PatientContext } from '../../../src/cql';
import { Uncertainty } from '../../../src/datatypes/uncertainty';
const { p1, p2, p3 } = require('./patients');
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

describe('CalculateAge', () => {
  beforeEach(function () {
    setup(this, data, [p1]);
    // Note, tests are inexact (otherwise test needs to repeat exact logic we're testing)
    // p1 birth date is 1980-06-17
    this.bday = new Date(1980, 5, 17);
    this.bdayPlus20 = new Date(2000, 5, 18);
    this.ctx = new PatientContext(
      this.ctx.library,
      this.ctx.patient,
      this.ctx.codeService,
      this.ctx.parameters,
      DT.DateTime.fromJSDate(this.bdayPlus20)
    );

    this.today = this.ctx.getExecutionDateTime();
    // according to spec, dates without timezones are in *current* time offset, so need to adjust
    const offsetDiff = this.today.toJSDate().getTimezoneOffset() - this.bday.getTimezoneOffset();
    this.bday.setMinutes(this.bday.getMinutes() + offsetDiff);

    // this is getting the possible number of months in years with the addtion of an offset
    // to get the correct number of months
    const month_offset = this.today.month === 5 && this.today.getDate() < 17 ? 6 : 5;
    this.full_months = (this.today.year - 1980) * 12 + (this.today.month - month_offset);

    this.timediff = this.today.toJSDate() - this.bday;
  }); // diff in milliseconds

  it('should execute age in years', function () {
    this.years.exec(this.ctx).should.equal(Math.floor(this.full_months / 12));
  });

  it.skip('should execute age in months', function () {
    // This test is failing if you run it in the first half of any
    // given month and passing for the second half.

    // what is returned will depend on whether the day in the current month has
    // made it to the 17th day of the month as declared in the birthday
    const dayOfMonth = this.today.toJSDate();
    // Test executing on each day of the month (up to 28 for simplicity).
    for (let i = 1; i <= 28; i++) {
      dayOfMonth.setDate(i);
      const month_offset = dayOfMonth.getMonth() === 5 && dayOfMonth.getDate() < 17 ? 6 : 5;
      const full_months =
        (dayOfMonth.getFullYear() - 1980) * 12 + (dayOfMonth.getMonth() - month_offset);
      [full_months, full_months + 1].indexOf(this.months.exec(this.ctx)).should.not.equal(-1);
    }
  });

  it('should execute age in weeks', function () {
    // this is an uncertainty since birthdate is only specfied to days
    this.weeks
      .exec(this.ctx)
      .should.eql(
        Math.floor(
          Math.floor(
            Math.floor(Math.floor(Math.floor(Math.floor(this.timediff / 1000) / 60) / 60) / 24) / 7
          )
        )
      );
  });

  it('should execute age in days', function () {
    // this is an uncertainty since birthdate is only specfied to days
    const days = Math.floor(
      Math.floor(Math.floor(Math.floor(this.timediff / 1000) / 60) / 60) / 24
    );
    this.days.exec(this.ctx).should.eql(new Uncertainty(days - 1, days));
  });

  // temporarily skip since this test only works when DST is in effect
  it.skip('should execute age in hours', function () {
    // this is an uncertainty since birthdate is only specfied to days
    const hours = Math.floor(Math.floor(Math.floor(this.timediff / 1000) / 60) / 60);
    this.hours.exec(this.ctx).should.eql(new Uncertainty(hours - 24, hours));
  });

  // temporarily skip since this test only works when DST is in effect
  it.skip('should execute age in minutes', function () {
    // this is an uncertainty since birthdate is only specfied to days
    const minutes = Math.floor(Math.floor(this.timediff / 1000) / 60);
    this.minutes.exec(this.ctx).should.eql(new Uncertainty(minutes - 24 * 60, minutes));
  });

  // temporarily skip since this test only works when DST is in effect
  it.skip('should execute age in seconds', function () {
    // this is an uncertainty since birthdate is only specfied to days
    const seconds = Math.floor(this.timediff / 1000);
    this.seconds.exec(this.ctx).should.eql(new Uncertainty(seconds - 24 * 60 * 60, seconds));
  });
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

  it('should convert date to DateTime, give 17 (using CalculateAgeInYearsAt)', function () {
    setup(this, data, [p3]);
    this.calculateAgeInYearsDateArg.exec(this.ctx).should.eql(17);
  });
});
