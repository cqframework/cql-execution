export class Exception {
  constructor(public message?: string, public wrapped?: any) {
    this.message = message;
    this.wrapped = wrapped;
  }
}
