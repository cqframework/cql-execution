/**
 * A custom error that holds additional information and a more explicit message
 * to simplify tracking down errors that occur during execution
 */
export class AnnotatedError extends Error {
  constructor(message: string, expressionName: string, libraryName: string, localId?: string) {
    super(
      `Encountered unexpected error during execution.\n\n\tError Message:\t${message}\n\tCQL Library:\t${libraryName}\n\tExpression:\t${expressionName}${
        localId ? `\n\tELM Local ID:\t${localId}` : ``
      }\n`
    );
  }
}
