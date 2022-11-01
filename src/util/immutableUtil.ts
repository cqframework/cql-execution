import * as ucum from '@lhncbc/ucum-lhc';
import Immutable from 'immutable';
import { Code, DateTime, Interval, Quantity, Ratio, Uncertainty } from '../datatypes/datatypes';
import { decimalAdjust } from './math';
import { convertUnit } from './units';

const ucumUtilInstance = ucum.UcumLhcUtils.getInstance();

type Primitive = string | number | boolean | bigint | symbol | undefined | null;
export type NormalizedKey = Primitive | Immutable.Collection<NormalizedKey, unknown>;

export const toNormalizedKey = (js: any): NormalizedKey => {
  // This is necessary because of the oddities of CQL
  // It allows ignoring non-set values in tuples to be compared correctly with set as null values in tuples
  if (js === null || js === undefined) {
    return null;
  }

  // Handle the edge case of functions
  if (typeof js === 'function') {
    return Immutable.Map({
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
      return Immutable.Seq(js)
        .map((x: any) => toNormalizedKey(x))
        .toList();

    case Code:
      return Immutable.Map({
        code: toNormalizedKey(js.code),
        system: toNormalizedKey(js.system),
        __instance: js.constructor
      });

    case Date:
      return Immutable.Map({
        epochMs: js.getTime(),
        __instance: js.constructor
      });

    case DateTime:
      if (typeof js.timezoneOffset === 'number' && js.timezoneOffset !== 0) {
        return Immutable.Seq(js.convertToTimezoneOffset(0))
          .map((x: any) => toNormalizedKey(x))
          .toMap()
          .set('__instance', js.constructor);
      } else {
        return Immutable.Seq(js)
          .map((x: any) => toNormalizedKey(x))
          .toMap()
          .set('__instance', js.constructor);
      }

    case Interval:
      return Immutable.Seq(js.toClosed())
        .map((x: any) => toNormalizedKey(x))
        .toMap()
        .set('__instance', js.constructor);

    case Quantity:
      if (!js.unit) {
        return Immutable.Map({
          value: js.value ?? null,
          unit: null,
          __instance: js.constructor
        });
      }

      // Get the normalized base unit
      const baseUnitKey = ucumUtilInstance.commensurablesList(js.unit)[0];

      if (!baseUnitKey) {
        // No units found - normalization not possible and use provided values
        return Immutable.Map({
          value: js.value ?? null,
          unit: js.unit ?? null,
          __instance: js.constructor
        });
      } else {
        // Unit was found - convert to baseUnit and normalize
        const baseUnitKeyCode = baseUnitKey[0].csCode_;
        const conversionValue = convertUnit(js.value, js.unit, baseUnitKeyCode);
        const finalValue = conversionValue ? decimalAdjust('round', conversionValue, -8) : null;
        return Immutable.Map({
          value: finalValue ?? null,
          unit: baseUnitKeyCode ?? null,
          __instance: js.constructor
        });
      }

    case Ratio:
      return Immutable.Map({
        numerator: toNormalizedKey(js.numerator),
        denominator: toNormalizedKey(js.denominator),
        __instance: js.constructor
      });

    case RegExp:
      return Immutable.Map({
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
        return Immutable.Seq(js)
          .map((x: any) => toNormalizedKey(x))
          .toMap()
          .set('__instance', js.constructor);
      }

    default:
      // If the object is a model object (e.g. FHIRObject) with a _typeHierarchy function,
      // then use the typeHierarchy information for the __instance value.
      // Otherwise, use the constructor for the __instance value.
      return Immutable.Seq(js)
        .map((x: any) => toNormalizedKey(x))
        .toMap()
        .set('__instance', toNormalizedKey(js._typeHierarchy?.()) ?? js.constructor);
  }
};
