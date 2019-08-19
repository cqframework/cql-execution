
should = require 'should'
setup = require '../../setup'
data = require './data'

describe 'Is', ->
  @beforeEach ->
    setup @, data

  it 'should be able to tell if type is Integer', ->
    @isTrueInteger.exec(@ctx).should.be.true()

  it 'should be able to tell if type is not Integer', ->
    @isFalseInteger.exec(@ctx).should.be.false()