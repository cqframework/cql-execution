import * as DT from './datatypes/datatypes';
import { DataProvider, NamedTypeSpecifier, PatientObject, RecordObject } from './types';

export class Record implements RecordObject {
  json: any;
  id: string;

  constructor(json: any) {
    this.json = json;
    this.id = this.json.id;
  }

  _is(typeSpecifier: NamedTypeSpecifier) {
    return this._typeHierarchy().some(
      t => t.type === typeSpecifier.type && t.name == typeSpecifier.name
    );
  }

  _typeHierarchy(): NamedTypeSpecifier[] {
    return [
      {
        name: `{https://github.com/cqframework/cql-execution/simple}${this.json.recordType}`,
        type: 'NamedTypeSpecifier'
      },
      {
        name: '{https://github.com/cqframework/cql-execution/simple}Record',
        type: 'NamedTypeSpecifier'
      },
      { name: '{urn:hl7-org:elm-types:r1}Any', type: 'NamedTypeSpecifier' }
    ];
  }

  _recursiveGet(field: any): any {
    if (field != null && field.indexOf('.') >= 0) {
      const [root, rest] = field.split('.', 2);
      return new Record(this._recursiveGet(root))._recursiveGet(rest);
    }
    return this.json[field];
  }

  get(field: any) {
    // the model should return the correct type for the field. For this simple model example,
    // we just cheat and use the shape of the value to determine it. Real implementations should
    // have a more sophisticated approach
    const value = this._recursiveGet(field);
    if (typeof value === 'string' && /\d{4}-\d{2}-\d{2}(T[\d\-.]+)?/.test(value)) {
      return this.getDate(field);
    }
    if (value != null && typeof value === 'object' && value.code != null && value.system != null) {
      return this.getCode(field);
    }
    if (value != null && typeof value === 'object' && (value.low != null || value.high != null)) {
      return this.getInterval(field);
    }
    return value;
  }

  getId() {
    return this.id;
  }

  getDate(field: any) {
    const val = this._recursiveGet(field);
    if (val != null) {
      return DT.DateTime.parse(val);
    } else {
      return null;
    }
  }

  getInterval(field: any) {
    const val = this._recursiveGet(field);
    if (val != null && typeof val === 'object') {
      const low = val.low != null ? DT.DateTime.parse(val.low) : null;
      const high = val.high != null ? DT.DateTime.parse(val.high) : null;
      return new DT.Interval(low, high);
    }
  }

  getDateOrInterval(field: any) {
    const val = this._recursiveGet(field);
    if (val != null && typeof val === 'object') {
      return this.getInterval(field);
    } else {
      return this.getDate(field);
    }
  }

  getCode(field: any) {
    const val = this._recursiveGet(field);
    if (val != null && typeof val === 'object') {
      return new DT.Code(val.code, val.system, val.version);
    }
  }
}

export class Patient extends Record implements PatientObject {
  name?: string;
  gender?: string;
  birthDate?: DT.DateTime | null;
  records: { [recordType: string]: Record[] };

  constructor(json: any) {
    super(json);
    this.name = json.name;
    this.gender = json.gender;
    this.birthDate = json.birthDate != null ? DT.DateTime.parse(json.birthDate) : undefined;
    this.records = {};
    (json.records || []).forEach((r: any) => {
      if (this.records[r.recordType] == null) {
        this.records[r.recordType] = [];
      }
      this.records[r.recordType].push(new Record(r));
    });
  }

  findRecords(profile: string | null): Record[] {
    if (profile == null) {
      return [];
    }

    const match = profile.match(
      /(\{https:\/\/github\.com\/cqframework\/cql-execution\/simple\})?(.*)/
    );

    if (match == null) return [];

    const recordType = match[2];
    if (recordType === 'Patient') {
      return [this];
    } else {
      return this.records[recordType] || [];
    }
  }
}

export class PatientSource implements DataProvider {
  patients: any[];
  current?: Patient;

  constructor(patients: any) {
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
