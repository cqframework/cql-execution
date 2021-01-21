const { Expression } = require('./expression');
const { build } = require('./builder');

class Concatenate extends Expression {
  constructor(json) {
    super(json);
  }

  exec(ctx) {
    const args = this.execArgs(ctx);
    if (args.some(x => x == null)) {
      return null;
    } else {
      return args.reduce((x, y) => x + y);
    }
  }
}

class Combine extends Expression {
  constructor(json) {
    super(json);
    this.source = build(json.source);
    this.separator = build(json.separator);
  }

  exec(ctx) {
    const source = this.source.execute(ctx);
    const separator = this.separator != null ? this.separator.execute(ctx) : '';
    if (source == null) {
      return null;
    } else {
      const filteredArray = source.filter(x => x != null);
      if (filteredArray.length === 0) {
        return null;
      } else {
        return filteredArray.join(separator);
      }
    }
  }
}

class Split extends Expression {
  constructor(json) {
    super(json);
    this.stringToSplit = build(json.stringToSplit);
    this.separator = build(json.separator);
  }

  exec(ctx) {
    const stringToSplit = this.stringToSplit.execute(ctx);
    const separator = this.separator.execute(ctx);
    if (stringToSplit && separator) {
      return stringToSplit.split(separator);
    }
    return stringToSplit ? [stringToSplit] : null;
  }
}

class SplitOnMatches extends Expression {
  constructor(json) {
    super(json);
    this.stringToSplit = build(json.stringToSplit);
    this.separatorPattern = build(json.separatorPattern);
  }

  exec(ctx) {
    const stringToSplit = this.stringToSplit.execute(ctx);
    const separatorPattern = this.separatorPattern.execute(ctx);
    if (stringToSplit && separatorPattern) {
      return stringToSplit.split(new RegExp(separatorPattern));
    }
    return stringToSplit ? [stringToSplit] : null;
  }
}

// Length is completely handled by overloaded#Length

class Upper extends Expression {
  constructor(json) {
    super(json);
  }

  exec(ctx) {
    const arg = this.execArgs(ctx);
    if (arg != null) {
      return arg.toUpperCase();
    } else {
      return null;
    }
  }
}

class Lower extends Expression {
  constructor(json) {
    super(json);
  }

  exec(ctx) {
    const arg = this.execArgs(ctx);
    if (arg != null) {
      return arg.toLowerCase();
    } else {
      return null;
    }
  }
}

// Indexer is completely handled by overloaded#Indexer

class PositionOf extends Expression {
  constructor(json) {
    super(json);
    this.pattern = build(json.pattern);
    this.string = build(json.string);
  }

  exec(ctx) {
    const pattern = this.pattern.execute(ctx);
    const string = this.string.execute(ctx);
    if (pattern == null || string == null) {
      return null;
    } else {
      return string.indexOf(pattern);
    }
  }
}

class LastPositionOf extends Expression {
  constructor(json) {
    super(json);
    this.pattern = build(json.pattern);
    this.string = build(json.string);
  }

  exec(ctx) {
    const pattern = this.pattern.execute(ctx);
    const string = this.string.execute(ctx);
    if (pattern == null || string == null) {
      return null;
    } else {
      return string.lastIndexOf(pattern);
    }
  }
}

class Matches extends Expression {
  constructor(json) {
    super(json);
  }

  exec(ctx) {
    const [string, pattern] = this.execArgs(ctx);
    if (string == null || pattern == null) {
      return null;
    }

    return new RegExp('^' + pattern + '$').test(string);
  }
}

class Substring extends Expression {
  constructor(json) {
    super(json);
    this.stringToSub = build(json.stringToSub);
    this.startIndex = build(json.startIndex);
    this.length = build(json['length']);
  }

  exec(ctx) {
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

class StartsWith extends Expression {
  constructor(json) {
    super(json);
  }

  exec(ctx) {
    const args = this.execArgs(ctx);
    if (args.some(x => x == null)) {
      return null;
    } else {
      return args[0].slice(0, args[1].length) === args[1];
    }
  }
}

class EndsWith extends Expression {
  constructor(json) {
    super(json);
  }

  exec(ctx) {
    const args = this.execArgs(ctx);
    if (args.some(x => x == null)) {
      return null;
    } else {
      return args[1] === '' || args[0].slice(-args[1].length) === args[1];
    }
  }
}

module.exports = {
  Combine,
  Concatenate,
  EndsWith,
  LastPositionOf,
  Lower,
  Matches,
  PositionOf,
  Split,
  SplitOnMatches,
  StartsWith,
  Substring,
  Upper
};
