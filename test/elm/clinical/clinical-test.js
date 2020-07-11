/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS205: Consider reworking code to avoid use of IIFEs
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const should = require('should');
const setup = require('../../setup');
const data = require('./data');
const vsets = require('./valuesets');
const DT = require('../../../lib/datatypes/datatypes');
const { PatientContext } =  require('../../../lib/cql');
const { Uncertainty } = require('../../../lib/datatypes/uncertainty');
const { p1, p2, p3 } = require('./patients');
const { PatientSource} = require('../../../lib/cql-patient');


describe('ValueSetDef', function() {
  this.beforeEach(function() {
    return setup(this, data, [], vsets);
  });

  it('should return a resolved value set when the codeService knows about it', function() {
    const vs = this.known.exec(this.ctx);
    vs.oid.should.equal('2.16.840.1.113883.3.464.1003.101.12.1061');
    vs.version.should.equal('20140501');
    return vs.codes.length.should.equal(3);
  });

  it('should execute one-arg to ValueSet with ID', function() {
    const vs = this['unknown One Arg'].exec(this.ctx);
    vs.oid.should.equal('1.2.3.4.5.6.7.8.9');
    return should.not.exist(vs.version);
  });

  return it('should execute two-arg to ValueSet with ID and version', function() {
    const vs = this['unknown Two Arg'].exec(this.ctx);
    vs.oid.should.equal('1.2.3.4.5.6.7.8.9');
    return vs.version.should.equal('1');
  });
});

describe('ValueSetRef', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should have a name', function() {
    return this.foo.name.should.equal('Acute Pharyngitis');
  });

  return it('should execute to the defined value set', function() {
    return this.foo.exec(this.ctx).oid.should.equal('2.16.840.1.113883.3.464.1003.101.12.1001');
  });
});

describe('InValueSet', function() {
  this.beforeEach(function() {
    return setup(this, data, [], vsets);
  });

  it('should find string code in value set', function() {
    return this.string.exec(this.ctx).should.be.true();
  });

  it('should throw an error when codes are in several codesystems', function() {
    return should(() => this.sharedCodesFoo.exec(this.ctx)).throw('In (valueset) is ambiguous -- multiple codes with multiple code systems exist in value set.');
  });

  it('should return false when there are multiple codesystems in a valueset but the string does not match any codes in valueset', function() {
    return this.sharedCodesNoMatch.exec(this.ctx).should.be.false();
  });

  it('should throw an error if not all codes have the same codesystem', function() {
    return should(() => this.improperSharedCodesCodeValue.exec(this.ctx)).throw('In (valueset) is ambiguous -- multiple codes with multiple code systems exist in value set.');
  });

  it('should find string code in versioned value set', function() {
    return this.stringInVersionedValueSet.exec(this.ctx).should.be.true();
  });

  it('should not find short code in value set (missing code system)', function() {
    return this.shortCode.exec(this.ctx).should.be.false();
  });

  it('should find medium code in value set', function() {
    return this.mediumCode.exec(this.ctx).should.be.true();
  });

  it('should find long code in value set', function() {
    return this.longCode.exec(this.ctx).should.be.true();
  });

  it('should not find string code in value set', function() {
    return this.wrongString.exec(this.ctx).should.be.false();
  });

  it('should not find string code in versioned value set', function() {
    return this.wrongStringInVersionedValueSet.exec(this.ctx).should.be.false();
  });

  it('should not find short code in value set (missing code system)', function() {
    return this.wrongShortCode.exec(this.ctx).should.be.false();
  });

  it('should not find medium code in value set', function() {
    return this.wrongMediumCode.exec(this.ctx).should.be.false();
  });

  it('should find long code with different version in value set', function() {
    return this.longCodeDifferentVersion.exec(this.ctx).should.be.true();
  });

  it('should not find code if it is null', function() {
    return this.nullCode.exec(this.ctx).should.be.false();
  });

  it('should return true if code in list is equivalent', function() {
    return this.inListOfCodes.exec(this.ctx).should.be.true();
  });

  it('should return true if code in list is equivalent using ExpressionRef', function() {
    return this.inListOfCodesExpressionRef.exec(this.ctx).should.be.true();
  });

  it('should return false if no code in list is equivalent', function() {
    return this.inWrongListOfCodes.exec(this.ctx).should.be.false();
  });

  it('should ignore null codes in list', function() {
    return this.listOfCodesWithNull.exec(this.ctx).should.be.true();
  });

  return it('should return false for null list of codes', function() {
    return this.listOfCodesNull.exec(this.ctx).should.be.false();
  });
});

