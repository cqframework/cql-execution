library Included
using Simple version '1.0.0'

define function DoDivide(num Integer, den Integer):
  Message(num / den, den = 0, 'DivideByZero', 'Error', 'Cannot divide by zero in included')