import should from 'should';
import setup from '../../setup';
const data = require('./data');
import * as str from '../../../src/elm/string';
import * as overloaded from '../../../src/elm/overloaded';

describe('Concat', () => {
  beforeEach(function () {
    setup(this, data);
  });

  describe('+', () => {
    it('should be a Concat', function () {
      this.helloWorld.should.be.an.instanceOf(str.Concatenate);
      this.helloWorldVariables.should.be.an.instanceOf(str.Concatenate);
    });

    it('should concat two strings', async function () {
      (await this.helloWorld.exec(this.ctx)).should.equal('HelloWorld');
    });

    it('should concat multiple strings', async function () {
      (await this.sentence.exec(this.ctx)).should.equal(
        'The quick brown fox jumps over the lazy dog.'
      );
    });

    it('should return null when an arg is null', async function () {
      should(await this.concatNull.exec(this.ctx)).be.null();
    });

    it('should concat variables', async function () {
      (await this.helloWorldVariables.exec(this.ctx)).should.equal('HelloWorld');
    });
  });

  describe('&', () => {
    it('should be a Concat', function () {
      this.andHelloWorld.should.be.an.instanceOf(str.Concatenate);
      this.andHelloWorldVariables.should.be.an.instanceOf(str.Concatenate);
    });

    it('should concat two strings', async function () {
      (await this.andHelloWorld.exec(this.ctx)).should.equal('HelloWorld');
    });

    it('should concat multiple strings', async function () {
      (await this.andSentence.exec(this.ctx)).should.equal(
        'The quick brown fox jumps over the lazy dog.'
      );
    });

    it('should treat null arg as empty string', async function () {
      (await this.andConcatNull.exec(this.ctx)).should.equal('Hello');
    });

    it('should concat variables', async function () {
      (await this.andHelloWorldVariables.exec(this.ctx)).should.equal('HelloWorld');
    });
  });
});

describe('Combine', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it.skip('should be a Combine', function () {
    this.separator.should.be.an.instanceOf(str.Combine);
  });

  it('should combine strings with no separator', async function () {
    (await this.noSeparator.exec(this.ctx)).should.equal('abcdefghijkl');
  });

  it('should combine strings with a separator', async function () {
    (await this.separator.exec(this.ctx)).should.equal('abc;def;ghi;jkl');
  });

  it('should return null when the list is null', async function () {
    should(await this.combineNull.exec(this.ctx)).be.null();
  });

  it('should ignore nulls in the list', async function () {
    (await this.combineNullItem.exec(this.ctx)).should.equal('abc;def;jkl');
  });

  it('should return null for list of null', async function () {
    should(await this.combineOneNullItem.exec(this.ctx)).be.null();
  });

  it('should return null for empty list', async function () {
    should(await this.combineEmptyNull.exec(this.ctx)).be.null();
  });
});

describe('Split', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it.skip('should be a Split', function () {
    this.commaSeparated.should.be.an.instanceOf(str.Split);
  });

  it('should split strings on comma', async function () {
    (await this.commaSeparated.exec(this.ctx)).should.eql(['a', 'b', 'c', '', '1', '2', '3']);
  });

  it('should return single-item array when separator is not used', async function () {
    (await this.separatorNotUsed.exec(this.ctx)).should.eql(['a,b,c,,1,2,3']);
  });

  it('should return null when separating null', async function () {
    should(await this.separateNull.exec(this.ctx)).be.null();
  });

  it('should return list with original string when the separator is null', async function () {
    (await this.separateUsingNull.exec(this.ctx)).should.eql(['a,b,c']);
  });
});

describe('SplitOnMatches', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should splitOnMatches strings into a list of 2', async function () {
    (await this.splitOnMatchesListReturn.exec(this.ctx)).should.eql(['foo ', ' bar']);
  });

  it('should return a list of two empty strings if its an exact match', async function () {
    (await this.splitOnMatchesOriginalString.exec(this.ctx)).should.eql(['', '']);
  });

  it('should return original string because there was no match', async function () {
    (await this.splitOnMatchesNoMatch.exec(this.ctx)).should.eql(['foobar']);
  });

  it('should return null when stringToSplit is null', async function () {
    should(await this.splitOnMatchesIsNullFirst.exec(this.ctx)).be.null();
  });

  it('should return list with original string when separatorPattern is null', async function () {
    (await this.splitOnMatchesIsNullSecond.exec(this.ctx)).should.eql(['12three']);
  });

  it('should return null when both parameters are null', async function () {
    should(await this.splitOnMatchesAllNull.exec(this.ctx)).be.null();
  });
});

