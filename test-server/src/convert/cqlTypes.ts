import {
  NamedTypeSpecifier,
  ChoiceTypeSpecifier,
  IntervalTypeSpecifier,
  ListTypeSpecifier,
  TupleTypeSpecifier,
  TupleElementDefinition,
  AnyTypeSpecifier
} from 'cql-execution';

export function typeToCqlTypeSpecifier(
  typeOrSpecifier: string | AnyTypeSpecifier = '{urn:hl7-org:elm-types:r1}Any'
): AnyTypeSpecifier {
  if (typeof typeOrSpecifier === 'string') {
    return {
      type: 'NamedTypeSpecifier',
      name: typeOrSpecifier.replace(/^System\./, '{urn:hl7-org:elm-types:r1}')
    } as NamedTypeSpecifier;
  }
  return typeOrSpecifier;
}

// NOTE: Slightly modified from code in cql-execution: src/elm/type.ts
export function typeToCqlTypeString(
  typeOrSpecifier: string | AnyTypeSpecifier = '{urn:hl7-org:elm-types:r1}Any'
): string {
  if (typeof typeOrSpecifier === 'string') {
    return typeOrSpecifier.replace('{urn:hl7-org:elm-types:r1}', 'System.');
  } else if (typeOrSpecifier == null || typeOrSpecifier.type == null) {
    return 'System.Any';
  }
  switch (typeOrSpecifier.type) {
    case 'NamedTypeSpecifier':
      return (typeOrSpecifier as NamedTypeSpecifier).name.replace(
        '{urn:hl7-org:elm-types:r1}',
        'System.'
      );
    case 'ListTypeSpecifier':
      return `List<${typeToCqlTypeString((typeOrSpecifier as ListTypeSpecifier).elementType)}>`;
    case 'TupleTypeSpecifier':
      return `Tuple<${(typeOrSpecifier as TupleTypeSpecifier).element?.map((e: any) => `${e.name} ${typeToCqlTypeString(e.elementType)}`).join(', ')}>`;
    case 'IntervalTypeSpecifier':
      return `Interval<${typeToCqlTypeString((typeOrSpecifier as IntervalTypeSpecifier).pointType)}>`;
    case 'ChoiceTypeSpecifier':
      return `Choice<${(typeOrSpecifier as ChoiceTypeSpecifier).choice?.map((c: any) => typeToCqlTypeString(c)).join(', ')}>`;
    default:
      return JSON.stringify(typeOrSpecifier);
  }
}

// NOTE: Slightly modified from code in cql-execution: src/elm/type.ts
export function guessSpecifierType(val: any): AnyTypeSpecifier | undefined {
  if (val == null) {
    return;
  }
  const typeHierarchy = typeof val._typeHierarchy === 'function' && val._typeHierarchy();
  if (typeHierarchy && typeHierarchy.length > 0) {
    return typeHierarchy[0];
  } else if (typeof val === 'boolean') {
    return { type: 'NamedTypeSpecifier', name: '{urn:hl7-org:elm-types:r1}Boolean' };
  } else if (typeof val === 'number' && Math.floor(val) === val) {
    // It could still be a decimal, but we have to just take our best guess!
    return { type: 'NamedTypeSpecifier', name: '{urn:hl7-org:elm-types:r1}Integer' };
  } else if (typeof val === 'number') {
    return { type: 'NamedTypeSpecifier', name: '{urn:hl7-org:elm-types:r1}Decimal' };
  } else if (typeof val === 'string') {
    return { type: 'NamedTypeSpecifier', name: '{urn:hl7-org:elm-types:r1}String' };
  } else if (val.isConcept) {
    return { type: 'NamedTypeSpecifier', name: '{urn:hl7-org:elm-types:r1}Concept' };
  } else if (val.isCode) {
    return { type: 'NamedTypeSpecifier', name: '{urn:hl7-org:elm-types:r1}Code' };
  } else if (val.isDate) {
    return { type: 'NamedTypeSpecifier', name: '{urn:hl7-org:elm-types:r1}Date' };
  } else if (val.isTime && val.isTime()) {
    return { type: 'NamedTypeSpecifier', name: '{urn:hl7-org:elm-types:r1}Time' };
  } else if (val.isDateTime) {
    return { type: 'NamedTypeSpecifier', name: '{urn:hl7-org:elm-types:r1}DateTime' };
  } else if (val.isQuantity) {
    return { type: 'NamedTypeSpecifier', name: '{urn:hl7-org:elm-types:r1}Quantity' };
  } else if (Array.isArray(val)) {
    // Get unique types from the array (by converting to string and putting in a Set)
    const typesAsStrings = Array.from(new Set(val.map(v => JSON.stringify(guessSpecifierType(v)))));
    const types = typesAsStrings.map(ts => (/^{/.test(ts) ? JSON.parse(ts) : ts));
    return {
      type: 'ListTypeSpecifier',
      elementType: types.length == 1 ? types[0] : { type: 'ChoiceTypeSpecifier', choice: types }
    };
  } else if (val.isInterval) {
    return {
      type: 'IntervalTypeSpecifier',
      pointType: typeToCqlTypeSpecifier((val as Interval).pointType)
    };
  } else if (val.isUncertainty) {
    return guessSpecifierType(val.low ?? val.high);
  } else if (typeof val === 'object' && Object.keys(val).length > 0) {
    return {
      type: 'TupleTypeSpecifier',
      element: Object.keys(val).map(
        k => ({ name: k, elementType: guessSpecifierType(val[k]) }) as TupleElementDefinition
      )
    };
  }
  return;
}
