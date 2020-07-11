/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const should = require('should');
const setup = require('../../setup');
const data = require('./data');
const {Code, Concept} = require('../../../lib/datatypes/clinical');
const {DateTime, Date} = require('../../../lib/datatypes/datetime');
const {Interval} = require('../../../lib/datatypes/interval');
const {Quantity} = require('../../../lib/datatypes/quantity');

describe('ParameterDef', function() {
  this.beforeEach(function() {
    setup(this, data);
    return this.param = this.lib.parameters.MeasureYear;
  });

  it('should have a name', function() {
    return this.param.name.should.equal('MeasureYear');
  });

  it('should execute to default value', function() {
    return this.param.exec(this.ctx).should.equal(2012);
  });

  it('should execute to provided value', function() {
    return this.param.exec(this.ctx.withParameters({ MeasureYear: 2013 })).should.equal(2013);
  });

  it('should work with typed int parameters', function() {
    const intParam = this.lib.parameters.IntParameter;
    return intParam.exec(this.ctx.withParameters({ IntParameter: 17 })).should.equal(17);
  });

  it('should work with typed list parameters', function() {
    const listParam = this.lib.parameters.ListParameter;
    return listParam.exec(this.ctx.withParameters({ ListParameter: ['a', 'b', 'c'] })).should.eql(['a', 'b', 'c']);
});

  return it('should work with typed tuple parameters', function() {
    const tupleParam = this.lib.parameters.TupleParameter;
    const v = { a : 1, b : 'bee', c : true, d : [10, 9, 8], e : { f : 'eff', g : false}};
    return tupleParam.exec(this.ctx.withParameters({ TupleParameter: v })).should.eql(v);
  });
});

describe('ParameterRef', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should have a name', function() {
    return this.foo.name.should.equal('FooP');
  });

  it('should execute to default value', function() {
    return this.foo.exec(this.ctx).should.equal('Bar');
  });

  it('should execute to provided value', function() {
    return this.foo.exec(this.ctx.withParameters({ FooP: 'Bah' })).should.equal('Bah');
  });

  return it('should fail when provided value is wrong type', function() {
    return should(() => this.foo.exec(this.ctx.withParameters({ FooP: 12 }))).throw(/.*wrong type.*/);
  });
});

describe('BooleanParameterTypes', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should execute to provided valid value', function() {
    return this.foo.exec(this.ctx.withParameters({ FooP: true })).should.equal(true);
  });

  it('should throw when provided value is wrong type', function() {
    return should(() => this.foo.exec(this.ctx.withParameters({ FooP: 12 }))).throw(/.*wrong type.*/);
  });

  it('should execute to default value', function() {
    return this.foo2.exec(this.ctx).should.equal(true);
  });

  it('should execute to overriding valid value', function() {
    return this.foo2.exec(this.ctx.withParameters({ FooDP: false })).should.equal(false);
  });

  return it('should throw when overriding value is wrong type', function() {
    return should(() => this.foo2.exec(this.ctx.withParameters({ FooDP: 12 }))).throw(/.*wrong type.*/);
  });
});

describe('DecimalParameterTypes', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should execute to provided valid value', function() {
    return this.foo.exec(this.ctx.withParameters({ FooP: 3.0 })).should.equal(3.0);
  });

  it('should throw when provided value is wrong type', function() {
    return should(() => this.foo.exec(this.ctx.withParameters({ FooP: '3' }))).throw(/.*wrong type.*/);
  });

  it('should execute to default value', function() {
    return this.foo2.exec(this.ctx).should.equal(1.5);
  });

  it('should execute to overriding valid value', function() {
    return this.foo2.exec(this.ctx.withParameters({ FooDP: 3.0 })).should.equal(3.0);
  });

  return it('should throw when overriding value is wrong type', function() {
    return should(() => this.foo2.exec(this.ctx.withParameters({ FooDP: '3' }))).throw(/.*wrong type.*/);
  });
});

describe('IntegerParameterTypes', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should execute to provided valid value', function() {
    return this.foo.exec(this.ctx.withParameters({ FooP: 3 })).should.equal(3);
  });

  it('should throw when provided value is wrong type', function() {
    return should(() => this.foo.exec(this.ctx.withParameters({ FooP: 3.5 }))).throw(/.*wrong type.*/);
  });

  it('should execute to default value', function() {
    return this.foo2.exec(this.ctx).should.equal(2);
  });

  it('should execute to overriding valid value', function() {
    return this.foo2.exec(this.ctx.withParameters({ FooDP: 3 })).should.equal(3);
  });

  return it('should throw when overriding value is wrong type', function() {
    return should(() => this.foo2.exec(this.ctx.withParameters({ FooDP: 3.5 }))).throw(/.*wrong type.*/);
  });
});

