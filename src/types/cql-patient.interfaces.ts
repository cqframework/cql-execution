import { Code, ValueSet } from '../datatypes/clinical';
import { Interval } from '../datatypes/interval';
import { AnyTypeSpecifier } from './type-specifiers.interfaces';

/*
 * Iterator for the patients provided to the execution engine
 */
export interface DataProvider {
  currentPatient(): PatientObject | undefined | Promise<PatientObject | undefined>;
  nextPatient(): PatientObject | undefined | Promise<PatientObject | undefined>;
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
  _is?(typeSpecifier: AnyTypeSpecifier): boolean;
  _typeHierarchy?(): AnyTypeSpecifier[];
}

/*
 * Structure of the information about an ELM retrieve
 * Passed back to DataProviders to allow for more advanced record filtering
 */
export interface RetrieveDetails {
  datatype: string;
  templateId?: string;
  codeProperty?: string;
  codes?: Code[] | ValueSet;
  dateProperty?: string;
  dateRange?: Interval;
}

/*
 * Patient data object that implements logic for searching for records based on the Patient
 */
export interface PatientObject extends RecordObject {
  findRecords(
    profile: string | null,
    retrieveDetails?: RetrieveDetails
  ): RecordObject[] | Promise<RecordObject[]>;
}