describe('Matches', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should match and return true', async function () {
    (await this.matchesTrue.exec(this.ctx)).should.be.true();
  });

  it('should not match and return false', async function () {
    (await this.matchesFalse.exec(this.ctx)).should.be.false();
  });

  it('should not match when string to match is null and return null', async function () {
    should(await this.matchesIsNullFirst.exec(this.ctx)).be.null();
  });

  it('should not match and return null', async function () {
    should(await this.matchesIsNullSecond.exec(this.ctx)).be.null();
  });

  it('should return null if both arguments are null', async function () {
    should(await this.matchesAllNull.exec(this.ctx)).be.null();
  });
});

describe('Length', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it.skip('should be a Length', function () {
    this.elevenLetters.should.be.an.instanceOf(overloaded.Length);
  });

  it('should count letters in string', async function () {
    (await this.elevenLetters.exec(this.ctx)).should.equal(11);
  });

  it('should return null when string is null', async function () {
    should(await this.nullString.exec(this.ctx)).be.null();
  });
});

describe('Upper', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it.skip('should be an Upper', function () {
    this.upperC.should.be.an.instanceOf(str.Upper);
  });

  it('should convert lower to upper', async function () {
    (await this.lowerC.exec(this.ctx)).should.equal('ABCDEFG123');
  });

  it('should leave upper as upper', async function () {
    (await this.upperC.exec(this.ctx)).should.equal('ABCDEFG123');
  });

  it('should convert camel to upper', async function () {
    (await this.camelC.exec(this.ctx)).should.equal('ABCDEFG123');
  });

  it('should return null when uppering null', async function () {
    should(await this.nullString.exec(this.ctx)).be.null();
  });
});

describe('Lower', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it.skip('should be a Lower', function () {
    this.lowerC.should.be.an.instanceOf(str.Lower);
  });

  it('should leave lower as lower', async function () {
    (await this.lowerC.exec(this.ctx)).should.equal('abcdefg123');
  });

  it('should convert upper to lower', async function () {
    (await this.upperC.exec(this.ctx)).should.equal('abcdefg123');
  });

  it('should convert camel to lower', async function () {
    (await this.camelC.exec(this.ctx)).should.equal('abcdefg123');
  });

  it('should return null when lowering null', async function () {
    should(await this.nullString.exec(this.ctx)).be.null();
  });
});

// TODO: Verify behavior since its different than JS
describe('Indexer', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should get letter at index', async function () {
    (await this.helloWorldSix.exec(this.ctx)).should.equal('o');
  });

  it('should not return null on index 0 (no longer out of bounds)', async function () {
    should(await this.helloWorldZero.exec(this.ctx)).not.be.null();
  });

  it('should return null on index 20 (out of bounds)', async function () {
    should(await this.helloWorldTwenty.exec(this.ctx)).be.null();
  });

  it('should return null when string is null', async function () {
    should(await this.nullString.exec(this.ctx)).be.null();
  });

  it('should return null when index is null', async function () {
    should(await this.nullIndex.exec(this.ctx)).be.null();
  });
});

describe('PositionOf', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should be a PositionOf', function () {
    this.found.should.be.an.instanceOf(str.PositionOf);
  });

  it('should return 0-based position', async function () {
    (await this.found.exec(this.ctx)).should.equal(2);
  });

  it('should return -1 when not found', async function () {
    (await this.notFound.exec(this.ctx)).should.equal(-1);
  });

  it('should return null when pattern is null', async function () {
    should(await this.nullPattern.exec(this.ctx)).be.null();
  });

  it('should return null when string is null', async function () {
    should(await this.nullString.exec(this.ctx)).be.null();
  });
});

describe('LastPositionOf', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should be a LastPositionOf', function () {
    this.found.should.be.an.instanceOf(str.LastPositionOf);
  });

  it('should return 0-based position', async function () {
    (await this.found.exec(this.ctx)).should.equal(7);
  });

  it('should return -1 when not found', async function () {
    (await this.notFound.exec(this.ctx)).should.equal(-1);
  });

  it('should return null when pattern is null', async function () {
    should(await this.nullPattern.exec(this.ctx)).be.null();
  });

  it('should return null when string is null', async function () {
    should(await this.nullString.exec(this.ctx)).be.null();
  });
});

