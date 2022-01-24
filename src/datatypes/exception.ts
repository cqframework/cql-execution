export class Exception {
  message?: string;
  wrapped?: any;

  constructor(message?: string, wrapped?: any) {
    this.message = message;
    this.wrapped = wrapped;
  }
}
