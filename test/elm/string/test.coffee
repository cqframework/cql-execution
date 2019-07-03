should = require 'should'
setup = require '../../setup'
data = require './data'
str = require '../../../lib/elm/string'

describe 'Concat', ->
  @beforeEach ->
    setup @, data

  it.skip 'should be a Concat', ->
    @helloWorld.should.be.an.instanceOf(str.Concat)
    @helloWorldVariables.should.be.an.instanceOf(str.Concat)

  it 'should concat two strings', ->
    @helloWorld.exec(@ctx).should.equal 'HelloWorld'

  it 'should concat multiple strings', ->
    @sentence.exec(@ctx).should.equal 'The quick brown fox jumps over the lazy dog.'

  it 'should return null when an arg is null', ->
    should(@concatNull.exec(@ctx)).be.null()

  it 'should concat variables', ->
    @helloWorldVariables.exec(@ctx).should.equal 'HelloWorld'

describe 'Combine', ->
  @beforeEach ->
    setup @, data

  it.skip 'should be a Combine', ->
    @separator.should.be.an.instanceOf(str.Combine)

  it 'should combine strings with no separator', ->
    @noSeparator.exec(@ctx).should.equal 'abcdefghijkl'

  it 'should combine strings with a separator', ->
    @separator.exec(@ctx).should.equal 'abc;def;ghi;jkl'

  it 'should return null when the list is null', ->
    should(@combineNull.exec(@ctx)).be.null()

  it 'should return null when an item in the list is null', ->
    @combineNullItem.exec(@ctx).should.equal 'abc;def;jkl'

  it 'should return null for list of null', ->
    should(@combineOneNullItem.exec(@ctx)).be.null()

  it 'should return null for empty list', ->
    should(@combineEmptyNull.exec(@ctx)).be.null()

describe 'Split', ->
  @beforeEach ->
    setup @, data

  it.skip 'should be a Split', ->
    @commaSeparated.should.be.an.instanceOf(str.Split)

  it 'should split strings on comma', ->
    @commaSeparated.exec(@ctx).should.eql ['a','b','c','','1','2','3']

  it 'should return single-item array when separator is not used', ->
    @separatorNotUsed.exec(@ctx).should.eql ['a,b,c,,1,2,3']

  it 'should return null when separating null', ->
    should(@separateNull.exec(@ctx)).be.null()

  # TODO: Verify this assumption
  it 'should return null when the separator is null', ->
    should(@separateUsingNull.exec(@ctx)).be.null()

describe 'SplitOnMatches', ->
  @beforeEach ->
    setup @, data

  it 'should splitOnMatches strings into a list of 2', ->
    @splitOnMatchesListReturn.exec(@ctx).should.eql ["foo ", " bar"]

  it 'should return a list of two empty strings if its an exact match', ->
    @splitOnMatchesOriginalString.exec(@ctx).should.eql ['','']

  it 'should return original string because there was no match', ->
    @splitOnMatchesNoMatch.exec(@ctx).should.eql ['foobar']

  it 'should return null when stringToSplit is null', ->
    should(@splitOnMatchesIsNullFirst.exec(@ctx)).be.null()

  it 'should return null when separatorPattern is null', ->
    should(@splitOnMatchesIsNullSecond.exec(@ctx)).be.null()

  it 'should return null when both parameters are null', ->
    should(@splitOnMatchesAllNull.exec(@ctx)).be.null()

describe 'Matches', ->
  @beforeEach ->
    setup @, data

  it 'should match and return true', ->
    @matchesTrue.exec(@ctx).should.be.true()

  it 'should not match and return false', ->
    @matchesFalse.exec(@ctx).should.be.false()

  it 'should not match when string to match is null and return null', ->
    should(@matchesIsNullFirst.exec(@ctx)).be.null()

  it 'should not match and return null', ->
    should(@matchesIsNullSecond.exec(@ctx)).be.null()

  it 'should return null if both arguments are null', ->
    should(@matchesAllNull.exec(@ctx)).be.null()

describe 'Length', ->
  @beforeEach ->
    setup @, data

  it.skip 'should be a Length', ->
    @elevenLetters.should.be.an.instanceOf(str.Length)

  it 'should count letters in string', ->
    @elevenLetters.exec(@ctx).should.equal 11

  it 'should return null when string is null', ->
    should(@nullString.exec(@ctx)).be.null()

describe 'Upper', ->
  @beforeEach ->
    setup @, data

  it.skip 'should be an Upper', ->
    @upperC.should.be.an.instanceOf(str.Upper)

  it 'should convert lower to upper', ->
    @lowerC.exec(@ctx).should.equal 'ABCDEFG123'

  it 'should leave upper as upper', ->
    @upperC.exec(@ctx).should.equal 'ABCDEFG123'

  it 'should convert camel to upper', ->
    @camelC.exec(@ctx).should.equal 'ABCDEFG123'

  it 'should return null when uppering null', ->
    should(@nullString.exec(@ctx)).be.null()

