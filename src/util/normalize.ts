import * as ucum from '@lhncbc/ucum-lhc';
import hash from 'object-hash';
import {
  Code,
  Date as CQLDate,
  DateTime,
  Interval,
  Quantity,
  Ratio,
  Uncertainty
} from '../datatypes/datatypes';
import { decimalAdjust } from './math';
import { convertUnit } from './units';

const ucumUtilInstance = ucum.UcumLhcUtils.getInstance();

export function getNormalizedHash(obj: any): string {
  return hash(normalize(obj));
}

function normalize(obj: any): any {
  // This is necessary because of the oddities of CQL
  // It allows ignoring non-set values in tuples to be compared correctly with set as null values in tuples
  if (obj === null || obj === undefined) {
    return null;
  }

  // Handle the edge case of functions
  if (typeof obj === 'function') {
    return obj;
  }

  // Simple return non-objects
  if (typeof obj !== 'object') {
    return obj;
  }

  // Handle objects - normalize as necessary to generate unique keys
  switch (obj.constructor) {
    case Array:
      return obj.map(normalize);

    case Date:
      return {
        epochMs: obj.getTime(),
        __instance: obj.constructor.name
      };

    case DateTime:
      if (typeof obj.timezoneOffset === 'number' && obj.timezoneOffset !== 0) {
        return obj.convertToTimezoneOffset(0);
      }
      return obj;

    case Interval:
      const copy = obj.copy().toClosed();
      copy.low = normalize(copy.low);
      copy.high = normalize(copy.high);
      return copy;

    case Quantity:
      if (!obj.unit) {
        return obj;
      }

      // Get the normalized base unit
      const baseUnitKey = ucumUtilInstance.commensurablesList(obj.unit)[0];

      if (!baseUnitKey) {
        // No units found - normalization not possible and use provided values
        return obj;
      } else {
        // Unit was found - convert to baseUnit and normalize
        const baseUnitKeyCode = baseUnitKey[0].csCode_;
        const conversionValue = convertUnit(obj.value, obj.unit, baseUnitKeyCode);
        const finalValue = conversionValue ? decimalAdjust('round', conversionValue, -8) : null;
        return { finalValue, baseUnitKey, __instance: 'Quantity' };
      }

    case Ratio:
      return new Ratio(normalize(obj.numerator), normalize(obj.denominator));

    case Uncertainty:
      if (obj.isPoint()) {
        return normalize(obj.low);
      }
      return new Uncertainty(normalize(obj.low), normalize(obj.high));

    case Code:
    case CQLDate:
    case RegExp:
      return obj;

    default:
      const newObj: any = {
        __instance: obj.constructor.name
      };
      Object.keys(obj).forEach(key => {
        newObj[key] = normalize(obj[key]);
      });
      return newObj;
  }
}
