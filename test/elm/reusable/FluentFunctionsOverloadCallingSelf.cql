library FluentFunctionsOverloadCallingSelf version '1'

define fluent function targetMatches(option Tuple { option System.String }, target Tuple { id System.String }):
  target.id = option.option

define fluent function targetMatches(option Tuple { option System.String }, targetId System.String):
  targetId = option.option

define fluent function targetMatches(options List<Tuple { option System.String }>, target Tuple { id System.String }):
  exists (options O where O.targetMatches(target))

define fluent function targetMatches(options List<Tuple { option System.String }>, targetId System.String):
  exists (options O where O.targetMatches(targetId))

define testOptionsList:
  {
    {
      option: 'test123'
    },
    {
      option: 'test341'
    }
  }

define matchTestFalse: "testOptionsList".targetMatches({id: 'test789'})
define matchTestTrue: "testOptionsList".targetMatches({id: 'test123'})
define matchTestsFalse: exists (({ {id: 'test789'}, {id: 'test719'} }) T
  where "testOptionsList".targetMatches(T))
define matchTestsTrue: exists (({ {id: 'test341'}, {id: 'test719'} }) T
  where "testOptionsList".targetMatches(T))