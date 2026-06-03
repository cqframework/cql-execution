import * as ucum from '@lhncbc/ucum-lhc';
import { type Collection, Map as ImmutableMap, Seq as ImmutableSeq } from 'immutable';
import { Code, DateTime, Interval, Quantity, Ratio, Uncertainty } from '../datatypes/datatypes';
import { decimalAdjust } from './math';
import { convertUnit } from './units';

const ucumUtilInstance = ucum.UcumLhcUtils.getInstance();

type Primitive = string | number | boolean | bigint | symbol | undefined | null;
export type NormalizedKey = Primitive | Collection<NormalizedKey, unknown>;

/**
 * Provide a unique key for an object to be used for value equality
 * A key is normalized such that representations for quantities, dates, intervals, etc. are comparable.
 */
export const toNormalizedKey = (js: any): NormalizedKey => {
  // This is necessary because of the oddities of CQL
  // It allows ignoring non-set values in tuples to be compared correctly with set as null values in tuples
  if (js === null || js === undefined) {
    return null;
  }

  // Handle the edge case of functions
  if (typeof js === 'function') {
    return ImmutableMap({
      name: js.toString(),
      __instance: 'JS.Function'
    });
  }

  // Simple return non-objects
  if (typeof js !== 'object') {
    return js;
  }

  // Handle objects - normalize as necessary to generate unique keys
  switch (js.constructor) {
    case Array:
      return ImmutableSeq(js)
        .map((x: any) => toNormalizedKey(x))
        .toList();

    case Code:
      return ImmutableMap({
        code: toNormalizedKey(js.code),
        system: toNormalizedKey(js.system),
        version: toNormalizedKey(js.version),
        display: toNormalizedKey(js.display),
        __instance: js.constructor
      });

    case Date:
      return ImmutableMap({
        epochMs: js.getTime(),
        __instance: js.constructor
      });

    case DateTime:
      if (typeof js.timezoneOffset === 'number' && js.timezoneOffset !== 0) {
        return ImmutableSeq(js.convertToTimezoneOffset(0))
          .map((x: any) => toNormalizedKey(x))
          .toMap()
          .set('__instance', js.constructor);
      } else {
        return ImmutableSeq(js)
          .map((x: any) => toNormalizedKey(x))
          .toMap()
          .set('__instance', js.constructor);
      }

    case Interval:
      return ImmutableSeq(js.toClosed())
        .map((x: any) => toNormalizedKey(x))
        .toMap()
        .set('__instance', js.constructor);

    case Quantity:
      if (!js.unit) {
        return ImmutableMap({
          value: js.value ?? null,
          unit: null,
          __instance: js.constructor
        });
      }

      // Get the normalized base unit
      const baseUnitKey = ucumUtilInstance.commensurablesList(js.unit)[0];

      if (!baseUnitKey) {
        // No units found - normalization not possible and use provided values
        return ImmutableMap({
          value: js.value ?? null,
          unit: js.unit ?? null,
          __instance: js.constructor
        });
      } else {
        // Unit was found - convert to baseUnit and normalize
        const baseUnitKeyCode = baseUnitKey[0].csCode_;
        const conversionValue = convertUnit(js.value, js.unit, baseUnitKeyCode);
        const finalValue = conversionValue ? decimalAdjust('round', conversionValue, -8) : null;
        return ImmutableMap({
          value: finalValue ?? null,
          unit: baseUnitKeyCode ?? null,
          __instance: js.constructor
        });
      }

    case Ratio:
      return ImmutableMap({
        numerator: toNormalizedKey(js.numerator),
        denominator: toNormalizedKey(js.denominator),
        __instance: js.constructor
      });

    case RegExp:
      return ImmutableMap({
        source: toNormalizedKey(js.source),
        global: toNormalizedKey(js.global),
        ignoreCase: toNormalizedKey(js.ignoreCase),
        multiline: toNormalizedKey(js.multiline),
        __instance: js.constructor
      });

    case Uncertainty:
      if (js.isPoint()) {
        return toNormalizedKey(js.low);
      } else {
        return ImmutableSeq(js)
          .map((x: any) => toNormalizedKey(x))
          .toMap()
          .set('__instance', js.constructor);
      }

    default:
      // If the object is a model object (e.g. FHIRObject) with a _typeHierarchy function,
      // then use the typeHierarchy information for the __instance value.
      // Otherwise, use the constructor for the __instance value.
      return ImmutableSeq(js)
        .map((x: any) => toNormalizedKey(x))
        .toMap()
        .set('__instance', toNormalizedKey(js._typeHierarchy?.()) ?? js.constructor);
  }
};