describe('StringParameterTypes', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should execute to provided valid value', function() {
    return this.foo.exec(this.ctx.withParameters({ FooP: 'Hello World' })).should.equal('Hello World');
  });

  it('should throw when provided value is wrong type', function() {
    return should(() => this.foo.exec(this.ctx.withParameters({ FooP: 42 }))).throw(/.*wrong type.*/);
  });

  it('should execute to default value', function() {
    return this.foo2.exec(this.ctx).should.equal('Hello');
  });

  it('should execute to overriding valid value', function() {
    return this.foo2.exec(this.ctx.withParameters({ FooDP: 'Hello World' })).should.equal('Hello World');
  });

  return it('should throw when overriding value is wrong type', function() {
    return should(() => this.foo2.exec(this.ctx.withParameters({ FooDP: 42 }))).throw(/.*wrong type.*/);
  });
});

describe('CodeParameterTypes', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should execute to provided valid value', function() {
    const c = new Code("foo", "http://foo.org", null, "Foo");
    return this.foo.exec(this.ctx.withParameters({ FooP: c })).should.equal(c);
  });

  it('should throw when provided value is wrong type', function() {
    const c = new Concept([new Code("foo", "http://foo.org")], "Foo");
    return should(() => this.foo.exec(this.ctx.withParameters({ FooP: c }))).throw(/.*wrong type.*/);
  });

  it('should execute to default value', function() {
    return this.foo2.exec(this.ctx).should.eql(new Code("FooTest", "http://footest.org", undefined, "Foo Test"));
  });

  it('should execute to overriding valid value', function() {
    const c = new Code("foo", "http://foo.org", null, "Foo");
    return this.foo2.exec(this.ctx.withParameters({ FooDP: c })).should.equal(c);
  });

  return it('should throw when overriding value is wrong type', function() {
    const c = new Concept([new Code("foo", "http://foo.org")], "Foo");
    return should(() => this.foo2.exec(this.ctx.withParameters({ FooDP: c }))).throw(/.*wrong type.*/);
  });
});

describe('ConceptParameterTypes', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should execute to provided valid value', function() {
    const c = new Concept([new Code("foo", "http://foo.org")], "Foo");
    return this.foo.exec(this.ctx.withParameters({ FooP: c })).should.equal(c);
  });

  it('should throw when provided value is wrong type', function() {
    const c = new Code("foo", "http://foo.org");
    return should(() => this.foo.exec(this.ctx.withParameters({ FooP: c }))).throw(/.*wrong type.*/);
  });

  it('should execute to default value', function() {
    return this.foo2.exec(this.ctx).should.eql(new Concept([new Code("FooTest", "http://footest.org")], "Foo Test"));
  });

  it('should execute to overriding valid value', function() {
    const c = new Concept([new Code("foo", "http://foo.org")], "Foo");
    return this.foo2.exec(this.ctx.withParameters({ FooDP: c })).should.equal(c);
  });

  return it('should throw when overriding value is wrong type', function() {
    const c = new Code("foo", "http://foo.org");
    return should(() => this.foo2.exec(this.ctx.withParameters({ FooDP: c }))).throw(/.*wrong type.*/);
  });
});

describe('DateTimeParameterTypes', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should execute to provided valid value', function() {
    const d = DateTime.parse('2012-10-25T12:55:14.456+00');
    return this.foo.exec(this.ctx.withParameters({ FooP: d })).should.equal(d);
  });

  it('should throw when provided value is wrong type', function() {
    const d = "2012-10-25T12:55:14.456+00";
    return should(() => this.foo.exec(this.ctx.withParameters({ FooP: d }))).throw(/.*wrong type.*/);
  });

  it('should execute to default value', function() {
    return this.foo2.exec(this.ctx).should.eql(DateTime.parse('2012-04-01T12:11:10'));
  });

  it('should execute to overriding valid value', function() {
    const d = DateTime.parse('2012-10-25T12:55:14.456+00');
    return this.foo2.exec(this.ctx.withParameters({ FooDP: d })).should.equal(d);
  });

  return it('should throw when overriding value is wrong type', function() {
    const d = "2012-10-25T12:55:14.456+00";
    return should(() => this.foo2.exec(this.ctx.withParameters({ FooP: d }))).throw(/.*wrong type.*/);
  });
});

