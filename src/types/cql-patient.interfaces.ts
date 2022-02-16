/*
 * Iterator for the patients provided to the execution engine
 */
export interface DataProvider {
  currentPatient(): any;
  nextPatient(): any;
}

/*
 * Structure of a Record
 */
export interface RecordObject {
  get(field: any): any;
  getId(): any;
  getCode(field: any): any;
  getDate(field: any): any;
  getDateOrInterval(field: any): any;
}

/*
 * Patient data object that implements logic for searching for records based on the Patient
 */
export interface PatientObject {
  findRecords(profile: string | null): RecordObject[];
}
