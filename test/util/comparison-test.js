/*
 * decaffeinate suggestions:
 * DS001: Remove Babel/TypeScript constructor workaround
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const should = require('should');
const {equals, equivalent} = require('../../lib/util/comparison');
const {Code, Concept} = require('../../lib/datatypes/clinical');

describe('equals', function() {
  it('should detect equality/inequality for numbers', function() {
    equals(1, 1).should.be.true();
    equals(1, -1).should.be.false();
    equals(5, 2+3).should.be.true();
    equals(1.2345, 1.2345).should.be.true();
    return equals(1.2345, 1.23456).should.be.false();
  });

  it('should detect equality/inequality for strings', function() {
    equals('', '').should.be.true();
    equals('a', 'a').should.be.true();
    equals('a', 'A').should.be.false();
    equals('abc', "abc").should.be.true();
    return equals('abc', 'abcd').should.be.false();
  });

  it('should detect equality/inequality for dates', function() {
    equals(new Date(2012, 2, 5, 10, 55, 34, 235), new Date(2012, 2, 5, 10, 55, 34, 235)).should.be.true();
    equals(new Date(2012, 2, 5, 10, 55, 34, 235), new Date(2012, 2, 5, 10, 55, 34, 236)).should.be.false();
    equals(new Date('2012-03-05T10:55:34.235'), new Date('2012-03-05T10:55:34.235')).should.be.true();
    equals(new Date('2012-03-05T10:55:34.235-04:00'), new Date('2012-03-05T10:55:34.235-05:00')).should.be.false();
    return equals(new Date('2012-03-05T10:55:34.235-04:00'), new Date('2012-03-05T09:55:34.235-05:00')).should.be.true();
  });

  it('should detect equality/inequality for regular expressions', function() {
    equals(/\w+\s/g, /\w+\s/g).should.be.true();
    equals(/\w+\s/g, /\w+\s/gi).should.be.false();
    return equals(/\w+\s*/g, /\w+\s/g).should.be.false();
  });

  it('should detect equality/inequality for objects', function() {
    equals({}, {}).should.be.true();
    equals({a: 1, b:2, c:3}, {a: 1, b: 2, c: 3}).should.be.true();
    equals({a: 1, b:2, c:3}, {c: 3, b: 2, a: 1}).should.be.true();
    equals({a: 1, b:2, c:3}, {a: 1, b: 2}).should.be.false();
    equals({a: 1, b:2}, {a: 1, b: 2, c: 3}).should.be.false();
    equals({a: {b: {c: 'd'}, e: 'f'}, g: 'h'}, {a: {b: {c: 'd'}, e: 'f'}, g: 'h'}).should.be.true();
    equals({a: {b: {c: 'd'}, e: 'f'}, g: 'h'}, {a: {b: {c: 'dee'}, e: 'f'}, g: 'h'}).should.be.false();
    equals({a: new Date('2012-03-05T10:55:34.235')}, {a: new Date('2012-03-05T10:55:34.235')}).should.be.true();
    equals({a: [1, 2, 3], b: [4, 5, 6]}, {a: [1, 2, 3], b: [4, 5, 6]}).should.be.true();
    return equals({a: [1, 2, 3], b: [4, 5, 6]}, {a: [3, 2, 1], b: [6, 5, 4]}).should.be.false();
  });

  it('should detect equality/inequality for classes', function() {
    class Foo {
      constructor(prop1, prop2) {
        this.prop1 = prop1;
        this.prop2 = prop2;
      }
    }

    class Bar extends Foo {
      constructor(prop1, prop2) {
        {
          // Hack: trick Babel/TypeScript into allowing this before super.
          if (false) { super(); }
          let thisFn = (() => { return this; }).toString();
          let thisName = thisFn.match(/return (?:_assertThisInitialized\()*(\w+)\)*;/)[1];
          eval(`${thisName} = this;`);
        }
        this.prop1 = prop1;
        this.prop2 = prop2;
        super(...arguments);
      }
    }

    equals(new Foo('abc', [1,2,3]), new Foo('abc', [1,2,3])).should.be.true();
    equals(new Foo('abc', [1,2,3]), new Foo('abcd', [1,2,3])).should.be.false();
    equals(new Foo('abc', new Bar('xyz', [1,2,3])), new Foo('abc', new Bar('xyz', [1,2,3]))).should.be.true();
    equals(new Foo('abc', new Bar('xyz')), new Foo('abc', new Bar('xyz'))).should.be.true();
    should(equals(new Foo('abc', new Bar('xyz')), new Foo('abc', new Bar('xyz',999)))).be.null();
    equals(new Foo('abc', [1,2,3]), new Bar('abc', [1,2,3])).should.be.false();
    return equals(new Bar('abc', [1,2,3]), new Foo('abc', [1,2,3])).should.be.false();
  });

  it('should consider an instance equal to itself even if it has null values', function() {
    class Foo {
      constructor(prop1, prop2) {
        this.prop1 = prop1;
        this.prop2 = prop2;
      }
    }

    const containsNull = new Foo('abc', null);
    return should(equals(containsNull, containsNull)).be.true();
  });

  it('should delegate to equals method when available', function() {
    class Int {
      constructor(num) {
        this.num = num;
      }
    }

    class StringFriendlyInt extends Int {
      constructor(num) {
        {
          // Hack: trick Babel/TypeScript into allowing this before super.
          if (false) { super(); }
          let thisFn = (() => { return this; }).toString();
          let thisName = thisFn.match(/return (?:_assertThisInitialized\()*(\w+)\)*;/)[1];
          eval(`${thisName} = this;`);
        }
        this.num = num;
      }

      asInt() {
        switch (typeof(this.num)) {
          case 'number': return Math.floor(this.num);
          case 'string': return parseInt(this.num);
          default: return Number.NaN;
        }
      }

      equals(other) {
        return other instanceof StringFriendlyInt && (this.asInt() === other.asInt());
      }
    }

    equals(new Int(1), new Int('1')).should.be.false();
    return equals(new StringFriendlyInt(1), new StringFriendlyInt('1')).should.be.true();
  });

  it('should detect equality/inequality for arrays', function() {
    equals([], []).should.be.true();
    equals([1], [1]).should.be.true();
    equals([1, 2, 3], [1, 2, 3]).should.be.true();
    equals([1, 2, 3], [3, 2, 1]).should.be.false();
    equals([1, 2, 3], [1, 2]).should.be.false();
    equals([1, 2], [1, 2, 3]).should.be.false();
    equals([{a: 1}, {b: 2}], [{a: 1}, {b: 2}]).should.be.true();
    equals([['a','b','c'],[1,2,3]], [['a','b','c'],[1,2,3]]).should.be.true();
    return equals([['a','b','c'],[1,2,3]], [['a','b','c'],[1,2,3,4]]).should.be.false();
  });

  return it('should handle null values', function() {
    should.not.exist(equals(null, null));
    should.not.exist(equals(null, 0));
    should.not.exist(equals(0, null));
    should.not.exist(equals(null, 'null'));
    should.not.exist(equals('null', null));
    should.not.exist(equals(null, {}));
    should.not.exist(equals({}, null));
    should.not.exist(equals(null, [null]));
    should.not.exist(equals([null], null));
    should.not.exist(equals(null, {}.undef));
    return should.not.exist(equals({}.undef, null));
  });
});

