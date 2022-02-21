import { Expression } from './expression';
import { Context } from '../runtime/context';
import { build } from './builder';

export class Concatenate extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
    const args = this.execArgs(ctx);
    if (args.some((x: any) => x == null)) {
      return null;
    } else {
      return args.reduce((x: any, y: any) => x + y);
    }
  }
}

export class Combine extends Expression {
  source: any;
  separator: any;

  constructor(json: any) {
    super(json);
    this.source = build(json.source);
    this.separator = build(json.separator);
  }

  exec(ctx: Context) {
    const source = this.source.execute(ctx);
    const separator = this.separator != null ? this.separator.execute(ctx) : '';
    if (source == null) {
      return null;
    } else {
      const filteredArray = source.filter((x: any) => x != null);
      if (filteredArray.length === 0) {
        return null;
      } else {
        return filteredArray.join(separator);
      }
    }
  }
}

export class Split extends Expression {
  stringToSplit: any;
  separator: any;

  constructor(json: any) {
    super(json);
    this.stringToSplit = build(json.stringToSplit);
    this.separator = build(json.separator);
  }

  exec(ctx: Context) {
    const stringToSplit = this.stringToSplit.execute(ctx);
    const separator = this.separator.execute(ctx);
    if (stringToSplit && separator) {
      return stringToSplit.split(separator);
    }
    return stringToSplit ? [stringToSplit] : null;
  }
}

export class SplitOnMatches extends Expression {
  stringToSplit: any;
  separatorPattern: any;

  constructor(json: any) {
    super(json);
    this.stringToSplit = build(json.stringToSplit);
    this.separatorPattern = build(json.separatorPattern);
  }

  exec(ctx: Context) {
    const stringToSplit = this.stringToSplit.execute(ctx);
    const separatorPattern = this.separatorPattern.execute(ctx);
    if (stringToSplit && separatorPattern) {
      return stringToSplit.split(new RegExp(separatorPattern));
    }
    return stringToSplit ? [stringToSplit] : null;
  }
}

// Length is completely handled by overloaded#Length

export class Upper extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
    const arg = this.execArgs(ctx);
    if (arg != null) {
      return arg.toUpperCase();
    } else {
      return null;
    }
  }
}

export class Lower extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
    const arg = this.execArgs(ctx);
    if (arg != null) {
      return arg.toLowerCase();
    } else {
      return null;
    }
  }
}

// Indexer is completely handled by overloaded#Indexer

export class PositionOf extends Expression {
  pattern: any;
  string: any;

  constructor(json: any) {
    super(json);
    this.pattern = build(json.pattern);
    this.string = build(json.string);
  }

  exec(ctx: Context) {
    const pattern = this.pattern.execute(ctx);
    const string = this.string.execute(ctx);
    if (pattern == null || string == null) {
      return null;
    } else {
      return string.indexOf(pattern);
    }
  }
}

export class LastPositionOf extends Expression {
  pattern: any;
  string: any;

  constructor(json: any) {
    super(json);
    this.pattern = build(json.pattern);
    this.string = build(json.string);
  }

  exec(ctx: Context) {
    const pattern = this.pattern.execute(ctx);
    const string = this.string.execute(ctx);
    if (pattern == null || string == null) {
      return null;
    } else {
      return string.lastIndexOf(pattern);
    }
  }
}

export class Matches extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
    const [string, pattern] = this.execArgs(ctx);
    if (string == null || pattern == null) {
      return null;
    }

    return new RegExp('^' + pattern + '$').test(string);
  }
}

export class Substring extends Expression {
  stringToSub: any;
  startIndex: any;
  length: any;

  constructor(json: any) {
    super(json);
    this.stringToSub = build(json.stringToSub);
    this.startIndex = build(json.startIndex);
    this.length = build(json['length']);
  }

  exec(ctx: Context) {
    const stringToSub = this.stringToSub.execute(ctx);
    const startIndex = this.startIndex.execute(ctx);
    const length = this.length != null ? this.length.execute(ctx) : null;
    // According to spec: If stringToSub or startIndex is null, or startIndex is out of range, the result is null.
    if (
      stringToSub == null ||
      startIndex == null ||
      startIndex < 0 ||
      startIndex >= stringToSub.length
    ) {
      return null;
    } else if (length != null) {
      return stringToSub.substr(startIndex, length);
    } else {
      return stringToSub.substr(startIndex);
    }
  }
}

export class StartsWith extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
    const args = this.execArgs(ctx);
    if (args.some((x: any) => x == null)) {
      return null;
    } else {
      return args[0].slice(0, args[1].length) === args[1];
    }
  }
}

export class EndsWith extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
    const args = this.execArgs(ctx);
    if (args.some((x: any) => x == null)) {
      return null;
    } else {
      return args[1] === '' || args[0].slice(-args[1].length) === args[1];
    }
  }
}

export class ReplaceMatches extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
    const args = this.execArgs(ctx);
    if (args.some((x: any) => x == null)) {
      return null;
    } else {
      return args[0].replace(new RegExp(args[1], 'g'), args[2]);
    }
  }
}
