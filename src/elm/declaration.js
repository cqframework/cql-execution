const { UnimplementedExpression } = require('./expression');

class UsingDef extends UnimplementedExpression {}

class IncludeDef extends UnimplementedExpression {}

class VersionedIdentifier extends UnimplementedExpression {}

module.exports = { UsingDef, IncludeDef, VersionedIdentifier };
