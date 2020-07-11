const logic = require('./logic');
const clinical = require('./clinical');
const uncertainty = require('./uncertainty');
const datetime = require('./datetime');
const interval = require('./interval');
const quantity = require('./quantity');
const ratio = require('./ratio');

const libs = [logic, clinical, uncertainty, datetime, interval, quantity, ratio];
for (let lib of libs) {
  for (let element of Object.keys(lib)) {
    module.exports[element] = lib[element];
  }
}
