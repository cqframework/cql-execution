// @Test: Concat
define HelloWorld: 'Hello' + 'World'
define Sentence: 'The' + ' ' + 'quick' + ' ' + 'brown' + ' ' + 'fox' + ' ' + 'jumps' + ' '
                  + 'over' + ' ' + 'the' + ' ' + 'lazy' + ' ' + 'dog.'
define ConcatNull: 'Hello' + null
define Hello: 'Hello'
define World: 'World'
define HelloWorldVariables: Hello + World
define AndHelloWorld: 'Hello' & 'World'
define AndSentence: 'The' & ' ' & 'quick' & ' ' & 'brown' & ' ' & 'fox' & ' ' & 'jumps' & ' '
                  & 'over' & ' ' & 'the' & ' ' & 'lazy' & ' ' & 'dog.'
define AndConcatNull: 'Hello' & null
define AndHelloWorldVariables: Hello & World

// @Test: Combine
define NoSeparator: Combine({ 'abc', 'def', 'ghi', 'jkl' })
define Separator: Combine({ 'abc', 'def', 'ghi', 'jkl' }, ';')
define CombineNull: Combine(null, ';')
define CombineNullItem: Combine({ 'abc', 'def', null, 'jkl' }, ';')
define CombineOneNullItem: Combine({null}, ';')
define CombineEmptyNull: Combine({}, ';')

// @Test: Split
define CommaSeparated: Split('a,b,c,,1,2,3', ',')
define SeparatorNotUsed: Split('a,b,c,,1,2,3', ';')
define SeparateNull: Split(null, ',')
define SeparateUsingNull: Split('a,b,c', null)

// @Test: SplitOnMatches
define SplitOnMatchesListReturn: SplitOnMatches('foo 1,2three bar', '\\d,\\d\\w+')
define SplitOnMatchesOriginalString: SplitOnMatches('1,2three', '\\w,\\w+')
define SplitOnMatchesNoMatch: SplitOnMatches('foobar', '\\d')
define SplitOnMatchesIsNullFirst: SplitOnMatches(null, '\\w+')
define SplitOnMatchesIsNullSecond: SplitOnMatches('12three', null)
define SplitOnMatchesAllNull: SplitOnMatches(null, null)

// @Test: Length
define ElevenLetters: Length('Hello World')
define NullString: Length(null as String)

// @Test: Upper
define LowerC: Upper('abcdefg123')
define UpperC: Upper('ABCDEFG123')
define CamelC: Upper('aBcDeFg123')
define NullString: Upper(null)

// @Test: Lower
define LowerC: Lower('abcdefg123')
define UpperC: Lower('ABCDEFG123')
define CamelC: Lower('aBcDeFg123')
define NullString: Lower(null)

// @Test: Indexer
define HelloWorldSix: 'HelloWorld'[6]
define HelloWorldZero: 'HelloWorld'[0]
define HelloWorldTwenty: 'HelloWorld'[20]
define NullString: (null as String)[4]
define NullIndex: 'HelloWorld'[null]

// @Test: Matches
define MatchesTrue: Matches('1,2three', '\\d,\\d\\w+')
define MatchesFalse: Matches('three', '\\d')
define MatchesIsNullFirst: Matches(null, '\\w+')
define MatchesIsNullSecond: Matches('12three', null)
define MatchesAllNull: Matches(null, null)

// @Test: PositionOf
define Found: PositionOf('cde', 'abcdefg')
define NotFound: PositionOf('fgh', 'abcdefg')
define NullPattern: PositionOf(null, 'abcdefg')
define NullString: PositionOf('cde', null)

// @Test: LastPositionOf
define Found: LastPositionOf('B', 'ABCDEDCBA')    // 7
define NotFound: LastPositionOf('XYZ', 'ABCDE')   // -1
define NullPattern: LastPositionOf(null, 'ABCDE') // null
define NullString: LastPositionOf('ABCDE', null)  // null

// @Test: Substring
define World: Substring('HelloWorld', 5)
define Or: Substring('HelloWorld', 7, 2)
define ZeroLength: Substring('HelloWorld', 7, 0)
define StartTooLow: Substring('HelloWorld', -1)
define StartZero: Substring('HelloWorld', 0)
define TooMuchLength: Substring('HelloWorld', 7, 25)
define NegativeLength: Substring('HelloWorld', 7, -1)
define NullString: Substring(null, 5)
define NullStart: Substring('HelloWorld', null)

// @Test: StartsWith
define FooBarStartsWithFoo: StartsWith('FooBar', 'Foo')
define FooBarStartsWithBar: StartsWith('FooBar', 'Bar')
define FooBarStartsWithBlank: StartsWith('FooBar', '')
define BlankStartsWithFoo: StartsWith('', 'Foo')
define StartsWithNull: StartsWith('FooBar', null)
define StartsWithNullAsString: StartsWith('FooBar', null as String)
define NullStartsWith: StartsWith(null, 'Foo')
define NullAsStringStartsWith: StartsWith(null as String, 'Foo')

// @Test: EndsWith
define FooBarEndsWithBar: EndsWith('FooBar', 'Bar')
define FooBarEndsWithFoo: EndsWith('FooBar', 'Foo')
define FooBarEndsWithBlank: EndsWith('FooBar', '')
define BlankEndsWithFoo: EndsWith('', 'Foo')
define EndsWithNull: EndsWith('FooBar', null)
define EndsWithNullAsString: EndsWith('FooBar', null as String)
define NullEndsWith: EndsWith(null as String, 'Foo')
define NullAsStringEndsWith: EndsWith(null as String, 'Foo')

// @Test: ReplaceMatches
define ReplaceOne: ReplaceMatches('FooBar', 'Bar', 'Baz')
define ReplaceMany: ReplaceMatches('FooBarFooBarFooBar', 'Bar', 'Baz')
define ReplaceCapital: ReplaceMatches('Tattle', 'T', 'R')
define ReplaceDiacritical: ReplaceMatches('Cafè', 'è', 'é')
define ReplaceUnicode: ReplaceMatches('Turn that frown 🙁 upside down! 😃', '🙁', '😃')
define ReplaceSpace: ReplaceMatches('(123) 456 7890', '\\s', '-')
define ReplaceEmpty: ReplaceMatches('FooBar', '', '.')
define ReplaceMatchGroups: ReplaceMatches('Foo[123]', 'Foo\\[(\\d+)]', 'Bar[$1]')
define ReplaceNone: ReplaceMatches('Foo', 'Bar', 'Baz')
define ReplaceArgumentIsNull: ReplaceMatches(null, 'Bar', 'Baz')
define ReplacePatternIsNull: ReplaceMatches('Foo', null, 'Baz')
define ReplaceSubstitutionIsNull: ReplaceMatches('Foo', 'Bar', null)