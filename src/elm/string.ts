import { Expression } from './expression';
import { Context } from '../runtime/context';
import { build } from './builder';

export class Concatenate extends Expression {
  constructor(json: any) {
    super(json);
  }

  async exec(ctx: Context) {
    const args = await this.execArgs(ctx);
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

  async exec(ctx: Context) {
    const source = await this.source.execute(ctx);
    const separator = this.separator != null ? await this.separator.execute(ctx) : '';
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

  async exec(ctx: Context) {
    const stringToSplit = await this.stringToSplit.execute(ctx);
    const separator = await this.separator.execute(ctx);
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

  async exec(ctx: Context) {
    const stringToSplit = await this.stringToSplit.execute(ctx);
    const separatorPattern = await this.separatorPattern.execute(ctx);
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

  async exec(ctx: Context) {
    const arg = await this.execArgs(ctx);
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

  async exec(ctx: Context) {
    const arg = await this.execArgs(ctx);
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

  async exec(ctx: Context) {
    const pattern = await this.pattern.execute(ctx);
    const string = await this.string.execute(ctx);
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

  async exec(ctx: Context) {
    const pattern = await this.pattern.execute(ctx);
    const string = await this.string.execute(ctx);
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

  async exec(ctx: Context) {
    const [string, pattern] = await this.execArgs(ctx);
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

  async exec(ctx: Context) {
    const stringToSub = await this.stringToSub.execute(ctx);
    const startIndex = await this.startIndex.execute(ctx);
    const length = this.length != null ? await this.length.execute(ctx) : null;
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

  async exec(ctx: Context) {
    const args = await this.execArgs(ctx);
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

  async exec(ctx: Context) {
    const args = await this.execArgs(ctx);
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

  async exec(ctx: Context) {
    const args = await this.execArgs(ctx);
    if (args.some((x: any) => x == null)) {
      return null;
    } else {
      return args[0].replace(new RegExp(args[1], 'g'), args[2].replace(/\\\$/g, '$$'));
    }
  }
}
