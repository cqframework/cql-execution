let IncludeDef, UsingDef, VersionedIdentifier;
const { Expression, UnimplementedExpression } = require('./expression');

module.exports.UsingDef = (UsingDef = class UsingDef extends UnimplementedExpression {});

module.exports.IncludeDef = (IncludeDef = class IncludeDef extends UnimplementedExpression {});

module.exports.VersionedIdentifier = (VersionedIdentifier = class VersionedIdentifier extends UnimplementedExpression {});
