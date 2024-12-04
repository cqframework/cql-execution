// NOTE: This library must be DUPLICATED in the data.cql file as well!
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
  