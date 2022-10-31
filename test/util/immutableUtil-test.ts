import Immutable from 'immutable';
import should from 'should';
import { Code, Concept, DateTime, Quantity, Ratio, ValueSet } from '../../src/cql';
import { Uncertainty } from '../../src/datatypes/uncertainty';
import { equals } from '../../src/util/comparison';
import { toNormalizedKey } from '../../src/util/immutableUtil';

describe('Memoizer Tests', () => {
  it('should normalize null and undefined properties', () => {
    const c1: { code: string; system: undefined } = { code: 'a', system: undefined };
    const c2: { code: string; system: null } = { code: 'a', system: null };

    const ic1 = toNormalizedKey(c1);
    const ic2 = toNormalizedKey(c2);

    equals(c1, c2).should.be.true();
    equals(c2, c1).should.be.true();
    Immutable.is(ic1, ic2).should.be.true();
    Immutable.is(ic2, ic1).should.be.true();
  });

  it('should properly match quantities', () => {
    const q1 = new Quantity(1, 'km');
    const q2 = new Quantity(1000, 'm');
    const q3 = new Quantity(1001, 'm');

    const iq1 = toNormalizedKey(q1);
    const iq2 = toNormalizedKey(q2);
    const iq3 = toNormalizedKey(q3);

    equals(q1, q2).should.be.true();
    equals(q1, q3).should.be.false();
    equals(q2, q3).should.be.false();

    Immutable.is(iq1, iq2).should.be.true();
    Immutable.is(iq1, iq3).should.be.false();
    Immutable.is(iq2, iq3).should.be.false();
  });

  it('should properly match ratios', () => {
    const r1 = new Ratio(new Quantity(1, 'km'), new Quantity(1, 'h'));
    const r2 = new Ratio(new Quantity(1000, 'm'), new Quantity(60, 'min'));

    const ir1 = toNormalizedKey(r1);
    const ir2 = toNormalizedKey(r2);

    // Classic
    equals(r1, r2).should.be.true();
    equals(r2, r1).should.be.true();

    // Immutable
    Immutable.is(ir1, ir2).should.be.true();
    Immutable.is(ir2, ir1).should.be.true();
  });

  it('should properly match uncertainties', () => {
    // Numbers
    const d1 = 1;
    const u1 = new Uncertainty(1);

    // Classic
    equals(u1, d1).should.be.true();
    equals(d1, u1).should.be.true();

    // Immutable
    const id1 = toNormalizedKey(d1);
    const iu1 = toNormalizedKey(u1);

    Immutable.is(id1, iu1).should.be.true();

    // Dates and Datetimes
    const d2 = new Date(2000, 1, 1);
    const d3 = new DateTime(2000, 1, 1);
    const u2 = new Uncertainty(new Date(2000, 1, 1));
    const u3 = new Uncertainty(new DateTime(2000, 1, 1));
    const u4 = new Uncertainty(new Date(2000, 1, 1), new Date(2000, 1, 1));
    const u5 = new Uncertainty(new DateTime(2000, 1, 1), new DateTime(2000, 1, 1));
    const u6 = new Uncertainty(new Date(2000, 1, 1), new Date(2000, 1, 2));
    const u7 = new Uncertainty(new DateTime(2000, 1, 1), new DateTime(2000, 1, 2));
    const u8 = new Uncertainty(new Date(2000, 1, 1), new DateTime(2000, 1, 1));
    const u9 = new Uncertainty(
      new DateTime(2000, 1, 1, 1, 0, 0, 0, 1),
      new DateTime(2000, 1, 1, 1, 0, 0, 0, 1)
    );
    const u10 = new Uncertainty(
      new DateTime(2000, 1, 1, 0, 0, 0, 0, 0),
      new DateTime(2000, 1, 1, 0, 0, 0, 0, 0)
    );

    const id2 = toNormalizedKey(d2);
    const id3 = toNormalizedKey(d3);
    const iu2 = toNormalizedKey(u2);
    const iu3 = toNormalizedKey(u3);
    const iu4 = toNormalizedKey(u4);
    const iu5 = toNormalizedKey(u5);
    const iu6 = toNormalizedKey(u6);
    const iu7 = toNormalizedKey(u7);
    const iu8 = toNormalizedKey(u8);
    const iu9 = toNormalizedKey(u9);
    const iu10 = toNormalizedKey(u10);

    // Classic
    equals(d2, d3).should.be.false();
    equals(d3, d2).should.be.false();
    equals(d2, u2).should.be.true();
    equals(d2, u3).should.be.false();
    equals(d3, u2).should.be.false();
    equals(d3, u3).should.be.true();
    equals(u2, u3).should.be.false();
    equals(u3, u2).should.be.false();

    equals(u2, u4).should.be.true();
    equals(u3, u5).should.be.true();
    equals(u2, u5).should.be.false();
    equals(u3, u4).should.be.false();
    equals(u4, u5).should.be.false();

    should(equals(u2, u6)).be.null();
    should(equals(u2, u7)).be.null();
    should(equals(u3, u7)).be.null();
    should(equals(u4, u6)).be.null();
    should(equals(u4, u7)).be.null();
    should(equals(u5, u6)).be.null();
    should(equals(u5, u7)).be.null();
    should(equals(u6, u7)).be.null();
    should(equals(u7, u6)).be.null();

    should(equals(u4, u8)).be.null();
    should(equals(u5, u8)).be.null();
    should(equals(u6, u8)).be.null();
    should(equals(u7, u8)).be.null();
    should(equals(u8, u4)).be.null();
    should(equals(u8, u5)).be.null();
    should(equals(u8, u6)).be.null();
    should(equals(u8, u7)).be.null();

    equals(u5, u9).should.be.false();
    equals(u9, u10).should.be.true();

    // Immutable
    Immutable.is(id2, id3).should.be.false();
    Immutable.is(id3, id2).should.be.false();
    Immutable.is(id2, iu2).should.be.true();
    Immutable.is(id2, iu3).should.be.false();
    Immutable.is(id3, iu2).should.be.false();
    Immutable.is(id3, iu3).should.be.true();
    Immutable.is(iu2, iu3).should.be.false();
    Immutable.is(iu3, iu2).should.be.false();

    Immutable.is(iu2, iu4).should.be.true();
    Immutable.is(iu3, iu5).should.be.true();
    Immutable.is(iu2, iu5).should.be.false();
    Immutable.is(iu3, iu4).should.be.false();
    Immutable.is(iu4, iu5).should.be.false();

    Immutable.is(iu2, iu6).should.be.false();
    Immutable.is(iu2, iu7).should.be.false();
    Immutable.is(iu3, iu7).should.be.false();
    Immutable.is(iu4, iu6).should.be.false();
    Immutable.is(iu4, iu7).should.be.false();
    Immutable.is(iu5, iu6).should.be.false();
    Immutable.is(iu5, iu7).should.be.false();
    Immutable.is(iu6, iu7).should.be.false();
    Immutable.is(iu7, iu6).should.be.false();

    Immutable.is(iu4, iu8).should.be.false();
    Immutable.is(iu5, iu8).should.be.false();
    Immutable.is(iu6, iu8).should.be.false();
    Immutable.is(iu7, iu8).should.be.false();
    Immutable.is(iu8, iu4).should.be.false();
    Immutable.is(iu8, iu5).should.be.false();
    Immutable.is(iu8, iu6).should.be.false();
    Immutable.is(iu8, iu7).should.be.false();

    Immutable.is(iu5, iu9).should.be.false();
    Immutable.is(iu9, iu10).should.be.true();
  });

  it('should properly match primitives', () => {
    const c1 = '1';
    const c2 = '0';
    const c3 = 1;
    const c4 = 0;
    const c5 = true;
    const c6 = false;

    const ic1 = toNormalizedKey(c1);
    const ic2 = toNormalizedKey(c2);
    const ic3 = toNormalizedKey(c3);
    const ic4 = toNormalizedKey(c4);
    const ic5 = toNormalizedKey(c5);
    const ic6 = toNormalizedKey(c6);

    // Classic
    equals(c1, c1).should.be.true();
    equals(c1, c2).should.be.false();
    equals(c1, c3).should.be.false();
    equals(c1, c4).should.be.false();
    equals(c1, c5).should.be.false();
    equals(c1, c6).should.be.false();

    equals(c2, c1).should.be.false();
    equals(c2, c2).should.be.true();
    equals(c2, c3).should.be.false();
    equals(c2, c4).should.be.false();
    equals(c2, c5).should.be.false();
    equals(c2, c6).should.be.false();

    equals(c3, c1).should.be.false();
    equals(c3, c2).should.be.false();
    equals(c3, c3).should.be.true();
    equals(c3, c4).should.be.false();
    equals(c3, c5).should.be.false();
    equals(c3, c6).should.be.false();

    equals(c4, c1).should.be.false();
    equals(c4, c2).should.be.false();
    equals(c4, c3).should.be.false();
    equals(c4, c4).should.be.true();
    equals(c4, c5).should.be.false();
    equals(c4, c6).should.be.false();

    equals(c5, c1).should.be.false();
    equals(c5, c2).should.be.false();
    equals(c5, c3).should.be.false();
    equals(c5, c4).should.be.false();
    equals(c5, c5).should.be.true();
    equals(c5, c6).should.be.false();

    equals(c6, c1).should.be.false();
    equals(c6, c2).should.be.false();
    equals(c6, c3).should.be.false();
    equals(c6, c4).should.be.false();
    equals(c6, c5).should.be.false();
    equals(c6, c6).should.be.true();

    // Immutable
    Immutable.is(ic1, ic1).should.be.true();
    Immutable.is(ic1, ic2).should.be.false();
    Immutable.is(ic1, ic3).should.be.false();
    Immutable.is(ic1, ic4).should.be.false();
    Immutable.is(ic1, ic5).should.be.false();
    Immutable.is(ic1, ic6).should.be.false();

    Immutable.is(ic2, ic1).should.be.false();
    Immutable.is(ic2, ic2).should.be.true();
    Immutable.is(ic2, ic3).should.be.false();
    Immutable.is(ic2, ic4).should.be.false();
    Immutable.is(ic2, ic5).should.be.false();
    Immutable.is(ic2, ic6).should.be.false();

    Immutable.is(ic3, ic1).should.be.false();
    Immutable.is(ic3, ic2).should.be.false();
    Immutable.is(ic3, ic3).should.be.true();
    Immutable.is(ic3, ic4).should.be.false();
    Immutable.is(ic3, ic5).should.be.false();
    Immutable.is(ic3, ic6).should.be.false();

    Immutable.is(ic4, ic1).should.be.false();
    Immutable.is(ic4, ic2).should.be.false();
    Immutable.is(ic4, ic3).should.be.false();
    Immutable.is(ic4, ic4).should.be.true();
    Immutable.is(ic4, ic5).should.be.false();
    Immutable.is(ic4, ic6).should.be.false();

    Immutable.is(ic5, ic1).should.be.false();
    Immutable.is(ic5, ic2).should.be.false();
    Immutable.is(ic5, ic3).should.be.false();
    Immutable.is(ic5, ic4).should.be.false();
    Immutable.is(ic5, ic5).should.be.true();
    Immutable.is(ic5, ic6).should.be.false();

    Immutable.is(ic6, ic1).should.be.false();
    Immutable.is(ic6, ic2).should.be.false();
    Immutable.is(ic6, ic3).should.be.false();
    Immutable.is(ic6, ic4).should.be.false();
    Immutable.is(ic6, ic5).should.be.false();
    Immutable.is(ic6, ic6).should.be.true();
  });

  it('should properly match classes', () => {
    const c1 = new Code('a', 'b');
    const c2 = new Code('a', 'b');
    const c3 = new Code('a', 'c');
    const c4 = new ValueSet('a', undefined, [new Code('a', 'b')]);

    const ic1 = toNormalizedKey(c1);
    const ic2 = toNormalizedKey(c2);
    const ic3 = toNormalizedKey(c3);
    const ic4 = toNormalizedKey(c4);

    // Classic
    equals(c1, c2).should.be.true();
    equals(c2, c1).should.be.true();
    equals(c1, c3).should.be.false();
    equals(c3, c1).should.be.false();
    equals(c1, c4).should.be.false();
    equals(c4, c1).should.be.false();

    // Immutable
    Immutable.is(ic1, ic2).should.be.true();
    Immutable.is(ic2, ic1).should.be.true();
    Immutable.is(ic1, ic3).should.be.false();
    Immutable.is(ic3, ic1).should.be.false();
    Immutable.is(ic1, ic4).should.be.false();
    Immutable.is(ic4, ic1).should.be.false();
  });

  it('should properly match javascript dates', () => {
    const d1 = new Date(2000, 1, 1);
    const d2 = new Date(2000, 1, 1);
    const d3 = new Date(2000, 1, 1, 1);

    const id1 = toNormalizedKey(d1);
    const id2 = toNormalizedKey(d2);
    const id3 = toNormalizedKey(d3);

    // Classic
    equals(d1, d2).should.be.true();
    equals(d2, d1).should.be.true();
    equals(d1, d3).should.be.false();
    equals(d3, d1).should.be.false();

    // Immutable
    Immutable.is(id1, id2).should.be.true();
    Immutable.is(id2, id1).should.be.true();
    Immutable.is(id1, id3).should.be.false();
    Immutable.is(id3, id1).should.be.false();
  });

  it('should properly match regular expressions', () => {
    const r1 = /^\d*(\.\d{1,2})?$/g;
    const r2 = /^\d*(\.\d{1,2})?$/g;
    const r3 = /^([0-9]{0,5}-)?[0-9]{10}$/g;

    const ir1 = toNormalizedKey(r1);
    const ir2 = toNormalizedKey(r2);
    const ir3 = toNormalizedKey(r3);

    // Classic
    equals(r1, r2).should.be.true();
    equals(r2, r1).should.be.true();
    equals(r1, r3).should.be.false();
    equals(r3, r1).should.be.false();

    // Immutable
    Immutable.is(ir1, ir2).should.be.true();
    Immutable.is(ir2, ir1).should.be.true();
    Immutable.is(ir1, ir3).should.be.false();
    Immutable.is(ir3, ir1).should.be.false();
  });

  it('should properly match arrays', () => {
    const c1 = [1, null];
    const c2 = [1, null];
    const c3 = [1, 2];

    const ic1 = toNormalizedKey(c1);
    const ic2 = toNormalizedKey(c2);
    const ic3 = toNormalizedKey(c3);

    // Classic behavior
    should(equals(c1, c2)).be.null();
    should(equals(c1, c3)).be.null();

    // The classic behavior is incorrect for List except, intersect, and distinct operations
    // For each, null should be handled as equals according to spec.  Here's the quote from CQL Appendix B:
    // Distinct: The operator uses equality comparison semantics as defined in the Equal operator, with the exception that nulls are considered equal for the purposes of distinct determination. This means that multiple nulls in the input will result in a single null in the output.
    // Except: This operator uses equality semantics to determine whether two elements are the same for the purposes of computing the difference, with the exception that null elements are considered equal.
    // Intersect: This operator uses equality semantics to determine whether or not two elements are the same, with the exception that null elements are considered equal for the purposes of the intersection.
    // A CQL example that illustrates the incorrect behavior of old code for the distinct operator, and correct behavior of new code is:
    // define "Example":
    //     ({ {1, null}, {1, null} }) q
    //     return q
    Immutable.is(ic1, ic2).should.be.true();
    Immutable.is(ic1, ic3).should.be.false();
  });

  it('should properly match functions', () => {
    const f1 = () => true;
    const f2 = () => true;
    const f3 = () => false;

    const if1 = toNormalizedKey(f1);
    const if2 = toNormalizedKey(f2);
    const if3 = toNormalizedKey(f3);

    // Classic
    equals(f1, f2).should.be.true();
    equals(f2, f1).should.be.true();
    equals(f1, f3).should.be.false();
    equals(f3, f1).should.be.false();

    Immutable.is(if1, if2).should.be.true();
    Immutable.is(if2, if1).should.be.true();
    Immutable.is(if1, if3).should.be.false();
    Immutable.is(if3, if1).should.be.false();
  });

  it('should properly match Codes/Concepts/Valuesets', () => {
    const c1 = new Code('a', 'b', undefined, undefined);
    const c2 = new Concept([new Code('a', 'b', undefined, undefined)]);
    const c3 = new ValueSet('', undefined, [new Code('a', 'b', undefined, undefined)]);
    const c4 = 'a';
    const c5: { code: string; system: string; display: undefined; version: undefined } = {
      code: 'a',
      system: 'b',
      display: undefined,
      version: undefined
    };

    const ic1 = toNormalizedKey(c1);
    const ic2 = toNormalizedKey(c2);
    const ic3 = toNormalizedKey(c3);
    const ic4 = toNormalizedKey(c4);
    const ic5 = toNormalizedKey(c5);

    // Classic
    equals(c1, c2).should.be.false();
    equals(c2, c1).should.be.false();
    equals(c1, c3).should.be.false();
    equals(c2, c3).should.be.false();
    equals(c3, c1).should.be.false();
    equals(c3, c2).should.be.false();
    equals(c1, c4).should.be.false();
    equals(c1, c5).should.be.false();

    // Immutable
    Immutable.is(ic1, ic2).should.be.false();
    Immutable.is(ic2, ic1).should.be.false();
    Immutable.is(ic1, ic3).should.be.false();
    Immutable.is(ic2, ic3).should.be.false();
    Immutable.is(ic3, ic1).should.be.false();
    Immutable.is(ic3, ic2).should.be.false();
    Immutable.is(ic1, ic4).should.be.false();
    Immutable.is(ic1, ic5).should.be.false();
  });
});
