// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/* eslint-env mocha */
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const should = require('should');
const { ThreeValuedLogic } = require('../../lib/datatypes/logic');

describe('ThreeValuedLogic.and', function() {

  it('should return true when all is true', () => ThreeValuedLogic.and(true, true, true, true, true).should.be.true());

  it('should return false when at least one is false', function() {
    ThreeValuedLogic.and(true, true, false, true, true).should.be.false();
    ThreeValuedLogic.and(null, null, false, null, null).should.be.false();
    ThreeValuedLogic.and(true, true, false, null, true).should.be.false();
    return ThreeValuedLogic.and(false, false, false, false, false).should.be.false();
  });

  return it('should return null when there is at least one null with no falses', function() {
    should.not.exist(ThreeValuedLogic.and(true, true, null, true, true));
    return should.not.exist(ThreeValuedLogic.and(null, null, null, null, null));
  });
});

describe('ThreeValuedLogic.or', function() {

  it('should return true when at least one is true', function() {
    ThreeValuedLogic.or(false, false, true, false, false).should.be.true();
    ThreeValuedLogic.or(null, null, true, null, null).should.be.true();
    ThreeValuedLogic.or(false, false, true, null, false).should.be.true();
    return ThreeValuedLogic.or(true, true, true, true, true).should.be.true();
  });

  it('should return false when all is false', () => ThreeValuedLogic.or(false, false, false, false, false).should.be.false());

  return it('should return null when there is at least one null with no trues', function() {
    should(ThreeValuedLogic.or(false, false, null, false, false)).be.null();
    return should(ThreeValuedLogic.or(null, null, null, null, null)).be.null();
  });
});

describe('ThreeValuedLogic.xor', function() {

  it('should return true when exlusive', function() {
    ThreeValuedLogic.xor(false, true).should.be.true();
    ThreeValuedLogic.xor(false, true).should.be.true();
    ThreeValuedLogic.xor(true, false, false, false).should.be.true();
    ThreeValuedLogic.xor(false, true, false, false).should.be.true();
    ThreeValuedLogic.xor(true, true, true, false, false).should.be.true();
    return ThreeValuedLogic.xor(false, false, true, false, false).should.be.true();
  });

  it('should return false when not exlcusive', function() {
    ThreeValuedLogic.xor(true, true).should.be.false();
    ThreeValuedLogic.xor(false, false).should.be.false();
    ThreeValuedLogic.xor(true, false, true).should.be.false();
    ThreeValuedLogic.xor(false, true, true).should.be.false();
    ThreeValuedLogic.xor(true, true, false).should.be.false();
    ThreeValuedLogic.xor(false, false, false).should.be.false();
    return ThreeValuedLogic.xor(false, false, true, false, true).should.be.false();
  });

  return it('should return null when there is at least one null', function() {
    should(ThreeValuedLogic.xor(true, null)).be.null();
    should(ThreeValuedLogic.xor(false, null)).be.null();
    should(ThreeValuedLogic.xor(true, false, null)).be.null();
    should(ThreeValuedLogic.xor(false, true, null)).be.null();
    return should(ThreeValuedLogic.xor(false, false, true, null, false)).be.null();
  });
});

describe('ThreeValuedLogic.not', function() {

  it('should return true when input is false', () => ThreeValuedLogic.not(false).should.be.true());

  it('should return false when input is true', () => ThreeValuedLogic.not(true).should.be.false());

  return it('should return null when input is null', () => should.not.exist(ThreeValuedLogic.not(null)));
});
