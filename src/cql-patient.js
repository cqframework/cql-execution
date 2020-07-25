/* eslint-disable
    no-unused-vars,
*/
// TODO: This file was created by bulk-decaffeinate.
// Fix any style issues and re-enable lint.
/*
 * decaffeinate suggestions:
 * DS101: Remove unnecessary use of Array.from
 * DS102: Remove unnecessary code created because of implicit returns
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const DT = require('./datatypes/datatypes');

class Record {
  constructor(json) {
    this.json = json;
    this.id = this.json.id;
  }

  _recursiveGet(field) {
    if (field != null && field.indexOf('.') >= 0) {
      const [root, rest] =  field.split('.', 2);
      return new Record(this._recursiveGet(root))._recursiveGet(rest);
    }
    return this.json[field];
  }

  get(field) {
    // the model should return the correct type for the field. For this simple model example,
    // we just cheat and use the shape of the value to determine it. Real implementations should
    // have a more sophisticated approach
    const value = this._recursiveGet(field);
    if (typeof value === 'string' && /\d{4}-\d{2}-\d{2}(T[\d\-.]+)?/.test(value)) { return this.getDate(field); }
    if (value != null && typeof value === 'object' && value.code != null && value.system != null) { return this.getCode(field); }
    if (value != null && typeof value === 'object' && (value.low != null || value.high != null)) { return this.getInterval(field); }
    return value;
  }

  getId() {
    return this.id;
  }

  getDate(field) {
    const val = this._recursiveGet(field);
    if (val != null) { return DT.DateTime.parse(val); } else { return null; }
  }

  getInterval(field) {
    const val = this._recursiveGet(field);
    if (val != null && typeof val === 'object') {
      const low = val.low != null ? DT.DateTime.parse(val.low) : null;
      const high = val.high != null ? DT.DateTime.parse(val.high) : null;
      return new DT.Interval(low, high);
    }
  }

  getDateOrInterval(field) {
    const val = this._recursiveGet(field);
    if (val != null && typeof val === 'object') { return this.getInterval(field); } else { return this.getDate(field); }
  }

  getCode(field) {
    const val = this._recursiveGet(field);
    if (val != null && typeof val === 'object') { return new DT.Code(val.code, val.system, val.version); }
  }
}

class Patient extends Record {
  constructor(json) {
    super(json);
    this.name = json.name;
    this.gender = json.gender;
    this.birthDate = json.birthDate != null ? DT.DateTime.parse(json.birthDate) : undefined;
    this.records = {};
    (json.records || []).forEach(r => {
      if (this.records[r.recordType] == null) { this.records[r.recordType] = []; }
      this.records[r.recordType].push(new Record(r));
    });
  }

  findRecords(profile) {
    if (profile == null) {
      return [];
    }
    const recordType = profile.match(/(\{https:\/\/github\.com\/cqframework\/cql-execution\/simple\})?(.*)/)[2];
    if (recordType === 'Patient') { return [this]; } else { return this.records[recordType] || []; }
  }
}

class PatientSource {
  constructor(patients) {
    this.patients = patients;
    this.nextPatient();
  }

  currentPatient() {
    return this.current;
  }

  nextPatient() {
    const currentJSON = this.patients.shift();
    this.current = currentJSON ? new Patient(currentJSON) : undefined;
    return this.current;
  }
}

module.exports.Patient = Patient;
module.exports.PatientSource = PatientSource;
