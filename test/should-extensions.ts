import should from 'should';
import { Interval } from '../src/datatypes/interval';
import { Decimal } from '../src/datatypes/decimal';

declare module 'should' {
  interface Assertion {
    equalInterval(expected: Interval): this;
    equalDecimal(expected: Decimal): this;
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

(should as any).Assertion.add('equalDecimal', function (this: any, expected: number | bigint | Decimal) {
    this.params = { operator: 'to equal Decimal', expected: expected.toString(), obj: this.obj.toString() };

    this.assert(
      this.obj instanceof Decimal &&
        this.obj.equals(expected)
    );
});