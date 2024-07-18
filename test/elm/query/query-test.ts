import should from 'should';
import setup from '../../setup';
const data = require('./data');
const vsets = require('./valuesets');
const { p1 } = require('./patients');
import { Interval } from '../../../src/datatypes/interval';
import { DateTime } from '../../../src/datatypes/datetime';
import { Quantity } from '../../../src/datatypes/quantity';
import { getLocalIdByPath } from '../../testHelpers';

describe('DateRangeOptimizedQuery', () => {
  beforeEach(function () {
    setup(this, data, [p1], vsets);
  });

  it('should find encounters performed during the MP', async function () {
    const e = await this.encountersDuringMP.exec(this.ctx);
    e.should.have.length(1);
    e[0].id.should.equal('http://cqframework.org/3/5');
  });

  it('should find ambulatory encounters performed during the MP', async function () {
    const e = await this.ambulatoryEncountersDuringMP.exec(this.ctx);
    e.should.have.length(1);
    e[0].id.should.equal('http://cqframework.org/3/5');
  });

  it('should find ambulatory encounter performances included in the MP', async function () {
    const e = await this.ambulatoryEncountersIncludedInMP.exec(this.ctx);
    e.should.have.length(1);
    e[0].id.should.equal('http://cqframework.org/3/5');
  });
});

describe('FunctionQuery', () => {
  beforeEach(function () {
    setup(this, data, [p1], vsets);
  });

  it('function with this', async function () {
    const functionReturnsDates = await this.queryWithThis.exec(this.ctx);
    functionReturnsDates.should.eql(true);
  });
});

describe('IncludesQuery', async function () {
  beforeEach(function () {
    setup(this, data, [p1], vsets);
  });

  it('should find ambulatory encounter performances included in the MP', async function () {
    const e = await this.mPIncludedAmbulatoryEncounters.exec(this.ctx);
    e.should.have.length(1);
    e[0].id.should.equal('http://cqframework.org/3/5');
  });
});

describe('MultiSourceQuery', () => {
  beforeEach(function () {
    setup(this, data, [p1], vsets);
  });

  it('should find all Encounters performed and Conditions', async function () {
    const e = await this.msQuery.exec(this.ctx);
    e.should.have.length(6);
    e[0].E.id.should.equal('http://cqframework.org/3/1');
    e[0].C.id.should.equal('http://cqframework.org/3/4');
    e[1].E.id.should.equal('http://cqframework.org/3/1');
    e[1].C.id.should.equal('http://cqframework.org/3/2');
    e[2].E.id.should.equal('http://cqframework.org/3/3');
    e[2].C.id.should.equal('http://cqframework.org/3/4');
    e[3].E.id.should.equal('http://cqframework.org/3/3');
    e[3].C.id.should.equal('http://cqframework.org/3/2');
    e[4].E.id.should.equal('http://cqframework.org/3/5');
    e[4].C.id.should.equal('http://cqframework.org/3/4');
    e[5].E.id.should.equal('http://cqframework.org/3/5');
    e[5].C.id.should.equal('http://cqframework.org/3/2');
  });

  it('should find encounters performed during the MP and All conditions', async function () {
    const e = await this.msQueryWhere.exec(this.ctx);
    e.should.have.length(2);
    e[0].E.id.should.equal('http://cqframework.org/3/5');
    e[0].C.id.should.equal('http://cqframework.org/3/4');
    e[1].E.id.should.equal('http://cqframework.org/3/5');
    e[1].C.id.should.equal('http://cqframework.org/3/2');
  });

  it('should be able to filter items in the where clause', async function () {
    const e = await this.msQueryWhere2.exec(this.ctx);
    e.should.have.length(1);
    e[0].E.id.should.equal('http://cqframework.org/3/5');
    e[0].C.id.should.equal('http://cqframework.org/3/2');
  });

  //multiSourceWithArrays
  it('should correctly handle individual results that are arrays', async function () {
    const e = await this.multiSourceWithArrays.exec(this.ctx);
    e.should.eql([
      { A: 'a', X: ['x'] },
      { A: 'a', X: ['y'] },
      { A: 'a', X: ['z'] },
      { A: 'b', X: ['x'] },
      { A: 'b', X: ['y'] },
      { A: 'b', X: ['z'] },
      { A: 'c', X: ['x'] },
      { A: 'c', X: ['y'] },
      { A: 'c', X: ['z'] }
    ]);
  });
});

