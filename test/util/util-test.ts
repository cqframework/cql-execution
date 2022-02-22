import { asyncMergeSort, typeIsArray } from '../../src/util/util';
import 'should';

describe('typeIsArray', () => {
  it('should properly identify arrays', () => {
    typeIsArray([1, 2, 3]).should.be.true();
    typeIsArray(['a', 'b', 'c']).should.be.true();
    typeIsArray([
      ['a', 'b', 'c'],
      [1, 2, 3]
    ]).should.be.true();
    typeIsArray([
      { a: 1, b: 2, c: 3 },
      { x: 24, y: 25, z: 26 }
    ]);
    typeIsArray([]).should.be.true();
  });

  it('should properly reject non-arrays', () => {
    typeIsArray(1).should.be.false();
    typeIsArray('a').should.be.false();
    typeIsArray('[]').should.be.false();
    typeIsArray({ a: 1, b: 2, c: 3 }).should.be.false();
    typeIsArray({ a: [] }).should.be.false();
    typeIsArray(null).should.be.false();
  });
});

describe('asyncMergeSort', () => {
  const sortAsc = async (a: number | string, b: number | string) => {
    if (a < b) return -1;
    else if (a > b) return 1;
    return 0;
  };
  const sortDesc = async (a: number | string, b: number | string) => {
    if (a < b) return 1;
    else if (a > b) return -1;
    return 0;
  };

  it('should not change empty array', async () => {
    const arr: any = [];
    const sorted = await asyncMergeSort(arr, sortAsc);

    sorted.should.eql([]);
  });

  it('should not change array with 1 element', async () => {
    const arr = [1];
    const sorted = await asyncMergeSort(arr, sortAsc);

    sorted.should.eql([1]);
  });

  it('should sort array with 2 elements ascending', async () => {
    const arr = [2, 1];
    const sorted = await asyncMergeSort(arr, sortAsc);

    sorted.should.eql([1, 2]);
  });

  it('should sort array with 2 elements descending', async () => {
    const arr = [1, 2];
    const sorted = await asyncMergeSort(arr, sortDesc);

    sorted.should.eql([2, 1]);
  });

  it('should sort array ascending', async () => {
    const arr = [3, -1, 0, 1, 5, 2];
    const sorted = await asyncMergeSort(arr, sortAsc);

    sorted.should.eql([-1, 0, 1, 2, 3, 5]);
  });

  it('should sort array descending', async () => {
    const arr = [3, -1, 0, 1, 5, 2];
    const sorted = await asyncMergeSort(arr, sortDesc);

    sorted.should.eql([5, 3, 2, 1, 0, -1]);
  });

  it('should sort strings ascending', async () => {
    const arr = ['def', 'abc', 'jkl', 'ghi'];
    const sorted = await asyncMergeSort(arr, sortAsc);

    sorted.should.eql(['abc', 'def', 'ghi', 'jkl']);
  });

  it('should sort complex object', async () => {
    const arr = [{ val: 3 }, { val: 1 }, { val: 2 }];

    const sorted = await asyncMergeSort(arr, async (a, b) => a.val - b.val);
    sorted.should.eql([{ val: 1 }, { val: 2 }, { val: 3 }]);
  });
});
