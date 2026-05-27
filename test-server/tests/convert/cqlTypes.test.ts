import { describe, it, expect } from 'vitest';
import {
  typeToCqlTypeSpecifier,
  typeToCqlTypeString,
  guessSpecifierType
} from '@src/convert/cqlTypes';
import {
  AnyTypeSpecifier,
  ChoiceTypeSpecifier,
  Code,
  Concept,
  Date as CqlDate,
  DateTime,
  Interval,
  IntervalTypeSpecifier,
  ListTypeSpecifier,
  NamedTypeSpecifier,
  Quantity,
  RecordObject,
  TupleTypeSpecifier
} from '../../..';
import { Uncertainty } from '../../../lib/datatypes/uncertainty';

describe('typeToCqlTypeSpecifier', () => {
  it('converts System.* string to NamedTypeSpecifier with ELM namespace', () => {
    const spec = typeToCqlTypeSpecifier('System.Boolean');
    expect(spec).toEqual({
      type: 'NamedTypeSpecifier',
      name: '{urn:hl7-org:elm-types:r1}Boolean'
    } as NamedTypeSpecifier);
  });

  it('passes through an existing TypeSpecifier unchanged', () => {
    const existing = {
      type: 'ListTypeSpecifier',
      elementType: { type: 'NamedTypeSpecifier', name: '{urn:hl7-org:elm-types:r1}String' }
    } as ListTypeSpecifier;
    const spec = typeToCqlTypeSpecifier(existing);
    expect(spec).toBe(existing);
  });
});

describe('typeToCqlTypeString', () => {
  it('returns System.Any for nullish or missing type', () => {
    expect(typeToCqlTypeString(null as unknown as AnyTypeSpecifier)).toBe('System.Any');
    expect(typeToCqlTypeString({} as AnyTypeSpecifier)).toBe('System.Any');
  });

  it('converts ELM-namespaced string to System.*', () => {
    expect(typeToCqlTypeString('{urn:hl7-org:elm-types:r1}String')).toBe('System.String');
  });

  it('converts NamedTypeSpecifier', () => {
    const spec = {
      type: 'NamedTypeSpecifier',
      name: '{urn:hl7-org:elm-types:r1}Integer'
    } as NamedTypeSpecifier;
    expect(typeToCqlTypeString(spec)).toBe('System.Integer');
  });

  it('converts ListTypeSpecifier recursively', () => {
    const spec = {
      type: 'ListTypeSpecifier',
      elementType: { type: 'NamedTypeSpecifier', name: '{urn:hl7-org:elm-types:r1}Boolean' }
    } as ListTypeSpecifier;
    expect(typeToCqlTypeString(spec)).toBe('List<System.Boolean>');
  });

  it('converts TupleTypeSpecifier with named elements', () => {
    const spec = {
      type: 'TupleTypeSpecifier',
      element: [
        {
          name: 'a',
          elementType: { type: 'NamedTypeSpecifier', name: '{urn:hl7-org:elm-types:r1}Integer' }
        },
        {
          name: 'b',
          elementType: { type: 'NamedTypeSpecifier', name: '{urn:hl7-org:elm-types:r1}String' }
        }
      ]
    } as TupleTypeSpecifier;
    expect(typeToCqlTypeString(spec)).toBe('Tuple<a System.Integer, b System.String>');
  });

  it('converts IntervalTypeSpecifier', () => {
    const spec = {
      type: 'IntervalTypeSpecifier',
      pointType: { type: 'NamedTypeSpecifier', name: '{urn:hl7-org:elm-types:r1}Decimal' }
    } as IntervalTypeSpecifier;
    expect(typeToCqlTypeString(spec)).toBe('Interval<System.Decimal>');
  });

  it('formats ChoiceTypeSpecifier', () => {
    const spec = {
      type: 'ChoiceTypeSpecifier',
      choice: [
        { type: 'NamedTypeSpecifier', name: '{urn:hl7-org:elm-types:r1}String' },
        { type: 'NamedTypeSpecifier', name: '{urn:hl7-org:elm-types:r1}Integer' }
      ]
    } as ChoiceTypeSpecifier;
    expect(typeToCqlTypeString(spec)).toBe('Choice<System.String, System.Integer>');
  });

  it('stringifies unknown specifier types', () => {
    const spec = { type: 'UnknownTypeSpecifier', foo: 1 };
    expect(typeToCqlTypeString(spec as AnyTypeSpecifier)).toBe(JSON.stringify(spec));
  });
});

