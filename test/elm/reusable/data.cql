// @Test: ExpressionDef
context Patient
define Foo: 'Bar'

// @Test: ExpressionRef
define Life: 42
define Foo: Life

// @Test: FunctionDefinitions
define function "foo bar"(a Integer, b Integer) :
  a + b

define testValue: "foo bar"(1,2)

// @Test: FunctionOverloadsWithSingleArgument
define function process(a System.Integer) :
  a + 1

define function process(a System.String) :
  'Hello ' + a

define testValue1: process(1)
define testValue2: process('World')

// @Test: FunctionOverloadsWithMultipleArguments
define function process(inverse System.Boolean, a System.Integer) :
  if inverse then a - 1 else a + 1

define function process(inverse System.Boolean, a System.String) :
  if inverse then 'Goodbye ' + a else 'Hello ' + a

define testValue1: process(true, 1)
define testValue2: process(true, 'World')

// @Test: FunctionOverloadsWithDifferentNumberOfArguments
define function process(a System.String) :
  'Hello ' + a

define function process(a System.String, isSpanish System.Boolean) :
  if isSpanish then 'Hola ' + a + ' from Spain' else 'Hello ' + a + ' from England'

define testValue1: process('World')
define testValue2: process('World', true)
define testValue3: process('World', false)

// @Test: FunctionOverloadsWithArgumentsFromCustomDataModel
define function process(e Simple.Encounter) :
  'Encounter ' + e.id

define function process(c Simple.Condition) :
  'Condition ' + c.id

define testValue1: process(First([Encounter]))
define testValue2: process(First([Condition]))

// @Test: FluentFunctions
define fluent function greet(name System.String) :
  'Hello ' + name + '!'

define fluent function add(a System.Integer, b System.Integer) :
  a + b

define testValue1: 'World'.greet()
define testValue2: 1.add(2)

// @Test: FluentFunctionsOverloadCallingSelf
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


// @Test: FluentFunctionsOverloadCallingSelfFromOtherLibrary
include FluentFunctionsOverloadCallingSelf called FluentFunctionsOverloadCallingSelf

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

// @Test: CommonLib3
library Common3
using Simple version '1.0.0'
context Patient

define function ExpensiveFunction():
  First(expand Interval[1, 100000])

define ExpensiveStatement:
  ExpensiveFunction()

define ExpensiveStatementRef:
  ExpensiveStatement union 
  ExpensiveStatement union 
  ExpensiveStatement union 
  ExpensiveStatement union 
  ExpensiveStatement
