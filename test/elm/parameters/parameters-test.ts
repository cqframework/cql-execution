import should from 'should';
import setup from '../../setup';
const data = require('./data');
import { Code, Concept } from '../../../src/datatypes/clinical';
import { DateTime, Date } from '../../../src/datatypes/datetime';
import { Interval } from '../../../src/datatypes/interval';
import { Quantity } from '../../../src/datatypes/quantity';

describe('ParameterDef', () => {
  beforeEach(function () {
    setup(this, data);
    this.param = this.lib.parameters.MeasureYear;
  });

  it('should have a name', async function () {
    this.param.name.should.equal('MeasureYear');
  });

  it('should execute to default value', async function () {
    (await this.param.exec(this.ctx)).should.equal(2012);
  });

  it('should execute to provided value', async function () {
    (await this.param.exec(this.ctx.withParameters({ MeasureYear: 2013 }))).should.equal(2013);
  });

  it('should work with typed int parameters', async function () {
    const intParam = this.lib.parameters.IntParameter;
    (await intParam.exec(this.ctx.withParameters({ IntParameter: 17 }))).should.equal(17);
  });

  it('should work with typed list parameters', async function () {
    const listParam = this.lib.parameters.ListParameter;
    (await listParam.exec(this.ctx.withParameters({ ListParameter: ['a', 'b', 'c'] }))).should.eql([
      'a',
      'b',
      'c'
    ]);
  });

  it('should work with typed tuple parameters', async function () {
    const tupleParam = this.lib.parameters.TupleParameter;
    const v = { a: 1, b: 'bee', c: true, d: [10, 9, 8], e: { f: 'eff', g: false } };
    (await tupleParam.exec(this.ctx.withParameters({ TupleParameter: v }))).should.eql(v);
  });
});

describe('ParameterRef', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should have a name', async function () {
    this.foo.name.should.equal('FooP');
  });

  it('should execute to default value', async function () {
    (await this.foo.exec(this.ctx)).should.equal('Bar');
  });

  it('should execute to provided value', async function () {
    (await this.foo.exec(this.ctx.withParameters({ FooP: 'Bah' }))).should.equal('Bah');
  });

  it('should fail when provided value is wrong type', function () {
    should(() => this.foo.exec(this.ctx.withParameters({ FooP: 12 }))).throw(/.*wrong type.*/);
  });
});

describe('BooleanParameterTypes', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should execute to provided valid value', async function () {
    (await this.foo.exec(this.ctx.withParameters({ FooP: true }))).should.equal(true);
  });

  it('should throw when provided value is wrong type', function () {
    should(() => this.foo.exec(this.ctx.withParameters({ FooP: 12 }))).throw(/.*wrong type.*/);
  });

  it('should execute to default value', async function () {
    (await this.foo2.exec(this.ctx)).should.equal(true);
  });

  it('should execute to overriding valid value', async function () {
    (await this.foo2.exec(this.ctx.withParameters({ FooDP: false }))).should.equal(false);
  });

  it('should throw when overriding value is wrong type', function () {
    should(() => this.foo2.exec(this.ctx.withParameters({ FooDP: 12 }))).throw(/.*wrong type.*/);
  });
});

describe('DecimalParameterTypes', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should execute to provided valid value', async function () {
    (await this.foo.exec(this.ctx.withParameters({ FooP: 3.0 }))).should.equal(3.0);
  });

  it('should throw when provided value is wrong type', function () {
    should(() => this.foo.exec(this.ctx.withParameters({ FooP: '3' }))).throw(/.*wrong type.*/);
  });

  it('should execute to default value', async function () {
    (await this.foo2.exec(this.ctx)).should.equal(1.5);
  });

  it('should execute to overriding valid value', async function () {
    (await this.foo2.exec(this.ctx.withParameters({ FooDP: 3.0 }))).should.equal(3.0);
  });

  it('should throw when overriding value is wrong type', function () {
    should(() => this.foo2.exec(this.ctx.withParameters({ FooDP: '3' }))).throw(/.*wrong type.*/);
  });
});

describe('IntegerParameterTypes', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should execute to provided valid value', async function () {
    (await this.foo.exec(this.ctx.withParameters({ FooP: 3 }))).should.equal(3);
  });

  it('should throw when provided value is wrong type', function () {
    should(() => this.foo.exec(this.ctx.withParameters({ FooP: 3.5 }))).throw(/.*wrong type.*/);
  });

  it('should execute to default value', async function () {
    (await this.foo2.exec(this.ctx)).should.equal(2);
  });

  it('should execute to overriding valid value', async function () {
    (await this.foo2.exec(this.ctx.withParameters({ FooDP: 3 }))).should.equal(3);
  });

  it('should throw when overriding value is wrong type', function () {
    should(() => this.foo2.exec(this.ctx.withParameters({ FooDP: 3.5 }))).throw(/.*wrong type.*/);
  });
});

