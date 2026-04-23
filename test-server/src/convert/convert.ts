import {
  Coding,
  ParametersParameter,
  Quantity as FhirQuantity,
  Ratio as FhirRatio,
  CodeableConcept,
  Period,
  Range,
  Element,
  Parameters
} from 'fhir/r4';
import {
  AnyTypeSpecifier,
  Code,
  Concept,
  Date as CqlDate,
  DateTime as CqlDateTime,
  Quantity as CqlQuantity,
  Ratio as CqlRatio,
  Interval,
  IntervalTypeSpecifier,
  ListTypeSpecifier,
  TupleTypeSpecifier
} from '../../..';
import { guessSpecifierType, typeToCqlTypeSpecifier, typeToCqlTypeString } from './cqlTypes';
import { emptyListParameter, nullValueParameter, emptyTupleParameter } from './specialParameters';
import logger from '../logger';

const CQL_TO_UCUM_PRECISION = {
  year: 'a',
  month: 'mo',
  day: 'd',
  hour: 'h',
  minute: 'min',
  second: 's',
  millisecond: 'ms'
};

export function toParameters(result: any | null, type?: string | AnyTypeSpecifier): Parameters {
  // If the type is null or is Any, try to guess a more specific type to get better conversion results
  if (type == null || type === '{urn:hl7-org:elm-types:r1}Any') {
    const guessedType = guessSpecifierType(result);
    if (guessedType) {
      type = guessedType;
    }
  }

  const cqlTypeString = typeToCqlTypeString(type);
  const cqlTypeSpecifier = typeToCqlTypeSpecifier(type);
  const extension = [
    {
      url: 'http://hl7.org/fhir/StructureDefinition/cqf-cqlType',
      valueString: cqlTypeString
    }
  ];

  let parameters: ParametersParameter[];
  if (/^List<.*>$/.test(cqlTypeString) && Array.isArray(result)) {
    if (result.length) {
      const listTypeSpecifier = cqlTypeSpecifier as ListTypeSpecifier;
      parameters = result.map(r => ({
        extension,
        ...toParameter('return', r, listTypeSpecifier.elementType)
      }));
    } else {
      parameters = [{ extension, ...emptyListParameter('return') }];
    }
  } else {
    parameters = [{ extension, ...toParameter('return', result, cqlTypeSpecifier) }];
  }
  return {
    resourceType: 'Parameters',
    parameter: parameters
  };
}

function toParameter(
  name: string,
  result: any | null,
  typeSpecifier?: AnyTypeSpecifier
): ParametersParameter {
  if (result == null) {
    return nullValueParameter(name);
  }

  // If it's an uncertainty, serialize it as a point or Interval
  if (result.isUncertainty) {
    if (result.isPoint()) {
      return toParameter(name, result.low, typeSpecifier);
    } else {
      const ivlResult = new Interval(result.low, result.high, true, true);
      const ivlType = {
        type: 'IntervalTypeSpecifier',
        pointType: typeSpecifier
      } as IntervalTypeSpecifier;
      return toParameter(name, ivlResult, ivlType);
    }
  }

  // Map to FHIR based on https://build.fhir.org/ig/HL7/cql-ig/en/conformance.html#fhir-type-mapping
  // and reverse mappings from https://build.fhir.org/ig/HL7/cql-ig/en/Library-FHIRHelpers.html
  const cqlTypeString = typeToCqlTypeString(typeSpecifier);
  switch (cqlTypeString) {
    case 'System.Any':
      return toAnyParameter(name, result);
    case 'System.Boolean':
      return toBooleanParameter(name, result);
    case 'System.Integer':
      return toIntegerParameter(name, result);
    case 'System.Long':
      return toLongParameter(name, result);
    case 'System.Decimal':
      return toDecimalParameter(name, result);
    case 'System.Date':
      return toDateParameter(name, result);
    case 'System.DateTime':
    case 'System.Time':
      return toDateTimeOrTimeParameter(name, result);
    case 'System.String':
      return toStringParameter(name, result);
    case 'System.Quantity':
      return toQuantityParameter(name, result);
    case 'System.Ratio':
      return toRatioParameter(name, result);
    case 'System.Code':
      return toCodeParameter(name, result);
    case 'System.Concept':
      return toConceptParameter(name, result);
    case cqlTypeString.match(/^List<.+>$/)?.[0]:
      return toNestedListParameter(name, result, typeSpecifier);
    case cqlTypeString.match(/^Interval<System.Date(Time)?>$/)?.[0]:
      return toPeriodParameter(name, result);
    case cqlTypeString.match(/^Interval<System.Quantity>$/)?.[0]:
      // Apparently the intention of the CQL-to-FHIR mappings is to map numeric intervals to Ranges too,
      // but as of early April 2026, the CQL Test Runner fails all tests that map numeric intervals to
      // Ranges, so for now let those cases fall through to Interval-to-Tuple conversion below.
      // case cqlTypeString.match(/^Interval<System.Decimal>$/)?.[0]:
      // case cqlTypeString.match(/^Interval<System.Integer>$/)?.[0]:
      // case cqlTypeString.match(/^Interval<System.Long>$/)?.[0]:
      const isIntegerOrLong = false; // /^Interval<System.(Integer|Long)>$/.test(cqlTypeString);
      return toRangeParameter(name, result, isIntegerOrLong);
    case cqlTypeString.match(/^Interval<.+>$/)?.[0]:
      return toIntervalTupleParameter(name, result, typeSpecifier);
    case cqlTypeString.match(/^Tuple<.+>$/)?.[0]:
      return toTupleParameter(name, result, typeSpecifier);
    case cqlTypeString.match(/^Choice<.+>$/)?.[0]:
      return toChoiceParameter(name, result, typeSpecifier);
  }
  return { name };
}

