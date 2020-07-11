/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const should = require('should');
const setup = require('../../setup');
const data = require('./data');
const str = require('../../../lib/elm/string');

describe('Concat', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it.skip('should be a Concat', function() {
    this.helloWorld.should.be.an.instanceOf(str.Concat);
    return this.helloWorldVariables.should.be.an.instanceOf(str.Concat);
  });

  it('should concat two strings', function() {
    return this.helloWorld.exec(this.ctx).should.equal('HelloWorld');
  });

  it('should concat multiple strings', function() {
    return this.sentence.exec(this.ctx).should.equal('The quick brown fox jumps over the lazy dog.');
  });

  it('should return null when an arg is null', function() {
    return should(this.concatNull.exec(this.ctx)).be.null();
  });

  return it('should concat variables', function() {
    return this.helloWorldVariables.exec(this.ctx).should.equal('HelloWorld');
  });
});

describe('Combine', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it.skip('should be a Combine', function() {
    return this.separator.should.be.an.instanceOf(str.Combine);
  });

  it('should combine strings with no separator', function() {
    return this.noSeparator.exec(this.ctx).should.equal('abcdefghijkl');
  });

  it('should combine strings with a separator', function() {
    return this.separator.exec(this.ctx).should.equal('abc;def;ghi;jkl');
  });

  it('should return null when the list is null', function() {
    return should(this.combineNull.exec(this.ctx)).be.null();
  });

  it('should return null when an item in the list is null', function() {
    return this.combineNullItem.exec(this.ctx).should.equal('abc;def;jkl');
  });

  it('should return null for list of null', function() {
    return should(this.combineOneNullItem.exec(this.ctx)).be.null();
  });

  return it('should return null for empty list', function() {
    return should(this.combineEmptyNull.exec(this.ctx)).be.null();
  });
});

describe('Split', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it.skip('should be a Split', function() {
    return this.commaSeparated.should.be.an.instanceOf(str.Split);
  });

  it('should split strings on comma', function() {
    return this.commaSeparated.exec(this.ctx).should.eql(['a','b','c','','1','2','3']);
});

  it('should return single-item array when separator is not used', function() {
    return this.separatorNotUsed.exec(this.ctx).should.eql(['a,b,c,,1,2,3']);
});

  it('should return null when separating null', function() {
    return should(this.separateNull.exec(this.ctx)).be.null();
  });

  // TODO: Verify this assumption
  return it('should return null when the separator is null', function() {
    return should(this.separateUsingNull.exec(this.ctx)).be.null();
  });
});

describe('SplitOnMatches', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should splitOnMatches strings into a list of 2', function() {
    return this.splitOnMatchesListReturn.exec(this.ctx).should.eql(["foo ", " bar"]);
});

  it('should return a list of two empty strings if its an exact match', function() {
    return this.splitOnMatchesOriginalString.exec(this.ctx).should.eql(['','']);
});

  it('should return original string because there was no match', function() {
    return this.splitOnMatchesNoMatch.exec(this.ctx).should.eql(['foobar']);
});

  it('should return null when stringToSplit is null', function() {
    return should(this.splitOnMatchesIsNullFirst.exec(this.ctx)).be.null();
  });

  it('should return null when separatorPattern is null', function() {
    return should(this.splitOnMatchesIsNullSecond.exec(this.ctx)).be.null();
  });

  return it('should return null when both parameters are null', function() {
    return should(this.splitOnMatchesAllNull.exec(this.ctx)).be.null();
  });
});

describe('Matches', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should match and return true', function() {
    return this.matchesTrue.exec(this.ctx).should.be.true();
  });

  it('should not match and return false', function() {
    return this.matchesFalse.exec(this.ctx).should.be.false();
  });

  it('should not match when string to match is null and return null', function() {
    return should(this.matchesIsNullFirst.exec(this.ctx)).be.null();
  });

  it('should not match and return null', function() {
    return should(this.matchesIsNullSecond.exec(this.ctx)).be.null();
  });

  return it('should return null if both arguments are null', function() {
    return should(this.matchesAllNull.exec(this.ctx)).be.null();
  });
});

describe('Length', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it.skip('should be a Length', function() {
    return this.elevenLetters.should.be.an.instanceOf(str.Length);
  });

  it('should count letters in string', function() {
    return this.elevenLetters.exec(this.ctx).should.equal(11);
  });

  return it('should return null when string is null', function() {
    return should(this.nullString.exec(this.ctx)).be.null();
  });
});

describe('Upper', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it.skip('should be an Upper', function() {
    return this.upperC.should.be.an.instanceOf(str.Upper);
  });

  it('should convert lower to upper', function() {
    return this.lowerC.exec(this.ctx).should.equal('ABCDEFG123');
  });

  it('should leave upper as upper', function() {
    return this.upperC.exec(this.ctx).should.equal('ABCDEFG123');
  });

  it('should convert camel to upper', function() {
    return this.camelC.exec(this.ctx).should.equal('ABCDEFG123');
  });

  return it('should return null when uppering null', function() {
    return should(this.nullString.exec(this.ctx)).be.null();
  });
});