describe('equivalent', function() {
  it('should consider two null values to be equivalent', () => equivalent(null, null).should.be.true());

  it('should consider two undefined values to be equivalent', () => equivalent(undefined, undefined).should.be.true());

  describe('should consider one null code to not be equivalent to a code', function() {
    it('if null comes first', () => equivalent(null, new Code('123')).should.be.false());
    return it('if null comes second', () => equivalent(new Code('123'), null).should.be.false());
  });

  it('should detect equivalent and non-equivalent codes', function() {
    equivalent(new Code('12345', 'Code System', '2016', 'Display Name'), new Code('12345', 'Code System', undefined, undefined)).should.be.true();
    equivalent(new Code('1234', 'First Code System', '2016', 'Display Name'), new Code('1234', 'Different Code System', undefined, undefined)).should.be.false();
    equivalent(new Code('123', 'test', '2016'), new Code('12', 'test', '2016')).should.be.false();
    return equivalent(new Code('123', undefined, undefined, undefined), new Code('123', undefined, undefined, undefined)).should.be.true();
  });

  it('should detect if second parameter is not a code and should result to true (not defined in the specification - matches "in ValueSet" and "in CodeSystem")', () => equivalent(new Code('123', 'test', '2016'), '123').should.be.true());

  it('should detect if parameters are not codes and return using equals', function() {
    equivalent('123', '123').should.be.true();
    equivalent(123, 123).should.be.true();
    return equivalent('123', new Code('123', 'test', '2016')).should.be.false();
  });

  it('should consider codes with different versions to be equivalent', () => equivalent(new Code('1234', 'System', '2016', 'Display Name'), new Code('1234', 'System', '2017', undefined)).should.be.true());

  it('should detect equivalency between code and list of codes', function() {
    equivalent(new Code('1234', 'System', 'version2017', 'Display Name'), [new Code('1234', 'System', 'version2017', undefined), new Code('1', '2', '3', undefined)]).should.be.true();
    equivalent(new Code('1234', 'System', 'version2017', 'Display Name'), [new Code('1111', 'System', 'version2017', undefined), new Code('1', '2', '3', undefined)]).should.be.false();
    equivalent(new Code('1234', 'System', 'version2016', 'Display Name'), [new Code('1234', 'System', 'version2017', undefined), new Code('1', '2', '3', undefined)]).should.be.true();
    return equivalent(new Code('1234', 'System', 'version2016', 'Display Name'), [new Code('1111', 'System', 'version2017', undefined), new Code('1', '2', '3', undefined)]).should.be.false();
  });

  it('should detect equivalency between code and concept of codes', function() {
    equivalent(new Code('1234', 'System', 'version2016', 'Display Name'), new Concept([new Code('1234', 'System', 'version2016', undefined), new Code('1','2','3', undefined)])).should.be.true();
    equivalent(new Code('1234', 'System', 'version2016', 'Display Name'), new Concept([new Code('1111', 'System', 'version2016', undefined), new Code('1','2','3', undefined)])).should.be.false();
    equivalent(new Code('1234', 'System', 'version2016', 'Display Name'), new Concept([new Code('1234', 'System', 'version2017', undefined), new Code('1','2','3', undefined)])).should.be.true();
    return equivalent(new Code('1234', 'System', 'version2016', 'Display Name'), new Concept([new Code('1111', 'System', 'version2017', undefined), new Code('1','2','3', undefined)])).should.be.false();
  });

  return it('should detect equivalence/inequivalence for strings', function() {
    equivalent('', '').should.be.true();
    equivalent('a', 'a').should.be.true();
    equivalent('réservé', 'RESERVE').should.be.true();
    equivalent('a', 'A').should.be.true();
    equivalent('abc', "abc").should.be.true();
    return equivalent('abc', 'abcd').should.be.false();
  });
});