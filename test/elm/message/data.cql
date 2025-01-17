// @Test: Message
define function DoDivide(num Integer, den Integer):
  Message(num / den, den = 0, 'DivideByZero', 'Error', 'Cannot divide by zero')
define oneOverTwo: DoDivide(1, 2)
define oneOverZero: DoDivide(1, 0)

// @Test: Included
library Included
using Simple version '1.0.0'

define function DoDivide(num Integer, den Integer):
  Message(num / den, den = 0, 'DivideByZero', 'Error', 'Cannot divide by zero in included')

// @Test: Retrieve
library Retrieve
include Included called included

define oneOverTwo: included.DoDivide(1, 2)
define oneOverZero: included.DoDivide(1, 0)