describe('Lower', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it.skip('should be a Lower', function() {
    return this.lowerC.should.be.an.instanceOf(str.Lower);
  });

  it('should leave lower as lower', function() {
    return this.lowerC.exec(this.ctx).should.equal('abcdefg123');
  });

  it('should convert upper to lower', function() {
    return this.upperC.exec(this.ctx).should.equal('abcdefg123');
  });

  it('should convert camel to lower', function() {
    return this.camelC.exec(this.ctx).should.equal('abcdefg123');
  });

  return it('should return null when lowering null', function() {
    return should(this.nullString.exec(this.ctx)).be.null();
  });
});

// TODO: Verify behavior since its different than JS
describe('Indexer', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should get letter at index', function() {
    return this.helloWorldSix.exec(this.ctx).should.equal('o');
  });

  it('should not return null on index 0 (no longer out of bounds)', function() {
    return should(this.helloWorldZero.exec(this.ctx)).not.be.null();
  });

  it('should return null on index 20 (out of bounds)', function() {
    return should(this.helloWorldTwenty.exec(this.ctx)).be.null();
  });

  it('should return null when string is null', function() {
    return should(this.nullString.exec(this.ctx)).be.null();
  });

  return it('should return null when index is null', function() {
    return should(this.nullIndex.exec(this.ctx)).be.null();
  });
});

describe('PositionOf', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it.skip('should be a PositionOf', function() {
    return this.found.should.be.an.instanceOf(str.Pos);
  });

  it('should return 0-based position', function() {
    return this.found.exec(this.ctx).should.equal(2);
  });

  it('should return -1 when not found', function() {
    return this.notFound.exec(this.ctx).should.equal(-1);
  });

  it('should return null when pattern is null', function() {
    return should(this.nullPattern.exec(this.ctx)).be.null();
  });

  return it('should return null when string is null', function() {
    return should(this.nullString.exec(this.ctx)).be.null();
  });
});

describe('Substring', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it.skip('should be a Substring', function() {
    return this.world.should.be.an.instanceOf(str.Substring);
  });

  it('should get substring to end', function() {
    return this.world.exec(this.ctx).should.equal('World');
  });

  it('should get substring with length', function() {
    return this.or.exec(this.ctx).should.equal('rl');
  });

  it('should get substring with zero length', function() {
    return this.zeroLength.exec(this.ctx).should.equal('');
  });

  it('should return null on index -1 (out of bounds)', function() {
    return should.not.exist(this.startTooLow.exec(this.ctx));
  });

  it('should not error on index 0 (not out of bounds)', function() {
    return this.startZero.exec(this.ctx).should.equal('HelloWorld');
  });

  it('should return rest of string on too much length', function() {
    return this.tooMuchLength.exec(this.ctx).should.equal('rld');
  });

  it('should return empty string on negative length', function() {
    return this.negativeLength.exec(this.ctx).should.equal('');
  });

  it('should return null when string is null', function() {
    return should(this.nullString.exec(this.ctx)).be.null();
  });

  return it('should return null when start is null', function() {
    return should(this.nullStart.exec(this.ctx)).be.null();
  });
});

describe('StartsWith', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should be true when it does start with', function() {
    return this.fooBarStartsWithFoo.exec(this.ctx).should.be.true();
  });

  it('should be false when it does not start with', function() {
    return this.fooBarStartsWithBar.exec(this.ctx).should.be.false();
  });

  it('should be true for starts with blank', function() {
    return this.fooBarStartsWithBlank.exec(this.ctx).should.be.true();
  });

  it('should be false for blank starts with', function() {
    return this.blankStartsWithFoo.exec(this.ctx).should.be.false();
  });

  return it('should be null when either arg is null', function() {
    should(this.startsWithNull.exec(this.ctx)).be.null();
    should(this.startsWithNullAsString.exec(this.ctx)).be.null();
    should(this.nullStartsWith.exec(this.ctx)).be.null();
    return should(this.nullAsStringStartsWith.exec(this.ctx)).be.null();
  });
});

describe('EndsWith', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should be true when it does end with', function() {
    return this.fooBarEndsWithBar.exec(this.ctx).should.be.true();
  });

  it('should be false when it does not end with', function() {
    return this.fooBarEndsWithFoo.exec(this.ctx).should.be.false();
  });

  it('should be true for ends with blank', function() {
    return this.fooBarEndsWithBlank.exec(this.ctx).should.be.true();
  });

  it('should be false for blank ends with', function() {
    return this.blankEndsWithFoo.exec(this.ctx).should.be.false();
  });

  return it('should be null when either arg is null', function() {
    should(this.endsWithNull.exec(this.ctx)).be.null();
    should(this.endsWithNullAsString.exec(this.ctx)).be.null();
    should(this.nullEndsWith.exec(this.ctx)).be.null();
    return should(this.nullAsStringEndsWith.exec(this.ctx)).be.null();
  });
});