describe('QueryRelationship', async function () {
  beforeEach(function () {
    setup(this, data, [p1]);
  });

  it('should be able to filter items with a with clause', async function () {
    const e = await this.withQuery.exec(this.ctx);
    e.should.have.length(3);
  });

  it('with clause should filter out items not available', async function () {
    const e = await this.withQuery2.exec(this.ctx);
    e.should.have.length(0);
  });

  it('should be able to filter items with a without clause', async function () {
    const e = await this.withOutQuery.exec(this.ctx);
    e.should.have.length(3);
  });

  it('without clause should be able to filter items with a without clause', async function () {
    const e = await this.withOutQuery2.exec(this.ctx);
    e.should.have.length(0);
  });
});

describe('QueryLet', () => {
  beforeEach(function () {
    setup(this, data, [p1]);
  });

  it('should be able to define a variable in a query and use it', async function () {
    const e = await this.query.exec(this.ctx);
    e.should.have.length(3);
    e[0]['a'].should.equal(e[0]['E']);
    e[1]['a'].should.equal(e[1]['E']);
    e[2]['a'].should.equal(e[2]['E']);
  });
});

describe('Tuple', () => {
  beforeEach(function () {
    setup(this, data, [p1]);
  });

  it('should be able to return tuple from a query', async function () {
    const e = await this.query.exec(this.ctx);
    e.should.have.length(3);
  });
});

describe('QueryFilterNulls', () => {
  beforeEach(function () {
    setup(this, data, [p1]);
  });

  it('should properly handle querying over nulls', async function () {
    const e = await this.query.exec(this.ctx);
    e.should.have.length(2);
    e.should.eql(['One', 'Two']);
  });
});

describe('Sorting', () => {
  beforeEach(function () {
    setup(this, data, [p1]);
  });

  it('should correctly sort quantities asc', async function () {
    const e = await this.quantityListAsc.exec(this.ctx);
    e.should.have.length(2);
    e[0]['value'].should.equal(2);
  });

  it('should correctly sort quantities', async function () {
    const e = await this.quantityListSort.exec(this.ctx);
    e[0]['N']['value'].should.equal(2);
  });

  it('should be able to sort by a tuple field asc', async function () {
    let e = await this.tupleAsc.exec(this.ctx);
    e.should.have.length(3);
    e[0].id.should.equal('http://cqframework.org/3/1');
    e[1].id.should.equal('http://cqframework.org/3/3');
    e[2].id.should.equal('http://cqframework.org/3/5');

    e = await this.tupleReturnAsc.exec(this.ctx);
    e.should.have.length(3);
    e[0].id.should.equal('http://cqframework.org/3/1');
    e[1].id.should.equal('http://cqframework.org/3/3');
    e[2].id.should.equal('http://cqframework.org/3/5');

    e = await this.tupleReturnTupleAsc.exec(this.ctx);
    e.should.have.length(3);
    e[0].E.id.should.equal('http://cqframework.org/3/1');
    e[1].E.id.should.equal('http://cqframework.org/3/3');
    e[2].E.id.should.equal('http://cqframework.org/3/5');
  });

  it('should be able to sort by a tuple field desc', async function () {
    let e = await this.tupleDesc.exec(this.ctx);
    e.should.have.length(3);
    e[2].id.should.equal('http://cqframework.org/3/1');
    e[1].id.should.equal('http://cqframework.org/3/3');
    e[0].id.should.equal('http://cqframework.org/3/5');

    e = await this.tupleReturnDesc.exec(this.ctx);
    e.should.have.length(3);
    e[2].id.should.equal('http://cqframework.org/3/1');
    e[1].id.should.equal('http://cqframework.org/3/3');
    e[0].id.should.equal('http://cqframework.org/3/5');

    e = await this.tupleReturnTupleDesc.exec(this.ctx);
    e.should.have.length(3);
    e[2].E.id.should.equal('http://cqframework.org/3/1');
    e[1].E.id.should.equal('http://cqframework.org/3/3');
    e[0].E.id.should.equal('http://cqframework.org/3/5');
  });

  it('should be able to sort dates by this', async function () {
    const unsortedDate = await this.lastDateUnsorted.exec(this.ctx);
    unsortedDate.year.should.eql(1982);
    const sortedDate = await this.lastDateByThis.exec(this.ctx);
    sortedDate.year.should.eql(2010);
  });

  it('should be able to sort by number asc', async function () {
    const e = await this.numberAsc.exec(this.ctx);
    e.should.eql([0, 3, 5, 6, 7, 8, 9]);
  });

  it('should be able to sort by number desc', async function () {
    const e = await this.numberDesc.exec(this.ctx);
    e.should.eql([9, 8, 7, 6, 5, 3, 0]);
  });

  it('should be able to sort by string asc', async function () {
    (await this.stringAsc.exec(this.ctx)).should.eql(['change', 'dont', 'jenny', 'number', 'your']);
    (await this.stringReturnAsc.exec(this.ctx)).should.eql([
      'change',
      'dont',
      'jenny',
      'number',
      'your'
    ]);
  });

  it('should be able to sort by string desc', async function () {
    (await this.stringDesc.exec(this.ctx)).should.eql([
      'your',
      'number',
      'jenny',
      'dont',
      'change'
    ]);
    (await this.stringReturnDesc.exec(this.ctx)).should.eql([
      'your',
      'number',
      'jenny',
      'dont',
      'change'
    ]);
  });

  it('should be able to sort by an expression that uses another expression in the library', async function () {
    (await this.sortByExpression.exec(this.ctx)).should.eql([
      { N: 0 },
      { N: 3 },
      { N: 5 },
      { N: 6 },
      { N: 7 },
      { N: 8 },
      { N: 9 }
    ]);
  });

  it('should be able to sort by an expression when some results are null', async function () {
    (await this.sortByExpressionWithNullResults.exec(this.ctx)).should.eql([
      { N: null },
      { N: 7 },
      { N: 8 }
    ]);
  });

  it('should be able to sort using the ascending keyword', async function () {
    const e = await this.sortWithAscendingKeyword.exec(this.ctx);
    e.should.eql([0, 3, 5, 6, 7, 8, 9]);
  });

  it('should be able to sort using the descending keyword', async function () {
    const e = await this.sortWithDescendingKeyword.exec(this.ctx);
    e.should.eql([9, 8, 7, 6, 5, 3, 0]);
  });
});

