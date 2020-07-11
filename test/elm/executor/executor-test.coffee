should = require 'should'
setup = require '../../setup'
data = require './data'


{ p1, p2 } = require './patients'

describe 'Age', ->
  @beforeEach ->
    setup @, data, [ p1, p2 ]
    @results = @executor.withLibrary(@lib).exec(@patientSource)

  it 'should have correct patient results', ->
    @results.patientResults['1'].Age.should.equal 32
    @results.patientResults['2'].Age.should.equal 5

  xit 'should have the correct unfiltered results', ->
    # Broken with 1.4.5-SNAPSHOT
    @results.unfilteredResults.AgeSum.should.equal 37

  xit 'should be able to reference other unfiltered context expressions', ->
    @results.unfilteredResults.AgeSumRef.should.equal 37
