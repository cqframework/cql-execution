/* eslint-disable
    no-unused-vars,
*/
// TODO: This file was created by bulk-decaffeinate.
// Fix any style issues and re-enable lint.
/*
 * decaffeinate suggestions:
 * DS101: Remove unnecessary use of Array.from
 * DS102: Remove unnecessary code created because of implicit returns
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
let Combine, Concatenate, EndsWith, Lower, Matches, PositionOf, Split, SplitOnMatches, StartsWith, Substring, Upper;
const { Expression, UnimplementedExpression } = require('./expression');
const { build } = require('./builder');

module.exports.Concatenate = (Concatenate = class Concatenate extends Expression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    const args = this.execArgs(ctx);
    if (args.some(x => x == null)) { return null; } else { return args.reduce((x, y) => x + y); }
  }
});

module.exports.Combine = (Combine = class Combine extends Expression {
  constructor(json) {
    super(...arguments);
    this.source = build(json.source);
    this.separator = build(json.separator);
  }

  exec(ctx) {
    const source = this.source.execute(ctx);
    const separator = (this.separator != null) ? this.separator.execute(ctx) : '';
    if ((source == null)) {
      return null;
    } else {
      const filteredArray = source.filter(x => (x !== null) && (x !== undefined));
      if (filteredArray.length < 1) { return null; } else { return filteredArray.join(separator); }
    }
  }
});

module.exports.Split = (Split = class Split extends Expression {
  constructor(json) {
    super(...arguments);
    this.stringToSplit = build(json.stringToSplit);
    this.separator = build(json.separator);
  }

  exec(ctx) {
    const stringToSplit = this.stringToSplit.execute(ctx);
    const separator = this.separator.execute(ctx);
    if (!((stringToSplit != null) && (separator != null))) { return null; } else { return stringToSplit.split(separator); }
  }
});

module.exports.SplitOnMatches = (SplitOnMatches = class SplitOnMatches extends Expression {
  constructor(json) {
    super(...arguments);
    this.stringToSplit = build(json.stringToSplit);
    this.separatorPattern = build(json.separatorPattern);
  }

  exec(ctx) {
    const stringToSplit = this.stringToSplit.execute(ctx);
    const separatorPattern = this.separatorPattern.execute(ctx);
    if (!((stringToSplit != null) && (separatorPattern != null))) { return null; } else { return stringToSplit.split(new RegExp(separatorPattern)); }
  }
});

// Length is completely handled by overloaded#Length

module.exports.Upper = (Upper = class Upper extends Expression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    const arg = this.execArgs(ctx);
    if (arg != null) { return arg.toUpperCase(); } else { return null; }
  }
});

module.exports.Lower = (Lower = class Lower extends Expression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    const arg = this.execArgs(ctx);
    if (arg != null) { return arg.toLowerCase(); } else { return null; }
  }
});

// Indexer is completely handled by overloaded#Indexer

module.exports.PositionOf = (PositionOf = class PositionOf extends Expression {
  constructor(json) {
    super(...arguments);
    this.pattern = build(json.pattern);
    this.string = build(json.string);
  }

  exec(ctx) {
    const pattern = this.pattern.execute(ctx);
    const string = this.string.execute(ctx);
    if (!((pattern != null) && (string != null))) { return null; } else { return string.indexOf(pattern); }
  }
});

module.exports.Matches = (Matches = class Matches extends Expression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    const [string, pattern] = Array.from(this.execArgs(ctx));
    if (!((string != null) && (pattern != null))) { return null; }
    if (string.match(new RegExp(pattern))) { return true; } else { return false; }
  }
});

module.exports.Substring = (Substring = class Substring extends Expression {
  constructor(json) {
    super(...arguments);
    this.stringToSub = build(json.stringToSub);
    this.startIndex = build(json.startIndex);
    this.length = build(json['length']);
  }

  exec(ctx) {
    const stringToSub = this.stringToSub.execute(ctx);
    const startIndex = this.startIndex.execute(ctx);
    const length = (this.length != null) ? this.length.execute(ctx) : null;
    // According to spec: If stringToSub or startIndex is null, or startIndex is out of range, the result is null.
    if ((stringToSub == null) || (startIndex == null) || (startIndex < 0) || (startIndex >= stringToSub.length)) {
      return null;
    } else if (length != null) {
      return stringToSub.substr(startIndex, length);
    } else {
      return stringToSub.substr(startIndex);
    }
  }
});

module.exports.StartsWith = (StartsWith = class StartsWith extends Expression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    const args = this.execArgs(ctx);
    if (args.some(x => x == null)) { return null; } else { return args[0].slice(0, args[1].length) === args[1]; }
  }
});

module.exports.EndsWith = (EndsWith = class EndsWith extends Expression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    const args = this.execArgs(ctx);
    if (args.some(x => x == null)) { return null; } else { return (args[1] === '') || (args[0].slice(-args[1].length) === args[1]); }
  }
});