describe('Distinct', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should return distinct by default', async function () {
    (await this.defaultNumbers.exec(this.ctx)).should.eql([1, 2, 3, 4]);
    (await this.defaultStrings.exec(this.ctx)).should.eql(['foo', 'bar', 'baz']);
    (await this.defaultTuples.exec(this.ctx)).should.eql([
      { a: 1, b: 2 },
      { a: 2, b: 3 }
    ]);
  });

  it('should eliminate duplicates when returning distinct', async function () {
    (await this.distinctNumbers.exec(this.ctx)).should.eql([1, 2, 3, 4]);
    (await this.distinctStrings.exec(this.ctx)).should.eql(['foo', 'bar', 'baz']);
    (await this.distinctTuples.exec(this.ctx)).should.eql([
      { a: 1, b: 2 },
      { a: 2, b: 3 }
    ]);
  });

  it('should not eliminate duplicates when returning all', async function () {
    (await this.allNumbers.exec(this.ctx)).should.eql([
      1,
      2,
      2,
      3,
      3,
      3,
      4,
      4,
      4,
      4,
      3,
      3,
      3,
      2,
      2,
      1
    ]);
    (await this.allStrings.exec(this.ctx)).should.eql(['foo', 'bar', 'baz', 'bar']);
    (await this.allTuples.exec(this.ctx)).should.eql([
      { a: 1, b: 2 },
      { a: 2, b: 3 },
      { a: 1, b: 2 }
    ]);
  });
});

describe('SingleObjectAlias', () => {
  beforeEach(function () {
    setup(this, data, [p1]);
  });

  it('should return object for single object alias', async function () {
    const firstEncounter = await this.firstEncounter.exec(this.ctx);
    (await this.singleAlias.exec(this.ctx)).should.eql(firstEncounter);
  });

  it('should return object for single object alias with a where clause', async function () {
    const firstEncounter = await this.firstEncounter.exec(this.ctx);
    (await this.singleAliasWhere.exec(this.ctx)).should.eql(firstEncounter);
  });

  it('should return single object when multisource query is based on single alias queries', async function () {
    const firstEncounter = await this.firstEncounter.exec(this.ctx);
    const firstConditon = await this.firstCondition.exec(this.ctx);
    (await this.singleAliases.exec(this.ctx)).should.eql({ E: firstEncounter, C: firstConditon });
  });

  it('should return list for multisource query that contains and single alias and list sources', async function () {
    const conditions = await this.conditions.exec(this.ctx);
    const firstEncounter = await this.firstEncounter.exec(this.ctx);
    const firstCondition = await this.firstCondition.exec(this.ctx);
    const expt = conditions.map((con: any) => ({ Con: con, E: firstEncounter, C: firstCondition }));
    const q = await this.singleAliasesAndList.exec(this.ctx);
    q.should.have.length(conditions.length);
    q.should.eql(expt);
  });

  it('should be able to filter to null with where clause ', async function () {
    should.not.exist(await this.singleAliasWhereToNull.exec(this.ctx));
  });

  it('should be able to return different object ', async function () {
    (await this.singleAliasReturnTuple.exec(this.ctx)).should.eql({ a: 1 });
  });

  it('should be able to return different object that is a list', async function () {
    (await this.singleAliasReturnList.exec(this.ctx)).should.eql(['foo', 'bar', 'baz', 'bar']);
  });

  it('should be able to use a single object alias in a with clause', async function () {
    const encounters = await this.encounters.exec(this.ctx);
    const aw = await this.singleAliasWith.exec(this.ctx);
    aw.should.eql(encounters);
    const awe = await this.singleAliasWithEmpty.exec(this.ctx);
    awe.should.have.length(0);
  });

  it('should be able to use a single object alias in a withOut clause', async function () {
    const encounters = await this.encounters.exec(this.ctx);
    (await this.singleAliasWithOut.exec(this.ctx)).should.eql(encounters);
    (await this.singleAliasWithOutEmpty.exec(this.ctx)).should.have.length(0);
  });

  it('should allow single source queries to be null and return null', async function () {
    should.not.exist(await this.nullQuery.exec(this.ctx));
  });
});

