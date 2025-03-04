export * from './expression';
export * from './aggregate';
export * from './arithmetic';
export * from './clinical';
export * from './comparison';
export * from './conditional';
export * from './datetime';
export * from './declaration';
export * from './external';
export * from './instance';
export * from './interval';
export * from './list';
export * from './literal';
export * from './logical';
export * from './message';
export * from './nullological';
export * from './parameters';
export * from './quantity';
export * from './query';
export * from './ratio';
export * from './reusable';
export * from './string';
export * from './structured';
export * from './type';
export * from './overloaded';

// Re-exporting interval functions as overrides to avoid ambiguity
// https://stackoverflow.com/questions/41293108/how-to-do-re-export-with-overrides
// TODO: we should improve this by perhaps renaming and reworking these functions
// it's a bit confusing right now giving the interval exports precedence over the others
import {
  doBefore,
  doUnion,
  doAfter,
  doProperIncludes,
  doIntersect,
  doIncludes,
  doExcept,
  doContains
} from './interval';

export {
  doBefore,
  doUnion,
  doAfter,
  doProperIncludes,
  doIntersect,
  doIncludes,
  doExcept,
  doContains
};
