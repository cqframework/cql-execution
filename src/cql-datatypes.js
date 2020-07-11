const DT = require("./datatypes/datatypes");

for (let element of Object.keys(DT)) {
  module.exports[element] = DT[element];
}
