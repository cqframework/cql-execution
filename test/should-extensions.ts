import should from 'should';
import { Interval } from '../src/datatypes/interval';

declare module 'should' {
  interface Assertion {
    equalInterval(expected: Interval): this;
  }
}

(should as any).Assertion.add('equalInterval', function (this: any, expected: Interval) {
  this.params = { operator: 'to equal interval', expected };

  should(this.obj?.isInterval).be.ok();
  should(expected?.isInterval).be.ok();
  const normalizedThis = new Interval(
    this.obj.start(),
    this.obj.end(),
    true,
    true,
    this.obj.pointType
  );
  const normalizedExpected = new Interval(
    expected.start(),
    expected.end(),
    true,
    true,
    expected.pointType
  );
  normalizedThis.should.eql(normalizedExpected);
});