function toAnyParameter(name: string, result: any): ParametersParameter {
  // Guess the type from the value and try again
  const guessedType = guessSpecifierType(result);
  if (guessedType) {
    return toParameter(name, result, guessedType);
  }
  // Fallback to something that is likely wrong but might be helpful for debugging
  return { name, valueString: JSON.stringify(result) };
}

function toBooleanParameter(name: string, result: boolean): ParametersParameter {
  return { name, valueBoolean: result };
}

function toIntegerParameter(name: string, result: number): ParametersParameter {
  return { name, valueInteger: result };
}

function toLongParameter(name: string, result: number): ParametersParameter {
  // TODO: use valueInteger64 for FHIR R5 and above
  return { name, valueString: String(result) };
}

function toDecimalParameter(name: string, result: number): ParametersParameter {
  // TODO: use the quantity-precision extension to communicate precision of the value
  return { name, valueDecimal: result };
}

function toDateParameter(name: string, result: CqlDate) {
  return { name, valueDate: result.toString() };
}

function toDateTimeOrTimeParameter(name: string, result: CqlDateTime) {
  return setFhirDateTimeWithPrecision(
    { name },
    result.isTime() ? 'valueTime' : 'valueDateTime',
    result
  );
}

function toStringParameter(name: string, result: string): ParametersParameter {
  return { name, valueString: result };
}

function toQuantityParameter(name: string, result: CqlQuantity | number): ParametersParameter {
  return { name, valueQuantity: toFhirQuantity(result) };
}

function toRatioParameter(name: string, result: CqlRatio) {
  return {
    name,
    valueRatio: {
      numerator: toFhirQuantity(result.numerator),
      denominator: toFhirQuantity(result.denominator)
    } as FhirRatio
  };
}

function toCodeParameter(name: string, result: Code): ParametersParameter {
  return { name, valueCoding: toFhirCoding(result) };
}

function toConceptParameter(name: string, result: Concept) {
  const conceptParam = {
    name,
    valueCodeableConcept: { coding: result.codes.map(toFhirCoding) } as CodeableConcept
  };
  if (result.display) {
    conceptParam.valueCodeableConcept.text = result.display;
  }
  return conceptParam;
}

function toNestedListParameter(
  name: string,
  result: any[],
  typeSpecifier: AnyTypeSpecifier | undefined
) {
  let part: ParametersParameter[];
  if (Array.isArray(result) && result.length) {
    part = (result as any[]).map(r =>
      toParameter('element', r, (typeSpecifier as ListTypeSpecifier).elementType)
    );
  } else {
    part = [emptyListParameter('element')];
  }
  return { name, part };
}

function toPeriodParameter(name: string, result: Interval) {
  const periodResult = result.toClosed();
  const periodParam = { name, valuePeriod: {} as Period };
  if (result.low) {
    setFhirDateTimeWithPrecision(periodParam.valuePeriod, 'start', periodResult.low);
  }
  if (result.high) {
    setFhirDateTimeWithPrecision(periodParam.valuePeriod, 'end', periodResult.high);
  }
  return periodParam;
}