describe('Patient Property In ValueSet', function() {
  this.beforeEach(function() {
    return setup(this, data, [], vsets);
  });

  it('should find that John is not female', function() {
    this.ctx.patient =  new PatientSource([ p1 ]).currentPatient();
    return this.isFemale.exec(this.ctx).should.be.false();
  });

  return it('should find that Sally is female', function() {
    this.ctx.patient =  new PatientSource([ p2 ]).currentPatient();
    return this.isFemale.exec(this.ctx).should.be.true();
  });
});

describe('CodeDef', function() {
  this.beforeEach(function() {
    return setup(this, data, []);});

  it('should return a CodeDef', function() {
    const codeDef = this.lib.getCode('Tobacco smoking status code');
    codeDef.constructor.name.should.equal('CodeDef');
    return codeDef.name.should.equal('Tobacco smoking status code');
  });

  return it('should execute to a Code datatype', function() {
    const codeDef = this.lib.getCode('Tobacco smoking status code');
    const code = codeDef.exec(this.ctx);
    code.code.should.equal('72166-2');
    code.system.should.equal('http://loinc.org');
    should.not.exist(code.version);
    return code.display.should.equal('Tobacco smoking status');
  });
});

describe('CodeRef', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should have a name', function() {
    return this.foo.name.should.equal('Tobacco smoking status code');
  });

  return it('should execute to the defined code', function() {
    const code = this.foo.exec(this.ctx);
    code.code.should.equal('72166-2');
    code.system.should.equal('http://loinc.org');
    should.not.exist(code.version);
    return code.display.should.equal('Tobacco smoking status');
  });
});

describe('ConceptDef', function() {
  this.beforeEach(function() {
    return setup(this, data, []);});

  it('should return a ConceptDef', function() {
    const conceptDef = this.lib.getConcept('Tobacco smoking status');
    conceptDef.constructor.name.should.equal('ConceptDef');
    return conceptDef.name.should.equal('Tobacco smoking status');
  });

  return it('should execute to a Concept datatype', function() {
    const conceptDef = this.lib.getConcept('Tobacco smoking status');
    const concept = conceptDef.exec(this.ctx);
    concept.display.should.equal('Tobacco smoking status');
    concept.codes.should.have.length(1);
    concept.codes[0].code.should.equal('72166-2');
    concept.codes[0].system.should.equal('http://loinc.org');
    should.not.exist(concept.codes[0].version);
    return concept.codes[0].display.should.equal('Tobacco smoking status');
  });
});

describe('ConceptRef', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should have a name', function() {
    return this.foo.name.should.equal('Tobacco smoking status');
  });

  return it('should execute to the defined concept', function() {
    const concept = this.foo.exec(this.ctx);
    concept.display.should.equal('Tobacco smoking status');
    concept.codes.should.have.length(1);
    concept.codes[0].code.should.equal('72166-2');
    concept.codes[0].system.should.equal('http://loinc.org');
    should.not.exist(concept.codes[0].version);
    return concept.codes[0].display.should.equal('Tobacco smoking status');
  });
});

