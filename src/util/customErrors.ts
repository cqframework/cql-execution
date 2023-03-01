/**
 * A custom error that holds additional information and a more explicit message
 * to simplify tracking down errors that occur during execution
 */
export class AnnotatedError extends Error {
  constructor(message: string, expressionName: string, libraryName: string, localId?: string) {
    super(
      `Expression ${expressionName} from CQL Library: ${libraryName} ${
        localId ? `with ELM local id: ${localId}` : ``
      } caused the following error during execution: ${message}`
    );
  }
}