describe('StringParameterTypes', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should execute to provided valid value', async function () {
    (await this.foo.exec(this.ctx.withParameters({ FooP: 'Hello World' }))).should.equal(
      'Hello World'
    );
  });

  it('should throw when provided value is wrong type', function () {
    should(() => this.foo.exec(this.ctx.withParameters({ FooP: 42 }))).throw(/.*wrong type.*/);
  });

  it('should execute to default value', async function () {
    (await this.foo2.exec(this.ctx)).should.equal('Hello');
  });

  it('should execute to overriding valid value', async function () {
    (await this.foo2.exec(this.ctx.withParameters({ FooDP: 'Hello World' }))).should.equal(
      'Hello World'
    );
  });

  it('should throw when overriding value is wrong type', function () {
    should(() => this.foo2.exec(this.ctx.withParameters({ FooDP: 42 }))).throw(/.*wrong type.*/);
  });
});

describe('CodeParameterTypes', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should execute to provided valid value', async function () {
    const c = new Code('foo', 'http://foo.org', null, 'Foo');
    (await this.foo.exec(this.ctx.withParameters({ FooP: c }))).should.equal(c);
  });

  it('should throw when provided value is wrong type', async function () {
    const c = new Concept([new Code('foo', 'http://foo.org')], 'Foo');
    should(() => this.foo.exec(this.ctx.withParameters({ FooP: c }))).throw(/.*wrong type.*/);
  });

  it('should execute to default value', async function () {
    (await this.foo2.exec(this.ctx)).should.eql(
      new Code('FooTest', 'http://footest.org', undefined, 'Foo Test')
    );
  });

  it('should execute to overriding valid value', async function () {
    const c = new Code('foo', 'http://foo.org', null, 'Foo');
    (await this.foo2.exec(this.ctx.withParameters({ FooDP: c }))).should.equal(c);
  });

  it('should throw when overriding value is wrong type', async function () {
    const c = new Concept([new Code('foo', 'http://foo.org')], 'Foo');
    should(() => this.foo2.exec(this.ctx.withParameters({ FooDP: c }))).throw(/.*wrong type.*/);
  });
});

describe('ConceptParameterTypes', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should execute to provided valid value', async function () {
    const c = new Concept([new Code('foo', 'http://foo.org')], 'Foo');
    (await this.foo.exec(this.ctx.withParameters({ FooP: c }))).should.equal(c);
  });

  it('should throw when provided value is wrong type', async function () {
    const c = new Code('foo', 'http://foo.org');
    should(() => this.foo.exec(this.ctx.withParameters({ FooP: c }))).throw(/.*wrong type.*/);
  });

  it('should execute to default value', async function () {
    (await this.foo2.exec(this.ctx)).should.eql(
      new Concept([new Code('FooTest', 'http://footest.org')], 'Foo Test')
    );
  });

  it('should execute to overriding valid value', async function () {
    const c = new Concept([new Code('foo', 'http://foo.org')], 'Foo');
    (await this.foo2.exec(this.ctx.withParameters({ FooDP: c }))).should.equal(c);
  });

  it('should throw when overriding value is wrong type', async function () {
    const c = new Code('foo', 'http://foo.org');
    should(() => this.foo2.exec(this.ctx.withParameters({ FooDP: c }))).throw(/.*wrong type.*/);
  });
});

describe('DateTimeParameterTypes', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should execute to provided valid value', async function () {
    const d = DateTime.parse('2012-10-25T12:55:14.456+00');
    (await this.foo.exec(this.ctx.withParameters({ FooP: d }))).should.equal(d);
  });

  it('should throw when provided value is wrong type', async function () {
    const d = '2012-10-25T12:55:14.456+00';
    should(() => this.foo.exec(this.ctx.withParameters({ FooP: d }))).throw(/.*wrong type.*/);
  });

  it('should execute to default value', async function () {
    (await this.foo2.exec(this.ctx)).should.eql(DateTime.parse('2012-04-01T12:11:10'));
  });

  it('should execute to overriding valid value', async function () {
    const d = DateTime.parse('2012-10-25T12:55:14.456+00');
    (await this.foo2.exec(this.ctx.withParameters({ FooDP: d }))).should.equal(d);
  });

  it('should throw when overriding value is wrong type', async function () {
    const d = '2012-10-25T12:55:14.456+00';
    should(() => this.foo2.exec(this.ctx.withParameters({ FooP: d }))).throw(/.*wrong type.*/);
  });
});

