import { CQLNumber } from '../src/datatypes/cql-number';
import should from 'should';
import { Interval } from '../src/datatypes/interval';

declare module 'should' {
  interface Assertion {
    equalInterval(expected: Interval): this;
    equalDecimal(expected: number | bigint | CQLNumber | string): this;
    equalInteger(expected: number | bigint | CQLNumber | string): this;
    equalLong(expected: number | bigint | CQLNumber | string): this;
    equalCql(expected: any): this;
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

(should as any).Assertion.add(
  'equalDecimal',
  function (this: any, expected: number | bigint | CQLNumber | string) {
    this.params = {
      operator: 'to equal Decimal',
      expected: expected.toString(),
      obj: this.obj.toString()
    };

    this.assert(this.obj?.isDecimal === true && this.obj.equals(expected));
  }
);

function cqlValuesEqual(actual: any, expected: any): boolean {
  if (actual?.isCQLNumber === true) {
    return actual.equals(expected?.isCQLNumber === true ? expected : CQLNumber.from(expected));
  }
  if (expected?.isCQLNumber === true) {
    return expected.equals(actual);
  }
  if (actual?.isUncertainty && expected?.isUncertainty) {
    return cqlValuesEqual(actual.low, expected.low) && cqlValuesEqual(actual.high, expected.high);
  }
  if (Array.isArray(actual) && Array.isArray(expected)) {
    return (
      actual.length === expected.length &&
      actual.every((value, i) => cqlValuesEqual(value, expected[i]))
    );
  }
  if (
    actual != null &&
    expected != null &&
    typeof actual === 'object' &&
    typeof expected === 'object'
  ) {
    const actualKeys = Object.keys(actual);
    const expectedKeys = Object.keys(expected);
    return (
      actualKeys.length === expectedKeys.length &&
      actualKeys.every(
        key => Object.hasOwn(expected, key) && cqlValuesEqual(actual[key], expected[key])
      )
    );
  }
  return actual === expected;
}

(should as any).Assertion.add('equalCql', function (this: any, expected: any) {
  this.params = { operator: 'to equal CQL value', expected };
  this.assert(cqlValuesEqual(this.obj, expected));
});

(should as any).Assertion.add(
  'equalInteger',
  function (this: any, expected: number | bigint | CQLNumber | string) {
    this.params = { operator: 'to equal Integer', expected: expected.toString() };
    this.assert(this.obj?.isInteger === true && this.obj.equals(CQLNumber.integer(expected)));
  }
);

(should as any).Assertion.add(
  'equalLong',
  function (this: any, expected: number | bigint | CQLNumber | string) {
    this.params = { operator: 'to equal Long', expected: expected.toString() };
    this.assert(this.obj?.isLong === true && this.obj.equals(CQLNumber.long(expected)));
  }
);