describe('DateParameterTypes', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should execute to provided valid value', function() {
    const d = Date.parse('2012-10-25');
    return this.foo.exec(this.ctx.withParameters({ FooP: d })).should.equal(d);
  });

  it('should throw when provided value is wrong type', function() {
    const d = "2012-10-25";
    return should(() => this.foo.exec(this.ctx.withParameters({ FooP: d }))).throw(/.*wrong type.*/);
  });

  it('should execute to default value', function() {
    return this.foo2.exec(this.ctx).should.eql(Date.parse('2012-04-01'));
  });

  it('should execute to overriding valid value', function() {
    const d = Date.parse('2012-10-25');
    return this.foo2.exec(this.ctx.withParameters({ FooDP: d })).should.equal(d);
  });

  return it('should throw when overriding value is wrong type', function() {
    const d = "2012-10-25";
    return should(() => this.foo2.exec(this.ctx.withParameters({ FooP: d }))).throw(/.*wrong type.*/);
  });
});

describe('QuantityParameterTypes', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should execute to provided valid value', function() {
    const q = new Quantity(5, 'mg');
    return this.foo.exec(this.ctx.withParameters({ FooP: q })).should.equal(q);
  });

  it('should throw when provided value is wrong type', function() {
    const q = 5;
    return should(() => this.foo.exec(this.ctx.withParameters({ FooP: q }))).throw(/.*wrong type.*/);
  });

  it('should execute to default value', function() {
    return this.foo2.exec(this.ctx).should.eql(new Quantity(10, 'dL'));
  });

  it('should execute to overriding valid value', function() {
    const q = new Quantity(5, 'mg');
    return this.foo2.exec(this.ctx.withParameters({ FooDP: q })).should.equal(q);
  });

  return it('should throw when overriding value is wrong type', function() {
    const q = 5;
    return should(() => this.foo2.exec(this.ctx.withParameters({ FooP: q }))).throw(/.*wrong type.*/);
  });
});

describe('TimeParameterTypes', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should execute to provided valid value', function() {
    const t = DateTime.parse('2012-10-25T12:55:14.456+00').getTime();
    return this.foo.exec(this.ctx.withParameters({ FooP: t })).should.equal(t);
  });

  it('should throw when provided value is wrong type', function() {
    const t = DateTime.parse('2012-10-25T12:55:14.456+00');
    return should(() => this.foo.exec(this.ctx.withParameters({ FooP: t }))).throw(/.*wrong type.*/);
  });

  it('should execute to default value', function() {
    return this.foo2.exec(this.ctx).should.eql(DateTime.parse('2012-10-25T12:00:00').getTime());
  });

  it('should execute to overriding valid value', function() {
    const t = DateTime.parse('2012-10-25T12:55:14.456+00').getTime();
    return this.foo2.exec(this.ctx.withParameters({ FooDP: t })).should.equal(t);
  });

  return it('should throw when overriding value is wrong type', function() {
    const t = DateTime.parse('2012-10-25T12:55:14.456+00');
    return should(() => this.foo2.exec(this.ctx.withParameters({ FooP: t }))).throw(/.*wrong type.*/);
  });
});

describe('ListParameterTypes', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should execute to provided valid value', function() {
    return this.foo.exec(this.ctx.withParameters({ FooP: ["Hello", "World"] })).should.eql(["Hello", "World"]);
});

  it('should throw when provided value is not a list', function() {
    return should(() => this.foo.exec(this.ctx.withParameters({ FooP: "Hello World" }))).throw(/.*wrong type.*/);
  });

  it('should throw when list contains a wrong type', function() {
    return should(() => this.foo.exec(this.ctx.withParameters({ FooP: ["Hello", 2468] }))).throw(/.*wrong type.*/);
  });

  it('should execute to default value', function() {
    return this.foo2.exec(this.ctx).should.eql(['a', 'b', 'c']);
});

  it('should execute to overriding valid value', function() {
    return this.foo2.exec(this.ctx.withParameters({ FooDP: ["Hello", "World"] })).should.eql(["Hello", "World"]);
});

  it('should throw when overriding value is not a list', function() {
    return should(() => this.foo2.exec(this.ctx.withParameters({ FooP: "Hello World" }))).throw(/.*wrong type.*/);
  });

  return it('should throw when overriding list contains a wrong type', function() {
    return should(() => this.foo2.exec(this.ctx.withParameters({ FooP: ["Hello", 2468] }))).throw(/.*wrong type.*/);
  });
});

