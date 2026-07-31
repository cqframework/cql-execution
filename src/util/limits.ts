// Keep primitive limits and temporal limit literals dependency-free so datatype and utility
// modules can safely share them without introducing circular module initialization.
export const MAX_INT_VALUE = Math.pow(2, 31) - 1; // 2147483647
export const MIN_INT_VALUE = Math.pow(-2, 31); // -2147483648
export const MAX_LONG_VALUE = 9223372036854775807n;
export const MIN_LONG_VALUE = -9223372036854775808n;
export const MAX_FLOAT_VALUE = 99999999999999999999.99999999;
export const MIN_FLOAT_VALUE = -99999999999999999999.99999999;
export const MIN_FLOAT_PRECISION_VALUE = Math.pow(10, -8);

// The constructed min/max Date/DateTime/Time are exported from src/datatypes/datetime.ts
export const MIN_DATETIME_VALUE_STRING = '0001-01-01T00:00:00.000';
export const MAX_DATETIME_VALUE_STRING = '9999-12-31T23:59:59.999';
export const MIN_DATE_VALUE_STRING = '0001-01-01';
export const MAX_DATE_VALUE_STRING = '9999-12-31';
export const MIN_TIME_VALUE_STRING = '0000-01-01T00:00:00.000';
export const MAX_TIME_VALUE_STRING = '0000-01-01T23:59:59.999';
