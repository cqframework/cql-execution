/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const should = require('should');
const setup = require('../../setup');
const data = require('./data');


const { p1, p2 } = require('./patients');

describe('Age', function() {
  this.beforeEach(function() {
    setup(this, data, [ p1, p2 ]);
    return this.results = this.executor.withLibrary(this.lib).exec(this.patientSource);
  });

  it('should have correct patient results', function() {
    this.results.patientResults['1'].Age.should.equal(32);
    return this.results.patientResults['2'].Age.should.equal(5);
  });

  xit('should have the correct unfiltered results', function() {
    // Broken with 1.4.5-SNAPSHOT
    return this.results.unfilteredResults.AgeSum.should.equal(37);
  });

  return xit('should be able to reference other unfiltered context expressions', function() {
    return this.results.unfilteredResults.AgeSumRef.should.equal(37);
  });
});
