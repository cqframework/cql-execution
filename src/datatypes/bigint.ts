// By default, BigInt throws a TypeError if you attempt to JSON.stringify it.
// You can avoid the TypeError by defining a `toJSON()` function for BigInt.
// We will use the same serialization approach as FHIR uses for integer64: a string.
// See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt#use_within_json
// See: https://hl7.org/fhir/R5/json.html#primitive

declare global {
  interface BigInt {
    toJSON?(): unknown;
  }
}

if (BigInt.prototype.toJSON === undefined) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
}
