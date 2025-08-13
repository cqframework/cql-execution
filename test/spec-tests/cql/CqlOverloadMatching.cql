library OverloadMatching version '1.4.0'
using QUICK version '3.3.0'
context Patient

define "OverloadMatching": Tuple{
  "SimpleOverloadMatching": Tuple{
    skipped: 'Test <library> tag not supported in cql-execution test runner'
    /*
    library: library SimpleOverloadMatching version '1.0.0'

                define function A(foo Decimal): 'DecimalOverload'
                define function A(foo Integer): 'IntegerOverload'

                define output: A(1.0),
    output: 'DecimalOverload'
    */  }
}