describe('DateParameterTypes', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should execute to provided valid value', async function () {
    const d = Date.parse('2012-10-25');
    (await this.foo.exec(this.ctx.withParameters({ FooP: d }))).should.equal(d);
  });

  it('should throw when provided value is wrong type', async function () {
    const d = '2012-10-25';
    should(() => this.foo.exec(this.ctx.withParameters({ FooP: d }))).throw(/.*wrong type.*/);
  });

  it('should execute to default value', async function () {
    (await this.foo2.exec(this.ctx)).should.eql(Date.parse('2012-04-01'));
  });

  it('should execute to overriding valid value', async function () {
    const d = Date.parse('2012-10-25');
    (await this.foo2.exec(this.ctx.withParameters({ FooDP: d }))).should.equal(d);
  });

  it('should throw when overriding value is wrong type', async function () {
    const d = '2012-10-25';
    should(() => this.foo2.exec(this.ctx.withParameters({ FooP: d }))).throw(/.*wrong type.*/);
  });
});

describe('QuantityParameterTypes', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should execute to provided valid value', async function () {
    const q = new Quantity(5, 'mg');
    (await this.foo.exec(this.ctx.withParameters({ FooP: q }))).should.equal(q);
  });

  it('should throw when provided value is wrong type', async function () {
    const q = 5;
    should(() => this.foo.exec(this.ctx.withParameters({ FooP: q }))).throw(/.*wrong type.*/);
  });

  it('should execute to default value', async function () {
    (await this.foo2.exec(this.ctx)).should.eql(new Quantity(10, 'dL'));
  });

  it('should execute to overriding valid value', async function () {
    const q = new Quantity(5, 'mg');
    (await this.foo2.exec(this.ctx.withParameters({ FooDP: q }))).should.equal(q);
  });

  it('should throw when overriding value is wrong type', async function () {
    const q = 5;
    should(() => this.foo2.exec(this.ctx.withParameters({ FooP: q }))).throw(/.*wrong type.*/);
  });
});

describe('TimeParameterTypes', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should execute to provided valid value', async function () {
    const t = DateTime.parse('2012-10-25T12:55:14.456+00').getTime();
    (await this.foo.exec(this.ctx.withParameters({ FooP: t }))).should.equal(t);
  });

  it('should throw when provided value is wrong type', async function () {
    const t = DateTime.parse('2012-10-25T12:55:14.456+00');
    should(() => this.foo.exec(this.ctx.withParameters({ FooP: t }))).throw(/.*wrong type.*/);
  });

  it('should execute to default value', async function () {
    (await this.foo2.exec(this.ctx)).should.eql(DateTime.parse('2012-10-25T12:00:00').getTime());
  });

  it('should execute to overriding valid value', async function () {
    const t = DateTime.parse('2012-10-25T12:55:14.456+00').getTime();
    (await this.foo2.exec(this.ctx.withParameters({ FooDP: t }))).should.equal(t);
  });

  it('should throw when overriding value is wrong type', async function () {
    const t = DateTime.parse('2012-10-25T12:55:14.456+00');
    should(() => this.foo2.exec(this.ctx.withParameters({ FooP: t }))).throw(/.*wrong type.*/);
  });
});

describe('ListParameterTypes', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should execute to provided valid value', async function () {
    (await this.foo.exec(this.ctx.withParameters({ FooP: ['Hello', 'World'] }))).should.eql([
      'Hello',
      'World'
    ]);
  });

  it('should throw when provided value is not a list', async function () {
    should(() => this.foo.exec(this.ctx.withParameters({ FooP: 'Hello World' }))).throw(
      /.*wrong type.*/
    );
  });

  it('should throw when list contains a wrong type', async function () {
    should(() => this.foo.exec(this.ctx.withParameters({ FooP: ['Hello', 2468] }))).throw(
      /.*wrong type.*/
    );
  });

  it('should execute to default value', async function () {
    (await this.foo2.exec(this.ctx)).should.eql(['a', 'b', 'c']);
  });

  it('should execute to overriding valid value', async function () {
    (await this.foo2.exec(this.ctx.withParameters({ FooDP: ['Hello', 'World'] }))).should.eql([
      'Hello',
      'World'
    ]);
  });

  it('should throw when overriding value is not a list', async function () {
    should(() => this.foo2.exec(this.ctx.withParameters({ FooP: 'Hello World' }))).throw(
      /.*wrong type.*/
    );
  });

  it('should throw when overriding list contains a wrong type', async function () {
    should(() => this.foo2.exec(this.ctx.withParameters({ FooP: ['Hello', 2468] }))).throw(
      /.*wrong type.*/
    );
  });
});

