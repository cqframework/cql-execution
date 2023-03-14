/**
 * A custom error that holds additional information and a more explicit message
 * to simplify tracking down errors that occur during execution
 */
export class AnnotatedError extends Error {
  // TODO: need to explicitly specify cause in TypeScript versions < 4.7
  // Remove this when TypeScript is upgraded, and add the cause directly to the `super` call
  cause: Error;

  constructor(
    originalError: Error,
    message: string,
    public expressionName: string,
    public libraryName: string,
    public localId?: string,
    public locator?: string
  ) {
    super(
      `Encountered unexpected error during execution.\n\n\tError Message:\t${message}\n\tCQL Library:\t${libraryName}\n\tExpression:\t${expressionName}${
        localId ? `\n\tELM Local ID:\t${localId}` : ''
      }${locator ? `\n\tCQL Locator:\t${locator}` : ''}\n`
    );

    this.cause = originalError;
  }
}