describe('CalculateAge', function() {
  this.beforeEach(function() {
    setup(this, data, [ p1 ]);
    // Note, tests are inexact (otherwise test needs to repeat exact logic we're testing)
    // p1 birth date is 1980-06-17
    this.bday = new Date(1980, 5, 17);
    this.bdayPlus20 = new Date(2000, 5, 18);
    this.ctx = new PatientContext(this.ctx.library, this.ctx.patient, this.ctx.codeService, this.ctx.parameters, DT.DateTime.fromJSDate(this.bdayPlus20));

    this.today = this.ctx.getExecutionDateTime();
    // according to spec, dates without timezones are in *current* time offset, so need to adjust
    const offsetDiff = this.today.toJSDate().getTimezoneOffset() - this.bday.getTimezoneOffset();
    this.bday.setMinutes(this.bday.getMinutes() + offsetDiff);

    // this is getting the possible number of months in years with the addtion of an offset
    // to get the correct number of months
    const month_offset = (this.today.month === 5) && (this.today.getDate() < 17) ? 6 : 5;
    this.full_months = ((this.today.year - 1980) * 12) + (this.today.month - month_offset);

    return this.timediff = this.today.toJSDate() - this.bday;
  }); // diff in milliseconds

  it('should execute age in years', function() {
    return this.years.exec(this.ctx).should.equal(Math.floor(this.full_months / 12));
  });

  it.skip('should execute age in months', function() {
    // This test is failing if you run it in the first half of any
    // given month and passing for the second half.

    // what is returned will depend on whether the day in the current month has
    // made it to the 17th day of the month as declared in the birthday
    const dayOfMonth = this.today;
    // Test executing on each day of the month (up to 28 for simplicity).
    return (() => {
      const result = [];
      for (let i = 1; i <= 28; i++) {
        dayOfMonth.setDate(i);
        const month_offset = (dayOfMonth.getMonth() === 5) && (dayOfMonth.getDate() < 17) ? 6 : 5;
        const full_months = ((dayOfMonth.getFullYear() - 1980) * 12) + (dayOfMonth.getMonth() - month_offset);
        result.push([full_months, full_months+1].indexOf(this.months.exec(this.ctx)).should.not.equal(-1));
      }
      return result;
    })();
  });

  // Skipping because cql-to-elm in this branch does not properly translate AgeInWeeks
  it.skip('should execute age in weeks', function() {
    // this is an uncertainty since birthdate is only specfied to days
    return this.weeks.exec(this.ctx).should.eql(Math.floor(Math.floor(Math.floor(Math.floor(Math.floor(Math.floor(this.timediff / 1000) / 60) / 60) / 24) / 7)));
  });

  it('should execute age in days', function() {
    // this is an uncertainty since birthdate is only specfied to days
    const days = Math.floor(Math.floor(Math.floor(Math.floor(this.timediff / 1000) / 60) / 60) / 24);
    return this.days.exec(this.ctx).should.eql(new Uncertainty(days-1, days));
  });

  // temporarily skip since this test only works when DST is in effect
  it.skip('should execute age in hours', function() {
    // this is an uncertainty since birthdate is only specfied to days
    const hours = Math.floor(Math.floor(Math.floor(this.timediff / 1000) / 60) / 60);
    return this.hours.exec(this.ctx).should.eql(new Uncertainty(hours-24, hours));
  });

  // temporarily skip since this test only works when DST is in effect
  it.skip('should execute age in minutes', function() {
    // this is an uncertainty since birthdate is only specfied to days
    const minutes = Math.floor(Math.floor(this.timediff / 1000) / 60);
    return this.minutes.exec(this.ctx).should.eql(new Uncertainty(minutes-(24*60), minutes));
  });

  // temporarily skip since this test only works when DST is in effect
  return it.skip('should execute age in seconds', function() {
    // this is an uncertainty since birthdate is only specfied to days
    const seconds = Math.floor(this.timediff / 1000);
    return this.seconds.exec(this.ctx).should.eql(new Uncertainty(seconds-(24*60*60), seconds));
  });
});

describe('CalculateAgeAt', function() {
  this.beforeEach(function() {
    return setup(this, data, [ p1 ]);});

  it('should execute age at 2012 as 31 - 32 (since 2012 is not precise to days)', function() {
    return this.ageAt2012.exec(this.ctx).should.eql(new Uncertainty(31, 32));
  });

  it('should execute age at 19810216 as 0', function() {
    return this.ageAt19810216.exec(this.ctx).should.equal(0);
  });

  it('should execute age at 1975 as -5 to -4 (since 1975 is not precise to days)', function() {
    return this.ageAt1975.exec(this.ctx).should.eql(new Uncertainty(-5, -4));
  });

  it('should give an uncertainty due to birthdate time component with (using AgeInYearsAt)', function() {
    setup(this, data, [ p3 ]);
    return this.ageInYearsDateTimeArg.exec(this.ctx).should.eql(new Uncertainty(17, 18));
  });

  it('should give an uncertainty due to birthdate time component (using CalculateAgeInYearsAt)', function() {
    setup(this, data, [ p3 ]);
    return this.calculateAgeInYearsDateTimeArg.exec(this.ctx).should.eql(new Uncertainty(17, 18));
  });

  // TODO:unskip these tests after cql-to-elm updated to no longer implicitly convert these arguments
  xit('should convert birthdate to date, give 18 (using AgeInYearsAt)', function() {
    setup(this, data, [ p3 ]);
    return this.ageInYearsDateArg.exec(this.ctx).should.eql(18);
  });

  return xit('should convert birthdate to date, give 18 (using CalculateAgeInYearsAt)', function() {
    setup(this, data, [ p3 ]);
    return this.calculateAgeInYearsDateArg.exec(this.ctx).should.eql(18);
  });
});