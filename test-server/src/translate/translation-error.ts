// Normally the translator returns errors as annotations,
// throwing a JS Error allows us to simplify the logic
export class TranslationError extends Error {
  constructor(message = 'CQL translation failed') {
    super(message);
    this.name = 'TranslationError';
  }
}
