import '../../src/datatypes/bigint';

describe('BigInt', () => {
  it('should serialize bigint values to a string', () => {
    const big = { big: 1234567890123456789n };
    JSON.stringify(big).should.eql('{"big":"1234567890123456789"}');
  });
});
