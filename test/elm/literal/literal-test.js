/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const should = require('should');
const setup = require('../../setup');
const data = require('./data');

describe('Literal', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should convert true to boolean true', function() {
    return this.boolTrue.value.should.be.true();
  });

  it('should execute true as true', function() {
    return this.boolTrue.exec(this.ctx).should.be.true();
  });

  it('should convert false to boolean false', function() {
    return this.boolFalse.value.should.be.false();
  });

  it('should execute false as false', function() {
    return this.boolFalse.exec(this.ctx).should.be.false();
  });

  it('should convert 1 to int 1', function() {
    return this.intOne.value.should.equal(1);
  });

  it('should execute 1 as 1', function() {
    return this.intOne.exec(this.ctx).should.equal(1);
  });

  it('should convert .1 to decimal .1', function() {
    return this.decimalTenth.value.should.equal(0.1);
  });

  it('should execute .1 as .1', function() {
    return this.decimalTenth.exec(this.ctx).should.equal(0.1);
  });

  it('should convert \'true\' to string \'true\'', function() {
    return this.stringTrue.value.should.equal('true');
  });

  it('should execute \'true\' as \'true\'', function() {
    return this.stringTrue.exec(this.ctx).should.equal('true');
  });

  it('should execute \'\' as correct DateTime', function() {
    const d = this.dateTimeX.exec(this.ctx);
    d.isTime().should.be.false();
    d.year.should.equal(2012);
    d.month.should.equal(2);
    d.day.should.equal(15);
    d.hour.should.equal(12);
    d.minute.should.equal(10);
    d.second.should.equal(59);
    d.millisecond.should.equal(456);
    return d.timezoneOffset.should.equal(0);
  });

  return it('should execute \'\' as correct Time', function() {
    const d = this.timeX.exec(this.ctx);
    d.isTime().should.be.true();
    d.year.should.equal(0);
    d.month.should.equal(1);
    d.day.should.equal(1);
    d.hour.should.equal(12);
    d.minute.should.equal(10);
    d.second.should.equal(59);
    d.millisecond.should.equal(456);
    return should(d.timezoneOffset).be.null();
  });
});