describe('Substring', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it.skip('should be a Substring', function () {
    this.world.should.be.an.instanceOf(str.Substring);
  });

  it('should get substring to end', async function () {
    (await this.world.exec(this.ctx)).should.equal('World');
  });

  it('should get substring with length', async function () {
    (await this.or.exec(this.ctx)).should.equal('rl');
  });

  it('should get substring with zero length', async function () {
    (await this.zeroLength.exec(this.ctx)).should.equal('');
  });

  it('should return null on index -1 (out of bounds)', async function () {
    should.not.exist(await this.startTooLow.exec(this.ctx));
  });

  it('should not error on index 0 (not out of bounds)', async function () {
    (await this.startZero.exec(this.ctx)).should.equal('HelloWorld');
  });

  it('should return rest of string on too much length', async function () {
    (await this.tooMuchLength.exec(this.ctx)).should.equal('rld');
  });

  it('should return empty string on negative length', async function () {
    (await this.negativeLength.exec(this.ctx)).should.equal('');
  });

  it('should return null when string is null', async function () {
    should(await this.nullString.exec(this.ctx)).be.null();
  });

  it('should return null when start is null', async function () {
    should(await this.nullStart.exec(this.ctx)).be.null();
  });
});

describe('StartsWith', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should be true when it does start with', async function () {
    (await this.fooBarStartsWithFoo.exec(this.ctx)).should.be.true();
  });

  it('should be false when it does not start with', async function () {
    (await this.fooBarStartsWithBar.exec(this.ctx)).should.be.false();
  });

  it('should be true for starts with blank', async function () {
    (await this.fooBarStartsWithBlank.exec(this.ctx)).should.be.true();
  });

  it('should be false for blank starts with', async function () {
    (await this.blankStartsWithFoo.exec(this.ctx)).should.be.false();
  });

  it('should be null when either arg is null', async function () {
    should(await this.startsWithNull.exec(this.ctx)).be.null();
    should(await this.startsWithNullAsString.exec(this.ctx)).be.null();
    should(await this.nullStartsWith.exec(this.ctx)).be.null();
    should(await this.nullAsStringStartsWith.exec(this.ctx)).be.null();
  });
});

describe('EndsWith', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should be true when it does end with', async function () {
    (await this.fooBarEndsWithBar.exec(this.ctx)).should.be.true();
  });

  it('should be false when it does not end with', async function () {
    (await this.fooBarEndsWithFoo.exec(this.ctx)).should.be.false();
  });

  it('should be true for ends with blank', async function () {
    (await this.fooBarEndsWithBlank.exec(this.ctx)).should.be.true();
  });

  it('should be false for blank ends with', async function () {
    (await this.blankEndsWithFoo.exec(this.ctx)).should.be.false();
  });

  it('should be null when either arg is null', async function () {
    should(await this.endsWithNull.exec(this.ctx)).be.null();
    should(await this.endsWithNullAsString.exec(this.ctx)).be.null();
    should(await this.nullEndsWith.exec(this.ctx)).be.null();
    should(await this.nullAsStringEndsWith.exec(this.ctx)).be.null();
  });
});

describe('ReplaceMatches', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should make replacement with only one match', async function () {
    (await this.replaceOne.exec(this.ctx)).should.equal('FooBaz');
  });

  it('should make replacement with multiple matches', async function () {
    (await this.replaceMany.exec(this.ctx)).should.equal('FooBazFooBazFooBaz');
  });

  it('should replace only matching case', async function () {
    (await this.replaceCapital.exec(this.ctx)).should.equal('Rattle');
  });

  it('should replace diacritical', async function () {
    (await this.replaceDiacritical.exec(this.ctx)).should.equal('Café');
  });

  it('should replace unicode', async function () {
    (await this.replaceUnicode.exec(this.ctx)).should.equal('Turn that frown 😃 upside down! 😃');
  });

  it('should replace space', async function () {
    (await this.replaceSpace.exec(this.ctx)).should.equal('(123)-456-7890');
  });

  it('should replace empty string', async function () {
    (await this.replaceEmpty.exec(this.ctx)).should.equal('.F.o.o.B.a.r.');
  });

  it('should replace match groups', async function () {
    (await this.replaceMatchGroups.exec(this.ctx)).should.equal('Bar[123]');
  });

  it('should return original string if no matches', async function () {
    (await this.replaceNone.exec(this.ctx)).should.equal('Foo');
  });

  it('should return null if argument is null', async function () {
    should(await this.replaceArgumentIsNull.exec(this.ctx)).be.null();
  });

  it('should return null if pattern is null', async function () {
    should(await this.replacePatternIsNull.exec(this.ctx)).be.null();
  });

  it('should return null if substitution is null', async function () {
    should(await this.replaceSubstitutionIsNull.exec(this.ctx)).be.null();
  });
});