describe('IntervalParameterTypes', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should execute to provided valid value', function() {
    return this.foo.exec(this.ctx.withParameters({ FooP: new Interval(1, 5) })).should.eql(new Interval(1, 5));
  });

  it('should throw when provided value is not an interval', function() {
    return should(() => this.foo.exec(this.ctx.withParameters({ FooP: [1, 5] }))).throw(/.*wrong type.*/);
  });

  it('should throw when interval contains a wrong point type', function() {
    return should(() => this.foo.exec(this.ctx.withParameters({ FooP: new Interval(1.5, 5.5) }))).throw(/.*wrong type.*/);
  });

  it('should execute to default value', function() {
    return this.foo2.exec(this.ctx).should.eql(new Interval(2, 6));
  });

  it('should execute to overriding valid value', function() {
    return this.foo2.exec(this.ctx.withParameters({ FooDP: new Interval(1, 5) })).should.eql(new Interval(1, 5));
  });

  it('should throw when overriding value is not an interval', function() {
    return should(() => this.foo2.exec(this.ctx.withParameters({ FooP: [1, 5] }))).throw(/.*wrong type.*/);
  });

  return it('should throw when overriding interval contains a wrong point type', function() {
    return should(() => this.foo2.exec(this.ctx.withParameters({ FooP: new Interval(1.5, 5.5) }))).throw(/.*wrong type.*/);
  });
});

describe('TupleParameterTypes', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should execute to provided valid value', function() {
    const t = { Hello: "World", MeaningOfLife: 42 };
    return this.foo.exec(this.ctx.withParameters({ FooP: t })).should.eql(t);
  });

  it('should allow missing tuple properties', function() {
    const t = { MeaningOfLife: 42 };
    return this.foo.exec(this.ctx.withParameters({ FooP: t })).should.eql(t);
  });

  it('should throw when provided value is not a tuple', function() {
    return should(() => this.foo.exec(this.ctx.withParameters({ FooP: "Hello World" }))).throw(/.*wrong type.*/);
  });

  it('should throw when tuple contains a wrong property type', function() {
    return should(() => this.foo.exec(this.ctx.withParameters({ FooP: { Hello: "World", MeaningOfLife: "Forty-Two" } }))).throw(/.*wrong type.*/);
  });

  it('should execute to default value', function() {
    return this.foo2.exec(this.ctx).should.eql({ Hello: "Universe", MeaningOfLife: 24 });
});

  it('should execute to overriding valid value', function() {
    const t = { Hello: "World", MeaningOfLife: 42 };
    return this.foo2.exec(this.ctx.withParameters({ FooDP: t })).should.eql(t);
  });

  it('should allow missing tuple properties in overriding tuple', function() {
    const t = { MeaningOfLife: 42 };
    return this.foo2.exec(this.ctx.withParameters({ FooDP: t })).should.eql(t);
  });

  it('should throw when overriding value is not a tuple', function() {
    return should(() => this.foo2.exec(this.ctx.withParameters({ FooP: "Hello World" }))).throw(/.*wrong type.*/);
  });

  return it('should throw when overriding tuple contains a wrong property type', function() {
    return should(() => this.foo2.exec(this.ctx.withParameters({ FooP: { Hello: "World", MeaningOfLife: "Forty-Two" } }))).throw(/.*wrong type.*/);
  });
});

describe('DefaultAndNoDefault', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  return it('should be able to retrieve a provided value and a default value', function() {
    this.foo.exec(this.ctx.withParameters({ FooWithNoDefault: 1 })).should.eql(1);
    return this.foo2.exec(this.ctx.withParameters({ FooWithNoDefault: 1 })).should.eql(5);
  });
});

describe('MeasurementPeriodParameter', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should execute expression with a passed in measurement period in a child context', function() {
    this.ctx = this.ctx.withParameters({"Measurement Period": new Interval(new DateTime(2012, 1, 1, 0, 0, 0, 0), new DateTime(2013, 1, 1, 0, 0, 0, 0))});
    const rctx = this.ctx.childContext();
    return this.measurementPeriod.exec(rctx).should.equal(true);
  });

  return it('should execute expression with a passed in measurement period in a child context', function() {
    this.ctx = this.ctx.withParameters({"Measurement Period": new Interval(new DateTime(2012, 1, 1, 0, 0, 0, 0), new DateTime(2013, 1, 1, 0, 0, 0, 0))});
    const r1ctx = this.ctx.childContext();
    const r2ctx = r1ctx.childContext();
    const r3ctx = r2ctx.childContext();
    return this.measurementPeriod.exec(r3ctx).should.equal(true);
  });
});