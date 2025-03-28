library FluentFunctionsOverloadCallingSelf

define fluent function targetMatches(option Tuple { option System.String }, target Tuple { id System.String }):
  target.id = option.option

define fluent function targetMatches(option Tuple { option System.String }, targetId System.String):
  targetId = option.option

define fluent function targetMatches(targetMatches List<Tuple { option System.String }>, target Tuple { id System.String }):
  exists (targetMatches O where O.targetMatches(target))

define fluent function targetMatches(targetMatches List<Tuple { option System.String }>, targetId System.String):
  exists (targetMatches O where O.targetMatches(targetId))

define testOptionsList:
  {
    {
      option: 'test123'
    },
    {
      option: 'test341'
    }
  }

define matchTestFalse: First("testOptionsList").targetMatches('test789')
define matchTestTrue: First("testOptionsList").targetMatches('test123')

define matchTestsFalse: exists (({'test789', 'test719' }) T
  where First("testOptionsList").targetMatches(T))
define matchTestsTrue: exists (({'test341', 'test719' }) T
  where Last("testOptionsList").targetMatches(T))

define matchTestCallSelfFalse: "testOptionsList".targetMatches({id: 'test789'})
define matchTestCallSelfTrue: "testOptionsList".targetMatches({id: 'test123'})

define matchTestsCallSelfFalse: exists (({ {id: 'test789'}, {id: 'test719'} }) T
  where "testOptionsList".targetMatches(T))
define matchTestsCallSelfTrue: exists (({ {id: 'test341'}, {id: 'test719'} }) T
  where "testOptionsList".targetMatches(T))