describe('AggregateQuery', () => {
  beforeEach(function () {
    setup(this, data, [p1]);
  });

  it('should aggregate without a starting value', async function () {
    (await this.noStartingAggregation.exec(this.ctx)).should.eql(120);
  });

  it('should be able to aggregate with an expression as the starting value', async function () {
    const ret = [
      new Interval(new DateTime(1970, 1, 1), new DateTime(1978, 7, 15, 10, 0)),
      new Interval(new DateTime(1978, 7, 16, 10, 0), new DateTime(1982, 3, 15, 15, 0)),
      new Interval(new DateTime(1982, 3, 16, 15, 0), new DateTime(2013, 5, 23, 10, 0))
    ];
    (await this.expressionStartingAggregation.exec(this.ctx)).should.eql(ret);
    const asLocalId = getLocalIdByPath(
      data,
      'AggregateQuery',
      'expressionStartingAggregation',
      'aggregate',
      'starting'
    );
    should(asLocalId).not.be.null();
    should(this.ctx.localId_context[asLocalId]).not.be.undefined();
  });

  it('should be able to aggregate over distinct values', async function () {
    (await this.distinctAggregation.exec(this.ctx)).should.eql(15);
    const literalLocalId = getLocalIdByPath(
      data,
      'AggregateQuery',
      'distinctAggregation',
      'aggregate',
      'starting'
    );
    should(literalLocalId).not.be.null();
    should(this.ctx.localId_context[literalLocalId]).not.be.undefined();
  });

  it('should be able to aggregate over non-distinct values', async function () {
    (await this.allAggregation.exec(this.ctx)).should.eql(30);
    const literalLocalId = getLocalIdByPath(
      data,
      'AggregateQuery',
      'allAggregation',
      'aggregate',
      'starting'
    );
    should(literalLocalId).not.be.null();
    should(this.ctx.localId_context[literalLocalId]).not.be.undefined();
  });

  it('should be able to aggregate with a String as the starting value', async function () {
    (await this.literalStartingAggregation.exec(this.ctx)).should.eql('Start12345');
    const literalLocalId = getLocalIdByPath(
      data,
      'AggregateQuery',
      'literalStartingAggregation',
      'aggregate',
      'starting'
    );
    should(literalLocalId).not.be.null();
    should(this.ctx.localId_context[literalLocalId]).not.be.undefined();
  });

  it('should be able to aggregate with a Quantity as the starting value', async function () {
    (await this.quantityStartingAggregation.exec(this.ctx)).should.eql(new Quantity(15, 'ml'));
    const quantityLocalId = getLocalIdByPath(
      data,
      'AggregateQuery',
      'quantityStartingAggregation',
      'aggregate',
      'starting'
    );
    should(quantityLocalId).not.be.null();
    should(this.ctx.localId_context[quantityLocalId]).not.be.undefined();
  });
});

describe('NullSourceQuery', () => {
  beforeEach(function () {
    setup(this, data, [p1], vsets);
  });

  it('should return null when source is a null list', async function () {
    const result = await this.nullListQuery.exec(this.ctx);
    should(result).be.null();
  });

  it('should return null when source is a null object', async function () {
    const result = await this.nullObjectQuery.exec(this.ctx);
    should(result).be.null();
  });

  it('should return null when every source in a multi-source query null list', async function () {
    const result = await this.allNullMultiSourceQuery.exec(this.ctx);
    should(result).be.null();
  });

  it('should return empty list when one source is a list and the other is null', async function () {
    const result = await this.someNullMultiSourceQuery.exec(this.ctx);
    result.should.eql([]);
  });
});