describe('guessSpecifierType', () => {
  it('returns undefined for nullish input', () => {
    expect(guessSpecifierType(null)).toBeUndefined();
    expect(guessSpecifierType(undefined)).toBeUndefined();
  });

  it('uses _typeHierarchy when provided', () => {
    const obj = {
      hello: 'world',
      _typeHierarchy: () => [
        { type: 'NamedTypeSpecifier', name: '{urn:example:project}Greeting' },
        { type: 'NamedTypeSpecifier', name: '{urn:example:project}Message' }
      ]
    } as Partial<RecordObject>;
    expect(guessSpecifierType(obj)).toEqual({
      type: 'NamedTypeSpecifier',
      name: '{urn:example:project}Greeting'
    });
  });

  it('detects primitives and standard CQL datatypes', () => {
    expect(guessSpecifierType(true)).toEqual({
      type: 'NamedTypeSpecifier',
      name: '{urn:hl7-org:elm-types:r1}Boolean'
    } as NamedTypeSpecifier);
    expect(guessSpecifierType(3)).toEqual({
      type: 'NamedTypeSpecifier',
      name: '{urn:hl7-org:elm-types:r1}Integer'
    } as NamedTypeSpecifier);
    expect(guessSpecifierType(3.14)).toEqual({
      type: 'NamedTypeSpecifier',
      name: '{urn:hl7-org:elm-types:r1}Decimal'
    } as NamedTypeSpecifier);
    expect(guessSpecifierType('hello')).toEqual({
      type: 'NamedTypeSpecifier',
      name: '{urn:hl7-org:elm-types:r1}String'
    } as NamedTypeSpecifier);
    const concept = new Concept([new Code('foo')]);
    expect(guessSpecifierType(concept)).toEqual({
      type: 'NamedTypeSpecifier',
      name: '{urn:hl7-org:elm-types:r1}Concept'
    } as NamedTypeSpecifier);
    const code = new Code('foo');
    expect(guessSpecifierType(code)).toEqual({
      type: 'NamedTypeSpecifier',
      name: '{urn:hl7-org:elm-types:r1}Code'
    } as NamedTypeSpecifier);
    const quantity = new Quantity(1.5, 'cm');
    expect(guessSpecifierType(quantity)).toEqual({
      type: 'NamedTypeSpecifier',
      name: '{urn:hl7-org:elm-types:r1}Quantity'
    } as NamedTypeSpecifier);
    const date = new CqlDate(2025, 1, 1);
    expect(guessSpecifierType(date)).toEqual({
      type: 'NamedTypeSpecifier',
      name: '{urn:hl7-org:elm-types:r1}Date'
    } as NamedTypeSpecifier);
    const dateTime = new DateTime(2025, 1, 1, 12, 0, 0, 0, 0);
    expect(guessSpecifierType(dateTime)).toEqual({
      type: 'NamedTypeSpecifier',
      name: '{urn:hl7-org:elm-types:r1}DateTime'
    } as NamedTypeSpecifier);
    const time = new DateTime(2025, 1, 1, 12, 0, 0, 0, 0).getTime();
    expect(guessSpecifierType(time)).toEqual({
      type: 'NamedTypeSpecifier',
      name: '{urn:hl7-org:elm-types:r1}Time'
    } as NamedTypeSpecifier);
  });

  it('returns the correct type for Uncertainty values', () => {
    const spec = guessSpecifierType(new Uncertainty(1.5, 2.5))!;
    expect(spec).toEqual({
      type: 'NamedTypeSpecifier',
      name: '{urn:hl7-org:elm-types:r1}Decimal'
    } as NamedTypeSpecifier);
  });

  it('returns ListTypeSpecifier for arrays with consistent type', () => {
    const spec = guessSpecifierType([1, 2, 3])!;
    expect(spec).toEqual({
      type: 'ListTypeSpecifier',
      elementType: { type: 'NamedTypeSpecifier', name: '{urn:hl7-org:elm-types:r1}Integer' }
    } as ListTypeSpecifier);
  });

  it('returns ListTypeSpecifier with Choice for arrays with mixed types', () => {
    const spec = guessSpecifierType([1, 2.5, true])!;
    expect(spec).toEqual({
      type: 'ListTypeSpecifier',
      elementType: {
        type: 'ChoiceTypeSpecifier',
        choice: [
          { type: 'NamedTypeSpecifier', name: '{urn:hl7-org:elm-types:r1}Integer' },
          { type: 'NamedTypeSpecifier', name: '{urn:hl7-org:elm-types:r1}Decimal' },
          { type: 'NamedTypeSpecifier', name: '{urn:hl7-org:elm-types:r1}Boolean' }
        ]
      }
    } as ListTypeSpecifier);
  });

  it('returns IntervalTypeSpecifier with correct point type', () => {
    const spec = guessSpecifierType(new Interval(1, 5))!;
    expect(spec).toEqual({
      type: 'IntervalTypeSpecifier',
      pointType: { type: 'NamedTypeSpecifier', name: '{urn:hl7-org:elm-types:r1}Integer' }
    } as IntervalTypeSpecifier);
  });

  it('returns TupleTypeSpecifier with correct element types for plain objects', () => {
    const spec = guessSpecifierType({ a: 1, b: 'x' })!;
    expect(spec).toEqual({
      type: 'TupleTypeSpecifier',
      element: [
        {
          name: 'a',
          elementType: { type: 'NamedTypeSpecifier', name: '{urn:hl7-org:elm-types:r1}Integer' }
        },
        {
          name: 'b',
          elementType: { type: 'NamedTypeSpecifier', name: '{urn:hl7-org:elm-types:r1}String' }
        }
      ]
    } as TupleTypeSpecifier);
  });
});
