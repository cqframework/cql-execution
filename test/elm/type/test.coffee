should = require 'should'
setup = require '../../setup'
data = require './data'
{ p1 } = require './patients'
vsets = require './valuesets'
{ PatientSource } = require '../../../lib/cql-patient'

describe 'Is', ->
  @beforeEach ->
    setup @, data, [], vsets
    @ctx.patient =  new PatientSource([ p1 ]).currentPatient()

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

  it 'should be able to tell if type is Code', ->
    @isTrueCode.exec(@ctx).should.be.true()

  it 'should be able to tell if type is not Code', ->
    @isFalseCode.exec(@ctx).should.be.false()

  it 'should be able to tell if type is Concept', ->
    @isTrueConcept.exec(@ctx).should.be.true()

  it 'should be able to tell if type is not Concept', ->
    @isFalseConcept.exec(@ctx).should.be.false()

  it 'should be able to tell if type is Boolean at runtime', ->
    @isTrueRuntimeBoolean.exec(@ctx).should.be.true()

  it 'should be able to tell if type is not Boolean at runtime', ->
    @isFalseRuntimeBoolean.exec(@ctx).should.be.false()

  it 'should be able to tell if type is Decimal at runtime', ->
    @isTrueRuntimeDecimal.exec(@ctx).should.be.true()

  it 'should be able to tell if type is not Decimal at runtime', ->
    @isFalseRuntimeDecimal.exec(@ctx).should.be.false()

  it 'should be able to tell if type is Integer at runtime', ->
    @isTrueRuntimeInteger.exec(@ctx).should.be.true()

  it 'should be able to tell if type is not Integer at runtime', ->
    @isFalseRuntimeInteger.exec(@ctx).should.be.false()

  it 'should be able to tell if type is String at runtime', ->
    @isTrueRuntimeString.exec(@ctx).should.be.true()

  it 'should be able to tell if type is not String at runtime', ->
    @isFalseRuntimeString.exec(@ctx).should.be.false()

  it 'should be able to tell if type is Code at runtime', ->
    @isTrueRuntimeCode.exec(@ctx).should.be.true()

  it 'should be able to tell if type is not Code at runtime', ->
    @isFalseRuntimeCode.exec(@ctx).should.be.false()

  it 'should be able to tell if type is Concept at runtime', ->
    @isTrueRuntimeConcept.exec(@ctx).should.be.true()

  it 'should be able to tell if type is not Concept at runtime', ->
    @isFalseRuntimeConcept.exec(@ctx).should.be.false()

  it 'should be able to tell if type is ValueSet at runtime', ->
    @isTrueRuntimeValueSet.exec(@ctx).should.be.true()

  it 'should be able to tell if type is not ValueSet at runtime', ->
    @isFalseRuntimeValueSet.exec(@ctx).should.be.false()

  it 'should be able to tell if type is Quantity at runtime', ->
    @isTrueRuntimeQuantity.exec(@ctx).should.be.true()

  it 'should be able to tell if type is not Quantity at runtime', ->
    @isFalseRuntimeQuantity.exec(@ctx).should.be.false()

  it 'should be able to tell if type is DateTime at runtime', ->
    @isTrueRuntimeDateTime.exec(@ctx).should.be.true()

  it 'should be able to tell if type is not DateTime at runtime', ->
    @isFalseRuntimeDateTime.exec(@ctx).should.be.false()

  it 'should be able to tell if type is Date at runtime', ->
    @isTrueRuntimeDate.exec(@ctx).should.be.true()

  it 'should be able to tell if type is not Date at runtime', ->
    @isFalseRuntimeDate.exec(@ctx).should.be.false()

  it 'should be able to tell if type is Time at runtime', ->
    @isTrueRuntimeTime.exec(@ctx).should.be.true()

  it 'should be able to tell if type is not Time at runtime', ->
    @isFalseRuntimeTime.exec(@ctx).should.be.false()