function toRangeParameter(name: string, result: Interval, isIntegerOrLong: boolean) {
  const rangeResult = result.toClosed();
  const rangeParam = { name, valueRange: {} as Range };
  if (rangeResult.low) {
    rangeParam.valueRange.low = toFhirQuantity(rangeResult.low, isIntegerOrLong);
  }
  if (rangeResult.high) {
    rangeParam.valueRange.high = toFhirQuantity(rangeResult.high, isIntegerOrLong);
  }
  return rangeParam;
}

function toIntervalTupleParameter(
  name: string,
  result: Interval,
  typeSpecifier: AnyTypeSpecifier | undefined
) {
  const pointType = (typeSpecifier as IntervalTypeSpecifier).pointType;
  return {
    name,
    part: [
      toParameter('low', result.low, pointType),
      toParameter('lowClosed', result.lowClosed ?? true, typeToCqlTypeSpecifier('System.Boolean')),
      toParameter('high', result.high, pointType),
      toParameter('highClosed', result.highClosed ?? true, typeToCqlTypeSpecifier('System.Boolean'))
    ]
  };
}

function toTupleParameter(name: string, result: any, typeSpecifier: AnyTypeSpecifier | undefined) {
  let tupleParam: ParametersParameter;
  const tupleKeys = Object.keys(result);
  if (tupleKeys.length) {
    const tupleTypeSpecifier = typeSpecifier as TupleTypeSpecifier;
    tupleParam = {
      name,
      part: tupleKeys.map(key => {
        const elementTypeSpecifier = tupleTypeSpecifier.element?.find(
          e => e.name === key
        )?.elementType;
        return toParameter(key, result[key], elementTypeSpecifier);
      })
    };
  } else {
    tupleParam = emptyTupleParameter(name);
  }
  return tupleParam;
}

function toChoiceParameter(name: string, result: any, typeSpecifier: AnyTypeSpecifier | undefined) {
  logger.error('CHOICETYPE NOT SUPPORTED', typeToCqlTypeString(typeSpecifier));
  return { name };
}

function toFhirQuantity(val: CqlQuantity | number, isIntegerOrLong = false): FhirQuantity {
  let fq: FhirQuantity;
  if (typeof val === 'number') {
    fq = { value: val };
  } else if (typeof val === 'bigint') {
    fq = { value: Number(val) };
  } else {
    const cq = val as CqlQuantity;
    fq = { value: cq.value } as FhirQuantity;
    if (cq.unit != null) {
      fq.unit = fq.code = cq.unit;
      if (
        ['millisecond', 'second', 'minute', 'hour', 'day', 'week', 'month', 'year'].includes(
          cq.unit
        )
      ) {
        fq.system = 'http://hl7.org/fhirpath/CodeSystem/calendar-units';
      } else {
        fq.system = 'http://unitsofmeasure.org';
      }
    }
  }
  if (isIntegerOrLong) {
    // @ts-expect-error R4 Quantity type should allow _value for setting id and extension on decimal value
    fq._value = {
      extension: [
        { url: 'http://hl7.org/fhir/StructureDefinition/quantity-precision', valueInteger: 0 }
      ]
    };
  }

  return fq;
}

function toFhirCoding(cc: Code): Coding {
  const fc = { code: cc.code } as Coding;
  if (cc.system) {
    fc.system = cc.system;
  }
  if (cc.version) {
    fc.version = cc.version;
  }
  if (cc.display) {
    fc.display = cc.display;
  }
  return fc;
}

function setFhirDateTimeWithPrecision<T>(
  container: T,
  elementName: string,
  dateTime: CqlDateTime
): T {
  if (dateTime.hour != null && dateTime.second == null) {
    // FHIR dateTime/time requires minutes and seconds if hours are present
    const fullDT = dateTime.copy();
    if (dateTime.minute == null) {
      fullDT.minute = 0;
    }
    if (dateTime.second == null) {
      fullDT.second = 0;
    }
    (container as any)[elementName] = fullDT.toString();
  } else {
    (container as any)[elementName] = dateTime.toString();
  }

  const precision = dateTime.getPrecision() as keyof typeof CQL_TO_UCUM_PRECISION;
  if (precision) {
    (container as any)[`_${elementName}` as keyof ParametersParameter] = {
      extension: [
        {
          url: 'http://hl7.org/fhir/StructureDefinition/time-precision',
          valueCode: CQL_TO_UCUM_PRECISION[precision]
        }
      ]
    } as Element;
  }

  return container;
}