describe('IntervalParameterTypes', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should execute to provided valid value', async function () {
    (await this.foo.exec(this.ctx.withParameters({ FooP: new Interval(1, 5) }))).should.eql(
      new Interval(1, 5)
    );
  });

  it('should throw when provided value is not an interval', async function () {
    should(() => this.foo.exec(this.ctx.withParameters({ FooP: [1, 5] }))).throw(/.*wrong type.*/);
  });

  it('should throw when interval contains a wrong point type', async function () {
    should(() => this.foo.exec(this.ctx.withParameters({ FooP: new Interval(1.5, 5.5) }))).throw(
      /.*wrong type.*/
    );
  });

  it('should execute to default value', async function () {
    (await this.foo2.exec(this.ctx)).should.eql(new Interval(2, 6));
  });

  it('should execute to overriding valid value', async function () {
    (await this.foo2.exec(this.ctx.withParameters({ FooDP: new Interval(1, 5) }))).should.eql(
      new Interval(1, 5)
    );
  });

  it('should throw when overriding value is not an interval', async function () {
    should(() => this.foo2.exec(this.ctx.withParameters({ FooP: [1, 5] }))).throw(/.*wrong type.*/);
  });

  it('should throw when overriding interval contains a wrong point type', async function () {
    should(() => this.foo2.exec(this.ctx.withParameters({ FooP: new Interval(1.5, 5.5) }))).throw(
      /.*wrong type.*/
    );
  });
});

describe('TupleParameterTypes', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should execute to provided valid value', async function () {
    const t = { Hello: 'World', MeaningOfLife: 42 };
    (await this.foo.exec(this.ctx.withParameters({ FooP: t }))).should.eql(t);
  });

  it('should allow missing tuple properties', async function () {
    const t = { MeaningOfLife: 42 };
    (await this.foo.exec(this.ctx.withParameters({ FooP: t }))).should.eql(t);
  });

  it('should throw when provided value is not a tuple', async function () {
    should(() => this.foo.exec(this.ctx.withParameters({ FooP: 'Hello World' }))).throw(
      /.*wrong type.*/
    );
  });

  it('should throw when tuple contains a wrong property type', async function () {
    should(() =>
      this.foo.exec(
        this.ctx.withParameters({ FooP: { Hello: 'World', MeaningOfLife: 'Forty-Two' } })
      )
    ).throw(/.*wrong type.*/);
  });

  it('should execute to default value', async function () {
    (await this.foo2.exec(this.ctx)).should.eql({ Hello: 'Universe', MeaningOfLife: 24 });
  });

  it('should execute to overriding valid value', async function () {
    const t = { Hello: 'World', MeaningOfLife: 42 };
    (await this.foo2.exec(this.ctx.withParameters({ FooDP: t }))).should.eql(t);
  });

  it('should allow missing tuple properties in overriding tuple', async function () {
    const t = { MeaningOfLife: 42 };
    (await this.foo2.exec(this.ctx.withParameters({ FooDP: t }))).should.eql(t);
  });

  it('should throw when overriding value is not a tuple', async function () {
    should(() => this.foo2.exec(this.ctx.withParameters({ FooP: 'Hello World' }))).throw(
      /.*wrong type.*/
    );
  });

  it('should throw when overriding tuple contains a wrong property type', async function () {
    should(() =>
      this.foo2.exec(
        this.ctx.withParameters({ FooP: { Hello: 'World', MeaningOfLife: 'Forty-Two' } })
      )
    ).throw(/.*wrong type.*/);
  });
});

describe('DefaultAndNoDefault', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should be able to retrieve a provided value and a default value', async function () {
    (await this.foo.exec(this.ctx.withParameters({ FooWithNoDefault: 1 }))).should.eql(1);
    (await this.foo2.exec(this.ctx.withParameters({ FooWithNoDefault: 1 }))).should.eql(5);
  });
});

describe('MeasurementPeriodParameter', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should execute expression with a passed in measurement period in a child context', async function () {
    this.ctx = this.ctx.withParameters({
      'Measurement Period': new Interval(
        new DateTime(2012, 1, 1, 0, 0, 0, 0),
        new DateTime(2013, 1, 1, 0, 0, 0, 0)
      )
    });
    const rctx = this.ctx.childContext();
    (await this.measurementPeriod.exec(rctx)).should.equal(true);
  });

  it('should execute expression with a passed in measurement period in a child context', async function () {
    this.ctx = this.ctx.withParameters({
      'Measurement Period': new Interval(
        new DateTime(2012, 1, 1, 0, 0, 0, 0),
        new DateTime(2013, 1, 1, 0, 0, 0, 0)
      )
    });
    const r1ctx = this.ctx.childContext();
    const r2ctx = r1ctx.childContext();
    const r3ctx = r2ctx.childContext();
    (await this.measurementPeriod.exec(r3ctx)).should.equal(true);
  });
});
