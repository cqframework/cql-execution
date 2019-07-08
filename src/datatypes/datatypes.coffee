logic = require './logic'
clinical = require './clinical'
uncertainty = require './uncertainty'
datetime = require './datetime'
interval = require './interval'
quantity = require './quantity'
ratio = require './ratio'

libs = [logic, clinical, uncertainty, datetime, interval, quantity, ratio]
for lib in libs
  for element in Object.keys(lib)
    module.exports[element] = lib[element]