describe 'Lower', ->
  @beforeEach ->
    setup @, data

  it.skip 'should be a Lower', ->
    @lowerC.should.be.an.instanceOf(str.Lower)

  it 'should leave lower as lower', ->
    @lowerC.exec(@ctx).should.equal 'abcdefg123'

  it 'should convert upper to lower', ->
    @upperC.exec(@ctx).should.equal 'abcdefg123'

  it 'should convert camel to lower', ->
    @camelC.exec(@ctx).should.equal 'abcdefg123'

  it 'should return null when lowering null', ->
    should(@nullString.exec(@ctx)).be.null()

# TODO: Verify behavior since its different than JS
describe 'Indexer', ->
  @beforeEach ->
    setup @, data

  it 'should get letter at index', ->
    @helloWorldSix.exec(@ctx).should.equal 'o'

  it 'should not return null on index 0 (no longer out of bounds)', ->
    should(@helloWorldZero.exec(@ctx)).not.be.null()

  it 'should return null on index 20 (out of bounds)', ->
    should(@helloWorldTwenty.exec(@ctx)).be.null()

  it 'should return null when string is null', ->
    should(@nullString.exec(@ctx)).be.null()

  it 'should return null when index is null', ->
    should(@nullIndex.exec(@ctx)).be.null()

describe 'PositionOf', ->
  @beforeEach ->
    setup @, data

  it.skip 'should be a PositionOf', ->
    @found.should.be.an.instanceOf(str.Pos)

  it 'should return 0-based position', ->
    @found.exec(@ctx).should.equal 2

  it 'should return -1 when not found', ->
    @notFound.exec(@ctx).should.equal -1

  it 'should return null when pattern is null', ->
    should(@nullPattern.exec(@ctx)).be.null()

  it 'should return null when string is null', ->
    should(@nullString.exec(@ctx)).be.null()

describe 'Substring', ->
  @beforeEach ->
    setup @, data

  it.skip 'should be a Substring', ->
    @world.should.be.an.instanceOf(str.Substring)

  it 'should get substring to end', ->
    @world.exec(@ctx).should.equal 'World'

  it 'should get substring with length', ->
    @or.exec(@ctx).should.equal 'rl'

  it 'should get substring with zero length', ->
    @zeroLength.exec(@ctx).should.equal ''

  it 'should return null on index -1 (out of bounds)', ->
    should.not.exist @startTooLow.exec(@ctx)

  it 'should not error on index 0 (not out of bounds)', ->
    @startZero.exec(@ctx).should.equal 'HelloWorld'

  it 'should return rest of string on too much length', ->
    @tooMuchLength.exec(@ctx).should.equal 'rld'

  it 'should return empty string on negative length', ->
    @negativeLength.exec(@ctx).should.equal ''

  it 'should return null when string is null', ->
    should(@nullString.exec(@ctx)).be.null()

  it 'should return null when start is null', ->
    should(@nullStart.exec(@ctx)).be.null()

describe 'StartsWith', ->
  @beforeEach ->
    setup @, data

  it 'should be true when it does start with', ->
    @fooBarStartsWithFoo.exec(@ctx).should.be.true()

  it 'should be false when it does not start with', ->
    @fooBarStartsWithBar.exec(@ctx).should.be.false()

  it 'should be true for starts with blank', ->
    @fooBarStartsWithBlank.exec(@ctx).should.be.true()

  it 'should be false for blank starts with', ->
    @blankStartsWithFoo.exec(@ctx).should.be.false()

  it 'should be null when either arg is null', ->
    should(@startsWithNull.exec(@ctx)).be.null()
    should(@startsWithNullAsString.exec(@ctx)).be.null()
    should(@nullStartsWith.exec(@ctx)).be.null()
    should(@nullAsStringStartsWith.exec(@ctx)).be.null()

describe 'EndsWith', ->
  @beforeEach ->
    setup @, data

  it 'should be true when it does end with', ->
    @fooBarEndsWithBar.exec(@ctx).should.be.true()

  it 'should be false when it does not end with', ->
    @fooBarEndsWithFoo.exec(@ctx).should.be.false()

  it 'should be true for ends with blank', ->
    @fooBarEndsWithBlank.exec(@ctx).should.be.true()

  it 'should be false for blank ends with', ->
    @blankEndsWithFoo.exec(@ctx).should.be.false()

  it 'should be null when either arg is null', ->
    should(@endsWithNull.exec(@ctx)).be.null()
    should(@endsWithNullAsString.exec(@ctx)).be.null()
    should(@nullEndsWith.exec(@ctx)).be.null()
    should(@nullAsStringEndsWith.exec(@ctx)).be.null()
