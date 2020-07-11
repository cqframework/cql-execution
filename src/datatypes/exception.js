let Exception;
module.exports.Exception = (Exception = class Exception {
  constructor(message, wrapped ) {
    this.message = message;
    this.wrapped = wrapped;
  }
});