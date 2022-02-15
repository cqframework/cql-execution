import { Record } from '../cql-patient';

export interface DataProvider {
  patients: any[];
  currentPatient(): any;
  nextPatient(): any;
}

export interface RecordObject {
  [recordType: string]: Record[];
}
