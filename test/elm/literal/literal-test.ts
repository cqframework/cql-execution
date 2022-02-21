import should from 'should';
import setup from '../../setup';
const data = require('./data');

describe('Literal', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should convert true to boolean true', function () {
    this.boolTrue.value.should.be.true();
  });

  it('should execute true as true', function () {
    this.boolTrue.exec(this.ctx).should.be.true();
  });

  it('should convert false to boolean false', function () {
    this.boolFalse.value.should.be.false();
  });

  it('should execute false as false', function () {
    this.boolFalse.exec(this.ctx).should.be.false();
  });

  it('should convert 1 to int 1', function () {
    this.intOne.value.should.equal(1);
  });

  it('should execute 1 as 1', function () {
    this.intOne.exec(this.ctx).should.equal(1);
  });

  it('should convert .1 to decimal .1', function () {
    this.decimalTenth.value.should.equal(0.1);
  });

  it('should execute .1 as .1', function () {
    this.decimalTenth.exec(this.ctx).should.equal(0.1);
  });

  it("should convert 'true' to string 'true'", function () {
    this.stringTrue.value.should.equal('true');
  });

  it("should execute 'true' as 'true'", function () {
    this.stringTrue.exec(this.ctx).should.equal('true');
  });

  it("should execute '' as correct DateTime", function () {
    const d = this.dateTimeX.exec(this.ctx);
    d.isTime().should.be.false();
    d.year.should.equal(2012);
    d.month.should.equal(2);
    d.day.should.equal(15);
    d.hour.should.equal(12);
    d.minute.should.equal(10);
    d.second.should.equal(59);
    d.millisecond.should.equal(456);
    d.timezoneOffset.should.equal(0);
  });

  it("should execute '' as correct Time", function () {
    const d = this.timeX.exec(this.ctx);
    d.isTime().should.be.true();
    d.year.should.equal(0);
    d.month.should.equal(1);
    d.day.should.equal(1);
    d.hour.should.equal(12);
    d.minute.should.equal(10);
    d.second.should.equal(59);
    d.millisecond.should.equal(456);
    should(d.timezoneOffset).be.null();
  });
});

describe('Escape', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should escape single quote', function () {
    this.singleQuote.value.should.equal("'");
  });

  it('should escape double quote', function () {
    this.doubleQuote.value.should.equal('"');
  });

  it('should escape backtick', function () {
    this.backtick.value.should.equal('`');
  });

  it('should escape carriage return', function () {
    this.carriageReturn.value.should.equal('\r');
  });

  it('should escape line feed', function () {
    this.lineFeed.value.should.equal('\n');
  });

  it('should escape tab', function () {
    this.tab.value.should.equal('\t');
  });

  it('should escape form feed', function () {
    this.formFeed.value.should.equal('\f');
  });

  it('should escape backslash', function () {
    this.backslash.value.should.equal('\\');
  });

  it('should escape unicode', function () {
    this.unicode.value.should.equal('H');
  });
});
