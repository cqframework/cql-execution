/**
 * Helper function to get the localId of an ELM clause by it's path under a given test name
 * statement. Returns the localId if found or null otherwise.
 */
export function getLocalIdByPath(
  data: any,
  testName: string,
  statementName: string,
  ...path: string[]
): string {
  const statementExpression = data[testName].library.statements.def.find(
    (d: any) => d.name === statementName
  ).expression;
  const expression = findExpressionByPath(statementExpression, ...path);
  if (expression?.localId) {
    return expression.localId;
  } else {
    throw new Error(`No localId found in ${statementName} at ${path.join('.')}`);
  }
}

/**
 * Helper function to navigate a structure by a given path.
 */
function findExpressionByPath(expression: any, ...path: string[]) {
  let exp = expression;
  for (const p of path) {
    if (exp[p]) {
      exp = exp[p];
    } else {
      return;
    }
  }
  return exp;
}
