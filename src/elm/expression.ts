import { Context } from '../runtime/context';
import { typeIsArray } from '../util/util';
import { AnnotatedError } from '../util/customErrors';
import { build } from './builder';
import { Library } from './library';

export class Expression {
  localId?: string;
  locator?: string;
  arg?: any;
  args?: any[];

  constructor(json: any) {
    if (json.operand != null) {
      const op = build(json.operand);
      if (typeIsArray(json.operand)) {
        this.args = op;
      } else {
        this.arg = op;
      }
    }

    if (json.localId != null) {
      this.localId = json.localId;
    }

    if (json.locator != null) {
      this.locator = json.locator;
    }
  }

  execute(ctx: Context) {
    try {
      if (this.localId != null) {
        // Store the localId and result on the root context of this library
        const execValue = this.exec(ctx);
        ctx.rootContext().setLocalIdWithResult(this.localId, execValue);
        return execValue;
      } else {
        return this.exec(ctx);
      }
    } catch (e: any) {
      if (e instanceof AnnotatedError) {
        throw e;
      }
      const libraryIdentifier = this.getRecursiveLibraryIdentifier(ctx);
      throw new AnnotatedError(
        e,
        this.constructor.name,
        libraryIdentifier,
        this.localId,
        this.locator
      );
    }
  }

  exec(_ctx: Context): any {
    return this;
  }

  execArgs(ctx: Context) {
    if (this.args != null) {
      return this.args.map(arg => arg.execute(ctx));
    } else if (this.arg != null) {
      return this.arg.execute(ctx);
    } else {
      return null;
    }
  }

  /**
   * Function used in error reporting during execution. Retrieves the source library from
   * the context if it exists, or recursively traverses the context's parents until a source
   * library identifier and version are found.
   */
  getRecursiveLibraryIdentifier(ctx: Context): string {
    const identifier = (ctx as Context & { library?: Library }).library?.source?.library
      ?.identifier;
    if (identifier) {
      return `${identifier.id}${identifier.version ? `|${identifier.version}` : ''}`;
    } else {
      return ctx.parent ? this.getRecursiveLibraryIdentifier(ctx.parent) : '(unknown)';
    }
  }
}

export class UnimplementedExpression extends Expression {
  json: any;

  constructor(json: any) {
    super(json);
    this.json = json;
  }

  exec(_ctx: Context) {
    throw new Error(`Unimplemented Expression: ${this.json.type}`);
  }
}
