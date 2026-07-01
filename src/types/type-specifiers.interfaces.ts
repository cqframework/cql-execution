import {
  ELM_NAMED_TYPE_SPECIFIER,
  ELM_LIST_TYPE_SPECIFIER,
  ELM_TUPLE_TYPE_SPECIFIER,
  ELM_INTERVAL_TYPE_SPECIFIER,
  ELM_CHOICE_TYPE_SPECIFIER
} from '../util/elmTypes';

// Types derived from http://cql.hl7.org/04-logicalspecification.html#typespecifier

/*
 * Utility type for any possible TypeSpecifier
 */
export type AnyTypeSpecifier =
  | NamedTypeSpecifier
  | IntervalTypeSpecifier
  | ListTypeSpecifier
  | TupleTypeSpecifier
  | ChoiceTypeSpecifier;

/*
 * Base interface for other TypeSpecifiers to extend from
 */
export interface TypeSpecifier {
  type: string;
  localId?: string;
}

export interface NamedTypeSpecifier extends TypeSpecifier {
  type: typeof ELM_NAMED_TYPE_SPECIFIER;
  name: string;
}

export interface IntervalTypeSpecifier extends TypeSpecifier {
  type: typeof ELM_INTERVAL_TYPE_SPECIFIER;
  pointType: AnyTypeSpecifier;
}

export interface ListTypeSpecifier extends TypeSpecifier {
  type: typeof ELM_LIST_TYPE_SPECIFIER;
  elementType: AnyTypeSpecifier;
}

export interface TupleElementDefinition {
  localId?: string;
  name: string;
  elementType: AnyTypeSpecifier;
}

export interface TupleTypeSpecifier extends TypeSpecifier {
  type: typeof ELM_TUPLE_TYPE_SPECIFIER;
  element?: TupleElementDefinition[];
}

export interface ChoiceTypeSpecifier extends TypeSpecifier {
  type: typeof ELM_CHOICE_TYPE_SPECIFIER;
  choice?: AnyTypeSpecifier[];
}
