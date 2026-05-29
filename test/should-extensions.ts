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
  this.obj.toClosed().should.eql(expected.toClosed());
});
