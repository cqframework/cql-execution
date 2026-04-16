import { describe, it, expect, vi, MockInstance } from 'vitest';
import { toParameters } from '@src/convert/convert';
import {
  ChoiceTypeSpecifier,
  Code,
  Concept,
  Date as CqlDate,
  DateTime,
  Interval,
  IntervalTypeSpecifier,
  ListTypeSpecifier,
  Quantity,
  Ratio,
  TupleTypeSpecifier
} from '../../..';
import { Uncertainty } from '../../../lib/datatypes/uncertainty';
import logger from '@src/logger';

function cqlTypeExt(type: string) {
  return [{ url: 'http://hl7.org/fhir/StructureDefinition/cqf-cqlType', valueString: type }];
}

function timePrecisionExt(code: string) {
  return {
    extension: [{ url: 'http://hl7.org/fhir/StructureDefinition/time-precision', valueCode: code }]
  };
}

describe('convert.toParameters', () => {
  let logErrorSpy: MockInstance<typeof logger.error>;

  beforeEach(() => {
    logErrorSpy = vi.spyOn(logger, 'error').mockImplementation(() => {});
  });

  describe('primitives', () => {
    it('converts boolean to valueBoolean', () => {
      expect(toParameters(true, 'System.Boolean')).toEqual({
        resourceType: 'Parameters',
        parameter: [{ extension: cqlTypeExt('System.Boolean'), name: 'return', valueBoolean: true }]
      });
    });

    it('converts integer to valueInteger', () => {
      expect(toParameters(42, 'System.Integer')).toEqual({
        resourceType: 'Parameters',
        parameter: [{ extension: cqlTypeExt('System.Integer'), name: 'return', valueInteger: 42 }]
      });
    });

    it('converts long to valueString (R4)', () => {
      expect(toParameters(1234567890123, 'System.Long')).toEqual({
        resourceType: 'Parameters',
        parameter: [
          { extension: cqlTypeExt('System.Long'), name: 'return', valueString: '1234567890123' }
        ]
      });
    });

    it('converts decimal to valueDecimal', () => {
      expect(toParameters(3.14159, 'System.Decimal')).toEqual({
        resourceType: 'Parameters',
        parameter: [
          { extension: cqlTypeExt('System.Decimal'), name: 'return', valueDecimal: 3.14159 }
        ]
      });
    });

    it('converts string to valueString', () => {
      expect(toParameters('hello world', 'System.String')).toEqual({
        resourceType: 'Parameters',
        parameter: [
          { extension: cqlTypeExt('System.String'), name: 'return', valueString: 'hello world' }
        ]
      });
    });
  });

  describe('Date / DateTime / Time', () => {
    it('converts date to valueDate', () => {
      const date = new CqlDate(2025, 1, 1);
      expect(toParameters(date, 'System.Date')).toEqual({
        resourceType: 'Parameters',
        parameter: [
          { extension: cqlTypeExt('System.Date'), name: 'return', valueDate: '2025-01-01' }
        ]
      });
    });

    it('converts datetime (hour precision) to valueDateTime with precision extension', () => {
      const dt = new DateTime(2025, 1, 1, 13);
      expect(toParameters(dt, 'System.DateTime')).toEqual({
        resourceType: 'Parameters',
        parameter: [
          {
            extension: cqlTypeExt('System.DateTime'),
            name: 'return',
            valueDateTime: expect.stringMatching(/2025-01-01T13:00:00([+-]\d\d:\d\d|Z)/),
            _valueDateTime: timePrecisionExt('h')
          }
        ]
      });
    });

    it('converts datetime (minute precision) to valueDateTime with precision extension', () => {
      const dt = new DateTime(2025, 1, 1, 13, 27);
      expect(toParameters(dt, 'System.DateTime')).toEqual({
        resourceType: 'Parameters',
        parameter: [
          {
            extension: cqlTypeExt('System.DateTime'),
            name: 'return',
            valueDateTime: expect.stringMatching(/2025-01-01T13:27:00([+-]\d\d:\d\d|Z)/),
            _valueDateTime: timePrecisionExt('min')
          }
        ]
      });
    });

    it('converts datetime (second precision) to valueDateTime with precision extension', () => {
      const dt = new DateTime(2025, 1, 1, 13, 27, 45);
      expect(toParameters(dt, 'System.DateTime')).toEqual({
        resourceType: 'Parameters',
        parameter: [
          {
            extension: cqlTypeExt('System.DateTime'),
            name: 'return',
            valueDateTime: expect.stringMatching(/2025-01-01T13:27:45([+-]\d\d:\d\d|Z)/),
            _valueDateTime: timePrecisionExt('s')
          }
        ]
      });
    });

    it('converts datetime (millisecond precision) to valueDateTime with precision extension', () => {
      const dt = new DateTime(2025, 1, 1, 13, 27, 45, 123);
      expect(toParameters(dt, 'System.DateTime')).toEqual({
        resourceType: 'Parameters',
        parameter: [
          {
            extension: cqlTypeExt('System.DateTime'),
            name: 'return',
            valueDateTime: expect.stringMatching(/2025-01-01T13:27:45.123([+-]\d\d:\d\d|Z)/),
            _valueDateTime: timePrecisionExt('ms')
          }
        ]
      });
    });

    it('converts time to valueTime with precision extension', () => {
      const time = new DateTime(2025, 1, 1, 8, 30).getTime();
      expect(toParameters(time, 'System.Time')).toEqual({
        resourceType: 'Parameters',
        parameter: [
          {
            extension: cqlTypeExt('System.Time'),
            name: 'return',
            valueTime: '08:30:00',
            _valueTime: timePrecisionExt('min')
          }
        ]
      });
    });

    it('converts time (second precision) to valueTime with precision extension', () => {
      const time = new DateTime(2025, 1, 1, 8, 30, 45).getTime();
      expect(toParameters(time, 'System.Time')).toEqual({
        resourceType: 'Parameters',
        parameter: [
          {
            extension: cqlTypeExt('System.Time'),
            name: 'return',
            valueTime: '08:30:45',
            _valueTime: timePrecisionExt('s')
          }
        ]
      });
    });

    it('converts time (millisecond precision) to valueTime with precision extension', () => {
      const time = new DateTime(2025, 1, 1, 8, 30, 45, 123).getTime();
      expect(toParameters(time, 'System.Time')).toEqual({
        resourceType: 'Parameters',
        parameter: [
          {
            extension: cqlTypeExt('System.Time'),
            name: 'return',
            valueTime: '08:30:45.123',
            _valueTime: timePrecisionExt('ms')
          }
        ]
      });
    });
  });

  describe('Quantity / Ratio', () => {
    it('converts CQL Quantity with UCUM to valueQuantity (length unit)', () => {
      const q = new Quantity(1.5, 'cm');
      expect(toParameters(q, 'System.Quantity')).toEqual({
        resourceType: 'Parameters',
        parameter: [
          {
            extension: cqlTypeExt('System.Quantity'),
            name: 'return',
            valueQuantity: {
              value: 1.5,
              unit: 'cm',
              code: 'cm',
              system: 'http://unitsofmeasure.org'
            }
          }
        ]
      });
    });

    it('converts CQL Quantity with calendar unit to valueQuantity (calendar-units system)', () => {
      const q = new Quantity(2, 'day');
      expect(toParameters(q, 'System.Quantity')).toEqual({
        resourceType: 'Parameters',
        parameter: [
          {
            extension: cqlTypeExt('System.Quantity'),
            name: 'return',
            valueQuantity: {
              value: 2,
              unit: 'day',
              code: 'day',
              system: 'http://hl7.org/fhirpath/CodeSystem/calendar-units'
            }
          }
        ]
      });
    });

    it('converts ratio to valueRatio with numerator/denominator quantities', () => {
      const r = new Ratio(new Quantity(1, 'mg'), new Quantity(2, 'mL'));
      expect(toParameters(r, 'System.Ratio')).toEqual({
        resourceType: 'Parameters',
        parameter: [
          {
            extension: cqlTypeExt('System.Ratio'),
            name: 'return',
            valueRatio: {
              numerator: { value: 1, unit: 'mg', code: 'mg', system: 'http://unitsofmeasure.org' },
              denominator: { value: 2, unit: 'mL', code: 'mL', system: 'http://unitsofmeasure.org' }
            }
          }
        ]
      });
    });
  });

  describe('Code / Concept', () => {
    it('converts code to valueCoding (system/version/display)', () => {
      const code = new Code('8480-6', 'http://loinc.org', '2.67', 'Systolic blood pressure');
      expect(toParameters(code, 'System.Code')).toEqual({
        resourceType: 'Parameters',
        parameter: [
          {
            extension: cqlTypeExt('System.Code'),
            name: 'return',
            valueCoding: {
              code: '8480-6',
              system: 'http://loinc.org',
              version: '2.67',
              display: 'Systolic blood pressure'
            }
          }
        ]
      });
    });

    it('converts concept to valueCodeableConcept (multiple codings and text)', () => {
      const concept = new Concept(
        [new Code('8480-6', 'http://loinc.org'), new Code('1234-5', 'http://loinc.org')],
        'Blood Pressure'
      );
      expect(toParameters(concept, 'System.Concept')).toEqual({
        resourceType: 'Parameters',
        parameter: [
          {
            extension: cqlTypeExt('System.Concept'),
            name: 'return',
            valueCodeableConcept: {
              coding: [
                { code: '8480-6', system: 'http://loinc.org' },
                { code: '1234-5', system: 'http://loinc.org' }
              ],
              text: 'Blood Pressure'
            }
          }
        ]
      });
    });
  });

  describe('List', () => {
    it('converts non-empty List<Integer> to multiple return parameters', () => {
      const typeSpec = {
        type: 'ListTypeSpecifier',
        elementType: { type: 'NamedTypeSpecifier', name: '{urn:hl7-org:elm-types:r1}Integer' }
      } as ListTypeSpecifier;
      expect(toParameters([1, 2, 3], typeSpec)).toEqual({
        resourceType: 'Parameters',
        parameter: [
          { extension: cqlTypeExt('List<System.Integer>'), name: 'return', valueInteger: 1 },
          { extension: cqlTypeExt('List<System.Integer>'), name: 'return', valueInteger: 2 },
          { extension: cqlTypeExt('List<System.Integer>'), name: 'return', valueInteger: 3 }
        ]
      });
    });

    it('converts List<List<String>> using nested list parts', () => {
      const typeSpec = {
        type: 'ListTypeSpecifier',
        elementType: {
          type: 'ListTypeSpecifier',
          elementType: { type: 'NamedTypeSpecifier', name: '{urn:hl7-org:elm-types:r1}String' }
        }
      } as ListTypeSpecifier;
      expect(toParameters([['a', 'b'], []], typeSpec)).toEqual({
        resourceType: 'Parameters',
        parameter: [
          {
            extension: cqlTypeExt('List<List<System.String>>'),
            name: 'return',
            part: [
              { name: 'element', valueString: 'a' },
              { name: 'element', valueString: 'b' }
            ]
          },
          {
            extension: cqlTypeExt('List<List<System.String>>'),
            name: 'return',
            part: [
              {
                name: 'element',
                _valueBoolean: {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/StructureDefinition/cqf-isEmptyList',
                      valueBoolean: true
                    }
                  ]
                }
              }
            ]
          }
        ]
      });
    });

    it('converts empty List<String> to emptyList parameter', () => {
      const typeSpec = {
        type: 'ListTypeSpecifier',
        elementType: { type: 'NamedTypeSpecifier', name: '{urn:hl7-org:elm-types:r1}String' }
      } as ListTypeSpecifier;
      expect(toParameters([], typeSpec)).toEqual({
        resourceType: 'Parameters',
        parameter: [
          {
            extension: cqlTypeExt('List<System.String>'),
            name: 'return',
            _valueBoolean: {
              extension: [
                {
                  url: 'http://hl7.org/fhir/StructureDefinition/cqf-isEmptyList',
                  valueBoolean: true
                }
              ]
            }
          }
        ]
      });
    });
  });

  describe('Interval', () => {
    it('maps Interval<Date> to Period with start/end', () => {
      const typeSpec = {
        type: 'IntervalTypeSpecifier',
        pointType: { type: 'NamedTypeSpecifier', name: '{urn:hl7-org:elm-types:r1}Date' }
      } as IntervalTypeSpecifier;
      expect(
        toParameters(new Interval(new CqlDate(2025, 1, 1), new CqlDate(2025, 1, 31)), typeSpec)
      ).toEqual({
        resourceType: 'Parameters',
        parameter: [
          {
            extension: cqlTypeExt('Interval<System.Date>'),
            name: 'return',
            valuePeriod: {
              start: '2025-01-01',
              _start: timePrecisionExt('d'),
              end: '2025-01-31',
              _end: timePrecisionExt('d')
            }
          }
        ]
      });
    });

    it('maps Interval<Date> with open boundary to Period with start/end', () => {
      const typeSpec = {
        type: 'IntervalTypeSpecifier',
        pointType: { type: 'NamedTypeSpecifier', name: '{urn:hl7-org:elm-types:r1}Date' }
      } as IntervalTypeSpecifier;
      expect(
        toParameters(
          new Interval(new CqlDate(2025, 1, 1), new CqlDate(2025, 1, 31), true, false),
          typeSpec
        )
      ).toEqual({
        resourceType: 'Parameters',
        parameter: [
          {
            extension: cqlTypeExt('Interval<System.Date>'),
            name: 'return',
            valuePeriod: {
              start: '2025-01-01',
              _start: timePrecisionExt('d'),
              end: '2025-01-30',
              _end: timePrecisionExt('d')
            }
          }
        ]
      });
    });

    it('maps Interval<DateTime> to Period with start/end and precision extensions', () => {
      const typeSpec = {
        type: 'IntervalTypeSpecifier',
        pointType: { type: 'NamedTypeSpecifier', name: '{urn:hl7-org:elm-types:r1}DateTime' }
      } as IntervalTypeSpecifier;
      const low = new DateTime(2025, 1, 1, 9);
      const high = new DateTime(2025, 1, 2);
      expect(toParameters(new Interval(low, high), typeSpec)).toEqual({
        resourceType: 'Parameters',
        parameter: [
          {
            extension: cqlTypeExt('Interval<System.DateTime>'),
            name: 'return',
            valuePeriod: {
              start: expect.stringMatching(/2025-01-01T09:00:00([+-]\d\d:\d\d|Z)/),
              _start: timePrecisionExt('h'),
              end: '2025-01-02',
              _end: timePrecisionExt('d')
            }
          }
        ]
      });
    });

    it('maps Interval<DateTime> with open boundary to Period with start/end and precision extensions', () => {
      const typeSpec = {
        type: 'IntervalTypeSpecifier',
        pointType: { type: 'NamedTypeSpecifier', name: '{urn:hl7-org:elm-types:r1}DateTime' }
      } as IntervalTypeSpecifier;
      const low = new DateTime(2025, 1, 1, 9);
      const high = new DateTime(2025, 1, 2);
      expect(toParameters(new Interval(low, high, false, true), typeSpec)).toEqual({
        resourceType: 'Parameters',
        parameter: [
          {
            extension: cqlTypeExt('Interval<System.DateTime>'),
            name: 'return',
            valuePeriod: {
              start: expect.stringMatching(/2025-01-01T10:00:00([+-]\d\d:\d\d|Z)/),
              _start: timePrecisionExt('h'),
              end: '2025-01-02',
              _end: timePrecisionExt('d')
            }
          }
        ]
      });
    });

    it('maps Interval<DateTime> with missing high boundary to Period with no end', () => {
      const typeSpec = {
        type: 'IntervalTypeSpecifier',
        pointType: { type: 'NamedTypeSpecifier', name: '{urn:hl7-org:elm-types:r1}DateTime' }
      } as IntervalTypeSpecifier;
      const low = new DateTime(2025, 1, 1, 9);
      expect(toParameters(new Interval(low, null), typeSpec)).toEqual({
        resourceType: 'Parameters',
        parameter: [
          {
            extension: cqlTypeExt('Interval<System.DateTime>'),
            name: 'return',
            valuePeriod: {
              start: expect.stringMatching(/2025-01-01T09:00:00([+-]\d\d:\d\d|Z)/),
              _start: timePrecisionExt('h')
            }
          }
        ]
      });
    });

    it('maps Interval<DateTime> with missing low boundary to Period without start', () => {
      const typeSpec = {
        type: 'IntervalTypeSpecifier',
        pointType: { type: 'NamedTypeSpecifier', name: '{urn:hl7-org:elm-types:r1}DateTime' }
      } as IntervalTypeSpecifier;
      const high = new DateTime(2025, 1, 2);
      expect(toParameters(new Interval(null, high), typeSpec)).toEqual({
        resourceType: 'Parameters',
        parameter: [
          {
            extension: cqlTypeExt('Interval<System.DateTime>'),
            name: 'return',
            valuePeriod: {
              end: '2025-01-02',
              _end: timePrecisionExt('d')
            }
          }
        ]
      });
    });

    it('maps Interval<Quantity> to Range with low/high quantities', () => {
      const typeSpec = {
        type: 'IntervalTypeSpecifier',
        pointType: { type: 'NamedTypeSpecifier', name: '{urn:hl7-org:elm-types:r1}Quantity' }
      } as IntervalTypeSpecifier;
      const low = new Quantity(120, 'mm[Hg]');
      const high = new Quantity(140, 'mm[Hg]');
      expect(toParameters(new Interval(low, high), typeSpec)).toEqual({
        resourceType: 'Parameters',
        parameter: [
          {
            extension: cqlTypeExt('Interval<System.Quantity>'),
            name: 'return',
            valueRange: {
              low: {
                value: 120,
                unit: 'mm[Hg]',
                code: 'mm[Hg]',
                system: 'http://unitsofmeasure.org'
              },
              high: {
                value: 140,
                unit: 'mm[Hg]',
                code: 'mm[Hg]',
                system: 'http://unitsofmeasure.org'
              }
            }
          }
        ]
      });
    });

    it('maps Interval<Integer> to tuple parts (low/lowClosed/high/highClosed)', () => {
      const typeSpec = {
        type: 'IntervalTypeSpecifier',
        pointType: { type: 'NamedTypeSpecifier', name: '{urn:hl7-org:elm-types:r1}Integer' }
      } as IntervalTypeSpecifier;
      expect(toParameters(new Interval(1, 5, false, true), typeSpec)).toEqual({
        resourceType: 'Parameters',
        parameter: [
          {
            extension: cqlTypeExt('Interval<System.Integer>'),
            name: 'return',
            part: [
              { name: 'low', valueInteger: 1 },
              { name: 'lowClosed', valueBoolean: false },
              { name: 'high', valueInteger: 5 },
              { name: 'highClosed', valueBoolean: true }
            ]
          }
        ]
      });
    });
  });

  describe('Tuple', () => {
    it('converts non-empty Tuple<a Integer, b String> to parts', () => {
      const typeSpec = {
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
      expect(toParameters({ a: 10, b: 'x' }, typeSpec)).toEqual({
        resourceType: 'Parameters',
        parameter: [
          {
            extension: cqlTypeExt('Tuple<a System.Integer, b System.String>'),
            name: 'return',
            part: [
              { name: 'a', valueInteger: 10 },
              { name: 'b', valueString: 'x' }
            ]
          }
        ]
      });
    });

    it('converts empty object to emptyTuple parameter', () => {
      const typeSpec = {
        type: 'TupleTypeSpecifier',
        element: [
          {
            name: 'a',
            elementType: { type: 'NamedTypeSpecifier', name: '{urn:hl7-org:elm-types:r1}Integer' }
          }
        ]
      } as TupleTypeSpecifier;
      expect(toParameters({}, typeSpec)).toEqual({
        resourceType: 'Parameters',
        parameter: [
          {
            extension: cqlTypeExt('Tuple<a System.Integer>'),
            name: 'return',
            _valueBoolean: {
              extension: [
                {
                  url: 'http://hl7.org/fhir/StructureDefinition/cqf-isEmptyTuple',
                  valueBoolean: true
                }
              ]
            }
          }
        ]
      });
    });
  });

  describe('Any / Choice / Missing Types', () => {
    it('guesses type for System.Any and converts value (Code example)', () => {
      expect(toParameters(new Code('123', 'http://example.org'), 'System.Any')).toEqual({
        resourceType: 'Parameters',
        parameter: [
          {
            extension: cqlTypeExt('System.Any'),
            name: 'return',
            valueCoding: { code: '123', system: 'http://example.org' }
          }
        ]
      });
    });

    it('returns name-only parameter for unsupported Choice Type', () => {
      const typeSpec = {
        type: 'ChoiceTypeSpecifier',
        choice: [
          { type: 'NamedTypeSpecifier', name: '{urn:hl7-org:elm-types:r1}String' },
          { type: 'NamedTypeSpecifier', name: '{urn:hl7-org:elm-types:r1}Integer' }
        ]
      } as ChoiceTypeSpecifier;
      expect(toParameters('foo', typeSpec)).toEqual({
        resourceType: 'Parameters',
        parameter: [
          {
            extension: cqlTypeExt('Choice<System.String, System.Integer>'),
            name: 'return'
          }
        ]
      });
      expect(logErrorSpy).toHaveBeenCalledWith(
        'CHOICETYPE NOT SUPPORTED',
        'Choice<System.String, System.Integer>'
      );
    });

    it('guesses type when no type is passed in and converts value (Decimal example)', () => {
      expect(toParameters(1.25)).toEqual({
        resourceType: 'Parameters',
        parameter: [
          {
            extension: cqlTypeExt('System.Decimal'),
            name: 'return',
            valueDecimal: 1.25
          }
        ]
      });
    });
  });

  describe('Uncertainty', () => {
    it('collapses uncertainty with equal low/high to point value', () => {
      const u = new Uncertainty(2.5, 2.5);
      expect(toParameters(u, 'System.Decimal')).toEqual({
        resourceType: 'Parameters',
        parameter: [{ extension: cqlTypeExt('System.Decimal'), name: 'return', valueDecimal: 2.5 }]
      });
    });

    it('maps uncertainty with unequal low/high to an Interval tuple', () => {
      const u = new Uncertainty(1, 5);
      expect(toParameters(u, 'System.Integer')).toEqual({
        resourceType: 'Parameters',
        parameter: [
          {
            extension: cqlTypeExt('System.Integer'),
            name: 'return',
            part: [
              { name: 'low', valueInteger: 1 },
              { name: 'lowClosed', valueBoolean: true },
              { name: 'high', valueInteger: 5 },
              { name: 'highClosed', valueBoolean: true }
            ]
          }
        ]
      });
    });
  });

  describe('Null', () => {
    it('converts null result to null boolean parameter with data-absent-reason extension', () => {
      expect(toParameters(null, 'System.String')).toEqual({
        resourceType: 'Parameters',
        parameter: [
          {
            extension: cqlTypeExt('System.String'),
            name: 'return',
            _valueBoolean: {
              extension: [
                {
                  url: 'http://hl7.org/fhir/StructureDefinition/data-absent-reason',
                  valueCode: 'unknown'
                }
              ]
            }
          }
        ]
      });
    });
  });
});
