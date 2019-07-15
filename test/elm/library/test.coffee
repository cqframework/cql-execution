should = require 'should'
setup = require '../../setup'
data = require './data'
{equivalent}= require '../../../lib/util/comparison'
{Repository, Code} = require '../../../lib/cql'

{ p1, p2 } = require './patients'

describe 'In Age Demographic', ->
  @beforeEach ->
    setup @, data, [ p1, p2 ]
    @results = @executor.withLibrary(@lib).exec_patient_context(@patientSource)

  it 'should have correct patient results', ->
    @results.patientResults['1'].InDemographic.should.equal false
    @results.patientResults['2'].InDemographic.should.equal true

  it 'should have empty unfiltered results', ->
    @results.unfilteredResults.should.be.empty()

describe 'Using CommonLib', ->
  @beforeEach ->
    setup @, data, [ p1, p2 ], {}, {}, new Repository(data)

  it "should have using models defined", ->
    @lib.usings.should.not.be.empty()
    @lib.usings.length.should.equal 1
    @lib.usings[0].name.should.equal "QUICK"

  it 'Should have included a library', ->
    @lib.includes.should.not.be.empty()

  it "should be able to execute expression from included library", ->
    @results = @executor.withLibrary(@lib).exec_patient_context(@patientSource)
    @results.patientResults['1'].ID.should.equal false
    @results.patientResults['2'].ID.should.equal true
    @results.patientResults['2'].FuncTest.should.equal 7
    @results.patientResults['1'].FuncTest.should.equal 7

  it "should find the code defined in the included library", ->
    should.exist(@supportLibCode.exec(@ctx))
    equivalent(@supportLibCode.exec(@ctx), new Code('428371000124100', '2.16.840.1.113883.6.96', 'foo', 'directReferenceCode')).should.be.true()

describe 'Using CommonLib2', ->
  @beforeEach ->
    setup @, data, [], {}, {}, new Repository(data)

  it "should execute expression from included library that uses parameter", ->
    @exprUsesParam.exec(@ctx).should.equal 17

  it "should execute expression from included library that uses sent-in parameter", ->
    @exprUsesParam.exec(@ctx.withParameters({SomeNumber: 42})).should.equal 42

  it "should execute parameter from included library", ->
    @exprUsesParamDirectly.exec(@ctx).should.equal 17

  it "should execute sent-in parameter from included library", ->
    @exprUsesParamDirectly.exec(@ctx.withParameters({SomeNumber: 73})).should.equal 73

  it "should execute function from included library that uses parameter", ->
    @funcUsesParam.exec(@ctx).should.equal 22

  it "should execute expression from included library that calls function", ->
    @exprCallsFunc.exec(@ctx).should.equal 6

  it "should execute function from included library that calls function", ->
    @funcCallsFunc.exec(@ctx).should.equal 25

  it "should execute expression from included library that uses expression", ->
    @exprUsesExpr.exec(@ctx).should.equal 3

  it "should execute function from included library that uses expression", ->
    @funcUsesExpr.exec(@ctx).should.equal 7

  it "should execute function from included library that uses expression", ->
    @exprSortsOnFunc.exec(@ctx).should.eql [{N: 1}, {N: 2}, {N: 3}, {N: 4}, {N: 5}]

describe 'Using CommonLib and CommonLib2', ->
  @beforeEach ->
    setup @, data, [p1], {}, {}, new Repository(data)
    @results = @executor.withLibrary(@lib).exec_patient_context(@patientSource)
    @commonLocalIdObject = @results.localIdPatientResultsMap['1'].Common
    @common2LocalIdObject = @results.localIdPatientResultsMap['1'].Common2

  it "should contain TheParameter localId in the localIdMap", ->
    theParameterLocalId = @lib.includes.common2.expressions.TheParameter.localId
    should.exist(@common2LocalIdObject[theParameterLocalId])

  it "should contain TwoPlusOne localId in the localIdMap", ->
    twoPlusOneLocalId = @lib.includes.common2.expressions.TwoPlusOne.localId
    should.exist(@common2LocalIdObject[twoPlusOneLocalId])

  it "should contian TwoTimesThree localId in the localIdMap", ->
    twoTimesThreeLocalId = @lib.includes.common2.expressions.TwoTimesThree.localId
    should.exist(@common2LocalIdObject[twoTimesThreeLocalId])

  it "should contain SupportLibDef localId in the localIdMap", ->
    supportLibDefLocalId = @lib.includes.common.expressions.SupportLibDef.localId
    should.exist(@commonLocalIdObject[supportLibDefLocalId])

  it "should contain SortUsingFunction localId in the localIdMap", ->
    sortUsingFunctionLocalId = @lib.includes.common2.expressions.SortUsingFunction.localId
    should.exist(@common2LocalIdObject[sortUsingFunctionLocalId])
