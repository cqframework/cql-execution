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

  it 'should be able to tell if type is Decimal', ->
    @isTrueDecimal.exec(@ctx).should.be.true()

  it 'should be able to tell if type is not Decimal', ->
    @isFalseDecimal.exec(@ctx).should.be.false()

  it 'should be able to tell if type is String', ->
    @isTrueString.exec(@ctx).should.be.true()

  it 'should be able to tell if type is not String', ->
    @isFalseString.exec(@ctx).should.be.false()

  it 'should be able to tell if type is DateTime', ->
    @isTrueDateTime.exec(@ctx).should.be.true()

  it 'should be able to tell if type is not DateTime', ->
    @isFalseDateTime.exec(@ctx).should.be.false()

  it 'should be able to tell if type is Date', ->
    @isTrueDate.exec(@ctx).should.be.true()

  it 'should be able to tell if type is not Date', ->
    @isFalseDate.exec(@ctx).should.be.false()

  it 'should be able to tell if type is Time', ->
    @isTrueTime.exec(@ctx).should.be.true()

  it 'should be able to tell if type is not Time', ->
    @isFalseTime.exec(@ctx).should.be.false()

  it 'should be able to tell if type is Quantity', ->
    @isTrueQuantity.exec(@ctx).should.be.true()

  it 'should be able to tell if type is not Quantity', ->
    @isFalseQuantity.exec(@ctx).should.be.false()

  it 'should be able to tell if type is Boolean', ->
    @isTrueBoolean.exec(@ctx).should.be.true()

  it 'should be able to tell if type is not Boolean', ->
    @isFalseBoolean.exec(@ctx).should.be.false()
